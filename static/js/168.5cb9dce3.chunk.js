/*! For license information please see 168.5cb9dce3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_app_template=self.webpackChunkreact_app_template||[]).push([[168],{701:function(t,e,r){r.d(e,{Cp:function(){return n},Q_:function(){return c},cI:function(){return i},kh:function(){return a},ts:function(){return o}});var n=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US",{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},o=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTBkMzc5ODJiZDJiYzcyZGQ0YzJlYmFkNDMyZDM1MSIsInN1YiI6IjY0MzZmNjFjMWY3NDhiMDBmNDQ4YTAxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gks0BHjnc6aPxcD5N06z9iz6G9Pk5pFGy9_rmy-7z3Y"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US"),{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},a=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=7e0d37982bd2bc72dd4c2ebad432d351&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))},c=function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=7e0d37982bd2bc72dd4c2ebad432d351&query=".concat(t,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json"}}).then((function(t){return t.json()})).catch((function(t){return console.error(t)}))}},639:function(t,e,r){r.d(e,{Z:function(){return h}});var n="Loader_loaderWrap__NiYjU",o="Loader_loadingSpinner__zrxVS",i="Loader_spinner__iDFIv",a="Loader_inner__p3BGw",c="Loader_outer__pdQeO",u="Loader_eye__UBdBm",s=r(184),h=function(t){return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{className:n,children:(0,s.jsx)("div",{className:o,children:(0,s.jsx)("div",{className:"".concat(i," ").concat(c),children:(0,s.jsx)("div",{className:"".concat(i," ").concat(a),children:(0,s.jsx)("div",{className:"".concat(i," ").concat(u)})})})})})})}},168:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(165),o=r(861),i=r(439),a=r(791),c="Reviews_reviewsList__hDAQA",u="Reviews_review__sHbuN",s="Reviews_nothingText__zm5nh",h=r(689),l=r(701),f=r(639),d=r(184),p=function(){var t=(0,a.useState)([]),e=(0,i.Z)(t,2),r=e[0],p=e[1],v=(0,a.useState)(!1),y=(0,i.Z)(v,2),m=y[0],g=y[1],w=(0,h.UO)();return(0,a.useEffect)((function(){var t=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,l.kh)(w.movieId);case 4:e=t.sent,p(e.results),g(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),g(!1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[w.movieId]),(0,d.jsxs)(d.Fragment,{children:[m&&(0,d.jsx)(f.Z,{}),(0,d.jsx)("ul",{className:c,children:r&&0!==r.length?r.map((function(t){var e=t.id,r=t.author,n=t.content;return(0,d.jsxs)("li",{className:u,children:[(0,d.jsx)("p",{children:r}),(0,d.jsx)("p",{children:n})]},e)})):(0,d.jsx)("p",{className:s,children:"THERE`S NO REVIEWS"})})]})}},861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(2);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(S){h=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var d={};function p(){}function v(){}function y(){}var m={};h(m,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(G([])));w&&w!==e&&r.call(w,c)&&(m=w);var _=y.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var h=s.arg,l=h.value;return l&&"object"==(0,n.Z)(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(l).then((function(t){h.value=t,c(h)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function G(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,i(_,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(x.prototype),h(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(_),h(_,s,"Generator"),h(_,c,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=168.5cb9dce3.chunk.js.map