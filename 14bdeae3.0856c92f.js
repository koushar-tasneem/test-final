(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{2837:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),i=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||o[d]||p;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=d;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<p;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},303:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),p=(r(0),r(2837)),l=["components"],s={},b={unversionedId:"puppeteer.httprequest",id:"version-6.0.0/puppeteer.httprequest",isDocsHomePage:!1,title:"puppeteer.httprequest",description:"Home &gt; puppeteer &gt; HTTPRequest",source:"@site/versioned_docs\\version-6.0.0\\puppeteer.httprequest.md",slug:"/puppeteer.httprequest",permalink:"/test-final/docs/6.0.0/puppeteer.httprequest",version:"6.0.0",sidebar:"version-6.0.0/docs",previous:{title:"puppeteer.elementhandle.uploadfile",permalink:"/test-final/docs/6.0.0/puppeteer.elementhandle.uploadfile"},next:{title:"puppeteer.httprequest.abort",permalink:"/test-final/docs/6.0.0/puppeteer.httprequest.abort"}},c=[{value:"HTTPRequest class",id:"httprequest-class",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Methods",id:"methods",children:[]}],i={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,l);return Object(p.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/index"},"Home")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer"},"puppeteer")," ",">"," ",Object(p.b)("a",{parentName:"p",href:"/test-final/docs/6.0.0/puppeteer.httprequest"},"HTTPRequest")),Object(p.b)("h2",{id:"httprequest-class"},"HTTPRequest class"),Object(p.b)("p",null,"Represents an HTTP request sent by a page."),Object(p.b)("b",null,"Signature:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-typescript"},"export declare class HTTPRequest \n")),Object(p.b)("h2",{id:"remarks"},"Remarks"),Object(p.b)("p",null,"Whenever the page sends a request, such as for a network resource, the following events are emitted by Puppeteer's ",Object(p.b)("inlineCode",{parentName:"p"},"page"),":"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("inlineCode",{parentName:"li"},"request"),": emitted when the request is issued by the page. - ",Object(p.b)("inlineCode",{parentName:"li"},"requestfinished")," - emitted when the response body is downloaded and the request is complete.")),Object(p.b)("p",null,"If request fails at some point, then instead of ",Object(p.b)("inlineCode",{parentName:"p"},"requestfinished")," event the ",Object(p.b)("inlineCode",{parentName:"p"},"requestfailed")," event is emitted."),Object(p.b)("p",null,"All of these events provide an instance of ",Object(p.b)("inlineCode",{parentName:"p"},"HTTPRequest")," representing the request that occurred:"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre"},"page.on('request', request => ...)\n\n")),Object(p.b)("p",null,"NOTE: HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",Object(p.b)("inlineCode",{parentName:"p"},"requestfinished")," event."),Object(p.b)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the ",Object(p.b)("inlineCode",{parentName:"p"},"requestfinished")," event, and a new request is issued to a redirected url."),Object(p.b)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",Object(p.b)("inlineCode",{parentName:"p"},"HTTPRequest")," class."),Object(p.b)("h2",{id:"methods"},"Methods"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:null},"Method"),Object(p.b)("th",{parentName:"tr",align:null},"Modifiers"),Object(p.b)("th",{parentName:"tr",align:null},"Description"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.abort"},"abort(errorCode)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Aborts a request.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.continue"},"continue(overrides)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Continues request with optional request overrides.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.failure"},"failure()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Access information about the request's failure.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.frame"},"frame()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.headers"},"headers()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.isnavigationrequest"},"isNavigationRequest()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.method"},"method()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.postdata"},"postData()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.redirectchain"},"redirectChain()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"A ",Object(p.b)("code",null,"redirectChain")," is a chain of requests initiated to fetch a resource.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.resourcetype"},"resourceType()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Contains the request's resource type as it was perceived by the rendering engine.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.respond"},"respond(response)")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null},"Fulfills a request with the given response.")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.response"},"response()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:null},Object(p.b)("a",{parentName:"td",href:"/test-final/docs/6.0.0/puppeteer.httprequest.url"},"url()")),Object(p.b)("td",{parentName:"tr",align:null}),Object(p.b)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);