(window.webpackJsonp=window.webpackJsonp||[]).push([[1716],{1789:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),l=(a(0),a(2837)),p=["components"],c={},s={unversionedId:"puppeteer.jshandle",id:"version-10.0.0/puppeteer.jshandle",isDocsHomePage:!1,title:"puppeteer.jshandle",description:"Home &gt; puppeteer &gt; JSHandle",source:"@site/versioned_docs\\version-10.0.0\\puppeteer.jshandle.md",slug:"/puppeteer.jshandle",permalink:"/test-final/docs/10.0.0/puppeteer.jshandle",version:"10.0.0",sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.executioncontext.queryobjects",permalink:"/test-final/docs/10.0.0/puppeteer.executioncontext.queryobjects"},next:{title:"puppeteer.jshandle.aselement",permalink:"/test-final/docs/10.0.0/puppeteer.jshandle.aselement"}},o=[{value:"JSHandle class",id:"jshandle-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[]}],b={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,p);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/index"},"Home")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.jshandle"},"JSHandle")),Object(l.b)("h2",{id:"jshandle-class"},"JSHandle class"),Object(l.b)("p",null,"Represents an in-page JavaScript object. JSHandles can be created with the ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.page.evaluatehandle"},"page.evaluateHandle")," method."),Object(l.b)("b",null,"Signature:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class JSHandle<HandleObjectType = unknown> \n")),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(l.b)("inlineCode",{parentName:"p"},"JSHandle")," class."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const windowHandle = await page.evaluateHandle(() => window);\n\n")),Object(l.b)("p",null,"JSHandle prevents the referenced JavaScript object from being garbage-collected unless the handle is ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.jshandle.dispose"},"disposed"),". JSHandles are auto- disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(l.b)("p",null,"JSHandle instances can be used as arguments for ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.page._eval"},"Page.$eval()"),", ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.page.evaluate"},"Page.evaluate()"),", and ",Object(l.b)("a",{parentName:"p",href:"/test-final/docs/10.0.0/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()"),"."),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Method"),Object(l.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.aselement"},"asElement()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.dispose"},"dispose()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Stops referencing the element handle, and resolves when the object handle is successfully disposed of.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.evaluate"},"evaluate(pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method passes this handle as the first argument to ",Object(l.b)("code",null,"pageFunction"),". If ",Object(l.b)("code",null,"pageFunction")," returns a Promise, then ",Object(l.b)("code",null,"handle.evaluate")," would wait for the promise to resolve and return its value.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.evaluatehandle"},"evaluateHandle(pageFunction, args)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"This method passes this handle as the first argument to ",Object(l.b)("code",null,"pageFunction"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.executioncontext"},"executionContext()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Returns the execution context the handle belongs to.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.getproperties"},"getProperties()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"The method returns a map with property names as keys and JSHandle instances for the property values.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.getproperty"},"getProperty(propertyName)")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Fetches a single property from the referenced object.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.jsonvalue"},"jsonValue()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/test-final/docs/10.0.0/puppeteer.jshandle.tostring"},"toString()")),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Returns a string representation of the JSHandle.")))))}d.isMDXComponent=!0},2837:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(p,".").concat(u)]||d[u]||i[u]||l;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var o=2;o<l;o++)p[o]=a[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);