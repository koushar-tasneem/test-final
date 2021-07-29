(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),f=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=f(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=f(n),l=r,b=s["".concat(a,".").concat(l)]||s[l]||m[l]||i;return n?o.a.createElement(b,p(p({ref:t},c),{},{components:n})):o.a.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},444:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(2837)),a=["components"],p={},u={unversionedId:"puppeteer.framewaitforfunctionoptions.timeout",id:"version-10.0.0/puppeteer.framewaitforfunctionoptions.timeout",isDocsHomePage:!1,title:"puppeteer.framewaitforfunctionoptions.timeout",description:"Home &gt; puppeteer &gt; FrameWaitForFunctionOptions &gt; timeout",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.framewaitforfunctionoptions.timeout.md",slug:"/puppeteer.framewaitforfunctionoptions.timeout",permalink:"/test-final/docs/10.0.0/puppeteer.framewaitforfunctionoptions.timeout",version:"10.0.0"},c=[{value:"FrameWaitForFunctionOptions.timeout property",id:"framewaitforfunctionoptionstimeout-property",children:[]}],f={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/index"},"Home")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.framewaitforfunctionoptions"},"FrameWaitForFunctionOptions")," ",">"," ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.framewaitforfunctionoptions.timeout"},"timeout")),Object(i.b)("h2",{id:"framewaitforfunctionoptionstimeout-property"},"FrameWaitForFunctionOptions.timeout property"),Object(i.b)("p",null,"Maximum time to wait in milliseconds. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"30000")," (30 seconds). Pass ",Object(i.b)("inlineCode",{parentName:"p"},"0")," to disable the timeout. Puppeteer's default timeout can be changed using ",Object(i.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()"),"."),Object(i.b)("b",null,"Signature:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"timeout?: number;\n")))}s.isMDXComponent=!0}}]);