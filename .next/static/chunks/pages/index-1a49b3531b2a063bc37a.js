(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),i=n(4651),a=n(7426);var f={};function l(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=u.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),u=n[0],i=n[1];return{href:u,as:e.as?c.resolveHref(o,e.as):i||u}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,y=e.replace,h=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var _=(t=u.default.Children.only(v))&&"object"===typeof t&&t.ref,w=a.useIntersection({rootMargin:"200px"}),g=r(w,2),E=g[0],j=g[1],O=u.default.useCallback((function(e){E(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,E]);u.default.useEffect((function(){var e=j&&n&&c.isLocalURL(p),t="undefined"!==typeof m?m:o&&o.locale,r=f[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,j,m,n,o]);var k={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:u,locale:a,scroll:i}))}(e,o,p,d,y,h,b,m)},onMouseEnter:function(e){c.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof m?m:o&&o.locale,C=o&&o.isLocaleDomain&&c.getDomainLocale(d,P,o&&o.locales,o&&o.domainLocales);k.href=C||c.addBasePath(c.addLocale(d,P,o&&o.defaultLocale))}return u.default.cloneElement(t,k)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=o.useRef(),f=o.useState(!1),l=r(f,2),s=l[0],p=l[1],d=o.useCallback((function(e){a.current&&(a.current(),a.current=void 0),n||s||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,c=r.elements;return c.set(e,t),u.observe(e),function(){c.delete(e),u.unobserve(e),0===c.size&&(u.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!c&&!s){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),u=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},2547:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,{default:function(){return v}});var f=n(7294),l=n(1664),s=n(1163),p=n(5893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,n,c,i=d(a);function a(){return r(this,a),i.apply(this,arguments)}return t=a,c=[{key:"getInitialProps",value:function(e){return console.log(e),new Promise((function(e,t){setTimeout((function(){e({appName:"Super App"})}),1e3)}))}}],(n=[{key:"render",value:function(){return(0,p.jsxs)("div",{children:[(0,p.jsxs)("h1",{children:["The Main Page of ",this.props.appName]}),(0,p.jsxs)("p",{children:["Go to ",(0,p.jsx)(l.default,{href:"/auth",children:(0,p.jsx)("a",{children:"Auth"})})]}),(0,p.jsx)("button",{onClick:function(){return s.default.push("/auth")},children:"Go to auth"})]})}}])&&o(t.prototype,n),c&&o(t,c),a}(f.Component)},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2547)}])},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);