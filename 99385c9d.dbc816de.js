(window.webpackJsonp=window.webpackJsonp||[]).push([[1678],{1751:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),i=(n(0),n(2837)),a=["components"],p={},c={unversionedId:"puppeteer.framewaitforfunctionoptions.polling",id:"version-10.0.0/puppeteer.framewaitforfunctionoptions.polling",isDocsHomePage:!1,title:"puppeteer.framewaitforfunctionoptions.polling",description:"Home &gt; puppeteer &gt; FrameWaitForFunctionOptions &gt; polling",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.framewaitforfunctionoptions.polling.md",slug:"/puppeteer.framewaitforfunctionoptions.polling",permalink:"/test-final/docs/10.0.0/puppeteer.framewaitforfunctionoptions.polling",version:"10.0.0"},l=[{value:"FrameWaitForFunctionOptions.polling property",id:"framewaitforfunctionoptionspolling-property",children:[]}],u={toc:l};function f(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/index"},"Home")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.framewaitforfunctionoptions"},"FrameWaitForFunctionOptions")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.framewaitforfunctionoptions.polling"},"polling")),Object(i.b)("h2",{id:"framewaitforfunctionoptionspolling-property"},"FrameWaitForFunctionOptions.polling property"),Object(i.b)("p",null,"An interval at which the ",Object(i.b)("inlineCode",{parentName:"p"},"pageFunction")," is executed, defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"raf"),". If ",Object(i.b)("inlineCode",{parentName:"p"},"polling")," is a number, then it is treated as an interval in milliseconds at which the function would be executed. If ",Object(i.b)("inlineCode",{parentName:"p"},"polling")," is a string, then it can be one of the following values:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"raf")," - to constantly execute ",Object(i.b)("inlineCode",{parentName:"p"},"pageFunction")," in ",Object(i.b)("inlineCode",{parentName:"p"},"requestAnimationFrame")," callback. This is the tightest polling mode which is suitable to observe styling changes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mutation")," - to execute ",Object(i.b)("inlineCode",{parentName:"p"},"pageFunction")," on every DOM mutation."))),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"polling?: string | number;\n")))}f.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),b=r,m=f["".concat(a,".").concat(b)]||f[b]||s[b]||i;return n?o.a.createElement(m,p(p({ref:t},l),{},{components:n})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);