



/* ControlTag Loader for Vodafone AU 033cdf08-5ee0-4cea-a959-dbfbbf47b716 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.36.0","schema_version":3},"confid":"KXt4l1wV","context_terms":[],"publisher":{"name":"Vodafone AU","active":true,"uuid":"033cdf08-5ee0-4cea-a959-dbfbbf47b716","version_bucket":"stable","id":1872},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"vodafoneau"},"prioritized_segments":[],"realtime_segments":[{"id":"sa4hhhja6","test":["and",["and",["or",["contains","$page_attr_url_path_1",["Business"]],["contains","$page_attr_url_path_2",["business"]],["contains","$page_attr_url_path_3",["business"]]],["andNot",["intersects","$user_segments",["rxozhjyir"]],["intersects","$user_segments",["q765houpt"]],["intersects","$user_segments",["rjn5unxhy","rrey9d9ol"]]]]]},{"id":"sa4hsbt95","test":["and",["and",["or",["contains","$page_attr_url_path_1",["android"]],["contains","$page_attr_url_path_2",["android"]],["contains","$page_attr_url_path_3",["android"]]],["andNot",["intersects","$user_segments",["q765houpt"]],["intersects","$user_segments",["rxozhjyir"]],["intersects","$user_segments",["rjn5unxhy","rrey9d9ol"]]]]]},{"id":"rzcrp6rll","test":["and",["and",["or",["or","$event_K33GqRO2"]]]]},{"id":"sa4gut62k","test":["and",["and",["or",["contains","$page_attr_url_path_1",["prepaid"]],["contains","$page_attr_url_path_2",["mymix"]],["contains","$page_attr_url_path_3",["mymix"]],["contains","$page_attr_url_path_2",["sim"]]],["andNot",["intersects","$user_segments",["rxozhjyir"]],["intersects","$user_segments",["rjn5unxhy","rrey9d9ol"]]]]]},{"id":"sa4gciyz1","test":["and",["and",["or",["contains","$page_attr_url_path_1",["plans"]],["contains","$page_attr_url_path_1",["hot-offers"]]],["andNot",["contains","$page_attr_url_path_1",["prepaid"]],["intersects","$user_segments",["rjn5unxhy","rrey9d9ol"]]]]]},{"id":"rdtjcnftu","test":["and",["and",["or",["intersects","$user_segments",["q766jzpnw"]]],["and",["or","$event_K33GqRO2"]]]]},{"id":"sa4hz3fep","test":["and",["and",["or",["contains","$page_attr_url_path_1",["apple"]],["contains","$page_attr_url_path_2",["apple"]],["contains","$page_attr_url_path_3",["apple"]]],["andNot",["intersects","$user_segments",["q765houpt"]],["intersects","$user_segments",["rxozhjyir"]],["intersects","$user_segments",["rjn5unxhy","rrey9d9ol"]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/033cdf08-5ee0-4cea-a959-dbfbbf47b716","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/033cdf08-5ee0-4cea-a959-dbfbbf47b716","consent_set":"https://consumer.krxd.net/consent/set/033cdf08-5ee0-4cea-a959-dbfbbf47b716","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/033cdf08-5ee0-4cea-a959-dbfbbf47b716","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"vodafone.com.au","cap":255,"id":455045,"organization_id":1872,"uid":"KXt4l1wV"},"tags":[{"id":31613,"name":"RLSA Welcome Mail Past 30 Days rrey9d9ol","content":"<!-- Google Code for [Krux] [RLSA] Welcome Mail Past 30 Days &quot;rrey9d9ol&quot; -->\n<!-- Google Code for Remarketing Tag -->\n<!--------------------------------------------------\nRemarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup\n--------------------------------------------------->\n<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar google_conversion_id = 869414926;\nvar google_conversion_label = \"Mu5wCMDElnMQjvDIngM\";\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\">\n</script>\n<noscript>\n<div style=\"display:inline;\">\n<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/869414926/?value=1.00&amp;label=Mu5wCMDElnMQjvDIngM&amp;guid=ON&amp;script=0\"/>\n</div>\n</noscript>","target":"","target_action":"append","timing":"asap","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["rrey9d9ol"]]]]]},{"id":17822,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":17823,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17824,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":17825,"name":"DTC - Standard","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_url_path_4':{'url_path':'4'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tvar domain = Krux('scrape',{'page_attr_domain':{url_domain: '2'}}).page_attr_domain;\n\tif(domain.match(/^com?\\./)){\n\t\t Krux('scrape',{'page_attr_domain':{url_domain: '3'}});\n\t}\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":18504,"name":"DTC - UTM","content":"<script>\n(function(){\n\tvar k,p = Krux('require:util').urlParams();\n\tfor(k in p) {\n\t\tif (k.indexOf('utm_') === 0){\n\t\t\tKrux('set', 'page_attr_' + k, p[k]);\n\t\t}\n\t}\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":18780,"name":"DTC - Custom","content":"<script>\n!function(){var a=Krux(\"scrape.js_global\",\"VHA_A.sc.s_copy\");if(Krux(\"ingestDataLayer\",a,{userKeys:[/prop(52|67)/]}),\"search_results\"==Krux(\"scrape.url_path\",1)){var b=Krux(\"scrape.dom\",\".search-application__search-results__corrected-search__term:text\"),c=Krux(\"scrape.url_path\",2),d=Krux(\"ns:vodafoneau\",\"scrape.dom\",\".search-application__refine-search__link.search-application__button--selected:text\")||\"\",e=d.replace(/([^\\(]*) \\(.*/,\"$1\");Krux(\"set\",{page_attr_search_term:b||c,page_attr_search_category:e})}Krux(\"scrape\",{page_attr_shop_product_display_name:{dom:'h1[ng-bind=\"product.displayName\"]:text'}})}();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":19356,"name":"DTC - Events","content":"<script>\n!function(){var a=[],b=Krux,c=function(){var a=b(\"scrape.js_global\",\"VHA_A.sc.s_copy.hier1\")||\"\",c=a.match(/^v\\|shop\\|(mobiles|tablets|broadband)\\|overview\\|/);c?b(\"admEvent\",\"KfQnGsts\",{type:c[1]}):a.match(/^v\\|shop\\|shopping-process\\|cart/)?b(\"admEvent\",\"KfR19Uth\",{}):a.match(/^v\\|shop\\|shopping-process\\|checkout\\|newacquisition$/)?b(\"admEvent\",\"KfR2sXWe\",{}):a.match(/^v\\|shop\\|shopping-process\\|checkout\\|newacquisition\\|basics/)?b(\"admEvent\",\"KfR3WCcL\",{}):a.match(/^v\\|shop\\|shopping-process\\|checkout\\|newacquisition\\|address/)?b(\"admEvent\",\"KfR3gyap\",{}):a.match(/^v\\|shop\\|shopping-process\\|checkout\\|newacquisition\\|personal/)?b(\"admEvent\",\"KfR3963F\",{}):a.match(/^v\\|shop\\|shopping-process\\|checkout\\|newacquisition\\|identification/)?b(\"admEvent\",\"KfR4QOQA\",{}):a.match(/^v\\|shop\\|shopping-process\\|checkout\\|newacquisition\\|accountreview/)?b(\"admEvent\",\"KfR4c1y5\",{}):a.match(/^v\\|shop\\|shopping-process\\|checkout\\|newacquisition\\|confirmation/)&&b(\"admEvent\",\"KfR4m9Ak\",{}),e()},d=function(){setTimeout(c,1e3)},e=function(){if(window.addEventListener)for(var c=b(\"require:sizzle\"),e=b(\"require:underscore\"),f=c.find(\"button[id$='continue']\"),g=f.length,h=0;g>h;h++)e.indexOf(a,f[h])<0&&(a.push(f[h]),f[h].addEventListener(\"click\",d))};c()}();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":30773,"name":"Send Segments to GA","content":"<script>\n(function() {\n    var allowedSegs = 'q765houpt,q7kb82qg9,rrey9d9ol,rdt5p7jkd,rjn5unxhy,rf11f2mte,ryk2glsvf,rzcrp6rll'.split(','),\n        _ = Krux('require:underscore'),\n        segs = Krux('get','user_segments') || [],\n        matchedSegs = _.first(_.intersection(allowedSegs, segs), 15).join(',');\n\n    if (!matchedSegs.length) return;\n\n    if (window.gtag) {\n        gtag('config', 'N/A', {\n            'send_page_view': false,\n            'custom_map': {'dimension6': 'dmp-segs'}\n        });\n        gtag('event', 'add-dmp-segs', {'dmp-segs': matchedSegs});\n    } else if (window.ga) {\n        ga('send', 'event', 'DMP', 'add-dmp-segs', {\n            'dimension6': matchedSegs\n        });\n    }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":31388,"name":"Segment Test (Business)","content":"<!-- Segment Test -->","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["rf11f2mte"]]]]]},{"id":31389,"name":"Segment Test (rrey9d9ol)","content":"<!-- Segment Test -->","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["rrey9d9ol"]]]]]},{"id":31390,"name":"Segment Test (Welcome mail/ New customer)","content":"<!-- Segment Test -->","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["rdt5p7jkd"]]]]]},{"id":31391,"name":"Segment Test (q7kb82qg9)","content":"<!-- Segment Test -->","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["q7kb82qg9"]]]]]},{"id":31656,"name":"RLSA Welcome Mail YTD rdt5p7jkd","content":"<!-- Google Code for [Krux] [RLSA] Welcome Mail YTD &quot;rdt5p7jkd&quot; -->\n<!-- Google Code for Remarketing Tag -->\n<!--------------------------------------------------\nRemarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup\n--------------------------------------------------->\n<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar google_conversion_id = 869414926;\nvar google_conversion_label = \"YmVyCLDGlnMQjvDIngM\";\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\">\n</script>\n<noscript>\n<div style=\"display:inline;\">\n<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/869414926/?value=1.00&amp;label=YmVyCLDGlnMQjvDIngM&amp;guid=ON&amp;script=0\"/>\n</div>\n</noscript>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["rdt5p7jkd"]]]]]},{"id":31678,"name":"RLSA NBN Redwire r1scgoc7k","content":"<!-- Google Code for [Krux] [RLSA] NBN Redwire &quot;r1scgoc7k&quot; -->\n<!-- Google Code for Remarketing Tag -->\n<!--------------------------------------------------\nRemarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup\n--------------------------------------------------->\n<script type=\"text/javascript\">\n/* <![CDATA[ */\nvar google_conversion_id = 869414926;\nvar google_conversion_label = \"wBmyCMP9p3MQjvDIngM\";\nvar google_custom_params = window.google_tag_params;\nvar google_remarketing_only = true;\n/* ]]> */\n</script>\n<script type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\">\n</script>\n<noscript>\n<div style=\"display:inline;\">\n<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//googleads.g.doubleclick.net/pagead/viewthroughconversion/869414926/?value=1.00&amp;label=wBmyCMP9p3MQjvDIngM&amp;guid=ON&amp;script=0\"/>\n</div>\n</noscript>\n","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":false,"criteria":["and",["and",["and",["intersects","$user_segments",["r1scgoc7k"]]]]]}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":18,"name":"Videology User Match","content":"<script type=\"text/javascript\">\n(function() {\n    (new Image()).src = '//sync.tidaltv.com/genericusersync.ashx?dpid=395';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":71,"name":"AppNexus Connect","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\r\n            var i = new Image();\r\n            i.src = appnexus_url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":41,"name":"Adobe user match","content":"<script>\n(function(){\n   var kuid = Krux('get', 'user');\n   if (kuid) {\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\tvar url = prefix + '//dpm.demdex.net/ibs:dpid=66757&&dpuuid=' + kuid + '&redir=' + encodeURIComponent(prefix)+'%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dadobe%26partner_uid%3D${DD_UUID}';\n\tnew Image().src = url;\n  }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":51,"name":"Eyeota User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n        if (kuid) {\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.dc955599a3976b2e658d60927793d9ea', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
