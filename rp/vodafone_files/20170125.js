/*
 Licences:

 SiteCatalyst code version: H.26.
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com

 Copyright 2012 jQuery Foundation and other contributors
 http://jquery.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 Cookie Monster: github.com/btomaj/Cookie-Monster
*/
if (window.location.href == "https://www.vodafone.com.au/ab-test-3") {
    console.log("Adobe Analytics H.26 is disabled");
} else {

    window.VHA_A = window.VHA_A || {};
    VHA_A.DEBUG = !0;
    VHA_A.record = VHA_A.record || [];
    VHA_A.util = VHA_A.util || {};
    VHA_A.isAjaxBlock = VHA_A.isAjaxBlock || !1;
    VHA_A.isMoblieDevice = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,
        4));
    VHA_A.runTag = "marketingTag";
    VHA_A.ua = navigator.userAgent;
    VHA_A.ga = VHA_A.ga || {};
    VHA_A.sc = VHA_A.sc || {};
    VHA_A.sc.s = VHA_A.sc.s || {};
    VHA_A.sc.s_copy = VHA_A.sc.s_copy || {};
    VHA_A.sc.t = VHA_A.sc.t || !1;
    VHA_A.sc.checkoutProcess = "NEW_ACQUISITION";
    VHA_A.isGATracking = VHA_A.isGATracking || !0;
    if (-1 < document.URL.indexOf("www.vodafone.com.au/aboutvodafone/legal/standardformsofagreement") || -1 < document.URL.indexOf(".myvodafone.com.au") || -1 < document.URL.indexOf(".myaccount.services.vodafone.com.au")) VHA_A.isGATracking = !1;
    VHA_A.ga.autoFired = !1;
    (function(a, b) {
        b = b || window;
        var c = [],
            d = !1,
            e = !1,
            g = function() {
                var a;
                if (!d) {
                    d = !0;
                    for (a = 0; a < c.length; a += 1) c[a].ctx.toString().match(/^marketingTag.*/g) || (c[a].fn.call(window, c[a].ctx), VHA_A.DEBUG && console.log('Function "' + c[a].ctx.toString() + '" triggered'));
                    c = []
                }
            },
            f = function() {
                "complete" === document.readyState && g()
            },
            h = function(a) {
                if (document.addEventListener || "load" === a.type || "complete" === document.readyState) q(), g()
            },
            q = function() {
                document.addEventListener ? (document.removeEventListener("DOMContentLoaded",
                    h, !1), window.removeEventListener("load", h, !1)) : (document.detachEvent("onreadystatechange", h), window.detachEvent("onload", h))
            };
        b[a || "docReady"] = function(a, b) {
            if (d) setTimeout(function() {
                a(b)
            }, 1);
            else if (c.push({
                    fn: a,
                    ctx: b
                }), "complete" === document.readyState) setTimeout(g, 1);
            else if (!e) {
                if (document.addEventListener) document.addEventListener("DOMContentLoaded", g, !1), window.addEventListener("load", g, !1);
                else {
                    document.attachEvent("onreadystatechange", f);
                    window.attachEvent("onload", g);
                    var h = !1;
                    try {
                        h = null ===
                            window.frameElement && document.documentElement
                    } catch (n) {}
                    h && h.doScroll && function k() {
                        if (!d) {
                            try {
                                h.doScroll("left")
                            } catch (r) {
                                return setTimeout(k, 49)
                            }
                            q();
                            g()
                        }
                    }()
                }
                e = !0
            }
        }
    })("run", VHA_A);
    VHA_A.observer = function() {
        var a = {},
            b = function(c, b) {
                var d = a[c] || [],
                    g;
                for (g = d.length; g--;) try {
                    VHA_A.run(d[g], b)
                } catch (f) {
                    VHA_A.DEBUG && console.log("Observer threw error because: " + f)
                }
            };
        return {
            on: function(c, b) {
                a[c] || (a[c] = []);
                a[c].push(b)
            },
            trigger: b,
            fire: b
        }
    }();
    VHA_A.util = function() {
        var a = VHA_A.run,
            b = [];
        return {
            cookie: function(a) {
                var b = new Date;
                "object" === typeof a && null !== a && a.expires && (a.expires = (new Date(b.setDate(b.getDate() + a.expires))).toGMTString());
                a: {
                    var c;
                    if ("object" === typeof a && null !== a) b = a.name + "=" + a.value + ";",
                    a.expires && (b = b + " Expires=" + a.expires + ";"),
                    a.path && (b = b + " Path=" + a.path + ";"),
                    a.domain && (b = b + " Domain=" + a.domain + ";"),
                    a.secure && (b += " Secure;"),
                    a.httponly && (b += " HttpOnly;"),
                    document.cookie = b;
                    else
                        for (b = document.cookie.split("; "), c = b.length; c--;)
                            if (b[c].indexOf(a +
                                    "=") + 1) {
                                a = b[c].replace(a + "=", "");
                                break a
                            }
                    a = void 0
                }
                return a
            },
            insertTag: function(c, d) {
                var e = navigator.userAgent;
                e.indexOf("KHTE") + 1 || e.indexOf("KTXN") + 1 || e.indexOf("Keynote") + 1 || d.match(/^marketingTag.*/g) || a(function() {
                    var a = document.createElement(c.type),
                        d = document.getElementsByTagName("script")[0];
                    a.async = !0;
                    switch (c.type) {
                        case "mbox":
                            for (a = b.length; a--;)
                                if (b[a] === c.mbox[0]) {
                                    mboxUpdate.apply(this, c.mbox);
                                    return
                                }
                            a = document.createElement("div");
                            c.id = "mbox" + Math.floor(1E5 * Math.random(), 10);
                            c.className =
                                "mboxDefault";
                            break;
                        case "script":
                            a.type = "text/javascript";
                            break;
                        case "iframe":
                            a.frameborder = 0;
                            a.scrolling = "no";
                            a.width = "1";
                            a.height = "1";
                            a.style.display = "none";
                            break;
                        case "img":
                            a.border = "0", a.width = "1", a.height = "1"
                    }
                    a.style.visibility = "hidden";
                    a.style.position = "absolute";
                    c.id && (a.id = c.id);
                    c.className && (a.className = c.className);
                    c.src && (a.src = c.src);
                    d.parentNode.insertBefore(a, d);
                    c.mbox && (mboxDefine(c.id, c.mbox[0]), mboxUpdate.apply(this, c.mbox), b.push(c.mbox[0]), VHA_A.DEBUG && console.log("Inserted Mbox '" +
                        c.mbox[0] + "' id: " + c.id))
                }, d)
            },
            copy: function d(a) {
                var b = a,
                    e;
                if ("object" === typeof a && null !== a)
                    if ("[object Array]" === Object.prototype.toString.call(a))
                        for (b = [], e = a.length; e--;) b[e] = d(a[e]);
                    else
                        for (e in b = {}, a) a.hasOwnProperty(e) && (b[e] = d(a[e]));
                return b
            }
        }
    }();
    VHA_A.in_array = function(a, b) {
        var c;
        for (c = 0; c < b.length; ++c)
            if (a === b[c]) return !0;
        return !1
    };
    VHA_A.match_array = function(a, b) {
        var c;
        for (c = 0; c < b.length; ++c)
            if (-1 !== a.indexOf(b[c])) return !0;
        return !1
    };
    VHA_A.find_match = function(a, b) {
        var c, d;
        for (c = 0; c < a.length; ++c)
            for (d = 0; d < b.length; ++d)
                if (a[c] === b[d]) return a[c];
        return !1
    };
    VHA_A.url_cleanup = function(a) {
        a = a.toLowerCase();
        a = a.replace(/^(.+?\/\/[^\/]+):80(\/)/, "$1$2");
        a = a.replace(/%3b/ig, ";");
        a = a.replace(/%3f/ig, "?");
        a.match(/shop.vodafone.com.au\/all-mobiles/) || (a = a.replace(/[\?;#&].*$/g, ""));
        a = a.replace(/jsessionid.*/g, "");
        a = a.replace(/atg_session_id.*/g, "");
        a = a.replace(/mboxsession.*/g, "");
        a = a.replace(/[\?;#&]\wid.*$/g, "");
        a = a.replace(/\/$/g, "");
        return a = a.replace(/\W$/g, "")
    };
    VHA_A.server_cleanup = function(a) {
        a = a.replace(/:80$/, "");
        a = a.replace(/:443$/, "");
        a = a.replace(/[.:]*$/, "");
        return a = a.toLowerCase()
    };
    VHA_A.scURL = VHA_A.url_cleanup(document.location.href);
    VHA_A.scReferrer = VHA_A.url_cleanup(document.referrer);
    VHA_A.scServer = VHA_A.server_cleanup(window.location.host);
    VHA_A.suiteSelect = function() {
        var a = "vodafone.com.au myvodafone.com.au www.three.com.au my.three.com.au vodafoneaustralia.net.au yappmobile.mobi 202.81.69.10 vodaphone.com.au force.com merchants.paycorp.com.au vbook.com.au www.discoverthenew.com.au vodafone.intelliresponse.com".split(" "),
            b = "internal test vfaus uat auth model pre rp1 staging cs14 np.syd internet.discoverthenew engagesciences.com".split(" "),
            c = ["staging"],
            d = VHA_A.util.cookie("VHA_A-mode"),
            e = document.location.pathname;
        window.vha_site &&
            (VHA_A.site = vha_site);
        VHA_A.site = VHA_A.site.replace(":", "");
        VHA_A.sc.s.prop1 = VHA_A.site;
        VHA_A.sc.s.eVar1 = VHA_A.site;
        VHA_A.site = VHA_A.site.replace(/_.+/, "");
        VHA_A.site = {
            shop: "vshop",
            3: "3brand",
            stafftlc: "istafftlc",
            vshop: "vshop",
            mshop: "mshop",
            vmy: "vmy",
            vforum: "vforum",
            mforum: "mforum",
            vblog: "vblog",
            "3brand": "3brand",
            "3my": "3my",
            intranet: "intranet",
            discoverthenew: "discoverthenew",
            planetred: "planetred",
            service: "vservice",
            campaign: "vcampaign",
            vsupport: "vsupport",
            support: "vsupport",
            vsubscriptions: "vsubscriptions",
            vbus: "vbus"
        }[VHA_A.site] || "vother";
        vha_site = VHA_A.site;
        VHA_A.sc.suite = "dh-dlobal-devo";
        if (d && "restore" !== d) console.log("Site Catalyst development suite used");
        else {
            for (d = b.length; d--;)
                if (VHA_A.scServer.indexOf(b[d]) + 1 && "auth.myvodafone.com.au" !== VHA_A.scServer) {
                    console.log("Site Catalyst development suite used");
                    return
                }
            for (d = c.length; d--;)
                if (e.indexOf(c[d]) + 1) {
                    console.log("Site Catalyst development suite used for pathname");
                    return
                }
            if ("vshop" === VHA_A.site && "shop.vodafone.com.au" !== VHA_A.scServer) console.log("Site Catalyst development suite used");
            else if ("istafftlc" === VHA_A.site || "intranet" === VHA_A.site) VHA_A.sc.suite = "v2ha-i2ntr2anet";
            else
                for (d = a.length; d--;)
                    if (-1 < VHA_A.scServer.indexOf(a[d])) {
                        VHA_A.sc.suite = "v2ha-2g2lob2al";
                        window.VHA_A.DEBUG = !1;
                        break
                    }
        }
    }();
    (VHA_A.fixPageNames = function() {
        window.s && s.pageName && !VHA_A.page && (VHA_A.page = s.pageName);
        if (VHA_A.page) {
            VHA_A.sc.s.prop50 = VHA_A.page;
            VHA_A.page = VHA_A.page.toLowerCase();
            VHA_A.page = VHA_A.page.replace(/[^a-zA-Z0-9:]/g, "-");
            VHA_A.page = VHA_A.page.replace(/:+/g, ":");
            VHA_A.page = VHA_A.page.replace(/-+/g, "-");
            VHA_A.page = VHA_A.page.replace(/-*:-*/g, ":");
            VHA_A.page = VHA_A.page.replace(/[:\-]+$/, "");
            VHA_A.page = VHA_A.page.replace(/3ecom:/, "3:shop:");
            VHA_A.page = VHA_A.page.replace(/^vcadr:/, "v:store:");
            VHA_A.page =
                VHA_A.page.replace(/^vcap:/, "v:pers:");
            VHA_A.page = VHA_A.page.replace(/^vcab:/, "v:bus:");
            VHA_A.page = VHA_A.page.replace(/^vcahs:/, "v:help:");
            VHA_A.page = VHA_A.page.replace(/^vca:/, "v:other:");
            VHA_A.page = VHA_A.page.replace(/^vcamv:/, "v:my:");
            VHA_A.page = VHA_A.page.replace(/^sf:/, "v:support:");
            VHA_A.page = VHA_A.page.replace(/^v:help:/, "v:support:");
            VHA_A.page = VHA_A.page.replace(/^v:personal/, "v:pers");
            VHA_A.page = VHA_A.page.replace(/^v:business/, "v:bus");
            VHA_A.page = VHA_A.page.replace(/^v:about-vodafone/,
                "v:about");
            VHA_A.page = VHA_A.page.replace(/^v:search/, "v:misc:search-results");
            VHA_A.page = VHA_A.page.replace(/^v:world-manuals/, "v:support:simulator:wm-container");
            VHA_A.page = VHA_A.page.replace(/^v:support:contactus/, "v:support:contact-email");
            VHA_A.page = VHA_A.page.replace(/^v:pers:support/, "v:support");
            VHA_A.page = VHA_A.page.replace(/^v:mobile-broadband-help-and-support/, "v:support:mobile-broadband");
            VHA_A.page = VHA_A.page.replace(/:+$/, ":home");
            VHA_A.page = VHA_A.page.replace(/^v:pers$/, "v:pers:home");
            VHA_A.page = VHA_A.page.replace(/^v:bus$/, "v:bus:home");
            VHA_A.page = VHA_A.page.replace(/^v:blog$/, "v:blog:home");
            VHA_A.page = VHA_A.page.replace(/^v:about$/, "v:about:home");
            VHA_A.page = VHA_A.page.replace(/^m:shop$/, "m:shop:home");
            switch (VHA_A.site) {
                case "vshop":
                    /^v:shop:/.test(VHA_A.page) || (VHA_A.page = "v:shop:" + VHA_A.page);
                    "http://shop.vodafone.com.au/all-plans?id=1700029" === document.location.href && (VHA_A.page = "v:shop:plans:prepaid:international");
                    break;
                case "manuals":
                    VHA_A.page = "v:support:simulator:" +
                        VHA_A.page;
                    break;
                case "ucms":
                    VHA_A.page = VHA_A.page.replace(/product-and-services/, "prod");
                    VHA_A.page = VHA_A.page.replace(/business-/, "");
                    VHA_A.page = VHA_A.page.replace(/international-calling-and-roaming/, "international");
                    VHA_A.page = VHA_A.page.replace(/international-roaming-for-business/, "roaming");
                    VHA_A.page = VHA_A.page.replace(/international-calling-for-business/, "calling");
                    VHA_A.page = VHA_A.page.replace(/mobile-internet-solutions/, "mobile");
                    break;
                case "vmy":
                    if (-1 === VHA_A.page.indexOf("v:my:")) {
                        var a = {
                            "/auth/login": "v:my:myvodafone:home:login-details",
                            "/selfservice/registration/mobile": "v:my:myvodafone:registration:start",
                            "/selfservice/registration/temppassword": "v:my:myvodafone:registration:temppassword",
                            "/selfservice/registration/details": "v:my:myvodafone:registration:complete-details-page",
                            "/selfservice/registration/confirmation": "v:my:myvodafone:registration:confirmation-page",
                            "/selfservice/forgottenpassword/mobile": "v:my:myvodafone:forgotten-password:enter-mobile-page",
                            "/selfservice/forgottenpassword/secretquestion": "v:my:myvodafone:forgotten-password:enter-secret-answer-page",
                            "/selfservice/forgottenpassword/confirmation": "v:my:myvodafone:forgotten-password:password-sent",
                            "/selfservice/changepassword/details": "v:my:myvodafone:change-password:enter-details-page",
                            "/selfservice/changepassword/confirmation": "v:my:myvodafone:change-password:confirmation-page",
                            "/selfservice/myvf/details": "v:my:myvodafone:quickregistration:load",
                            "/selfservice/myvf/confirmation": "v:my:myvodafone:quickregistration:success",
                            "/selfservice/myvf/tandc": "v:my:myvodafone:quickregistration:tsandcs"
                        }[window.location.pathname];
                        a ? (VHA_A.page = a, VHA_A.DEBUG && console.log("Qubit pagename found:" + VHA_A.page), window.s && "hss" === s.vha && (VHA_A.page = VHA_A.page.replace(/registration/, "registrationhandset"), VHA_A.page = VHA_A.page.replace(/login-details/, "login-details-handset"), VHA_A.DEBUG && console.log("Handset found:" + VHA_A.page))) : (VHA_A.DEBUG && console.log("Qubit pagename NOT found for " + window.location.pathname), VHA_A.page = "v:my:bad:" + VHA_A.page)
                    }
                    break;
                case "vservice":
                    /^service:/.test(VHA_A.page) && (VHA_A.page = "v:" + VHA_A.page)
            }
            VHA_A.match_array(VHA_A.page,
                "v:my: v:pers: v:bus: v:shop: v:support: v:about: v:forum: v:blog: v:service: v:other v:misc m:shop 3:my: 3:brand: i:stafftlc i:planetred v:subscriptions".split(" ")) || (VHA_A.page = "v:other:" + VHA_A.page)
        }
    })();
    VHA_A.is_a_customer = function() {
        var a = s.events.split(",");
        return VHA_A.find_match(["purchase", "event4", "event5", "event14"], a) || VHA_A.util.cookie("vodafone_auth") || "customer" === VHA_A.util.cookie("vf_customer_type")
    };

    function replaceAll() {}

    function getCookie() {}

    function container() {}

    function container0() {}

    function redirect() {}

    function testing() {}

    function omniture_onclick_event(a, b, c, d, e, g) {
        var f = s_gi(s_account);
        f.linkTrackVars = a;
        f.linkTrackEvents = b;
        f.products = ";" + c;
        f.events = d;
        f.pageName = g;
        f.tl(this, "o", e)
    }

    function omniture_minicart_onclick_event(a, b, c, d) {
        var e = s_gi(s_account);
        e.linkTrackVars = a;
        e.linkTrackEvents = b;
        e.products = "oliver";
        e.events = c;
        e.tl(this, "o", d)
    }

    function adserver() {}

    function short_domain(a) {
        return (a = a.match(/([^\/.]+.com.au)/)) ? a[1].toLowerCase() : "bad_domain"
    }

    function test_cross_domain(a, b) {
        var c = short_domain(b);
        return c === a ? 0 : "three.com.au" === c || "vodafone.com.au" === c || "myvodafone.com.au" === c ? 1 : 0
    }

    function scSearch() {
        var a = s_gi(s_account);
        a.linkTrackVars = "events";
        a.linkTrackEvents = "event6";
        a.events = "event6";
        VHA_A.DEBUG && console.log("Search Clickthrough");
        a.tl(this, "o", "Internal Search Click Through")
    }
    var scID = VHA_A.site.replace(/^(\w)/, "$1:"),
        s_account = VHA_A.sc.suite,
        s = s_gi(VHA_A.sc.suite);
    s.dynamicAccountSelection = !1;
    s.cookieDomainPeriods = "3";
    s.trackingServer = "info.vodafone.com.au";
    s.trackingServerSecure = "infos.vodafone.com.au";
    s.visitorNamespace = "vodafoneaustralia";
    s.currencyCode = "AUD";
    s.trackDownloadLinks = !0;
    s.trackExternalLinks = !0;
    s.forcedLinkTrackingTimeout = 1E3;
    s.trackInlineStats = !1;
    s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    s.linkInternalFilters = "javascript:,www.three.com.au,my.three.com.au,shop.three.com.au,blog.three.com.au,vodafone.com.au,myvodafone.com.au,vodafoneaustralia.net.au,myvodafonexpress.com.au,vodafonechristmasclone.com.au,yappmobile.mobi,makethemostofnow.com.au,vodaphone.com.au,apps.nowwhere.com.au,vodafone-email.com.au,livedev,force.com,merchants.paycorp.com.au,vbooks.com.au,vodafone.intelliresponse.com";
    s.linkLeaveQueryString = !1;
    s.linkTrackVars = "None";
    s.linkTrackEvents = "None";
    s.siteID = scID + ":url";
    s.defaultPage = "default";
    s.queryVarsList = "";
    s.pathExcludeDelim = ";";
    s.pathConcatDelim = ":";
    s.pathExcludeList = "";
    s.dstStart = "10/7/2012";
    s.dstEnd = "4/7/2013";
    s.currentYear = (new Date).getFullYear();
    s.usePlugins = !0;
    s.enableVideoTracking = !0;
    s.enableVideoTracking && (s.loadModule("Media"), s.Media.autoTrack = !1, s.Media.trackWhilePlaying = !0, s.Media.trackVars = "events,prop68,eVar68,eVar69,eVar70", s.Media.trackEvents = "event28,event63,event64,event65,event66,event67,event68", s.Media.trackMilestones = "25,50,75", s.Media.segmentByMilestones = !0, s.Media.trackUsingContextData = !0, s.Media.contextDataMapping = {
        "a.media.name": "eVar68,prop68",
        "a.media.segment": "eVar69",
        "a.contentType": "eVar70",
        "a.media.timePlayed": "event28",
        "a.media.view": "event63",
        "a.media.segmentView": "event65",
        "a.media.complete": "event64",
        "a.media.milestones": {
            25: "event66",
            50: "event67",
            75: "event68"
        }
    }, VHA_A.observer.on("mediaTracking", function(a) {
        var b = "",
            c = ["mediaLocation", "mediaId", "mediaName"],
            d = a.mediaLength,
            e;
        for (e = 0; e < c.length; e += 1) b += a.hasOwnProperty(c[e]) ? a[c[e]] + ":" : "", VHA_A.DEBUG && console.log("media name: " + b);
        b = b.substring(0, b.length - 1).replace(/:noID/, "") || "undefined";
        c = 0 < a.mediaCurrentTime ? Math.floor(a.mediaCurrentTime) : 0;
        VHA_A.DEBUG && (console.log("media play event: " + a.mediaPlayerEvent), console.log("media name: " +
            b), console.log(a));
        switch (a.mediaPlayerEvent) {
            case "play":
                0 === c ? (s.Media.open(b, d, "HTML5 Basic Player"), s.Media.play(b, c), VHA_A.DEBUG && console.log("media play event")) : s.Media.play(b, c);
                break;
            case "seeked":
                s.Media.play(b, c);
                break;
            case "seeking":
            case "pause":
                s.Media.stop(b, c);
                break;
            case "ended":
                s.Media.stop(b, c), s.Media.close(b)
        }
    }), s.Media.monitor = function(a, b) {
        "OPEN" === b.event && a.Media.track(b.name);
        "MILESTONE" === b.event && a.Media.track(b.name);
        "CLOSE" === b.event && a.Media.track(b.name)
    });
    var scCP = scCP || {};
    scCP.referrer = document.referrer;
    scCP.refQueryParam = function(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        a = (new RegExp("[\\?&]" + a + "=([^&#]*)")).exec(scCP.referrer);
        return null === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
    };
    scCP.isInternalSite = function(a) {
        var b = !1;
        if ("" !== scCP.referrer) {
            var c = s.linkInternalFilters.split(",");
            a = a.split("/")[2];
            var d;
            for (d = 0; d < c.length; d++) 0 <= a.toLowerCase().indexOf(c[d].toLowerCase()) && (b = !0)
        }
        return b
    };
    s.c_rr = s.c_r;
    s.c_r = new Function("k", "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)return v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';',i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.getTime()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}return v;");
    s.c_wr = s.c_w;
    s.c_w = new Function("k", "v", "e", "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s.ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substring(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv.indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.indexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime()){pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t){var t1=parseInt(t.substring(t.indexOf('|')+1,t.indexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");
    s.getPageName = new Function("u", "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s.queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.substring(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.indexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.defaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p.substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x;z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.substring(x+1)}return n");
    s.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");
    s.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
    s.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");
    s.getValOnce = new Function("v", "c", "e", "var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
    s.getAndPersistValue = new Function("v", "c", "e", "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);");
    s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=arry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");
    s.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
    s.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L");
    s.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
    s.join = new Function("v", "p", "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
    s.getNewRepeat = new Function("var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w('s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s.c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cval+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else return 'Repeat';");
    s.getTimeParting = new Function("t", "z", "var s=this,cy;dc=new Date('1/1/2000');if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseFloat(z);var dsts=new Date(s.dstStart);var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}if(t=='d'){return dow};if(t=='w'){return dt}}};");
    s.trackTNT = new Function("v", "p", "b", "var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s.getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");
    s.m_Media_c = "var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[ns+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if(e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostname;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if((x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||(x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";
    s.m_i("Media");
    var s_code = "",
        s_objectID;

    function s_gi(a, b, c) {
        var d = "s.version='H.26';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
            e =
            window,
            g = e.s_c_il,
            f = navigator,
            h = f.userAgent,
            f = f.appVersion,
            q = f.indexOf("MSIE "),
            p = h.indexOf("Netscape6/"),
            l, m, n, k;
        if (a && (a = a.toLowerCase(), g))
            for (m = 0; 2 > m; m++)
                for (l = 0; l < g.length; l++)
                    if (k = g[l], n = k._c, (!n || "s_c" == n || 0 < m && "s_l" == n) && (k.oun == a || k.fs && k.sa && k.fs(k.oun, a))) {
                        if (k.sa && k.sa(a), "s_c" == n) return k
                    } else k = 0;
        e.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        e.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
        e.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
        e.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
        e.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
        e.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
        e.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");
        e.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
        d = s_d(d);
        0 < q ? (g = parseInt(l = f.substring(q + 5)), 3 < g && (g = parseFloat(l))) : g = 0 < p ? parseFloat(h.substring(p + 10)) : parseFloat(f);
        if (5 > g || 0 <= f.indexOf("Opera") || 0 <= h.indexOf("Opera")) d = s_ft(d);
        k || (k = {}, e.s_c_in || (e.s_c_il = [], e.s_c_in = 0), k._il = e.s_c_il, k._in = e.s_c_in, k._il[k._in] = k, e.s_c_in++);
        k._c = "s_c";
        (new Function("s", "un", "pg", "ss", d))(k, a, b, c);
        return k
    }

    function s_giqf() {
        var a = window,
            b = a.s_giq,
            c, d, e;
        if (b)
            for (c = 0; c < b.length; c++) d = b[c], e = s_gi(d.oun), e.sa(d.un), e.setTagContainer(d.tagContainerName);
        a.s_giq = 0
    }
    s_giqf();
    VHA_A.sc.setVariables = function() {
        var a;
        s.prop10 = VHA_A.file;
        s.pageName = VHA_A.page;
        s.prop2 = VHA_A.site;
        s.eVar2 = VHA_A.site;
        s.events = s.apl(s.events, "event8", ",", 1);
        s.prop49 = s.getPageName().toLowerCase();
        "stafftlc" === s.prop1 && (s.pageName = s.prop49, s.pageName = s.pageName.replace(/url:staffcare:/, ""), s.pageName = s.pageName.replace(/-html/, ""));
        "cricket-vbooks" === s.prop1 && (s.pageName = s.prop49, s.pageName = s.pageName.replace(/url:/, "cricket-vbooks:"));
        if (s.pageType || s.pageName)
            if ("http://shop.vodafone.com.au/common/error.jsp" ===
                s.prop27) s.pageName = "v:shop:error", s.pageType = "";
            else if ("errorPage" === s.pageType || "Not Found" === document.title || VHA_A.in_array(s.pageName, ["page_404", "Home:Error", "v:404", "v:shop:error-page", "v:pers:404"])) s.pageName = "", s.pageType = "errorPage", s.prop46 = document.location.href, document.referrer && (s.prop47 = document.referrer);
        else {
            -1 < s.prop49.indexOf("v:other:url:articles:faq:") && (s.pageName = s.pageName.replace(/^v:support:/, "v:support:articles:"));
            s.eVar31 = "D=pageName";
            s.prop60 = s.prop60 || "D=pageName";
            a = s.pageName.split(":");
            var b = a.length;
            s.prop3 = a[0];
            s.channel = a[0];
            s.prop4 = a[0];
            s.prop5 = a[0];
            s.prop6 = a[0];
            2 <= b && (s.channel += ":" + a[1], s.prop4 += ":" + a[1], s.prop5 += ":" + a[1], s.prop6 += ":" + a[1]);
            3 <= b && (s.prop4 += ":" + a[2], s.prop5 += ":" + a[2], s.prop6 += ":" + a[2]);
            4 <= b && (s.prop5 += ":" + a[3], s.prop6 += ":" + a[3]);
            5 <= b && (s.prop6 += ":" + a[4]);
            s.eVar3 = s.prop3;
            s.eVar4 = "D=ch";
            s.eVar5 = "D=c4";
            s.eVar6 = "D=c5";
            s.eVar7 = "D=c6";
            s.hier1 = s.pageName.replace(/:/g, "|")
        } else s.pageName = s.prop49, s.prop48 = VHA_A.scURL;
        if ("v:my" === s.channel ||
            "v:support" === s.channel) s.prop35 = "ECare";
        s.server = window.location.host.toLowerCase();
        s.server = VHA_A.server_cleanup(s.server);
        s.prop27 = window.location.href.toLowerCase();
        s.prop27 = VHA_A.url_cleanup(s.prop27);
        s.campaign || (s.campaign = "3brand" === VHA_A.site && "3:brand:network-changes" !== s.pageName ? s.getQueryParam("cmp").toLowerCase() : s.getQueryParam("cid,cmp").toLowerCase());
        s.prop32 = s.campaign ? 'D=pageName+"|"+v0' : "D=pageName";
        s.eVar41 = s.crossVisitParticipation(s.campaign, "s_evar41", "30", "10", ">", "purchase");
        s.eVar12 || (s.eVar12 = s.getQueryParam("pid,intcmp").toLowerCase(), s.prop37 || (s.prop37 = s.eVar12));
        s.eVar15 || (s.eVar15 = s.getQueryParam("mkwid") + (s.getQueryParam("pcrid") ? "|pcrid|" + s.getQueryParam("pcrid") : "") + (s.getQueryParam("pkw") ? "|pkw|" + s.getQueryParam("pkw") : "") + (s.getQueryParam("pmt") ? "|pmt|" + s.getQueryParam("pmt") : "") + (s.getQueryParam("pdv") ? "|pdv|" + s.getQueryParam("pdv") + "|" : ""));
        s.eVar21 || (s.eVar21 = s.getQueryParam("lid").toLowerCase());
        s.prop24 = s.getNewRepeat(65).toLowerCase();
        s.eVar18 = "D=c24";
        s.prop28 = s.getTimeParting("h", "10");
        s.prop29 = s.getTimeParting("d", "10");
        s.eVar28 = "D=c28";
        s.eVar29 = "D=c29";
        s.getQueryParam("fromsearchresult") && (s.events = s.apl(s.events, "event6", ",", 1));
        var c;
        if ("v:support:searchresults" === s.pageName) {
            if (s.prop15 = s.getQueryParam("k").toLowerCase(), s.prop15) {
                s.eVar11 = "D=c15";
                s.prop17 = s.prop15.replace(/\s+/g, ",");
                s.prop17 = s.prop17.replace(/,+/g, ",");
                s.events = s.apl(s.events, "event1", ",", 1);
                try {
                    window.jQuery && jQuery("div.results-bd a").click(function() {
                        scSearch()
                    })
                } catch (d) {}
            }
        } else if ("v:forum:searchpage" ===
            s.pageName && (s.prop15 = s.getQueryParam("q").toLowerCase(), s.prop15)) {
            s.eVar11 = "D=c15";
            s.prop17 = s.prop15.replace(/\s+/g, ",");
            s.prop17 = s.prop17.replace(/,+/g, ",");
            s.events = s.apl(s.events, "event1", ",", 1);
            try {
                window.jQuery && (scSearchCount = jQuery("div.search-result-count")[0].textContent, c = scSearchCount.match(/of (\d+)/), s.prop16 = c ? c[1] : "undefined", "0" === s.prop16 && (s.prop16 = "zero"), jQuery("h2.lia-message-subject a.lia-link-navigation").click(function() {
                    scSearch()
                }))
            } catch (d) {}
            VHA_A.DEBUG && console.log("Search: There were " +
                s.prop16 + " results for '" + s.prop15 + "' words: " + s.prop17)
        }
        "support.vodafone.com.au" === document.location.host && window.jQuery && (VHA_A.DEBUG && console.log("Adding events for ecare votes"), jQuery(".rater-yes > a").click(function() {
            scRating("yes")
        }), jQuery(".rater-no > a").click(function() {
            scRating("no")
        }));
        "vforum" === VHA_A.site && ("" !== s.prop64 && "" !== s.getValOnce("yes", "forum_login", 0) && (VHA_A.DEBUG && console.log("Forum User Login:"), s.eVar13 = "v:forum:login", s.events = s.apl(s.events, "event2", ",", 1)), s.events =
            s.events.replace(/event75/, "event69"), s.events = s.events.replace(/event76/, "event70"));
        0 <= s.pageName.indexOf("3:my:my-3-login-enter-pin") && !VHA_A.util.cookie("VHA_A-My3Login") && (s.eVar13 = "Login to My 3", s.events = s.apl(s.events, "event2", ",", 1), VHA_A.util.cookie({
            name: "VHA_A-My3Login",
            value: !0,
            path: "/"
        }));
        !VHA_A.match_array(s.pageName, [":dashboard:selfservice:load", "v:my:post:", "v:my:postm:", "v:my:pre:", "v:my:prem:"]) || VHA_A.match_array(s.pageName, ["v:my:pre:activation", "v:my:pre:mbb", ":dashboard:selfservice:waiting"]) ||
            VHA_A.util.cookie("VHA_A-MyVFLogin") || (s.eVar13 = "Login to My Vodafone", s.events = s.apl(s.events, "event2", ",", 1), s.events = s.apl(s.events, "event4", ",", 1), VHA_A.util.cookie({
                name: "VHA_A-MyVFLogin",
                value: !0,
                path: "/"
            }));
        "v:support:tools:device-delivery-information-and-order-tracking" === s.pageName && window.jQuery && (VHA_A.DEBUG && console.log("Added Track Order Submit Handler"), jQuery("#regForm").submit(function() {
            scTrackOrder()
        }));
        if (VHA_A.in_array(s.pageName, "v:my:post:dashboard:selfservice:load v:my:postm:dashboard:selfservice:load v:shop:shopping-process:checkout:postpaid-order-complete v:my:postn:myacct:paymybill:confirmpay v:shop:shopping-process:checkout:newacquisition:confirmation v:shop:shopping-process:checkout:secondservice:confirmation".split(" ")) ||
            VHA_A.in_array(s.prop6, ["v:shop:upgrades:handsetlist:load", "v:shop:upgrades:devices:load"])) VHA_A.DEBUG && console.log("PostCustomer"), s.prop67 = s.eVar67 = "PostCustomer", s.eVar66 = s.prop66 = "Customer", s.prop66 = s.getAndPersistValue(s.prop66, "s_prop66", 365);
        else if (VHA_A.in_array(s.pageName, "v:my:pre:dashboard:selfservice:load v:my:pre:myacct:rechargenow:registered:success v:my:pre:myacct:rechargenow:onceoff:success v:my:pre:myacct:voucherrecharge:success v:my:pre:activation:activationcomplete:voice:success v:my:pre:activation:activationcomplete:mbb:success v:shop:shopping-process:checkout:prepaid-order-complete v:shop:shopping-process:checkout:newacquisition:prepaid:confirmation v:my:express:recharge:processrecharge:newcard v:my:express:recharge:processrecharge:registeredcard v:my:express:recharge:processrecharge:paypal v:service:activation:confirmation".split(" "))) VHA_A.DEBUG &&
            console.log("PreCustomer"), s.prop67 = s.eVar67 = "PreCustomer", s.eVar66 = s.prop66 = "Customer", s.prop66 = s.getAndPersistValue(s.prop66, "s_prop66", 365);
        else if (VHA_A.in_array(s.pageName, ["v:my:account:dashboard:show", "v:my:account:usage:dashboard"]) || VHA_A.is_a_customer()) s.eVar66 = s.prop66 = "Customer", s.prop66 = s.getAndPersistValue(s.prop66, "s_prop66", 365);
        VHA_A.in_array(s.pageName, ["v:my:pre:myacct:rechargenow:registered:success", "v:my:pren:express:onceoff:success", "v:my:pren:express:rgstrd:success", "v:my:pre:myacct:rechargenow:onceoff:success",
            "v:my:pre:myacct:voucherrecharge:success"
        ]) && (s.eVar14 = "Prepay Recharge", s.events = s.apl(s.events, "event19", ",", 1));
        "v:shop:shopping-process:checkout:newacquisition" === VHA_A.page && (s.eVar34 = "NEW_ACQUISITION");
        "vshop" === VHA_A.site && (VHA_A.in_array("scCheckout", s.events.split(",")) && s.eVar34 !== VHA_A.sc.checkoutProcess && (s.TID = Math.floor(1E12 * Math.random()), s.products = s.getAndPersistValue(s.products, "s_products", 0), s.TID = s.getAndPersistValue(s.TID, "s_tid", 0), VHA_A.DEBUG && console.log("Saving s.products:" +
                s.products + " and tid: " + s.TID)), (c = s.pageName.match(/:checkout:(prepaid|postpaid)-(payment|setup-account)/)) && s.eVar34 !== VHA_A.sc.checkoutProcess && (s.products = s.getAndPersistValue("", "s_products", 0), s.products || (s.products = ";undefined"), s.TID = "", s.TID = s.getAndPersistValue(s.TID, "s_tid", 0), s.TID || (s.TID = 1), "payment" === c[2] ? (s.events = s.apl(s.events, "event41:" + s.TID, ",", 1), VHA_A.DEBUG && console.log("Checkout Payment: Adding serialised event41: " + s.events)) : "setup-account" === c[2] && (s.events = s.apl(s.events,
                "event42:" + s.TID, ",", 1), VHA_A.DEBUG && console.log("Checkout Setup Account: Adding serialised event42: " + s.events))), (c = s.pageName.match(/(prepaid|postpaid)-order-complete/)) && s.eVar34 !== VHA_A.sc.checkoutProcess && (s.purchaseID = s.purchaseID || 1, s.eVar46 = s.purchaseID, s.products = s.products || ";undefined", s.eVar49 = [s.purchaseID, c[1], s.products, s.events].join("|"), s.prop37 = "purchase"), "v:shop:upgrades:thankyou:load" === s.pageName && (s.prop37 = "upgrade"), "v:shop:campaigns:prospect:optin-thankyou" === s.pageName &&
            (scRegistration = "yes", scRegistration = s.getValOnce(scRegistration, "scProspect", 0), "" !== scRegistration && (VHA_A.DEBUG && console.log("Prospect Optin"), s.eVar24 = "v:shop:prospect optin", s.events = s.apl(s.events, "event3", ",", 1))));
        s.tnt = s.trackTNT();
        "v:support:contact-email:thankyou" === s.pageName && (s.events = s.apl(s.events, "event34", ",", 1));
        switch (VHA_A.site) {
            case "mshop":
                "m:shop:call-options" === VHA_A.page && (s.events = s.apl(s.events, "event48", ",", 1))
        }
        a = window.orientation;
        if (90 === a || -90 === a) s.eVar73 = "Landscape";
        else if (0 === a || 180 === a) s.eVar73 = "Portrait";
        VHA_A.util.cookie("MegaMenuClickthrough") && (s.events = s.apl(s.events, "event44", ",", 0), VHA_A.util.cookie({
            name: "MegaMenuClickthrough",
            domain: "vodafone.com.au",
            path: "/",
            expires: -1
        }));
        s.eVar36 || (s.eVar36 = s.getQueryParam("vid"));
        VHA_A.ua.match(/MyVodafoneApp/i) && (a = VHA_A.ua.split("MyVodafoneApp/"), s.eVar62 = a[1])
    };
    VHA_A.sc.setVariables();
    VHA_A.sc.clearVars = function() {
        var a, b = "pageName channel products events campaign purchaseID state zip server linkName".split(" ");
        for (a = 0; 75 > a; a += 1) VHA_A.sc.s_copy["prop" + a] = s["prop" + a], VHA_A.sc.s_copy["eVar" + a] = s["eVar" + a], s["prop" + a] = "", s["eVar" + a] = "", 5 >= a && (VHA_A.sc.s_copy["hier" + a] = s["hier" + a], s["hier" + a] = "");
        for (a = 1; a < b.length; a += 1) VHA_A.sc.s_copy[b[a]] = s[b[a]], s[b[a]] = "";
        VHA_A.DEBUG && console.log("Omniture variables cleared!")
    };
    if (window.s && s.events) {
        var needle = ["purchase", "event4", "event5", "event14"],
            haystack = s.events.split(",");
        VHA_A.find_match(needle, haystack) && "function" === typeof mboxLoadSCPlugin && (VHA_A.DEBUG && console.log("TT Plugin firing"), mboxLoadSCPlugin(s))
    }
    VHA_A.observer.on("block_pageview", function() {
        VHA_A.isAjaxBlock = !0
    });
    VHA_A.observer.on("tnt", function(a) {});
    VHA_A.sc.sendPageview = function() {
        var a, b;
        s.prop8 = "Async";
        a = s.t();
        VHA_A.sc.clearVars();
        a && (b = document.createElement("div"), b.innerHTML = a, a = document.getElementsByTagName("script")[0], a.parentNode.insertBefore(b.firstChild, a))
    };
    VHA_A.observer.on("pageview", function() {
        VHA_A.DEBUG && console.log("page view s.t " + document.readyState);
        VHA_A.sc.sendPageview()
    });
    VHA_A.ga.sendPageview = function() {
        VHA_A.ga.setCustomerVariables();
        ga("require", "displayfeatures");
        VHA_A.ga.page ? ga("send", "pageview", VHA_A.ga.page) : ga("send", "pageview")
    };
    if (VHA_A.isGATracking) VHA_A.observer.on("pageview", function() {
        VHA_A.ga.sendPageview();
        VHA_A.DEBUG && (console.log("Ga fired in observer"), console.log(VHA_A.ga.autoFired))
    });
    VHA_A.observer.on("page_tracking", function(a) {
        var b, c, d, e, g, f, h = function(b) {
                var c, d;
                if (a.hasOwnProperty("oClassifications"))
                    for (c in d = a.oClassifications, d)
                        if (d.hasOwnProperty(c) && c.substring(0, 2) === b) return VHA_A.DEBUG && console.log(d[c]), d[c]
            },
            q = function(a, b) {
                return -1 !== a.indexOf(b, a.length - b.length)
            },
            p = function(a, b) {
                return a.hasOwnProperty(b) && "undefined" !== typeof a[b] ? "string" === typeof a[b] ? a[b].replace(/[,:;\|]/g, "_").trim() : a[b] : ""
            },
            l = function(n, k) {
                var r = ["bundle", "unitCount", "minTotalCost"],
                    t = ["deviceType", "brand", "device", "plan", "term"],
                    f = "";
                if ("undefined" !== typeof n) {
                    if ("[object String]" === Object.prototype.toString.call(n)) return n;
                    e = n;
                    for (b = 0; b < e.length; b += 1) {
                        c = e[b];
                        for (d = 0; d < r.length; d += 1) f += "" !== p(c, r[d]) ? ";" + p(c, r[d]) : k ? ";" : "";
                        if (k) {
                            f = f + ";;" + k + "=";
                            f += a.hasOwnProperty("orderType") ? a.orderType + ":" : "noOrderType";
                            for (d = 0; d < t.length; d += 1) f = f + p(c, t[d]) + ":";
                            f = f.substring(0, f.length - 1)
                        }
                        f += ","
                    }
                    f = f.substring(0, f.length - 1) || ";undefined"
                }
                return f
            },
            m = function(a) {
                var b = "";
                switch (!0) {
                    case /newacquisition\:prepaid/i.test(a):
                        b =
                            "prepaid";
                        break;
                    case /newacquisition/i.test(a):
                        b = "newacquisition";
                        break;
                    case /secondservice/i.test(a):
                        b = "secondservice";
                        break;
                    case /upgrade/i.test(a):
                        b = "upgrade"
                }
                return b
            };
        VHA_A.page = a.pageName;
        s.eVar34 = "v:shop:shopping-process:checkout:newacquisition" === VHA_A.page ? "NEW_ACQUISITION" : "";
        VHA_A.DEBUG && (console.log(VHA_A.page), a.hasOwnProperty("products") && console.log(VHA_A.page));
        switch (a.trackingName) {
            case "checkout":
                if ("checkout" === a.events) s.TID = Math.floor(1E12 * Math.random()), s.products = l(a.products),
                    s.products = s.getAndPersistValue(s.products, "s_products", 0), s.TID = s.getAndPersistValue(s.TID, "s_tid", 0), VHA_A.DEBUG && console.log("New checkout s.products:" + s.products + " and tid: " + s.TID), s.events = s.apl(s.events, "scCheckout", ",", 1);
                else if ("confirmation" === a.events) {
                    s.prop37 = m(VHA_A.page);
                    switch (m(VHA_A.page)) {
                        case "newacquisition":
                            a.orderType = "Postpaid";
                            break;
                        case "prepaid":
                            a.orderType = "Prepaid";
                            break;
                        case "secondservice":
                            a.orderType = "Secondservice";
                            break;
                        case "upgrade":
                            a.orderType = "Upgrade"
                    }
                    s.purchaseID =
                        a.purchaseID || 1;
                    s.eVar46 = "D=purchaseID";
                    s.transactionID = "D=purchaseID";
                    s.products = l(a.products, "evar35");
                    s.eVar49 = 'D=purchaseID+"|"+products+"|"+events';
                    s.zip = a.hasOwnProperty("zip") ? a.zip : "";
                    s.state = a.hasOwnProperty("state") ? a.state : "";
                    VHA_A.DEBUG && console.log("New checkout e.orderType:" + a.orderType);
                    a.hasOwnProperty("orderType") && ("prepaid" !== a.orderType.toLowerCase() ? s.prop67 = s.eVar67 = "PostCustomer" : "prepaid" === a.orderType.toLowerCase() && (s.prop67 = s.eVar67 = "PreCustomer"));
                    s.eVar66 = s.prop66 = "Customer";
                    s.prop66 = s.getAndPersistValue(s.prop66, "s_prop66", 365);
                    s.eVar43 = h("c2");
                    s.events = s.apl(s.events, "purchase", ",", 1);
                    VHA_A.DEBUG && (console.log("New checkout confirmation s.products:" + s.products + " and tid: " + s.TID), console.log("New checkout confirmation s.zip:" + s.zip + " and state: " + s.state))
                } else {
                    switch (a.events) {
                        case "basics":
                            g = "event11";
                            break;
                        case "address":
                            g = "event57";
                            break;
                        case "personal":
                            g = "event58";
                            break;
                        case "identification":
                            g = "event59";
                            break;
                        case "accountreview":
                            g = "event60";
                            break;
                        case "submit":
                            g =
                                "event61"
                    }
                    s.products = s.getAndPersistValue("", "s_products", 0);
                    s.products || (s.products = ";undefined");
                    s.TID = "";
                    s.TID = s.getAndPersistValue(s.TID, "s_tid", 0);
                    s.TID || (s.TID = 1);
                    s.events = s.apl(s.events, g + ":" + s.TID, ",", 1)
                }
                break;
            case "cart":
                VHA_A.page = a.pageName;
                s.events = s.apl(s.events, a.events, ",", 1);
                s.products = a.productsStr;
                break;
            case "upgradeCart":
                VHA_A.page = a.pageName;
                a.orderType = "Upgrade";
                s.events = s.apl(s.events, a.events, ",", 1);
                s.products = l(a.products, "evar35");
                break;
            case "internalSearch":
                VHA_A.page = a.pageName;
                q(VHA_A.page.toLowerCase(), ":1") && (f = h("c1").toLowerCase().trim(), VHA_A.DEBUG && console.log('serch term is:"' + f + '" end'), s.prop15 = f, s.eVar11 = "D=c15", s.prop17 = s.prop15.replace(/\s+/g, ","), s.prop17 = s.prop17.replace(/,+/g, ","), s.events = s.apl(s.events, "event1", ",", 1));
                break;
            case "upgradeLogin":
                VHA_A.page = a.pageName;
                "passCode" === a.events && (f = h("c1"), s.eVar34 = f, h("e1") && f.match(/upgrade/gi) && (s.events = s.apl(s.events, "event45", ",", 1), VHA_A.DEBUG && console.log("pageTracking for upgradeLogin pageName:" + VHA_A.page +
                    " and event is " + h("e1"))));
                break;
            case "tntPage":
                VHA_A.page = a.pageName;
                break;
            case "busapp_redibusinessindex":
                VHA_A.page = a.pageName;
                break;
            case "simActivation":
                VHA_A.page = a.pageName;
                break;
            default:
                if (h = "", function(a, b, c) {
                        for (var d in a)
                            if (a.hasOwnProperty(d) && c.hasOwnProperty(d))
                                if ("[object Array]" === Object.prototype.toString.call(c[d]))
                                    for (var e = 0; e < c[d].length; e += 1) b[c[d][e]] = a[d];
                                else if ("[object Object]" === Object.prototype.toString.call(c[d])) {
                            for (e = 0; e < c[d].variables.length; e += 1) {
                                var f = c[d].variables[0].replace(/eVar/gi,
                                    "D=v").replace(/prop/gi, "D=c");
                                0 === e ? c[d].hasOwnProperty("mapper") ? b[c[d].variables[e]] = c[d].mapper(a[d]) : b[c[d].variables[e]] = a[d] : b[c[d].variables[e]] = f
                            }
                            c[d].hasOwnProperty("events") && (b.events = s.apl(s.events, c[d].events, ",", 1))
                        } else "[object String]" === Object.prototype.toString.call(c[d]) && (b[c[d]] = a[d])
                    }(a, s, {
                        propertyName1: ["s1", "p1"],
                        propertyName2: ["s2", "p2"],
                        pageName: "pageName",
                        credit_card_register_results: {
                            variables: ["eVar16"],
                            events: "event36"
                        },
                        my_credit_top_up_traffic_sources: [""],
                        my_credit_top_up_results: {
                            variables: ["eVar25"],
                            events: "event38"
                        },
                        my_credit_payment_methods: ["eVar20"],
                        recharge_voucher_traffic_sources: [""],
                        recharge_section_traffic_sources: [""],
                        recharge_traffic_sources: [""],
                        recharge_product_type: ["eVar27"],
                        recharge_result: {
                            variables: ["eVar26"],
                            events: "event37"
                        },
                        recharge_payment_methods: ["eVar20"],
                        upgrade_eligibility: {
                            variables: ["prop54", "eVar54"],
                            mapper: function(b) {
                                return a.pageName + ":" + b
                            }
                        },
                        device_listing_check_status: {
                            variables: ["prop56", "eVar56"],
                            mapper: function(b) {
                                return a.pageName + ":" + b
                            }
                        },
                        events: {
                            variables: ["events"],
                            mapper: function(a) {
                                return s.apl(s.events, a, ",", 1)
                            }
                        },
                        products: {
                            variables: ["products"],
                            mapper: function(a) {
                                return l(a)
                            }
                        }
                    }), VHA_A.DEBUG) {
                    for (f in a) a.hasOwnProperty(f) && (h += f + " : " + a[f] + "\n");
                    console.log(h)
                }
        }
    });
    if (VHA_A.isGATracking) VHA_A.observer.on("page_tracking", function(a) {
        var b = 0,
            c = ["minTotalCost"],
            d, e, g, f;
        g = "";
        d = function(b) {
            var c, d;
            if (a.hasOwnProperty("oClassifications"))
                for (c in d = a.oClassifications, d)
                    if (d.hasOwnProperty(c) && c.substring(0, 2) === b) return VHA_A.DEBUG && console.log(d[c]), d[c]
        };
        e = function(a, b) {
            return -1 !== a.indexOf(b, a.length - b.length)
        };
        VHA_A.DEBUG && a.hasOwnProperty("products") && console.log("GA ecommerce:" + VHA_A.page);
        switch (a.trackingName) {
            case "checkout":
                VHA_A.ga.page = document.location.pathname +
                    "/" + a.events;
                VHA_A.DEBUG && console.log(VHA_A.ga.page + " Google anlytics");
                if (a.hasOwnProperty("products"))
                    for (f = a.products, d = 0; d < f.length; d += 1)
                        for (e = f[d], g = 0; g < c.length; g += 1) b += e.hasOwnProperty(c[g]) ? e[c[g]] : 0;
                if ("confirmation" === a.events) {
                    ga("require", "ec", "ec.js");
                    for (d = 0; d < f.length; d += 1) e = f[d], g = a.orderType + "/" + e.deviceType + "/" + e.plan + "/" + e.term, ga("ec:addProduct", {
                        id: e.bundle,
                        name: e.device,
                        brand: e.brand,
                        category: g,
                        price: e.minTotalCost,
                        quantity: "1"
                    });
                    ga("ec:setAction", "purchase", {
                        id: a.purchaseID ||
                            1,
                        affiliation: "eStore",
                        revenue: b,
                        shipping: "0",
                        tax: "0"
                    })
                }
                break;
            case "internalSearch":
                e(document.location.pathname, "/1") && (b = d("c1").toLowerCase().replace(/\s+/g, "+"), VHA_A.ga.page = document.location.pathname + "?q=" + b, VHA_A.DEBUG && console.log(VHA_A.ga.page))
        }
    });
    window.s && (s.prop8 = "Sync");
    s.doPlugins = function() {
        VHA_A.fixPageNames();
        VHA_A.sc.setVariables();
        for (var a in VHA_A.sc.s) VHA_A.sc.s.hasOwnProperty(a) && (s[a] = VHA_A.util.copy(VHA_A.sc.s[a]));
        s.eo || s.lnk || (VHA_A.sc.t = !0)
    };
    VHA_A.observer.on("shop_device_pageview", function(a) {
        VHA_A.page = a.pageName;
        s.products = a.products;
        s.events = "prodView,event15"
    });
    VHA_A.observer.on("shop_device_custom_link", function(a) {
        s.tl(this, "o", a.linkName)
    });
    VHA_A.observer.on("event_tracking", function(a) {
        var b = "",
            c, d, e, g, f = function(a, b) {
                var c, d = "";
                for (c = 0; c < b.length; c += 1) d += a.hasOwnProperty(b[c]) ? a[b[c]] + ":" : "";
                return d = d.substring(0, d.length - 1) || "undefined"
            },
            h = function(b) {
                var c, d;
                if (a.hasOwnProperty("oClassifications"))
                    for (c in d = a.oClassifications, d)
                        if (d.hasOwnProperty(c) && c.substring(0, 2) === b) return VHA_A.DEBUG && console.log(d[c]), d[c]
            },
            q = function(a) {
                var b = "";
                switch (!0) {
                    case /newacquisition\:prepaid/i.test(a):
                        b = "prepaid";
                        break;
                    case /newacquisition/i.test(a):
                        b =
                            "newacquisition";
                        break;
                    case /secondservice/i.test(a):
                        b = "secondservice";
                        break;
                    case /upgrade/i.test(a):
                        b = "upgrade"
                }
                return b
            },
            p = function(a, b) {
                return a.hasOwnProperty(b) && "undefined" !== typeof a[b] ? "string" === typeof a[b] ? a[b].replace(/[,:;\|]/g, "_").trim() : a[b] : ""
            },
            l = function(b, c) {
                var d = ["bundle", "unitCount", "minTotalCost"],
                    e = ["deviceType", "brand", "device", "plan", "term"],
                    f = "";
                if ("undefined" !== typeof b) {
                    if ("[object String]" === Object.prototype.toString.call(b)) return b;
                    pdts = b;
                    for (index = 0; index < pdts.length; index +=
                        1) {
                        op = pdts[index];
                        for (i = 0; i < d.length; i += 1) f += "" !== p(op, d[i]) ? ";" + p(op, d[i]) : c ? ";" : "";
                        if (c) {
                            f = f + ";;" + c + "=";
                            f += a.hasOwnProperty("orderType") ? a.orderType + ":" : "noOrderType";
                            for (i = 0; i < e.length; i += 1) f = f + p(op, e[i]) + ":";
                            f = f.substring(0, f.length - 1)
                        }
                        f += ","
                    }
                    f = f.substring(0, f.length - 1) || ";undefined"
                }
                return f
            };
        if (/_?customlink_?/i.test(a.trackingName)) {
            g = "customlink" === a.trackingName.split("_")[0] ? a.trackingName.split("_")[1] : a.trackingName.split("_")[0];
            switch (g) {
                case "longreach":
                    c = ["planName"];
                    break;
                case "manageplan":
                    c = ["object", "value"]
            }
            b = f(a, c);
            VHA_A.DEBUG && console.log("tlnkName is:" + b);
            a.trackingName = "customlink"
        }
        d = a.pageName ? a.pageName : VHA_A.page;
        switch (a.trackingName) {
            case "checkoutForm":
                a.position = q(VHA_A.page) + ":" + a.position;
                c = ["trackingName", "position", "object"];
                b = f(a, c);
                s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "prop39,eVar42",
                    prop39: b,
                    eVar42: "D=c39"
                });
                break;
            case "internalSearchClickThrough":
                s.linkTrackVars = "events";
                s.linkTrackEvents = "event6";
                s.events = "event6";
                s.tl(this, "o", a.trackingName);
                break;
            case "internalPromotion":
                if (a.value.match(/(pid|lid|v21)=[^=]+/gi)) {
                    c =
                        a.value.split("=");
                    switch (c[0].toLowerCase()) {
                        case "pid":
                            s.linkTrackVars = "eVar12,prop37";
                            s.eVar12 = c[1];
                            s.prop37 = "D=v12";
                            break;
                        case "lid":
                        case "v21":
                            s.linkTrackVars = "eVar21,prop55", s.eVar21 = c[1], s.prop55 = "D=v21"
                    }
                    VHA_A.DEBUG && console.log("event tracking: " + s.linkTrackVars + " = " + c[1]);
                    "undefined" === typeof a.href ? s.tl(this, "o", a.trackingName) : s.tl(!0, "o", a.trackingName, null, function() {
                        VHA_A.DEBUG && console.log("change to: " + a.href);
                        document.location.href = a.href
                    })
                } else VHA_A.DEBUG && console.log('Tracking code "' +
                    a.value + '" is in wrong format!');
                break;
            case "onPageLink":
                c = ["section", "subsection", "value"];
                "undefined" === typeof a.href ? s.tl(this, "o", a.trackingName, {
                    linkTrackVars: "prop55,eVar21",
                    prop55: d + ":" + f(a, c),
                    eVar21: "D=c55"
                }) : s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "prop55,eVar21",
                    prop55: d + ":" + f(a, c),
                    eVar21: "D=c55"
                }, function() {
                    VHA_A.DEBUG && console.log("change to: " + a.href);
                    document.location.href = a.href
                });
                break;
            case "ACME":
                c = ["dealerCode", "agentID"];
                switch (a.eventType) {
                    case "page_load":
                        e = f(a, c) + ":url";
                        break;
                    case "button_click":
                        e = "yes" === a.txtInput ? f(a, c) + ":txt_input" : f(a, c) + ":txt_click"
                }
                "undefined" !== typeof a.href && a.href ? s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "eVar53,prop53",
                    prop53: e,
                    eVar53: "D=c53"
                }, function() {
                    VHA_A.DEBUG && console.log("change to: " + a.href);
                    document.location.href = a.href
                }) : s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "eVar53,prop53",
                    prop53: e,
                    eVar53: "D=c53"
                });
                break;
            case "upgradeSignIn":
                s.tl(this, "o", a.trackingName, {
                    linkTrackVars: "eVar22",
                    eVar22: h("c1")
                });
                break;
            case "upgradePin":
                s.tl(this,
                    "o", a.trackingName, {
                        linkTrackVars: "eVar23",
                        eVar23: h("c1")
                    });
                break;
            case "upgradeDeviceDetails":
                c = ["pageName", "position", "value"];
                b = f(a, c);
                s.tl(!0, "o", b);
                break;
            case "shopCall":
                c = ["pageName", "trackingName", "value"];
                b = f(a, c);
                s.tl(!0, "o", b);
                break;
            case "tnt":
                s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "eVar47,list1",
                    eVar47: h("c1"),
                    list1: h("c3")
                });
                break;
            case "planGroup":
                s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "eVar40,prop40",
                    prop40: h("c4") + ":" + d,
                    eVar40: "D=c40"
                });
                break;
            case "checkoutFunnel":
                s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "products,events,eVar48",
                    linkTrackEvents: "scCheckout",
                    products: l(a.products),
                    eVar48: h("c5") + ":" + d,
                    events: "scCheckout"
                });
                break;
            case "upgradeCart":
                VHA_A.page = a.pageName;
                a.orderType = "Upgrade";
                s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "products,events",
                    linkTrackEvents: a.events,
                    products: l(a.products, "evar35"),
                    events: a.events
                });
                break;
            case "ssStatus":
                s.tl(!0, "o", "secondservice_limit:" + h("c3"));
                break;
            case "greenIDCheck":
                c = ["document", "checkStatus", "attemptLeft"];
                b = f(a, c);
                s.tl(!0, "o", a.trackingName +
                    ":" + q(VHA_A.page) + ":" + b);
                break;
            case "simActivation":
                c = ["position", "step", "value"];
                s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "prop42",
                    prop42: a.trackingName + ":" + f(a, c)
                });
                break;
            case "onPage":
                c = ["section", "subsection", "value"];
                s.tl(!0, "o", a.trackingName, {
                    linkTrackVars: "prop54,eVar54",
                    prop54: d + ":" + f(a, c),
                    eVar54: "D=c54"
                });
                break;
            case "customlink":
                s.tl(!0, "o", g + ":" + d + ":" + b);
                break;
            default:
                b = "";
                c = {};
                (function(a, b, c) {
                    b.linkTrackVars = [];
                    for (var d in a)
                        if (a.hasOwnProperty(d))
                            if ("events" === d) b.linkTrackVars.push("events"),
                                b.linkTrackEvents = b.events = s.apl(s.events, a.events, ",", 1);
                            else if (c.hasOwnProperty(d))
                        if ("[object Array]" === Object.prototype.toString.call(c[d]))
                            for (var e = 0; e < c[d].length; e += 1) b[c[d][e]] = a[d], b.linkTrackVars.push(c[d][e]);
                        else if ("[object Object]" === Object.prototype.toString.call(c[d])) {
                        for (var f = c[d].variables[0].replace(/eVar/gi, "D=v").replace(/prop/gi, "D=c"), e = 0; e < c[d].variables.length; e += 1) b.linkTrackVars.push(c[d].variables[e]), 0 === e ? c[d].hasOwnProperty("mapper") ? b[c[d].variables[e]] = c[d].mapper(a[d]) :
                            b[c[d].variables[e]] = a[d] : b[c[d].variables[e]] = f;
                        c[d].hasOwnProperty("events") && (b.linkTrackEvents = b.events = s.apl(s.events, c[d].events, ",", 1), b.linkTrackVars.push("events"))
                    } else "[object String]" === Object.prototype.toString.call(c[d]) && (b[c[d]] = a[d])
                })(a, c, {
                    pageName: "pageName",
                    credit_card_register_results: {
                        variables: ["eVar16"],
                        events: "event36"
                    },
                    my_credit_top_up_traffic_sources: [""],
                    my_credit_top_up_results: {
                        variables: ["eVar25"],
                        events: "event38"
                    },
                    my_credit_payment_methods: ["eVar20"],
                    recharge_voucher_traffic_sources: [""],
                    recharge_section_traffic_sources: [""],
                    recharge_traffic_sources: [""],
                    recharge_product_type: ["eVar27"],
                    recharge_result: {
                        variables: ["eVar26"],
                        events: "event37"
                    },
                    recharge_payment_methods: ["eVar20"],
                    upgrade_eligibility: {
                        variables: ["prop54", "eVar54"],
                        mapper: function(a) {
                            return VHA_A.page + ":" + a
                        }
                    },
                    greenIDCheck: {
                        variables: ["prop56", "eVar56"],
                        mapper: function(a) {
                            return "greenIDCheck:" + f(a, ["document", "checkStatus", "attemptLeft"])
                        }
                    },
                    redShield: {
                        variables: ["prop39", "eVar42"],
                        mapper: function(a) {
                            return "redShield:" +
                                f(a, ["dfcStatus", "dfcResult", "dfcTranxID", "dfcErrCode"])
                        }
                    },
                    events: {
                        variables: ["events"],
                        mapper: function(a) {
                            return s.apl(s.events, a, ",", 1)
                        }
                    },
                    products: {
                        variables: ["products"],
                        mapper: function(a) {
                            return l(a)
                        }
                    }
                });
                if (VHA_A.DEBUG) {
                    for (var m in a) a.hasOwnProperty(m) && (b += m + " : " + a[m] + "\n");
                    console.log(b);
                    b = "";
                    for (m in c) c.hasOwnProperty(m) && (b += m + " : " + c[m] + "\n");
                    console.log(b)
                }
                s.tl(!0, "o", "undefined" !== typeof a.trackingName && a.trackingName ? a.trackingName : "eventTracking", c)
        }
    });
    VHA_A.observer.on("247chat", function(a) {
        VHA_A.util.cookie("247chat") || ("accepted" === a.status || "reactive" === a.type ? (VHA_A.util.cookie({
            name: "247chat",
            value: !0,
            path: "/"
        }), s.tl(!0, "o", "Live chat", {
            linkTrackVars: "eVar37,events",
            linkTrackEvents: "event27",
            eVar37: a.type,
            events: "event27"
        })) : s.tl(!0, "o", "Live chat", {
            linkTrackVars: "eVar37",
            eVar37: a.type
        }))
    });
    VHA_A.observer.on("MyVF", function(a) {
        "login" === a.event && (s.events = s.apl(s.events, "event2", ",", 1), s.events = s.apl(s.events, "event4", ",", 1))
    });
    VHA_A.run(function() {
        window.jQuery && jQuery("ul#menu li.top-level a").click(function() {
            VHA_A.util.cookie({
                name: "MegaMenuClickthrough",
                value: !0,
                path: "/",
                domain: "vodafone.com.au"
            })
        })
    }, "Megamenu clickthrough");
    VHA_A.observer.on("carousel", function(a) {
        "v:pers:home" === VHA_A.page && s.tl(this, "o", "HomePage Phone Carousel click")
    });
    VHA_A.observer.on("discoverthenew", function(a) {
        var b = VHA_A.page,
            b = b + ":" + a.page + ":" + a.event;
        s.tl(this, "o", b)
    });
    VHA_A.observer.on("planpage", function(a) {
        var b = VHA_A.page;
        switch (a.event) {
            case "radioBtn":
                b = b + ":" + a.event + ":" + a.title + ":" + a.value;
                break;
            case "plan_carousel":
                b = b + ":" + a.event + ":" + a.direction + ":" + a.plan_in_the_middle + ":" + a.showing_phones;
                break;
            case "choose_phone":
                b = b + ":" + a.event + ":" + a.plan_name;
                break;
            case "switch_plans":
                b = b + ":" + a.event + ":" + a.plan_name
        }
        s.tl(this, "o", b)
    });
    VHA_A.observer.on("contactpage", function(a) {
        var b = VHA_A.page,
            b = b + ":" + a.position + ":" + a.title + ":" + (null === a.value ? "navtab" : a.value);
        s.tl(this, "o", b)
    });
    VHA_A.observer.on("customlink", function(a) {
        var b;
        a.value && (b = a.value, "v:pers:getstarted" === VHA_A.page && (s.linkTrackVars = "prop38", s.prop38 = a.value), s.tl(this, "o", b))
    });
    (function() {
        var a = VHA_A.record,
            b, c;
        VHA_A.record = {
            push: function() {
                var a, b;
                a = 0;
                for (b = arguments.length; a < b; a += 1) "[object Array]" === Object.prototype.toString.call(arguments[a]) && arguments[a].length ? VHA_A.observer.fire(arguments[a][0], arguments[a][1]) : "[object String]" === Object.prototype.toString.call(arguments[a]) && VHA_A.observer.fire(arguments[a], "")
            }
        };
        if ("[object Array]" === Object.prototype.toString.call(a) && a.length)
            for (b = 0, c = a.length; b < c; b += 1) VHA_A.record.push(a[b])
    })();
    VHA_A.run(function() {
        VHA_A.sc.t || VHA_A.isAjaxBlock || (VHA_A.DEBUG && console.log(VHA_A.page), VHA_A.sc.sendPageview())
    }, "s.t");
    VHA_A.run(function() {
        window.jQuery && jQuery(".social-media-links .facebook").click(function() {
            s.tl(this, "o", "Contact us > Facebook Link")
        })
    }, "click on social facebook");
    VHA_A.run(function() {
        window.jQuery && jQuery(".social-media-links .twitter").click(function() {
            s.tl(this, "o", "Contact us > Twitter Link")
        })
    }, "click on social twitter");
    var server = short_domain(window.location.host);
    mboxCreate = function(a) {};
    mboxDefine = function() {};
    mboxUpdate = function() {};
    VHA_A.isGATracking && (function(a, b, c, d, e, g, f) {
            a.GoogleAnalyticsObject = e;
            a[e] = a[e] || function() {
                (a[e].q = a[e].q || []).push(arguments)
            };
            a[e].l = 1 * new Date;
            g = b.createElement(c);
            f = b.getElementsByTagName(c)[0];
            g.async = 1;
            g.src = d;
            f.parentNode.insertBefore(g, f)
        }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), VHA_A.ga_account = "UA-46602817-1", VHA_A.DEBUG && (VHA_A.ga_account = "UA-46602817-3"), location.hostname.match("myvodafone.com.au") ? ga("create", VHA_A.ga_account, "auto", {
            allowLinker: !0
        }) :
        (ga("create", VHA_A.ga_account, "vodafone.com.au"), ga("require", "linker"), ga("linker:autoLink", ["selfserve.myvodafone.com.au", "myaccount.myvodafone.com.au"])), ga("require", "ec", "ec.js"));
    VHA_A.ga.setCustomerVariables = function() {
        var a = ["https://selfserve.myvodafone.com.au/myBill/do/loadSelfServiceLandingPage", "https://selfserve.myvodafone.com.au/myBill/do/manualRechargeConfirm", "https://selfserve.myvodafone.com.au/myBill/do/completeVoucherRecharge", "https://selfserve.myvodafone.com.au/registerme/do/activateRedSim/submitPortNumberAction", "https://shop.vodafone.com.au/thank-you?_requestid"];
        if (VHA_A.in_list(document.URL, "https://selfserve.myvodafone.com.au/myBill/do/loadSelfServicePostpaidLandingPageComplex https://selfserve.myvodafone.com.au/myBill/do/loadSelfServicePostpaidLandingPage https://shop.vodafone.com.au/thank-you https://selfserve.myvodafone.com.au/myBill/do/confirmPayBillNoLogin http://shop.vodafone.com.au/upgrades/handset_list.jsp http://shop.vodafone.com.au/upgrades/product.jsp?deviceSkuId".split(" ")) ||
            VHA_A.in_list(document.URL, a) || VHA_A.util.cookie("vodafone_auth") || VHA_A.util.cookie("VHA_A-customer")) VHA_A.util.cookie("VHA_A-customer") || VHA_A.util.cookie({
            name: "VHA_A-customer",
            value: "customer",
            expires: 365,
            path: "/",
            domain: ".vodafone.com.au"
        }), ga("set", "dimension4", "Customer"), VHA_A.DEBUG && console.log("GA set customer dimension 4");
        VHA_A.ua.match(/MyVodafoneApp/i) && (app_array = VHA_A.ua.split("MyVodafoneApp/"), ga("set", "dimension5", app_array[1]), VHA_A.DEBUG && console.log("GA set customer dimension 5"))
    };
    VHA_A.in_list = function(a, b) {
        var c, d;
        c = 0;
        for (d = b.length; c < d; c += 1)
            if (-1 < a.toLowerCase().indexOf(b[c].toLowerCase())) return !0;
        return !1
    };
    VHA_A.isGATracking && VHA_A.run(function() {
        VHA_A.ga.autoFired || VHA_A.isAjaxBlock || (VHA_A.DEBUG && console.log(VHA_A.ga.autoFired), VHA_A.ga.autoFired = !0, VHA_A.ga.sendPageview(), VHA_A.DEBUG && console.log("Ga auto fired"), VHA_A.ga.autoFired = !0)
    }, "GA tracking");
    if (VHA_A.isGATracking) VHA_A.observer.on("mediaTracking", function(a) {
        var b = a.mediaName;
        VHA_A.DEBUG && console.log("Google media play event: " + a.mediaPlayerEvent);
        switch (a.mediaPlayerEvent) {
            case "play":
                ga("send", "event", "video", "play", b);
                break;
            case "pause":
                ga("send", "event", "video", "pause", b);
                break;
            case "ended":
                ga("send", "event", "video", "ended", b)
        }
    });

}