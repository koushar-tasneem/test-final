(window.webpackJsonp=window.webpackJsonp||[]).push([[2687],{2760:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),p=(r(0),r(2837)),o=["components"],c={},l={unversionedId:"puppeteer.page.queryobjects",id:"version-5.4.0/puppeteer.page.queryobjects",isDocsHomePage:!1,title:"puppeteer.page.queryobjects",description:"Home &gt; puppeteer &gt; Page &gt; queryObjects",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.page.queryobjects.md",slug:"/puppeteer.page.queryobjects",permalink:"/test-final/docs/puppeteer.page.queryobjects",version:"5.4.0"},i=[{value:"Page.queryObjects() method",id:"pagequeryobjects-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function b(e){var t=e.components,r=Object(n.a)(e,o);return Object(p.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test-final/docs/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.page.queryobjects"},"queryObjects")),Object(p.b)("h2",{id:"pagequeryobjects-method"},"Page.queryObjects() method"),Object(p.b)("p",null,"This method iterates the JavaScript heap and finds all objects with the given prototype."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"queryObjects(prototypeHandle: JSHandle): Promise<JSHandle>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"prototypeHandle"),Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/puppeteer.jshandle"},"JSHandle")),Object(p.b)("td",{parentName:"tr",align:null},"a handle to the object prototype.")))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.jshandle"},"JSHandle"),">"),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("h2",{id:"example"},"Example"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-js"},"// Create a Map object\nawait page.evaluate(() => window.map = new Map());\n// Get a handle to the Map object prototype\nconst mapPrototype = await page.evaluateHandle(() => Map.prototype);\n// Query all map instances into an array\nconst mapInstances = await page.queryObjects(mapPrototype);\n// Count amount of map objects in heap\nconst count = await page.evaluate(maps => maps.length, mapInstances);\nawait mapInstances.dispose();\nawait mapPrototype.dispose();\n\n")))}b.isMDXComponent=!0},2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||p;return r?n.a.createElement(d,c(c({ref:t},i),{},{components:r})):n.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=r[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);