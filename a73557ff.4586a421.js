(window.webpackJsonp=window.webpackJsonp||[]).push([[1816],{1890:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),p=(n(0),n(2837)),o=["components"],l={},c={unversionedId:"puppeteer.page.addstyletag",id:"puppeteer.page.addstyletag",isDocsHomePage:!1,title:"puppeteer.page.addstyletag",description:"Home &gt; puppeteer &gt; Page &gt; addStyleTag",source:"@site/docs\\puppeteer.page.addstyletag.md",slug:"/puppeteer.page.addstyletag",permalink:"/test-final/docs/next/puppeteer.page.addstyletag",version:"current"},i=[{value:"Page.addStyleTag() method",id:"pageaddstyletag-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],d={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(p.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page"},"Page")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.page.addstyletag"},"addStyleTag")),Object(p.b)("h2",{id:"pageaddstyletag-method"},"Page.addStyleTag() method"),Object(p.b)("p",null,"Adds a ",Object(p.b)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tag into the page with the desired URL or a ",Object(p.b)("inlineCode",{parentName:"p"},'<style type="text/css">')," tag with the content."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"addStyleTag(options: {\n        url?: string;\n        path?: string;\n        content?: string;\n    }): Promise<ElementHandle>;\n")),Object(p.b)("h2",{id:"parameters"},"Parameters"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Parameter"),Object(p.b)("th",{parentName:"tr",align:null},"Type"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},"options"),Object(p.b)("td",{parentName:"tr",align:null},"{ url?: string; path?: string; content?: string; }"),Object(p.b)("td",{parentName:"tr",align:null})))),Object(p.b)("b",null,"Returns:"),Object(p.b)("p",null,"Promise","<",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/next/puppeteer.elementhandle"},"ElementHandle"),">"),Object(p.b)("p",null,"Promise which resolves to the added tag when the stylesheet's onload fires or when the CSS content was injected into frame."))}s.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),d=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,m=s["".concat(o,".").concat(b)]||s[b]||u[b]||p;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);