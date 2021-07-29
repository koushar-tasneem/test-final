(window.webpackJsonp=window.webpackJsonp||[]).push([[2724],{2797:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),p=(r(0),r(2837)),o=["components"],c={},i={unversionedId:"puppeteer.page.emulate",id:"puppeteer.page.emulate",isDocsHomePage:!1,title:"puppeteer.page.emulate",description:"Home &gt; puppeteer &gt; Page &gt; emulate",source:"@site/docs\\puppeteer.page.emulate.md",slug:"/puppeteer.page.emulate",permalink:"/test-final/docs/next/puppeteer.page.emulate",version:"current"},l=[{value:"Page.emulate() method",id:"pageemulate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.emulate"},"emulate")),Object(p.b)("h2",{id:"pageemulate-method"},"Page.emulate() method"),Object(p.b)("p",null,"Emulates given device metrics and user agent. This method is a shortcut for calling two methods: ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.setuseragent"},"Page.setUserAgent()")," and ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.setviewport"},"Page.setViewport()")," To aid emulation, Puppeteer provides a list of device descriptors that can be obtained via the ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.puppeteer.devices"},"Puppeteer.devices")," ",Object(p.b)("inlineCode",{parentName:"p"},"page.emulate")," will resize the page. A lot of websites don't expect phones to change size, so you should emulate before navigating to the page."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"emulate(options: {\n        viewport: Viewport;\n        userAgent: string;\n    }): Promise<void>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ viewport: ",Object(p.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.viewport"},"Viewport"),"; userAgent: string; }"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<","void",">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"List of all available devices is available in the source code: ",Object(p.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts"},"src/common/DeviceDescriptors.ts"),"."),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\nconst iPhone = puppeteer.devices['iPhone 6'];\n(async () => {\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.emulate(iPhone);\nawait page.goto('https://www.google.com');\n// other actions...\nawait browser.close();\n})();\n\n")))}s.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||p;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<p;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);