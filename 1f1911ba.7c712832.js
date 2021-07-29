(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,s=m["".concat(c,".").concat(d)]||m[d]||b[d]||l;return n?a.a.createElement(s,o(o({ref:t},i),{},{components:n})):a.a.createElement(s,o({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),l=(n(0),n(2837)),c=["components"],o={},p={unversionedId:"puppeteer.elementhandle.click",id:"version-5.4.0/puppeteer.elementhandle.click",isDocsHomePage:!1,title:"puppeteer.elementhandle.click",description:"Home &gt; puppeteer &gt; ElementHandle &gt; click",source:"@site/versioned_docs\\version-5.4.0\\puppeteer.elementhandle.click.md",slug:"/puppeteer.elementhandle.click",permalink:"/test-final/docs/puppeteer.elementhandle.click",version:"5.4.0",sidebar:"version-5.4.0/docs",previous:{title:"puppeteer.elementhandle.boxmodel",permalink:"/test-final/docs/puppeteer.elementhandle.boxmodel"},next:{title:"puppeteer.elementhandle.contentframe",permalink:"/test-final/docs/puppeteer.elementhandle.contentframe"}},i=[{value:"ElementHandle.click() method",id:"elementhandleclick-method",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:i};function m(e){var t=e.components,n=Object(a.a)(e,c);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test-final/docs/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.elementhandle"},"ElementHandle")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.elementhandle.click"},"click")),Object(l.b)("h2",{id:"elementhandleclick-method"},"ElementHandle.click() method"),Object(l.b)("p",null,"This method scrolls element into view if needed, and then uses ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If the element is detached from DOM, the method throws an error."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"click(options?: ClickOptions): Promise<void>;\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"options"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/puppeteer.clickoptions"},"ClickOptions")),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("b",null,"Returns:"),Object(l.b)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0}}]);