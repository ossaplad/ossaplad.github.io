var authenticator = new au.com.vodafone.aaa.Authenticator();
var aaaBaseUrl = document.getElementById("aaa-base-url").value;
var selfServUrl = document.getElementById("aaa-selfser-url").value;
var signinButton;

var instigator;
var doneflag = false;
var loginErrorObj;
var offDivObj;
var onDivObj;
var loginFormObj;
var userNameObj;
var passowrdObj;

function updateButtonState() {
           signinButton.disabled = !authenticator.canLogIn();
    if(authenticator.canLogIn())
    	unsetDisabled();
    else
    	setDisabled();
}

function enableButtonState(){
	signinButton.disabled = false;
	 
	 unsetDisabled();
}


function startLazy() {
	if (authenticator != undefined)
		authenticator.start(au.com.vodafone.aaa.StartMode.Lazy);
}

function setFocus(e) {
		
if (!doneflag) {
	if (!e) {
			e = window.event;
		}
		var target = e ? e.target : window.event.srcElement;

		// IE9 & Other Browsers
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}

		setTimeout(function() {	target.focus()});
		doneflag = true;
}
}

function setMessage(e){
	document.getElementById("txtUserID").className = "text-input input-error";
	document.getElementById("txtPassword").className = "text-input input-error";
		if(e.messages!= undefined)
			loginErrorObj.innerHTML = "<div class=\"spl-error active\">" + e.messages.join() + "</div>";
}

function setStringMessage(message){
	loginErrorObj.style.display = "block";
	enableButtonState();
	if(message!= undefined)
		loginErrorObj.innerHTML = "<div class=\"spl-error active\">" + message + "</div>";
}

function startFull() {

	if (authenticator.getState() == au.com.vodafone.aaa.AuthenticatorState.Lazy) {
		authenticator.start(au.com.vodafone.aaa.StartMode.Login);
	}
}

function logout() {
	authenticator.logout();
	onDivObj.style.display = "none";
	loginErrorObj.innerHTML = "";
	loginErrorObj.style.display = "none";
}


//Set up the listener to handle authentication events.
function vcaListener(evt) {

	console.log("code:"+evt.code + " event.phase:" + evt.phase);

	switch (evt.code) {
	
	case au.com.vodafone.aaa.EventCode.NotLoggedIn:
		/*if (evt.messages != undefined && evt.phase!= au.com.vodafone.aaa.EventPhase.Start) {
			setMessage(evt);
		}*/
		offDivObj.style.display = "block";
		document.getElementById("txtUserID").className = "text-input";
		document.getElementById("txtPassword").className = "text-input";
		break;
	case au.com.vodafone.aaa.EventCode.LoggedIn:
		offDivObj.style.display = "none";
		onDivObj.style.display = "block";
		document.getElementById("txtUserID").className = "text-input";
		document.getElementById("txtPassword").className = "text-input";
		if (evt.phase != au.com.vodafone.aaa.EventPhase.Start)
			window.location.href = aaaBaseUrl;
		break;
	case au.com.vodafone.aaa.EventCode.StateChange:
		if (evt.messages != undefined)
			setMessage(evt);
		if(evt.newState!=au.com.vodafone.aaa.AuthenticatorState.Locked)
			updateButtonState();
		else
			{
				enableButtonState();
				startLazy();
			}
		break;
	case au.com.vodafone.aaa.EventCode.PasswordChangeRequired:
		authenticator.goToExternalChangePassword();
		break;
	case au.com.vodafone.aaa.EventCode.LoggedInUnregistered:
		offDivObj.style.display = "block";
		setStringMessage("You need to register with My Vodafone to continue.");
		authenticator.logout();
		break;
	default:
		if (evt.messages != undefined){
			setMessage(evt);
		}
			offDivObj.style.display = "block";
		break;
	}
	if(evt.phase!= au.com.vodafone.aaa.EventPhase.Start && loginErrorObj.innerHTML!="")
		loginErrorObj.style.display = "block";
}

function initialiseMMOnSubmitHandlers() {
	
	// Set up the login form onsubmit handler.
	loginFormObj.onsubmit = function() {
		authenticator.login(userNameObj.value,
				passowrdObj.value);

		return false;
	};
}

function setDisabled () {
	if (window.attachEvent && !window.addEventListener) {
	        if (signinButton.disabled) {
	           signinButton.removeAttribute("disabled");
	         signinButton.setAttribute("onclick", 'javascript: return false;');
	            signinButton.className = "disabled " + signinButton.className;
	        }
	}
}

function unsetDisabled () {
	if (window.attachEvent && !window.addEventListener) {
	        if (signinButton.className.indexOf('disabled') > -1) {
	             signinButton.className = signinButton.className.replace('disabled', '');
	           signinButton.removeAttribute("onclick");
	        }
	}
}

function initialiseOnSubmitHandlers() {

signinButton=document.getElementById("signIn");
	setDisabled();

	loginErrorObj = document.getElementById("loginError");
	
	offDivObj = document.getElementById("offdiv");
	onDivObj = document.getElementById("ondiv");
	
	loginFormObj = document.getElementById("spl-login-form");
	
	userNameObj = document.getElementById("txtUserID");
	passowrdObj = document.getElementById("txtPassword");
	
	startLazy();

	// Set up the listeners
	if (loginFormObj != null) {
		userNameObj.value = "";
		passowrdObj.value = "";
		authenticator.addListener(vcaListener);
	}

	// Initialise the onsubmit handlers
	if (loginFormObj != null)
		initialiseMMOnSubmitHandlers();
	
}