(window.webpackJsonp=window.webpackJsonp||[]).push([[695],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,d=s["".concat(p,".").concat(m)]||s[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var u=2;u<o;u++)p[u]=r[u];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},768:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(2837)),p=["components"],c={},i={unversionedId:"puppeteer.puppeteernode.launch",id:"version-6.0.0/puppeteer.puppeteernode.launch",isDocsHomePage:!1,title:"puppeteer.puppeteernode.launch",description:"Home &gt; puppeteer &gt; PuppeteerNode &gt; launch",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.puppeteernode.launch.md",slug:"/puppeteer.puppeteernode.launch",permalink:"/test-final/docs/6.0.0/puppeteer.puppeteernode.launch",version:"6.0.0"},u=[{value:"PuppeteerNode.launch() method",id:"puppeteernodelaunch-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,p);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.puppeteernode"},"PuppeteerNode")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.puppeteernode.launch"},"launch")),Object(o.b)("h2",{id:"puppeteernodelaunch-method"},"PuppeteerNode.launch() method"),Object(o.b)("p",null,"Launches puppeteer and launches a browser instance with given arguments and options when specified."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"launch(options?: LaunchOptions & BrowserLaunchArgumentOptions & BrowserConnectOptions & {\n        product?: Product;\n        extraPrefsFirefox?: Record<string, unknown>;\n    }): Promise<Browser>;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.launchoptions"},"LaunchOptions")," ","&"," ",Object(o.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.browserlaunchargumentoptions"},"BrowserLaunchArgumentOptions")," ","&"," ",Object(o.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.browserconnectoptions"},"BrowserConnectOptions")," ","&"," { product?: ",Object(o.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.product"},"Product"),"; extraPrefsFirefox?: Record","<","string, unknown",">","; }"),Object(o.b)("td",{parentName:"tr",align:null},"Set of configurable options to set on the browser.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"Promise","<",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.browser"},"Browser"),">"),Object(o.b)("p",null,"Promise which resolves to browser instance."),Object(o.b)("h2",{id:"remarks"},"Remarks"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreDefaultArgs")," to filter out ",Object(o.b)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio']\n});\n\n")),Object(o.b)("p",null,"*","*","NOTE","*","*"," Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use ",Object(o.b)("inlineCode",{parentName:"p"},"executablePath")," option with extreme caution. If Google Chrome (rather than Chromium) is preferred, a ",Object(o.b)("a",{parentName:"p",href:"https://www.google.com/chrome/browser/canary.html"},"Chrome Canary")," or ",Object(o.b)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/dev-channel"},"Dev Channel")," build is suggested. In ",Object(o.b)("inlineCode",{parentName:"p"},"puppeteer.launch([options])"),", any mention of Chromium also applies to Chrome. See ",Object(o.b)("a",{parentName:"p",href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"},"this article")," for a description of the differences between Chromium and Chrome. ",Object(o.b)("a",{parentName:"p",href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md"},"This article")," describes some differences for Linux users."))}s.isMDXComponent=!0}}]);