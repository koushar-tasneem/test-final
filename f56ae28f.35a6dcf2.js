(window.webpackJsonp=window.webpackJsonp||[]).push([[2653],{2726:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(2837)),p=["components"],o={},c={unversionedId:"puppeteer.page.emulateidlestate",id:"puppeteer.page.emulateidlestate",isDocsHomePage:!1,title:"puppeteer.page.emulateidlestate",description:"Home &gt; puppeteer &gt; Page &gt; emulateIdleState",source:"@site/docs\\puppeteer.page.emulateidlestate.md",slug:"/puppeteer.page.emulateidlestate",permalink:"/test-final/docs/next/puppeteer.page.emulateidlestate",version:"current"},i=[{value:"Page.emulateIdleState() method",id:"pageemulateidlestate-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,p);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.emulateidlestate"},"emulateIdleState")),Object(l.b)("h2",{id:"pageemulateidlestate-method"},"Page.emulateIdleState() method"),Object(l.b)("p",null,"Emulates the idle state. If no arguments set, clears idle state emulation."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"emulateIdleState(overrides?: {\n        isUserActive: boolean;\n        isScreenUnlocked: boolean;\n    }): Promise<void>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"overrides"),Object(l.b)("td",{parentName:"tr",align:null},"{ isUserActive: boolean; isScreenUnlocked: boolean; }"),Object(l.b)("td",{parentName:"tr",align:null},"Mock idle state. If not set, clears idle overrides")))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","void",">"),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"// set idle emulation\nawait page.emulateIdleState({isUserActive: true, isScreenUnlocked: false});\n\n// do some checks here\n...\n\n// clear idle emulation\nawait page.emulateIdleState();\n\n")))}s.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(p,".").concat(d)]||s[d]||b[d]||l;return n?a.a.createElement(m,o(o({ref:t},i),{},{components:n})):a.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);