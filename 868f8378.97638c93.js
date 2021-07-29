(window.webpackJsonp=window.webpackJsonp||[]).push([[1455],{1528:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(2837)),p=["components"],c={},o={unversionedId:"puppeteer.dialog",id:"puppeteer.dialog",isDocsHomePage:!1,title:"puppeteer.dialog",description:"Home &gt; puppeteer &gt; Dialog",source:"@site/docs\\puppeteer.dialog.md",slug:"/puppeteer.dialog",permalink:"/test-final/docs/next/puppeteer.dialog",version:"current"},i=[{value:"Dialog class",id:"dialog-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],b={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,p);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.dialog"},"Dialog")),Object(l.b)("h2",{id:"dialog-class"},"Dialog class"),Object(l.b)("p",null,"Dialog instances are dispatched by the ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page"},"Page")," via the ",Object(l.b)("inlineCode",{parentName:"p"},"dialog")," event."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class Dialog \n")),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(l.b)("inlineCode",{parentName:"p"},"Dialog")," class."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n\n")),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.dialog.accept"},"accept(promptText)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.dialog.defaultvalue"},"defaultValue()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.dialog.dismiss"},"dismiss()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.dialog.message"},"message()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/next/puppeteer.dialog.type"},"type()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},2837:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=b(a),d=n,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return a?r.a.createElement(m,c(c({ref:t},i),{},{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<l;i++)p[i]=a[i];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);