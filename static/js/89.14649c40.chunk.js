/*! For license information please see 89.14649c40.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_app_template=self.webpackChunkreact_app_template||[]).push([[89],{701:function(t,e,r){r.d(e,{Cp:function(){return n},Q_:function(){return c},cI:function(){return i},kh:function(){return a},ts:function(){return o}});var n=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US",{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},o=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBkMzc5ODJiZDJiYzcyZGQ0YzJlYmFkNDMyZDM1MSIsInN1YiI6IjY0MzZmNjFjMWY3NDhiMDBmNDQ4YTAxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gks0BHjnc6aPxcD5N06z9iz6G9Pk5pFGy9_rmy-7z3Y"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US"),{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},a=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},c=function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=7e0d37982bd2bc72dd4c2ebad432d351&query=".concat(t,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))}},639:function(t,e,r){r.d(e,{Z:function(){return l}});var n="Loader_loaderWrap__NiYjU",o="Loader_loadingSpinner__zrxVS",i="Loader_spinner__iDFIv",a="Loader_inner__p3BGw",c="Loader_outer__pdQeO",s="Loader_eye__UBdBm",u=r(184),l=function(t){return(0,u.jsx)(u.Fragment,{children:t&&(0,u.jsx)("div",{className:n,children:(0,u.jsx)("div",{className:o,children:(0,u.jsx)("div",{className:"".concat(i," ").concat(c),children:(0,u.jsx)("div",{className:"".concat(i," ").concat(a),children:(0,u.jsx)("div",{className:"".concat(i," ").concat(s)})})})})})})}},89:function(t,e,r){r.r(e),r.d(e,{default:function(){return N}});var n=r(165),o=r(861),i=r(439),a=r(791),c=r(689),s=r(87),u=r(701),l="movieDetails_filmDataWrap__-ebmi",h="movieDetails_filmPoster__KDjjy",f="movieDetails_filmTitle__hBR42",d="movieDetails_filmDataTitle__9X+no",p="movieDetails_filmDataValue__MotHd",v="movieDetails_userScoreWrap__Cial4",m="movieDetails_userScoreTitle__TjXq5",y="movieDetails_userScoreValue__sUTNv",g="movieDetails_filmGenresList__Ixscy",_="movieDetails_additionalInfoWrap__w4wPq",x="movieDetails_additionalInfoLink__N-S3N",j="movieDetails_button__nFp7V",w=r(639),b=r(184),N=function(){var t,e,r=(0,c.UO)(),N=(0,a.useState)({}),L=(0,i.Z)(N,2),E=L[0],D=L[1],S=(0,a.useState)(!1),k=(0,i.Z)(S,2),G=k[0],I=k[1],O=(0,c.TH)(),T=(0,a.useRef)(null!==(t=null===(e=O.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");return(0,a.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,I(!0),t.next=4,(0,u.ts)(r.movieId);case 4:e=t.sent,D(e),I(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),I(!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[r.movieId]),(0,b.jsxs)(b.Fragment,{children:[G&&(0,b.jsx)(w.Z,{}),(0,b.jsx)(s.rU,{to:T.current,className:j,children:"< GO BACK"}),(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/original/".concat(E.poster_path&&E.poster_path),alt:"img"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:f,children:E.original_title&&E.original_title}),(0,b.jsxs)("div",{className:v,children:[(0,b.jsx)("h2",{className:m,children:"User Score:"}),(0,b.jsx)("p",{className:y,children:E.vote_average&&E.vote_average})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:d,children:"Overview"}),(0,b.jsx)("p",{className:p,children:E.overview&&E.overview})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:d,children:"Genres"}),(0,b.jsx)("ul",{className:g,children:E.genres&&E.genres.map((function(t){var e=t.name,r=t.id;return(0,b.jsx)("li",{className:p,children:e},r)}))})]})]})]}),(0,b.jsxs)("div",{className:_,children:[(0,b.jsx)(s.rU,{className:x,to:"cast",children:"CAST"}),(0,b.jsx)(s.rU,{className:x,to:"reviews",children:"REVIEWS"})]}),(0,b.jsx)(c.j3,{})]})}},861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(2);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(G){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new D(n||[]);return i(a,"_invoke",{value:b(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=h;var d={};function p(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(S([])));_&&_!==e&&r.call(_,c)&&(y=_);var x=m.prototype=p.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function N(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=m,i(x,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(w.prototype),l(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),l(x,u,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=89.14649c40.chunk.js.map