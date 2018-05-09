(function(){
  var dom,doc,where,iframe = document.createElement('iframe');
  iframe.src = "javascript:false";
  (iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0";
  where = document.getElementsByTagName('script')[0];
  where.parentNode.insertBefore(iframe, where);
  
  try {
    doc = iframe.contentWindow.document;

  } catch(e) {
    dom = document.domain;
    iframe.src="javascript:var d=document.open();d.domain='"+dom+"';void(0);";
    doc = iframe.contentWindow.document;
  }
  doc.open()._l = function() {
	  var soastaKey = "", host = window.location.host;
	  var hosts = ["www.myvodafone.com.au","myaccount.myvodafone.com.au","auth.myvodafone.com.au"];	
	    if (hosts.indexOf(host) >0) {
	    soastaKey = "FQD6E-5P5UG-FM7HN-42LE6-GEKGQ";
	    }
	    else { 
	    soastaKey = "ZS2LL-CNZZA-STRHC-QGF2H-XY9LM";
	    }
    var js = this.createElement("script");
    if(dom) this.domain = dom;
    js.id = "boomr-if-as";
    js.src = '//c.go-mpulse.net/boomerang/' + soastaKey;
    BOOMR_lstart=new Date().getTime();
    this.body.appendChild(js);
  };
  doc.write('<body onload="document._l();">');
  doc.close();
  })();