(window.webpackJsonp=window.webpackJsonp||[]).push([[2446],{2519:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(2837)),c=["components"],u={},l={unversionedId:"puppeteer.registercustomqueryhandler",id:"version-10.0.0/puppeteer.registercustomqueryhandler",isDocsHomePage:!1,title:"puppeteer.registercustomqueryhandler",description:"Home &gt; puppeteer &gt; registerCustomQueryHandler",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.registercustomqueryhandler.md",slug:"/puppeteer.registercustomqueryhandler",permalink:"/test-final/docs/10.0.0/puppeteer.registercustomqueryhandler",version:"10.0.0"},p=[{value:"registerCustomQueryHandler() function",id:"registercustomqueryhandler-function",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/index"},"Home")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.registercustomqueryhandler"},"registerCustomQueryHandler")),Object(o.b)("h2",{id:"registercustomqueryhandler-function"},"registerCustomQueryHandler() function"),Object(o.b)("p",null,"Registers a ",Object(o.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.customqueryhandler"},"custom query handler"),". After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",Object(o.b)("inlineCode",{parentName:"p"},"<name>/"),". The name is only allowed to consist of lower- and upper case latin letters."),Object(o.b)("b",null,"Signature:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export declare function registerCustomQueryHandler(name: string, queryHandler: CustomQueryHandler): void;\n")),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Parameter"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"name"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"The name that the custom query handler will be registered under.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"queryHandler"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.customqueryhandler"},"CustomQueryHandler")),Object(o.b)("td",{parentName:"tr",align:null},"The ",Object(o.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.customqueryhandler"},"custom query handler")," to register.")))),Object(o.b)("b",null,"Returns:"),Object(o.b)("p",null,"void"))}s.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,u(u({ref:t},p),{},{components:r})):a.a.createElement(m,u({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);