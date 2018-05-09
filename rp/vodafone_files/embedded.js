/**
 * This script contains an authenticator which allows application developers to embed
 * a username/password login form into their applications. It provides a mechanism for
 * the outer page to be informed of specific authentication events, such as:
 *
 * - User logged in successfully.
 * - User credentials were incorrect.
 * - User is unregistered (and needs to go through the registration process).
 * - User's password needs changing.
 *
 * The authenticator also provides a mechanism for users to request and validate a
 * one time password.
 *
 * IMPORTANT: This script requires the JSON object. If you're using a browser that doesn't
 * have it, import json2.js into your page.
 */

/*!
 * @author Richard Alleman
 * @version 2.0.0
 * @copyright Vodafone Hutchison Australia
 */

var aaaDebug = false && window.console, au = undefined;

if (typeof(au) != 'object') {
    au = {};
}

if (typeof(au.com) != 'object') {
    au.com = {};
}

if (typeof(au.com.vodafone) != 'object') {
    au.com.vodafone = {};
}

if (typeof(au.com.vodafone.aaa) != 'object') {
    au.com.vodafone.aaa = {};
}

// Get the source base of this file.
(function () {
    var allScripts = document.getElementsByTagName("script"), i, scriptBase;
    for (i = allScripts.length - 1; i >= 0; i--) {
        if (/\/embedded\d*\.js/.test(allScripts[i].src)) {
            scriptBase = allScripts[i].src;
            if (scriptBase.indexOf('http') == 0) {
                au.com.vodafone.aaa.SCRIPT_BASE = /^(https?:\/\/[a-z0-9-.]+(:\d+)?\/)/.exec(scriptBase)[1];
            } else {
                au.com.vodafone.aaa.SCRIPT_BASE = window.location.protocol + window.location.hostname + ':' + window.location.port;
            }

            var selfServiceBase = "https://www.myvodafone.com.au";
            if (/(https?:\/\/[a-z]+)([a-z\-]+)(.[a-z]+.aaa.aws.vodafone.com.au)/.test(au.com.vodafone.aaa.SCRIPT_BASE)) {
                selfServiceBase = RegExp.$1 + "-www-myvodafone" + RegExp.$3;
            }
            if (/https?:\/\/auth-test.test.services.vodafone.com.au/.test(au.com.vodafone.aaa.SCRIPT_BASE)) {
                selfServiceBase = "https://www-test.test.services.vodafone.com.au";
            }
            if (/(https?:\/\/[a-z]+)([a-z\-]+)(.[a-z]+.aaa.services.vodafone.com.au)/.test(au.com.vodafone.aaa.SCRIPT_BASE)) {
                selfServiceBase = RegExp.$1 + "-www-myvodafone" + RegExp.$3;
            }

            au.com.vodafone.aaa.SELF_SERVICE_BASE = selfServiceBase;
            break;
        }
    }
})();

if (!au.com.vodafone.aaa.SCRIPT_BASE) {
    throw new Error("Unable to determine SCRIPT_BASE");
}

if (!au.com.vodafone.aaa.SELF_SERVICE_BASE) {
    throw new Error("Unable to determine SELF_SERVICE_BASE");
}

/**
 * Contains the types of event phases.
 */
au.com.vodafone.aaa.EventPhase = {
    /**
     * The event occurred during the start of the authenticator.
     */
    Start: 1,

    /**
     * The event occurred during a login process including during the lazy loading of the login page.
     */
    Login: 2,

    /**
     * The event occurred during a password change process.
     */
    PasswordChange: 3,

    /**
     * The event occurred during the one time password process.
     */
    OneTimePassword: 4,

    /**
     * The event occurred during runtime.
     */
    Runtime: 5
};

/**
 * Contains the code of the events available.
 */
au.com.vodafone.aaa.EventCode = {
    /**
     * The user is not logged in. No message is provided with this event. The event
     * is available during a Start and Login.
     */
    NotLoggedIn: 10,

    /**
     * The user is logged in. No message is provided with this event. The event
     * is available during a Start and Login.
     */
    LoggedIn: 11,

    /**
     * The user is not registered. A message is provided with this event. The event
     * is available during a Start and Login.
     */
    LoggedInUnregistered: 12,

    /**
     * The user's password needs to change. The event is available during a Login.
     */
    PasswordChangeRequired: 13,

    /**
     * The user's change password was successful.
     */
    PasswordChangeSuccessful: 14,

    /**
     * The authenticator state has changed.
     */
    StateChange: 15,

    /**
     * The user entered an invalid password or username. A message is provided with this
     * event. The event is available during a Login and PasswordChange. The user is allowed
     * to retry the authentication.
     */
    InvalidCredentials: 21,

    /**
     * The user's account was already, or has just become, locked. A message is provided with
     * this event. The event is available during a Login. Users cannot login after this event.
     */
    Locked: 22,

    /**
     * The user has reached their maximum session count. A message is provided with
     * this event. The event is available during a Login. Users cannot login after this event.
     */
    MaxSessionsReached: 23,

    /**
     * Form validation failed. A message is provided with this event. The event is available
     * during a PasswordChange.
     */
    ValidationFailed: 24,

    /**
     * An unknown error occurred on the DCC. A message is provided with
     * this event. The event is available during a Login. Users cannot login without restarting
     * the authenticator after this error.
     */
    SystemError: 25,

    /**
     * The user's password has expired.
     */
    PasswordExpired: 26,

    /**
     * Waiting for the OTP.
     */
    OTPRequired: 199,

    /**
     * Invalid MSISDN when requesting an OTP.
     */
    OTPInvalidUsername: 200,

    /**
     * Something nasty happened when sending the SMS.
     */
    OTPSMSFailed: 201,

    /**
     * OTP allocation has been exhausted. The user will need to use normal username and password
     * authentication.
     */
    OTPExhausted: 202,

    /**
     * The OTP was incorrect.
     */
    OTPInvalidCode: 203,

    /**
     * The OTP has expired.
     */
    OTPExpired: 204,

    /**
     * The maximum number of retries has been exceeded. No more attempts are allowed with
     * this current OTP session. The user will need to start again.
     */
    OTPMaxRetryReached: 205
};

/**
 * Contains the password policy validation rules. It is possible for more than one of these
 * validation rules to be present within a single error event.
 */
au.com.vodafone.aaa.PasswordPolicyRule = {
    /**
     * The new password was shorter than the minimum length.
     */
    MinLength: 1,

    /**
     * The new password was longer than the maximum length.
     */
    MaxLength: 2,

    /**
     * The new password did not contain the minimum number of alpha characters.
     */
    MinAlpha: 3,

    /**
     * The new password did not contain the minimum number of numeric characters.
     */
    MinNumber: 4,

    /**
     * The new password did not contain the minimum number of alphanumeric characters.
     */
    MinAlphaNumeric: 5,

    /**
     * The new password contained too few special characters.
     */
    MinSpecialChars: 6,

    /**
     * The new password contained too many special characters.
     */
    MaxSpecialChars: 7,

    /**
     * The new password contained too many repeated characters.
     */
    MaxRepeated: 8,

    /**
     * The new password contained too few unique characters.
     */
    MinUnique: 9,

    /**
     * The new password contained too few uppercase characters.
     */
    MinUpperCase: 10,

    /**
     * The new password contained too few lowercase characters.
     */
    MinLowerCase: 11,

    /**
     * Not used.
     */
    MaxAge: 12,

    /**
     * Not used.
     */
    WarnAfter: 13,

    /**
     * The new password contained too few 'required' characters. Not used currently.
     */
    RequiredChars: 14,

    /**
     * The new password did not contain valid characters.
     */
    InvalidChars: 15,

    /**
     * Unsure what this means!
     */
    ValidChars: 16,

    /**
     * The new password contained invalid strings.
     */
    InvalidStrings: 17,

    /**
     * The new password does not start with an alphanumeric character.
     */
    DoesNotStartWithAlphanumericChar: 18,

    /**
     * The new password contains must not contain the MSISDN.
     */
    DisallowUserId: 19,

    /**
     * The new password contains must not contain the first name.
     */
    DisallowFirstName: 20,

    /**
     * The new password contains must not contain the last name.
     */
    DisallowLastName: 21,

    /**
     * The new password contains must not contain a dictionary word. Not used.
     */
    DictionaryWord: 22,

    /**
     * The new password must not be a recent password. Not used.
     */
    EnforceHistory: 23,

    /**
     * Not used.
     */
    MinAge: 24,

    /**
     * The new password contained too few unicode characters.
     */
    MinUnicode: 25,

    /**
     * The new password contained too many unicode characters.
     */
    MaxUnicode: 26,

    /**
     * The new password and confirm passwords do not match.
     */
    MismatchingConfirmPassword: 101
};

/**
 * Contains the possible states of the authenticator.
 */
au.com.vodafone.aaa.AuthenticatorState = {
    /**
     * The authenticator is not started.
     */
    Unstarted: "Unstarted",

    /**
     * The authenticator is started and is currently in lazy mode. The
     * authenticator needs to be started fully to accept login attempts.
     */
    Lazy: "Lazy",

    /**
     * The authenticator is armed and ready to accept login attempts. Password
     * changes are not possible in this state.
     */
    Login: "Login",

    /**
     * The authenticator is armed and ready to request and accept an OTP login.
     */
    OneTimePassword: "OneTimePassword",

    /**
     * The user is logged in. Login attempts or change password attempts are
     * not possible.
     */
    LoggedIn: "LoggedIn",

    /**
     * The user is logged in but is unregistered. Login attempts or change
     * password attempts are not possible.
     */
    LoggedInUnregistered: "LoggedInUnregistered",

    /**
     * The authenticator is currently logging a user in. Additional login attempts or change
     * password attempts are not possible.
     */
    LoggingIn: "LoggingIn",

    /**
     * The authenticator is currently logging a user out. Login attempts or change
     * password attempts are not possible.
     */
    LoggingOut: "LoggingOut",

    /**
     * The authenticator is in a locked state which prevent it from being used further.
     * If you want to reuse it, call {@link au.com.vodafone.aaa.Authenticator#start(Login)}
     * again.
     */
    Locked: "Locked",

    /**
     * The authenticator is expecting the user's password to be changed. Login
     * is not possible. Only password changes are possible in this state.
     */
    PasswordChange: "PasswordChange",

    /**
     * The authenticator is currently attempting to change the user password. Login
     * attempts or change password attempts are not possible.
     */
    ChangingPassword: "ChangingPassword",

    /**
     * The user's change password was successful. {@link au.com.vodafone.aaa.Authenticator#continuePasswordChange()}
     * needs to be called to log the user in.
     */
    PasswordChangeSuccessful: "PasswordChangeSuccessful",

    /**
     * The user is continuing from a successful password change.
     */
    ContinuingPasswordChange: "ContinuingPasswordChange",

    /**
     * The user has requested their OTP.
     */
    RequestingOneTimePassword: "RequestingOneTimePassword",

    /**
     * The user has submitted their OTP.
     */
    SubmittingOneTimePassword: "SubmittingOneTimePassword",

    /**
     * The authenticator is in an error state which prevent it from being used. It will need
     * to be restarted to be of any use. This can happen if after certain authentication errors
     * occur like max sessions reached or when a system error occurs.
     */
    Error: "Error"
};

/**
 * Contains the possible state modes of the authenticator.
 */
au.com.vodafone.aaa.StartMode = {
    /**
     * The authenticator is started in lazy mode, which performs a simple check
     * on the OAM cookies to determine if the user has or previously had a session.
     * If the OAM cookies are detected, the authenticator may become either enter
     * a {@link au.com.vodafone.aaa.AuthenticatorState.Login} state or a
     * {@link au.com.vodafone.aaa.AuthenticatorState.LoggedIn} state depending on
     * whether they are logged in or not.
     */
    Lazy: 1,

    /**
     * The authenticator is started is started in a fully armed state. If the user
     * is logged in at the time, it will transition to a
     * {@link au.com.vodafone.aaa.AuthenticatorState.LoggedIn} state. Otherwise it
     * will come to rest in a {@link au.com.vodafone.aaa.AuthenticatorState.Login}
     * state.
     */
    Login: 2
};

/**
 * Contains the internal message types. Not to be used by implementation logic!
 */
au.com.vodafone.aaa.MessageType = {
    Login: 1,
    LoginResult: 2,
    PasswordChange: 3,
    PasswordChangeResult: 4,
    RequestToken: 5,
    OneTimePasswordLogin: 6,
    ContinuePasswordChange: 7,
    RequestOneTimePassword: 8
};

/**
 * The event that is sent out when the login fails for any reason, including when the password
 * needs changing.
 *
 * @param code The event code. See {@link au.com.vodafone.aaa.EventCode}.
 * @param messages The message associated with the event.
 * @param lazy A boolean flag indicating if the event was triggered from the lazy page.
 */
au.com.vodafone.aaa.NotLoggedInEvent = function (code, messages, lazy) {
    this.phase = null;
    this.code = code;
    this.messages = messages;
    this.lazy = lazy;
};

/**
 * The event that is sent when the user is logged in (includes Unregistered logged in users).
 *
 * @param code The event code. See {@link au.com.vodafone.aaa.EventCode}.
 * @param username The username for the logged in user (available with the LOGGED_IN message).
 * @param msisdn The MSISDN for the logged in user (available with the LOGGED_IN message).
 * @param firstName The firstName for the logged in user (available with the LOGGED_IN message).
 * @param lastName The lastName for the logged in user (available with the LOGGED_IN message).
 * @param emailAddress The emailAddress for the logged in user (available with the LOGGED_IN message).
 * @param eStoreToken A special token created to support the eStore's migration to SAML.
 */
au.com.vodafone.aaa.LoggedInEvent = function (code, username, msisdn, firstName, lastName, emailAddress, eStoreToken, authSource) {
    this.phase = null;
    this.code = code;
    this.username = username;
    this.msisdn = msisdn;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.eStoreToken = eStoreToken;
    this.authSource = authSource;
};

/**
 * The event that is sent out when the change password fails for any reason.
 *
 * @param code The event code. See {@link au.com.vodafone.aaa.EventCode}.
 * @param messages The messages associated with the event. This is an array of strings which can be presented to the user.
 * @param passwordChangeRules An array of integers referring to the constants in {@link au.com.vodafone.aaa.PasswordPolicyRule}.
 */
au.com.vodafone.aaa.PasswordChangeFailureEvent = function (code, passwordChangeRules, messages) {
    this.phase = null;
    this.code = code;
    this.passwordChangeRules = passwordChangeRules;
    this.messages = messages;
};

/**
 * The event that is sent out when the change password fails for any reason.
 *
 * @param code The event code. See {@link au.com.vodafone.aaa.EventCode}.
 * @param oldState The previous state of the authenticator.
 * @param newState The new state of the authenticator.
 */
au.com.vodafone.aaa.StateChangeEvent = function (code, oldState, newState) {
    this.phase = null;
    this.code = code;
    this.oldState = oldState;
    this.newState = newState;
};

/**
 * Thrown when an attempt was made to perform an action when the authenticator is
 * in an invalid state for that action.
 */
au.com.vodafone.aaa.IllegalStateException = function (message) {
    this.message = message;
};

/**
 * Used to create the user credentials fields. The caller must supply the
 * AAA endpoint. This allows the object to be used in varying environments where the
 * AAA authentication endpoint is different from environment to environment.
 *
 * @param endpoint The AAA endpoint URL.
 * @param displayProfile The displayProfile to use.
 */
au.com.vodafone.aaa.authenticators = [];
au.com.vodafone.aaa.Authenticator = function () {

    if (au.com.vodafone.aaa.authenticators.length > 0) {
        throw new IllegalStateException('Only one authenticator can exist on a page');
    }

    au.com.vodafone.aaa.authenticators.push(this);

    this.listeners = [];
    this.child = null;
    this.name = "";
    this.state = au.com.vodafone.aaa.AuthenticatorState.Unstarted;
    this.lastMsg = null;

    // Generate the name of the authenticator instance.
    var possible = "abcdefghijklmnopqrstuvwxyz", i, target;
    for (i = 0; i < 16; i++)
        this.name += possible.charAt(Math.floor(Math.random() * possible.length));

    // Register the local event listener.
    target = this;
    if (window.addEventListener) {
        window.addEventListener("message", function (evt) {
            target.handleEvent(evt)
        }, false);
    } else {
        window.attachEvent("onmessage", function (evt) {
            target.handleEvent(evt)
        });
    }

    /**
     * Start can perform a lazy load of the embedded DCC page or a full load. A full load 'arms'
     * the authenticator and a login can only be performed when the authenticator is in an armed
     * state.
     *
     * A lazy load is used in order to avoid load on OAM. If you're using the authenticator on a
     * page which receives a very high percentage of hits that will not likely result in a login
     * then the lazy load option should be used when starting the authenticator, otherwise a full
     * load should be used.
     *
     * Start the authenticator in lazy mode by passing true to the start method. Start the
     * authenticator in full (armed) mode by passing false to the start method or no parameter.
     * Note that it is possible that the authenticator will automatically become armed if it
     * appears as though the user is initially logged in (based on the presence of an OAM cookie)
     * but they actually aren't. If this happens, the authenticator will be armed so there is
     * no need to call start([false]) to arm it. You can test the status of the authenticator
     * by calling the {@link #getState()} method.
     *
     * @param mode The mode that the authenticator should start in.
     */
    this.start = function (mode) {
        if (!mode) {
            mode = au.com.vodafone.aaa.StartMode.Login;
        }

        if (mode == au.com.vodafone.aaa.StartMode.Lazy && this.state == au.com.vodafone.aaa.AuthenticatorState.Lazy ||
            mode == au.com.vodafone.aaa.StartMode.Login && this.state == au.com.vodafone.aaa.AuthenticatorState.Login ||
            mode == au.com.vodafone.aaa.StartMode.OneTimePassword && this.state == au.com.vodafone.aaa.AuthenticatorState.OneTimePassword) {
            return;
        }

        var endpoint;
        switch (mode) {
            case au.com.vodafone.aaa.StartMode.Lazy:
                endpoint = au.com.vodafone.aaa.SELF_SERVICE_BASE + "/embedded/lazy";
                break;
            case au.com.vodafone.aaa.StartMode.Login:
                endpoint = au.com.vodafone.aaa.SELF_SERVICE_BASE + "/embedded/full";
                break;
        }

        this.setupInternalWindow(endpoint);
        this.setState(au.com.vodafone.aaa.AuthenticatorState.Unstarted, au.com.vodafone.aaa.EventPhase.Start);
    };

    /**
     * Stops the authenticator and cleans up any resources associated with it.
     */
    this.stop = function () {
        if (this.child) {
            document.body.removeChild(this.child);
            this.child = null;
        }

        this.setState(au.com.vodafone.aaa.AuthenticatorState.Unstarted, null);
    };

    /**
     * Logs the user out.
     */
    this.logout = function () {
        var endpoint = au.com.vodafone.aaa.SELF_SERVICE_BASE + "/logout?end_url=" + encodeURI(au.com.vodafone.aaa.SELF_SERVICE_BASE + "/embedded/full");
        this.setupInternalWindow(endpoint);
        this.setState(au.com.vodafone.aaa.AuthenticatorState.LoggingOut, null);
    };

    /**
     * Returns true if the user is logged in.
     */
    this.isLoggedIn = function () {
        return this.state == au.com.vodafone.aaa.AuthenticatorState.LoggedIn ||
            this.state == au.com.vodafone.aaa.AuthenticatorState.LoggedInUnregistered;
    };

    /**
     * Returns true if the authenticator is started.
     */
    this.isStarted = function () {
        return this.state != au.com.vodafone.aaa.AuthenticatorState.Unstarted;
    };

    /**
     * Returns true if the authenticator can log in.
     */
    this.canLogIn = function () {
        return this.state == au.com.vodafone.aaa.AuthenticatorState.Login;
    };

    /**
     * Returns true if the authenticator can log in using the OTP.
     */
    this.canLogInOtp = function () {
        return this.state == au.com.vodafone.aaa.AuthenticatorState.OneTimePassword;
    };

    /**
     * Returns true if the authenticator can log out.
     */
    this.canLogOut = function () {
        return this.state == au.com.vodafone.aaa.AuthenticatorState.LoggedIn ||
            this.state == au.com.vodafone.aaa.AuthenticatorState.LoggedInUnregistered;
    };

    /**
     * Returns true if the authenticator can change the password.
     */
    this.canChangePassword = function () {
        return this.state == au.com.vodafone.aaa.AuthenticatorState.PasswordChange;
    };

    /**
     * Returns true if the authenticator can continue the password change.
     */
    this.canContinuePasswordChange = function () {
        return this.state == au.com.vodafone.aaa.AuthenticatorState.PasswordChangeSuccessful;
    };

    /**
     * Redirects the user to the change password page.
     */
    this.goToExternalChangePassword = function () {
        if (this.state != au.com.vodafone.aaa.AuthenticatorState.PasswordChange) {
            throw new au.com.vodafone.aaa.IllegalStateException('Illegal state for login');
        }

        var form, input;
        form = document.createElement('form');
        form.action = this.lastMsg.url;
        form.method = 'POST';

        input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'OAM_REQ';
        input.value = this.lastMsg.requestToken;

        document.body.appendChild(form);
        form.appendChild(input);
        form.submit();
    };

    /**
     * Redirects to the forgotten password page.
     */
    this.goToExternalForgottenPassword = function (params) {
        window.location = au.com.vodafone.aaa.SELF_SERVICE_BASE + "/selfservice/forgottenpassword" + this.paramsToQueryString(params);
    };

    /**
     * Redirects to the registration page.
     */
    this.goToExternalRegistration = function (params) {
        window.location = au.com.vodafone.aaa.SELF_SERVICE_BASE + "/selfservice/myvf" + this.paramsToQueryString(params);
    };

    /**
     * Returns the params as query string params.
     */
    this.paramsToQueryString = function (params) {
        var qs = '';
        if (params) {
            if (params['url']) {
                qs += 'url=' + params['url'];
            }
            if (params['errorUrl']) {
                qs += 'errorUrl=' + params['errorUrl'];
            }
            if (params['cancelUrl']) {
                qs += 'cancelUrl=' + params['cancelUrl'];
            }

            if (qs) {
                qs = '?' + qs;
            }
        }

        return qs;
    };

    /**
     * Sets up the iframe window.
     */
    this.setupInternalWindow = function (endpoint) {
        if (this.child) {
            document.body.removeChild(this.child);
            this.child = null;
        }

        var iframe; //, wrapper;
        iframe = document.createElement('iframe');
        iframe.id = this.name;
        iframe.name = this.name;
        iframe.src = endpoint;
        iframe.width = 0;
        iframe.height = 0;
        iframe.style.borderWidth = "0";
        iframe.style.overflow = "hidden";
        iframe.style.position = "fixed";
        iframe.style.left = "-1000px";
        iframe.style.top = 0;
        iframe.style.visibility = "hidden";
//
//        wrapper = document.createElement('div');
//        wrapper.style.position = "fixed";
//        wrapper.style.left = "-1000px";
//        wrapper.style.top = 0;
//        wrapper.style.width = 0;
//        wrapper.style.height = 0;
//        wrapper.style.visibility = "hidden";
//        wrapper.appendChild(iframe);
//        document.body.appendChild(wrapper);

        document.body.appendChild(iframe);

        this.child = iframe;

//        this.windowWrapper = wrapper;
//        this.window = iframe.contentWindow;
//        this.window.name = this.name;
    };

    /**
     * Returns the {@link au.com.vodafone.aaa.AuthenticatorState}.
     */
    this.getState = function () {
        return this.state;
    };

    /**
     * Sets the {@link au.com.vodafone.aaa.AuthenticatorState}. If the state has changed
     * a {@link } will occur asynchronously. This method returns the former state.
     *
     * @param newState The new state.
     * @param phase Sets the phase for the event. If this is not supplied, the Runtime phase
     * is used.
     */
    this.setState = function (newState, phase) {
        var oldState = this.state, event, authenticator = this;
        if (newState != oldState) {
            this.state = newState;
            event = new au.com.vodafone.aaa.StateChangeEvent(
                au.com.vodafone.aaa.EventCode.StateChange,
                oldState, newState);

            event.phase = phase ? phase : au.com.vodafone.aaa.EventPhase.Runtime;

            setTimeout(function () {
                authenticator.distributeEvent(event);
            }, 1);
        }

        return oldState;
    };

    /**
     * Adds a listener to the authenticator. This must be a callback function that accepts
     * an any of the event objects. See {@link au.com.vodafone.aaa.LoggedInEvent},
     * {@link au.com.vodafone.aaa.NotLoggedInEvent} and {@link au.com.vodafone.aaa.PasswordChangeFailureEvent}.
     *
     * @param listener The listener function.
     */
    this.addListener = function (listener) {
        this.listeners.push(listener);
    };

    /**
     * Attempts to log the user in.
     *
     * @param username   The user's username.
     * @param password   The user's password.
     * @param rememberMe If true (or non-false), the user will be remembered on subsequent
     *                   logins, assuming they successfully log in now.
     */
    this.login = function (username, password, rememberMe) {
        if (this.state != au.com.vodafone.aaa.AuthenticatorState.Login) {
            throw new au.com.vodafone.aaa.IllegalStateException('Illegal state for login');
        }

        var msg, authenticator = this;
        if (username.length == 0 || password.length == 0) {
            msg = {
                type: au.com.vodafone.aaa.MessageType.LoginResult,
                target: authenticator.name,
                event: new au.com.vodafone.aaa.NotLoggedInEvent(
                    au.com.vodafone.aaa.EventCode.InvalidCredentials,
                    ['Please enter a username and a password'])
            };

            setTimeout(function () {
                authenticator.handleEvent(msg)
            }, 1);
        } else {
            msg = {
                type: au.com.vodafone.aaa.MessageType.Login,
                username: username,
                password: password,
                rememberMe: !!rememberMe
            };

            this.setState(au.com.vodafone.aaa.AuthenticatorState.LoggingIn, null);
            this.sendMessage(msg);
        }
    };

    /**
     * Attempts to log the user in.
     *
     * @param currentPassword The user's current password.
     * @param newPassword The user's new password.
     * @param confirmPassword The user's confirmed new password. This must match {@link #newPassword}.
     */
    this.changePassword = function (currentPassword, newPassword, confirmPassword) {
        if (this.state != au.com.vodafone.aaa.AuthenticatorState.PasswordChange) {
            throw new au.com.vodafone.aaa.IllegalStateException('Illegal state for change password');
        }

        var msg, authenticator = this;
        if (newPassword.length == 0) {
            msg = {
                type: au.com.vodafone.aaa.MessageType.PasswordChangeResult,
                target: authenticator.name,
                event: new au.com.vodafone.aaa.PasswordChangeFailureEvent(
                    au.com.vodafone.aaa.EventCode.ValidationFailed,
                    [au.com.vodafone.aaa.PasswordPolicyRule.MinLength],
                    ['Please enter a new password'])
            };

            setTimeout(function () {
                authenticator.handleEvent(msg)
            }, 1);
        } else if (newPassword != confirmPassword) {
            msg = {
                type: au.com.vodafone.aaa.MessageType.PasswordChangeResult,
                target: authenticator.name,
                event: new au.com.vodafone.aaa.PasswordChangeFailureEvent(
                    au.com.vodafone.aaa.EventCode.ValidationFailed,
                    [au.com.vodafone.aaa.PasswordPolicyRule.MismatchingConfirmPassword],
                    ['Your confirm password does not match your new password'])
            };

            setTimeout(function () {
                authenticator.handleEvent(msg)
            }, 1);
        } else {
            msg = {
                type: au.com.vodafone.aaa.MessageType.PasswordChange,
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmPassword: confirmPassword
            };

            this.setState(au.com.vodafone.aaa.AuthenticatorState.ChangingPassword, null);
            this.sendMessage(msg);
        }
    };

    /**
     * Continue after a successful change password. The user is not logged in until this
     * is done.
     */
    this.continuePasswordChange = function () {
        var msg = {
            type: au.com.vodafone.aaa.MessageType.ContinuePasswordChange
        };

        this.setState(au.com.vodafone.aaa.AuthenticatorState.ContinuingPasswordChange, null);
        this.sendMessage(msg);
    };

    /**
     * Requests a one time password to be sent to the user's device.
     *
     * @param msisdn The user's MSISDN.
     */
    this.requestOneTimePassword = function (msisdn) {
        if (this.state != au.com.vodafone.aaa.AuthenticatorState.Login) {
            throw new au.com.vodafone.aaa.IllegalStateException('Illegal state for a one time pasword request');
        }

        var msg, authenticator = this;
        if (msisdn.length == 0) {
            msg = {
                type: au.com.vodafone.aaa.MessageType.LoginResult,
                target: this.name,
                event: new au.com.vodafone.aaa.NotLoggedInEvent(
                    au.com.vodafone.aaa.EventCode.InvalidCredentials,
                    ['Please enter your mobile number'])
            };

            setTimeout(function () {
                authenticator.handleEvent(msg)
            }, 1);
        } else {
            msg = {
                type: au.com.vodafone.aaa.MessageType.RequestOneTimePassword,
                msisdn: msisdn
            };

            this.setState(au.com.vodafone.aaa.AuthenticatorState.RequestingOneTimePassword, null);
            this.sendMessage(msg);
        }
    };

    /**
     * Logs the user in with their one time password.
     *
     * @param password The user's one time password.
     */
    this.loginOneTimePassword = function (password) {
        if (this.state != au.com.vodafone.aaa.AuthenticatorState.OneTimePassword) {
            throw new au.com.vodafone.aaa.IllegalStateException('Illegal state for change password');
        }

        var msg, authenticator = this;
        if (password.length == 0) {
            msg = {
                type: au.com.vodafone.aaa.MessageType.LoginResult,
                target: authenticator.name,
                event: new au.com.vodafone.aaa.NotLoggedInEvent(
                    au.com.vodafone.aaa.EventCode.InvalidCredentials,
                    ['Please enter your one time password'])
            };

            setTimeout(function () {
                authenticator.handleEvent(msg)
            }, 1);
        } else {
            msg = {
                type: au.com.vodafone.aaa.MessageType.OneTimePasswordLogin,
                password: password
            };

            this.setState(au.com.vodafone.aaa.AuthenticatorState.SubmittingOneTimePassword, null);
            this.sendMessage(msg);
        }
    };

    /**
     * Called to handle the event from the underlying iframe.
     */
    this.handleEvent = function (evt) {

        // Extract the event from the message.
        var i, authenticator, newState, phase = null, msg;
        msg = evt.data ? JSON.parse(evt.data) : evt;
        if (aaaDebug) {
            console.log("Parent receiving event: " + JSON.stringify(msg));
        }

        if (msg.type != au.com.vodafone.aaa.MessageType.LoginResult &&
            msg.type != au.com.vodafone.aaa.MessageType.PasswordChangeResult ||
            msg.target != this.name) {
            return;
        }

        // Broadcast the request token to other instances on the same page.
        // NOTE: Not needed any more because we're supporting only one authenticator on a page.
        for (i = 0; i < au.com.vodafone.aaa.authenticators.length; i++) {
            authenticator = au.com.vodafone.aaa.authenticators[i];
            if (authenticator != this) {
                authenticator.sendRequestToken(msg.requestToken);
            }
        }

        this.lastMsg = msg;
        switch (msg.event.code) {
            case au.com.vodafone.aaa.EventCode.LoggedIn:
                newState = au.com.vodafone.aaa.AuthenticatorState.LoggedIn;
                break;
            case au.com.vodafone.aaa.EventCode.NotLoggedIn:
                if (msg.event.lazy) {
                    newState = au.com.vodafone.aaa.AuthenticatorState.Lazy;
                } else {
                    newState = au.com.vodafone.aaa.AuthenticatorState.Login;
                }

                break;
            case au.com.vodafone.aaa.EventCode.PasswordChangeRequired:
                newState = au.com.vodafone.aaa.AuthenticatorState.PasswordChange;
                phase = au.com.vodafone.aaa.EventPhase.Login;
                break;
            case au.com.vodafone.aaa.EventCode.PasswordChangeSuccessful:
                newState = au.com.vodafone.aaa.AuthenticatorState.PasswordChangeSuccessful;
                phase = au.com.vodafone.aaa.EventPhase.PasswordChange;
                break;
            case au.com.vodafone.aaa.EventCode.LoggedInUnregistered:
                newState = au.com.vodafone.aaa.AuthenticatorState.LoggedInUnregistered;
                break;
            case au.com.vodafone.aaa.EventCode.OTPRequired:
            case au.com.vodafone.aaa.EventCode.OTPInvalidCode:
                newState = au.com.vodafone.aaa.AuthenticatorState.OneTimePassword;
                phase = au.com.vodafone.aaa.EventPhase.OneTimePassword;
                break;
            case au.com.vodafone.aaa.EventCode.OTPExhausted:
            case au.com.vodafone.aaa.EventCode.OTPExpired:
            case au.com.vodafone.aaa.EventCode.OTPMaxRetryReached:
            case au.com.vodafone.aaa.EventCode.OTPSMSFailed:
                newState = au.com.vodafone.aaa.AuthenticatorState.Error;
                phase = au.com.vodafone.aaa.EventPhase.OneTimePassword;
                break;
            case au.com.vodafone.aaa.EventCode.InvalidCredentials:
                newState = au.com.vodafone.aaa.AuthenticatorState.Login;
                phase = au.com.vodafone.aaa.EventPhase.Login;
                break;
            case au.com.vodafone.aaa.EventCode.Locked:
                newState = au.com.vodafone.aaa.AuthenticatorState.Locked;
                phase = au.com.vodafone.aaa.EventPhase.Login;
                break;
            case au.com.vodafone.aaa.EventCode.SystemError:
                if (this.state == au.com.vodafone.aaa.AuthenticatorState.Unstarted) {
                    phase = au.com.vodafone.aaa.EventPhase.Start;
                } else if (this.state == au.com.vodafone.aaa.AuthenticatorState.ChangingPassword) {
                    phase = au.com.vodafone.aaa.EventPhase.PasswordChange;
                } else {
                    phase = au.com.vodafone.aaa.EventPhase.Login;
                }

                newState = au.com.vodafone.aaa.AuthenticatorState.Error;
                break;
            case au.com.vodafone.aaa.EventCode.MaxSessionsReached:
                newState = au.com.vodafone.aaa.AuthenticatorState.Error;
                phase = au.com.vodafone.aaa.EventPhase.Login;
                break;
            case au.com.vodafone.aaa.EventCode.ValidationFailed:
                if (msg.type == au.com.vodafone.aaa.MessageType.LoginResult) {
                    newState = au.com.vodafone.aaa.AuthenticatorState.Login;
                    phase = au.com.vodafone.aaa.EventPhase.Login;
                } else if (msg.type == au.com.vodafone.aaa.MessageType.PasswordChangeResult) {
                    newState = au.com.vodafone.aaa.AuthenticatorState.PasswordChange;
                    phase = au.com.vodafone.aaa.EventPhase.PasswordChange;
                }
                break;
        }

        // Default phase check.
        if (!phase) {
            if (this.state == au.com.vodafone.aaa.AuthenticatorState.Unstarted) {
                phase = au.com.vodafone.aaa.EventPhase.Start;
            } else {
                phase = au.com.vodafone.aaa.EventPhase.Login;
            }
        }

        // Update the authenticator state.
        msg.event.phase = phase;
        this.setState(newState, phase);

        // Distribute the event.
        this.distributeEvent(msg.event);
    };

    /**
     * Distributes the event to the listeners.
     *
     * @param evt The event.
     */
    this.distributeEvent = function (evt) {
        var i, authenticator = this;
        for (i = 0; i < this.listeners.length; i++) {
            (function () {
                var listener = authenticator.listeners[i];
                setTimeout(function () {
                    listener(evt);
                }, 1);
            })();
        }
    };

    /**
     * Sends the request token to the underlying iframe so that its login form can be updated.
     */
    this.sendRequestToken = function (token) {
        if (!this.child) {
            return;
        }

        if (token) {
            var msg = {
                type: au.com.vodafone.aaa.MessageType.RequestToken,
                token: token
            };

            this.sendMessage(msg);
        }
    };

    /**
     * Sends the message to the child.
     */
    this.sendMessage = function (msg) {
        if (!this.child || !this.child.contentWindow) {
            throw new au.com.vodafone.aaa.IllegalStateException('Child frame is not set up');
        }

        try {
            if (!this.child.contentWindow.name) {
                this.child.contentWindow.name = this.name;
            }
        } catch (e) {
            if (aaaDebug) {
                console.log(e);
            }
        }

        if (aaaDebug) {
            console.log("Parent sending event: " + JSON.stringify(msg));
        }

        this.child.contentWindow.postMessage(JSON.stringify(msg), '*');
    }
};

/**
 * Used by the AAA page to send events up to the parent of the iframe.
 *
 * @param target The name of the target {@link au.com.vodafone.aaa.Authenticator} object
 */
au.com.vodafone.aaa.AuthenticatorResponder = function (target) {
    this.target = target;

    // Register the local event listener.
    var self = this;
    if (window.addEventListener) {
        window.addEventListener("message", function (evt) {
            self.handleEvent(evt)
        }, false);
    } else {
        window.attachEvent("onmessage", function (evt) {
            self.handleEvent(evt)
        });
    }

    /**
     * Called to handle the event from the underlying iframe.
     */
    this.handleEvent = function (evt) {

        var msg = JSON.parse(evt.data), requestToken, fields, i;
        if (aaaDebug) {
            console.log("Child receiving event: " + JSON.stringify(msg));
        }

        if (msg.type == au.com.vodafone.aaa.MessageType.RequestToken) {

            // Extract the token from the message.
            requestToken = evt.data.substr(prefix.length);
            fields = document.getElementsByName('OAM_REQ');
            if (fields) {
                for (i = 0; i < fields.length; i++) {
                    fields[i].value = requestToken;
                }
            }
        } else {
            var loginForm = document.getElementById('loginForm');
            var otpForm = document.getElementById('otpForm');
            var chpwdForm = document.getElementById('chpwdForm');
            if (msg.type == au.com.vodafone.aaa.MessageType.Login && loginForm) {
                this.setField('userid', msg.username);
                this.setField('password', msg.password);
                this.setField('rms', msg.rememberMe);
                this.setField('mobileNumber', "");
                loginForm.submit();
            } else if (msg.type == au.com.vodafone.aaa.MessageType.RequestOneTimePassword && loginForm) {
                this.setField('userid', "");
                this.setField('password', "");
                this.setField('rms', false);
                this.setField('mobileNumber', msg.msisdn);
                loginForm.submit();
            } else if (msg.type == au.com.vodafone.aaa.MessageType.OneTimePasswordLogin && otpForm) {
                this.setField('otp', msg.password);
                otpForm.submit();
            } else if (msg.type == au.com.vodafone.aaa.MessageType.PasswordChange && chpwdForm) {
                this.setField('oldPswd', msg.currentPassword);
                this.setField('newPswd', msg.newPassword);
                this.setField('confirmNewPswd', msg.confirmPassword);
                chpwdForm.submit();
            } else if (msg.type == au.com.vodafone.aaa.MessageType.ContinuePasswordChange && chpwdForm) {
                chpwdForm.submit();
            }
        }
    };

    /**
     * Sets the field value safely.
     */
    this.setField = function (name, value) {
        var field = document.getElementById(name);
        if (field) {
            if (field.type == 'password' || field.type == 'text' || field.type == 'hidden') {
                field.value = value;
            } else if (field.type == 'checkbox') {
                field.checked = !!value;
            }
        }
    };

    /**
     * Sends the event to the parent window.
     *
     * @param type The type of event.
     * @param requestToken The underlying token associated with the authentication request.
     * @param evt The event.
     */
    this.sendEvent = function (type, requestToken, evt) {
        var msg = {
            type: type,
            target: this.target,
            requestToken: requestToken,
            url: document.URL,
            event: evt
        };

        if (aaaDebug) {
            console.log("Child sending event: " + JSON.stringify(msg));
        }

        window.top.postMessage(JSON.stringify(msg), '*');
    };
};