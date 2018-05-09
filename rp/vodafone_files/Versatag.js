// Mediamind VersaTag in JS format - START
(function(){
	var loc_protocol = location.protocol.replace(':','');
	var versaTag = {};
	versaTag.id = "1266";
	versaTag.sync = 0;
	versaTag.dispType = "js";
	versaTag.ptcl = loc_protocol;
	versaTag.bsUrl = "bs.serving-sys.com/BurstingPipe";
	//versaTag.mobile = 1;
	//VersaTag activity parameters include all conversion parameters including custom parameters. Syntax: "ParamName1":"ParamValue1", "ParamName2":"ParamValue2". ParamValue can be empty.
	versaTag.activityParams = {
	//Predefined parameters:
	"OrderID":"vodafoneinsertparam","Value":" vodafoneinsertparamtotalvalue ","productid":" vodafoneinsertparam ","productinfo":" vodafoneinsertparam ","Quantity":" vodafoneinsertparam ",
	//Custom parameters:
	"individualcost":"vodafeoninsertindiviualitemvalue" }//individual item cost instead of total value,"individualcost":""};
	//Static retargeting tags parameters. Syntax: "TagID1":"ParamValue1", "TagID2":"ParamValue2". ParamValue can be empty.
	versaTag.retargetParams = {};
	//Dynamic retargeting tags parameters. Syntax: "TagID1":"ParamValue1", "TagID2":"ParamValue2". ParamValue can be empty.
	versaTag.dynamicRetargetParams = {"5880":"$sku$", "6609":"$SKU$","8383":"$SKU$","6733":"$SKU$"};
	//Third party tags conditional parameters. Syntax: "TagID1":"ParamValue1", "TagID2":"ParamValue2". ParamValue can be empty.
	versaTag.conditionalParams = {};

	var a = document.createElement('script');
	a.id = 'ebOneTagUrlId';
	a.type = 'text/javascript';
	if(loc_protocol == "https"){
		a.src = 'https://secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js';
	} else{
		a.src = 'http://ds.serving-sys.com/SemiCachedScripts/ebOneTag.js';
	}
	
	var elem_body = document.getElementsByTagName('body')[0]; 
	elem_body.appendChild(a);	
	
	window.versaTag = versaTag;
})();
// Mediamind VersaTag in JS format - END