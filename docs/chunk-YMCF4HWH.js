var d=Object.defineProperty,S=Object.defineProperties,E=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,D=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,R=Reflect.get;var m=(e,r,t)=>r in e?d(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,M=(e,r)=>{for(var t in r||={})b.call(r,t)&&m(e,t,r[t]);if(h)for(var t of h(r))g.call(r,t)&&m(e,t,r[t]);return e},G=(e,r)=>S(e,P(r));var I=(e,r)=>{var t={};for(var n in e)b.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&h)for(var n of h(e))r.indexOf(n)<0&&g.call(e,n)&&(t[n]=e[n]);return t};var A=(e,r)=>()=>(e&&(r=e(e=0)),r);var V=(e,r)=>{for(var t in r)d(e,t,{get:r[t],enumerable:!0})},C=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of T(r))!b.call(e,i)&&i!==t&&d(e,i,{get:()=>r[i],enumerable:!(n=E(r,i))||n.enumerable});return e};var q=e=>C(d({},"__esModule",{value:!0}),e);var B=(e,r,t)=>R(D(e),t,r);var K=(e,r,t)=>new Promise((n,i)=>{var o=c=>{try{u(t.next(c))}catch(a){i(a)}},f=c=>{try{u(t.throw(c))}catch(a){i(a)}},u=c=>c.done?n(c.value):Promise.resolve(c.value).then(o,f);u((t=t.apply(e,r)).next())});function z(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");w(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function H(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]]);return t}function J(e,r,t,n){function i(o){return o instanceof t?o:new t(function(f){f(o)})}return new(t||(t=Promise))(function(o,f){function u(s){try{a(n.next(s))}catch(p){f(p)}}function c(s){try{a(n.throw(s))}catch(p){f(p)}}function a(s){s.done?o(s.value):i(s.value).then(u,c)}a((n=n.apply(e,r||[])).next())})}function L(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,f;return f={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function u(a){return function(s){return c([a,s])}}function c(a){if(n)throw new TypeError("Generator is already executing.");for(;f&&(f=0,a[0]&&(t=0)),t;)try{if(n=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,i=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1],o=a;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(a);break}o[2]&&t.ops.pop(),t.trys.pop();continue}a=r.call(e,t)}catch(s){a=[6,s],i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function x(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function Q(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],f;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(u){f={error:u}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(f)throw f.error}}return o}function U(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function W(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(e,r||[]),i,o=[];return i={},f("next"),f("throw"),f("return"),i[Symbol.asyncIterator]=function(){return this},i;function f(l){n[l]&&(i[l]=function(y){return new Promise(function(_,j){o.push([l,y,_,j])>1||u(l,y)})})}function u(l,y){try{c(n[l](y))}catch(_){p(o[0][3],_)}}function c(l){l.value instanceof v?Promise.resolve(l.value.v).then(a,s):p(o[0][2],l)}function a(l){u("next",l)}function s(l){u("throw",l)}function p(l,y){l(y),o.shift(),o.length&&u(o[0][0],o[0][1])}}function X(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],t;return r?r.call(e):(e=typeof x=="function"?x(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(o){t[o]=e[o]&&function(f){return new Promise(function(u,c){f=e[o](f),i(u,c,f.done,f.value)})}}function i(o,f,u,c){Promise.resolve(c).then(function(a){o({value:a,done:u})},f)}}var w,O,F=A(()=>{"use strict";w=function(e,r){return w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},w(e,r)};O=function(){return O=Object.assign||function(r){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},O.apply(this,arguments)}});export{M as a,G as b,I as c,A as d,V as e,q as f,B as g,K as h,z as i,O as j,H as k,J as l,L as m,x as n,Q as o,U as p,v as q,W as r,X as s,F as t};
