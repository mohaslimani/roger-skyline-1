
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"523",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var e=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},l=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var d=0;if(0==a.length)return d;for(b=0;b\u003Ca.length;b++)c=a.charCodeAt(b),d=(d\u003C\u003C5)-d+c,d\u0026=d;return Math.abs(d)},m=function(a,d){return parseInt(a.substr(d%\n(a.length-1),2),16)\/255},h=function(){if(l(a.audience)||f){var b=m(a.anonymousid,a.seed);if(b\u003C=a.pct||f)variant=f||a.variants[Math.floor(b\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name)}),window.setTimeout(function(){var d=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),b;for(b=0;b\u003Cd.length;b++)window.analytics.trackLink(d[b],\"Experiment Success\",\n{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name),success_details:d[b].getAttribute(\"href\")||\"\"})},100)}};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array){var f=null;if(0\u003C=window.location.search.indexOf(\"gtm_abtest_force\"))for(var b=0;b\u003Ca.variants.length;b++)\"Test\"===a.variants[b].name\u0026\u0026(f=a.variants[b]);if(!document.querySelector('*[data-gtm_ab\\x3d\"'+e(a.name)+\n'\"]'))if(\"seed\"in a||(a.seed=g(a.name)),(g=",["escape",["macro",7],8,16],")\u0026\u0026\"all\"===a.audience)a.anonymousid=g.replace(\/%22\/g,\"\").replace(\/-\/g,\"\"),h();else var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){a.anonymousid=window.analytics.user().anonymousId().replace(\/-\/g,\"\");h()})},50)}}catch(k){console.log(\"runtest err\",k.message)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],";return a=null==a||\"\"==a?\"undefined\":100\u003Ca.length?a.substring(0,100).toLowerCase()+\"...\":a.toLowerCase()})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",30],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"model.user.email"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sessionID"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",97,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",95,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",94,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",96,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",93,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",98,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",27],"\u0026var=",["macro",28]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",21],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":189
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"4IDGVTPEAFC4TM2QKYNQ53",
      "vtp_customerId":"S4BPDI4QWNB57PEKEZSLIP",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":194
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":195
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/d.adroll.com\/ipixel\/S4BPDI4QWNB57PEKEZSLIP\/4IDGVTPEAFC4TM2QKYNQ53?name=be9695fc",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":197
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=ViewContent",
      "tag_id":201
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":207
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":208
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=532748\u0026conversionId=682001\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":218
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":227
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00576104",
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"flc",
      "tag_id":239
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/insight.adsrvr.org\/track\/conv\/?adv=4net0uk\u0026ct=0:ff77f96\u0026fmt=3",
      "tag_id":240
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"gYlbCMmhwKkBEMub9uED",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":241
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Lead\u0026noscript=1",
      "tag_id":242
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "tag_id":249
    },{
      "function":"__qpx",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixel_id":"b38c184aa72c43ef8fb074e64602b64e",
      "vtp_pixel_event":"GenerateLead",
      "tag_id":250
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=1068602\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",21],
      "tag_id":251
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"9BqyCNmR1aIBEMub9uED",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":253
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"qasFCOWR1aIBEID91o4D",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":254
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-68219300-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":256
    },{
      "function":"__cl",
      "tag_id":258
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":259
    },{
      "function":"__cl",
      "tag_id":260
    },{
      "function":"__cl",
      "tag_id":261
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",7],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",7],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",31],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-836091520\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-836091520\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");0\u003Cwindow.location.search.indexOf(\"\\x26subscribe\")\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){var c=document.querySelectorAll(\".bui-Button\"),e=c.length,a,d={};for(a=0;a\u003Ce;a++){var b=c[a].value||c[a].innerText;b in d?d[b]++:d[b]=1;analytics.trackLink(c[a],\"Web Interaction\",{action:\"click\",category:\"button\",name:b+(1\u003Cd[b]?\" - \"+d[b]:\"\")})}})}catch(c){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  ._gtm_announce-wrap {\n    background: none;\n    width: 100%;\n    z-index: 9;\n    position:relative;\n  }\n  ._gtm_announce-wrap a {\n    display:block;\n    position:relative;\n    top: -90px;\n    margin-bottom: -76px;\n    width:100%;\n    max-width:1168px;\n    background-color: #00b47b;\n    border: 1px solid #009969;\n    border-radius: 5px;\n    box-shadow:0 2px 4px rgba(0,0,0,0.06);\n    padding: 8px 16px;\n    color:#fff;\n    text-align:center;\n  }\n  ._gtm_announce-wrap a strong {\n    color:#fff;\n  }\n  .Home-hero .www-Container ._gtm_announce-wrap a {\n    top: 8px;\n    margin-bottom: -44px; \n  }\n  .GraphicalHero .www-Container ._gtm_announce-wrap a {\n    top: -112px;\n  }\n  @media (max-width: 768px) {\n    .GraphicalHero .www-Container ._gtm_announce-wrap a {\n      top: 0px;\n      margin-bottom:20px;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(-1\u003C[\"\",\"products\",\"pricing\",\"customers\"].indexOf(window.location.pathname.split(\"\/\")[1])){var main=document.querySelector(\".BackgroundImageHero .www-Container\")||document.querySelector(\".Home-hero .www-Container\")||document.querySelector(\".GraphicalHero .www-Container\")||document.querySelector(\".UnifiedNav-transparentHeaderPush\"),announce=document.createElement(\"div\"),text=0\u003Cwindow.location.search.indexOf(\"Referral_Invite\")?\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e You have a $50, 30-day credit from a friend. \\x3cstrong \\x3eComplete registration to get started.\\x3c\/strong\\x3e\":\n\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e Get started on DigitalOcean with a $50, 30-day credit for new users.\";announce.classList.add(\"_gtm_announce-wrap\");announce.innerHTML='\\x3ca href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?utm_source\\x3dinternal\\x26utm_campaign\\x3dwwwalertbanner\"\\x3e'+text+\"\\x3c\/a\\x3e\";main.insertBefore(announce,main.firstChild);window.analytics\u0026\u0026window.analytics.track(\"Experiment Viewed\",{experimentName:\"Referral Alert\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cookieconsent_statuschange\",function(){window.dataLayer.push({event:\"cc_dismiss\"})});function getCookie(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2==a.length)return a.pop().split(\";\").shift()}getCookie(\"cookieconsent_status\")\u0026\u0026window.dataLayer.push({event:\"cc_dismiss\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector('li[role\\x3d\"banner\"]').innerHTML='\\x3ca href\\x3d\"https:\/\/blog.digitalocean.com\/introducing-memory-optimized-droplets\/\" data-pill\\x3d\"new\" title\\x3d\" Now available: Memory-Optimized Droplets\" target\\x3d\"_blank\" rel\\x3d\"noopener\"\\x3eNow available: Memory-Optimized Droplets \\u276f\\x3c\/a\\x3e';\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"SignUp\");\u003C\/script\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Egtag(\"event\",\"conversion\",{allow_custom_scripts:!0,session_id:\"[SessionID]\",send_to:\"DC-9515217\/conv\/digit0+per_session\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=conv;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=DC-9515217\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"DC-9515217\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":233
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cnoscript\u003E\n\u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=landi0;cat=digit0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(d){d+=\"\\x3d\";var b=decodeURIComponent(document.cookie);b=b.split(\";\");for(var c=0;c\u003Cb.length;c++){for(var a=b[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(d))return a.substring(d.length,a.length)}return\"\"}function setCookie(d,b,c){var a=new Date;a.setTime(a.getTime()+6E4*c);document.cookie=d+\"\\x3d\"+escape(b)+(null==c?\"\":\";expires\\x3d\"+a.toGMTString())}\nif(\"\"==getCookie(\"sessionID\")){var randomNumberString=Math.floor(1E7*Math.random()+1).toString();setCookie(\"sessionID\",randomNumberString,30)}else{var sessionID=getCookie(\"sessionID\");setCookie(\"sessionID\",sessionID,30)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":238
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o2d65\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o2d65\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":243
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/px.ads.linkedin.com\/collect\/?pid=88957\u0026amp;conversionId=1288866\u0026amp;fmt=gif\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":244
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d){if(!c.rdt){var a=c.rdt=function(){a.sendEvent?a.sendEvent.apply(a,arguments):a.callQueue.push(arguments)};a.callQueue=[];var b=d.createElement(\"script\");b.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";b.async=!0;var e=d.getElementsByTagName(\"script\")[0];e.parentNode.insertBefore(b,e)}}(window,document);rdt(\"init\",\"t2_34hog0h9\");rdt(\"track\",\"Lead\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Sep 2019 Test\",pct:.5,audience:function(){return-1===document.cookie.indexOf(\"last_logged_in_at\")\u0026\u0026-1===document.cookie.indexOf(\"refcode\")\u0026\u0026-1===window.location.search.indexOf(\"refcode\")},variants:[{name:\"Control\",func:function(){}},{name:\"Received Promo\",func:function(){fetch(\"https:\/\/cloud.digitalocean.com\/referrals\/74a1c5d63dac\/register\",{method:\"GET\",mode:\"cors\",credentials:\"include\"});dataLayer.push({event:\"showReferralBanner\"})}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":246
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \u003Cnoscript\u003E\n \u003Cimg src=\"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=9515217;type=conv;cat=digit00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=[SessionID]?\" width=\"1\" height=\"1\" alt=\"\"\u003E\n \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":247
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"751f0436\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":248
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_segments=\"33ac2574\";adroll_adv_id=\"S4BPDI4QWNB57PEKEZSLIP\";adroll_pix_id=\"4IDGVTPEAFC4TM2QKYNQ53\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":252
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Tutorial Right Rail Hacktoberfest\",audience:function(){return 1350\u003C$(window).width()},variants:[{name:\"Show\",func:function(){$(\".featured-items-right-bar\").append('\\x3ca href\\x3d\"https:\/\/hacktoberfest.digitalocean.com\/?utm_source\\x3dcommunity\"\\x3e\\x3cimg style\\x3d\"margin-top:30px;\" src\\x3d\"https:\/\/assets.digitalocean.com\/labs\/btp\/hf19.png\" alt\\x3d\"hacktoberfest\"\\x3e\\x3c\/a\\x3e')}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o20hg\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o20hg\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":255
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":".digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"hacktoberfest.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"cloud."
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"hacktoberfest."
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"cc_dismiss"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"false"
    },{
      "function":"_gt",
      "arg0":["macro",18],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/console"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/community"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"developers"
    },{
      "function":"_sw",
      "arg0":["macro",12],
      "arg1":"hacktoberfest"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium=rtg"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium=display"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorial"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"rtg"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"kubernetes"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"containers"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"docker"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"K8S"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/welcome"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/community"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"SPP Application Complete"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"https:\/\/sammydigitalocean.typeform.com\/to\/tcFM4F"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"TypeformSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"Hatch Application Complete"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"marketplace.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",25],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tags"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"community"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"?refcode="
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"showReferralBanner"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"https:\/\/www.digitalocean.com\/community"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"\/pricing\/"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,4,6],["unless",5],["add",1]],
    [["if",7],["add",2,3,4,16,24,26,27,28,36,42,45,46,79,80]],
    [["if",8],["add",2,3,4,16,24,26,27,28,36,42,45,46,79,80]],
    [["if",0,1,9,10],["add",4,24,26,27,28,36,42,45,46,79,80]],
    [["if",13],["unless",11,12],["add",5,6,23,25,35,40,43,44,72,78,81]],
    [["if",6,14,15,16],["add",7,8,14,17]],
    [["if",1,6,17],["unless",5],["add",9,10]],
    [["if",1,6,18],["unless",5,19],["add",11,19]],
    [["if",1,6,20],["unless",5,19],["add",12,13,18]],
    [["if",21,22],["add",15]],
    [["if",6,15,16,23],["add",20,21]],
    [["if",1,24],["unless",25],["add",22,74,82]],
    [["if",13],["unless",26,27],["add",22]],
    [["if",1,2],["add",29],["block",0]],
    [["if",13,28],["add",30,31]],
    [["if",13,24,29],["add",32,33,37]],
    [["if",13,30,31],["add",34]],
    [["if",32,33,34],["add",38]],
    [["if",33,34,35],["add",38]],
    [["if",34,36,37],["add",38]],
    [["if",1,38,39,40],["add",38]],
    [["if",1,31],["unless",41,42,43,44],["add",38]],
    [["if",1,45],["unless",46],["add",39]],
    [["if",47,48],["add",41,48,49,51,91]],
    [["if",1,6,49],["add",47]],
    [["if",16],["add",50]],
    [["if",1,50],["add",52]],
    [["if",51],["add",53,54,55,56,84,85,86,88,89]],
    [["if",52,53],["add",53,54,55,56,84,85,86,88]],
    [["if",54],["add",57,58,59,60,61,90,92]],
    [["if",1,3],["add",62],["block",0]],
    [["if",34],["add",63,65,66,83]],
    [["if",34,37],["add",64]],
    [["if",1,6],["unless",5],["add",67]],
    [["if",13,55],["add",67]],
    [["if",24,29,48],["unless",56],["add",68]],
    [["if",1,59,60],["add",69]],
    [["if",48,61],["add",70]],
    [["if",34,62],["add",71]],
    [["if",1,63],["add",73]],
    [["if",24,48],["unless",64,65],["add",75]],
    [["if",24,48,66],["unless",65],["add",75]],
    [["if",67],["add",75]],
    [["if",1],["unless",70],["add",76]],
    [["if",1,71],["add",77]],
    [["if",24,29,34],["add",87]],
    [["if",24,48,72],["add",87]],
    [["if",1,24,57],["block",68]],
    [["if",0,1],["unless",58],["block",68]],
    [["if",0,48],["unless",58,68],["block",75]],
    [["if",0,48],["unless",69],["block",75]]]
},
"runtime":[
[],[50,"__qpx",[46,"a"],[52,"b",["require","sendPixel"]],[52,"c",["require","setInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","getUrl"]],[52,"f",["require","encodeUriComponent"]],[52,"g",["f",[17,[15,"a"],"pixel_id"]]],[52,"h",[17,[15,"a"],"pixel_event"]],[52,"i",["d","qp"]],[52,"j",["e",[45]]],[52,"k",["f",[15,"j"]]],[22,[29,[15,"h"],"ViewContent"],[46,["b",[0,[0,[0,[0,[0,"https://q.quora.com/_/ad/",[15,"g"]],"/pixel?tag\u003d"],[15,"h"]],"\u0026i\u003dgtm\u0026u\u003d"],[15,"k"]]]]],[22,[28,[15,"i"]],[46,["b",[0,[0,[0,"https://q.quora.com/_/ad/",[15,"g"]],"/pixel?tag\u003dViewContent\u0026i\u003dgtm\u0026u\u003d"],[15,"k"]]]]],["c","qp","1",true],[2,[15,"a"],"gtmOnSuccess",[7]]],
[]
]
,"permissions":{"__qpx":{"send_pixel":{"urls":["https:\/\/q.quora.com\/"]},"access_globals":{"keys":[{"key":"qp","read":true,"write":true,"execute":false}]},"get_url":{"urlParts":"any"}},
"null":0}


};
var aa,ba=this||self,ca=function(a){return"boolean"==typeof a},da=/^[\w+/_-]+[=]{0,2}$/,ea=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ha=function(a,b){this.K=a;this.Cg=b};ha.prototype.Sg=function(){return this.K};ha.prototype.getData=function(){return this.Cg};ha.prototype.getData=ha.prototype.getData;ha.prototype.getType=ha.prototype.Sg;var ka=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},la=function(){this.Va={};this.wb=!1;this.dd={}};la.prototype.get=function(a){return this.Va["dust."+a]};la.prototype.set=function(a,b){this.wb||(a="dust."+a,this.dd.hasOwnProperty(a)||(this.Va[a]=b))};la.prototype.has=function(a){return this.Va.hasOwnProperty("dust."+a)};var ma=function(a){var b=[],c;for(c in a.Va)a.Va.hasOwnProperty(c)&&b.push(c.substr(5));return b};
la.prototype.remove=function(a){a="dust."+a;this.wb||this.dd.hasOwnProperty(a)||delete this.Va[a]};la.prototype.O=function(){this.wb=!0};var g=function(a){this.Ya=new la;this.i=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ka(b)?this.i[Number(b)]=a[Number(b)]:this.Ya.set(b,a[b]))};aa=g.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.i.length;c++){var d=this.i[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ka(b))throw Error("RangeError: Length property must be a valid integer.");this.i.length=Number(b)}else ka(a)?this.i[Number(a)]=b:this.Ya.set(a,b)};aa.get=function(a){return"length"==a?this.length():ka(a)?this.i[Number(a)]:this.Ya.get(a)};aa.length=function(){return this.i.length};aa.za=function(){for(var a=ma(this.Ya),b=0;b<this.i.length;b++)a.push(b+"");return new g(a)};aa.remove=function(a){ka(a)?delete this.i[Number(a)]:this.Ya.remove(a)};aa.pop=function(){return this.i.pop()};
aa.push=function(a){return this.i.push.apply(this.i,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.i.shift()};aa.splice=function(a,b,c){return new g(this.i.splice.apply(this.i,arguments))};aa.unshift=function(a){return this.i.unshift.apply(this.i,Array.prototype.slice.call(arguments))};aa.has=function(a){return ka(a)&&this.i.hasOwnProperty(a)||this.Ya.has(a)};g.prototype.unshift=g.prototype.unshift;g.prototype.splice=g.prototype.splice;g.prototype.shift=g.prototype.shift;
g.prototype.push=g.prototype.push;g.prototype.pop=g.prototype.pop;g.prototype.remove=g.prototype.remove;g.prototype.getKeys=g.prototype.za;g.prototype.get=g.prototype.get;g.prototype.set=g.prototype.set;var na=function(){function a(f,h){if(b[f]){if(b[f].$b+h>b[f].max)throw Error("Quota exceeded");b[f].$b+=h}}var b={},c=void 0,d=void 0,e={oh:function(f){c=f},se:function(){c&&a(c,1)},qh:function(f){d=f},ya:function(f){d&&a(d,f)},Qh:function(f,h){b[f]=b[f]||{$b:0};b[f].max=h},Pg:function(f){return b[f]&&b[f].$b||0},reset:function(){b={}},ug:a};e.onFnConsume=e.oh;e.consumeFn=e.se;e.onStorageConsume=e.qh;e.consumeStorage=e.ya;e.setMax=e.Qh;e.getConsumed=e.Pg;e.reset=e.reset;e.consume=e.ug;return e};var oa=function(a,b){this.ca=a;this.nc=function(c,d,e){return c.apply(d,e)};this.Ca=b;this.i=new la;this.R=this.ic=void 0};oa.prototype.add=function(a,b){pa(this,a,b,!1)};oa.prototype.Sc=function(a,b){pa(this,a,b,!0)};var pa=function(a,b,c,d){if(!a.i.wb)if(a.ca.ya(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.dd["dust."+b]=!0}else a.i.set(b,c)};
oa.prototype.set=function(a,b){this.i.wb||(!this.i.has(a)&&this.Ca&&this.Ca.has(a)?this.Ca.set(a,b):(this.ca.ya(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};oa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.Ca?this.Ca.get(a):void 0};oa.prototype.has=function(a){return!!this.i.has(a)||!(!this.Ca||!this.Ca.has(a))};var qa=function(a){var b=new oa(a.ca,a);a.ic&&b.Ga(a.ic);b.oa(a.nc);b.R=a.R;return b};oa.prototype.N=function(){return this.ca};
oa.prototype.Ga=function(a){this.ic=a};oa.prototype.oa=function(a){this.nc=a};oa.prototype.O=function(){this.i.O()};oa.prototype.has=oa.prototype.has;oa.prototype.get=oa.prototype.get;oa.prototype.set=oa.prototype.set;oa.prototype.addImmutable=oa.prototype.Sc;oa.prototype.add=oa.prototype.add;var ra=function(){},sa=function(a){return"function"==typeof a},ta=function(a){return"string"==typeof a},va=function(a){return"number"==typeof a&&!isNaN(a)},wa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&wa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!va(a)||
!va(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ba=function(a,b){for(var c=new Aa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ca=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Da=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ea=function(a){return Math.round(Number(a))||0},Fa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ga=function(a){var b=[];if(wa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ha=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ia=function(){return(new Date).getTime()},Aa=function(){this.prefix="gtm.";this.values={}};Aa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Aa.prototype.get=function(a){return this.values[this.prefix+a]};Aa.prototype.contains=function(a){return void 0!==this.get(a)};
var Ja=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ma=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Na=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Oa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Pa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Qa=function(a){for(var b=u,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b};var Ra=function(a,b){la.call(this);this.Oe=a;this.Lg=b};fa(Ra,la);var Ta=function(a,b){for(var c,d=0;d<b.length&&!(c=Sa(a,b[d]),c instanceof ha);d++);return c},Sa=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Ra))throw Error("Attempting to execute non-function "+b[0]+".");return c.w.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.ic;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Ra.prototype.toString=function(){return this.Oe};Ra.prototype.getName=function(){return this.Oe};
Ra.prototype.getName=Ra.prototype.getName;Ra.prototype.za=function(){return new g(ma(this))};Ra.prototype.getKeys=Ra.prototype.za;Ra.prototype.w=function(a,b){var c=this;a.N().se();return this.Lg.apply({evaluate:function(d){var e=a;return wa(d)?Sa(e,d):d},Zc:function(d){return Ta(a,d)},getName:function(){return c.getName()},N:function(){return a.N()},h:function(){return a}},Array.prototype.slice.call(arguments,1))};Ra.prototype.invoke=Ra.prototype.w;
Ra.prototype.Ea=function(a,b){try{return this.w.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};Ra.prototype.safeInvoke=Ra.prototype.Ea;var Ua=function(){la.call(this)};fa(Ua,la);Ua.prototype.za=function(){return new g(ma(this))};Ua.prototype.getKeys=Ua.prototype.za;var Va=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,Wa={Fn:"function",Map:"Object",List:"Array"},Xa=function(a,b,c){for(var d=0;d<b.length;d++){var e=Va.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof Ra?n="Fn":l instanceof g?n="List":l instanceof Ua&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(Wa[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ya=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Za=function(a){if(null==a)return String(a);var b=Ya.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},$a=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ab=function(a){if(!a||"object"!=Za(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!$a(a,"constructor")&&!$a(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||$a(a,b)},C=function(a,b){var c=b||("array"==Za(a)?[]:{}),d;for(d in a)if($a(a,d)){var e=a[d];"array"==Za(e)?("array"!=Za(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):ab(e)?(ab(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};var cb=function(a,b){var c=[],d=[],e=function(h,k){for(var l=ma(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=xa(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.za(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof Ua){var p={};c.push(h);d.push(p);e(h,p);return p}if(h instanceof Ra){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),r=0;r<q.length;r++)q[r]=bb(q[r],b);var v=b?b.N():na(),w=new oa(v);
b&&(w.R=b.R);return f(h.w.apply(h,[w].concat(q)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},bb=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=xa(c,h);if(-1<k)return d[k];if(wa(h)||Da(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(ab(h)){var n=
new Ua;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var p=new Ra("",function(q){for(var r=Array.prototype.slice.call(arguments,0),v=0;v<r.length;v++)r[v]=cb(this.evaluate(r[v]),b);return f((0,this.h().nc)(h,h,r))});c.push(h);d.push(p);e(h,p);return p}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var db={control:function(a,b){return new ha(a,this.evaluate(b))},fn:function(a,b,c){var d=this.h(),e=this.evaluate(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.N().ya(a.length+f.length);return new Ra(a,function(){return function(h){var k=qa(d);void 0===k.R&&(k.R=this.h().R);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.evaluate(l[m]),l[m]instanceof ha)return l[m];for(var n=
e.get("length"),p=0;p<n;p++)p<l.length?k.set(e.get(p),l[p]):k.set(e.get(p),void 0);k.set("arguments",new g(l));var t=Ta(k,f);if(t instanceof ha)return"return"===t.K?t.getData():t}}())},list:function(a){var b=this.N();b.ya(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.ya(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.N(),c=new Ua,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=
this.evaluate(arguments[d+1]),h=e.length;h+="string"===typeof f?f.length:1;b.ya(h);c.set(e,f)}return c},undefined:function(){}};function eb(a,b){var c=Sa(a,b);if(c instanceof ha||c instanceof Ra||c instanceof g||c instanceof Ua||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var ib=function(){this.ca=na();this.Aa=new oa(this.ca)};aa=ib.prototype;aa.wa=function(a,b){var c=new Ra(a,b);c.O();this.Aa.set(a,c)};aa.ne=function(a,b){db.hasOwnProperty(a)&&this.wa(b||a,db[a])};aa.N=function(){return this.ca};aa.uc=function(){this.ca=na();this.Aa.ca=this.ca};aa.Ga=function(a){this.Aa.Ga(a)};
aa.oa=function(a){this.Aa.oa(a)};aa.Ta=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.zd(c)};aa.zd=function(a){for(var b,c=0;c<arguments.length;c++)b=eb(this.Aa,arguments[c]);return b};aa.vc=function(a,b){var c=qa(this.Aa);c.R=a;for(var d,e=1;e<arguments.length;e++)d=eb(c,arguments[e]);return d};aa.O=function(){this.Aa.O()};ib.prototype.makeImmutable=ib.prototype.O;ib.prototype.run=ib.prototype.zd;ib.prototype.execute=ib.prototype.Ta;ib.prototype.setJavaScriptProxy=ib.prototype.oa;
ib.prototype.resetQuota=ib.prototype.uc;ib.prototype.getQuota=ib.prototype.N;ib.prototype.addNativeInstruction=ib.prototype.ne;ib.prototype.addInstruction=ib.prototype.wa;var jb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var kb={Uh:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.w(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.w(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.w(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.w(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");var h;for(h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.w(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
var h;for(h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.w(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=jb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?
d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.w(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=jb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.w(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var lb={ADD:0,AND:1,APPLY:2,ASSIGN:3,BITWISE_AND:56,BITWISE_LEFT_SHIFT:57,BITWISE_NOT:58,BITWISE_OR:59,BITWISE_RIGHT_SHIFT:60,BITWISE_UNSIGNED_RIGHT_SHIFT:61,BITWISE_XOR:62,BLOCK:53,BREAK:4,CASE:5,CONST:52,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,FOR_IN_CONST:54,FOR_IN_LET:55,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,
IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42},mb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),nb=new ha("break"),ob=new ha("continue"),
pb=function(a,b){return this.evaluate(a)+this.evaluate(b)},qb=function(a,b){return this.evaluate(a)&&this.evaluate(b)},rb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");
}if("string"==typeof a){if(0<=xa(mb,b))return bb(a[b].apply(a,jb(c)),this.h());throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof Ra){var e=jb(c);e.unshift(this.h());return d.w.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=xa(kb.Uh,b)){var f=jb(c);f.unshift(this.h());return kb[b].apply(a,f)}}if(a instanceof Ra||a instanceof Ua){if(a.has(b)){var h=a.get(b);if(h instanceof Ra){var k=jb(c);k.unshift(this.h());return h.w.apply(h,
k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof Ra?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,jb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},sb=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.h();if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.evaluate(b);c.set(a,d);return d},tb=function(a){var b=qa(this.h()),
c=Ta(b,Array.prototype.slice.apply(arguments));if(c instanceof ha)return c},vb=function(){return nb},wb=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof ha)return d}},xb=function(a){for(var b=this.h(),c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.evaluate(arguments[c+1]);b.Sc(d,e)}}},yb=function(){return ob},zb=function(a,b,c){var d=new g;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[lb.FN,
a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.h().set(a,this.evaluate(f))},Ab=function(a,b){return this.evaluate(a)/this.evaluate(b)},Bb=function(a,b){return this.evaluate(a)==this.evaluate(b)},Db=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
function Eb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=Ta(e,c);if(f instanceof ha){if("break"==f.K)break;if("return"==f.K)return f}}else if(b instanceof Ua||b instanceof g||b instanceof Ra)for(var h=b.za(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=Ta(m,c);if(n instanceof ha){if("break"==n.K)break;if("return"==n.K)return n}}}
var Fb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Eb(function(e){d.set(a,e);return d},b,c)},Gb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Eb(function(e){var f=qa(d);f.Sc(a,e);return f},b,c)},Hb=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.h();return Eb(function(e){var f=qa(d);f.add(a,e);return f},b,c)},Ib=function(a){return this.h().get(this.evaluate(a))},
Jb=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");a instanceof Ua||a instanceof g||a instanceof Ra?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ka(b)&&(c=a[b]));return c},Kb=function(a,b){return this.evaluate(a)>this.evaluate(b)},Lb=function(a,b){return this.evaluate(a)>=this.evaluate(b)},Mb=function(a,b){return this.evaluate(a)===this.evaluate(b)},Nb=function(a,b){return this.evaluate(a)!==this.evaluate(b)},
Ob=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.Zc(d);if(e instanceof ha)return e},Pb=function(a,b){return this.evaluate(a)<this.evaluate(b)},Qb=function(a,b){return this.evaluate(a)<=this.evaluate(b)},Rb=function(a,b){return this.evaluate(a)%this.evaluate(b)},Sb=function(a,b){return this.evaluate(a)*this.evaluate(b)},Tb=function(a){return-this.evaluate(a)},Ub=function(a){return!this.evaluate(a)},Vb=function(a,b){return this.evaluate(a)!=this.evaluate(b)},
Wb=function(){return null},Xb=function(a,b){return this.evaluate(a)||this.evaluate(b)},Yb=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c},Zb=function(a){return this.evaluate(a)},$b=function(a){return Array.prototype.slice.apply(arguments)},ac=function(a){return new ha("return",this.evaluate(a))},bc=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof Ra||a instanceof
g||a instanceof Ua)&&a.set(b,c);return c},cc=function(a,b){return this.evaluate(a)-this.evaluate(b)},dc=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!wa(b)||!wa(c))throw Error("Error: Malformed switch instruction.");for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof ha){var h=d.K;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof
ha&&("return"==d.K||"continue"==d.K)))return d},ec=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)},fc=function(a){a=this.evaluate(a);return a instanceof Ra?"function":typeof a},gc=function(a){for(var b=this.h(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},hc=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.Zc(f),e instanceof ha)){if("break"==e.K)return;if("return"==e.K)return e}for(;this.evaluate(a);){e=this.Zc(f);
if(e instanceof ha){if("break"==e.K)break;if("return"==e.K)return e}this.evaluate(b)}},ic=function(a){return~Number(this.evaluate(a))},jc=function(a,b){return Number(this.evaluate(a))<<Number(this.evaluate(b))},kc=function(a,b){return Number(this.evaluate(a))>>Number(this.evaluate(b))},lc=function(a,b){return Number(this.evaluate(a))>>>Number(this.evaluate(b))},mc=function(a,b){return Number(this.evaluate(a))&Number(this.evaluate(b))},nc=function(a,b){return Number(this.evaluate(a))^Number(this.evaluate(b))},
oc=function(a,b){return Number(this.evaluate(a))|Number(this.evaluate(b))};var rc=function(){this.Je=!1;this.aa=new ib;pc(this);this.Je=!0};rc.prototype.gh=function(){return this.Je};rc.prototype.isInitialized=rc.prototype.gh;rc.prototype.Ta=function(a){return this.aa.zd(a)};rc.prototype.execute=rc.prototype.Ta;rc.prototype.vc=function(a,b){return this.aa.vc(a,b)};rc.prototype.runProgram=rc.prototype.vc;rc.prototype.O=function(){this.aa.O()};rc.prototype.makeImmutable=rc.prototype.O;
var pc=function(a){function b(f,h){e.aa.ne(f,String(h))}function c(f,h){e.aa.wa(String(d[f]),h)}var d=lb,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",pb);c("AND",qb);c("APPLY",rb);c("ASSIGN",sb);c("BLOCK",tb);c("BREAK",vb);c("CASE",wb);c("CONST",xb);c("CONTINUE",yb);c("DEFAULT",wb);c("DEFN",zb);c("DIVIDE",Ab);c("EQUALS",Bb);c("EXPRESSION_LIST",Db);c("FOR_IN",Fb);c("FOR_IN_CONST",Gb);c("FOR_IN_LET",Hb);c("GET",Ib);c("GET_INDEX",
Jb);c("GET_PROPERTY",Jb);c("GREATER_THAN",Kb);c("GREATER_THAN_EQUALS",Lb);c("IDENTITY_EQUALS",Mb);c("IDENTITY_NOT_EQUALS",Nb);c("IF",Ob);c("LESS_THAN",Pb);c("LESS_THAN_EQUALS",Qb);c("MODULUS",Rb);c("MULTIPLY",Sb);c("NEGATE",Tb);c("NOT",Ub);c("NOT_EQUALS",Vb);c("NULL",Wb);c("OR",Xb);c("POST_DECREMENT",Yb);c("POST_INCREMENT",Yb);c("PRE_DECREMENT",Zb);c("PRE_INCREMENT",Zb);c("QUOTE",$b);c("RETURN",ac);c("SET_PROPERTY",bc);c("SUBTRACT",cc);c("SWITCH",dc);c("TERNARY",ec);c("TYPEOF",fc);c("VAR",gc);c("WHILE",
hc);c("BITWISE_NOT",ic);c("BITWISE_LEFT_SHIFT",jc);c("BITWISE_RIGHT_SHIFT",kc);c("BITWISE_UNSIGNED_RIGHT_SHIFT",lc);c("BITWISE_AND",mc);c("BITWISE_XOR",nc);c("BITWISE_OR",oc)};rc.prototype.wa=function(a,b){this.aa.wa(a,b)};rc.prototype.addInstruction=rc.prototype.wa;rc.prototype.N=function(){return this.aa.N()};rc.prototype.getQuota=rc.prototype.N;rc.prototype.uc=function(){this.aa.uc()};rc.prototype.resetQuota=rc.prototype.uc;rc.prototype.Ga=function(a){this.aa.Ga(a)};rc.prototype.oa=function(a){this.aa.oa(a)};
rc.prototype.setJavaScriptProxy=rc.prototype.oa;
var sc=[],tc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},uc=function(a){return tc[a]},vc=/[\x00\x22\x26\x27\x3c\x3e]/g;var zc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ac={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Bc=function(a){return Ac[a]};sc[7]=function(a){return String(a).replace(zc,Bc)};
sc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(zc,Bc)+"'"}};var Jc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Kc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Lc=function(a){return Kc[a]};sc[16]=function(a){return a};var Nc;
var Oc=[],Pc=[],Qc=[],Rc=[],Sc=[],Tc={},Uc,Vc,Wc,Xc=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Tc[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[d?f:f.substr(4)]=a[f]);return d?Tc[c](e):Nc(c,e,b)},ad=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$c(a[e],b,c));return d},bd=
function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Tc[b];return c?c.priorityOverride||0:0},$c=function(a,b,c){if(wa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($c(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Oc[f];if(!h||b.fd(h))return;c[f]=!0;try{var k=ad(h,b,c);k.vtp_gtmEventId=b.id;d=Zc(k,b);Wc&&(d=Wc.wg(d,k))}catch(w){b.Ne&&b.Ne(w,Number(f)),d=!1}c[f]=!1;return d;case "map":d=
{};for(var l=1;l<a.length;l+=2)d[$c(a[l],b,c)]=$c(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$c(a[n],b,c);Vc&&(m=m||p===Vc.Rb);d.push(p)}return Vc&&m?Vc.zg(d):d.join("");case "escape":d=$c(a[1],b,c);if(Vc&&wa(a[1])&&"macro"===a[1][0]&&Vc.hh(a))return Vc.yh(d);d=String(d);for(var t=2;t<a.length;t++)sc[a[t]]&&(d=sc[a[t]](d));return d;case "tag":var q=a[1];if(!Rc[q])throw Error("Unable to resolve tag reference "+q+".");return d={ye:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=cd(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cd=function(a,b,c){try{return Uc(ad(a,b,c))}catch(d){JSON.stringify(a)}return null};var dd=function(){var a=function(b){return{toString:function(){return b}}};return{Ld:a("convert_case_to"),Md:a("convert_false_to"),Nd:a("convert_null_to"),Od:a("convert_true_to"),Pd:a("convert_undefined_to"),ii:a("debug_mode_metadata"),va:a("function"),Kf:a("instance_name"),Lf:a("live_only"),Mf:a("malware_disabled"),Nf:a("metadata"),ki:a("original_vendor_template_id"),Of:a("once_per_event"),fe:a("once_per_load"),he:a("setup_tags"),ie:a("tag_id"),je:a("teardown_tags")}}();var ed=function(a,b,c){this.wh=a;this.th=b;this.mh=c};fa(ed,Error);ed.prototype.getParameters=function(){return this.th};var fd=function(a,b){if(wa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)fd(a[c],b[c])}};var hd=function(){return function(a,b){a instanceof gd||(a=new gd(a));b&&a.ve.push(b);throw a;}},gd=function(a){this.rh=a;this.ve=[]};fa(gd,Error);var id=null,ld=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];id=jd(a);for(var e=0;e<Pc.length;e++){var f=Pc[e],h=kd(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<Rc.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},kd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=id(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],f=0;f<e.length;f++){var h=id(e[f]);if(null===h)return null;
if(h)return!1}return!0},jd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cd(Qc[c],a));return b[c]}};var md=function(){this.Ab={}};md.prototype.Tc=function(a,b){this.Ab[a]?this.Ab[a].push(b):this.Ab[a]=[b]};function nd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new ed(c,d,h);}}
var od=function(a,b,c){return function(){var d=arguments[0];if(d){var e=a.Ab[d],f=a.Ab.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));nd(e,b,d,h);nd(f,b,d,h)}}}};var rd=function(a){var b=pd.s,c=this;this.Ue=new md;this.pe={};var d={},e=od(this.Ue,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ca(a,function(f,h){var k={};Ca(h,function(l,m){var n,p=Xc(l,m);p.vtp_permissionName=l;p.vtp_createPermissionError=qd;n=Zc(p);k[l]=n.assert;d[l]||(d[l]=n.J)});c.pe[f]=function(l,m){var n=k[l];if(!n)throw qd(l,{},"The requested permission "+l+" is not configured.");var p=Array.prototype.slice.call(arguments,
0);n.apply(void 0,p);e.apply(void 0,p)}})};rd.prototype.Tc=function(a,b){this.Ue.Tc(a,b)};var td=function(a){return sd.pe[a]||function(){}};function qd(a,b,c){return new ed(a,b,c)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var wd=function(a){Xa(this.getName(),["uri:!string"],arguments);try{return decodeURI(a)}catch(b){}};var xd=function(a){Xa(this.getName(),["uri:!string"],arguments);try{return decodeURIComponent(a)}catch(b){}};var yd=function(a){Xa(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var zd=function(a){Xa(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var Ad=function(a,b){Xa(this.getName(),["min:!number","max:!number"],arguments);return za(a,b)};var Bd=function(){return(new Date).getTime()};var Cd=function(a,b,c){var d=a.h().R;if(!d)throw Error("Missing program state.");d.eg.apply(null,Array.prototype.slice.call(arguments,1))};var Dd=!1;var Ed={bi:'',Hg:''},Fd=function(){Cd(this,"read_container_data");var a=new Ua;a.set("containerId",'GTM-KHWBBT');a.set("version",'523');a.set("environmentName",'');a.set("debugMode",Dd);a.set("previewMode",Fa(Ed.bi));a.set("environmentMode",Fa(Ed.Hg));a.O();return a};var Gd=function(a){return null===a?"null":a instanceof g?"array":a instanceof Ra?"function":typeof a};var Hd=function(a){return Ea(cb(a,this.h()))};var Id=function(a){return Number(cb(a,this.h()))};var Jd=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Kd=function(a,b,c){Xa(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);for(var d=new Ua,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Ua&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null};function Ld(){var a=Math[Md].bind(Math);return function(){for(var b=[],c=this.h(),d=0;d<arguments.length;++d)b.push(cb(arguments[d],c));return a.apply(null,b)}}for(var Nd="floor ceil round max min abs pow sqrt".split(" "),Od={},Pd=0;Pd<Nd.length;Pd++){var Md=Nd[Pd];Math.hasOwnProperty(Md)&&(Od[Md]=Ld())};var Qd=function(a,b){var c=new Ra(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.O();return c};var Rd=function(){var a={};return{Qg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Rh:function(b,c){a[b]=c}}},Sd=function(a,b){Xa(this.getName(),["apiName:!string","mock:?*"],arguments);};var Td=function(){this.sc={}};Td.prototype.get=function(a,b){var c=this.sc.hasOwnProperty(a)?this.sc[a]:void 0;return c};
Td.prototype.add=function(a,b){if(this.sc.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(!b)throw"Attempting to add an undefined implementation: "+a+".";var c=this.sc,d;if(sa(b))d=Qd(a,b);else{var e=new Ua,f;for(f in b)if(b.hasOwnProperty(f)){var h=b[f];sa(h)?e.set(f,Qd(a+"_"+f,h)):(va(h)||ta(h)||"boolean"==typeof h)&&e.set(f,h)}e.O();d=e}c[a]=d};Td.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var u=window,D=document,Ud=navigator,Vd=D.currentScript&&D.currentScript.src,Wd=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Xd=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Yd=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Xd(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var f=ba.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Zd=function(){if(Vd){var a=Vd.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},$d=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Xd(c,b);void 0!==a&&(c.src=a);return c},ae=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},be=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ce=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){u.setTimeout(a,0)},de=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},ee=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},fe=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ge=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},he=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Fc:"event_callback",gb:"event_timeout",fa:"gtag.config",W:"allow_ad_personalization_signals",Y:"cookie_expires",fb:"cookie_update",Ma:"session_duration"};var ve=/[A-Z]+/,we=/\s/,xe=function(a){if(ta(a)&&(a=Ha(a),!we.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ve.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],m:d}}}}},ze=function(a){for(var b={},c=0;c<a.length;++c){var d=xe(a[c]);d&&(b[d.id]=d)}ye(b);var e=[];Ca(b,function(f,h){e.push(h)});return e};
function ye(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.m[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var pd={},Ae=null,Be=Math.random();pd.s="GTM-KHWBBT";pd.Vb="9i1";var Ce={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},De="www.googletagmanager.com/gtm.js";var Ee=De,Fe=null,Ge=null,He=null,Ie="//www.googletagmanager.com/a?id="+pd.s+"&cv=523",Je={},Ke={},Le=function(){var a=Ae.sequence||0;Ae.sequence=a+1;return a};var Me={},Ne=function(a,b){Me[a]=Me[a]||[];Me[a][b]=!0},Oe=function(a){for(var b=[],c=Me[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Pe=function(){return"&tc="+Rc.filter(function(a){return a}).length},Ze=function(){Qe&&(u.clearTimeout(Qe),Qe=void 0);void 0===Re||Se[Re]&&!Te||(Ue[Re]||Ve.jh()||0>=We--?(Ne("GTM",1),Ue[Re]=!0):(Ve.Jh(),ae(Xe()),Se[Re]=!0,Ye=Te=""))},Xe=function(){var a=Re;if(void 0===a)return"";var b=Oe("GTM"),c=Oe("TAGGING");return[$e,Se[a]?"":"&es=1",af[a],b?"&u="+b:"",c?"&ut="+c:"",Pe(),Te,Ye,"&z=0"].join("")},bf=function(){return[Ie,"&v=3&t=t","&pid="+za(),"&rv="+pd.Vb].join("")},cf="0.005000">
Math.random(),$e=bf(),df=function(){$e=bf()},Se={},Te="",Ye="",Re=void 0,af={},Ue={},Qe=void 0,Ve=function(a,b){var c=0,d=0;return{jh:function(){if(c<a)return!1;Ia()-d>=b&&(c=0);return c>=a},Jh:function(){Ia()-d>=b&&(c=0);c++;d=Ia()}}}(2,1E3),We=1E3,ef=function(a,b){if(cf&&!Ue[a]&&Re!==a){Ze();Re=a;Te="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";af[a]="&e="+c+"&eid="+a;Qe||(Qe=u.setTimeout(Ze,500))}},ff=function(a,b,c){if(cf&&!Ue[a]&&b){a!==Re&&(Ze(),Re=a);var d=String(b[dd.va]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Te=Te?Te+"."+e:"&tr="+e;Qe||(Qe=u.setTimeout(Ze,500));2022<=Xe().length&&Ze()}};var gf={},hf=new Aa,jf={},kf={},of={name:"dataLayer",set:function(a,b){C(lf(a,b),jf);mf()},get:function(a){return nf(a,2)},reset:function(){hf=new Aa;jf={};mf()}},nf=function(a,b){if(2!=b){var c=hf.get(a);if(cf){var d=pf(a);c!==d&&Ne("GTM",5)}return c}return pf(a)},pf=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:rf(d)},rf=function(a){for(var b=jf,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var uf=function(a,b){kf.hasOwnProperty(a)||(hf.set(a,b),C(lf(a,b),jf),mf())},lf=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},mf=function(a){Ca(kf,function(b,c){hf.set(b,c);C(lf(b,void 0),jf);C(lf(b,c),jf);a&&delete kf[b]})},vf=function(a,b,c){gf[a]=gf[a]||{};var d=1!==c?pf(b):hf.get(b);"array"===Za(d)||"object"===Za(d)?gf[a][b]=C(d):gf[a][b]=d},wf=function(a,b){if(gf[a])return gf[a][b]};var xf=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===yf()||d||"http:"!=u.location.protocol?a:b)+c},yf=function(){var a=Zd(),b;if(1===a)a:{var c=Ee;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Of=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Pf={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qf={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Rf="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Tf=function(a){var b=nf("gtm.whitelist");b&&Ne("GTM",9);var c=b&&Pa(Ga(b),Pf),d=nf("gtm.blacklist");d||(d=nf("tagTypeBlacklist"))&&Ne("GTM",3);
d?Ne("GTM",8):d=[];Sf()&&(d=Ga(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=xa(Ga(d),"google")&&Ne("GTM",2);var e=d&&Pa(Ga(d),Qf),f={};return function(h){var k=h&&h[dd.va];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ke[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>xa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
xa(c,l[p])){Ne("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=xa(e,k);if(q)t=q;else{var r=Ba(e,l||[]);r&&Ne("GTM",10);t=r}}var v=!m||t;v||!(0<=xa(l,"sandboxedScripts"))||c&&-1!==xa(c,"sandboxedScripts")||(v=Ba(e,Rf));return f[k]=v}},Sf=function(){return Of.test(u.location&&u.location.hostname)};var Uf={wg:function(a,b){b[dd.Ld]&&"string"===typeof a&&(a=1==b[dd.Ld]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dd.Nd)&&null===a&&(a=b[dd.Nd]);b.hasOwnProperty(dd.Pd)&&void 0===a&&(a=b[dd.Pd]);b.hasOwnProperty(dd.Od)&&!0===a&&(a=b[dd.Od]);b.hasOwnProperty(dd.Md)&&!1===a&&(a=b[dd.Md]);return a}};var Vf={active:!0,isWhitelisted:function(){return!0}},Wf=function(a){var b=Ae.zones;!b&&a&&(b=Ae.zones=a());return b};var Xf=!1,Yf=0,Zf=[];function $f(a){if(!Xf){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Xf=!0;for(var e=0;e<Zf.length;e++)G(Zf[e])}Zf.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function ag(){if(!Xf&&140>Yf){Yf++;try{D.documentElement.doScroll("left"),$f()}catch(a){u.setTimeout(ag,50)}}}var bg=function(a){Xf?a():Zf.push(a)};var cg={},dg={},eg=function(a,b,c,d){if(!dg[a]||Ce[b]||"__zone"===b)return-1;var e={};ab(d)&&(e=C(d,e));e.id=c;e.status="timeout";return dg[a].tags.push(e)-1},fg=function(a,b,c,d){if(dg[a]){var e=dg[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function gg(a){for(var b=cg[a]||[],c=0;c<b.length;c++)b[c]();cg[a]={push:function(d){d(pd.s,dg[a])}}}
var jg=function(a,b,c){dg[a]={tags:[]};sa(b)&&hg(a,b);c&&u.setTimeout(function(){return gg(a)},Number(c));return ig(a)},hg=function(a,b){cg[a]=cg[a]||[];cg[a].push(Ma(function(){return G(function(){b(pd.s,dg[a])})}))};function ig(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ma(function(){b++;d&&b>=c&&gg(a)})},cg:function(){d=!0;b>=c&&gg(a)}}};var kg=function(){function a(d){return!va(d)||0>d?0:d}if(!Ae._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=va(of.get("gtm.start"))?of.get("gtm.start"):0;Ae._li={cst:a(c-b),cbt:a(Ge-b)}}};var og=!1,pg=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},qg=!1;
var rg=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||Ne("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}kg();return u[b]},sg=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=pg();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ug=function(){},tg=function(){return u.GoogleAnalyticsObject||"ga"};var wg=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var xg=/:[0-9]+$/,yg=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Bg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=zg(a.protocol)||zg(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||u.location.hostname).replace(xg,"").toLowerCase());return Ag(a,b,c,d,e)},Ag=function(a,b,c,d,e){var f,h=zg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Cg(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(xg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||Ne("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=xa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=yg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},zg=function(a){return a?a.replace(":",
"").toLowerCase():""},Cg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Dg=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Ne("TAGGING",1),c="/"+c);var d=b.hostname.replace(xg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Ig=function(){return!1},Kg=function(a){};function Jg(a,b,c){b.containerId=pd.s;var d={type:a,value:b};c.length&&(d.trace=c);return d};function Lg(a,b,c,d){var e=Rc[a],f=Mg(a,b,c,d);if(!f)return null;var h=$c(e[dd.he],c,[]);if(h&&h.length){var k=h[0];f=Lg(k.index,{P:f,ba:1===k.ye?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Mg(a,b,c,d){function e(){if(f[dd.Mf])k();else{var w=ad(f,c,[]),y=eg(c.id,String(f[dd.va]),Number(f[dd.ie]),w[dd.Nf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=Ia()-z;ff(c.id,Rc[a],"5");fg(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=Ia()-z;ff(c.id,Rc[a],"6");fg(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;ff(c.id,f,"1");var A=function(B){var E=Ia()-z;Kg(B);ff(c.id,f,"7");fg(c.id,y,"exception",E);x||(x=!0,k())};var z=Ia();try{Zc(w,c)}catch(B){A(B)}}}var f=Rc[a],h=b.P,k=b.ba,l=b.terminate;if(c.fd(f))return null;var m=$c(f[dd.je],c,[]);if(m&&m.length){var n=m[0],p=Lg(n.index,{P:h,ba:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.ye?l:p}if(f[dd.fe]||f[dd.Of]){var t=f[dd.fe]?Sc:c.Vh,q=h,r=k;if(!t[a]){e=Ma(e);var v=Ng(a,t,e);h=v.P;k=v.ba}return function(){t[a](q,r)}}return e}
function Ng(a,b,c){var d=[],e=[];b[a]=Og(d,e,c);return{P:function(){b[a]=Pg;for(var f=0;f<d.length;f++)d[f]()},ba:function(){b[a]=Qg;for(var f=0;f<e.length;f++)e[f]()}}}function Og(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Pg(a){a()}function Qg(a,b){b()};var Tg=function(a,b){for(var c=[],d=0;d<Rc.length;d++)if(a.yb[d]){var e=Rc[d];var f=b.add();try{var h=Lg(d,{P:f,ba:f,terminate:f},a,d);h?c.push({df:d,Ve:bd(e),Ta:h}):(Rg(d,a),f())}catch(l){f()}}b.cg();c.sort(Sg);for(var k=0;k<c.length;k++)c[k].Ta();return 0<c.length};function Sg(a,b){var c,d=b.Ve,e=a.Ve;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.df,k=b.df;f=h>k?1:h<k?-1:0}return f}
function Rg(a,b){if(!cf)return;var c=function(d){var e=b.fd(Rc[d])?"3":"4",f=$c(Rc[d][dd.he],b,[]);f&&f.length&&c(f[0].index);ff(b.id,Rc[d],e);var h=$c(Rc[d][dd.je],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ug=!1,Vg=function(a,b,c,d,e){if("gtm.js"==b){if(Ug)return!1;Ug=!0}ef(a,b);var f=jg(a,d,e);vf(a,"event",1);vf(a,"ecommerce",1);vf(a,"gtm");var h={id:a,name:b,fd:Tf(c),yb:[],Vh:[],Ne:function(n){Ne("GTM",6);Kg(n)}};h.yb=ld(h);var k=Tg(h,f);
if(!k)return k;for(var l=0;l<h.yb.length;l++)if(h.yb[l]){var m=Rc[l];if(m&&!Ce[String(m[dd.va])])return!0}return!1};var Xg=function(a,b,c,d,e){var f=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.Bb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==f.eventModel[h])return f.eventModel[h];if(void 0!==f.targetConfig[h])return f.targetConfig[h];if(void 0!==f.containerConfig[h])return f.containerConfig[h];if(void 0!==f.Bb[h])return f.Bb[h];if(void 0!==f.globalConfig[h])return f.globalConfig[h]}};var Yg={},Zg=["G"];Yg.ef="";var $g=Yg.ef.split(",");function ah(){var a=Ae;return a.gcq=a.gcq||new bh}
var ch=function(a,b){ah().register(a,b,void 0)},dh=function(a,b,c,d){ah().push("event",[b,a],c,d)},eh=function(a,b){ah().push("config",[a],b)},fh={},gh=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.Bb={};this.We=null;this.Ie=!1},hh=function(a,b,c,d,e){this.type=a;this.$h=b;this.V=c||"";this.Yb=d;this.defer=e},bh=function(){this.te={};this.De={};this.sb=[]},ih=function(a,b){var c=xe(b);return a.te[c.containerId]=a.te[c.containerId]||new gh},jh=function(a,b,c,d){if(d.V){var e=
ih(a,d.V),f=e.We;if(f){var h=C(c),k=C(e.targetConfig[d.V]),l=C(e.containerConfig),m=C(e.Bb),n=C(a.De),p=new Xg(h,k,l,m,n);try{f(b,d.$h,p)}catch(t){}}}};bh.prototype.register=function(a,b,c){if(3!==ih(this,a).status){ih(this,a).We=b;ih(this,a).status=3;c&&(ih(this,a).Bb=c);var d=xe(a),e=fh[d.containerId];if(void 0!==e){var f=nf("gtm.uniqueEventId"),h=d.prefix,k=Ia()-e;if(cf&&!Ue[f]){f!==Re&&(Ze(),Re=f);var l=""+h+Math.floor(k);Ye=Ye?Ye+"."+l:"&cl="+l}delete fh[d.containerId]}this.flush()}};
bh.prototype.push=function(a,b,c,d){var e=Math.floor(Ia()/1E3);if(c){var f=xe(c),h;if(h=f){var k;if(k=1===ih(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(ih(this,c).status=2,this.push("require",[],f.containerId),fh[f.containerId]=Ia(),!xf())){var m=encodeURIComponent(f.containerId);Yd(("http:"!=u.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.sb.push(new hh(a,e,c,b,d));d||this.flush()};
bh.prototype.flush=function(a){for(var b=this;this.sb.length;){var c=this.sb[0];if(c.defer)c.defer=!1,this.sb.push(c);else switch(c.type){case "require":if(3!==ih(this,c.V).status&&!a)return;break;case "set":Ca(c.Yb[0],function(l,m){b.De[l]=m});break;case "config":var d=c.Yb[0],e=!!d[H.Pb];delete d[H.Pb];var f=ih(this,c.V),h=xe(c.V),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.V]={});f.Ie&&e||jh(this,H.fa,d,c);f.Ie=!0;k?C(d,f.containerConfig):C(d,f.targetConfig[c.V]);break;case "event":jh(this,
c.Yb[1],c.Yb[0],c)}this.sb.shift()}};var kh=function(a,b){Xa(this.getName(),["toPath:!string","fromPath:!string"],arguments);Cd(this,"access_globals","write",a);Cd(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=Qa(c),f=Qa(d);if(void 0===e||void 0===f)return!1;e[c[c.length-1]]=f[d[d.length-1]];return!0};var lh=function(a,b){Xa(this.getName(),["path:!string"],[a]);Cd(this,"access_globals","execute",a);for(var c=a.split("."),d=u,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"===Za(e)){for(var h=[],k=1;k<arguments.length;k++)h.push(cb(arguments[k],this.h()));return bb((0,this.h().nc)(e,d,h),this.h())}};var mh=function(a){Xa(this.getName(),["fn:!Fn"],arguments);var b=this.h();G(function(){a instanceof Ra&&a.Ea(b)})};var nh=function(a){Xa(this.getName(),["path:!string"],arguments);Cd(this,"access_globals","read",a);var b=a.split("."),c=u,d;for(d=0;d<b.length-1;d++)if(c=c[b[d]],null==c)return;return bb(c[b[d]],this.h())};var oh=function(a,b){Xa(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);Cd(this,"access_globals","readwrite",a);Cd(this,"access_globals","readwrite",b);var c=a.split("."),d=Qa(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];if(f&&!sa(f))return null;if(f)return bb(f,this.h());var h;f=function(){if(!sa(h.push))throw Error("Object at "+b+" in window is not an array.");h.push.call(h,arguments)};d[e]=f;var k=b.split("."),l=Qa(k),m=k[k.length-
1];if(void 0===l)throw Error("Path "+k+" does not exist.");h=l[m];void 0===h&&(h=[],l[m]=h);return bb(function(){f.apply(f,Array.prototype.slice.call(arguments,0))},this.h())};var ph=function(a){Xa(this.getName(),["path:!string"],arguments);Cd(this,"access_globals","readwrite",a);var b=a.split("."),c=Qa(b),d=b[b.length-1];if(void 0===c)throw Error("Path "+a+" does not exist.");var e=c[d];void 0===e&&(e=[],c[d]=e);return bb(function(){if(!sa(e.push))throw Error("Object at "+a+" in window is not an array.");e.push.apply(e,Array.prototype.slice.call(arguments,0))},this.h())};var qh=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},th=function(a,b,c,d){var e=rh(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=sh(e,function(f){return f.fc},b);if(1===e.length)return e[0].id;e=sh(e,function(f){return f.zb},c);return e[0]?e[0].id:void 0}};
function uh(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=qh(b,e).indexOf(c)}
var xh=function(a,b,c,d,e){var f;if(void 0==b)f=a+"=deleted; expires="+(new Date(0)).toUTCString();else{d&&(b=encodeURIComponent(b));var h=b;h&&1200<h.length&&(h=h.substring(0,1200));b=h;f=a+"="+b}var k=void 0,l=void 0,m;for(m in c)if(c.hasOwnProperty(m)){var n=c[m];if(null!=n)switch(m){case "secure":n&&(f+="; secure");break;case "domain":k=n;break;default:"path"==m&&(l=n),"expires"==m&&n instanceof Date&&(n=n.toUTCString()),f+="; "+m+"="+n}}if("auto"===k){for(var p=vh(),t=void 0,q=0,r=0;r<p.length;++r){var v=
"none"!=p[r]?p[r]:void 0;if(e){c.domain=v;try{e(a,c)}catch(w){t=w;continue}}q+=1;if(!wh(v,l)&&uh(f+(v?"; domain="+v:""),a,b))return!0}if(t&&!q)throw t;return!1}e&&e(a,c);k&&"none"!=k&&(f+="; domain="+k);return!wh(k,l)&&uh(f,a,b)},yh=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);return xh(a,b,h,f)};
function sh(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function rh(a,b){for(var c=[],d=qh(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),fc:1*k[0]||1,zb:1*k[1]||1}))}}return c}
var zh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ah=/(^|\.)doubleclick\.net$/i,wh=function(a,b){return Ah.test(document.location.hostname)||"/"===b&&zh.test(a)},vh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ah.test(e)||zh.test(e)||a.push("none");return a};var Bh=function(a,b){b=void 0===b?!0:b;Xa(this.getName(),["name:!string","decode:?boolean"],arguments);Cd(this,"get_cookies",a);return bb(qh(a,void 0,!!b),this.h())};var Ch=function(a,b){Xa(this.getName(),["queryKey:!string","retrieveAll:?boolean"],arguments);Cd(this,"get_url","query",a);var c=Bg(Dg(u.location.href),"query"),d=yg(c,a,b);return bb(d,this.h())};var Dh=function(a,b){Xa(this.getName(),["queryKey:!string","retrieveAll:?boolean"],arguments);Cd(this,"get_referrer","query",a);var c=Bg(Dg(u.document.referrer),"query"),d=yg(c,a,b);return bb(d,this.h())};var Eh=function(a){Xa(this.getName(),["component:?string"],arguments);Cd(this,"get_referrer",a);return Ag(Dg(u.document.referrer),a)};var Fh=function(a){Xa(this.getName(),["component:?string"],arguments);Cd(this,"get_url",a);return Bg(Dg(u.location.href),a)};var Gh=function(a,b){Xa(this.getName(),["url:!string","onSuccess:?Fn"],arguments);Cd(this,"inject_hidden_iframe",a);var c=this.h();$d(a,function(){b instanceof Ra&&b.Ea(c)})};var Hh={},Ih=function(a,b,c,d){Xa(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Cd(this,"inject_script",a);var e=this.h(),f=function(){b instanceof Ra&&b.Ea(e)},h=function(){c instanceof Ra&&c.Ea(e)};if(d){var k=d;Hh[k]?(Hh[k].onSuccess.push(f),Hh[k].onFailure.push(h)):(Hh[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=Hh[k].onSuccess,m=0;m<l.length;m++)G(l[m]);l.push=function(n){G(n);return 0}},h=function(){for(var l=Hh[k].onFailure,m=0;m<
l.length;m++)G(l[m]);Hh[k]=null},Yd(a,f,h))}else Yd(a,f,h)};var Jh=function(){try{Cd(this,"logging")}catch(c){return}if(console){for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=cb(a[b],this.h());console.log.apply(console,a)}};var Kh=function(a,b){Xa(this.getName(),["permission:!string"],[a]);for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;++d)c[d]=cb(c[d],this.h());c.unshift(this);try{return Cd.apply(null,c),!0}catch(e){return!1}};var Lh=function(a,b,c){Xa(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn"],arguments);Cd(this,"send_pixel",a);var d=this.h();ae(a,function(){b instanceof Ra&&b.Ea(d)},function(){c instanceof Ra&&c.Ea(d)})};var Mh=function(a,b,c,d){var e=this;d=void 0===d?!0:d;Xa(this.getName(),["name:!string","value:?string","options:?Map","encode:?boolean"],arguments);var f=c?cb(c,this.h()):void 0;return xh(a,b,f,!!d,function(h,k){return Cd(e,"set_cookies",h,k)})};var Nh=function(a,b,c){Xa(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Cd(this,"access_globals","readwrite",a);var d=a.split("."),e=u,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=cb(b,this.h()),!0):!1};var Rh=function(a,b,c){var d=this;Xa(this.getName(),["input:!string","onSuccess:!Fn","onFailure:?Fn"],arguments);c=c||new Ra("emptyFn",function(){});var e=u.msCrypto,f=u.crypto,h=Oh(a);if(f&&f.subtle)f.subtle.digest("SHA-256",h).then(function(l){return void b.w(d.h(),Ph(l))},function(l){return void c.w(d.h(),Qh(l.name,l.message))});else if(e&&e.subtle){var k=e.subtle.digest("SHA-256",h);k.oncomplete=function(l){return void b.w(d.h(),Ph(l.target.result))};k.onerror=function(l){return void c.w(d.h(),
Qh(l.target.result.name,l.target.result.message))}}else c.w(this.h(),Qh("BrowserNotSupported","This method is not supported in this browser."))};function Ph(a){for(var b=new Uint8Array(a),c=Array(b.length),d=0;d<b.length;d++)c[d]=b[d];var e=c.map(function(f){return String.fromCharCode(f)}).join("");return u.btoa(e)}function Qh(a,b){var c=new Ua;c.set("name",a);c.set("message",b);return c}
function Oh(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}for(var f=new Uint8Array(b.length),h=0;h<b.length;h++)f[h]=b[h];return f};function Sh(a){Xa(this.getName(),["callback:!Fn"],arguments);Cd(this,"read_event_metadata");var b=this.h().R;if(!b)throw Error("invalid program state");var c=b.eventId;va(c)&&hg(c,cb(a))}function Th(a,b){Xa(this.getName(),["key:!string","dataLayerVersion:?number"],arguments);Cd(this,"read_data_layer",a);return bb(nf(a,b||2),this.h())}function Uh(){Cd(this,"read_character_set");return D.characterSet||""}function Vh(){Cd(this,"read_title");return D.title||""}
var Wh=function(){var a=new Td;xf()?a.addAll({injectHiddenIframe:ra,injectScript:ra}):a.addAll({injectHiddenIframe:Gh,injectScript:Ih});var b=Lh;a.addAll({aliasInWindow:kh,addEventCallback:Sh,callInWindow:lh,callLater:mh,copyFromDataLayer:Th,copyFromWindow:nh,createQueue:ph,createArgumentsQueue:oh,encodeUri:yd,encodeUriComponent:zd,
generateRandom:Ad,getCookieValues:Bh,getQueryParameters:Ch,getReferrerQueryParameters:Dh,getReferrerUrl:Eh,getTimestamp:Bd,getUrl:Fh,logToConsole:Jh,makeInteger:Hd,makeString:Jd,makeTableMap:Kd,queryPermission:Kh,readCharacterSet:Uh,readTitle:Vh,sendPixel:b,setCookie:Mh,setInWindow:Nh});a.add("Math",Od);a.add("decodeUri",wd),a.add("decodeUriComponent",
xd);a.add("sha256",Rh);a.add("makeNumber",Id);a.add("getType",Gd);
return function(c){var d=a.get(c,this);if(d)return d;throw Error(c+" is not a valid API name.");}};var Xh,sd;function Yh(){var a=data.runtime||[],b=data.runtime_lines;Xh=new rc;Zh();Nc=function(e,f,h){$h(f);var k=new Ua;Ca(f,function(n,p){k.set(n,bb(p))});Xh.Ga(hd());var l={eg:td(e),eventId:void 0!==h?h.id:void 0,od:Ig()?Rd():void 0},m=Xh.vc(l,[e,k]);Xh.Ga(void 0);m instanceof ha&&"return"===m.K&&(m=m.getData());return cb(m)};Xh.wa("require",Wh());for(var c=0;c<a.length;c++){var d=a[c];if(!wa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&fd(d,b[c]);Xh.Ta(d)}}
function $h(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;sa(b)&&(a.gtmOnSuccess=function(){G(b)});sa(c)&&(a.gtmOnFailure=function(){G(c)})}function Zh(){var a=Xh;Ae.SANDBOXED_JS_SEMAPHORE=Ae.SANDBOXED_JS_SEMAPHORE||0;a.oa(function(b,c,d){Ae.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Ae.SANDBOXED_JS_SEMAPHORE--}})};var ai="".split(/,/),bi=null,ci={},di={},ei,fi=function(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.Fc]&&(c.eventCallback=b[H.Fc]),b[H.gb]&&(c.eventTimeout=b[H.gb]));return c};
var li={config:function(a){},event:function(a){var b=
a[1];if(ta(b)&&!(3<a.length)){var c;if(2<a.length){if(!ab(a[2]))return;c=a[2]}var d=fi(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&sd.Tc(a[1],a[2])},set:function(a){var b;2==a.length&&ab(a[1])?b=C(a[1]):3==a.length&&ta(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},mi={policy:!0};var oi=function(a){return ni?D.querySelectorAll(a):null},pi=function(a,b){if(!ni)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qi=!1;if(D.querySelectorAll)try{var ri=D.querySelectorAll(":root");ri&&1==ri.length&&ri[0]==D.documentElement&&(qi=!0)}catch(a){}var ni=qi;var yi=function(a){if(xi(a))return a;this.di=a};yi.prototype.Tg=function(){return this.di};var xi=function(a){return!a||"object"!==Za(a)||ab(a)?!1:"getUntrustedUpdateValue"in a};yi.prototype.getUntrustedUpdateValue=yi.prototype.Tg;var zi=!1,Ai=[];function Bi(){if(!zi){zi=!0;for(var a=0;a<Ai.length;a++)G(Ai[a])}}var Ci=function(a){zi?G(a):Ai.push(a)};var Di=[],Ei=!1,Fi=function(a){return u["dataLayer"].push(a)},Gi=function(a){var b=Ae["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Ii=function(a){var b=a._clear;Ca(a,function(f,h){"_clear"!==f&&(b&&uf(f,void 0),uf(f,h))});Fe||(Fe=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Le(),a["gtm.uniqueEventId"]=d,uf("gtm.uniqueEventId",d));He=c;var e=Hi(a);
He=null;switch(c){case "gtm.init":Ne("GTM",19),e&&Ne("GTM",20)}return e};function Hi(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Ae.zones;d=e?e.checkState(pd.s,c):Vf;return d.active?Vg(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Ji=function(){for(var a=!1;!Ei&&0<Di.length;){Ei=!0;delete jf.eventModel;mf();var b=Di.shift();if(null!=b){var c=xi(b);if(c){var d=b;b=xi(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=nf(h,1);if(wa(k)||ab(k))k=C(k);kf[h]=k}}try{if(sa(b))try{b.call(of)}catch(r){}else if(wa(b)){var l=b;if(ta(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=nf(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(r){}}}else{if(Da(b)){a:{if(b.length&&ta(b[0])){var q=li[b[0]];if(q&&(!c||!mi[b[0]])){b=q(b);break a}}b=void 0}if(!b){Ei=!1;continue}}a=Ii(b)||a}}finally{c&&mf(!0)}}Ei=!1}return!a},Li=function(){var a=Ji();try{var b=pd.s,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=
!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(f){}return a},Mi=function(){var a=Wd("dataLayer",[]),b=Wd("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};bg(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ci(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Ae.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=
new yi(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Di.push.apply(Di,d);if(300<this.length)for(Ne("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Ji()&&h};Di.push.apply(Di,a.slice(0));G(Li)};var Ni;var ij={};ij.Rb=new String("undefined");
var jj=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ij.Rb?b:a[d]);return c.join("")}};jj.prototype.toString=function(){return this.resolve("undefined")};jj.prototype.valueOf=jj.prototype.toString;ij.Qf=jj;ij.Pc={};ij.zg=function(a){return new jj(a)};var kj={};ij.Kh=function(a,b){var c=Le();kj[c]=[a,b];return c};ij.ue=function(a){var b=a?0:1;return function(c){var d=kj[c];if(d&&"function"===typeof d[b])d[b]();kj[c]=void 0}};ij.hh=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ij.yh=function(a){if(a===ij.Rb)return a;var b=Le();ij.Pc[b]=a;return'google_tag_manager["'+pd.s+'"].macro('+b+")"};ij.lh=function(a,b,c){a instanceof ij.Qf&&(a=a.resolve(ij.Kh(b,c)),b=ra);return{cd:a,P:b}};var lj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||de(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},mj=function(a){Ae.hasOwnProperty("autoEventsSettings")||(Ae.autoEventsSettings={});var b=Ae.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},nj=function(a,b,c){mj(a)[b]=c},oj=function(a,b,c,d){var e=mj(a),f=Ja(e,b,d);e[b]=c(f)},pj=function(a,b,c){var d=mj(a);return Ja(d,b,c)};var qj=function(){for(var a=Ud.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ia()/1E3)].join(".")},tj=function(a,b,c,d){var e=rj(b);return th(a,e,sj(c),d)},uj=function(a,b,c,d){var e=""+rj(c),f=sj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},rj=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},sj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var vj=["1"],wj={},Aj=function(a,b,c,d){var e=xj(a);wj[e]||yj(e,b,c)||(zj(e,qj(),b,c,d),yj(e,b,c))};function zj(a,b,c,d,e){var f=uj(b,"1",d,c);yh(a,f,c,d,0==e?void 0:new Date(Ia()+1E3*(void 0==e?7776E3:e)))}function yj(a,b,c){var d=tj(a,b,c,vj);d&&(wj[a]=d);return d}function xj(a){return(a||"_gcl")+"_au"};var Bj=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Ed:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].Ed]||(f[a[h].Ed]=[]),f[a[h].Ed].push({timestamp:k[1],Ng:k[2]}))}return f};function Cj(){for(var a=Dj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ej(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Dj,Fj,Gj=function(a){Dj=Dj||Ej();Fj=Fj||Cj();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Dj[l],Dj[m],Dj[n],Dj[p])}return b.join("")},Hj=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Fj[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Dj=Dj||Ej();Fj=Fj||
Cj();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Ij;function Jj(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Nj=function(){var a=Kj,b=Lj,c=Mj(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){be(D,"mousedown",d);be(D,"keyup",d);be(D,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Mj=function(){var a=Wd("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Oj=/(.*?)\*(.*?)\*(.*)/,Pj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Qj=/^(?:www\.|m\.|amp\.)+/,Rj=/([^?#]+)(\?[^#]*)?(#.*)?/,Sj=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Uj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Gj(String(d))))}var e=b.join("*");return["1",Tj(e),e].join("*")},Tj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ij)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Ij=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ij[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Wj=function(){return function(a){var b=Dg(u.location.href),c=b.search.replace("?",""),d=yg(c,"_gl",!1,!0)||"";a.query=Vj(d)||{};var e=Bg(b,"fragment").match(Sj);a.fragment=Vj(e&&
e[3]||"")||{}}},Xj=function(){var a=Wj(),b=Mj();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Na(c,d.query),Na(c,d.fragment));return c},Vj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Oj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Tj(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Hj(t[q+1]);return p}}}}catch(r){}};
function Yj(a,b,c){function d(m){var n=m,p=Sj.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Rj.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Zj(a,b,c){for(var d={},e={},f=Mj().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&Jj(k.domains,b)&&(k.fragment?Na(e,k.callback()):Na(d,k.callback()))}if(Oa(d)){var l=Uj(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=Yj(l,a.action);wg.test(v)&&(a.action=v)}}}else ak(l,a,!1)}if(!c&&Oa(e)){var w=Uj(e);ak(w,a,!0)}}function ak(a,b,c){if(b.href){var d=Yj(a,b.href,void 0===c?!1:c);wg.test(d)&&(b.href=d)}}
var Kj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Zj(e,e.hostname,!1)}}catch(h){}},Lj=function(a){try{if(a.action){var b=Bg(Dg(a.action),"host");Zj(a,b,!0)}}catch(c){}},bk=function(a,b,c,d){Nj();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Mj().decorators.push(e)},ck=function(){var a=D.location.hostname,b=Pj.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Qj,""),l=e.replace(Qj,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},dk=function(a,b){return!1===a?!1:a||b||ck()};var ek={};var fk=/^\w+$/,gk=/^[\w-]+$/,hk=/^~?[\w-]+$/,ik={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function jk(a){return a&&"string"==typeof a&&a.match(fk)?a:"_gcl"}var lk=function(){var a=Dg(u.location.href),b=Bg(a,"query",!1,void 0,"gclid"),c=Bg(a,"query",!1,void 0,"gclsrc"),d=Bg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||yg(e,"gclid",!1,void 0);c=c||yg(e,"gclsrc",!1,void 0)}return kk(b,c,d)};
function kk(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(gk))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==ek.gtm_3pds?0:ek.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var nk=function(a){var b=lk();mk(b,a)};
function mk(a,b,c){function d(p,t){var q=ok(p,e);q&&yh(q,t,h,f,l,!0)}b=b||{};var e=jk(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.nd?7776E3:b.nd;c=c||Ia();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Li?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var qk=function(a,b,c,d,e){for(var f=Xj(),h=jk(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==ik[l]){var m=ok(l,h),n=f[m];if(n){var p=Math.min(pk(n),Ia()),t;b:{for(var q=p,r=qh(m,D.cookie),v=0;v<r.length;++v)if(pk(r[v])>q){t=!0;break b}t=!1}t||yh(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};mk(kk(f.gclid,f.gclsrc),w)},ok=function(a,b){var c=ik[a];if(void 0!==c)return b+c},pk=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function rk(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var sk=function(a,b,c,d,e){if(wa(b)){var f=jk(e);bk(function(){for(var h={},k=0;k<a.length;++k){var l=ok(a[k],f);if(l){var m=qh(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},tk=function(a){return a.filter(function(b){return hk.test(b)})},uk=function(a){for(var b=["aw","dc"],c=jk(a&&a.prefix),d={},e=0;e<b.length;e++)ik[b[e]]&&(d[b[e]]=ik[b[e]]);Ca(d,function(f,h){var k=qh(c+h,D.cookie);if(k.length){var l=k[0],m=pk(l),n={};n[f]=[rk(l)];mk(n,a,m)}})};var vk=/^\d+\.fls\.doubleclick\.net$/;function wk(a){var b=Dg(u.location.href),c=Bg(b,"host",!1);if(c&&c.match(vk)){var d=Bg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function xk(a,b){if("aw"==a||"dc"==a){var c=wk("gcl"+a);if(c)return c.split(".")}var d=jk(b);if("_gcl"==d){var e;e=lk()[a]||[];if(0<e.length)return e}var f=ok(a,d),h;if(f){var k=[];if(D.cookie){var l=qh(f,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=rk(l[m]);n&&-1===xa(k,n)&&k.push(n)}h=tk(k)}else h=k}else h=k}else h=[];return h}
var yk=function(){var a=wk("gac");if(a)return decodeURIComponent(a);var b=Bj(),c=[];Ca(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].Ng);f=tk(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},zk=function(a,b,c,d,e){Aj(b,c,d,e);var f=wj[xj(b)],h=lk().dc||[],k=!1;if(f&&0<h.length){var l=Ae.joined_au=Ae.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+f;Ud.sendBeacon&&Ud.sendBeacon(t)||ae(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var q=xj(b),r=wj[q];r&&zj(q,r,c,d,e)}};var Ak;if(3===pd.Vb.length)Ak="g";else{var Bk="G";Ak=Bk}
var Ck={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ak,OPT:"o"},Dk=function(a){var b=pd.s.split("-"),c=b[0].toUpperCase(),d=Ck[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===pd.Vb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+pd.Vb+e};
var Ek=function(a){return!(void 0===a||null===a||0===(a+"").length)},Fk=function(a,b){var c;if(2===b.U)return a("ord",za(1E11,1E13)),!0;if(3===b.U)return a("ord","1"),a("num",za(1E11,1E13)),!0;if(4===b.U)return Ek(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.U)c="1";else if(6===b.U)c=b.xd;else return!1;Ek(c)&&a("qty",c);Ek(b.ac)&&a("cost",b.ac);Ek(b.transactionId)&&a("ord",b.transactionId);return!0},Gk=encodeURIComponent,Hk=function(a,b){function c(n,p,t){f.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:Gk(p)))}var d=a.$c,e=a.protocol;e+=a.wc?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Gk(d)+(";type="+Gk(a.bd))+(";cat="+Gk(a.rb));var f=a.Bg||{};Ca(f,function(n,p){e+=";"+Gk(n)+"="+Gk(p+"")});if(Fk(c,a)){Ek(a.Cc)&&c("u",a.Cc);Ek(a.Bc)&&c("tran",a.Bc);c("gtm",Dk());!1===a.Zf&&c("npa","1");if(a.Xc){var h=xk("dc",a.Pa);h&&h.length&&c("gcldc",h.join("."));var k=xk("aw",a.Pa);k&&k.length&&c("gclaw",k.join("."));var l=yk();l&&c("gac",l);Aj(a.Pa,void 0,a.xg,a.yg);
var m=wj[xj(a.Pa)];m&&c("auiddc",m)}Ek(a.td)&&c("prd",a.td,!0);Ca(a.Gd,function(n,p){c(n,p)});e+=b||"";Ek(a.oc)&&c("~oref",a.oc);a.wc?$d(e+"?",a.P):ae(e+"?",a.P,a.ba)}else G(a.ba)};var Ik=["input","select","textarea"],Jk=["button","hidden","image","reset","submit"],Kk=function(a){var b=a.tagName.toLowerCase();return!ya(Ik,function(c){return c===b})||"input"===b&&ya(Jk,function(c){return c===a.type.toLowerCase()})?!1:!0},Lk=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):ge(a,["form"],100)},Mk=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Kk(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Pk=!!u.MutationObserver,Qk=void 0,Rk=function(a){if(!Qk){var b=function(){var c=D.body;if(c)if(Pk)(new MutationObserver(function(){for(var e=0;e<Qk.length;e++)G(Qk[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;be(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Qk.length;e++)G(Qk[e])}))})}};Qk=[];D.body?b():G(b)}Qk.push(a)};
var Uk=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Vk=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Uk(b,"/*")&&(b=b.slice(0,-2));Uk(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},Wk=/^[a-z0-9-]+$/i,Xk=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Yk=function(a,b){for(var c=0;c<b.length;c++){var d;var e=a,f=b[c];if(!Xk.exec(f))throw Error("Invalid Wildcard");var h=Dg(e),k;if(!(k="https:"!=h.protocol||h.port&&"443"!=h.port)){var l;b:{var m=h.hostname.split(".");if(2>m.length)l=!1;else{for(var n=0;n<m.length;n++)if(!Wk.exec(m[n])){l=!1;break b}l=!0}}k=!l}if(k)d=!1;else{var p=f.slice(8),t=p.slice(0,p.indexOf("/")),q;var r=h.hostname,v=t;if(0!==v.indexOf("*."))q=r.toLowerCase()===v.toLowerCase();else{v=v.slice(2);var w=r.toLowerCase().indexOf(v.toLowerCase());
q=-1===w?!1:r.length===v.length?!0:r.length!==v.length+w?!1:"."===r[w-1]}if(q){var y=p.slice(p.indexOf("/"));d=Vk(h.pathname+h.search,y)?!0:!1}else d=!1}if(d)return!0}return!1};var sl=u.clearTimeout,tl=u.setTimeout,K=function(a,b,c){if(xf()){b&&G(b)}else return Yd(a,b,c)},ul=function(){return u.location.href},vl=function(a){return Bg(Dg(a),"fragment")},wl=function(a){return Cg(Dg(a))},xl=null;
var yl=function(a,b){return nf(a,b||2)},zl=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Fi(a)},Al=function(a,b){u[a]=b},W=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},Bl=function(a,b,c){return qh(a,b,void 0===c?!0:!!c)},Cl=function(a,b,c,d){var e={prefix:a,path:b,domain:c,nd:d};nk(e);uk(e)},Dl=function(a,b,c,d,e){qk(a,b,c,d,e);},El=function(a,b,c,d,e){
sk(a,b,c,d,e);},Fl=function(a,b){if(xf()){b&&G(b)}else $d(a,b)},Gl=function(a){return!!pj(a,"init",!1)},Hl=function(a){nj(a,"init",!0)},Il=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Ee;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&Ca(b,function(e,f){f&&(d+="&"+e+"="+encodeURIComponent(f))});K(J("https://","http://",d))},Jl=function(a,b){var c=a[b];
return c};
var Ll=ij.lh;var Ml=new Aa,Nl=function(a,b){function c(h){var k=Dg(h),l=Bg(k,"protocol"),m=Bg(k,"host",!0),n=Bg(k,"port"),p=Bg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0},Ol=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&wa(c)){for(var d=0;d<c.length;d++)if(Ol({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=xa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ml.get(q);r||(r=new RegExp(c,t),Ml.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Nl(b,c)}return!1};var Ql={},Rl=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Ql[1]&&(Ql[1]=Math.floor(2*Math.random()));return Ql[1]};var Sl=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Tl={},Ul=encodeURI,X=encodeURIComponent,Vl=ae;var Wl=function(a,b){if(!a)return!1;var c=Bg(Dg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Xl=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Tl.ih=function(){var a=!1;return a};var xm=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||za();return a.hid};var fn=window,gn=document,hn=function(a){var b=fn._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===fn["ga-disable-"+a])return!0;try{var c=fn.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=qh("AMP_TOKEN",gn.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return gn.getElementById("__gaOptOutExtension")?!0:!1};var nn=function(a,b,c){dh(b,c,a)},on=function(a,b,c){dh(b,c,a,!0)},qn=function(a,b){},pn=function(a,b){},
rn=function(a){return"_"===a.charAt(0)},sn=function(a){Ca(a,function(c){rn(c)&&delete a[c]});var b=a[H.Qb]||{};Ca(b,function(c){rn(c)&&delete b[c]})};var Z={a:{}};

Z.a.send_pixel=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__send_pixel=b;Z.__send_pixel.b="send_pixel";Z.__send_pixel.g=!0;Z.__send_pixel.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!ta(f))throw d(e,{},"URL must be a string.");try{if(Yk(f,c))return}catch(h){throw d(e,{},"Invalid URL filter.");}throw d(e,{},"Prohibited URL: "+f+".");},J:a}})}();Z.a.qpx=["nonGooglePixels"];

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Hk(b,c)}(function(b){Z.__flc=b;Z.__flc.b="flc";Z.__flc.g=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Xl(b.vtp_customVariable||[],"key","value")||{},e={rb:b.vtp_activityTag,Xc:c,Pa:b.vtp_conversionCookiePrefix||void 0,ac:void 0,U:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,$c:b.vtp_advertiserId,bd:b.vtp_groupTag,ba:b.vtp_gtmOnFailure,P:b.vtp_gtmOnSuccess,
oc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",xd:void 0,wc:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Bc:b.vtp_transactionVariable,transactionId:void 0,Cc:b.vtp_userVariable,Gd:d};if(b.vtp_enableAttribution){var f=b.vtp_attributionFields||[];if(f.length){K("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([Xl(f,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(wf(a.vtp_gtmEventId,"event"))})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=lj(c,"gtm.click");zl(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Gl("cl")){var c=W("document");be(c,"click",a,!0);Hl("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Bl(a.vtp_name,yl("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.b="access_globals";Z.__access_globals.g=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,p,t){if(!ta(t))throw d(n,{},"Key must be a string.");if("read"===p){if(-1<xa(e,t))return}else if("write"===p){if(-1<xa(f,t))return}else if("readwrite"===p){if(-1<xa(f,t)&&-1<xa(e,t))return}else if("execute"===p){if(-1<xa(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+p);throw d(n,{},"Prohibited "+p+" on global variable: "+
t+".");},J:a}})}();Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return za(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:yl("gtm.url",1))||ul();var d=b[a("vtp_component")];if(!d||"URL"==d)return wl(String(c));var e=Dg(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?wa(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=Bg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=Bg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=yl(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.ld&&b.pd>=b.ld)b.ed&&W("self").clearInterval(b.ed);else{b.pd++;var c=(new Date).getTime();zl({event:b.ia,"gtm.timerId":b.ed,"gtm.timerEventNumber":b.pd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.ld,"gtm.timerStartTime":b.cf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.cf,"gtm.triggers":b.ai})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){G(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{ia:b.vtp_eventName,pd:0,interval:Number(b.vtp_interval),ld:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),ai:String(b.vtp_uniqueTriggerId||"0"),cf:(new Date).getTime()};c.ed=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.asp=["nonGoogleScripts"],function(){(function(a){Z.__asp=a;Z.__asp.b="asp";Z.__asp.g=!0;Z.__asp.priorityOverride=0})(function(a){u.adroll_adv_id=a.vtp_customerId;u.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(u.adroll_conversion_value=a.vtp_conversionValueInDollars,u.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=Xl(a.vtp_customData,"key","value");u.adroll_custom_data=b}a.vtp_segmentName&&(u.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(u.adroll_email=a.vtp_visitorEmail);u.__adroll_loaded=!0;var c=J("https://s","http://a",".adroll.com/j/roundtrip.js");K(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Xl(n.vtp_fieldsToSet,"fieldName","value"),f);C(Xl(n.vtp_contentGroup,"index","group"),h);C(Xl(n.vtp_dimension,"index","dimension"),k);C(Xl(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=C(n);d=C(d,p)}C(Xl(d.vtp_fieldsToSet,"fieldName","value"),f);C(Xl(d.vtp_contentGroup,
"index","group"),h);C(Xl(d.vtp_dimension,"index","dimension"),k);C(Xl(d.vtp_metric,"index","metric"),l);var t=rg(d.vtp_functionName);if(sa(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Le(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},x=function(T,O){return void 0===O?O:T(O)},A=function(T,O){if(O)for(var ua in O)O.hasOwnProperty(ua)&&y("set",T+ua,O[ua])},z=function(){},B=function(T,O,ua){var fb=0;if(T)for(var Ka in T)if(T.hasOwnProperty(Ka)&&(ua&&v[Ka]||!ua&&void 0===v[Ka])){var gb=w[Ka]?Fa(T[Ka]):T[Ka];"anonymizeIp"!=Ka||gb||(gb=void 0);O[Ka]=gb;fb++}return fb},E={name:r};B(f,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Dk(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,O){void 0!==d[O]&&y("set",T,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(f,F,!1)&&y("set",F);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=f&&f.hitCallback;sa(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Ea,d.vtp_eventValue||
e.value)};B(M,Q,!1);y("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ia="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ia})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ja=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ja="internal/"+ja);a=!0;var La=J("https:","http:","//www.google-analytics.com/"+ja,f&&f.forceSSL);K(La,function(){var T=pg();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();
Z.a.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.b="get_url";Z.__get_url.g=!0;Z.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,h,k){if(h){if(!ta(h))throw e(f,{},"URL component must be a string.");if(c&&0>xa(c,h))throw e(f,{},"Prohibited URL component: "+h);if("query"===h&&d){if(!k)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!ta(k))throw e(f,{},"Query key must be a string.");if(0>xa(d,k))throw e(f,{},"Prohibited query key: "+k);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},J:a}})}();




Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||
ck())&&Dl(a,h,k,l));Cl(e,c,d);zk(f,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");El(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();

Z.a.aev=["google"],function(){function a(q,r){var v=wf(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,p.push(y),35<p.length)){var z=p.shift();delete n[z]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(ul());wa(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Wl(q,w)}function e(q){m.test(q)||(q="http://"+q);return Bg(Dg(q),"HOST",!0)}function f(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return de(q,"value");case "button":return ee(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Kk(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&de(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,ee)||v;case "URL":var x;a:{var A=String(a(r,"elementUrl")||v||""),z=Dg(A),B=String(q.vtp_component||"URL");switch(B){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=Bg(z,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,M=a(r,"element");E=M&&de(M,F)||v||""}return E;case "MD":var Q=q.vtp_mdValue,S=b(r,"MD",el);return Q&&S?hl(S,Q)||
v:S||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();

Z.a.cegg=["nonGoogleScripts"],function(){var a={};(function(b){Z.__cegg=b;Z.__cegg.b="cegg";Z.__cegg.g=!0;Z.__cegg.priorityOverride=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(u.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");K("//script.crazyegg.com"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else G(b.vtp_gtmOnFailure)}catch(f){G(b.vtp_gtmOnFailure)}})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){kg();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Dk()},m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?yl(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,A){var z="DATA_LAYER"==
v?yl(x):k[y];A(z)&&p(w,z)}},q="//www.googleadservices.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",ca),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,K(q,f(),
e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Xl(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Xd(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){G(h)}}}var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,f=Ll(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.cd,k=f.P;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,fe(h),k,e)()}else tl(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();





Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=fe('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Vl(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();



var Bn={};Bn.macro=function(a){if(ij.Pc.hasOwnProperty(a))return ij.Pc[a]},Bn.onHtmlSuccess=ij.ue(!0),Bn.onHtmlFailure=ij.ue(!1);Bn.dataLayer=of;Bn.callback=function(a){Je.hasOwnProperty(a)&&sa(Je[a])&&Je[a]();delete Je[a]};Bn.ig=function(){Ae[pd.s]=Bn;Na(Ke,Z.a);Vc=Vc||ij;Wc=Uf};
Bn.bh=function(){ek.gtm_3pds=!0;Ae=u.google_tag_manager=u.google_tag_manager||{};if(Ae[pd.s]){var a=Ae.zones;a&&a.unregisterChild(pd.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Oc.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Rc.push(e[f]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Qc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Pc.push(p)}Tc=Z;Uc=Ol;var q=data.permissions||{},r=data.sandboxed_scripts;Yh();sd=new rd(q);if(void 0!==r)for(var v=["sandboxedScripts"],w=0;w<r.length;w++){var y=r[w].replace(/^_*/,"");Ke[y]=v}Bn.ig();Mi();Xf=!1;Yf=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)$f();else{be(D,"DOMContentLoaded",$f);be(D,"readystatechange",
$f);if(D.createEventObject&&D.documentElement.doScroll){var x=!0;try{x=!u.frameElement}catch(E){}x&&ag()}be(u,"load",$f)}zi=!1;"complete"===D.readyState?Bi():be(u,"load",Bi);a:{if(!cf)break a;u.setInterval(df,864E5);}
Ge=(new Date).getTime();}};(0,Bn.bh)();

})()
