(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||c;return r?a.a.createElement(m,l(l({ref:t},o),{},{components:r})):a.a.createElement(m,l({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,p=new Array(c);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var o=2;o<c;o++)p[o]=r[o];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},606:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(2837)),p=["components"],l={},i={unversionedId:"puppeteer.tracing",id:"version-6.0.0/puppeteer.tracing",isDocsHomePage:!1,title:"puppeteer.tracing",description:"Home &gt; puppeteer &gt; Tracing",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.tracing.md",slug:"/puppeteer.tracing",permalink:"/test-final/docs/6.0.0/puppeteer.tracing",version:"6.0.0"},o=[{value:"Tracing class",id:"tracing-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}],b={toc:o};function s(e){var t=e.components,r=Object(a.a)(e,p);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.tracing"},"Tracing")),Object(c.b)("h2",{id:"tracing-class"},"Tracing class"),Object(c.b)("p",null,"The Tracing class exposes the tracing audit interface."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Tracing \n")),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"You can use ",Object(c.b)("inlineCode",{parentName:"p"},"tracing.start")," and ",Object(c.b)("inlineCode",{parentName:"p"},"tracing.stop")," to create a trace file which can be opened in Chrome DevTools or ",Object(c.b)("a",{parentName:"p",href:"https://chromedevtools.github.io/timeline-viewer/"},"timeline viewer"),"."),Object(c.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(c.b)("inlineCode",{parentName:"p"},"Tracing")," class."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"await page.tracing.start({path: 'trace.json'});\nawait page.goto('https://www.google.com');\nawait page.tracing.stop();\n\n")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Property"),Object(c.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.tracing._client"},"_","client")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.cdpsession"},"CDPSession")),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.tracing._path"},"_","path")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"string"),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.tracing._recording"},"_","recording")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"boolean"),Object(c.b)("td",{parentName:"tr",align:null})))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Method"),Object(c.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.tracing.start"},"start(options)")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"Starts a trace for the current page.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.tracing.stop"},"stop()")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"Stops a trace started with the ",Object(c.b)("code",null,"start")," method.")))))}s.isMDXComponent=!0}}]);