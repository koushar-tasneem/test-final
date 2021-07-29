(window.webpackJsonp=window.webpackJsonp||[]).push([[1339],{1412:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(2837)),o=["components"],p={},i={unversionedId:"puppeteer.executioncontext",id:"version-6.0.0/puppeteer.executioncontext",isDocsHomePage:!1,title:"puppeteer.executioncontext",description:"Home &gt; puppeteer &gt; ExecutionContext",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.executioncontext.md",slug:"/puppeteer.executioncontext",permalink:"/test-final/docs/6.0.0/puppeteer.executioncontext",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.filechooser.ismultiple",permalink:"/test-final/docs/6.0.0/puppeteer.filechooser.ismultiple"},next:{title:"puppeteer.executioncontext.evaluate",permalink:"/test-final/docs/6.0.0/puppeteer.executioncontext.evaluate"}},l=[{value:"ExecutionContext class",id:"executioncontext-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/index"},"Home")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(c.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.executioncontext"},"ExecutionContext")),Object(c.b)("h2",{id:"executioncontext-class"},"ExecutionContext class"),Object(c.b)("p",null,"This class represents a context for JavaScript execution. A ","[","Page","]"," might have many execution contexts: - each ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"frame"),' has "default" execution context that is always created after frame is attached to DOM. This context is returned by the ',Object(c.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.frame.executioncontext"},"Frame.executionContext()")," method. - ",Object(c.b)("a",{parentName:"p",href:"https://developer.chrome.com/extensions"},"Extension"),"'s content scripts create additional execution contexts."),Object(c.b)("p",null,"Besides pages, execution contexts can be found in ",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"workers"),"."),Object(c.b)("b",null,"Signature:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class ExecutionContext \n")),Object(c.b)("h2",{id:"remarks"},"Remarks"),Object(c.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(c.b)("inlineCode",{parentName:"p"},"ExecutionContext")," class."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Method"),Object(c.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.executioncontext.evaluate"},"evaluate(pageFunction, args)")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.executioncontext.evaluatehandle"},"evaluateHandle(pageFunction, args)")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.executioncontext.frame"},"frame()")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.executioncontext.queryobjects"},"queryObjects(prototypeHandle)")),Object(c.b)("td",{parentName:"tr",align:null}),Object(c.b)("td",{parentName:"tr",align:null},"This method iterates the JavaScript heap and finds all the objects with the given prototype.")))))}s.isMDXComponent=!0},2837:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||c;return n?a.a.createElement(m,p(p({ref:t},l),{},{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);