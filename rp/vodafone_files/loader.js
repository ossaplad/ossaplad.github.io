(function(exports) {
'use strict';
function DCP1373xClient() {};
// exports.DCP1373xClient = DCP1373xClient;
var document = window.document;
if(typeof jQuery=='undefined') {
    var headTag = document.getElementsByTagName('head')[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    headTag.appendChild(jqTag);
}
if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}
var isLocal = (window.location.host.indexOf('localhost') > -1 && window.location.port === '9999');
var loaderNow = new Date().getTime();
DCP1373xClient.prototype = {
  DCP1373Utils: {
    campaignOpts: {
      saveToLocal: false, // flag to save campaign's index.html to local storage. Default as false.
      expireDate: '', // is end date of using index.html from local storage, asset will be fetch from S3 and reset local storage value. Default as EMPTY.
      lifeCycle: 0 * 24 * 60 * 60 * 1000, // alternatively, set life span of local asset once campaign first time loaded to page. Default as 0 day.
      agentId: 'DCP-1373-a', // campaign ID. ESSENTIAL!!!
      selector: 'body', // location of campaign will land. ESSENTIAL!!!
      injectType: 'append', // options are: 'before', 'prepend', 'append', 'after', 'replace'. ESSENTIAL!!!
      campaignType: 'live', // options are: 'demo', 'live'. Default as 'demo'.ESSENTIAL!!!
      description: 'Uniday top banner',
      excludeDomain: [ // by default, not load campaign to any QA env for F&B
        'localhost:7001', // estore local env
        'localhost:3000', //seed local env
        'qa1.test.estore.services.vodafone.com.au',
        'qa2.test.estore.services.vodafone.com.au',
        'qa3.test.estore.services.vodafone.com.au',
        'qa4.test.estore.services.vodafone.com.au',
        'qa5.test.estore.services.vodafone.com.au',
        'qa6.test.estore.services.vodafone.com.au',
        'qa7.test.estore.services.vodafone.com.au',
        'qa8.test.estore.services.vodafone.com.au',
        'qa9.test.estore.services.vodafone.com.au',
        'qa10.test.estore.services.vodafone.com.au'
      ],
      planner: {
        // time: '2017-11-23 00:00:01 (AEDT)', // set switching time in AEDT
        // path: 'https://www.vodafone.com.au/content/crowd/agents/'   // temp path from static.vodafone
        // path: 'https://s3.amazonaws.com/vha-test-crowd-cloudfront-us-east-1-s3/content/crowd/'   // or temp path from crowd.test.services
      }
    },
    currentScriptSrc: document.currentScript ? document.currentScript.src : null,
    findAngular: function(dom) {
      // return angular controller
      return angular.element(dom).scope();
      // once get angular controller, apply function
      // hackyCtrlr = angular.element(dom).scope();
      // hackyCtrlr.$apply(function () {
      //     hackyCtrlr.showOrCollapseContacts()
      //     hackyCtrlr.viewParams.isContactsCollapsed = false;
      // })
    },
    findReact: function(dom) {
      for (var key in dom) {
          if (key.startsWith('__reactInternalInstance$')) {
              var compInternals = dom[key]._currentElement;
              var compWrapper = compInternals._owner;
              var comp = compWrapper._instance;
              return comp;
          }
      }
      return null;
    },
    setReactState: function(el, key, value){
      DCP1373xClient.prototype.DCP1373Utils.findReact(el).setState({key: value});
    },
    getReactProps: function(el, key){
      return DCP1373xClient.prototype.DCP1373Utils.findReact(el)[key];
    },
    geoLocation: {},
    getGeo: function(){
      if (!navigator.geolocation) {
        console.log('%cWarning: navigator.geolocation is NOT supported!', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
      }
      else{
        navigator.geolocation.getCurrentPosition( function(pos){
             DCP1373xClient.prototype.DCP1373Utils.geoLocation = pos;
          },
          function(err){
            DCP1373xClient.prototype.DCP1373Utils.geoLocation = err;
          },
          {
            // timeout: 5000,
            // maximumAge: 0,
            enableHighAccuracy: true
          }
        );
      }
    },
    campaignPath: function(){
      var path = 'https://www.vodafone.com.au/content/crowd/agents/'; // prod path from AWS
      if(isLocal){
        path = '//' + window.location.host + '/agents/';
      }
      if(DCP1373xClient.prototype.DCP1373Utils.campaignOpts.planner.time !== undefined){
        if(loaderNow > new Date(DCP1373xClient.prototype.DCP1373Utils.campaignOpts.planner.time).getTime()){
          path = DCP1373xClient.prototype.DCP1373Utils.campaignOpts.planner.path;
        }
      }
      return path;
    },
    getCurrentScriptParameter: function(key){
      return new URL(DCP1373xClient.prototype.DCP1373Utils.currentScriptSrc).searchParams.get(key);
    },
    tracking: function() {},
    isLocalAssetsExist: function(){
      var hasLocalIndex = localStorage.getItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_html') !== null;
      var validTimeStamp = loaderNow <= parseInt(localStorage.getItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_timestamp'));
      if (hasLocalIndex && validTimeStamp && DCP1373xClient.prototype.DCP1373Utils.campaignOpts.saveToLocal){
        return true;
      }
      else{
        localStorage.removeItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_html');
        localStorage.removeItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_timestamp');
        return false;
      }
    },
    appendScript: function(location, script, inlineScript, isAsync, aid) {
      isAsync = (isAsync !== undefined ? isAsync : false);
      var js = document.createElement('script');
      js.type = 'text/javascript';
      js.defer = isAsync;
      js.async = isAsync;
      if(script !== null){
        js.src = script[1].indexOf('//') > -1 ? script[1] : DCP1373xClient.prototype.DCP1373Utils.campaignPath() + aid + '/' + script[1];
      }
      if(inlineScript !== null){
        js.appendChild(document.createTextNode(inlineScript[1]));
      }
      location.appendChild(js);
    },
    appendStyle: function(location, style, aid) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = style.indexOf('//') > -1 ? style : DCP1373xClient.prototype.DCP1373Utils.campaignPath() + aid + '/' + style;
      document.querySelector('head').appendChild(link);
    },
    filterScriptStyle: function(location, response, aid) {
      var re = /<script\b[\s\S]*?<\/script>/gm;
      var script;
      var htmlText = response;
      while ((script = re.exec(response))) {
        var srcRe = /src=["|']([\s\S]*?)["|']/gm;
        var src = srcRe.exec(script);
        var inlineSrc = /\>([\s\S]+)<\/script>/gm.exec(script);
        var asyncRe = /async=?(["|']([\s\S]*?)["|'])?/gm;
        var asy = asyncRe.exec(script);
        var isAsync = ((asy === null || asy[2] === 'false') ? false : true);
        DCP1373xClient.prototype.DCP1373Utils.appendScript(location, src, inlineSrc, isAsync, aid);
      }

      var reSty = /<link\b[\s\S]*?\>/gm;
      var style;
      while ((style = reSty.exec(response))) {
        var styRe = /href=["|']([\s\S]*?)["|']/gm;
        var href = styRe.exec(style);
        if (href !== null) {
          DCP1373xClient.prototype.DCP1373Utils.appendStyle(location, href[1], aid);
        }
        // htmlText = htmlText.replace(style[0], ''); //remove <script> from response string
      }
      // return htmlText;
    },
    tidyCode: function(location, response, aid) {
      var re = /<script\b[\s\S]*?<\/script>/gm;
      var script;
      var htmlText = response;
      while ((script = re.exec(response))) {
        htmlText = htmlText.replace(script[0], ''); //remove <script> from response string
      }

      var reSty = /<link\b[\s\S]*?\>/gm;
      var style;
      while ((style = reSty.exec(response))) {
        htmlText = htmlText.replace(style[0], ''); //remove <script> from response string
      }
      return htmlText;
    },
    vars: {
      t_loader: null,
      t_jailbreak: null,
      t_version: null,
      t_debug: null
    }
  },
  DCP1373loaderClient: {
    init: function(campaignOpts) {
      var t0 = performance.now(); // Loader initialized time stamp
      var aid = campaignOpts.agentId;
      var sid = campaignOpts.selector;
      var insertType = campaignOpts.injectType;
      var campaignType = campaignOpts.campaignType;
      var description = campaignOpts.description;
      window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
          function(m, key, value) { // callback
        DCP1373xClient.prototype.DCP1373Utils.vars[key] = value !== undefined ? value : '';
      });
      var pg = 'local';
      if (window.VHA_A) {
        pg = window.VHA_A.page;
      }
      if(DCP1373xClient.prototype.DCP1373Utils.vars.t_version){
        aid = aid + '-' + DCP1373xClient.prototype.DCP1373Utils.vars['t_version'];
      }
      var url = DCP1373xClient.prototype.DCP1373Utils.campaignPath() + aid + '/index.html';

      var isBlocked = false;
      DCP1373xClient.prototype.DCP1373Utils.campaignOpts.excludeDomain.forEach(function(ele, ind, arr){
        if(ele === window.location.host){
          console.warn('%calert: Blocked domain '+ ele +' ! Loading paused for ' + aid + ' from ' + url, 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
          isBlocked = true;
        }
      });
      if(isBlocked){
        return false;
      }

      if (DCP1373xClient.prototype.DCP1373Utils.vars.t_loader === '0' || DCP1373xClient.prototype.DCP1373Utils.vars.t_loader === 'false') {
        if (DCP1373xClient.prototype.DCP1373Utils.vars.t_campaign) {
          aid = DCP1373xClient.prototype.DCP1373Utils.vars.t_campaign;
          url = DCP1373xClient.prototype.DCP1373Utils.campaignPath() + aid + '/index.html';
          console.warn('%calert: Loading campaign overrided by ' + aid + ' from ' + url, 'color: #00ff00; font-style: italic; background-color: #ffefef; padding: 2px');
        }
        else{
          console.warn('%calert: Loading paused for ' + aid + ' from ' + url, 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
          return false;
        }
      }

      if (campaignType === 'demo' && DCP1373xClient.prototype.DCP1373Utils.vars.t_jailbreak !== '1') {
        return false;
      }

      //check if local storage has valid assets
      if(DCP1373xClient.prototype.DCP1373Utils.isLocalAssetsExist()){
        var selector = document.querySelector(sid);
        var CROWDDiv = document.createElement('div');
        var response = localStorage.getItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_html');
        var tidyCode = '';
        CROWDDiv.className = aid + ' CROWDDiv';
        if (response !== null) {
          if (!selector) {
            console.error('%ccaution: Selector ' + sid + ' is NOT found', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
            // return false;
          }
          tidyCode = DCP1373xClient.prototype.DCP1373Utils.tidyCode(selector, response, aid);
          CROWDDiv.innerHTML = tidyCode;
          switch (insertType) {
            case 'replace':
              selector.innerHTML = CROWDDiv.outerHTML;
              break;
            case 'before':
              selector.insertAdjacentHTML('beforebegin', CROWDDiv.outerHTML);
              break;
            case 'prepend':
              selector.insertBefore(CROWDDiv, selector.firstChild);
              break;
            case 'after':
              selector.insertAdjacentHTML('afterend', CROWDDiv.outerHTML);
              break;
            default:
              //case 'append'
              selector.appendChild(CROWDDiv);
              break;
          }
          //add script to DOM after html injected
          DCP1373xClient.prototype.DCP1373Utils.filterScriptStyle(selector, response, aid);

          var t1 = performance.now(); // Loader work has done
          var loaderWorkingTime = parseInt(t1 - t0);
          if (DCP1373xClient.prototype.DCP1373Utils.vars.t_debug === '1' || DCP1373xClient.prototype.DCP1373Utils.vars.t_debug === 'true') {
            var memory = window.performance.memory;
            var memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
            var perfData = window.performance.timing;

            var connectTime = (perfData.responseEnd - perfData.requestStart);
            var pageLoadTime = (perfData.loadEventEnd - perfData.navigationStart);
            var renderTime = (perfData.domComplete - perfData.domLoading);
            console.group('loading ' + aid + ' :');
            console.log('%csucess: Load ' + aid + ' from local storage', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
            console.log('ID: ' + aid);
            console.log('Selector: ' + sid);
            console.log('Insert: ' + insertType);
            console.log('Type: ' + campaignType);
            console.log('Description: ' + description);
            console.group(' --== PERFORMANCE ==--');
            //connect time
            if (connectTime <= 1000) {
              console.log('%cconnect time: ' + connectTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
            } else if (connectTime > 1000 && connectTime < 3000) {
              console.log('%cconnect time: ' + connectTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
            } else {
              console.log('%cconnect time: ' + connectTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
            }
            //page loading time
            // if (pageLoadTime <= 5000) {
            //   console.log('%cpage loading time: ' + pageLoadTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
            // } else if (pageLoadTime > 5000 && pageLoadTime < 7000) {
            //   console.log('%cpage loading time: ' + pageLoadTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
            // } else {
            //   console.log('%cpage loading time: ' + pageLoadTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
            // }
            //page render time
            // if (renderTime <= 5000) {
            //   console.log('%cpage render time: ' + renderTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
            // } else if (renderTime > 5000 && renderTime < 7000) {
            //   console.log('%cpage render time: ' + renderTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
            // } else {
            //   console.log('%cpage render time: ' + renderTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
            // }
            //loader working time
            if (loaderWorkingTime <= 2000) {
              console.log('%cloader working time: ' + loaderWorkingTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
            } else if (loaderWorkingTime > 2000 && loaderWorkingTime < 5000) {
              console.log('%cloader working time: ' + loaderWorkingTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
            } else {
              console.log('%cloader working time: ' + loaderWorkingTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
            }
            //memory usage
            if (memoryUsage <= 5000) {
              console.log('%cmemory usage: ' + memoryUsage.toFixed(2) + '%', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
            } else if (memoryUsage > 5000 && memoryUsage < 10000) {
              console.log('%cmemory usage: ' + memoryUsage.toFixed(2) + '%', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
            } else {
              console.log('%cmemory usage: ' + memoryUsage.toFixed(2) + '%', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
            }
            console.groupEnd();
            console.log('Page: ' + pg);
            console.groupEnd();
          }
        } else {
          console.error('%calert: Local' + aid + ' assets return NULL', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
        }
      }
      else{
        $.ajax({
          method: 'GET',
          url:url,
        })
        .fail(function(jqXHR, textStatus){
          console.error('%calert: Fetching ' + aid + ' State: ' + textStatus + ' from ' + url, 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
        })
        .done(function(response){
          //save campaign index html to local storage with time stamp
          if(window.localStorage && DCP1373xClient.prototype.DCP1373Utils.campaignOpts.saveToLocal){
            localStorage.setItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_html', response);
            if(DCP1373xClient.prototype.DCP1373Utils.campaignOpts.expireDate !== ''){
              localStorage.setItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_timestamp', new Date(DCP1373xClient.prototype.DCP1373Utils.campaignOpts.expireDate).getTime());
            }
            else{
              localStorage.setItem('__'+DCP1373xClient.prototype.DCP1373Utils.campaignOpts.agentId +'_timestamp', loaderNow + DCP1373xClient.prototype.DCP1373Utils.campaignOpts.lifeCycle);
            }
          }
          var selector = document.querySelector(sid);
          var CROWDDiv = document.createElement('div');
          CROWDDiv.className = aid + ' CROWDDiv';
          if (response !== null) {
            if (!selector) {
              console.error('%ccaution: Selector' + sid + ' is NOT found', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
              // return false;
            }
            tidyCode = DCP1373xClient.prototype.DCP1373Utils.tidyCode(selector, response, aid);
            CROWDDiv.innerHTML = response;
            switch (insertType) {
              case 'replace':
                selector.innerHTML = CROWDDiv.outerHTML;
                break;
              case 'before':
                selector.insertAdjacentHTML('beforebegin', CROWDDiv.outerHTML);
                break;
              case 'prepend':
                selector.insertBefore(CROWDDiv, selector.firstChild);
                break;
              case 'after':
                selector.insertAdjacentHTML('afterend', CROWDDiv.outerHTML);
                break;
              default:
                //case 'append'
                selector.appendChild(CROWDDiv);
                break;
            }
            //add script to DOM after html injected
            DCP1373xClient.prototype.DCP1373Utils.filterScriptStyle(selector, response, aid);
            // return response;
          } else {
            console.error('%calert: Fetched ' + aid + ' State: ' + response.status + ' ' + url + ' return NULL', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px');
          }
        })
        .always(function() {
              var t1 = performance.now(); // Loader work has done
              var loaderWorkingTime = parseInt(t1 - t0);
              if (DCP1373xClient.prototype.DCP1373Utils.vars.t_debug === '1' || DCP1373xClient.prototype.DCP1373Utils.vars.t_debug === 'true') {
                var memory = window.performance.memory;
                var memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
                var perfData = window.performance.timing;

                var connectTime = (perfData.responseEnd - perfData.requestStart);
                // var pageLoadTime = (perfData.loadEventEnd - perfData.navigationStart);
                // var renderTime = (perfData.domComplete - perfData.domLoading);
                console.group('loading ' + aid + ' :');
                console.log('%csucess: Fetched ' + aid + ' ' + url, 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
                console.log('ID: ' + aid);
                console.log('Selector: ' + sid);
                console.log('Insert: ' + insertType);
                console.log('Type: ' + campaignType);
                console.log('Description: ' + description);
                console.group(' --== PERFORMANCE ==--');
                //connect time
                if (connectTime <= 1000) {
                  console.log('%cconnect time: ' + connectTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
                } else if (connectTime > 1000 && connectTime < 3000) {
                  console.log('%cconnect time: ' + connectTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
                } else {
                  console.log('%cconnect time: ' + connectTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
                }
                //page loading time
                // if (pageLoadTime <= 5000) {
                //   console.log('%cpage loading time: ' + pageLoadTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
                // } else if (pageLoadTime > 5000 && pageLoadTime < 7000) {
                //   console.log('%cpage loading time: ' + pageLoadTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
                // } else {
                //   console.log('%cpage loading time: ' + pageLoadTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
                // }
                //page render time
                // if (renderTime <= 5000) {
                //   console.log('%cpage render time: ' + renderTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
                // } else if (renderTime > 5000 && renderTime < 7000) {
                //   console.log('%cpage render time: ' + renderTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
                // } else {
                //   console.log('%cpage render time: ' + renderTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
                // }
                //loader working time
                if (loaderWorkingTime <= 2000) {
                  console.log('%cloader working time: ' + loaderWorkingTime + ' ms', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
                } else if (loaderWorkingTime > 2000 && loaderWorkingTime < 5000) {
                  console.log('%cloader working time: ' + loaderWorkingTime + ' ms', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
                } else {
                  console.log('%cloader working time: ' + loaderWorkingTime + ' ms', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
                }
                //memory usage
                if (memoryUsage <= 5000) {
                  console.log('%cmemory usage: ' + memoryUsage.toFixed(2) + '%', 'color: #2ac527; font-style: italic; background-color: #f4fff7; padding: 2px');
                } else if (memoryUsage > 5000 && memoryUsage < 10000) {
                  console.log('%cmemory usage: ' + memoryUsage.toFixed(2) + '%', 'color: #f6a11a; font-style: italic; background-color: #f4fff7; padding: 2px');
                } else {
                  console.log('%cmemory usage: ' + memoryUsage.toFixed(2) + '%', 'color: #ff3d3d; font-style: italic; background-color: #f4fff7; padding: 2px');
                }
                console.groupEnd();
                console.log('Page: ' + pg);
                console.groupEnd();
              }
        })
        ;
      }
    },
    clickTracking: function() {}
  }
};


// DCP1373xClient.prototype.DCP1373Utils.getGeo(); //get Geolocation for campaign
// make sure selector exists
var DCP1373max = 10;
var DCP1373timerHolder = setInterval(function () {
    var selector = document.querySelector(DCP1373xClient.prototype.DCP1373Utils.campaignOpts.selector);
    if(selector){
      clearInterval(DCP1373timerHolder);
      DCP1373timerHolder = null;
      DCP1373xClient.prototype.DCP1373loaderClient.init(DCP1373xClient.prototype.DCP1373Utils.campaignOpts);
    }
    else{
      DCP1373max --;
      console.error('%ccaution: We are finding' + selector + ' ...', 'color: #ff3d3d; font-style: italic; background-color: #ffefef; padding: 2px;');
    }
    if(DCP1373max === 0){
      clearInterval(DCP1373timerHolder);
      DCP1373timerHolder = null;
    }
}, 1000);
}(this));
