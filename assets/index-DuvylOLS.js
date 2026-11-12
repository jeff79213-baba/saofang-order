(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function UR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var XI={exports:{}},eh={},ZI={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ml=Symbol.for("react.element"),jR=Symbol.for("react.portal"),BR=Symbol.for("react.fragment"),zR=Symbol.for("react.strict_mode"),$R=Symbol.for("react.profiler"),qR=Symbol.for("react.provider"),GR=Symbol.for("react.context"),KR=Symbol.for("react.forward_ref"),WR=Symbol.for("react.suspense"),HR=Symbol.for("react.memo"),QR=Symbol.for("react.lazy"),X_=Symbol.iterator;function YR(t){return t===null||typeof t!="object"?null:(t=X_&&t[X_]||t["@@iterator"],typeof t=="function"?t:null)}var ew={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tw=Object.assign,nw={};function co(t,e,n){this.props=t,this.context=e,this.refs=nw,this.updater=n||ew}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rw(){}rw.prototype=co.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=nw,this.updater=n||ew}var Lp=Op.prototype=new rw;Lp.constructor=Op;tw(Lp,co.prototype);Lp.isPureReactComponent=!0;var Z_=Array.isArray,iw=Object.prototype.hasOwnProperty,Mp={current:null},sw={key:!0,ref:!0,__self:!0,__source:!0};function ow(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iw.call(e,r)&&!sw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ml,type:t,key:s,ref:o,props:i,_owner:Mp.current}}function JR(t,e){return{$$typeof:ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ml}function XR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ey=/\/+/g;function Id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XR(""+t.key):e.toString(36)}function bu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ml:case jR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Id(o,0):r,Z_(i)?(n="",t!=null&&(n=t.replace(ey,"$&/")+"/"),bu(i,e,n,"",function(c){return c})):i!=null&&(Fp(i)&&(i=JR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ey,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Z_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Id(s,a);o+=bu(s,e,n,u,i)}else if(u=YR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Id(s,a++),o+=bu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function su(t,e,n){if(t==null)return t;var r=[],i=0;return bu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ZR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},Du={transition:null},eP={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Du,ReactCurrentOwner:Mp};function aw(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:su,forEach:function(t,e,n){su(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return su(t,function(){e++}),e},toArray:function(t){return su(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=co;le.Fragment=BR;le.Profiler=$R;le.PureComponent=Op;le.StrictMode=zR;le.Suspense=WR;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eP;le.act=aw;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)iw.call(e,u)&&!sw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ml,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:GR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qR,_context:t},t.Consumer=t};le.createElement=ow;le.createFactory=function(t){var e=ow.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:KR,render:t}};le.isValidElement=Fp;le.lazy=function(t){return{$$typeof:QR,_payload:{_status:-1,_result:t},_init:ZR}};le.memo=function(t,e){return{$$typeof:HR,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Du.transition;Du.transition={};try{t()}finally{Du.transition=e}};le.unstable_act=aw;le.useCallback=function(t,e){return xt.current.useCallback(t,e)};le.useContext=function(t){return xt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};le.useEffect=function(t,e){return xt.current.useEffect(t,e)};le.useId=function(){return xt.current.useId()};le.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return xt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};le.useRef=function(t){return xt.current.useRef(t)};le.useState=function(t){return xt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return xt.current.useTransition()};le.version="18.3.1";ZI.exports=le;var ee=ZI.exports;const tP=UR(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nP=ee,rP=Symbol.for("react.element"),iP=Symbol.for("react.fragment"),sP=Object.prototype.hasOwnProperty,oP=nP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aP={key:!0,ref:!0,__self:!0,__source:!0};function lw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sP.call(e,r)&&!aP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rP,type:t,key:s,ref:o,props:i,_owner:oP.current}}eh.Fragment=iP;eh.jsx=lw;eh.jsxs=lw;XI.exports=eh;var k=XI.exports,df={},uw={exports:{}},Jt={},cw={exports:{}},hw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,te){var ie=W.length;W.push(te);e:for(;0<ie;){var Ee=ie-1>>>1,B=W[Ee];if(0<i(B,te))W[Ee]=te,W[ie]=B,ie=Ee;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var te=W[0],ie=W.pop();if(ie!==te){W[0]=ie;e:for(var Ee=0,B=W.length,Z=B>>>1;Ee<Z;){var ne=2*(Ee+1)-1,oe=W[ne],Ye=ne+1,zt=W[Ye];if(0>i(oe,ie))Ye<B&&0>i(zt,oe)?(W[Ee]=zt,W[Ye]=ie,Ee=Ye):(W[Ee]=oe,W[ne]=ie,Ee=ne);else if(Ye<B&&0>i(zt,ie))W[Ee]=zt,W[Ye]=ie,Ee=Ye;else break e}}return te}function i(W,te){var ie=W.sortIndex-te.sortIndex;return ie!==0?ie:W.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,y=!1,A=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var te=n(c);te!==null;){if(te.callback===null)r(c);else if(te.startTime<=W)r(c),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(c)}}function V(W){if(P=!1,I(W),!A)if(n(u)!==null)A=!0,ui(F);else{var te=n(c);te!==null&&an(V,te.startTime-W)}}function F(W,te){A=!1,P&&(P=!1,T(g),g=-1),y=!0;var ie=m;try{for(I(te),f=n(u);f!==null&&(!(f.expirationTime>te)||W&&!C());){var Ee=f.callback;if(typeof Ee=="function"){f.callback=null,m=f.priorityLevel;var B=Ee(f.expirationTime<=te);te=t.unstable_now(),typeof B=="function"?f.callback=B:f===n(u)&&r(u),I(te)}else r(u);f=n(u)}if(f!==null)var Z=!0;else{var ne=n(c);ne!==null&&an(V,ne.startTime-te),Z=!1}return Z}finally{f=null,m=ie,y=!1}}var L=!1,w=null,g=-1,E=5,S=-1;function C(){return!(t.unstable_now()-S<E)}function N(){if(w!==null){var W=t.unstable_now();S=W;var te=!0;try{te=w(!0,W)}finally{te?R():(L=!1,w=null)}}else L=!1}var R;if(typeof v=="function")R=function(){v(N)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,Nn=bt.port2;bt.port1.onmessage=N,R=function(){Nn.postMessage(null)}}else R=function(){D(N,0)};function ui(W){w=W,L||(L=!0,R())}function an(W,te){g=D(function(){W(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){A||y||(A=!0,ui(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var ie=m;m=te;try{return W()}finally{m=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,te){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ie=m;m=W;try{return te()}finally{m=ie}},t.unstable_scheduleCallback=function(W,te,ie){var Ee=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Ee+ie:Ee):ie=Ee,W){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ie+B,W={id:d++,callback:te,priorityLevel:W,startTime:ie,expirationTime:B,sortIndex:-1},ie>Ee?(W.sortIndex=ie,e(c,W),n(u)===null&&W===n(c)&&(P?(T(g),g=-1):P=!0,an(V,ie-Ee))):(W.sortIndex=B,e(u,W),A||y||(A=!0,ui(F))),W},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(W){var te=m;return function(){var ie=m;m=te;try{return W.apply(this,arguments)}finally{m=ie}}}})(hw);cw.exports=hw;var lP=cw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uP=ee,Ht=lP;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dw=new Set,Oa={};function Yi(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Oa[t]=e,t=0;t<e.length;t++)dw.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=Object.prototype.hasOwnProperty,cP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ty={},ny={};function hP(t){return ff.call(ny,t)?!0:ff.call(ty,t)?!1:cP.test(t)?ny[t]=!0:(ty[t]=!0,!1)}function dP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fP(t,e,n,r){if(e===null||typeof e>"u"||dP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Up,jp);ft[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Up,jp);ft[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Up,jp);ft[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fP(e,n,i,r)&&(n=null),r||i===null?hP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=uP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ou=Symbol.for("react.element"),_s=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),fw=Symbol.for("react.provider"),pw=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),qp=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),mw=Symbol.for("react.offscreen"),ry=Symbol.iterator;function Ko(t){return t===null||typeof t!="object"?null:(t=ry&&t[ry]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,wd;function sa(t){if(wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wd=e&&e[1]||""}return`
`+wd+t}var Ed=!1;function Td(t,e){if(!t||Ed)return"";Ed=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ed=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function pP(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=Td(t.type,!1),t;case 11:return t=Td(t.type.render,!1),t;case 1:return t=Td(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case _s:return"Portal";case pf:return"Profiler";case zp:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pw:return(t.displayName||"Context")+".Consumer";case fw:return(t._context.displayName||"Context")+".Provider";case $p:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qp:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function mP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gP(t){var e=gw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function au(t){t._valueTracker||(t._valueTracker=gP(t))}function _w(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yf(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function iy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yw(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function vf(t,e){yw(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?If(t,e.type,n):e.hasOwnProperty("defaultValue")&&If(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function If(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function ks(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(oa(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function vw(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ay(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Iw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Iw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lu,ww=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lu=lu||document.createElement("div"),lu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_P=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){_P.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Ew(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Tw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ew(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yP=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tf(t,e){if(e){if(yP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,xs=null,Ns=null;function ly(t){if(t=yl(t)){if(typeof Rf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=sh(e),Rf(t.stateNode,t.type,e))}}function Aw(t){xs?Ns?Ns.push(t):Ns=[t]:xs=t}function Sw(){if(xs){var t=xs,e=Ns;if(Ns=xs=null,ly(t),e)for(t=0;t<e.length;t++)ly(e[t])}}function Rw(t,e){return t(e)}function Pw(){}var Ad=!1;function Cw(t,e,n){if(Ad)return t(e,n);Ad=!0;try{return Rw(t,e,n)}finally{Ad=!1,(xs!==null||Ns!==null)&&(Pw(),Sw())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=sh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Pf=!1;if(Qn)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{Pf=!1}function vP(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var va=!1,ac=null,lc=!1,Cf=null,IP={onError:function(t){va=!0,ac=t}};function wP(t,e,n,r,i,s,o,a,u){va=!1,ac=null,vP.apply(IP,arguments)}function EP(t,e,n,r,i,s,o,a,u){if(wP.apply(this,arguments),va){if(va){var c=ac;va=!1,ac=null}else throw Error(z(198));lc||(lc=!0,Cf=c)}}function Ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uy(t){if(Ji(t)!==t)throw Error(z(188))}function TP(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return uy(i),t;if(s===r)return uy(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function xw(t){return t=TP(t),t!==null?Nw(t):null}function Nw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nw(t);if(e!==null)return e;t=t.sibling}return null}var bw=Ht.unstable_scheduleCallback,cy=Ht.unstable_cancelCallback,AP=Ht.unstable_shouldYield,SP=Ht.unstable_requestPaint,qe=Ht.unstable_now,RP=Ht.unstable_getCurrentPriorityLevel,Kp=Ht.unstable_ImmediatePriority,Dw=Ht.unstable_UserBlockingPriority,uc=Ht.unstable_NormalPriority,PP=Ht.unstable_LowPriority,Vw=Ht.unstable_IdlePriority,th=null,An=null;function CP(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(th,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:NP,kP=Math.log,xP=Math.LN2;function NP(t){return t>>>=0,t===0?32:31-(kP(t)/xP|0)|0}var uu=64,cu=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=aa(a):(s&=o,s!==0&&(r=aa(s)))}else o=n&~i,o!==0?r=aa(o):s!==0&&(r=aa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function bP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=bP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ow(){var t=uu;return uu<<=1,!(uu&4194240)&&(uu=64),t}function Sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function VP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function Lw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mw,Hp,Fw,Uw,jw,xf=!1,hu=[],kr=null,xr=null,Nr=null,Fa=new Map,Ua=new Map,Ir=[],OP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hy(t,e){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function Ho(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yl(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LP(t,e,n,r,i){switch(e){case"focusin":return kr=Ho(kr,t,e,n,r,i),!0;case"dragenter":return xr=Ho(xr,t,e,n,r,i),!0;case"mouseover":return Nr=Ho(Nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,Ho(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ua.set(s,Ho(Ua.get(s)||null,t,e,n,r,i)),!0}return!1}function Bw(t){var e=Ti(t.target);if(e!==null){var n=Ji(e);if(n!==null){if(e=n.tag,e===13){if(e=kw(n),e!==null){t.blockedOn=e,jw(t.priority,function(){Fw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sf=r,n.target.dispatchEvent(r),Sf=null}else return e=yl(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function dy(t,e,n){Vu(t)&&n.delete(e)}function MP(){xf=!1,kr!==null&&Vu(kr)&&(kr=null),xr!==null&&Vu(xr)&&(xr=null),Nr!==null&&Vu(Nr)&&(Nr=null),Fa.forEach(dy),Ua.forEach(dy)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,xf||(xf=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,MP)))}function ja(t){function e(i){return Qo(i,t)}if(0<hu.length){Qo(hu[0],t);for(var n=1;n<hu.length;n++){var r=hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(kr!==null&&Qo(kr,t),xr!==null&&Qo(xr,t),Nr!==null&&Qo(Nr,t),Fa.forEach(e),Ua.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)Bw(n),n.blockedOn===null&&Ir.shift()}var bs=ir.ReactCurrentBatchConfig,hc=!0;function FP(t,e,n,r){var i=ge,s=bs.transition;bs.transition=null;try{ge=1,Qp(t,e,n,r)}finally{ge=i,bs.transition=s}}function UP(t,e,n,r){var i=ge,s=bs.transition;bs.transition=null;try{ge=4,Qp(t,e,n,r)}finally{ge=i,bs.transition=s}}function Qp(t,e,n,r){if(hc){var i=Nf(t,e,n,r);if(i===null)Od(t,e,r,dc,n),hy(t,r);else if(LP(i,t,e,n,r))r.stopPropagation();else if(hy(t,r),e&4&&-1<OP.indexOf(t)){for(;i!==null;){var s=yl(i);if(s!==null&&Mw(s),s=Nf(t,e,n,r),s===null&&Od(t,e,r,dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Od(t,e,r,null,n)}}var dc=null;function Nf(t,e,n,r){if(dc=null,t=Gp(r),t=Ti(t),t!==null)if(e=Ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function zw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RP()){case Kp:return 1;case Dw:return 4;case uc:case PP:return 16;case Vw:return 536870912;default:return 16}default:return 16}}var Sr=null,Yp=null,Ou=null;function $w(){if(Ou)return Ou;var t,e=Yp,n=e.length,r,i="value"in Sr?Sr.value:Sr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ou=i.slice(t,1<r?1-r:void 0)}function Lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function du(){return!0}function fy(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?du:fy,this.isPropagationStopped=fy,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=du)},persist:function(){},isPersistent:du}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Xt(ho),_l=Me({},ho,{view:0,detail:0}),jP=Xt(_l),Rd,Pd,Yo,nh=Me({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Rd=t.screenX-Yo.screenX,Pd=t.screenY-Yo.screenY):Pd=Rd=0,Yo=t),Rd)},movementY:function(t){return"movementY"in t?t.movementY:Pd}}),py=Xt(nh),BP=Me({},nh,{dataTransfer:0}),zP=Xt(BP),$P=Me({},_l,{relatedTarget:0}),Cd=Xt($P),qP=Me({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),GP=Xt(qP),KP=Me({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WP=Xt(KP),HP=Me({},ho,{data:0}),my=Xt(HP),QP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JP[t])?!!e[t]:!1}function Xp(){return XP}var ZP=Me({},_l,{key:function(t){if(t.key){var e=QP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?Lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eC=Xt(ZP),tC=Me({},nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gy=Xt(tC),nC=Me({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),rC=Xt(nC),iC=Me({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),sC=Xt(iC),oC=Me({},nh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aC=Xt(oC),lC=[9,13,27,32],Zp=Qn&&"CompositionEvent"in window,Ia=null;Qn&&"documentMode"in document&&(Ia=document.documentMode);var uC=Qn&&"TextEvent"in window&&!Ia,qw=Qn&&(!Zp||Ia&&8<Ia&&11>=Ia),_y=" ",yy=!1;function Gw(t,e){switch(t){case"keyup":return lC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function cC(t,e){switch(t){case"compositionend":return Kw(e);case"keypress":return e.which!==32?null:(yy=!0,_y);case"textInput":return t=e.data,t===_y&&yy?null:t;default:return null}}function hC(t,e){if(vs)return t==="compositionend"||!Zp&&Gw(t,e)?(t=$w(),Ou=Yp=Sr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qw&&e.locale!=="ko"?null:e.data;default:return null}}var dC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dC[t.type]:e==="textarea"}function Ww(t,e,n,r){Aw(r),e=fc(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wa=null,Ba=null;function fC(t){iE(t,0)}function rh(t){var e=Es(t);if(_w(e))return t}function pC(t,e){if(t==="change")return e}var Hw=!1;if(Qn){var kd;if(Qn){var xd="oninput"in document;if(!xd){var Iy=document.createElement("div");Iy.setAttribute("oninput","return;"),xd=typeof Iy.oninput=="function"}kd=xd}else kd=!1;Hw=kd&&(!document.documentMode||9<document.documentMode)}function wy(){wa&&(wa.detachEvent("onpropertychange",Qw),Ba=wa=null)}function Qw(t){if(t.propertyName==="value"&&rh(Ba)){var e=[];Ww(e,Ba,t,Gp(t)),Cw(fC,e)}}function mC(t,e,n){t==="focusin"?(wy(),wa=e,Ba=n,wa.attachEvent("onpropertychange",Qw)):t==="focusout"&&wy()}function gC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rh(Ba)}function _C(t,e){if(t==="click")return rh(e)}function yC(t,e){if(t==="input"||t==="change")return rh(e)}function vC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:vC;function za(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ff.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function Ey(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ty(t,e){var n=Ey(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ey(n)}}function Yw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jw(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IC(t){var e=Jw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yw(n.ownerDocument.documentElement,n)){if(r!==null&&em(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ty(n,s);var o=Ty(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wC=Qn&&"documentMode"in document&&11>=document.documentMode,Is=null,bf=null,Ea=null,Df=!1;function Ay(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||Is==null||Is!==oc(r)||(r=Is,"selectionStart"in r&&em(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ea&&za(Ea,r)||(Ea=r,r=fc(bf,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function fu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:fu("Animation","AnimationEnd"),animationiteration:fu("Animation","AnimationIteration"),animationstart:fu("Animation","AnimationStart"),transitionend:fu("Transition","TransitionEnd")},Nd={},Xw={};Qn&&(Xw=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function ih(t){if(Nd[t])return Nd[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xw)return Nd[t]=e[n];return t}var Zw=ih("animationend"),eE=ih("animationiteration"),tE=ih("animationstart"),nE=ih("transitionend"),rE=new Map,Sy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){rE.set(t,e),Yi(e,[t])}for(var bd=0;bd<Sy.length;bd++){var Dd=Sy[bd],EC=Dd.toLowerCase(),TC=Dd[0].toUpperCase()+Dd.slice(1);Xr(EC,"on"+TC)}Xr(Zw,"onAnimationEnd");Xr(eE,"onAnimationIteration");Xr(tE,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(nE,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AC=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Ry(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EP(r,e,void 0,t),t.currentTarget=null}function iE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Ry(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Ry(i,a,c),s=u}}}if(lc)throw t=Cf,lc=!1,Cf=null,t}function Ae(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(sE(e,t,2,!1),n.add(r))}function Vd(t,e,n){var r=0;e&&(r|=4),sE(n,t,r,e)}var pu="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[pu]){t[pu]=!0,dw.forEach(function(n){n!=="selectionchange"&&(AC.has(n)||Vd(n,!1,t),Vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pu]||(e[pu]=!0,Vd("selectionchange",!1,e))}}function sE(t,e,n,r){switch(zw(e)){case 1:var i=FP;break;case 4:i=UP;break;default:i=Qp}n=i.bind(null,e,n,t),i=void 0,!Pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ti(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cw(function(){var c=s,d=Gp(n),f=[];e:{var m=rE.get(t);if(m!==void 0){var y=Jp,A=t;switch(t){case"keypress":if(Lu(n)===0)break e;case"keydown":case"keyup":y=eC;break;case"focusin":A="focus",y=Cd;break;case"focusout":A="blur",y=Cd;break;case"beforeblur":case"afterblur":y=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=py;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=zP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=rC;break;case Zw:case eE:case tE:y=GP;break;case nE:y=sC;break;case"scroll":y=jP;break;case"wheel":y=aC;break;case"copy":case"cut":case"paste":y=WP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=gy}var P=(e&4)!==0,D=!P&&t==="scroll",T=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,I;v!==null;){I=v;var V=I.stateNode;if(I.tag===5&&V!==null&&(I=V,T!==null&&(V=Ma(v,T),V!=null&&P.push(qa(v,V,I)))),D)break;v=v.return}0<P.length&&(m=new y(m,A,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Sf&&(A=n.relatedTarget||n.fromElement)&&(Ti(A)||A[Yn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(A=n.relatedTarget||n.toElement,y=c,A=A?Ti(A):null,A!==null&&(D=Ji(A),A!==D||A.tag!==5&&A.tag!==6)&&(A=null)):(y=null,A=c),y!==A)){if(P=py,V="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=gy,V="onPointerLeave",T="onPointerEnter",v="pointer"),D=y==null?m:Es(y),I=A==null?m:Es(A),m=new P(V,v+"leave",y,n,d),m.target=D,m.relatedTarget=I,V=null,Ti(d)===c&&(P=new P(T,v+"enter",A,n,d),P.target=I,P.relatedTarget=D,V=P),D=V,y&&A)t:{for(P=y,T=A,v=0,I=P;I;I=as(I))v++;for(I=0,V=T;V;V=as(V))I++;for(;0<v-I;)P=as(P),v--;for(;0<I-v;)T=as(T),I--;for(;v--;){if(P===T||T!==null&&P===T.alternate)break t;P=as(P),T=as(T)}P=null}else P=null;y!==null&&Py(f,m,y,P,!1),A!==null&&D!==null&&Py(f,D,A,P,!0)}}e:{if(m=c?Es(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var F=pC;else if(vy(m))if(Hw)F=yC;else{F=gC;var L=mC}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=_C);if(F&&(F=F(t,c))){Ww(f,F,n,d);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&If(m,"number",m.value)}switch(L=c?Es(c):window,t){case"focusin":(vy(L)||L.contentEditable==="true")&&(Is=L,bf=c,Ea=null);break;case"focusout":Ea=bf=Is=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,Ay(f,n,d);break;case"selectionchange":if(wC)break;case"keydown":case"keyup":Ay(f,n,d)}var w;if(Zp)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else vs?Gw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(qw&&n.locale!=="ko"&&(vs||g!=="onCompositionStart"?g==="onCompositionEnd"&&vs&&(w=$w()):(Sr=d,Yp="value"in Sr?Sr.value:Sr.textContent,vs=!0)),L=fc(c,g),0<L.length&&(g=new my(g,t,null,n,d),f.push({event:g,listeners:L}),w?g.data=w:(w=Kw(n),w!==null&&(g.data=w)))),(w=uC?cC(t,n):hC(t,n))&&(c=fc(c,"onBeforeInput"),0<c.length&&(d=new my("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}iE(f,e)})}function qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift(qa(t,s,i)),s=Ma(t,e),s!=null&&r.push(qa(t,s,i))),t=t.return}return r}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Py(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ma(n,s),u!=null&&o.unshift(qa(n,u,a))):i||(u=Ma(n,s),u!=null&&o.push(qa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SC=/\r\n?/g,RC=/\u0000|\uFFFD/g;function Cy(t){return(typeof t=="string"?t:""+t).replace(SC,`
`).replace(RC,"")}function mu(t,e,n){if(e=Cy(e),Cy(t)!==e&&n)throw Error(z(425))}function pc(){}var Vf=null,Of=null;function Lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,PC=typeof clearTimeout=="function"?clearTimeout:void 0,ky=typeof Promise=="function"?Promise:void 0,CC=typeof queueMicrotask=="function"?queueMicrotask:typeof ky<"u"?function(t){return ky.resolve(null).then(t).catch(kC)}:Mf;function kC(t){setTimeout(function(){throw t})}function Ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ja(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),In="__reactFiber$"+fo,Ga="__reactProps$"+fo,Yn="__reactContainer$"+fo,Ff="__reactEvents$"+fo,xC="__reactListeners$"+fo,NC="__reactHandles$"+fo;function Ti(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xy(t);t!==null;){if(n=t[In])return n;t=xy(t)}return e}t=n,n=t.parentNode}return null}function yl(t){return t=t[In]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function sh(t){return t[Ga]||null}var Uf=[],Ts=-1;function Zr(t){return{current:t}}function Pe(t){0>Ts||(t.current=Uf[Ts],Uf[Ts]=null,Ts--)}function Ie(t,e){Ts++,Uf[Ts]=t.current,t.current=e}var Br={},At=Zr(Br),Ft=Zr(!1),Di=Br;function zs(t,e){var n=t.type.contextTypes;if(!n)return Br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function mc(){Pe(Ft),Pe(At)}function Ny(t,e,n){if(At.current!==Br)throw Error(z(168));Ie(At,e),Ie(Ft,n)}function oE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,mP(t)||"Unknown",i));return Me({},n,r)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Br,Di=At.current,Ie(At,t),Ie(Ft,Ft.current),!0}function by(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=oE(t,e,Di),r.__reactInternalMemoizedMergedChildContext=t,Pe(Ft),Pe(At),Ie(At,t)):Pe(Ft),Ie(Ft,n)}var On=null,oh=!1,Md=!1;function aE(t){On===null?On=[t]:On.push(t)}function bC(t){oh=!0,aE(t)}function ei(){if(!Md&&On!==null){Md=!0;var t=0,e=ge;try{var n=On;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,oh=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),bw(Kp,ei),i}finally{ge=e,Md=!1}}return null}var As=[],Ss=0,_c=null,yc=0,Zt=[],en=0,Vi=null,jn=1,Bn="";function mi(t,e){As[Ss++]=yc,As[Ss++]=_c,_c=t,yc=e}function lE(t,e,n){Zt[en++]=jn,Zt[en++]=Bn,Zt[en++]=Vi,Vi=t;var r=jn;t=Bn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-fn(e)+i|n<<i|r,Bn=s+t}else jn=1<<s|n<<i|r,Bn=t}function tm(t){t.return!==null&&(mi(t,1),lE(t,1,0))}function nm(t){for(;t===_c;)_c=As[--Ss],As[Ss]=null,yc=As[--Ss],As[Ss]=null;for(;t===Vi;)Vi=Zt[--en],Zt[en]=null,Bn=Zt[--en],Zt[en]=null,jn=Zt[--en],Zt[en]=null}var Wt=null,Kt=null,Ne=!1,dn=null;function uE(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Kt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vi!==null?{id:jn,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Kt=null,!0):!1;default:return!1}}function jf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(Ne){var e=Kt;if(e){var n=e;if(!Dy(t,e)){if(jf(t))throw Error(z(418));e=br(n.nextSibling);var r=Wt;e&&Dy(t,e)?uE(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Wt=t)}}else{if(jf(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ne=!1,Wt=t}}}function Vy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function gu(t){if(t!==Wt)return!1;if(!Ne)return Vy(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lf(t.type,t.memoizedProps)),e&&(e=Kt)){if(jf(t))throw cE(),Error(z(418));for(;e;)uE(t,e),e=br(e.nextSibling)}if(Vy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Wt?br(t.stateNode.nextSibling):null;return!0}function cE(){for(var t=Kt;t;)t=br(t.nextSibling)}function $s(){Kt=Wt=null,Ne=!1}function rm(t){dn===null?dn=[t]:dn.push(t)}var DC=ir.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oy(t){var e=t._init;return e(t._payload)}function hE(t){function e(T,v){if(t){var I=T.deletions;I===null?(T.deletions=[v],T.flags|=16):I.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=Lr(T,v),T.index=0,T.sibling=null,T}function s(T,v,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<v?(T.flags|=2,v):I):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,v,I,V){return v===null||v.tag!==6?(v=qd(I,T.mode,V),v.return=T,v):(v=i(v,I),v.return=T,v)}function u(T,v,I,V){var F=I.type;return F===ys?d(T,v,I.props.children,V,I.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===yr&&Oy(F)===v.type)?(V=i(v,I.props),V.ref=Jo(T,v,I),V.return=T,V):(V=$u(I.type,I.key,I.props,null,T.mode,V),V.ref=Jo(T,v,I),V.return=T,V)}function c(T,v,I,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Gd(I,T.mode,V),v.return=T,v):(v=i(v,I.children||[]),v.return=T,v)}function d(T,v,I,V,F){return v===null||v.tag!==7?(v=Ci(I,T.mode,V,F),v.return=T,v):(v=i(v,I),v.return=T,v)}function f(T,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=qd(""+v,T.mode,I),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ou:return I=$u(v.type,v.key,v.props,null,T.mode,I),I.ref=Jo(T,null,v),I.return=T,I;case _s:return v=Gd(v,T.mode,I),v.return=T,v;case yr:var V=v._init;return f(T,V(v._payload),I)}if(oa(v)||Ko(v))return v=Ci(v,T.mode,I,null),v.return=T,v;_u(T,v)}return null}function m(T,v,I,V){var F=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:a(T,v,""+I,V);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ou:return I.key===F?u(T,v,I,V):null;case _s:return I.key===F?c(T,v,I,V):null;case yr:return F=I._init,m(T,v,F(I._payload),V)}if(oa(I)||Ko(I))return F!==null?null:d(T,v,I,V,null);_u(T,I)}return null}function y(T,v,I,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return T=T.get(I)||null,a(v,T,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ou:return T=T.get(V.key===null?I:V.key)||null,u(v,T,V,F);case _s:return T=T.get(V.key===null?I:V.key)||null,c(v,T,V,F);case yr:var L=V._init;return y(T,v,I,L(V._payload),F)}if(oa(V)||Ko(V))return T=T.get(I)||null,d(v,T,V,F,null);_u(v,V)}return null}function A(T,v,I,V){for(var F=null,L=null,w=v,g=v=0,E=null;w!==null&&g<I.length;g++){w.index>g?(E=w,w=null):E=w.sibling;var S=m(T,w,I[g],V);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(T,w),v=s(S,v,g),L===null?F=S:L.sibling=S,L=S,w=E}if(g===I.length)return n(T,w),Ne&&mi(T,g),F;if(w===null){for(;g<I.length;g++)w=f(T,I[g],V),w!==null&&(v=s(w,v,g),L===null?F=w:L.sibling=w,L=w);return Ne&&mi(T,g),F}for(w=r(T,w);g<I.length;g++)E=y(w,T,g,I[g],V),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?g:E.key),v=s(E,v,g),L===null?F=E:L.sibling=E,L=E);return t&&w.forEach(function(C){return e(T,C)}),Ne&&mi(T,g),F}function P(T,v,I,V){var F=Ko(I);if(typeof F!="function")throw Error(z(150));if(I=F.call(I),I==null)throw Error(z(151));for(var L=F=null,w=v,g=v=0,E=null,S=I.next();w!==null&&!S.done;g++,S=I.next()){w.index>g?(E=w,w=null):E=w.sibling;var C=m(T,w,S.value,V);if(C===null){w===null&&(w=E);break}t&&w&&C.alternate===null&&e(T,w),v=s(C,v,g),L===null?F=C:L.sibling=C,L=C,w=E}if(S.done)return n(T,w),Ne&&mi(T,g),F;if(w===null){for(;!S.done;g++,S=I.next())S=f(T,S.value,V),S!==null&&(v=s(S,v,g),L===null?F=S:L.sibling=S,L=S);return Ne&&mi(T,g),F}for(w=r(T,w);!S.done;g++,S=I.next())S=y(w,T,g,S.value,V),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?g:S.key),v=s(S,v,g),L===null?F=S:L.sibling=S,L=S);return t&&w.forEach(function(N){return e(T,N)}),Ne&&mi(T,g),F}function D(T,v,I,V){if(typeof I=="object"&&I!==null&&I.type===ys&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ou:e:{for(var F=I.key,L=v;L!==null;){if(L.key===F){if(F=I.type,F===ys){if(L.tag===7){n(T,L.sibling),v=i(L,I.props.children),v.return=T,T=v;break e}}else if(L.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===yr&&Oy(F)===L.type){n(T,L.sibling),v=i(L,I.props),v.ref=Jo(T,L,I),v.return=T,T=v;break e}n(T,L);break}else e(T,L);L=L.sibling}I.type===ys?(v=Ci(I.props.children,T.mode,V,I.key),v.return=T,T=v):(V=$u(I.type,I.key,I.props,null,T.mode,V),V.ref=Jo(T,v,I),V.return=T,T=V)}return o(T);case _s:e:{for(L=I.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(T,v.sibling),v=i(v,I.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Gd(I,T.mode,V),v.return=T,T=v}return o(T);case yr:return L=I._init,D(T,v,L(I._payload),V)}if(oa(I))return A(T,v,I,V);if(Ko(I))return P(T,v,I,V);_u(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,I),v.return=T,T=v):(n(T,v),v=qd(I,T.mode,V),v.return=T,T=v),o(T)):n(T,v)}return D}var qs=hE(!0),dE=hE(!1),vc=Zr(null),Ic=null,Rs=null,im=null;function sm(){im=Rs=Ic=null}function om(t){var e=vc.current;Pe(vc),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Ic=t,im=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(im!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Ic===null)throw Error(z(308));Rs=t,Ic.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Ai=null;function am(t){Ai===null?Ai=[t]:Ai.push(t)}function fE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,am(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function lm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,am(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function Mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}function Ly(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wc(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=t,P=a;switch(m=e,y=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){f=A.call(y,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,m=typeof A=="function"?A.call(y,f,m):A,m==null)break e;f=Me({},f,m);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Li|=o,t.lanes=o,t.memoizedState=f}}function My(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var vl={},Sn=Zr(vl),Ka=Zr(vl),Wa=Zr(vl);function Si(t){if(t===vl)throw Error(z(174));return t}function um(t,e){switch(Ie(Wa,e),Ie(Ka,t),Ie(Sn,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ef(e,t)}Pe(Sn),Ie(Sn,e)}function Gs(){Pe(Sn),Pe(Ka),Pe(Wa)}function mE(t){Si(Wa.current);var e=Si(Sn.current),n=Ef(e,t.type);e!==n&&(Ie(Ka,t),Ie(Sn,n))}function cm(t){Ka.current===t&&(Pe(Sn),Pe(Ka))}var Oe=Zr(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function hm(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var Fu=ir.ReactCurrentDispatcher,Ud=ir.ReactCurrentBatchConfig,Oi=0,Le=null,Je=null,nt=null,Tc=!1,Ta=!1,Ha=0,VC=0;function _t(){throw Error(z(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function fm(t,e,n,r,i,s){if(Oi=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fu.current=t===null||t.memoizedState===null?FC:UC,t=n(r,i),Ta){s=0;do{if(Ta=!1,Ha=0,25<=s)throw Error(z(301));s+=1,nt=Je=null,e.updateQueue=null,Fu.current=jC,t=n(r,i)}while(Ta)}if(Fu.current=Ac,e=Je!==null&&Je.next!==null,Oi=0,nt=Je=Le=null,Tc=!1,e)throw Error(z(300));return t}function pm(){var t=Ha!==0;return Ha=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Le.memoizedState=nt=t:nt=nt.next=t,nt}function sn(){if(Je===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=nt===null?Le.memoizedState:nt.next;if(e!==null)nt=e,Je=t;else{if(t===null)throw Error(z(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},nt===null?Le.memoizedState=nt=t:nt=nt.next=t}return nt}function Qa(t,e){return typeof e=="function"?e(t):e}function jd(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Oi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Le.lanes|=d,Li|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,gn(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bd(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gE(){}function _E(t,e){var n=Le,r=sn(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,mm(IE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Ya(9,vE.bind(null,n,r,i,e),void 0,null),it===null)throw Error(z(349));Oi&30||yE(n,e,i)}return i}function yE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vE(t,e,n,r){e.value=n,e.getSnapshot=r,wE(e)&&EE(t)}function IE(t,e,n){return n(function(){wE(e)&&EE(t)})}function wE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function EE(t){var e=Jn(t,1);e!==null&&pn(e,t,1,-1)}function Fy(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=MC.bind(null,Le,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function TE(){return sn().memoizedState}function Uu(t,e,n,r){var i=yn();Le.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function ah(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&dm(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function Uy(t,e){return Uu(8390656,8,t,e)}function mm(t,e){return ah(2048,8,t,e)}function AE(t,e){return ah(4,2,t,e)}function SE(t,e){return ah(4,4,t,e)}function RE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function PE(t,e,n){return n=n!=null?n.concat([t]):null,ah(4,4,RE.bind(null,e,t),n)}function gm(){}function CE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xE(t,e,n){return Oi&21?(gn(n,e)||(n=Ow(),Le.lanes|=n,Li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function OC(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Ud.transition;Ud.transition={};try{t(!1),e()}finally{ge=n,Ud.transition=r}}function NE(){return sn().memoizedState}function LC(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bE(t))DE(e,n);else if(n=fE(t,e,n,r),n!==null){var i=Ct();pn(n,t,r,i),VE(n,e,r)}}function MC(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bE(t))DE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var u=e.interleaved;u===null?(i.next=i,am(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=fE(t,e,i,r),n!==null&&(i=Ct(),pn(n,t,r,i),VE(n,e,r))}}function bE(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function DE(t,e){Ta=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function VE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}var Ac={readContext:rn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},FC={readContext:rn,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Uy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,RE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LC.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:Fy,useDebugValue:gm,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=Fy(!1),e=t[0];return t=OC.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=yn();if(Ne){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),it===null)throw Error(z(349));Oi&30||yE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Uy(IE.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,vE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=it.identifierPrefix;if(Ne){var n=Bn,r=jn;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ha++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UC={readContext:rn,useCallback:CE,useContext:rn,useEffect:mm,useImperativeHandle:PE,useInsertionEffect:AE,useLayoutEffect:SE,useMemo:kE,useReducer:jd,useRef:TE,useState:function(){return jd(Qa)},useDebugValue:gm,useDeferredValue:function(t){var e=sn();return xE(e,Je.memoizedState,t)},useTransition:function(){var t=jd(Qa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:gE,useSyncExternalStore:_E,useId:NE,unstable_isNewReconciler:!1},jC={readContext:rn,useCallback:CE,useContext:rn,useEffect:mm,useImperativeHandle:PE,useInsertionEffect:AE,useLayoutEffect:SE,useMemo:kE,useReducer:Bd,useRef:TE,useState:function(){return Bd(Qa)},useDebugValue:gm,useDeferredValue:function(t){var e=sn();return Je===null?e.memoizedState=t:xE(e,Je.memoizedState,t)},useTransition:function(){var t=Bd(Qa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:gE,useSyncExternalStore:_E,useId:NE,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $f(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lh={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Or(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(pn(e,t,i,r),Mu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=Or(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,i),e!==null&&(pn(e,t,i,r),Mu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Or(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dr(t,i,r),e!==null&&(pn(e,t,r,n),Mu(e,t,r))}};function jy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,r)||!za(i,s):!0}function OE(t,e,n){var r=!1,i=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=Ut(e)?Di:At.current,r=e.contextTypes,s=(r=r!=null)?zs(t,i):Br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function By(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lh.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},lm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=Ut(e)?Di:At.current,i.context=zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($f(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lh.enqueueReplaceState(i,i.state,null),wc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e){try{var n="",r=e;do n+=pP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BC=typeof WeakMap=="function"?WeakMap:Map;function LE(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rc||(Rc=!0,tp=r),Gf(t,e)},n}function ME(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gf(t,e),typeof r!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tk.bind(null,t,e,n),e.then(t,t))}function $y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var zC=ir.ReactCurrentOwner,Vt=!1;function Pt(t,e,n,r){e.child=t===null?dE(e,null,n,r):qs(e,t.child,n,r)}function Gy(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=fm(t,e,n,r,s,i),n=pm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ne&&n&&tm(e),e.flags|=1,Pt(t,e,r,i),e.child)}function Ky(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,FE(t,e,s,r,i)):(t=$u(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function FE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(za(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Kf(t,e,n,r,i)}function UE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Cs,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Cs,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Cs,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Cs,qt),qt|=r;return Pt(t,e,i,n),e.child}function jE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kf(t,e,n,r,i){var s=Ut(n)?Di:At.current;return s=zs(e,s),Ds(e,i),n=fm(t,e,n,r,s,i),r=pm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Ne&&r&&tm(e),e.flags|=1,Pt(t,e,n,i),e.child)}function Wy(t,e,n,r,i){if(Ut(n)){var s=!0;gc(e)}else s=!1;if(Ds(e,i),e.stateNode===null)ju(t,e),OE(e,n,r),qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Ut(n)?Di:At.current,c=zs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&By(e,o,r,c),vr=!1;var m=e.memoizedState;o.state=m,wc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ft.current||vr?(typeof d=="function"&&($f(e,n,d,r),u=e.memoizedState),(a=vr||jy(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:cn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Ut(n)?Di:At.current,u=zs(e,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&By(e,o,r,u),vr=!1,m=e.memoizedState,o.state=m,wc(e,r,o,i);var A=e.memoizedState;a!==f||m!==A||Ft.current||vr?(typeof y=="function"&&($f(e,n,y,r),A=e.memoizedState),(c=vr||jy(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){jE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&by(e,n,!1),Xn(t,e,s);r=e.stateNode,zC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&by(e,n,!0),e.child}function BE(t){var e=t.stateNode;e.pendingContext?Ny(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ny(t,e.context,!1),um(t,e.containerInfo)}function Hy(t,e,n,r,i){return $s(),rm(i),e.flags|=256,Pt(t,e,n,r),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function zE(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Oe,i&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hh(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qf(n),e.memoizedState=Hf,t):_m(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $C(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hf,r}return s=t.child,t=s.sibling,r=Lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _m(t,e){return e=hh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yu(t,e,n,r){return r!==null&&rm(r),qs(e,t.child,null,n),t=_m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $C(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zd(Error(z(422))),yu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hh({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Qf(o),e.memoizedState=Hf,s);if(!(e.mode&1))return yu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=zd(s,r,void 0),yu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jn(t,i),pn(r,t,i,-1))}return Tm(),r=zd(Error(z(421))),yu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Kt=br(i.nextSibling),Wt=e,Ne=!0,dn=null,t!==null&&(Zt[en++]=jn,Zt[en++]=Bn,Zt[en++]=Vi,jn=t.id,Bn=t.overflow,Vi=e),e=_m(e,r.children),e.flags|=4096,e)}function Qy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zf(t.return,e,n)}function $d(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $E(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qy(t,n,e);else if(t.tag===19)Qy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$d(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$d(e,!0,n,null,s);break;case"together":$d(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ju(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qC(t,e,n){switch(e.tag){case 3:BE(e),$s();break;case 5:mE(e);break;case 1:Ut(e.type)&&gc(e);break;case 4:um(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(vc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?zE(t,e,n):(Ie(Oe,Oe.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $E(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,UE(t,e,n)}return Xn(t,e,n)}var qE,Yf,GE,KE;qE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};GE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Si(Sn.current);var s=null;switch(n){case"input":i=yf(t,i),r=yf(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=wf(t,i),r=wf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pc)}Tf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};KE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GC(t,e,n){var r=e.pendingProps;switch(nm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Ut(e.type)&&mc(),yt(e),null;case 3:return r=e.stateNode,Gs(),Pe(Ft),Pe(At),hm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(ip(dn),dn=null))),Yf(t,e),yt(e),null;case 5:cm(e);var i=Si(Wa.current);if(n=e.type,t!==null&&e.stateNode!=null)GE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return yt(e),null}if(t=Si(Sn.current),gu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<la.length;i++)Ae(la[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":iy(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":oy(r,s),Ae("invalid",r)}Tf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&mu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&mu(r.textContent,a,t),i=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":au(r),sy(r,s,!0);break;case"textarea":au(r),ay(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Iw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[Ga]=r,qE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Af(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<la.length;i++)Ae(la[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":iy(t,r),i=yf(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":oy(t,r),i=wf(t,r),Ae("invalid",t);break;default:i=r}Tf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Tw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ww(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&La(t,u):typeof u=="number"&&La(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&Bp(t,s,u,o))}switch(n){case"input":au(t),sy(t,r,!1);break;case"textarea":au(t),ay(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ks(t,!!r.multiple,s,!1):r.defaultValue!=null&&ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)KE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Si(Wa.current),Si(Sn.current),gu(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:mu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return yt(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Kt!==null&&e.mode&1&&!(e.flags&128))cE(),$s(),e.flags|=98560,s=!1;else if(s=gu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[In]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else dn!==null&&(ip(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Xe===0&&(Xe=3):Tm())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Gs(),Yf(t,e),t===null&&$a(e.stateNode.containerInfo),yt(e),null;case 10:return om(e.type._context),yt(e),null;case 17:return Ut(e.type)&&mc(),yt(e),null;case 19:if(Pe(Oe),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xo(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,Xo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>Ws&&(e.flags|=128,r=!0,Xo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return yt(e),null}else 2*qe()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Oe.current,Ie(Oe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function KC(t,e){switch(nm(e),e.tag){case 1:return Ut(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Pe(Ft),Pe(At),hm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cm(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return Gs(),null;case 10:return om(e.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var vu=!1,wt=!1,WC=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Jf(t,e,n){try{n()}catch(r){je(t,e,r)}}var Yy=!1;function HC(t,e){if(Vf=hc,t=Jw(),em(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Of={focusedElem:t,selectionRange:n},hc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,D=A.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:cn(e.type,P),D);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(V){je(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return A=Yy,Yy=!1,A}function Aa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jf(e,n,s)}i=i.next}while(i!==r)}}function uh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WE(t){var e=t.alternate;e!==null&&(t.alternate=null,WE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Ga],delete e[Ff],delete e[xC],delete e[NC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function HE(t){return t.tag===5||t.tag===3||t.tag===4}function Jy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}var ut=null,hn=!1;function pr(t,e,n){for(n=n.child;n!==null;)QE(t,e,n),n=n.sibling}function QE(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(th,n)}catch{}switch(n.tag){case 5:wt||Ps(n,e);case 6:var r=ut,i=hn;ut=null,pr(t,e,n),ut=r,hn=i,ut!==null&&(hn?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(hn?(t=ut,n=n.stateNode,t.nodeType===8?Ld(t.parentNode,n):t.nodeType===1&&Ld(t,n),ja(t)):Ld(ut,n.stateNode));break;case 4:r=ut,i=hn,ut=n.stateNode.containerInfo,hn=!0,pr(t,e,n),ut=r,hn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jf(n,e,o),i=i.next}while(i!==r)}pr(t,e,n);break;case 1:if(!wt&&(Ps(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,pr(t,e,n),wt=r):pr(t,e,n);break;default:pr(t,e,n)}}function Xy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WC),e.forEach(function(r){var i=rk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,hn=!1;break e;case 3:ut=a.stateNode.containerInfo,hn=!0;break e;case 4:ut=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(ut===null)throw Error(z(160));QE(s,o,i),ut=null,hn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)YE(e,t),e=e.sibling}function YE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),_n(t),r&4){try{Aa(3,t,t.return),uh(3,t)}catch(P){je(t,t.return,P)}try{Aa(5,t,t.return)}catch(P){je(t,t.return,P)}}break;case 1:un(e,t),_n(t),r&512&&n!==null&&Ps(n,n.return);break;case 5:if(un(e,t),_n(t),r&512&&n!==null&&Ps(n,n.return),t.flags&32){var i=t.stateNode;try{La(i,"")}catch(P){je(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&yw(i,s),Af(a,o);var c=Af(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Tw(i,f):d==="dangerouslySetInnerHTML"?ww(i,f):d==="children"?La(i,f):Bp(i,d,f,c)}switch(a){case"input":vf(i,s);break;case"textarea":vw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?ks(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?ks(i,!!s.multiple,s.defaultValue,!0):ks(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ga]=s}catch(P){je(t,t.return,P)}}break;case 6:if(un(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){je(t,t.return,P)}}break;case 3:if(un(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(P){je(t,t.return,P)}break;case 4:un(e,t),_n(t);break;case 13:un(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Im=qe())),r&4&&Xy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(c=wt)||d,un(e,t),wt=c):un(e,t),_n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(m=Q,y=m.child,m.tag){case 0:case 11:case 14:case 15:Aa(4,m,m.return);break;case 1:Ps(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){je(r,n,P)}}break;case 5:Ps(m,m.return);break;case 22:if(m.memoizedState!==null){ev(f);continue}}y!==null?(y.return=m,Q=y):ev(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ew("display",o))}catch(P){je(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){je(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:un(e,t),_n(t),r&4&&Xy(t);break;case 21:break;default:un(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(HE(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(La(i,""),r.flags&=-33);var s=Jy(t);ep(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jy(t);Zf(t,a,o);break;default:throw Error(z(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QC(t,e,n){Q=t,JE(t)}function JE(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||wt;a=vu;var c=wt;if(vu=o,(wt=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?tv(i):u!==null?(u.return=o,Q=u):tv(i);for(;s!==null;)Q=s,JE(s),s=s.sibling;Q=i,vu=a,wt=c}Zy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Zy(t)}}function Zy(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||uh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&My(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}My(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}wt||e.flags&512&&Xf(e)}catch(m){je(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function ev(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function tv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uh(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){je(e,i,u)}}var s=e.return;try{Xf(e)}catch(u){je(e,s,u)}break;case 5:var o=e.return;try{Xf(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var YC=Math.ceil,Sc=ir.ReactCurrentDispatcher,ym=ir.ReactCurrentOwner,nn=ir.ReactCurrentBatchConfig,fe=0,it=null,Qe=null,dt=0,qt=0,Cs=Zr(0),Xe=0,Ja=null,Li=0,ch=0,vm=0,Sa=null,Dt=null,Im=0,Ws=1/0,Vn=null,Rc=!1,tp=null,Vr=null,Iu=!1,Rr=null,Pc=0,Ra=0,np=null,Bu=-1,zu=0;function Ct(){return fe&6?qe():Bu!==-1?Bu:Bu=qe()}function Or(t){return t.mode&1?fe&2&&dt!==0?dt&-dt:DC.transition!==null?(zu===0&&(zu=Ow()),zu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:zw(t.type)),t):1}function pn(t,e,n,r){if(50<Ra)throw Ra=0,np=null,Error(z(185));gl(t,n,r),(!(fe&2)||t!==it)&&(t===it&&(!(fe&2)&&(ch|=n),Xe===4&&wr(t,dt)),jt(t,r),n===1&&fe===0&&!(e.mode&1)&&(Ws=qe()+500,oh&&ei()))}function jt(t,e){var n=t.callbackNode;DP(t,e);var r=cc(t,t===it?dt:0);if(r===0)n!==null&&cy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&cy(n),e===1)t.tag===0?bC(nv.bind(null,t)):aE(nv.bind(null,t)),CC(function(){!(fe&6)&&ei()}),n=null;else{switch(Lw(r)){case 1:n=Kp;break;case 4:n=Dw;break;case 16:n=uc;break;case 536870912:n=Vw;break;default:n=uc}n=sT(n,XE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function XE(t,e){if(Bu=-1,zu=0,fe&6)throw Error(z(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var r=cc(t,t===it?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cc(t,r);else{e=r;var i=fe;fe|=2;var s=eT();(it!==t||dt!==e)&&(Vn=null,Ws=qe()+500,Pi(t,e));do try{ZC();break}catch(a){ZE(t,a)}while(!0);sm(),Sc.current=s,fe=i,Qe!==null?e=0:(it=null,dt=0,e=Xe)}if(e!==0){if(e===2&&(i=kf(t),i!==0&&(r=i,e=rp(t,i))),e===1)throw n=Ja,Pi(t,0),wr(t,r),jt(t,qe()),n;if(e===6)wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!JC(i)&&(e=Cc(t,r),e===2&&(s=kf(t),s!==0&&(r=s,e=rp(t,s))),e===1))throw n=Ja,Pi(t,0),wr(t,r),jt(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:gi(t,Dt,Vn);break;case 3:if(wr(t,r),(r&130023424)===r&&(e=Im+500-qe(),10<e)){if(cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mf(gi.bind(null,t,Dt,Vn),e);break}gi(t,Dt,Vn);break;case 4:if(wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YC(r/1960))-r,10<r){t.timeoutHandle=Mf(gi.bind(null,t,Dt,Vn),r);break}gi(t,Dt,Vn);break;case 5:gi(t,Dt,Vn);break;default:throw Error(z(329))}}}return jt(t,qe()),t.callbackNode===n?XE.bind(null,t):null}function rp(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(Pi(t,e).flags|=256),t=Cc(t,e),t!==2&&(e=Dt,Dt=n,e!==null&&ip(e)),t}function ip(t){Dt===null?Dt=t:Dt.push.apply(Dt,t)}function JC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wr(t,e){for(e&=~vm,e&=~ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function nv(t){if(fe&6)throw Error(z(327));Vs();var e=cc(t,0);if(!(e&1))return jt(t,qe()),null;var n=Cc(t,e);if(t.tag!==0&&n===2){var r=kf(t);r!==0&&(e=r,n=rp(t,r))}if(n===1)throw n=Ja,Pi(t,0),wr(t,e),jt(t,qe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gi(t,Dt,Vn),jt(t,qe()),null}function wm(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Ws=qe()+500,oh&&ei())}}function Mi(t){Rr!==null&&Rr.tag===0&&!(fe&6)&&Vs();var e=fe;fe|=1;var n=nn.transition,r=ge;try{if(nn.transition=null,ge=1,t)return t()}finally{ge=r,nn.transition=n,fe=e,!(fe&6)&&ei()}}function Em(){qt=Cs.current,Pe(Cs)}function Pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PC(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(nm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mc();break;case 3:Gs(),Pe(Ft),Pe(At),hm();break;case 5:cm(r);break;case 4:Gs();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:om(r.type._context);break;case 22:case 23:Em()}n=n.return}if(it=t,Qe=t=Lr(t.current,null),dt=qt=e,Xe=0,Ja=null,vm=ch=Li=0,Dt=Sa=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function ZE(t,e){do{var n=Qe;try{if(sm(),Fu.current=Ac,Tc){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tc=!1}if(Oi=0,nt=Je=Le=null,Ta=!1,Ha=0,ym.current=null,n===null||n.return===null){Xe=1,Ja=e,Qe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=dt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=$y(o);if(y!==null){y.flags&=-257,qy(y,o,a,s,e),y.mode&1&&zy(s,c,e),e=y,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){zy(s,c,e),Tm();break e}u=Error(z(426))}}else if(Ne&&a.mode&1){var D=$y(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),qy(D,o,a,s,e),rm(Ks(u,a));break e}}s=u=Ks(u,a),Xe!==4&&(Xe=2),Sa===null?Sa=[s]:Sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=LE(s,u,e);Ly(s,T);break e;case 1:a=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Vr===null||!Vr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=ME(s,a,e);Ly(s,V);break e}}s=s.return}while(s!==null)}nT(n)}catch(F){e=F,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function eT(){var t=Sc.current;return Sc.current=Ac,t===null?Ac:t}function Tm(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),it===null||!(Li&268435455)&&!(ch&268435455)||wr(it,dt)}function Cc(t,e){var n=fe;fe|=2;var r=eT();(it!==t||dt!==e)&&(Vn=null,Pi(t,e));do try{XC();break}catch(i){ZE(t,i)}while(!0);if(sm(),fe=n,Sc.current=r,Qe!==null)throw Error(z(261));return it=null,dt=0,Xe}function XC(){for(;Qe!==null;)tT(Qe)}function ZC(){for(;Qe!==null&&!AP();)tT(Qe)}function tT(t){var e=iT(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?nT(t):Qe=e,ym.current=null}function nT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KC(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Qe=null;return}}else if(n=GC(n,e,qt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Xe===0&&(Xe=5)}function gi(t,e,n){var r=ge,i=nn.transition;try{nn.transition=null,ge=1,ek(t,e,n,r)}finally{nn.transition=i,ge=r}return null}function ek(t,e,n,r){do Vs();while(Rr!==null);if(fe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VP(t,s),t===it&&(Qe=it=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Iu||(Iu=!0,sT(uc,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=ge;ge=1;var a=fe;fe|=4,ym.current=null,HC(t,n),YE(n,t),IC(Of),hc=!!Vf,Of=Vf=null,t.current=n,QC(n),SP(),fe=a,ge=o,nn.transition=s}else t.current=n;if(Iu&&(Iu=!1,Rr=t,Pc=i),s=t.pendingLanes,s===0&&(Vr=null),CP(n.stateNode),jt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,t=tp,tp=null,t;return Pc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===np?Ra++:(Ra=0,np=t):Ra=0,ei(),null}function Vs(){if(Rr!==null){var t=Lw(Pc),e=nn.transition,n=ge;try{if(nn.transition=null,ge=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,Pc=0,fe&6)throw Error(z(331));var i=fe;for(fe|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Aa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var m=d.sibling,y=d.return;if(WE(d),d===c){Q=null;break}if(m!==null){m.return=y,Q=m;break}Q=y}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Q=T;break e}Q=s.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Q=I;else e:for(o=v;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uh(9,a)}}catch(F){je(a,a.return,F)}if(a===o){Q=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,Q=V;break e}Q=a.return}}if(fe=i,ei(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(th,t)}catch{}r=!0}return r}finally{ge=n,nn.transition=e}}return!1}function rv(t,e,n){e=Ks(n,e),e=LE(t,e,1),t=Dr(t,e,1),e=Ct(),t!==null&&(gl(t,1,e),jt(t,e))}function je(t,e,n){if(t.tag===3)rv(t,t,n);else for(;e!==null;){if(e.tag===3){rv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vr===null||!Vr.has(r))){t=Ks(n,t),t=ME(e,t,1),e=Dr(e,t,1),t=Ct(),e!==null&&(gl(e,1,t),jt(e,t));break}}e=e.return}}function tk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(dt&n)===n&&(Xe===4||Xe===3&&(dt&130023424)===dt&&500>qe()-Im?Pi(t,0):vm|=n),jt(t,e)}function rT(t,e){e===0&&(t.mode&1?(e=cu,cu<<=1,!(cu&130023424)&&(cu=4194304)):e=1);var n=Ct();t=Jn(t,e),t!==null&&(gl(t,e,n),jt(t,n))}function nk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rT(t,n)}function rk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),rT(t,n)}var iT;iT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,qC(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Ne&&e.flags&1048576&&lE(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ju(t,e),t=e.pendingProps;var i=zs(e,At.current);Ds(e,n),i=fm(null,e,r,t,i,n);var s=pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,gc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lm(e),i.updater=lh,e.stateNode=i,i._reactInternals=e,qf(e,r,t,n),e=Wf(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&tm(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ju(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sk(r),t=cn(r,t),i){case 0:e=Kf(null,e,r,t,n);break e;case 1:e=Wy(null,e,r,t,n);break e;case 11:e=Gy(null,e,r,t,n);break e;case 14:e=Ky(null,e,r,cn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Kf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Wy(t,e,r,i,n);case 3:e:{if(BE(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pE(t,e),wc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ks(Error(z(423)),e),e=Hy(t,e,r,n,i);break e}else if(r!==i){i=Ks(Error(z(424)),e),e=Hy(t,e,r,n,i);break e}else for(Kt=br(e.stateNode.containerInfo.firstChild),Wt=e,Ne=!0,dn=null,n=dE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===i){e=Xn(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return mE(e),t===null&&Bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lf(r,i)?o=null:s!==null&&Lf(r,s)&&(e.flags|=32),jE(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return zE(t,e,n);case 4:return um(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qs(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Gy(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(vc,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Ft.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Kn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=rn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),Ky(t,e,r,i,n);case 15:return FE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),ju(t,e),e.tag=1,Ut(r)?(t=!0,gc(e)):t=!1,Ds(e,n),OE(e,r,i),qf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return $E(t,e,n);case 22:return UE(t,e,n)}throw Error(z(156,e.tag))};function sT(t,e){return bw(t,e)}function ik(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new ik(t,e,n,r)}function Am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sk(t){if(typeof t=="function")return Am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$p)return 11;if(t===qp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $u(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Ci(n.children,i,s,e);case zp:o=8,i|=8;break;case pf:return t=tn(12,n,e,i|2),t.elementType=pf,t.lanes=s,t;case mf:return t=tn(13,n,e,i),t.elementType=mf,t.lanes=s,t;case gf:return t=tn(19,n,e,i),t.elementType=gf,t.lanes=s,t;case mw:return hh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fw:o=10;break e;case pw:o=9;break e;case $p:o=11;break e;case qp:o=14;break e;case yr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function hh(t,e,n,r){return t=tn(22,t,r,e),t.elementType=mw,t.lanes=n,t.stateNode={isHidden:!1},t}function qd(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ok(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sm(t,e,n,r,i,s,o,a,u){return t=new ok(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lm(s),t}function ak(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function oT(t){if(!t)return Br;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Ut(n))return oE(t,n,e)}return e}function aT(t,e,n,r,i,s,o,a,u){return t=Sm(n,r,!0,t,i,s,o,a,u),t.context=oT(null),n=t.current,r=Ct(),i=Or(n),s=Kn(r,i),s.callback=e??null,Dr(n,s,i),t.current.lanes=i,gl(t,i,r),jt(t,r),t}function dh(t,e,n,r){var i=e.current,s=Ct(),o=Or(i);return n=oT(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dr(i,e,o),t!==null&&(pn(t,i,o,s),Mu(t,i,o)),o}function kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rm(t,e){iv(t,e),(t=t.alternate)&&iv(t,e)}function lk(){return null}var lT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pm(t){this._internalRoot=t}fh.prototype.render=Pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));dh(t,e,null,null)};fh.prototype.unmount=Pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mi(function(){dh(null,t,null,null)}),e[Yn]=null}};function fh(t){this._internalRoot=t}fh.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&Bw(t)}};function Cm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sv(){}function uk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=kc(o);s.call(c)}}var o=aT(e,r,t,0,null,!1,!1,"",sv);return t._reactRootContainer=o,t[Yn]=o.current,$a(t.nodeType===8?t.parentNode:t),Mi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=kc(u);a.call(c)}}var u=Sm(t,0,!1,null,null,!1,!1,"",sv);return t._reactRootContainer=u,t[Yn]=u.current,$a(t.nodeType===8?t.parentNode:t),Mi(function(){dh(e,u,n,r)}),u}function mh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=kc(o);a.call(u)}}dh(e,o,t,i)}else o=uk(n,e,t,i,r);return kc(o)}Mw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Wp(e,n|1),jt(e,qe()),!(fe&6)&&(Ws=qe()+500,ei()))}break;case 13:Mi(function(){var r=Jn(t,1);if(r!==null){var i=Ct();pn(r,t,1,i)}}),Rm(t,1)}};Hp=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=Ct();pn(e,t,134217728,n)}Rm(t,134217728)}};Fw=function(t){if(t.tag===13){var e=Or(t),n=Jn(t,e);if(n!==null){var r=Ct();pn(n,t,e,r)}Rm(t,e)}};Uw=function(){return ge};jw=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Rf=function(t,e,n){switch(e){case"input":if(vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sh(r);if(!i)throw Error(z(90));_w(r),vf(r,i)}}}break;case"textarea":vw(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};Rw=wm;Pw=Mi;var ck={usingClientEntryPoint:!1,Events:[yl,Es,sh,Aw,Sw,wm]},Zo={findFiberByHostInstance:Ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hk={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xw(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||lk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wu.isDisabled&&wu.supportsFiber)try{th=wu.inject(hk),An=wu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ck;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cm(e))throw Error(z(200));return ak(t,e,null,n)};Jt.createRoot=function(t,e){if(!Cm(t))throw Error(z(299));var n=!1,r="",i=lT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sm(t,1,!1,null,null,n,!1,r,i),t[Yn]=e.current,$a(t.nodeType===8?t.parentNode:t),new Pm(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=xw(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return Mi(t)};Jt.hydrate=function(t,e,n){if(!ph(e))throw Error(z(200));return mh(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!Cm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=lT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aT(e,null,t,1,n??null,i,!1,s,o),t[Yn]=e.current,$a(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fh(e)};Jt.render=function(t,e,n){if(!ph(e))throw Error(z(200));return mh(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!ph(t))throw Error(z(40));return t._reactRootContainer?(Mi(function(){mh(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};Jt.unstable_batchedUpdates=wm;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ph(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return mh(t,e,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function uT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uT)}catch(t){console.error(t)}}uT(),uw.exports=Jt;var dk=uw.exports,ov=dk;df.createRoot=ov.createRoot,df.hydrateRoot=ov.hydrateRoot;function fk(t=new Date){const e=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),n=r=>e.find(i=>i.type===r).value;return`${n("year")}-${n("month")}-${n("day")}`}function pk(t){const[e,n,r]=t.split("-").map(Number),i=new Date(Date.UTC(e,n-1,r));return i.setUTCDate(i.getUTCDate()+1),`${i.getUTCFullYear()}-${String(i.getUTCMonth()+1).padStart(2,"0")}-${String(i.getUTCDate()).padStart(2,"0")}`}function mk(t){const[e,n,r]=t.split("-").map(Number),i=new Date(Date.UTC(e,n-1,r));return i.setUTCDate(i.getUTCDate()-1),`${i.getUTCFullYear()}-${String(i.getUTCMonth()+1).padStart(2,"0")}-${String(i.getUTCDate()).padStart(2,"0")}`}const xc=["A","B"],ki={A:"一館",B:"二館"},cT=[1,2,3,5],hT={A:{1:2,2:2,3:2,5:2},B:{1:12,2:12,3:12,5:12}};function gk(t){var n,r;const e=((r=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:r.call(n))??Math.random().toString(16).slice(2);return`${t}-${e}`}function _k(t,e){return t.filter(n=>n.building===e).length}function yk(t){return/^\d{3,4}$/.test(t)}function av(t,e,n,r){return t.some(i=>i.building===e&&i.no===n&&i.id!==r)}var lv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[d],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Ik;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ik extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wk=function(t){const e=dT(t);return fT.encodeByteArray(e,!0)},Nc=function(t){return wk(t).replace(/\./g,"")},pT=function(t){try{return fT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=()=>Ek().__FIREBASE_DEFAULTS__,Ak=()=>{if(typeof process>"u"||typeof lv>"u")return;const t=lv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pT(t[1]);return e&&JSON.parse(e)},gh=()=>{try{return Tk()||Ak()||Sk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mT=t=>{var e,n;return(n=(e=gh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rk=t=>{const e=mT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gT=()=>{var t;return(t=gh())===null||t===void 0?void 0:t.config},_T=t=>{var e;return(e=gh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nc(JSON.stringify(n)),Nc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function xk(){var t;const e=(t=gh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vk(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yT(){return!xk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vT(){try{return typeof indexedDB=="object"}catch{return!1}}function Ok(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lk,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Il.prototype.create)}}class Il{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Mk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xn(i,a,r)}}function Mk(t,e){return t.replace(Fk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Fk=/\{\$([^}]+)}/g;function Uk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uv(s)&&uv(o)){if(!zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ua(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ca(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jk(t,e){const n=new Bk(t,e);return n.subscribe.bind(n)}class Bk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kd),i.error===void 0&&(i.error=Kd),i.complete===void 0&&(i.complete=Kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return t&&t._delegate?t._delegate:t}class Fi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gk(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qk(t){return t===_i?void 0:t}function Gk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $k(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Wk={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Hk=ue.INFO,Qk={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Yk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Qk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class km{constructor(e){this.name=e,this._logLevel=Hk,this._logHandler=Yk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Jk=(t,e)=>e.some(n=>t instanceof n);let cv,hv;function Xk(){return cv||(cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zk(){return hv||(hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const IT=new WeakMap,sp=new WeakMap,wT=new WeakMap,Wd=new WeakMap,xm=new WeakMap;function ex(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&IT.set(n,t)}).catch(()=>{}),xm.set(e,t),e}function tx(t){if(sp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sp.set(t,e)}let op={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nx(t){op=t(op)}function rx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hd(this),e,...n);return wT.set(r,e.sort?e.sort():[e]),Mr(r)}:Zk().includes(t)?function(...e){return t.apply(Hd(this),e),Mr(IT.get(this))}:function(...e){return Mr(t.apply(Hd(this),e))}}function ix(t){return typeof t=="function"?rx(t):(t instanceof IDBTransaction&&tx(t),Jk(t,Xk())?new Proxy(t,op):t)}function Mr(t){if(t instanceof IDBRequest)return ex(t);if(Wd.has(t))return Wd.get(t);const e=ix(t);return e!==t&&(Wd.set(t,e),xm.set(e,t)),e}const Hd=t=>xm.get(t);function sx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Mr(o.result),u.oldVersion,u.newVersion,Mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ox=["get","getKey","getAll","getAllKeys","count"],ax=["put","add","delete","clear"],Qd=new Map;function dv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ax.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ox.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Qd.set(e,s),s}nx(t=>({...t,get:(e,n,r)=>dv(e,n)||t.get(e,n,r),has:(e,n)=>!!dv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ux(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ux(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ap="@firebase/app",fv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new km("@firebase/app"),cx="@firebase/app-compat",hx="@firebase/analytics-compat",dx="@firebase/analytics",fx="@firebase/app-check-compat",px="@firebase/app-check",mx="@firebase/auth",gx="@firebase/auth-compat",_x="@firebase/database",yx="@firebase/data-connect",vx="@firebase/database-compat",Ix="@firebase/functions",wx="@firebase/functions-compat",Ex="@firebase/installations",Tx="@firebase/installations-compat",Ax="@firebase/messaging",Sx="@firebase/messaging-compat",Rx="@firebase/performance",Px="@firebase/performance-compat",Cx="@firebase/remote-config",kx="@firebase/remote-config-compat",xx="@firebase/storage",Nx="@firebase/storage-compat",bx="@firebase/firestore",Dx="@firebase/vertexai-preview",Vx="@firebase/firestore-compat",Ox="firebase",Lx="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="[DEFAULT]",Mx={[ap]:"fire-core",[cx]:"fire-core-compat",[dx]:"fire-analytics",[hx]:"fire-analytics-compat",[px]:"fire-app-check",[fx]:"fire-app-check-compat",[mx]:"fire-auth",[gx]:"fire-auth-compat",[_x]:"fire-rtdb",[yx]:"fire-data-connect",[vx]:"fire-rtdb-compat",[Ix]:"fire-fn",[wx]:"fire-fn-compat",[Ex]:"fire-iid",[Tx]:"fire-iid-compat",[Ax]:"fire-fcm",[Sx]:"fire-fcm-compat",[Rx]:"fire-perf",[Px]:"fire-perf-compat",[Cx]:"fire-rc",[kx]:"fire-rc-compat",[xx]:"fire-gcs",[Nx]:"fire-gcs-compat",[bx]:"fire-fst",[Vx]:"fire-fst-compat",[Dx]:"fire-vertex","fire-js":"fire-js",[Ox]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Map,bc=new Map,Dc=new Map;function lp(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ji(t){const e=t.name;if(Dc.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of Ui.values())lp(n,t);for(const n of bc.values())lp(n,t);return!0}function mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ET(t,e,n=Xa){mo(t,e).clearInstance(n)}function Be(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new Il("app","Firebase",Fx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=Lx;function Nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=gT()),!n)throw Fr.create("no-options");const s=Ui.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new Kk(i);for(const u of Dc.values())o.addComponent(u);const a=new Ux(n,r,o);return Ui.set(i,a),a}function bm(t=Xa){const e=Ui.get(t);if(!e&&t===Xa&&gT())return Nm();if(!e)throw Fr.create("no-app",{appName:t});return e}async function jx(t){let e=!1;const n=t.name;Ui.has(n)?(e=!0,Ui.delete(n)):bc.has(n)&&t.decRefCount()<=0&&(bc.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Wn(t,e,n){var r;let i=(r=Mx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(a.join(" "));return}ji(new Fi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="firebase-heartbeat-database",zx=1,Za="firebase-heartbeat-store";let Yd=null;function TT(){return Yd||(Yd=sx(Bx,zx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Za)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Yd}async function $x(t){try{const n=(await TT()).transaction(Za),r=await n.objectStore(Za).get(AT(t));return await n.done,r}catch(e){if(e instanceof xn)Zn.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function pv(t,e){try{const r=(await TT()).transaction(Za,"readwrite");await r.objectStore(Za).put(e,AT(t)),await r.done}catch(n){if(n instanceof xn)Zn.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function AT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=1024,Gx=30*24*60*60*1e3;class Kx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Gx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mv(),{heartbeatsToSend:r,unsentEntries:i}=Wx(this._heartbeatsCache.heartbeats),s=Nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Zn.warn(n),""}}}function mv(){return new Date().toISOString().substring(0,10)}function Wx(t,e=qx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vT()?Ok().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $x(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gv(t){return Nc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t){ji(new Fi("platform-logger",e=>new lx(e),"PRIVATE")),ji(new Fi("heartbeat",e=>new Kx(e),"PRIVATE")),Wn(ap,fv,t),Wn(ap,fv,"esm2017"),Wn("fire-js","")}Qx("");var _v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xi,ST;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function E(){}E.prototype=g.prototype,w.D=g.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(S,C,N){for(var R=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)R[bt-2]=arguments[bt];return g.prototype[C].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,E){E||(E=0);var S=Array(16);if(typeof g=="string")for(var C=0;16>C;++C)S[C]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(C=0;16>C;++C)S[C]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=w.g[0],E=w.g[1],C=w.g[2];var N=w.g[3],R=g+(N^E&(C^N))+S[0]+3614090360&4294967295;g=E+(R<<7&4294967295|R>>>25),R=N+(C^g&(E^C))+S[1]+3905402710&4294967295,N=g+(R<<12&4294967295|R>>>20),R=C+(E^N&(g^E))+S[2]+606105819&4294967295,C=N+(R<<17&4294967295|R>>>15),R=E+(g^C&(N^g))+S[3]+3250441966&4294967295,E=C+(R<<22&4294967295|R>>>10),R=g+(N^E&(C^N))+S[4]+4118548399&4294967295,g=E+(R<<7&4294967295|R>>>25),R=N+(C^g&(E^C))+S[5]+1200080426&4294967295,N=g+(R<<12&4294967295|R>>>20),R=C+(E^N&(g^E))+S[6]+2821735955&4294967295,C=N+(R<<17&4294967295|R>>>15),R=E+(g^C&(N^g))+S[7]+4249261313&4294967295,E=C+(R<<22&4294967295|R>>>10),R=g+(N^E&(C^N))+S[8]+1770035416&4294967295,g=E+(R<<7&4294967295|R>>>25),R=N+(C^g&(E^C))+S[9]+2336552879&4294967295,N=g+(R<<12&4294967295|R>>>20),R=C+(E^N&(g^E))+S[10]+4294925233&4294967295,C=N+(R<<17&4294967295|R>>>15),R=E+(g^C&(N^g))+S[11]+2304563134&4294967295,E=C+(R<<22&4294967295|R>>>10),R=g+(N^E&(C^N))+S[12]+1804603682&4294967295,g=E+(R<<7&4294967295|R>>>25),R=N+(C^g&(E^C))+S[13]+4254626195&4294967295,N=g+(R<<12&4294967295|R>>>20),R=C+(E^N&(g^E))+S[14]+2792965006&4294967295,C=N+(R<<17&4294967295|R>>>15),R=E+(g^C&(N^g))+S[15]+1236535329&4294967295,E=C+(R<<22&4294967295|R>>>10),R=g+(C^N&(E^C))+S[1]+4129170786&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^C&(g^E))+S[6]+3225465664&4294967295,N=g+(R<<9&4294967295|R>>>23),R=C+(g^E&(N^g))+S[11]+643717713&4294967295,C=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(C^N))+S[0]+3921069994&4294967295,E=C+(R<<20&4294967295|R>>>12),R=g+(C^N&(E^C))+S[5]+3593408605&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^C&(g^E))+S[10]+38016083&4294967295,N=g+(R<<9&4294967295|R>>>23),R=C+(g^E&(N^g))+S[15]+3634488961&4294967295,C=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(C^N))+S[4]+3889429448&4294967295,E=C+(R<<20&4294967295|R>>>12),R=g+(C^N&(E^C))+S[9]+568446438&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^C&(g^E))+S[14]+3275163606&4294967295,N=g+(R<<9&4294967295|R>>>23),R=C+(g^E&(N^g))+S[3]+4107603335&4294967295,C=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(C^N))+S[8]+1163531501&4294967295,E=C+(R<<20&4294967295|R>>>12),R=g+(C^N&(E^C))+S[13]+2850285829&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^C&(g^E))+S[2]+4243563512&4294967295,N=g+(R<<9&4294967295|R>>>23),R=C+(g^E&(N^g))+S[7]+1735328473&4294967295,C=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(C^N))+S[12]+2368359562&4294967295,E=C+(R<<20&4294967295|R>>>12),R=g+(E^C^N)+S[5]+4294588738&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^C)+S[8]+2272392833&4294967295,N=g+(R<<11&4294967295|R>>>21),R=C+(N^g^E)+S[11]+1839030562&4294967295,C=N+(R<<16&4294967295|R>>>16),R=E+(C^N^g)+S[14]+4259657740&4294967295,E=C+(R<<23&4294967295|R>>>9),R=g+(E^C^N)+S[1]+2763975236&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^C)+S[4]+1272893353&4294967295,N=g+(R<<11&4294967295|R>>>21),R=C+(N^g^E)+S[7]+4139469664&4294967295,C=N+(R<<16&4294967295|R>>>16),R=E+(C^N^g)+S[10]+3200236656&4294967295,E=C+(R<<23&4294967295|R>>>9),R=g+(E^C^N)+S[13]+681279174&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^C)+S[0]+3936430074&4294967295,N=g+(R<<11&4294967295|R>>>21),R=C+(N^g^E)+S[3]+3572445317&4294967295,C=N+(R<<16&4294967295|R>>>16),R=E+(C^N^g)+S[6]+76029189&4294967295,E=C+(R<<23&4294967295|R>>>9),R=g+(E^C^N)+S[9]+3654602809&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^C)+S[12]+3873151461&4294967295,N=g+(R<<11&4294967295|R>>>21),R=C+(N^g^E)+S[15]+530742520&4294967295,C=N+(R<<16&4294967295|R>>>16),R=E+(C^N^g)+S[2]+3299628645&4294967295,E=C+(R<<23&4294967295|R>>>9),R=g+(C^(E|~N))+S[0]+4096336452&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~C))+S[7]+1126891415&4294967295,N=g+(R<<10&4294967295|R>>>22),R=C+(g^(N|~E))+S[14]+2878612391&4294967295,C=N+(R<<15&4294967295|R>>>17),R=E+(N^(C|~g))+S[5]+4237533241&4294967295,E=C+(R<<21&4294967295|R>>>11),R=g+(C^(E|~N))+S[12]+1700485571&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~C))+S[3]+2399980690&4294967295,N=g+(R<<10&4294967295|R>>>22),R=C+(g^(N|~E))+S[10]+4293915773&4294967295,C=N+(R<<15&4294967295|R>>>17),R=E+(N^(C|~g))+S[1]+2240044497&4294967295,E=C+(R<<21&4294967295|R>>>11),R=g+(C^(E|~N))+S[8]+1873313359&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~C))+S[15]+4264355552&4294967295,N=g+(R<<10&4294967295|R>>>22),R=C+(g^(N|~E))+S[6]+2734768916&4294967295,C=N+(R<<15&4294967295|R>>>17),R=E+(N^(C|~g))+S[13]+1309151649&4294967295,E=C+(R<<21&4294967295|R>>>11),R=g+(C^(E|~N))+S[4]+4149444226&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~C))+S[11]+3174756917&4294967295,N=g+(R<<10&4294967295|R>>>22),R=C+(g^(N|~E))+S[2]+718787259&4294967295,C=N+(R<<15&4294967295|R>>>17),R=E+(N^(C|~g))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var E=g-this.blockSize,S=this.B,C=this.h,N=0;N<g;){if(C==0)for(;N<=E;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<g;)if(S[C++]=w.charCodeAt(N++),C==this.blockSize){i(this,S),C=0;break}}else for(;N<g;)if(S[C++]=w[N++],C==this.blockSize){i(this,S),C=0;break}}this.h=C,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var E=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=E&255,E/=256;for(this.u(w),w=Array(16),g=E=0;4>g;++g)for(var S=0;32>S;S+=8)w[E++]=this.g[g]>>>S&255;return w};function s(w,g){var E=a;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=g(w)}function o(w,g){this.h=g;for(var E=[],S=!0,C=w.length-1;0<=C;C--){var N=w[C]|0;S&&N==g||(E[C]=N,S=!1)}this.g=E}var a={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return D(c(-w));for(var g=[],E=1,S=0;w>=E;S++)g[S]=w/E|0,E*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return D(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(g,8)),S=f,C=0;C<w.length;C+=8){var N=Math.min(8,w.length-C),R=parseInt(w.substring(C,C+N),g);8>N?(N=c(Math.pow(g,N)),S=S.j(N).add(c(R))):(S=S.j(E),S=S.add(c(R)))}return S}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var w=0,g=1,E=0;E<this.g.length;E++){var S=this.i(E);w+=(0<=S?S:4294967296+S)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(P(this))return"-"+D(this).toString(w);for(var g=c(Math.pow(w,6)),E=this,S="";;){var C=V(E,g).g;E=T(E,C.j(g));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=C,A(E))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=T(this,w),P(w)?-1:A(w)?0:1};function D(w){for(var g=w.g.length,E=[],S=0;S<g;S++)E[S]=~w.g[S];return new o(E,~w.h).add(m)}t.abs=function(){return P(this)?D(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],S=0,C=0;C<=g;C++){var N=S+(this.i(C)&65535)+(w.i(C)&65535),R=(N>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);S=R>>>16,N&=65535,R&=65535,E[C]=R<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function T(w,g){return w.add(D(g))}t.j=function(w){if(A(this)||A(w))return f;if(P(this))return P(w)?D(this).j(D(w)):D(D(this).j(w));if(P(w))return D(this.j(D(w)));if(0>this.l(y)&&0>w.l(y))return c(this.m()*w.m());for(var g=this.g.length+w.g.length,E=[],S=0;S<2*g;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<w.g.length;C++){var N=this.i(S)>>>16,R=this.i(S)&65535,bt=w.i(C)>>>16,Nn=w.i(C)&65535;E[2*S+2*C]+=R*Nn,v(E,2*S+2*C),E[2*S+2*C+1]+=N*Nn,v(E,2*S+2*C+1),E[2*S+2*C+1]+=R*bt,v(E,2*S+2*C+1),E[2*S+2*C+2]+=N*bt,v(E,2*S+2*C+2)}for(S=0;S<g;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=g;S<2*g;S++)E[S]=0;return new o(E,0)};function v(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function I(w,g){this.g=w,this.h=g}function V(w,g){if(A(g))throw Error("division by zero");if(A(w))return new I(f,f);if(P(w))return g=V(D(w),g),new I(D(g.g),D(g.h));if(P(g))return g=V(w,D(g)),new I(D(g.g),g.h);if(30<w.g.length){if(P(w)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=g;0>=S.l(w);)E=F(E),S=F(S);var C=L(E,1),N=L(S,1);for(S=L(S,2),E=L(E,2);!A(S);){var R=N.add(S);0>=R.l(w)&&(C=C.add(E),N=R),S=L(S,1),E=L(E,1)}return g=T(w,C.j(g)),new I(C,g)}for(C=f;0<=w.l(g);){for(E=Math.max(1,Math.floor(w.m()/g.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=c(E),R=N.j(g);P(R)||0<R.l(w);)E-=S,N=c(E),R=N.j(g);A(N)&&(N=m),C=C.add(N),w=T(w,R)}return new I(C,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],S=0;S<g;S++)E[S]=this.i(S)&w.i(S);return new o(E,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],S=0;S<g;S++)E[S]=this.i(S)|w.i(S);return new o(E,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),E=[],S=0;S<g;S++)E[S]=this.i(S)^w.i(S);return new o(E,this.h^w.h)};function F(w){for(var g=w.g.length+1,E=[],S=0;S<g;S++)E[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(E,w.h)}function L(w,g){var E=g>>5;g%=32;for(var S=w.g.length-E,C=[],N=0;N<S;N++)C[N]=0<g?w.i(N+E)>>>g|w.i(N+E+1)<<32-g:w.i(N+E);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ST=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,xi=o}).apply(typeof _v<"u"?_v:typeof self<"u"?self:typeof window<"u"?window:{});var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var RT,ha,PT,qu,up,CT,kT,xT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eu=="object"&&Eu];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var b=l[_];if(!(b in p))break e;p=p[b]}l=l[l.length-1],_=p[l],h=h(_),h!=_&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,_=!1,b={next:function(){if(!_&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function y(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function A(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,b,M){for(var G=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)G[ve-2]=arguments[ve];return h.prototype[b].apply(_,G)}}function P(l){const h=l.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=l[_];return p}return[]}function D(l,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const b=l.length||0,M=_.length||0;l.length=b+M;for(let G=0;G<M;G++)l[b+G]=_[G]}else l.push(_)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function L(l,h,p){for(const _ in l)h.call(p,l[_],_,l)}function w(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function g(l){const h={};for(const p in l)h[p]=l[p];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,h){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)l[p]=_[p];for(let M=0;M<E.length;M++)p=E[M],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function C(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function R(){var l=te;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class bt{constructor(){this.h=this.g=null}add(h,p){const _=Nn.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Nn=new T(()=>new ui,l=>l.reset());class ui{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let an,W=!1,te=new bt,ie=()=>{const l=a.Promise.resolve(void 0);an=()=>{l.then(Ee)}};var Ee=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){N(p)}var h=Nn;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function B(){this.s=this.s,this.C=this.C}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Z(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ne=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function oe(l,h){if(Z.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{V(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ye[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&oe.aa.h.call(this)}}A(oe,Z);var Ye={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),Yh=0;function uR(l,h,p,_,b){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=b,this.key=++Yh,this.da=this.fa=!1}function Bl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function zl(l){this.src=l,this.g={},this.h=0}zl.prototype.add=function(l,h,p,_,b){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var G=Xh(l,h,_,b);return-1<G?(h=l[G],p||(h.fa=!1)):(h=new uR(h,this.src,M,!!_,b),h.fa=p,l.push(h)),h};function Jh(l,h){var p=h.type;if(p in l.g){var _=l.g[p],b=Array.prototype.indexOf.call(_,h,void 0),M;(M=0<=b)&&Array.prototype.splice.call(_,b,1),M&&(Bl(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Xh(l,h,p,_){for(var b=0;b<l.length;++b){var M=l[b];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==_)return b}return-1}var Zh="closure_lm_"+(1e6*Math.random()|0),ed={};function Zg(l,h,p,_,b){if(Array.isArray(h)){for(var M=0;M<h.length;M++)Zg(l,h[M],p,_,b);return null}return p=n_(p),l&&l[zt]?l.K(h,p,c(_)?!!_.capture:!1,b):cR(l,h,p,!1,_,b)}function cR(l,h,p,_,b,M){if(!h)throw Error("Invalid event type");var G=c(b)?!!b.capture:!!b,ve=nd(l);if(ve||(l[Zh]=ve=new zl(l)),p=ve.add(h,p,_,G,M),p.proxy)return p;if(_=hR(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)ne||(b=G),b===void 0&&(b=!1),l.addEventListener(h.toString(),_,b);else if(l.attachEvent)l.attachEvent(t_(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function hR(){function l(p){return h.call(l.src,l.listener,p)}const h=dR;return l}function e_(l,h,p,_,b){if(Array.isArray(h))for(var M=0;M<h.length;M++)e_(l,h[M],p,_,b);else _=c(_)?!!_.capture:!!_,p=n_(p),l&&l[zt]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=Xh(M,p,_,b),-1<p&&(Bl(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=nd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Xh(h,p,_,b)),(p=-1<l?h[l]:null)&&td(p))}function td(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[zt])Jh(h.i,l);else{var p=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(p,_,l.capture):h.detachEvent?h.detachEvent(t_(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=nd(h))?(Jh(p,l),p.h==0&&(p.src=null,h[Zh]=null)):Bl(l)}}}function t_(l){return l in ed?ed[l]:ed[l]="on"+l}function dR(l,h){if(l.da)l=!0;else{h=new oe(h,this);var p=l.listener,_=l.ha||l.src;l.fa&&td(l),l=p.call(_,h)}return l}function nd(l){return l=l[Zh],l instanceof zl?l:null}var rd="__closure_events_fn_"+(1e9*Math.random()>>>0);function n_(l){return typeof l=="function"?l:(l[rd]||(l[rd]=function(h){return l.handleEvent(h)}),l[rd])}function pt(){B.call(this),this.i=new zl(this),this.M=this,this.F=null}A(pt,B),pt.prototype[zt]=!0,pt.prototype.removeEventListener=function(l,h,p,_){e_(this,l,h,p,_)};function St(l,h){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new Z(h,l);else if(h instanceof Z)h.target=h.target||l;else{var b=h;h=new Z(_,l),S(h,b)}if(b=!0,p)for(var M=p.length-1;0<=M;M--){var G=h.g=p[M];b=$l(G,_,!0,h)&&b}if(G=h.g=l,b=$l(G,_,!0,h)&&b,b=$l(G,_,!1,h)&&b,p)for(M=0;M<p.length;M++)G=h.g=p[M],b=$l(G,_,!1,h)&&b}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],_=0;_<p.length;_++)Bl(p[_]);delete l.g[h],l.h--}}this.F=null},pt.prototype.K=function(l,h,p,_){return this.i.add(String(l),h,!1,p,_)},pt.prototype.L=function(l,h,p,_){return this.i.add(String(l),h,!0,p,_)};function $l(l,h,p,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,M=0;M<h.length;++M){var G=h[M];if(G&&!G.da&&G.capture==p){var ve=G.listener,lt=G.ha||G.src;G.fa&&Jh(l.i,G),b=ve.call(lt,_)!==!1&&b}}return b&&!_.defaultPrevented}function r_(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function i_(l){l.g=r_(()=>{l.g=null,l.i&&(l.i=!1,i_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class fR extends B{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:i_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Do(l){B.call(this),this.h=l,this.g={}}A(Do,B);var s_=[];function o_(l){L(l.g,function(h,p){this.g.hasOwnProperty(p)&&td(h)},l),l.g={}}Do.prototype.N=function(){Do.aa.N.call(this),o_(this)},Do.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var id=a.JSON.stringify,pR=a.JSON.parse,mR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function sd(){}sd.prototype.h=null;function a_(l){return l.h||(l.h=l.i())}function l_(){}var Vo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function od(){Z.call(this,"d")}A(od,Z);function ad(){Z.call(this,"c")}A(ad,Z);var ci={},u_=null;function ql(){return u_=u_||new pt}ci.La="serverreachability";function c_(l){Z.call(this,ci.La,l)}A(c_,Z);function Oo(l){const h=ql();St(h,new c_(h))}ci.STAT_EVENT="statevent";function h_(l,h){Z.call(this,ci.STAT_EVENT,l),this.stat=h}A(h_,Z);function Rt(l){const h=ql();St(h,new h_(h,l))}ci.Ma="timingevent";function d_(l,h){Z.call(this,ci.Ma,l),this.size=h}A(d_,Z);function Lo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Mo(){this.g=!0}Mo.prototype.xa=function(){this.g=!1};function gR(l,h,p,_,b,M){l.info(function(){if(l.g)if(M)for(var G="",ve=M.split("&"),lt=0;lt<ve.length;lt++){var pe=ve[lt].split("=");if(1<pe.length){var mt=pe[0];pe=pe[1];var gt=mt.split("_");G=2<=gt.length&&gt[1]=="type"?G+(mt+"="+pe+"&"):G+(mt+"=redacted&")}}else G=null;else G=M;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+p+`
`+G})}function _R(l,h,p,_,b,M,G){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+p+`
`+M+" "+G})}function rs(l,h,p,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+vR(l,p)+(_?" "+_:"")})}function yR(l,h){l.info(function(){return"TIMEOUT: "+h})}Mo.prototype.info=function(){};function vR(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var M=b[0];if(M!="noop"&&M!="stop"&&M!="close")for(var G=1;G<b.length;G++)b[G]=""}}}}return id(p)}catch{return h}}var Gl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},f_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ld;function Kl(){}A(Kl,sd),Kl.prototype.g=function(){return new XMLHttpRequest},Kl.prototype.i=function(){return{}},ld=new Kl;function hr(l,h,p,_){this.j=l,this.i=h,this.l=p,this.R=_||1,this.U=new Do(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new p_}function p_(){this.i=null,this.g="",this.h=!1}var m_={},ud={};function cd(l,h,p){l.L=1,l.v=Yl(bn(h)),l.m=p,l.P=!0,g_(l,null)}function g_(l,h){l.F=Date.now(),Wl(l),l.A=bn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),x_(p.i,"t",_),l.C=0,p=l.j.J,l.h=new p_,l.g=H_(l.j,p?h:null,!l.m),0<l.O&&(l.M=new fR(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,_=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(s_[0]=b.toString()),b=s_);for(var M=0;M<b.length;M++){var G=Zg(p,b[M],_||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Oo(),gR(l.i,l.u,l.A,l.l,l.R,l.m)}hr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Dn(l)==3?h.j():this.Y(l)},hr.prototype.Y=function(l){try{if(l==this.g)e:{const gt=Dn(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||M_(this.g)))){this.J||gt!=4||h==7||(h==8||0>=os?Oo(3):Oo(2)),hd(this);var p=this.g.Z();this.X=p;t:if(__(this)){var _=M_(this.g);l="";var b=_.length,M=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),Fo(this);var G="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(_[h],{stream:!(M&&h==b-1)});_.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,_R(this.i,this.u,this.A,this.l,this.R,gt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,lt=this.g;if((ve=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ve)){var pe=ve;break t}}pe=null}if(p=pe)rs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dd(this,p);else{this.o=!1,this.s=3,Rt(12),hi(this),Fo(this);break e}}if(this.P){p=!0;let ln;for(;!this.J&&this.C<G.length;)if(ln=IR(this,G),ln==ud){gt==4&&(this.s=4,Rt(14),p=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==m_){this.s=4,Rt(15),rs(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else rs(this.i,this.l,ln,null),dd(this,ln);if(__(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||G.length!=0||this.h.h||(this.s=1,Rt(16),p=!1),this.o=this.o&&p,!p)rs(this.i,this.l,G,"[Invalid Chunked Response]"),hi(this),Fo(this);else if(0<G.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),yd(mt),mt.M=!0,Rt(11))}}else rs(this.i,this.l,G,null),dd(this,G);gt==4&&hi(this),this.o&&!this.J&&(gt==4?q_(this.j,this):(this.o=!1,Wl(this)))}else MR(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),hi(this),Fo(this)}}}catch{}finally{}};function __(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function IR(l,h){var p=l.C,_=h.indexOf(`
`,p);return _==-1?ud:(p=Number(h.substring(p,_)),isNaN(p)?m_:(_+=1,_+p>h.length?ud:(h=h.slice(_,_+p),l.C=_+p,h)))}hr.prototype.cancel=function(){this.J=!0,hi(this)};function Wl(l){l.S=Date.now()+l.I,y_(l,l.I)}function y_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Lo(m(l.ba,l),h)}function hd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}hr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(yR(this.i,this.A),this.L!=2&&(Oo(),Rt(17)),hi(this),this.s=2,Fo(this)):y_(this,this.S-l)};function Fo(l){l.j.G==0||l.J||q_(l.j,l)}function hi(l){hd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,o_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function dd(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||fd(p.h,l))){if(!l.K&&fd(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)nu(p),eu(p);else break e;_d(p),Rt(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=Lo(m(p.Za,p),6e3));if(1>=w_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else fi(p,11)}else if((l.K||p.g==l)&&nu(p),!v(h))for(b=p.Da.g.parse(h),h=0;h<b.length;h++){let pe=b[h];if(p.T=pe[0],pe=pe[1],p.G==2)if(pe[0]=="c"){p.K=pe[1],p.ia=pe[2];const mt=pe[3];mt!=null&&(p.la=mt,p.j.info("VER="+p.la));const gt=pe[4];gt!=null&&(p.Aa=gt,p.j.info("SVER="+p.Aa));const os=pe[5];os!=null&&typeof os=="number"&&0<os&&(_=1.5*os,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const ln=l.g;if(ln){const iu=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(iu){var M=_.h;M.g||iu.indexOf("spdy")==-1&&iu.indexOf("quic")==-1&&iu.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(pd(M,M.h),M.h=null))}if(_.D){const vd=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;vd&&(_.ya=vd,Te(_.I,_.D,vd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var G=l;if(_.qa=W_(_,_.J?_.ia:null,_.W),G.K){E_(_.h,G);var ve=G,lt=_.L;lt&&(ve.I=lt),ve.B&&(hd(ve),Wl(ve)),_.g=G}else z_(_);0<p.i.length&&tu(p)}else pe[0]!="stop"&&pe[0]!="close"||fi(p,7);else p.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?fi(p,7):gd(p):pe[0]!="noop"&&p.l&&p.l.ta(pe),p.v=0)}}Oo(4)}catch{}}var wR=class{constructor(l,h){this.g=l,this.map=h}};function v_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function I_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function w_(l){return l.h?1:l.g?l.g.size:0}function fd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function pd(l,h){l.g?l.g.add(h):l.h=h}function E_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}v_.prototype.cancel=function(){if(this.i=T_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function T_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return P(l.i)}function ER(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,_=0;_<p;_++)h.push(l[_]);return h}h=[],p=0;for(_ in l)h[p++]=l[_];return h}function TR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const _ in l)h[p++]=_;return h}}}function A_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=TR(l),_=ER(l),b=_.length,M=0;M<b;M++)h.call(void 0,_[M],p&&p[M],l)}var S_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AR(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),b=null;if(0<=_){var M=l[p].substring(0,_);b=l[p].substring(_+1)}else M=l[p];h(M,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function di(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof di){this.h=l.h,Hl(this,l.j),this.o=l.o,this.g=l.g,Ql(this,l.s),this.l=l.l;var h=l.i,p=new Bo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),R_(this,p),this.m=l.m}else l&&(h=String(l).match(S_))?(this.h=!1,Hl(this,h[1]||"",!0),this.o=Uo(h[2]||""),this.g=Uo(h[3]||"",!0),Ql(this,h[4]),this.l=Uo(h[5]||"",!0),R_(this,h[6]||"",!0),this.m=Uo(h[7]||"")):(this.h=!1,this.i=new Bo(null,this.h))}di.prototype.toString=function(){var l=[],h=this.j;h&&l.push(jo(h,P_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(jo(h,P_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(jo(p,p.charAt(0)=="/"?PR:RR,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",jo(p,kR)),l.join("")};function bn(l){return new di(l)}function Hl(l,h,p){l.j=p?Uo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ql(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function R_(l,h,p){h instanceof Bo?(l.i=h,xR(l.i,l.h)):(p||(h=jo(h,CR)),l.i=new Bo(h,l.h))}function Te(l,h,p){l.i.set(h,p)}function Yl(l){return Te(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Uo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function jo(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,SR),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function SR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var P_=/[#\/\?@]/g,RR=/[#\?:]/g,PR=/[#\?]/g,CR=/[#\?@]/g,kR=/#/g;function Bo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function dr(l){l.g||(l.g=new Map,l.h=0,l.i&&AR(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Bo.prototype,t.add=function(l,h){dr(this),this.i=null,l=is(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function C_(l,h){dr(l),h=is(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function k_(l,h){return dr(l),h=is(l,h),l.g.has(h)}t.forEach=function(l,h){dr(this),this.g.forEach(function(p,_){p.forEach(function(b){l.call(h,b,_,this)},this)},this)},t.na=function(){dr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const b=l[_];for(let M=0;M<b.length;M++)p.push(h[_])}return p},t.V=function(l){dr(this);let h=[];if(typeof l=="string")k_(this,l)&&(h=h.concat(this.g.get(is(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return dr(this),this.i=null,l=is(this,l),k_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function x_(l,h,p){C_(l,h),0<p.length&&(l.i=null,l.g.set(is(l,h),P(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const M=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var b=M;G[_]!==""&&(b+="="+encodeURIComponent(String(G[_]))),l.push(b)}}return this.i=l.join("&")};function is(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function xR(l,h){h&&!l.j&&(dr(l),l.i=null,l.g.forEach(function(p,_){var b=_.toLowerCase();_!=b&&(C_(this,_),x_(this,b,p))},l)),l.j=h}function NR(l,h){const p=new Mo;if(a.Image){const _=new Image;_.onload=y(fr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=y(fr,p,"TestLoadImage: error",!1,h,_),_.onabort=y(fr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=y(fr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function bR(l,h){const p=new Mo,_=new AbortController,b=setTimeout(()=>{_.abort(),fr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(M=>{clearTimeout(b),M.ok?fr(p,"TestPingServer: ok",!0,h):fr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),fr(p,"TestPingServer: error",!1,h)})}function fr(l,h,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function DR(){this.g=new mR}function VR(l,h,p){const _=p||"";try{A_(l,function(b,M){let G=b;c(b)&&(G=id(b)),h.push(_+M+"="+encodeURIComponent(G))})}catch(b){throw h.push(_+"type="+encodeURIComponent("_badmap")),b}}function Jl(l){this.l=l.Ub||null,this.j=l.eb||!1}A(Jl,sd),Jl.prototype.g=function(){return new Xl(this.l,this.j)},Jl.prototype.i=function(l){return function(){return l}}({});function Xl(l,h){pt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Xl,pt),t=Xl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,$o(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;N_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function N_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?zo(this):$o(this),this.readyState==3&&N_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,zo(this))},t.Qa=function(l){this.g&&(this.response=l,zo(this))},t.ga=function(){this.g&&zo(this)};function zo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,$o(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function $o(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Xl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function b_(l){let h="";return L(l,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function md(l,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=b_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Te(l,h,p))}function Ue(l){pt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ue,pt);var OR=/^https?$/i,LR=["POST","PUT"];t=Ue.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ld.g(),this.v=this.o?a_(this.o):a_(ld),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){D_(this,M);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(LR,h,void 0))||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of p)this.g.setRequestHeader(M,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{L_(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){D_(this,M)}};function D_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,V_(l),Zl(l)}function V_(l){l.A||(l.A=!0,St(l,"complete"),St(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,St(this,"complete"),St(this,"abort"),Zl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zl(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?O_(this):this.bb())},t.bb=function(){O_(this)};function O_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Dn(l)!=4||l.Z()!=2)){if(l.u&&Dn(l)==4)r_(l.Ea,0,l);else if(St(l,"readystatechange"),Dn(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=G===0){var b=String(l.D).match(S_)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),_=!OR.test(b?b.toLowerCase():"")}p=_}if(p)St(l,"complete"),St(l,"success");else{l.m=6;try{var M=2<Dn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",V_(l)}}finally{Zl(l)}}}}function Zl(l,h){if(l.g){L_(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||St(l,"ready");try{p.onreadystatechange=_}catch{}}}function L_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Dn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),pR(h)}};function M_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function MR(l){const h={};l=(l.g&&2<=Dn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(v(l[_]))continue;var p=C(l[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[b]||[];h[b]=M,M.push(p)}w(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function F_(l){this.Aa=0,this.i=[],this.j=new Mo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qo("baseRetryDelayMs",5e3,l),this.cb=qo("retryDelaySeedMs",1e4,l),this.Wa=qo("forwardChannelMaxRetries",2,l),this.wa=qo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new v_(l&&l.concurrentRequestLimit),this.Da=new DR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=F_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,_){Rt(0),this.W=l,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=W_(this,null,this.W),tu(this)};function gd(l){if(U_(l),l.G==3){var h=l.U++,p=bn(l.I);if(Te(p,"SID",l.K),Te(p,"RID",h),Te(p,"TYPE","terminate"),Go(l,p),h=new hr(l,l.j,h),h.L=2,h.v=Yl(bn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=H_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Wl(h)}K_(l)}function eu(l){l.g&&(yd(l),l.g.cancel(),l.g=null)}function U_(l){eu(l),l.u&&(a.clearTimeout(l.u),l.u=null),nu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function tu(l){if(!I_(l.h)&&!l.s){l.s=!0;var h=l.Ga;an||ie(),W||(an(),W=!0),te.add(h,l),l.B=0}}function FR(l,h){return w_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Lo(m(l.Ga,l,h),G_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new hr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=g(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(b.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=B_(this,b,h),p=bn(this.I),Te(p,"RID",l),Te(p,"CVER",22),this.D&&Te(p,"X-HTTP-Session-Id",this.D),Go(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(b_(M)))+"&"+h:this.m&&md(p,this.m,M)),pd(this.h,b),this.Ua&&Te(p,"TYPE","init"),this.P?(Te(p,"$req",h),Te(p,"SID","null"),b.T=!0,cd(b,p,null)):cd(b,p,h),this.G=2}}else this.G==3&&(l?j_(this,l):this.i.length==0||I_(this.h)||j_(this))};function j_(l,h){var p;h?p=h.l:p=l.U++;const _=bn(l.I);Te(_,"SID",l.K),Te(_,"RID",p),Te(_,"AID",l.T),Go(l,_),l.m&&l.o&&md(_,l.m,l.o),p=new hr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=B_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),pd(l.h,p),cd(p,_,h)}function Go(l,h){l.H&&L(l.H,function(p,_){Te(h,_,p)}),l.l&&A_({},function(p,_){Te(h,_,p)})}function B_(l,h,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let M=-1;for(;;){const G=["count="+p];M==-1?0<p?(M=b[0].g,G.push("ofs="+M)):M=0:G.push("ofs="+M);let ve=!0;for(let lt=0;lt<p;lt++){let pe=b[lt].g;const mt=b[lt].map;if(pe-=M,0>pe)M=Math.max(0,b[lt].g-100),ve=!1;else try{VR(mt,G,"req"+pe+"_")}catch{_&&_(mt)}}if(ve){_=G.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,_}function z_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;an||ie(),W||(an(),W=!0),te.add(h,l),l.v=0}}function _d(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Lo(m(l.Fa,l),G_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,$_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Lo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),eu(this),$_(this))};function yd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function $_(l){l.g=new hr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=bn(l.qa);Te(h,"RID","rpc"),Te(h,"SID",l.K),Te(h,"AID",l.T),Te(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Te(h,"TO",l.ja),Te(h,"TYPE","xmlhttp"),Go(l,h),l.m&&l.o&&md(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Yl(bn(h)),p.m=null,p.P=!0,g_(p,l)}t.Za=function(){this.C!=null&&(this.C=null,eu(this),_d(this),Rt(19))};function nu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function q_(l,h){var p=null;if(l.g==h){nu(l),yd(l),l.g=null;var _=2}else if(fd(l.h,h))p=h.D,E_(l.h,h),_=1;else return;if(l.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;_=ql(),St(_,new d_(_,p)),tu(l)}else z_(l);else if(b=h.s,b==3||b==0&&0<h.X||!(_==1&&FR(l,h)||_==2&&_d(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),b){case 1:fi(l,5);break;case 4:fi(l,10);break;case 3:fi(l,6);break;default:fi(l,2)}}}function G_(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function fi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),_=l.Xa;const b=!_;_=new di(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Hl(_,"https"),Yl(_),b?NR(_.toString(),p):bR(_.toString(),p)}else Rt(2);l.G=0,l.l&&l.l.sa(h),K_(l),U_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function K_(l){if(l.G=0,l.ka=[],l.l){const h=T_(l.h);(h.length!=0||l.i.length!=0)&&(D(l.ka,h),D(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function W_(l,h,p){var _=p instanceof di?bn(p):new di(p);if(_.g!="")h&&(_.g=h+"."+_.g),Ql(_,_.s);else{var b=a.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var M=new di(null);_&&Hl(M,_),h&&(M.g=h),b&&Ql(M,b),p&&(M.l=p),_=M}return p=l.D,h=l.ya,p&&h&&Te(_,p,h),Te(_,"VER",l.la),Go(l,_),_}function H_(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ue(new Jl({eb:p})):new Ue(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Q_(){}t=Q_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ru(){}ru.prototype.g=function(l,h){return new $t(l,h)};function $t(l,h){pt.call(this),this.g=new F_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!v(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ss(this)}A($t,pt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){gd(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=id(l),l=p);h.i.push(new wR(h.Ya++,l)),h.G==3&&tu(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,gd(this.g),delete this.g,$t.aa.N.call(this)};function Y_(l){od.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}A(Y_,od);function J_(){ad.call(this),this.status=1}A(J_,ad);function ss(l){this.g=l}A(ss,Q_),ss.prototype.ua=function(){St(this.g,"a")},ss.prototype.ta=function(l){St(this.g,new Y_(l))},ss.prototype.sa=function(l){St(this.g,new J_)},ss.prototype.ra=function(){St(this.g,"b")},ru.prototype.createWebChannel=ru.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,xT=function(){return new ru},kT=function(){return ql()},CT=ci,up={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gl.NO_ERROR=0,Gl.TIMEOUT=8,Gl.HTTP_ERROR=6,qu=Gl,f_.COMPLETE="complete",PT=f_,l_.EventType=Vo,Vo.OPEN="a",Vo.CLOSE="b",Vo.ERROR="c",Vo.MESSAGE="d",pt.prototype.listen=pt.prototype.K,ha=l_,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,RT=Ue}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});const yv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new km("@firebase/firestore");function fs(){return $r.logLevel}function Yx(t){$r.setLogLevel(t)}function j(t,...e){if($r.logLevel<=ue.DEBUG){const n=e.map(Dm);$r.debug(`Firestore (${go}): ${t}`,...n)}}function Ge(t,...e){if($r.logLevel<=ue.ERROR){const n=e.map(Dm);$r.error(`Firestore (${go}): ${t}`,...n)}}function Qt(t,...e){if($r.logLevel<=ue.WARN){const n=e.map(Dm);$r.warn(`Firestore (${go}): ${t}`,...n)}}function Dm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw Ge(e),new Error(e)}function Y(t,e){t||H()}function Jx(t,e){t||H()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class Xx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zx{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Y(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new NT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new rt(e)}}class eN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Y(this.o===void 0);const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.R=n.token,new DT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class rN{getToken(){return Promise.resolve(new DT(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function VT(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new De(0,0))}static max(){return new J(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return el.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof el?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends el{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const sN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends el{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return sN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ce.fromString(e))}static fromName(e){return new K(ce.fromString(e).popFirst(5))}static empty(){return new K(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ce(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function cp(t){return t.fields.find(e=>e.kind===2)}function yi(t){return t.fields.filter(e=>e.kind!==2)}function oN(t,e){let n=re(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=aN(t.fields[r],e.fields[r]),n!==0)return n;return re(t.fields.length,e.fields.length)}Qs.UNKNOWN_ID=-1;class Ni{constructor(e,n){this.fieldPath=e,this.kind=n}}function aN(t,e){const n=Re.comparator(t.fieldPath,e.fieldPath);return n!==0?n:re(t.kind,e.kind)}class Ys{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ys(0,Yt.min())}}function OT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Yt(i,K.empty(),e)}function LT(t){return new Yt(t.readTime,t.key,-1)}class Yt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yt(J.min(),K.empty(),-1)}static max(){return new Yt(J.max(),K.empty(),-1)}}function Om(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==MT)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new st,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Pa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Lm(r.target.error);this.V.reject(new Pa(e,i))}}static open(e,n,r,i){try{return new _h(n,e.transaction(i,r))}catch(s){throw new Pa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new uN(n)}}class Rn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Rn.S(Ze())===12.2&&Ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return j("SimpleDb","Removing database:",e),vi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!vT())return!1;if(Rn.v())return!0;const e=Ze(),n=Rn.S(e),r=0<n&&n<10,i=UT(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Pa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new U(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Pa(e,o))},i.onupgradeneeded=s=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=_h.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),x.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(j("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function UT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class lN{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return vi(this.B.delete())}}class Pa extends U{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ni(t){return t.name==="IndexedDbTransactionError"}class uN{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(j("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),vi(r)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),vi(this.store.add(e))}get(e){return vi(this.store.get(e)).next(n=>(n===void 0&&(n=null),j("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),vi(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),vi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new x((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new x((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){j("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new x((r,i)=>{n.onerror=s=>{const o=Lm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new x((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new lN(a),c=n(a.primaryKey,a.value,u);if(c instanceof x){const d=c.catch(f=>(u.done(),x.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>x.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function vi(t){return new x((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Lm(r.target.error);n(i)}})}let vv=!1;function Lm(t){const e=Rn.S(Ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vv||(vv=!0,setTimeout(()=>{throw r},0)),r}}return t}class cN{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){j("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{j("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ni(n)?j("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await ti(n)}await this.X(6e4)})}}class hN{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return x.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return j("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(j("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=LT(s);Om(o,r)>0&&(r=o)}),new Yt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ot.oe=-1;function wl(t){return t==null}function tl(t){return t===0&&1/t==-1/0}function jT(t){return typeof t=="number"&&Number.isInteger(t)&&!tl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Iv(e)),e=dN(t.get(n),e);return Iv(e)}function dN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Iv(t){return t+""}function wn(t){const e=t.length;if(Y(e>=2),e===2)return Y(t.charAt(0)===""&&t.charAt(1)===""),ce.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new ce(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){return[t,Et(e)]}function BT(t,e,n){return[t,Et(e),n]}const fN={},pN=["prefixPath","collectionGroup","readTime","documentId"],mN=["prefixPath","collectionGroup","documentId"],gN=["collectionGroup","readTime","prefixPath","documentId"],_N=["canonicalId","targetId"],yN=["targetId","path"],vN=["path","targetId"],IN=["collectionId","parent"],wN=["indexId","uid"],EN=["uid","sequenceNumber"],TN=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],AN=["indexId","uid","orderedDocumentKey"],SN=["userId","collectionPath","documentId"],RN=["userId","collectionPath","largestBatchId"],PN=["userId","collectionGroup","largestBatchId"],zT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],CN=[...zT,"documentOverlays"],$T=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qT=$T,Mm=[...qT,"indexConfiguration","indexState","indexEntries"],kN=Mm,xN=[...Mm,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp extends FT{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function et(t,e){const n=q(t);return Rn.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GT(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function KT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tu(this.root,e,this.comparator,!0)}}class Tu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tv(this.data.getIterator())}getIteratorFrom(e){return new Tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Tv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ls(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new _e(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new WT("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const bN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(t){if(Y(!!t),typeof t=="string"){let e=0;const n=bN.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vh(t){const e=t.mapValue.fields.__previous_value__;return yh(e)?vh(e):e}function nl(t){const e=er(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ku={nullValue:"NULL_VALUE"};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yh(t)?4:HT(t)?9007199254740991:Ih(t)?10:11:H()}function Cn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nl(t).isEqual(nl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=er(i.timestampValue),a=er(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return tr(i.bytesValue).isEqual(tr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),a=xe(s.doubleValue);return o===a?tl(o)===tl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ev(o)!==Ev(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Cn(o[u],a[u])))return!1;return!0}(t,e);default:return H()}}function rl(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Kr(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Av(t.timestampValue,e.timestampValue);case 4:return Av(nl(t),nl(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=tr(s),u=tr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=re(a[c],u[c]);if(d!==0)return d}return re(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=re(xe(s.latitude),xe(o.latitude));return a!==0?a:re(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=re(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Sv(y,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Pr.mapValue&&o===Pr.mapValue)return 0;if(s===Pr.mapValue)return 1;if(o===Pr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=re(u[f],d[f]);if(m!==0)return m;const y=Kr(a[u[f]],c[d[f]]);if(y!==0)return y}return re(u.length,d.length)}(t.mapValue,e.mapValue);default:throw H()}}function Av(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=er(t),r=er(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Sv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Kr(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function Js(t){return dp(t)}function dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dp(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function Wu(t){switch(Gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vh(t);return e?16+Wu(e):16;case 5:return 2*t.stringValue.length;case 6:return tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Wu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ri(r.fields,(s,o)=>{i+=s.length+Wu(o)}),i}(t.mapValue);default:throw H()}}function Bi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fp(t){return!!t&&"integerValue"in t}function il(t){return!!t&&"arrayValue"in t}function Rv(t){return!!t&&"nullValue"in t}function Pv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hu(t){return!!t&&"mapValue"in t}function Ih(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const QT={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function VN(t){return"nullValue"in t?Ku:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Bi(qr.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Ih(t)?QT:{mapValue:{}}:H()}function ON(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Bi(qr.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?QT:"mapValue"in t?Ih(t)?{mapValue:{}}:Pr:H()}function Cv(t,e){const n=Kr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function kv(t,e){const n=Kr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(n)}setAll(e){let n=Re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ca(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(Ca(this.value))}}function YT(t){const e=[];return ri(t.fields,(n,r)=>{const i=new Re([n]);if(Hu(r)){const s=YT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Se(e,0,J.min(),J.min(),J.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new Se(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Se(e,2,n,J.min(),J.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,J.min(),J.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this.position=e,this.inclusive=n}}function xv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Kr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n="asc"){this.field=e,this.dir=n}}function LN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{}class he extends JT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MN(e,n,r):n==="array-contains"?new jN(e,r):n==="in"?new r0(e,r):n==="not-in"?new BN(e,r):n==="array-contains-any"?new zN(e,r):new he(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FN(e,r):new UN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class me extends JT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new me(e,n)}matches(e){return Xs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xs(t){return t.op==="and"}function pp(t){return t.op==="or"}function Fm(t){return XT(t)&&Xs(t)}function XT(t){for(const e of t.filters)if(e instanceof me)return!1;return!0}function mp(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(Fm(t))return t.filters.map(e=>mp(e)).join(",");{const e=t.filters.map(n=>mp(n)).join(",");return`${t.op}(${e})`}}function ZT(t,e){return t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.field.isEqual(i.field)&&Cn(r.value,i.value)}(t,e):t instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ZT(o,i.filters[a]),!0):!1}(t,e):void H()}function e0(t,e){const n=t.filters.concat(e);return me.create(n,t.op)}function t0(t){return t instanceof he?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(t):t instanceof me?function(n){return n.op.toString()+" {"+n.getFilters().map(t0).join(" ,")+"}"}(t):"Filter"}class MN extends he{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class FN extends he{constructor(e,n){super(e,"in",n),this.keys=n0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UN extends he{constructor(e,n){super(e,"not-in",n),this.keys=n0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function n0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class jN extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return il(n)&&rl(n.arrayValue,this.value)}}class r0 extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rl(this.value.arrayValue,n)}}class BN extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!rl(this.value.arrayValue,n)}}class zN extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!il(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function gp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $N(t,e,n,r,i,s,o)}function zi(t){const e=q(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.ue=n}return e.ue}function El(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ZT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nv(t.startAt,e.startAt)&&Nv(t.endAt,e.endAt)}function Vc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Oc(t,e){return t.filters.filter(n=>n instanceof he&&n.field.isEqual(e))}function bv(t,e,n){let r=Ku,i=!0;for(const s of Oc(t,e)){let o=Ku,a=!0;switch(s.op){case"<":case"<=":o=VN(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ku}Cv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Cv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Dv(t,e,n){let r=Pr,i=!0;for(const s of Oc(t,e)){let o=Pr,a=!0;switch(s.op){case">=":case">":o=ON(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Pr}kv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];kv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function i0(t,e,n,r,i,s,o,a){return new sr(t,e,n,r,i,s,o,a)}function _o(t){return new sr(t)}function Vv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Um(t){return t.collectionGroup!==null}function Os(t){const e=q(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _e(Re.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new sl(s,r))}),n.has(Re.keyField().canonicalString())||e.ce.push(new sl(Re.keyField(),r))}return e.ce}function Tt(t){const e=q(t);return e.le||(e.le=o0(e,Os(t))),e.le}function s0(t){const e=q(t);return e.he||(e.he=o0(e,t.explicitOrderBy)),e.he}function o0(t,e){if(t.limitType==="F")return gp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sl(i.field,s)});const n=t.endAt?new Wr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wr(t.startAt.position,t.startAt.inclusive):null;return gp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _p(t,e){const n=t.filters.concat([e]);return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Lc(t,e,n){return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tl(t,e){return El(Tt(t),Tt(e))&&t.limitType===e.limitType}function a0(t){return`${zi(Tt(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>t0(i)).join(", ")}]`),wl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Js(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Js(i)).join(",")),`Target(${r})`}(Tt(t))}; limitType=${t.limitType})`}function Al(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Os(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=xv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Os(r),i)||r.endAt&&!function(o,a,u){const c=xv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Os(r),i))}(t,e)}function l0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u0(t){return(e,n)=>{let r=!1;for(const i of Os(t)){const s=qN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qN(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Kr(u,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return KT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new we(K.comparator);function Mt(){return GN}const c0=new we(K.comparator);function da(...t){let e=c0;for(const n of t)e=e.insert(n.key,n);return e}function h0(t){let e=c0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function En(){return ka()}function d0(){return ka()}function ka(){return new or(t=>t.toString(),(t,e)=>t.isEqual(e))}const KN=new we(K.comparator),WN=new _e(K.comparator);function se(...t){let e=WN;for(const n of t)e=e.add(n);return e}const HN=new _e(re);function jm(){return HN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tl(e)?"-0":e}}function f0(t){return{integerValue:""+t}}function p0(t,e){return jT(e)?f0(e):Bm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this._=void 0}}function QN(t,e,n){return t instanceof Zs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&yh(s)&&(s=vh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof $i?g0(t,e):t instanceof qi?_0(t,e):function(i,s){const o=m0(i,s),a=Ov(o)+Ov(i.Pe);return fp(o)&&fp(i.Pe)?f0(a):Bm(i.serializer,a)}(t,e)}function YN(t,e,n){return t instanceof $i?g0(t,e):t instanceof qi?_0(t,e):n}function m0(t,e){return t instanceof eo?function(r){return fp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zs extends wh{}class $i extends wh{constructor(e){super(),this.elements=e}}function g0(t,e){const n=y0(e);for(const r of t.elements)n.some(i=>Cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class qi extends wh{constructor(e){super(),this.elements=e}}function _0(t,e){let n=y0(e);for(const r of t.elements)n=n.filter(i=>!Cn(i,r));return{arrayValue:{values:n}}}class eo extends wh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ov(t){return xe(t.integerValue||t.doubleValue)}function y0(t){return il(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.field=e,this.transform=n}}function JN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof $i&&i instanceof $i||r instanceof qi&&i instanceof qi?Hs(r.elements,i.elements,Cn):r instanceof eo&&i instanceof eo?Cn(r.Pe,i.Pe):r instanceof Zs&&i instanceof Zs}(t.transform,e.transform)}class XN{constructor(e,n){this.version=e,this.transformResults=n}}class be{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new be}static exists(e){return new be(void 0,e)}static updateTime(e){return new be(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eh{}function v0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vo(t.key,be.none()):new yo(t.key,t.data,be.none());{const n=t.data,r=ht.empty();let i=new _e(Re.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ar(t.key,r,new Lt(i.toArray()),be.none())}}function ZN(t,e,n){t instanceof yo?function(i,s,o){const a=i.value.clone(),u=Mv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(i,s,o){if(!Qu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Mv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(I0(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xa(t,e,n,r){return t instanceof yo?function(s,o,a,u){if(!Qu(s.precondition,o))return a;const c=s.value.clone(),d=Fv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(s,o,a,u){if(!Qu(s.precondition,o))return a;const c=Fv(s.fieldTransforms,u,o),d=o.data;return d.setAll(I0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Qu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=m0(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function Lv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hs(r,i,(s,o)=>JN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yo extends Eh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ar extends Eh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function I0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mv(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YN(o,a,n[i]))}return r}function Fv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QN(s,o,e))}return r}class vo extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zm extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=v0(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,(n,r)=>Lv(n,r))&&Hs(this.baseMutations,e.baseMutations,(n,r)=>Lv(n,r))}}class qm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=function(){return KN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,de;function E0(t){switch(t){default:return H();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function T0(t){if(t===void 0)return Ge("GRPC error has no .code"),O.UNKNOWN;switch(t){case We.OK:return O.OK;case We.CANCELLED:return O.CANCELLED;case We.UNKNOWN:return O.UNKNOWN;case We.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case We.INTERNAL:return O.INTERNAL;case We.UNAVAILABLE:return O.UNAVAILABLE;case We.UNAUTHENTICATED:return O.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case We.NOT_FOUND:return O.NOT_FOUND;case We.ALREADY_EXISTS:return O.ALREADY_EXISTS;case We.PERMISSION_DENIED:return O.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case We.ABORTED:return O.ABORTED;case We.OUT_OF_RANGE:return O.OUT_OF_RANGE;case We.UNIMPLEMENTED:return O.UNIMPLEMENTED;case We.DATA_LOSS:return O.DATA_LOSS;default:return H()}}(de=We||(We={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new xi([4294967295,4294967295],0);function Uv(t){const e=A0().encode(t),n=new ST;return n.update(e),new Uint8Array(n.digest())}function jv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xi([n,r],0),new xi([i,s],0)]}class Km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fa(`Invalid padding: ${n}`);if(r<0)throw new fa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=xi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(xi.fromNumber(r)));return i.compare(nb)===1&&(i=new xi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Uv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Km(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Uv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Rl(J.min(),i,new we(re),Mt(),se())}}class Pl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pl(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class S0{constructor(e,n){this.targetId=e,this.me=n}}class R0{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Bv{constructor(){this.fe=0,this.ge=$v(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new Pl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=$v()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mt(),this.qe=zv(),this.Qe=new we(re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Vc(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Se.newNoDocument(o,J.min()))}else Y(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}Mc==null||Mc.et(function(d,f,m,y,A){var P,D,T,v,I,V;const F={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},L=f.unchangedNames;return L&&(F.bloomFilter={applied:A===0,hashCount:(P=L==null?void 0:L.hashCount)!==null&&P!==void 0?P:0,bitmapLength:(v=(T=(D=L==null?void 0:L.bits)===null||D===void 0?void 0:D.bitmap)===null||T===void 0?void 0:T.length)!==null&&v!==void 0?v:0,padding:(V=(I=L==null?void 0:L.bits)===null||I===void 0?void 0:I.padding)!==null&&V!==void 0?V:0,mightContain:w=>{var g;return(g=y==null?void 0:y.mightContain(w))!==null&&g!==void 0&&g}}),F}(o,e.me,this.Le.tt(),a,u))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=tr(r).toUint8Array()}catch(u){if(u instanceof WT)return Qt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Km(o,i,s)}catch(u){return Qt(u instanceof fa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Vc(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Se.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Rl(e,n,this.Qe,this.ke,r);return this.ke=Mt(),this.qe=zv(),this.Qe=new we(re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Bv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _e(re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Bv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zv(){return new we(K.comparator)}function $v(){return new we(K.comparator)}const ib={asc:"ASCENDING",desc:"DESCENDING"},sb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ob={and:"AND",or:"OR"};class ab{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yp(t,e){return t.useProto3Json||wl(e)?e:{value:e}}function to(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function P0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lb(t,e){return to(t,e.toTimestamp())}function Ke(t){return Y(!!t),J.fromTimestamp(function(n){const r=er(n);return new De(r.seconds,r.nanos)}(t))}function Wm(t,e){return vp(t,e).canonicalString()}function vp(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function C0(t){const e=ce.fromString(t);return Y(F0(e)),e}function ol(t,e){return Wm(t.databaseId,e.path)}function Pn(t,e){const n=C0(e);if(n.get(1)!==t.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(N0(n))}function k0(t,e){return Wm(t.databaseId,e)}function x0(t){const e=C0(t);return e.length===4?ce.emptyPath():N0(e)}function Ip(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function N0(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function qv(t,e,n){return{name:ol(t,e),fields:n.value.mapValue.fields}}function b0(t,e,n){const r=Pn(t,e.name),i=Ke(e.updateTime),s=e.createTime?Ke(e.createTime):J.min(),o=new ht({mapValue:{fields:e.fields}}),a=Se.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function ub(t,e){return"found"in e?function(r,i){Y(!!i.found),i.found.name,i.found.updateTime;const s=Pn(r,i.found.name),o=Ke(i.found.updateTime),a=i.found.createTime?Ke(i.found.createTime):J.min(),u=new ht({mapValue:{fields:i.found.fields}});return Se.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){Y(!!i.missing),Y(!!i.readTime);const s=Pn(r,i.missing),o=Ke(i.readTime);return Se.newNoDocument(s,o)}(t,e):H()}function cb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Y(d===void 0||typeof d=="string"),Fe.fromBase64String(d||"")):(Y(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Fe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?O.UNKNOWN:T0(c.code);return new U(d,c.message||"")}(o);n=new R0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pn(t,r.document.name),s=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):J.min(),a=new ht({mapValue:{fields:r.document.fields}}),u=Se.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Yu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pn(t,r.document),s=r.readTime?Ke(r.readTime):J.min(),o=Se.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Yu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pn(t,r.document),s=r.removedTargetIds||[];n=new Yu([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tb(i,s),a=r.targetId;n=new S0(a,o)}}return n}function al(t,e){let n;if(e instanceof yo)n={update:qv(t,e.key,e.value)};else if(e instanceof vo)n={delete:ol(t,e.key)};else if(e instanceof ar)n={update:qv(t,e.key,e.data),updateMask:gb(e.fieldMask)};else{if(!(e instanceof zm))return H();n={verify:ol(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Zs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof eo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function wp(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?be.updateTime(Ke(s.updateTime)):s.exists!==void 0?be.exists(s.exists):be.none()}(e.currentDocument):be.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)Y(a.setToServerValue==="REQUEST_TIME"),u=new Zs;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new $i(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new qi(d)}else"increment"in a?u=new eo(o,a.increment):H();const c=Re.fromServerFormat(a.fieldPath);return new Sl(c,u)}(t,i)):[];if(e.update){e.update.name;const i=Pn(t,e.update.name),s=new ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Lt(c.map(d=>Re.fromServerFormat(d)))}(e.updateMask);return new ar(i,s,o,n,r)}return new yo(i,s,n,r)}if(e.delete){const i=Pn(t,e.delete);return new vo(i,n)}if(e.verify){const i=Pn(t,e.verify);return new zm(i,n)}return H()}function hb(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ke(i.updateTime):Ke(s);return o.isEqual(J.min())&&(o=Ke(s)),new XN(o,i.transformResults||[])}(n,e))):[]}function D0(t,e){return{documents:[k0(t,e.path)]}}function Th(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k0(t,i);const s=function(c){if(c.length!==0)return M0(me.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Er(m.field),direction:fb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=yp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function V0(t,e,n,r){const{_t:i,parent:s}=Th(t,e),o={},a=[];let u=0;return n.forEach(c=>{const d=r?c.alias:"aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:Er(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:Er(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function O0(t){let e=x0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=L0(f);return m instanceof me&&Fm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new sl(ms(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,wl(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new Wr(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new Wr(y,m)}(n.endAt)),i0(e,i,o,s,a,"F",u,c)}function db(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function L0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(n.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ms(n.unaryFilter.field);return he.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return he.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return he.create(ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return me.create(n.compositeFilter.filters.map(r=>L0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function fb(t){return ib[t]}function pb(t){return sb[t]}function mb(t){return ob[t]}function Er(t){return{fieldPath:t.canonicalString()}}function ms(t){return Re.fromServerFormat(t.fieldPath)}function M0(t){return t instanceof he?function(n){if(n.op==="=="){if(Pv(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NAN"}};if(Rv(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pv(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NOT_NAN"}};if(Rv(n.value))return{unaryFilter:{field:Er(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(n.field),op:pb(n.op),value:n.value}}}(t):t instanceof me?function(n){const r=n.getFilters().map(i=>M0(i));return r.length===1?r[0]:{compositeFilter:{op:mb(n.op),filters:r}}}(t):H()}function gb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function F0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Fe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.ct=e}}function _b(t,e){let n;if(e.document)n=b0(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=Ki(e.noDocument.readTime);n=Se.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=K.fromSegments(e.unknownDocument.path),i=Ki(e.unknownDocument.version);n=Se.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new De(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function Gv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Fc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ol(s,o.key),fields:o.data.value.mapValue.fields,updateTime:to(s,o.version.toTimestamp()),createTime:to(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Gi(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:Gi(e.version)}}return r}function Fc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Gi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ki(t){const e=new De(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function Ii(t,e){const n=(e.baseMutations||[]).map(s=>wp(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>wp(t.ct,s)),i=De.fromMillis(e.localWriteTimeMs);return new $m(e.batchId,i,n,r)}function pa(t){const e=Ki(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ki(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Y(s.documents.length===1),Tt(_o(x0(s.documents[0])))}(t.query):function(s){return Tt(O0(s))}(t.query),new zn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function j0(t,e){const n=Gi(e.snapshotVersion),r=Gi(e.lastLimboFreeSnapshotVersion);let i;i=Vc(e.target)?D0(t.ct,e.target):Th(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:zi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Hm(t){const e=O0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Lc(e,e.limit,"L"):e}function Jd(t,e){return new Gm(e.largestBatchId,wp(t.ct,e.overlayMutation))}function Kv(t,e){const n=e.path.lastSegment();return[t,Et(e.path.popLast()),n]}function Wv(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Gi(r.readTime),documentKey:Et(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{getBundleMetadata(e,n){return Hv(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ki(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Hv(e).put(function(i){return{bundleId:i.id,createTime:Gi(Ke(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Qv(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Hm(s.bundledQuery),readTime:Ki(s.readTime)}}(r)})}saveNamedQuery(e,n){return Qv(e).put(function(i){return{name:i.name,readTime:Gi(Ke(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Hv(t){return et(t,"bundles")}function Qv(t){return et(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Ah(e,r)}getOverlay(e,n){return ea(e).get(Kv(this.userId,n)).next(r=>r?Jd(this.serializer,r):null)}getOverlays(e,n){const r=En();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Gm(n,o);i.push(this.ht(e,a))}),x.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Et(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ea(e).j("collectionPathOverlayIndex",a))}),x.waitFor(s)}getOverlaysForCollection(e,n,r){const i=En(),s=Et(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ea(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Jd(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=En();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ea(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const f=Jd(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return ea(e).put(function(i,s,o){const[a,u,c]=Kv(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:al(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ea(t){return et(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{Pt(e){return et(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(xe(e.integerValue));else if("doubleValue"in e){const r=xe(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),tl(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=er(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(tr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?HT(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Ih(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):H()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(xe(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),K.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}wi.vt=new wi;function Ib(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Yv(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Ib(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class wb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Yv(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Yv(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Eb{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Tb{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ta{constructor(){this.jt=new wb,this.Ht=new Eb(this.jt),this.Jt=new Tb(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ei(this.indexId,this.documentKey,this.arrayValue,r)}}function mr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Jv(t.arrayValue,e.arrayValue),n!==0?n:(n=Jv(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function Jv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.Xt=new _e((n,r)=>Re.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Y(e.collectionGroup===this.collectionId),this.nn)return!1;const n=cp(e);if(n!==void 0&&!this.sn(n))return!1;const r=yi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new _e(Re.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Ni(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Ni(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Ni(r.field,r.dir==="asc"?0:1)));return new Qs(Qs.UNKNOWN_ID,this.collectionId,n,Ys.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t){var e,n;if(Y(t instanceof he||t instanceof me),t instanceof he){if(t instanceof r0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>he.create(t.field,"==",s)))||[];return me.create(i,"or")}return t}const r=t.filters.map(i=>B0(i));return me.create(r,t.op)}function Ab(t){if(t.getFilters().length===0)return[];const e=Ap(B0(t));return Y(z0(e)),Ep(e)||Tp(e)?[e]:e.getFilters()}function Ep(t){return t instanceof he}function Tp(t){return t instanceof me&&Fm(t)}function z0(t){return Ep(t)||Tp(t)||function(n){if(n instanceof me&&pp(n)){for(const r of n.getFilters())if(!Ep(r)&&!Tp(r))return!1;return!0}return!1}(t)}function Ap(t){if(Y(t instanceof he||t instanceof me),t instanceof he)return t;if(t.filters.length===1)return Ap(t.filters[0]);const e=t.filters.map(r=>Ap(r));let n=me.create(e,t.op);return n=Uc(n),z0(n)?n:(Y(n instanceof me),Y(Xs(n)),Y(n.filters.length>1),n.filters.reduce((r,i)=>Qm(r,i)))}function Qm(t,e){let n;return Y(t instanceof he||t instanceof me),Y(e instanceof he||e instanceof me),n=t instanceof he?e instanceof he?function(i,s){return me.create([i,s],"and")}(t,e):Zv(t,e):e instanceof he?Zv(e,t):function(i,s){if(Y(i.filters.length>0&&s.filters.length>0),Xs(i)&&Xs(s))return e0(i,s.getFilters());const o=pp(i)?i:s,a=pp(i)?s:i,u=o.filters.map(c=>Qm(c,a));return me.create(u,"or")}(t,e),Uc(n)}function Zv(t,e){if(Xs(e))return e0(e,t.getFilters());{const n=e.filters.map(r=>Qm(t,r));return me.create(n,"or")}}function Uc(t){if(Y(t instanceof he||t instanceof me),t instanceof he)return t;const e=t.getFilters();if(e.length===1)return Uc(e[0]);if(XT(t))return t;const n=e.map(i=>Uc(i)),r=[];return n.forEach(i=>{i instanceof he?r.push(i):i instanceof me&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:me.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.un=new Ym}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Yt.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Ym{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Uint8Array(0);class Rb{constructor(e,n){this.databaseId=n,this.cn=new Ym,this.ln=new or(r=>zi(r),(r,i)=>El(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:Et(i)};return eI(e).put(s)}return x.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[VT(n),""],!1,!0);return eI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(wn(o.parent))}return r})}addFieldIndex(e,n){const r=na(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=cs(e);return s.next(a=>{o.put(Wv(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=na(e),i=cs(e),s=us(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=na(e),r=us(e),i=cs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return x.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Xv(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=us(e);let i=!0;const s=new Map;return x.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return x.forEach(s,(u,c)=>{j("IndexedDbIndexManager",`Using index ${function(I){return`id=${I.indexId}|cg=${I.collectionGroup}|f=${I.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${zi(n)}`);const d=function(I,V){const F=cp(V);if(F===void 0)return null;for(const L of Oc(I,F.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),f=function(I,V){const F=new Map;for(const L of yi(V))for(const w of Oc(I,L.fieldPath))switch(w.op){case"==":case"in":F.set(L.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return F.set(L.fieldPath.canonicalString(),w.value),Array.from(F.values())}return null}(c,u),m=function(I,V){const F=[];let L=!0;for(const w of yi(V)){const g=w.kind===0?bv(I,w.fieldPath,I.startAt):Dv(I,w.fieldPath,I.startAt);F.push(g.value),L&&(L=g.inclusive)}return new Wr(F,L)}(c,u),y=function(I,V){const F=[];let L=!0;for(const w of yi(V)){const g=w.kind===0?Dv(I,w.fieldPath,I.endAt):bv(I,w.fieldPath,I.endAt);F.push(g.value),L&&(L=g.inclusive)}return new Wr(F,L)}(c,u),A=this.In(u,c,m),P=this.In(u,c,y),D=this.Tn(u,c,f),T=this.En(u.indexId,d,A,m.inclusive,P,y.inclusive,D);return x.forEach(T,v=>r.G(v,n.limit).next(I=>{I.forEach(V=>{const F=K.fromSegments(V.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return x.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=Ab(me.create(e.filters,"and")).map(r=>gp(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let f=0;f<u;++f){const m=n?this.dn(n[f/c]):Au,y=this.An(e,m,r[f%c],i),A=this.Rn(e,m,s[f%c],o),P=a.map(D=>this.An(e,m,D,!0));d.push(...this.createRange(y,A,P))}return d}An(e,n,r,i){const s=new Ei(e,K.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Ei(e,K.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Xv(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return x.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new _e(Re.comparator),d=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new ta;for(const i of yi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);wi.vt.It(s,o)}return r.zt()}dn(e){const n=new ta;return wi.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new ta;return wi.vt.It(Bi(this.databaseId,n),r.Yt(function(s){const o=yi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new ta);let s=0;for(const o of yi(e)){const a=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&il(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);wi.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ta;u.seed(a.zt()),wi.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof he&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=na(e),i=cs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return x.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const m=f?new Ys(f.sequenceNumber,new Yt(Ki(f.readTime),new K(wn(f.documentKey)),f.largestBatchId)):Ys.empty(),y=d.fields.map(([A,P])=>new Ni(Re.fromServerFormat(A),P));return new Qs(d.indexId,d.collectionGroup,y,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:re(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=na(e),s=cs(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>x.forEach(a,u=>s.put(Wv(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return x.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?x.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),x.forEach(a,u=>this.wn(e,i,u).next(c=>{const d=this.Sn(s,u);return c.isEqual(d)?x.resolve():this.bn(e,s,u,c,d)}))))})}Dn(e,n,r,i){return us(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return us(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=us(e);let s=new _e(mr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Ei(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new _e(mr);const i=this.Vn(n,e);if(i==null)return r;const s=cp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(il(o))for(const a of o.arrayValue.values||[])r=r.add(new Ei(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Ei(n.indexId,e.key,Au,i));return r}bn(e,n,r,i,s){j("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,f,m){const y=u.getIterator(),A=c.getIterator();let P=ls(y),D=ls(A);for(;P||D;){let T=!1,v=!1;if(P&&D){const I=d(P,D);I<0?v=!0:I>0&&(T=!0)}else P!=null?v=!0:T=!0;T?(f(D),D=ls(A)):v?(m(P),P=ls(y)):(P=ls(y),D=ls(A))}}(i,s,mr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),x.waitFor(o)}yn(e){let n=1;return cs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>mr(o,a)).filter((o,a,u)=>!a||mr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=mr(o,e),u=mr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Au,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Au,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,n){return mr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(tI)}getMinOffset(e,n){return x.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||H())).next(tI)}}function eI(t){return et(t,"collectionParents")}function us(t){return et(t,"indexEntries")}function na(t){return et(t,"indexConfiguration")}function cs(t){return et(t,"indexState")}function tI(t){Y(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Om(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Yt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(u.next(()=>{Y(a===1)}));const c=[];for(const d of n.mutations){const f=BT(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return x.waitFor(s).next(()=>c)}function jc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);class Sh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Y(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Sh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return gr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=gs(e),o=gr(e);return o.add({}).next(a=>{Y(typeof a=="number");const u=new $m(a,n,r,i),c=function(y,A,P){const D=P.baseMutations.map(v=>al(y.ct,v)),T=P.mutations.map(v=>al(y.ct,v));return{userId:A,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:D,mutations:T}}(this.serializer,this.userId,u),d=[];let f=new _e((m,y)=>re(m.canonicalString(),y.canonicalString()));for(const m of i){const y=BT(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(y,fN))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),x.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return gr(e).get(n).next(r=>r?(Y(r.userId===this.userId),Ii(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?x.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return gr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(Y(a.batchId>=r),s=Ii(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return gr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return gr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Ii(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Gu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return gs(e).J({range:i},(o,a,u)=>{const[c,d,f]=o,m=wn(d);if(c===this.userId&&n.path.isEqual(m))return gr(e).get(f).next(y=>{if(!y)throw H();Y(y.userId===this.userId),s.push(Ii(this.serializer,y))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(re);const i=[];return n.forEach(s=>{const o=Gu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=gs(e).J({range:a},(c,d,f)=>{const[m,y,A]=c,P=wn(y);m===this.userId&&s.path.isEqual(P)?r=r.add(A):f.done()});i.push(u)}),x.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Gu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new _e(re);return gs(e).J({range:o},(u,c,d)=>{const[f,m,y]=u,A=wn(m);f===this.userId&&r.isPrefixOf(A)?A.length===i&&(a=a.add(y)):d.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(gr(e).get(s).next(o=>{if(o===null)throw H();Y(o.userId===this.userId),r.push(Ii(this.serializer,o))}))}),x.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return $0(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),x.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return x.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return gs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=wn(s[1]);i.push(u)}else a.done()}).next(()=>{Y(i.length===0)})})}containsKey(e,n){return q0(e,this.userId,n)}Nn(e){return G0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function q0(t,e,n){const r=Gu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return gs(t).J({range:s,H:!0},(a,u,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function gr(t){return et(t,"mutations")}function gs(t){return et(t,"documentMutations")}function G0(t){return et(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Wi(0)}static kn(){return new Wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Wi(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>J.fromTimestamp(new De(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>hs(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Y(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return hs(e).J((o,a)=>{const u=pa(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>x.waitFor(s)).next(()=>i)}forEachTarget(e,n){return hs(e).J((r,i)=>{const s=pa(i);n(s)})}qn(e){return rI(e).get("targetGlobalKey").next(n=>(Y(n!==null),n))}Qn(e,n){return rI(e).put("targetGlobalKey",n)}Kn(e,n){return hs(e).put(j0(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=zi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return hs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=pa(a);El(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Tr(e);return n.forEach(o=>{const a=Et(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),x.waitFor(i)}removeMatchingKeys(e,n,r){const i=Tr(e);return x.forEach(n,s=>{const o=Et(s.path);return x.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Tr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Tr(e);let s=se();return i.J({range:r,H:!0},(o,a,u)=>{const c=wn(o[1]),d=new K(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=Et(n.path),i=IDBKeyRange.bound([r],[VT(r)],!1,!0);let s=0;return Tr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return hs(e).get(n).next(r=>r?pa(r):null)}}function hs(t){return et(t,"targets")}function rI(t){return et(t,"targetGlobal")}function Tr(t){return et(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class Cb{constructor(e){this.Un=e,this.buffer=new _e(iI),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();iI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class K0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){j("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ni(n)?j("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ti(n)}await this.Hn(3e5)})}}class kb{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(Ot.oe);const r=new Cb(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(nI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nI):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),fs()<=ue.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function W0(t,e){return new kb(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.db=e,this.garbageCollector=W0(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Su(e,r)}removeReference(e,n,r){return Su(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Su(e,n)}nr(e,n){return function(i,s){let o=!1;return G0(i).Y(a=>q0(i,a,s).next(u=>(u&&(o=!0),x.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),Tr(e).delete(function(f){return[0,Et(f.path)]}(o))))});i.push(u)}}).next(()=>x.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Su(e,n)}tr(e,n){const r=Tr(e);let i,s=Ot.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Ot.oe&&n(new K(wn(i)),s),s=c,i=u):s=Ot.oe}).next(()=>{s!==Ot.oe&&n(new K(wn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Su(t,e){return Tr(t).put(function(r,i){return{targetId:0,path:Et(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.changes=new or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return pi(e).put(r)}removeEntry(e,n,r){return pi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Fc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Se.newInvalidDocument(n);return pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ra(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Se.newInvalidDocument(n)};return pi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ra(n))},(i,s)=>{r={document:this.ir(n,s),size:jc(s)}}).next(()=>r)}getEntries(e,n){let r=Mt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Mt(),i=new we(K.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,jc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return x.resolve();let i=new _e(aI);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(ra(i.first()),ra(i.last())),o=i.getIterator();let a=o.getNext();return pi(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&aI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(ra(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Fc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return pi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Mt();for(const f of c){const m=this.ir(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Al(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Mt();const o=oI(n,r),a=oI(n,Yt.max());return pi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const f=this.ir(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new bb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return sI(e).get("remoteDocumentGlobalKey").next(n=>(Y(!!n),n))}rr(e,n){return sI(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=_b(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Se.newInvalidDocument(e)}}function Q0(t){return new Nb(t)}class bb extends H0{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new or(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new _e((s,o)=>re(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Gv(this.cr.serializer,o);i=i.add(s.path.popLast());const c=jc(u);r+=c-a.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Gv(this.cr.serializer,o.convertToNoDocument(J.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),x.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function sI(t){return et(t,"remoteDocumentGlobal")}function pi(t){return et(t,"remoteDocumentsV14")}function ra(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function oI(t,e){const n=e.documentKey.path.toArray();return[t,Fc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function aI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=re(n[s],r[s]),i)return i;return i=re(n.length,r.length),i||(i=re(n[n.length-2],r[r.length-2]),i||re(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xa(r.mutation,i,Lt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=En();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=da();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=En();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mt();const o=ka(),a=function(){return ka()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ar)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),xa(d.mutation,c,d.mutation.getFieldMask(),De.now())):o.set(c.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new Db(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ka();let i=new we((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Lt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||se()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=d0();d.forEach(m=>{if(!s.has(m)){const y=v0(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Um(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(En());let a=-1,u=s;return o.next(c=>x.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:a,changes:h0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=da();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=da();return this.indexManager.getCollectionParents(e,s).next(a=>x.forEach(a,u=>{const c=function(f,m){return new sr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Se.newInvalidDocument(d)))});let a=da();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&xa(d.mutation,c,Lt.empty(),De.now()),Al(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ke(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Hm(i.bundledQuery),readTime:Ke(i.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.overlays=new we(K.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=En();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=En(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=En(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=En(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return x.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gm(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Tr=new _e(tt.Er),this.dr=new _e(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ce([])),r=new tt(n,e),i=new tt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ce([])),r=new tt(n,e),i=new tt(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||re(e.wr,n.wr)}static Ar(e,n){return re(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _e(tt.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $m(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new tt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(re);return n.forEach(i=>{const s=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new tt(new K(s),0);let a=new _e(re);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),x.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,i=>{const s=new tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),i=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.Mr=e,this.docs=function(){return new we(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Se.newInvalidDocument(n))}getEntries(e,n){let r=Mt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Se.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mt();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Om(LT(d),r)<=0||(i.has(d.key)||Al(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ub(this)}getSize(e){return x.resolve(this.size)}}class Ub extends H0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.persistence=e,this.Nr=new or(n=>zi(n),El),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jm,this.targetCount=0,this.kr=Wi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Wi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ot(0),this.Kr=!1,this.Kr=!0,this.$r=new Lb,this.referenceDelegate=e(this),this.Ur=new jb(this),this.indexManager=new Sb,this.remoteDocumentCache=function(i){return new Fb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new U0(n),this.Gr=new Vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ob,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Mb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new Bb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Bb extends FT{constructor(e){super(),this.currentSequenceNumber=e}}class Rh{constructor(e){this.persistence=e,this.Jr=new Jm,this.Yr=null}static Zr(e){return new Rh(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class Bc{constructor(e,n){this.persistence=e,this.ti=new or(r=>Et(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=W0(this,n)}static Zr(e,n){return new Bc(e,n)}zr(){}jr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return x.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?x.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),x.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wu(e.data.value)),n}nr(e,n,r){return x.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.serializer=e}O(e,n,r,i){const s=new _h("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wv,{unique:!0}),u.createObjectStore("documentMutations")}(e),lI(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=x.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),lI(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wv,{unique:!0});const f=c.store("mutations"),m=d.map(y=>f.put(y));return x.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:SN});c.createIndex("collectionPathOverlayIndex",RN,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",PN,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:pN});c.createIndex("documentKeyIndex",mN),c.createIndex("collectionGroupIndex",gN)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:wN}).createIndex("sequenceNumberIndex",EN,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:TN}).createIndex("documentKeyIndex",AN,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=jc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>x.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>x.forEach(a,u=>{Y(u.userId===s.userId);const c=Ii(this.serializer,u);return $0(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ce(o),c=function(f){return[0,Et(f)]}(u);s.push(n.get(c).next(d=>d?x.resolve():(f=>n.put({targetId:0,path:Et(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>x.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:IN});const r=n.store("collectionParents"),i=new Ym,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Et(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ce(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=wn(a);return s(d.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=pa(i),o=j0(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new K(ce.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>x.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=Q0(this.serializer),s=new Xm(Rh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:se();Ii(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),x.forEach(a,(u,c)=>{const d=new rt(c),f=Ah.lt(this.serializer,d),m=s.getIndexManager(d),y=Sh.lt(d,this.serializer,m,s.referenceDelegate);return new Y0(i,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new hp(n,Ot.oe),u).next()})})}}function lI(t){t.createObjectStore("targetDocuments",{keyPath:yN}).createIndex("documentTargetsIndex",vN,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",_N,{unique:!0}),t.createObjectStore("targetGlobal")}const Xd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Zm{constructor(e,n,r,i,s,o,a,u,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Zm.D())throw new U(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new xb(this,i),this.Ai=n+"main",this.serializer=new U0(u),this.Ri=new Rn(this.Ai,this.hi,new zb(this.serializer)),this.$r=new vb,this.Ur=new Pb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Q0(this.serializer),this.Gr=new yb,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&Ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,Xd);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ot(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ru(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(ni(e))return j("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return j("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ia(e).get("owner").next(n=>x.resolve(this.vi(n)))}Ci(e){return Ru(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=et(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return x.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?x.resolve(!0):ia(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,Xd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ru(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&j("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new hp(e,Ot.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Ru(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Sh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Rb(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Ah.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){j("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?xN:u===16?kN:u===15?Mm:u===14?qT:u===13?$T:u===12?CN:u===11?zT:void H()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new hp(a,this.Qr?this.Qr.next():Ot.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw Ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new U(O.FAILED_PRECONDITION,MT);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return ia(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new U(O.FAILED_PRECONDITION,Xd)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ia(e).put("owner",n)}static D(){return Rn.D()}bi(e){const n=ia(e);return n.get("owner").next(r=>this.vi(r)?(j("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):x.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;yT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return j("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ge("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ge("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ia(t){return et(t,"owner")}function Ru(t){return et(t,"clientMetadata")}function eg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new tg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yT()?8:UT(Ze())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $b;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(fs()<=ue.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(fs()<=ue.DEBUG&&j("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fs()<=ue.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(n))):x.resolve())}Yi(e,n){if(Vv(n))return x.resolve(null);let r=Tt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Lc(n,null,"F"),r=Tt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Lc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Vv(n)||i.isEqual(J.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?x.resolve(null):(fs()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ps(n)),this.rs(e,o,n,OT(i,-1)).next(a=>a))})}ts(e,n){let r=new _e(u0(e));return n.forEach((i,s)=>{Al(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return fs()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",ps(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yt.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(re),this._s=new or(s=>zi(s),El),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function X0(t,e,n,r){return new qb(t,e,n,r)}async function Z0(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=se();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function Gb(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let y=x.resolve();return m.forEach(A=>{y=y.next(()=>d.getEntry(u,A)).next(P=>{const D=c.docVersions.get(A);Y(D!==null),P.version.compareTo(D)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function eA(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Kb(t,e){const n=q(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Fe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(P,D,T){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,y,d)&&a.push(n.Ur.updateTargetData(s,y))});let u=Mt(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(tA(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(J.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function tA(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Wb(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function no(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ro(t,e,n){const r=q(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ni(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function zc(t,e,n){const r=q(t);let i=J.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=q(u),m=f._s.get(d);return m!==void 0?x.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,Tt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:se())).next(a=>(iA(r,l0(e),a),{documents:a,Ts:s})))}function nA(t,e){const n=q(t),r=q(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function rA(t,e){const n=q(t),r=n.us.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,OT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(iA(n,e,i),i))}function iA(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function Hb(t,e,n,r){const i=q(t);let s=se(),o=Mt();for(const c of n){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await no(i,function(d){return Tt(_o(ce.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>tA(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function Qb(t,e,n=se()){const r=await no(t,Tt(Hm(e.bundledQuery))),i=q(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Fe.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function uI(t,e){return`firestore_clients_${t}_${e}`}function cI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Zd(t,e){return`firestore_targets_${t}_${e}`}class $c{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new U(i.error.code,i.error.message))),o?new $c(e,n,i.state,s):(Ge("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Na{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new U(r.error.code,r.error.message))),s?new Na(e,r.state,i):(Ge("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=jm();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=jT(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new qc(e,s):(Ge("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ng{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ng(n.clientId,n.onlineState):(Ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sp{constructor(){this.activeTargetIds=jm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ef{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new we(re),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=uI(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Sp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(uI(this.persistenceKey,r));if(i){const s=qc.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Zd(this.persistenceKey,e));if(i){const s=Na.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zd(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return j("SharedClientState","READ",e,n),n}setItem(e,n){j("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){j("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(j("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void Ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=Ot.oe;if(s!=null)try{const a=JSON.parse(s);Y(typeof a=="number"),o=a}catch(a){Ge("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ot.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new $c(this.currentUser,e,n,r),s=cI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=cI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=Zd(this.persistenceKey,e),s=new Na(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return qc.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return $c.Rs(new rt(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return Na.Rs(i,n)}Ls(e){return ng.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);j("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=jm();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class sA{constructor(){this.so=new Sp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Sp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu=null;function tf(){return Pu===null?Pu=function(){return 268435456+Math.round(2147483648*Math.random())}():Pu++,"0x"+Pu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class Zb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=tf(),u=this.xo(n,r.toUriEncodedString());j("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(j("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Qt("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Jb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=tf();return new Promise((o,a)=>{const u=new RT;u.setWithCredentials(!0),u.listenOnce(PT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case qu.NO_ERROR:const d=u.getResponseJson();j(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case qu.TIMEOUT:j(vt,`RPC '${e}' ${s} timed out`),a(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case qu.HTTP_ERROR:const f=u.getStatus();if(j(vt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const A=function(D){const T=D.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(T)>=0?T:O.UNKNOWN}(y.status);a(new U(A,y.message))}else a(new U(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new U(O.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{j(vt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);j(vt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=tf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xT(),a=kT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");j(vt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,y=!1;const A=new Xb({Io:D=>{y?j(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(j(vt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),j(vt,`RPC '${e}' stream ${i} sending:`,D),f.send(D))},To:()=>f.close()}),P=(D,T,v)=>{D.listen(T,I=>{try{v(I)}catch(V){setTimeout(()=>{throw V},0)}})};return P(f,ha.EventType.OPEN,()=>{y||(j(vt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),P(f,ha.EventType.CLOSE,()=>{y||(y=!0,j(vt,`RPC '${e}' stream ${i} transport closed`),A.So())}),P(f,ha.EventType.ERROR,D=>{y||(y=!0,Qt(vt,`RPC '${e}' stream ${i} transport errored:`,D),A.So(new U(O.UNAVAILABLE,"The operation could not be completed")))}),P(f,ha.EventType.MESSAGE,D=>{var T;if(!y){const v=D.data[0];Y(!!v);const I=v,V=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(V){j(vt,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let L=function(E){const S=We[E];if(S!==void 0)return T0(S)}(F),w=V.message;L===void 0&&(L=O.INTERNAL,w="Unknown error status: "+F+" with message "+V.message),y=!0,A.So(new U(L,w)),f.close()}else j(vt,`RPC '${e}' stream ${i} received:`,v),A.bo(v)}}),P(a,CT.STAT_EVENT,D=>{D.stat===up.PROXY?j(vt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===up.NOPROXY&&j(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof window<"u"?window:null}function Ju(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t){return new ab(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new rg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Ge(n.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e1 extends aA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=cb(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ke(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ip(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Vc(u)?{documents:D0(s,u)}:{query:Th(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=P0(s,o.resumeToken);const c=yp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=to(s,o.snapshotVersion.toTimestamp());const c=yp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=db(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ip(this.serializer),n.removeTarget=e,this.a_(n)}}class t1 extends aA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=hb(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ip(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>al(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,vp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,vp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class r1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ge(n),this.D_=!1):j("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ii(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=q(u);c.L_.add(4),await Io(c),c.q_.set("Unknown"),c.L_.delete(4),await kl(c)}(this))})}),this.q_=new r1(r,i)}}async function kl(t){if(ii(t))for(const e of t.B_)await e(!0)}async function Io(t){for(const e of t.B_)await e(!1)}function Ph(t,e){const n=q(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),og(n)?sg(n):Eo(n).r_()&&ig(n,e))}function io(t,e){const n=q(t),r=Eo(n);n.N_.delete(e),r.r_()&&lA(n,e),n.N_.size===0&&(r.r_()?r.o_():ii(n)&&n.q_.set("Unknown"))}function ig(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eo(t).A_(e)}function lA(t,e){t.Q_.xe(e),Eo(t).R_(e)}function sg(t){t.Q_=new rb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Eo(t).start(),t.q_.v_()}function og(t){return ii(t)&&!Eo(t).n_()&&t.N_.size>0}function ii(t){return q(t).L_.size===0}function uA(t){t.Q_=void 0}async function s1(t){t.q_.set("Online")}async function o1(t){t.N_.forEach((e,n)=>{ig(t,e)})}async function a1(t,e){uA(t),og(t)?(t.q_.M_(e),sg(t)):t.q_.set("Unknown")}async function l1(t,e,n){if(t.q_.set("Online"),e instanceof R0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gc(t,r)}else if(e instanceof Yu?t.Q_.Ke(e):e instanceof S0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await eA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(Fe.EMPTY_BYTE_STRING,d.snapshotVersion)),lA(s,u);const f=new zn(d.target,u,c,d.sequenceNumber);ig(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Gc(t,r)}}async function Gc(t,e,n){if(!ni(e))throw e;t.L_.add(1),await Io(t),t.q_.set("Offline"),n||(n=()=>eA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await kl(t)})}function cA(t,e){return e().catch(n=>Gc(t,n,e))}async function wo(t){const e=q(t),n=Hr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;u1(e);)try{const i=await Wb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,c1(e,i)}catch(i){await Gc(e,i)}hA(e)&&dA(e)}function u1(t){return ii(t)&&t.O_.length<10}function c1(t,e){t.O_.push(e);const n=Hr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function hA(t){return ii(t)&&!Hr(t).n_()&&t.O_.length>0}function dA(t){Hr(t).start()}async function h1(t){Hr(t).p_()}async function d1(t){const e=Hr(t);for(const n of t.O_)e.m_(n.mutations)}async function f1(t,e,n){const r=t.O_.shift(),i=qm.from(r,e,n);await cA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wo(t)}async function p1(t,e){e&&Hr(t).V_&&await async function(r,i){if(function(o){return E0(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();Hr(r).s_(),await cA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wo(r)}}(t,e),hA(t)&&dA(t)}async function dI(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=ii(n);n.L_.add(3),await Io(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await kl(n)}async function Rp(t,e){const n=q(t);e?(n.L_.delete(2),await kl(n)):e||(n.L_.add(2),await Io(n),n.q_.set("Unknown"))}function Eo(t){return t.K_||(t.K_=function(n,r,i){const s=q(n);return s.w_(),new e1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:s1.bind(null,t),Ro:o1.bind(null,t),mo:a1.bind(null,t),d_:l1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),og(t)?sg(t):t.q_.set("Unknown")):(await t.K_.stop(),uA(t))})),t.K_}function Hr(t){return t.U_||(t.U_=function(n,r,i){const s=q(n);return s.w_(),new t1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:h1.bind(null,t),mo:p1.bind(null,t),f_:d1.bind(null,t),g_:f1.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wo(t)):(await t.U_.stop(),t.O_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ag(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function To(t,e){if(Ge("AsyncQueue",`${e}: ${t}`),ni(t))return new U(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=da(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.W_=new we(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class so{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new so(e,n,Ls.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class g1{constructor(){this.queries=pI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=q(n),s=i.queries;i.queries=pI(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new U(O.ABORTED,"Firestore shutting down"))}}function pI(){return new or(t=>a0(t),Tl)}async function lg(t,e){const n=q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new m1,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=To(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&cg(n)}async function ug(t,e){const n=q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _1(t,e){const n=q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&cg(n)}function y1(t,e,n){const r=q(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function cg(t){t.Y_.forEach(e=>{e.next()})}var Pp,mI;(mI=Pp||(Pp={})).ea="default",mI.Cache="cache";class hg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new so(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=so.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Pp.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.serializer=e}Es(e){return Pn(this.serializer,e)}ds(e){return e.metadata.exists?b0(this.serializer,e.document,!1):Se.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Ke(e)}}class I1{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=fA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=ce.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new gI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||se()).add(s);n.set(o,a)}}return n}async complete(){const e=await Hb(this.localStore,new gI(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await Qb(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function fA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.key=e}}class mA{constructor(e){this.key=e}}class gA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=u0(e),this.Ra=new Ls(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new fI,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),y=Al(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?A!==P&&(r.track({type:3,doc:y}),D=!0):this.ga(m,y)||(r.track({type:2,doc:y}),D=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(a=!0)),D&&(y?(o=o.add(y),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(y,A){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return P(y)-P(A)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new so(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new mA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new pA(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return so.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class w1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class E1{constructor(e){this.key=e,this.va=!1}}class T1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new or(a=>a0(a),Tl),this.Ma=new Map,this.xa=new Set,this.Oa=new we(K.comparator),this.Na=new Map,this.La=new Jm,this.Ba={},this.ka=new Map,this.qa=Wi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function A1(t,e,n=!0){const r=Ch(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await _A(r,e,n,!0),i}async function S1(t,e){const n=Ch(t);await _A(n,e,!0,!1)}async function _A(t,e,n,r){const i=await no(t.localStore,Tt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await dg(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ph(t.remoteStore,i),a}async function dg(t,e,n,r,i){t.Ka=(f,m,y)=>async function(P,D,T,v){let I=D.view.ma(T);I.ns&&(I=await zc(P.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,I)));const V=v&&v.targetChanges.get(D.targetId),F=v&&v.targetMismatches.get(D.targetId)!=null,L=D.view.applyChanges(I,P.isPrimaryClient,V,F);return Cp(P,D.targetId,L.wa),L.snapshot}(t,f,m,y);const s=await zc(t.localStore,e,!0),o=new gA(e,s.Ts),a=o.ma(s.documents),u=Pl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Cp(t,n,c.wa);const d=new w1(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function R1(t,e,n){const r=q(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Tl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ro(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&io(r.remoteStore,i.targetId),oo(r,i.targetId)}).catch(ti)):(oo(r,i.targetId),await ro(r.localStore,i.targetId,!0))}async function P1(t,e){const n=q(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),io(n.remoteStore,r.targetId))}async function C1(t,e,n){const r=gg(t);try{const i=await function(o,a){const u=q(o),c=De.now(),d=a.reduce((y,A)=>y.add(A.key),se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let A=Mt(),P=se();return u.cs.getEntries(y,d).next(D=>{A=D,A.forEach((T,v)=>{v.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,A)).next(D=>{f=D;const T=[];for(const v of a){const I=eb(v,f.get(v.key).overlayedDocument);I!=null&&T.push(new ar(v.key,I,YT(I.value.mapValue),be.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,T,a)}).next(D=>{m=D;const T=D.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(y,D.batchId,T)})}).then(()=>({batchId:m.batchId,changes:h0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new we(re)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await lr(r,i.changes),await wo(r.remoteStore)}catch(i){const s=To(i,"Failed to persist write");n.reject(s)}}async function yA(t,e){const n=q(t);try{const r=await Kb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Y(o.va):i.removedDocuments.size>0&&(Y(o.va),o.va=!1))}),await lr(n,r,e)}catch(r){await ti(r)}}function _I(t,e,n){const r=q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=q(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&cg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function k1(t,e,n){const r=q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(K.comparator);o=o.insert(s,Se.newNoDocument(s,J.min()));const a=se().add(s),u=new Rl(J.min(),new Map,new we(re),o,a);await yA(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),mg(r)}else await ro(r.localStore,e,!1).then(()=>oo(r,e,n)).catch(ti)}async function x1(t,e){const n=q(t),r=e.batch.batchId;try{const i=await Gb(n.localStore,e);pg(n,r,null),fg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lr(n,i)}catch(i){await ti(i)}}async function N1(t,e,n){const r=q(t);try{const i=await function(o,a){const u=q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Y(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);pg(r,e,n),fg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lr(r,i)}catch(i){await ti(i)}}async function b1(t,e){const n=q(t);ii(n.remoteStore)||j("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=q(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=To(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function fg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function pg(t,e,n){const r=q(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function oo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||vA(t,r)})}function vA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(io(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),mg(t))}function Cp(t,e,n){for(const r of n)r instanceof pA?(t.La.addReference(r.key,e),D1(t,r)):r instanceof mA?(j("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||vA(t,r.key)):H()}function D1(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(j("SyncEngine","New document in limbo: "+n),t.xa.add(r),mg(t))}function mg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ce.fromString(e)),r=t.qa.next();t.Na.set(r,new E1(n)),t.Oa=t.Oa.insert(n,r),Ph(t.remoteStore,new zn(Tt(_o(n.path)),r,"TargetPurposeLimboResolution",Ot.oe))}}async function lr(t,e,n){const r=q(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=tg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=q(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(c,m=>x.forEach(m.$i,y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>x.forEach(m.Ui,y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!ni(f))throw f;j("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=d.os.get(m),A=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function V1(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Z0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new U(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(n,r.hs)}}function O1(t,e){const n=q(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function L1(t,e){const n=q(t),r=await zc(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&Cp(n,e.targetId,i.wa),i}async function M1(t,e){const n=q(t);return rA(n.localStore,e).then(r=>lr(n,r))}async function F1(t,e,n,r){const i=q(t),s=await function(a,u){const c=q(a),d=q(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,u).next(m=>m?c.localDocuments.getDocuments(f,m):x.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await wo(i.remoteStore):n==="acknowledged"||n==="rejected"?(pg(i,e,r||null),fg(i,e),function(a,u){q(q(a).mutationQueue).On(u)}(i.localStore,e)):H(),await lr(i,s)):j("SyncEngine","Cannot apply mutation batch with id: "+e)}async function U1(t,e){const n=q(t);if(Ch(n),gg(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await yI(n,r.toArray());n.Qa=!0,await Rp(n.remoteStore,!0);for(const s of i)Ph(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(oo(n,o),ro(n.localStore,o,!0))),io(n.remoteStore,o)}),await i,await yI(n,r),function(o){const a=q(o);a.Na.forEach((u,c)=>{io(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new we(K.comparator)}(n),n.Qa=!1,await Rp(n.remoteStore,!1)}}async function yI(t,e,n){const r=q(t),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await no(r.localStore,Tt(u[0]));for(const c of u){const d=r.Fa.get(c),f=await L1(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await nA(r.localStore,o);a=await no(r.localStore,c),await dg(r,IA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function IA(t){return i0(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function j1(t){return function(n){return q(q(n).persistence).Qi()}(q(t).localStore)}async function B1(t,e,n,r){const i=q(t);if(i.Qa)return void j("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await rA(i.localStore,l0(s[0])),a=Rl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Fe.EMPTY_BYTE_STRING);await lr(i,o,a);break}case"rejected":await ro(i.localStore,e,!0),oo(i,e,r);break;default:H()}}async function z1(t,e,n){const r=Ch(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){j("SyncEngine","Adding an already active target "+i);continue}const s=await nA(r.localStore,i),o=await no(r.localStore,s);await dg(r,IA(s),o.targetId,!1,o.resumeToken),Ph(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await ro(r.localStore,i,!1).then(()=>{io(r.remoteStore,i),oo(r,i)}).catch(ti)}}function Ch(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k1.bind(null,e),e.Ca.d_=_1.bind(null,e.eventManager),e.Ca.$a=y1.bind(null,e.eventManager),e}function gg(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N1.bind(null,e),e}function $1(t,e,n){const r=q(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(y,A){const P=q(y),D=Ke(A.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",T=>P.Gr.getBundleMetadata(T,A.id)).then(T=>!!T&&T.createTime.compareTo(D)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(fA(u));const c=new I1(u,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const f=await c.complete();return await lr(s,f.Ia,void 0),await function(y,A){const P=q(y);return P.persistence.runTransaction("Save bundle","readwrite",D=>P.Gr.saveBundleMetadata(D,A))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return Qt("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return X0(this.persistence,new J0,e.initialUser,this.serializer)}Ga(e){return new Xm(Rh.Zr,this.serializer)}Wa(e){return new sA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qr.provider={build:()=>new Qr};class q1 extends Qr{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Y(this.persistence.referenceDelegate instanceof Bc);const r=this.persistence.referenceDelegate.garbageCollector;return new K0(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Xm(r=>Bc.Zr(r,n),this.serializer)}}class _g extends Qr{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await gg(this.Ja.syncEngine),await wo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return X0(this.persistence,new J0,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new K0(r,e.asyncQueue,n)}Ha(e,n){const r=new hN(n,this.persistence);return new cN(e.asyncQueue,r)}Ga(e){const n=eg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Zm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,oA(),Ju(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new sA}}class wA extends _g{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof ef&&(this.sharedClientState.syncEngine={no:F1.bind(null,n),ro:B1.bind(null,n),io:z1.bind(null,n),Qi:j1.bind(null,n),eo:M1.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await U1(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=oA();if(!ef.D(n))throw new U(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=eg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ef(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Yr{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_I(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V1.bind(null,this.syncEngine),await Rp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new g1}()}createDatastore(e){const n=Cl(e.databaseInfo.databaseId),r=function(s){return new Zb(s)}(e.databaseInfo);return function(s,o,a,u){return new n1(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new i1(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>_I(this.syncEngine,n,0),function(){return hI.D()?new hI:new Yb}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new T1(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=q(i);j("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Io(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yr.provider={build:()=>new Yr};function vI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new st,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new v1(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=q(i),a={documents:s.map(f=>ol(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ce.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=ub(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());Y(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new vo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=K.fromPath(r);this.mutations.push(new zm(i,this.precondition(i)))}),await async function(r,i){const s=q(r),o={writes:i.map(a=>al(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ce.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw H();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new U(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?be.exists(!1):be.updateTime(n):be.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new U(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return be.updateTime(n)}return be.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new rg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new K1(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!wl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!E0(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=Vm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=To(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nf(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Z0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function II(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yg(t);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dI(e.remoteStore,i)),t._onlineComponents=e}async function yg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await nf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Qt("Error using user provided cache. Falling back to memory cache: "+n),await nf(t,new Qr)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await nf(t,new Qr);return t._offlineComponents}async function xh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await II(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await II(t,new Yr))),t._onlineComponents}function EA(t){return yg(t).then(e=>e.persistence)}function Ao(t){return yg(t).then(e=>e.localStore)}function TA(t){return xh(t).then(e=>e.remoteStore)}function vg(t){return xh(t).then(e=>e.syncEngine)}function AA(t){return xh(t).then(e=>e.datastore)}async function ao(t){const e=await xh(t),n=e.eventManager;return n.onListen=A1.bind(null,e.syncEngine),n.onUnlisten=R1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=S1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=P1.bind(null,e.syncEngine),n}function Q1(t){return t.asyncQueue.enqueue(async()=>{const e=await EA(t),n=await TA(t);return e.setNetworkEnabled(!0),function(i){const s=q(i);return s.L_.delete(0),kl(s)}(n)})}function Y1(t){return t.asyncQueue.enqueue(async()=>{const e=await EA(t),n=await TA(t);return e.setNetworkEnabled(!1),async function(i){const s=q(i);s.L_.add(0),await Io(s),s.q_.set("Offline")}(n)})}function J1(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=q(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new U(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=To(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Ao(t),e,n)),n.promise}function SA(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new kh({next:m=>{d.Za(),o.enqueueAndForget(()=>ug(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new U(O.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new hg(_o(a.path),d,{includeMetadataChanges:!0,_a:!0});return lg(s,f)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function X1(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await zc(i,s,!0),u=new gA(s,a.Ts),c=u.ma(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=To(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Ao(t),e,n)),n.promise}function RA(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new kh({next:m=>{d.Za(),o.enqueueAndForget(()=>ug(s,f)),m.fromCache&&u.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new hg(a,d,{includeMetadataChanges:!0,_a:!0});return lg(s,f)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function Z1(t,e,n){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await AA(t);r.resolve(async function(o,a,u){var c;const d=q(o),{request:f,ut:m,parent:y}=V0(d.serializer,s0(a),u);d.connection.Fo||delete f.parent;const A=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,y,f,1)).filter(D=>!!D.result);Y(A.length===1);const P=(c=A[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(P).reduce((D,T)=>(D[m[T]]=P[T],D),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}function eD(t,e){const n=new kh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).Y_.add(s),s.next()}(await ao(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){q(i).Y_.delete(s)}(await ao(t),n))}}function tD(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?A0().encode(o):o,function(d,f){return new G1(d,f)}(function(d,f){if(d instanceof Uint8Array)return vI(d,f);if(d instanceof ArrayBuffer)return vI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,Cl(e));t.asyncQueue.enqueueAndForget(async()=>{$1(await vg(t),i,r)})}function nD(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=q(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Ao(t),e))}function rD(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=q(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(c=>function(f,m,y,A,P){f=[...f],m=[...m],f.sort(y),m.sort(y);const D=f.length,T=m.length;let v=0,I=0;for(;v<T&&I<D;){const V=y(f[I],m[v]);V<0?P(f[I++]):V>0?A(m[v++]):(v++,I++)}for(;v<T;)A(m[v++]);for(;I<D;)P(f[I++])}(c,i,oN,d=>{a.push(o.addFieldIndex(u,d))},d=>{a.push(o.deleteFieldIndex(u,d))})).next(()=>x.waitFor(a)))}(await Ao(t),e))}function iD(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){q(r).ss.zi=i}(await Ao(t),e))}function sD(t){return t.asyncQueue.enqueue(async()=>function(n){const r=q(n),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await Ao(t)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e,n){if(!n)throw new U(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CA(t,e,n,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function EI(t){if(!K.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function TI(t){if(K.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nh(t);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function kA(t,e){if(e<=0)throw new U(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new AI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new AI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bT;switch(r.type){case"firstParty":return new tN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wI.get(n);r&&(j("ComponentProvider","Removing Datastore"),wI.delete(n),r.terminate())}(this),Promise.resolve()}}function xA(t,e,n,r={}){var i;const s=(t=ae(t,xl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=rt.MOCK_USER;else{a=Ck(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(c)}t._authCredentials=new Xx(new NT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new at(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class mn extends at{constructor(e,n,r){super(e,n,_o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new K(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function Xu(t,e,...n){if(t=X(t),Ig("collection","path",e),t instanceof xl){const r=ce.fromString(e,...n);return TI(r),new mn(t,null,r)}{if(!(t instanceof ze||t instanceof mn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return TI(r),new mn(t.firestore,null,r)}}function oD(t,e){if(t=ae(t,xl),Ig("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new at(t,null,function(r){return new sr(ce.emptyPath(),r)}(e))}function vn(t,e,...n){if(t=X(t),arguments.length===1&&(e=Vm.newId()),Ig("doc","path",e),t instanceof xl){const r=ce.fromString(e,...n);return EI(r),new ze(t,null,new K(r))}{if(!(t instanceof ze||t instanceof mn))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return EI(r),new ze(t.firestore,t instanceof mn?t.converter:null,new K(r))}}function aD(t,e){return t=X(t),e=X(e),(t instanceof ze||t instanceof mn)&&(e instanceof ze||e instanceof mn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function wg(t,e){return t=X(t),e=X(e),t instanceof at&&e instanceof at&&t.firestore===e.firestore&&Tl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new rg(this,"async_queue_retry"),this.Vu=()=>{const r=Ju();r&&j("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ju();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new st;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ni(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ge("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ag.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function kp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class NA{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=-1;class ye extends xl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new SI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new SI(e),this._firestoreClient=void 0,await e}}}function uD(t,e,n){n||(n="(default)");const r=mo(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(zr(s,e))return i;throw new U(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function bA(t,e){const n=typeof t=="object"?t:bm(),r=typeof t=="string"?t:e||"(default)",i=mo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Rk("firestore");s&&xA(i,...s)}return i}function Ve(t){if(t._terminated)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DA(t),t._firestoreClient}function DA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new DN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,PA(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new H1(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}function cD(t,e){Qt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return VA(t,Yr.provider,{build:r=>new _g(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function hD(t){Qt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();VA(t,Yr.provider,{build:n=>new wA(n,e.cacheSizeBytes)})}function VA(t,e,n){if((t=ae(t,ye))._firestoreClient||t._terminated)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new U(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},DA(t)}function dD(t){if(t._initialized&&!t._terminated)throw new U(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new st;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Rn.D())return Promise.resolve();const i=r+"main";await Rn.delete(i)}(eg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function fD(t){return function(n){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>b1(await vg(n),r)),r.promise}(Ve(t=ae(t,ye)))}function pD(t){return Q1(Ve(t=ae(t,ye)))}function mD(t){return Y1(Ve(t=ae(t,ye)))}function gD(t){return ET(t.app,"firestore",t._databaseId.database),t._delete()}function _D(t,e){const n=Ve(t=ae(t,ye)),r=new NA;return tD(n,t._databaseId,e,r),r}function yD(t,e){return nD(Ve(t=ae(t,ye)),e).then(n=>n?new at(t,null,n.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class OA{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jr(Fe.fromBase64String(e))}catch(n){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jr(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function vD(){return new si("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=/^__.*__$/;class wD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new yo(e,this.data,n,this.fieldTransforms)}}class LA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Dh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Dh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Kc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(MA(this.Cu)&&ID.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ED{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cl(e)}Qu(e,n,r,i=!1){return new Dh({Cu:e,methodName:n,qu:r,path:Re.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zi(t){const e=t._freezeSettings(),n=Cl(t._databaseId);return new ED(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vh(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Cg("Data must be an object, but it was:",o,r);const a=jA(r,o);let u,c;if(s.merge)u=new Lt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=ll(e,f,n);if(!o.contains(m))throw new U(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);zA(d,m)||d.push(m)}u=new Lt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new wD(new ht(a),u,c)}class bl extends oi{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bl}}function FA(t,e,n){return new Dh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Eg extends oi{_toFieldTransform(e){return new Sl(e.path,new Zs)}isEqual(e){return e instanceof Eg}}class Tg extends oi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=FA(this,e,!0),r=this.Ku.map(s=>es(s,n)),i=new $i(r);return new Sl(e.path,i)}isEqual(e){return e instanceof Tg&&zr(this.Ku,e.Ku)}}class Ag extends oi{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=FA(this,e,!0),r=this.Ku.map(s=>es(s,n)),i=new qi(r);return new Sl(e.path,i)}isEqual(e){return e instanceof Ag&&zr(this.Ku,e.Ku)}}class Sg extends oi{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new eo(e.serializer,p0(e.serializer,this.$u));return new Sl(e.path,n)}isEqual(e){return e instanceof Sg&&this.$u===e.$u}}function Rg(t,e,n,r){const i=t.Qu(1,e,n);Cg("Data must be an object, but it was:",i,r);const s=[],o=ht.empty();ri(r,(u,c)=>{const d=Oh(e,u,n);c=X(c);const f=i.Nu(d);if(c instanceof bl)s.push(d);else{const m=es(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Lt(s);return new LA(o,a,i.fieldTransforms)}function Pg(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[ll(e,r,n)],u=[i];if(s.length%2!=0)throw new U(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(ll(e,s[m])),u.push(s[m+1]);const c=[],d=ht.empty();for(let m=a.length-1;m>=0;--m)if(!zA(c,a[m])){const y=a[m];let A=u[m];A=X(A);const P=o.Nu(y);if(A instanceof bl)c.push(y);else{const D=es(A,P);D!=null&&(c.push(y),d.set(y,D))}}const f=new Lt(c);return new LA(d,f,o.fieldTransforms)}function UA(t,e,n,r=!1){return es(n,t.Qu(r?4:3,e))}function es(t,e){if(BA(t=X(t)))return Cg("Unsupported field value:",e,t),jA(t,e);if(t instanceof oi)return function(r,i){if(!MA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=es(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return p0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:to(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:to(i.serializer,s)}}if(r instanceof bh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jr)return{bytesValue:P0(i.serializer,r._byteString)};if(r instanceof ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Bm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Nh(r)}`)}(t,e)}function jA(t,e){const n={};return KT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(r,i)=>{const s=es(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof bh||t instanceof Jr||t instanceof ze||t instanceof oi||t instanceof Nl)}function Cg(t,e,n){if(!BA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Nh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ll(t,e,n){if((e=X(e))instanceof si)return e._internalPath;if(typeof e=="string")return Oh(t,e);throw Kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const TD=new RegExp("[~\\*/\\[\\]]");function Oh(t,e,n){if(e.search(TD)>=0)throw Kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new si(...e.split("."))._internalPath}catch{throw Kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new U(O.INVALID_ARGUMENT,a+t+u)}function zA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AD extends ul{data(){return super.data()}}function Lh(t,e){return typeof e=="string"?Oh(t,e):e instanceof si?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kg{}class So extends kg{}function SD(t,e,...n){let r=[];e instanceof kg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ts).length,a=s.filter(u=>u instanceof Ro).length;if(o>1||o>0&&a>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ro extends So{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ro(e,n,r)}_apply(e){const n=this._parse(e);return GA(e._query,n),new at(e.firestore,e.converter,_p(e._query,n))}_parse(e){const n=Zi(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){PI(f,d);const y=[];for(const A of f)y.push(RI(u,s,A));m={arrayValue:{values:y}}}else m=RI(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||PI(f,d),m=UA(a,o,f,d==="in"||d==="not-in");return he.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function RD(t,e,n){const r=e,i=Lh("where",t);return Ro._create(i,r,n)}class ts extends kg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ts(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:me.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)GA(o,u),o=_p(o,u)}(e._query,n),new at(e.firestore,e.converter,_p(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function PD(...t){return t.forEach(e=>KA("or",e)),ts._create("or",t)}function CD(...t){return t.forEach(e=>KA("and",e)),ts._create("and",t)}class Mh extends So{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Mh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sl(s,o)}(e._query,this._field,this._direction);return new at(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new sr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function kD(t,e="asc"){const n=e,r=Lh("orderBy",t);return Mh._create(r,n)}class Dl extends So{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Dl(e,n,r)}_apply(e){return new at(e.firestore,e.converter,Lc(e._query,this._limit,this._limitType))}}function xD(t){return kA("limit",t),Dl._create("limit",t,"F")}function ND(t){return kA("limitToLast",t),Dl._create("limitToLast",t,"L")}class Vl extends So{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Vl(e,n,r)}_apply(e){const n=qA(e,this.type,this._docOrFields,this._inclusive);return new at(e.firestore,e.converter,function(i,s){return new sr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function bD(...t){return Vl._create("startAt",t,!0)}function DD(...t){return Vl._create("startAfter",t,!1)}class Ol extends So{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ol(e,n,r)}_apply(e){const n=qA(e,this.type,this._docOrFields,this._inclusive);return new at(e.firestore,e.converter,function(i,s){return new sr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function VD(...t){return Ol._create("endBefore",t,!1)}function OD(...t){return Ol._create("endAt",t,!0)}function qA(t,e,n,r){if(n[0]=X(n[0]),n[0]instanceof ul)return function(s,o,a,u,c){if(!u)throw new U(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Os(s))if(f.field.isKeyField())d.push(Bi(o,u.key));else{const m=u.data.field(f.field);if(yh(m))throw new U(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new U(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new Wr(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Zi(t.firestore);return function(o,a,u,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new U(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let A=0;A<d.length;A++){const P=d[A];if(m[A].field.isKeyField()){if(typeof P!="string")throw new U(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!Um(o)&&P.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const D=o.path.child(ce.fromString(P));if(!K.isDocumentKey(D))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const T=new K(D);y.push(Bi(a,T))}else{const D=UA(u,c,P);y.push(D)}}return new Wr(y,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function RI(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Um(e)&&n.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!K.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bi(t,new K(r))}if(n instanceof ze)return Bi(t,n._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nh(n)}.`)}function PI(t,e){if(!Array.isArray(t)||t.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function GA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function KA(t,e){if(!(e instanceof Ro||e instanceof ts))throw new U(O.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class xg{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new Nl(s)}convertGeoPoint(e){return new bh(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nl(e));default:return null}}convertTimestamp(e){const n=er(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);Y(F0(r));const i=new qr(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Ge(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class LD extends xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t){return new lo("sum",ll("sum",t))}function FD(t){return new lo("avg",ll("average",t))}function WA(){return new lo("count")}function UD(t,e){var n,r;return t instanceof lo&&e instanceof lo&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function jD(t,e){return wg(t.query,e.query)&&zr(t.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hi extends ul{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ba extends Hi{data(e={}){return super.data(e)}}class Qi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Cr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ba(this._firestore,this._userDataWriter,r.key,r,new Cr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Cr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new ba(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Cr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:BD(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}function zD(t,e){return t instanceof Hi&&e instanceof Hi?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Qi&&e instanceof Qi&&t._firestore===e._firestore&&wg(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){t=ae(t,ze);const e=ae(t.firestore,ye);return SA(Ve(e),t._key).then(n=>Ng(e,t,n))}class ai extends xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function $D(t){t=ae(t,ze);const e=ae(t.firestore,ye),n=Ve(e),r=new ai(e);return J1(n,t._key).then(i=>new Hi(e,r,t._key,i,new Cr(i!==null&&i.hasLocalMutations,!0),t.converter))}function qD(t){t=ae(t,ze);const e=ae(t.firestore,ye);return SA(Ve(e),t._key,{source:"server"}).then(n=>Ng(e,t,n))}function Zu(t){t=ae(t,at);const e=ae(t.firestore,ye),n=Ve(e),r=new ai(e);return $A(t._query),RA(n,t._query).then(i=>new Qi(e,r,t,i))}function GD(t){t=ae(t,at);const e=ae(t.firestore,ye),n=Ve(e),r=new ai(e);return X1(n,t._query).then(i=>new Qi(e,r,t,i))}function KD(t){t=ae(t,at);const e=ae(t.firestore,ye),n=Ve(e),r=new ai(e);return RA(n,t._query,{source:"server"}).then(i=>new Qi(e,r,t,i))}function ma(t,e,n){t=ae(t,ze);const r=ae(t.firestore,ye),i=Fh(t.converter,e,n);return Po(r,[Vh(Zi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,be.none())])}function ga(t,e,n,...r){t=ae(t,ze);const i=ae(t.firestore,ye),s=Zi(i);let o;return o=typeof(e=X(e))=="string"||e instanceof si?Pg(s,"updateDoc",t._key,e,n,r):Rg(s,"updateDoc",t._key,e),Po(i,[o.toMutation(t._key,be.exists(!0))])}function ec(t){return Po(ae(t.firestore,ye),[new vo(t._key,be.none())])}function WD(t,e){const n=ae(t.firestore,ye),r=vn(t),i=Fh(t.converter,e);return Po(n,[Vh(Zi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,be.exists(!1))]).then(()=>r)}function tc(t,...e){var n,r,i;t=X(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||kp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(kp(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof ze)c=ae(t.firestore,ye),d=_o(t._key.path),u={next:f=>{e[o]&&e[o](Ng(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ae(t,at);c=ae(f.firestore,ye),d=f._query;const m=new ai(c);u={next:y=>{e[o]&&e[o](new Qi(c,m,f,y))},error:e[o+1],complete:e[o+2]},$A(t._query)}return function(m,y,A,P){const D=new kh(P),T=new hg(y,D,A);return m.asyncQueue.enqueueAndForget(async()=>lg(await ao(m),T)),()=>{D.Za(),m.asyncQueue.enqueueAndForget(async()=>ug(await ao(m),T))}}(Ve(c),d,a,u)}function HD(t,e){return eD(Ve(t=ae(t,ye)),kp(e)?e:{next:e})}function Po(t,e){return function(r,i){const s=new st;return r.asyncQueue.enqueueAndForget(async()=>C1(await vg(r),i,s)),s.promise}(Ve(t),e)}function Ng(t,e,n){const r=n.docs.get(e._key),i=new ai(t);return new Hi(t,i,e._key,r,new Cr(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){return QA(t,{count:WA()})}function QA(t,e){const n=ae(t.firestore,ye),r=Ve(n),i=GT(e,(s,o)=>new w0(o,s.aggregateType,s._internalFieldPath));return Z1(r,t._query,i).then(s=>function(a,u,c){const d=new ai(a);return new OA(u,d,c)}(n,t,s))}class YD{constructor(e){this.kind="memory",this._onlineComponentProvider=Yr.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=Qr.provider}toJSON(){return{kind:this.kind}}}class JD{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=YA(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class XD{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Qr.provider}toJSON(){return{kind:this.kind}}}class ZD{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new q1(e)}}toJSON(){return{kind:this.kind}}}function eV(){return new XD}function tV(t){return new ZD(t==null?void 0:t.cacheSizeBytes)}function nV(t){return new YD(t)}function rV(t){return new JD(t)}class iV{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Yr.provider,this._offlineComponentProvider={build:n=>new _g(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class sV{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Yr.provider,this._offlineComponentProvider={build:n=>new wA(n,e==null?void 0:e.cacheSizeBytes)}}}function YA(t){return new iV(t==null?void 0:t.forceOwnership)}function oV(){return new sV}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Zi(e)}set(e,n,r){this._verifyNotCommitted();const i=Ar(e,this._firestore),s=Fh(i.converter,n,r),o=Vh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,be.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ar(e,this._firestore);let o;return o=typeof(n=X(n))=="string"||n instanceof si?Pg(this._dataReader,"WriteBatch.update",s._key,n,r,i):Rg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,be.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ar(e,this._firestore);return this._mutations=this._mutations.concat(new vo(n._key,be.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ar(t,e){if((t=X(t)).firestore!==e)throw new U(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Zi(n)}get(n){const r=Ar(n,this._firestore),i=new LD(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return H();const o=s[0];if(o.isFoundDocument())return new ul(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ul(this._firestore,i,r._key,null,r.converter);throw H()})}set(n,r,i){const s=Ar(n,this._firestore),o=Fh(s.converter,r,i),a=Vh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Ar(n,this._firestore);let a;return a=typeof(r=X(r))=="string"||r instanceof si?Pg(this._dataReader,"Transaction.update",o._key,r,i,s):Rg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Ar(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ar(e,this._firestore),r=new ai(this._firestore);return super.get(e).then(i=>new Hi(this._firestore,r,n._key,i._document,new Cr(!1,!1),n.converter))}}function lV(t,e,n){t=ae(t,ye);const r=Object.assign(Object.assign({},aV),n);return function(s){if(s.maxAttempts<1)throw new U(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new st;return s.asyncQueue.enqueueAndForget(async()=>{const c=await AA(s);new W1(s.asyncQueue,c,a,o,u).au()}),u.promise}(Ve(t),i=>e(new XA(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(){return new bl("deleteField")}function cV(){return new Eg("serverTimestamp")}function hV(...t){return new Tg("arrayUnion",t)}function dV(...t){return new Ag("arrayRemove",t)}function fV(t){return new Sg("increment",t)}function pV(t){return new Nl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){return Ve(t=ae(t,ye)),new JA(t,e=>Po(t,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mV(t,e){const n=Ve(t=ae(t,ye));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return Qt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(c){try{return JSON.parse(c)}catch(d){throw new U(O.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=CI(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const f of u.fields){const m=Oh("setIndexConfiguration",CI(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new Ni(m,2)):f.order==="ASCENDING"?d.push(new Ni(m,0)):f.order==="DESCENDING"&&d.push(new Ni(m,1))}a.push(new Qs(Qs.UNKNOWN_ID,c,d,Ys.empty()))}return a}(e);return rD(n,r)}function CI(t,e){if(typeof t[e]!="string")throw new U(O.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function gV(t){var e;t=ae(t,ye);const n=kI.get(t);if(n)return n;if(((e=Ve(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new ZA(t);return kI.set(t,r),r}function _V(t){eS(t,!0)}function yV(t){eS(t,!1)}function vV(t){sD(Ve(t._firestore)).then(e=>j("deleting all persistent cache indexes succeeded")).catch(e=>Qt("deleting all persistent cache indexes failed",e))}function eS(t,e){iD(Ve(t._firestore),e).then(n=>j(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Qt(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const kI=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){var e;const n=(e=Ve(ae(t.firestore,ye))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:Th(n,Tt(t._query))._t}function wV(t,e){var n;const r=GT(e,(s,o)=>new w0(o,s.aggregateType,s._internalFieldPath)),i=(n=Ve(ae(t.firestore,ye))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return i===void 0?null:V0(i,s0(t._query),r,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return bg.instance.onExistenceFilterMismatch(e)}}class bg{constructor(){this.Uu=new Map}static get instance(){return Cu||(Cu=new bg,function(n){if(Mc)throw new Error("a TestingHooksSpi instance is already set");Mc=n}(Cu)),Cu}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let Cu=null;(function(e,n=!0){(function(i){go=i})(Xi),ji(new Fi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ye(new Zx(r.getProvider("auth-internal")),new nN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Wn(yv,"4.7.3",e),Wn(yv,"4.7.3","esm2017")})();const Uh=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:xg,AggregateField:lo,AggregateQuerySnapshot:OA,Bytes:Jr,CACHE_SIZE_UNLIMITED:lD,CollectionReference:mn,DocumentReference:ze,DocumentSnapshot:Hi,FieldPath:si,FieldValue:oi,Firestore:ye,FirestoreError:U,GeoPoint:bh,LoadBundleTask:NA,PersistentCacheIndexManager:ZA,Query:at,QueryCompositeFilterConstraint:ts,QueryConstraint:So,QueryDocumentSnapshot:ba,QueryEndAtConstraint:Ol,QueryFieldFilterConstraint:Ro,QueryLimitConstraint:Dl,QueryOrderByConstraint:Mh,QuerySnapshot:Qi,QueryStartAtConstraint:Vl,SnapshotMetadata:Cr,Timestamp:De,Transaction:XA,VectorValue:Nl,WriteBatch:JA,_AutoId:Vm,_ByteString:Fe,_DatabaseId:qr,_DocumentKey:K,_EmptyAppCheckTokenProvider:rN,_EmptyAuthCredentialsProvider:bT,_FieldPath:Re,_TestingHooks:EV,_cast:ae,_debugAssert:Jx,_internalAggregationQueryToProtoRunAggregationQueryRequest:wV,_internalQueryToProtoQueryTarget:IV,_isBase64Available:NN,_logWarn:Qt,_validateIsNotUsedTogether:CA,addDoc:WD,aggregateFieldEqual:UD,aggregateQuerySnapshotEqual:jD,and:CD,arrayRemove:dV,arrayUnion:hV,average:FD,clearIndexedDbPersistence:dD,collection:Xu,collectionGroup:oD,connectFirestoreEmulator:xA,count:WA,deleteAllPersistentCacheIndexes:vV,deleteDoc:ec,deleteField:uV,disableNetwork:mD,disablePersistentCacheIndexAutoCreation:yV,doc:vn,documentId:vD,enableIndexedDbPersistence:cD,enableMultiTabIndexedDbPersistence:hD,enableNetwork:pD,enablePersistentCacheIndexAutoCreation:_V,endAt:OD,endBefore:VD,ensureFirestoreConfigured:Ve,executeWrite:Po,getAggregateFromServer:QA,getCountFromServer:QD,getDoc:HA,getDocFromCache:$D,getDocFromServer:qD,getDocs:Zu,getDocsFromCache:GD,getDocsFromServer:KD,getFirestore:bA,getPersistentCacheIndexManager:gV,increment:fV,initializeFirestore:uD,limit:xD,limitToLast:ND,loadBundle:_D,memoryEagerGarbageCollector:eV,memoryLocalCache:nV,memoryLruGarbageCollector:tV,namedQuery:yD,onSnapshot:tc,onSnapshotsInSync:HD,or:PD,orderBy:kD,persistentLocalCache:rV,persistentMultipleTabManager:oV,persistentSingleTabManager:YA,query:SD,queryEqual:wg,refEqual:aD,runTransaction:lV,serverTimestamp:cV,setDoc:ma,setIndexConfiguration:mV,setLogLevel:Yx,snapshotEqual:zD,startAfter:DD,startAt:bD,sum:MD,terminate:gD,updateDoc:ga,vector:pV,waitForPendingWrites:fD,where:RD,writeBatch:xp},Symbol.toStringTag,{value:"Module"}));var TV="firebase",AV="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(TV,AV,"app");const SV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:xn,SDK_VERSION:Xi,_DEFAULT_ENTRY_NAME:Xa,_addComponent:lp,_apps:Ui,_components:Dc,_getProvider:mo,_isFirebaseServerApp:Be,_registerComponent:ji,_removeServiceInstance:ET,_serverApps:bc,deleteApp:jx,getApp:bm,initializeApp:Nm,registerVersion:Wn},Symbol.toStringTag,{value:"Module"}));function Dg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RV={PHONE:"phone",TOTP:"totp"},PV={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},CV={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},kV={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},xV={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function tS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bV=NV,nS=tS,rS=new Il("auth","Firebase",tS()),DV={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new km("@firebase/auth");function VV(t,...e){Wc.logLevel<=ue.WARN&&Wc.warn(`Auth (${Xi}): ${t}`,...e)}function nc(t,...e){Wc.logLevel<=ue.ERROR&&Wc.error(`Auth (${Xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw Og(t,...e)}function kt(t,...e){return Og(t,...e)}function Vg(t,e,n){const r=Object.assign(Object.assign({},nS()),{[e]:n});return new Il("auth","Firebase",r).create(e,{appName:t.name})}function ot(t){return Vg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Co(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bt(t,"argument-error"),Vg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Og(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rS.create(t,...e)}function $(t,e,...n){if(!t)throw Og(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nc(e),new Error(e)}function nr(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lg(){return xI()==="http:"||xI()==="https:"}function xI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lg()||bk()||"connection"in navigator)?navigator.onLine:!0}function LV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=kk()||Dk()}get(){return OV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FV=new Ll(3e4,6e4);function Ce(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,r,i={}){return sS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=po(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Nk()||(c.referrerPolicy="no-referrer"),iS.fetch()(oS(t,t.config.apiHost,n,a),c)})}async function sS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MV),e);try{const i=new jV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw _a(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Vg(t,d,c);Bt(t,d)}}catch(i){if(i instanceof xn)throw i;Bt(t,"network-request-failed",{message:String(i)})}}async function ur(t,e,n,r,i={}){const s=await ke(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mg(t.config,i):`${t.config.apiScheme}://${i}`}function UV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),FV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){return t!==void 0&&t.getResponse!==void 0}function bI(t){return t!==void 0&&t.enterprise!==void 0}class aS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BV(t){return(await ke(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function lS(t,e){return ke(t,"GET","/v2/recaptchaConfig",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zV(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function $V(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function uS(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(t,e=!1){return X(t).getIdToken(e)}async function cS(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=jh(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Da(rf(i.auth_time)),issuedAtTime:Da(rf(i.iat)),expirationTime:Da(rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rf(t){return Number(t)*1e3}function jh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=pT(n);return i?JSON.parse(i):(nc("Failed to decode base64 JWT payload"),null)}catch(i){return nc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function DI(t){const e=jh(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&GV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await rr(t,uS(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?dS(s.providerUserInfo):[],a=WV(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Np(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function hS(t){const e=X(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dS(t){return t.map(e=>{var{providerId:n}=e,r=Dg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HV(t,e){const n=await sS(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QV(t,e){return ke(t,"POST","/v2/accounts:revokeToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=DI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ms;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Dg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Np(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cS(this,e)}reload(){return hS(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await rr(this,zV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:V,isAnonymous:F,providerData:L,stsTokenManager:w}=n;$(I&&w,e,"internal-error");const g=Ms.fromJSON(this.name,w);$(typeof I=="string",e,"internal-error"),_r(f,e.name),_r(m,e.name),$(typeof V=="boolean",e,"internal-error"),$(typeof F=="boolean",e,"internal-error"),_r(y,e.name),_r(A,e.name),_r(P,e.name),_r(D,e.name),_r(T,e.name),_r(v,e.name);const E=new $n({uid:I,auth:e,email:m,emailVerified:V,displayName:f,isAnonymous:F,photoURL:A,phoneNumber:y,tenantId:P,stsTokenManager:g,createdAt:T,lastLoginAt:v});return L&&Array.isArray(L)&&(E.providerData=L.map(S=>Object.assign({},S))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ms;i.updateFromServerResponse(n);const s=new $n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?dS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ms;a.updateFromIdToken(r);const u=new $n({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Np(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new Map;function qn(t){nr(t instanceof Function,"Expected a class definition");let e=VI.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,VI.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fS.type="NONE";const bp=fS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t,e,n){return`firebase:${t}:${e}:${n}`}class Fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=rc(this.userKey,i.apiKey,s),this.fullPersistenceKey=rc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fs(qn(bp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||qn(bp);const o=rc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=$n._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Fs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_S(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vS(e))return"Blackberry";if(IS(e))return"Webos";if(mS(e))return"Safari";if((e.includes("chrome/")||gS(e))&&!e.includes("edge/"))return"Chrome";if(yS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pS(t=Ze()){return/firefox\//i.test(t)}function mS(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gS(t=Ze()){return/crios\//i.test(t)}function _S(t=Ze()){return/iemobile/i.test(t)}function yS(t=Ze()){return/android/i.test(t)}function vS(t=Ze()){return/blackberry/i.test(t)}function IS(t=Ze()){return/webos/i.test(t)}function Fg(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YV(t=Ze()){var e;return Fg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JV(){return Vk()&&document.documentMode===10}function wS(t=Ze()){return Fg(t)||yS(t)||IS(t)||vS(t)||/windows phone/i.test(t)||_S(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t,e=[]){let n;switch(t){case"Browser":n=OI(Ze());break;case"Worker":n=`${OI(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(t,e={}){return ke(t,"GET","/v2/passwordPolicy",Ce(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=6;class tO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new LI(this),this.idTokenSubscription=new LI(this),this.beforeStateQueue=new XV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await uS(this,{idToken:e}),r=await $n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Be(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(ot(this));const n=e?X(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZV(this),n=new tO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Il("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ES(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $e(t){return X(t)}class LI{constructor(e){this.auth=e,this.observer=null,this.addObserver=jk(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rO(t){Ml=t}function Ug(t){return Ml.loadJS(t)}function iO(){return Ml.recaptchaV2Script}function sO(){return Ml.recaptchaEnterpriseScript}function oO(){return Ml.gapiScript}function TS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aO="recaptcha-enterprise",lO="NO_RECAPTCHA";class AS{constructor(e){this.type=aO,this.auth=$e(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{lS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new aS(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;bI(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(lO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&bI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sO();u.length!==0&&(u+=a),Ug(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function MI(t,e,n,r=!1){const i=new AS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function dl(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await MI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await MI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}async function uO(t){const e=$e(t),n=await lS(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new aS(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")&&new AS(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t,e){const n=mo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zr(s,e??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:e})}function cO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RS(t,e,n){const r=$e(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=PS(e),{host:o,port:a}=hO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dO()}function PS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hO(t){const e=PS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:FI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:FI(o)}}}function FI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){return ke(t,"POST","/v1/accounts:resetPassword",Ce(t,e))}async function fO(t,e){return ke(t,"POST","/v1/accounts:update",e)}async function pO(t,e){return ke(t,"POST","/v1/accounts:signUp",e)}async function mO(t,e){return ke(t,"POST","/v1/accounts:update",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t,e){return ur(t,"POST","/v1/accounts:signInWithPassword",Ce(t,e))}async function Bh(t,e){return ke(t,"POST","/v1/accounts:sendOobCode",Ce(t,e))}async function _O(t,e){return Bh(t,e)}async function yO(t,e){return Bh(t,e)}async function vO(t,e){return Bh(t,e)}async function IO(t,e){return Bh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}async function EO(t,e){return ur(t,"POST","/v1/accounts:signInWithEmailLink",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends ko{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,n,"signInWithPassword",gO);case"emailLink":return wO(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,r,"signUpPassword",pO);case"emailLink":return EO(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e){return ur(t,"POST","/v1/accounts:signInWithIdp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO="http://localhost";class kn extends ko{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Dg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hn(e,n)}buildRequest(){const e={requestUri:TO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e){return ke(t,"POST","/v1/accounts:sendVerificationCode",Ce(t,e))}async function SO(t,e){return ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e))}async function RO(t,e){const n=await ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,e));if(n.temporaryProof)throw _a(t,"account-exists-with-different-credential",n);return n}const PO={USER_NOT_FOUND:"user-not-found"};async function CO(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Ce(t,n),PO)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends ko{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ur({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ur({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return SO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return RO(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return CO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ur({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xO(t){const e=ua(ca(t)).link,n=e?ua(ca(e)).deep_link_id:null,r=ua(ca(t)).deep_link_id;return(r?ua(ca(r)).link:null)||r||n||e||t}class xo{constructor(e){var n,r,i,s,o,a;const u=ua(ca(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=kO((i=u.mode)!==null&&i!==void 0?i:null);$(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xO(e);try{return new xo(n)}catch{return null}}}function NO(t){return xo.parseLink(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.providerId=li.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xo.parseLink(n);return $(r,"argument-error"),uo._fromEmailAndCode(e,r.code,r.tenantId)}}li.PROVIDER_ID="password";li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends cr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Va extends No{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $("providerId"in n&&"signInMethod"in n,"argument-error"),kn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return $(e.idToken||e.accessToken,"argument-error"),kn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Va.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Va.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Va(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends No{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends No{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO="http://localhost";class fl extends ko{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Hn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new fl(r,s)}static _create(e,n){return new fl(e,n)}buildRequest(){return{requestUri:bO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO="saml.";class Hc extends cr{constructor(e){$(e.startsWith(DO),"argument-error"),super(e)}static credentialFromResult(e){return Hc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Hc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=fl.fromJSON(e);return $(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return fl._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends No{constructor(){super("twitter.com")}static credential(e,n){return kn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e){return ur(t,"POST","/v1/accounts:signUp",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $n._fromIdTokenResponse(e,r,i),o=UI(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=UI(r);return new on({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function UI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VO(t){var e;if(Be(t.app))return Promise.reject(ot(t));const n=$e(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new on({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await kS(n,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qc(e,n,r,i)}}function xS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e){const n=X(t);await zh(!0,n,e);const{providerUserInfo:r}=await $V(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=NS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function jg(t,e,n=!1){const r=await rr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}async function zh(t,e,n){await hl(e);const r=NS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";$(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(t,e,n=!1){const{auth:r}=t;if(Be(r.app))return Promise.reject(ot(r));const i="reauthenticate";try{const s=await rr(t,xS(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=jh(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),on._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t,e,n=!1){if(Be(t.app))return Promise.reject(ot(t));const r="signIn",i=await xS(t,r,e),s=await on._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $h(t,e){return DS($e(t),e)}async function VS(t,e){const n=X(t);return await zh(!1,n,e.providerId),jg(n,e)}async function OS(t,e){return bS(X(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){return ur(t,"POST","/v1/accounts:signInWithCustomToken",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MO(t,e){if(Be(t.app))return Promise.reject(ot(t));const n=$e(t),r=await LO(n,{token:e,returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Bg._fromServerResponse(e,n):"totpInfo"in n?zg._fromServerResponse(e,n):Bt(e,"internal-error")}}class Bg extends Fl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Bg(n)}}class zg extends Fl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new zg(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t){const e=$e(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FO(t,e,n){const r=$e(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&qh(r,i,n),await dl(r,i,"getOobCode",yO)}async function UO(t,e,n){await CS(X(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(t),r})}async function jO(t,e){await mO(X(t),{oobCode:e})}async function LS(t,e){const n=X(t),r=await CS(n,{oobCode:e}),i=r.requestType;switch($(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":$(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":$(r.mfaInfo,n,"internal-error");default:$(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Fl._fromServerResponse($e(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function BO(t,e){const{data:n}=await LS(X(t),e);return n.email}async function zO(t,e,n){if(Be(t.app))return Promise.reject(ot(t));const r=$e(t),o=await dl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kS).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$g(t),u}),a=await on._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $O(t,e,n){return Be(t.app)?Promise.reject(ot(t)):$h(X(t),li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qO(t,e,n){const r=$e(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){$(a.handleCodeInApp,r,"argument-error"),a&&qh(r,o,a)}s(i,n),await dl(r,i,"getOobCode",vO)}function GO(t,e){const n=xo.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function KO(t,e,n){if(Be(t.app))return Promise.reject(ot(t));const r=X(t),i=li.credentialWithLink(e,n||cl());return $(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),$h(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t,e){return ke(t,"POST","/v1/accounts:createAuthUri",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e){const n=Lg()?cl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await WO(X(t),r);return i||[]}async function QO(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&qh(n.auth,i,e);const{email:s}=await _O(n.auth,i);s!==t.email&&await t.reload()}async function YO(t,e,n){const r=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&qh(r.auth,s,n);const{email:o}=await IO(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e){return ke(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=X(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await rr(r,JO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ZO(t,e){const n=X(t);return Be(n.auth.app)?Promise.reject(ot(n.auth)):MS(n,e,null)}function eL(t,e){return MS(X(t),null,e)}async function MS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await rr(t,fO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=jh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Us(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new nL(s,i);case"github.com":return new rL(s,i);case"google.com":return new iL(s,i);case"twitter.com":return new sL(s,i,t.screenName||null);case"custom":case"anonymous":return new Us(s,null);default:return new Us(s,r,i)}}class Us{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class FS extends Us{constructor(e,n,r,i){super(e,n,r),this.username=i}}class nL extends Us{constructor(e,n){super(e,"facebook.com",n)}}class rL extends FS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class iL extends Us{constructor(e,n){super(e,"google.com",n)}}class sL extends FS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function oL(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:tL(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(t,e){return X(t).setPersistence(e)}function lL(t){return uO(t)}async function uL(t,e){return $e(t).validatePassword(e)}function US(t,e,n,r){return X(t).onIdTokenChanged(e,n,r)}function jS(t,e,n){return X(t).beforeAuthStateChanged(e,n)}function cL(t,e,n,r){return X(t).onAuthStateChanged(e,n,r)}function hL(t){X(t).useDeviceLanguage()}function dL(t,e){return X(t).updateCurrentUser(e)}function fL(t){return X(t).signOut()}function pL(t,e){return $e(t).revokeAccessToken(e)}async function mL(t){return X(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Ri("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ri("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ri._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ri._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=$e(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Fl._fromServerResponse(r,a));$(i.mfaPendingCredential,r,"internal-error");const o=Ri._fromMfaPendingCredential(i.mfaPendingCredential);return new qg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const d=await on._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return $(n.user,r,"internal-error"),on._forOperation(n.user,n.operationType,c);default:Bt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function gL(t,e){var n;const r=X(t),i=e;return $(e.customData.operationType,r,"argument-error"),$((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),qg._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function yL(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function vL(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:start",Ce(t,e))}function IL(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(t,e))}function wL(t,e){return ke(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ce(t,e))}class Gg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Fl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Gg(e)}async getSession(){return Ri._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await rr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await rr(this.user,wL(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const sf=new WeakMap;function EL(t){const e=X(t);return sf.has(e)||sf.set(e,Gg._fromUser(e)),sf.get(e)}const Yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=1e3,AL=10;class zS extends BS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zS.type="LOCAL";const $S=zS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS extends BS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qS.type="SESSION";const Kg=qS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await SL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Kh("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function PL(t){He().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function CL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xL(){return Wg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebaseLocalStorageDb",NL=1,Jc="firebaseLocalStorage",KS="fbase_key";class Ul{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wh(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function bL(){const t=indexedDB.deleteDatabase(GS);return new Ul(t).toPromise()}function Dp(){const t=indexedDB.open(GS,NL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:KS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await bL(),e(await Dp()))})})}async function jI(t,e,n){const r=Wh(t,!0).put({[KS]:e,value:n});return new Ul(r).toPromise()}async function DL(t,e){const n=Wh(t,!1).get(e),r=await new Ul(n).toPromise();return r===void 0?null:r.value}function BI(t,e){const n=Wh(t,!0).delete(e);return new Ul(n).toPromise()}const VL=800,OL=3;class WS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(xL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CL(),!this.activeServiceWorker)return;this.sender=new RL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dp();return await jI(e,Yc,"1"),await BI(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>BI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wh(i,!1).getAll();return new Ul(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}WS.type="LOCAL";const HS=WS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LL(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:start",Ce(t,e))}function ML(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}function FL(t,e){return ke(t,"POST","/v2/accounts/mfaSignIn:finalize",Ce(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=500,jL=6e4,ku=1e12;class BL{constructor(e){this.auth=e,this.counter=ku,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new zL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ku;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ku;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ku;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class zL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;$(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$L(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},jL)},UL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $L(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=TS("rcb"),qL=new Ll(3e4,6e4);class GL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=He().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(KL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&NI(He().grecaptcha)?Promise.resolve(He().grecaptcha):new Promise((r,i)=>{const s=He().setTimeout(()=>{i(kt(e,"network-request-failed"))},qL.get());He()[of]=()=>{He().clearTimeout(s),delete He()[of];const a=He().grecaptcha;if(!a||!NI(a)){i(kt(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${iO()}?${po({onload:of,render:"explicit",hl:n})}`;Ug(o).catch(()=>{clearTimeout(s),i(kt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=He().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function KL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class WL{async load(e){return new BL(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="recaptcha",HL={theme:"light",type:"image"};class QL{constructor(e,n,r=Object.assign({},HL)){this.parameters=r,this.type=QS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$e(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;$(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new WL:new GL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=He()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(Lg()&&!Wg(),this.auth,"internal-error"),await YL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BV(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function YL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ur._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function JL(t,e,n){if(Be(t.app))return Promise.reject(ot(t));const r=$e(t),i=await Hh(r,e,X(n));return new Hg(i,s=>$h(r,s))}async function XL(t,e,n){const r=X(t);await zh(!1,r,"phone");const i=await Hh(r.auth,e,X(n));return new Hg(i,s=>VS(r,s))}async function ZL(t,e,n){const r=X(t);if(Be(r.auth.app))return Promise.reject(ot(r.auth));const i=await Hh(r.auth,e,X(n));return new Hg(i,s=>OS(r,s))}async function Hh(t,e,n){var r;const i=await n.verify();try{$(typeof i=="string",t,"argument-error"),$(n.type===QS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await _L(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await LL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await AO(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function e2(t,e){const n=X(t);if(Be(n.auth.app))return Promise.reject(ot(n.auth));await jg(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.providerId=bi.PROVIDER_ID,this.auth=$e(e)}verifyPhoneNumber(e,n){return Hh(this.auth,e,X(n))}static credential(e,n){return Ur._fromVerification(e,n)}static credentialFromResult(e){const n=e;return bi.credentialFromTaggedObject(n)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ur._fromTokenResponse(n,r):null}}bi.PROVIDER_ID="phone";bi.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,e){return e?qn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends ko{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t2(t){return DS(t.auth,new Qg(t),t.bypassAuthState)}function n2(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),bS(n,new Qg(t),t.bypassAuthState)}async function r2(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),jg(n,new Qg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t2;case"linkViaPopup":case"linkViaRedirect":return r2;case"reauthViaPopup":case"reauthViaRedirect":return n2;default:Bt(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new Ll(2e3,1e4);async function s2(t,e,n){if(Be(t.app))return Promise.reject(kt(t,"operation-not-supported-in-this-environment"));const r=$e(t);Co(t,e,cr);const i=ns(r,n);return new Gn(r,"signInViaPopup",e,i).executeNotNull()}async function o2(t,e,n){const r=X(t);if(Be(r.auth.app))return Promise.reject(kt(r.auth,"operation-not-supported-in-this-environment"));Co(r.auth,e,cr);const i=ns(r.auth,n);return new Gn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function a2(t,e,n){const r=X(t);Co(r.auth,e,cr);const i=ns(r.auth,n);return new Gn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Gn extends YS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i2.get())};e()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2="pendingRedirect",ic=new Map;class u2 extends YS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ic.get(this.auth._key());if(!e){try{const r=await c2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ic.set(this.auth._key(),e)}return this.bypassAuthState||ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c2(t,e){const n=XS(e),r=JS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Yg(t,e){return JS(t)._set(XS(e),"true")}function h2(t,e){ic.set(t._key(),e)}function JS(t){return qn(t._redirectPersistence)}function XS(t){return rc(l2,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t,e,n){return f2(t,e,n)}async function f2(t,e,n){if(Be(t.app))return Promise.reject(ot(t));const r=$e(t);Co(t,e,cr),await r._initializationPromise;const i=ns(r,n);return await Yg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function p2(t,e,n){return m2(t,e,n)}async function m2(t,e,n){const r=X(t);if(Co(r.auth,e,cr),Be(r.auth.app))return Promise.reject(ot(r.auth));await r.auth._initializationPromise;const i=ns(r.auth,n);await Yg(i,r.auth);const s=await eR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function g2(t,e,n){return _2(t,e,n)}async function _2(t,e,n){const r=X(t);Co(r.auth,e,cr),await r.auth._initializationPromise;const i=ns(r.auth,n);await zh(!1,r,e.providerId),await Yg(i,r.auth);const s=await eR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function y2(t,e){return await $e(t)._initializationPromise,ZS(t,e,!1)}async function ZS(t,e,n=!1){if(Be(t.app))return Promise.reject(ot(t));const r=$e(t),i=ns(r,e),o=await new u2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function eR(t){const e=Kh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=10*60*1e3;class I2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v2&&this.cachedEventUids.clear(),this.cachedEventUids.has(zI(e))}saveEventToCache(e){this.cachedEventUids.add(zI(e)),this.lastProcessedEventTime=Date.now()}}function zI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A2=/^https?/;async function S2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E2(t);for(const n of e)try{if(R2(n))return}catch{}Bt(t,"unauthorized-domain")}function R2(t){const e=cl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A2.test(n))return!1;if(T2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new Ll(3e4,6e4);function $I(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C2(t){return new Promise((e,n)=>{var r,i,s;function o(){$I(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$I(),n(kt(t,"network-request-failed"))},timeout:P2.get()})}if(!((i=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=He().gapi)===null||s===void 0)&&s.load)o();else{const a=TS("iframefcb");return He()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},Ug(`${oO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw sc=null,e})}let sc=null;function k2(t){return sc=sc||C2(t),sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new Ll(5e3,15e3),N2="__/auth/iframe",b2="emulator/auth/iframe",D2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O2(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mg(e,b2):`https://${t.config.authDomain}/${N2}`,r={apiKey:e.apiKey,appName:t.name,v:Xi},i=V2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${po(r).slice(1)}`}async function L2(t){const e=await k2(t),n=He().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:O2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=He().setTimeout(()=>{s(o)},x2.get());function u(){He().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},F2=500,U2=600,j2="_blank",B2="http://localhost";class qI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z2(t,e,n,r=F2,i=U2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},M2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ze().toLowerCase();n&&(a=gS(c)?j2:n),pS(c)&&(e=e||B2,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[y,A])=>`${m}${y}=${A},`,"");if(YV(c)&&a!=="_self")return $2(e||"",a),new qI(null);const f=window.open(e||"",a,d);$(f,t,"popup-blocked");try{f.focus()}catch{}return new qI(f)}function $2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="__/auth/handler",G2="emulator/auth/handler",K2=encodeURIComponent("fac");async function GI(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xi,eventId:i};if(e instanceof cr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof No){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${K2}=${encodeURIComponent(u)}`:"";return`${W2(t)}?${po(a).slice(1)}${c}`}function W2({config:t}){return t.emulator?Mg(t,G2):`https://${t.authDomain}/${q2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="webStorageSupport";class H2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=ZS,this._overrideRedirectResult=h2}async _openPopup(e,n,r,i){var s;nr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await GI(e,n,r,cl(),i);return z2(e,o,Kh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await GI(e,n,r,cl(),i);return PL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await L2(e),r=new I2(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(af,{type:af},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[af];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=S2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wS()||mS()||Fg()}}const nR=H2;class rR{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Tn("unexpected MultiFactorSessionType")}}}class Jg extends rR{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Jg(e)}_finalizeEnroll(e,n,r){return yL(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return ML(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class iR{constructor(){}static assertion(e){return Jg._fromCredential(e)}}iR.FACTOR_ID="phone";class sR{static assertionForEnrollment(e,n){return pl._fromSecret(e,n)}static assertionForSignIn(e,n){return pl._fromEnrollmentId(e,n)}static async generateSecret(e){var n;const r=e;$(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");const i=await vL(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Qh._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}}sR.FACTOR_ID="totp";class pl extends rR{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new pl(n,void 0,e)}static _fromEnrollmentId(e,n){return new pl(n,e)}async _finalizeEnroll(e,n,r){return $(typeof this.secret<"u",e,"argument-error"),IL(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){$(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return FL(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Qh{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Qh(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let i=!1;return(xu(e)||xu(n))&&(i=!0),i&&(xu(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),xu(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function xu(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var KI="@firebase/auth",WI="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J2(t){ji(new Fi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ES(t)},c=new nO(r,i,s,u);return cO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ji(new Fi("auth-internal",e=>{const n=$e(e.getProvider("auth").getImmediate());return(r=>new Q2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(KI,WI,Y2(t)),Wn(KI,WI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2=5*60,Z2=_T("authIdTokenMaxAge")||X2;let HI=null;const eM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z2)return;const i=n==null?void 0:n.token;HI!==i&&(HI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oR(t=bm()){const e=mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SS(t,{popupRedirectResolver:nR,persistence:[HS,$S,Kg]}),r=_T("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eM(s.toString());jS(n,o,()=>o(n.currentUser)),US(n,a=>o(a))}}const i=mT("auth");return i&&RS(n,`http://${i}`),n}function tM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J2("Browser");const Xc=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:xV,ActionCodeURL:xo,AuthCredential:ko,AuthErrorCodes:DV,EmailAuthCredential:uo,EmailAuthProvider:li,FacebookAuthProvider:Ln,FactorId:RV,GithubAuthProvider:Fn,GoogleAuthProvider:Mn,OAuthCredential:kn,OAuthProvider:Va,OperationType:kV,PhoneAuthCredential:Ur,PhoneAuthProvider:bi,PhoneMultiFactorGenerator:iR,ProviderId:PV,RecaptchaVerifier:QL,SAMLAuthProvider:Hc,SignInMethod:CV,TotpMultiFactorGenerator:sR,TotpSecret:Qh,TwitterAuthProvider:Un,applyActionCode:jO,beforeAuthStateChanged:jS,browserLocalPersistence:$S,browserPopupRedirectResolver:nR,browserSessionPersistence:Kg,checkActionCode:LS,confirmPasswordReset:UO,connectAuthEmulator:RS,createUserWithEmailAndPassword:zO,debugErrorMap:bV,deleteUser:mL,fetchSignInMethodsForEmail:HO,getAdditionalUserInfo:oL,getAuth:oR,getIdToken:qV,getIdTokenResult:cS,getMultiFactorResolver:gL,getRedirectResult:y2,inMemoryPersistence:bp,indexedDBLocalPersistence:HS,initializeAuth:SS,initializeRecaptchaConfig:lL,isSignInWithEmailLink:GO,linkWithCredential:VS,linkWithPhoneNumber:XL,linkWithPopup:a2,linkWithRedirect:g2,multiFactor:EL,onAuthStateChanged:cL,onIdTokenChanged:US,parseActionCodeURL:NO,prodErrorMap:nS,reauthenticateWithCredential:OS,reauthenticateWithPhoneNumber:ZL,reauthenticateWithPopup:o2,reauthenticateWithRedirect:p2,reload:hS,revokeAccessToken:pL,sendEmailVerification:QO,sendPasswordResetEmail:FO,sendSignInLinkToEmail:qO,setPersistence:aL,signInAnonymously:VO,signInWithCredential:$h,signInWithCustomToken:MO,signInWithEmailAndPassword:$O,signInWithEmailLink:KO,signInWithPhoneNumber:JL,signInWithPopup:s2,signInWithRedirect:d2,signOut:fL,unlink:OO,updateCurrentUser:dL,updateEmail:ZO,updatePassword:eL,updatePhoneNumber:e2,updateProfile:XO,useDeviceLanguage:hL,validatePassword:uL,verifyBeforeUpdateEmail:YO,verifyPasswordResetCode:BO},Symbol.toStringTag,{value:"Module"}));function nM(){return{apiKey:"AIzaSyD3quPJCOUoUH_Um5UceWXYuUXfRpJEuyo",authDomain:"opencode-sk.firebaseapp.com",projectId:"opencode-sk",appId:"1:741268730945:web:503cf0dfab0e9100b042c0"}}let lf=null;function Xg(){return lf||(lf=Nm({apiKey:"AIzaSyD3quPJCOUoUH_Um5UceWXYuUXfRpJEuyo",authDomain:"opencode-sk.firebaseapp.com",projectId:"opencode-sk",appId:"1:741268730945:web:503cf0dfab0e9100b042c0"})),lf}let uf=null;function aR(){return uf||(uf=oR(Xg())),uf}let cf=null;function jl(){return cf||(cf=bA(Xg())),cf}const Zc=Object.freeze(Object.defineProperty({__proto__:null,authClient:aR,dbClient:jl,firebaseApp:Xg,firebaseConfig:nM},Symbol.toStringTag,{value:"Module"})),hf="sq-days",ds="sq-rooms",QI="sq-settings";function rM(){const t=jl();let e="";const n=()=>{var a;return((a=aR().currentUser)==null?void 0:a.uid)??""},r=a=>Xu(t,hf,a,"rooms"),i=(a,u)=>vn(t,hf,a,"rooms",u),s=(a,u)=>vn(t,hf,a,"orders",u);function o(a,u="dirty"){return{building:a.building,floor:a.floor,no:a.no,status:u,checkInTime:null,nextGuest:!1,checkedOutAt:null,prevStatus:null,updatedAt:Date.now(),updatedBy:n()}}return{subscribe(a,u){return e=a,tc(r(a),c=>u(c.docs.map(d=>({id:d.id,...d.data()}))),()=>{})},async update(a,u){await ga(i(e,a),{...u,updatedAt:Date.now(),updatedBy:n()})},async bulkUpdate(a){const u=xp(t);for(const{roomId:c,patch:d}of a)u.update(i(e,c),{...d,updatedAt:Date.now(),updatedBy:n()});await u.commit()},async resetDay(a,u){const c=await Zu(r(a)),d=await Zu(Xu(t,ds)),f=xp(t),m=new Set;c.forEach(y=>{const A=y.data();m.add(y.id),f.set(i(u,y.id),{building:A.building,floor:A.floor,no:A.no,status:A.status==="occupied"?"occupied":"dirty",checkInTime:null,nextGuest:!1,checkedOutAt:null,prevStatus:null,updatedAt:Date.now(),updatedBy:n()})}),d.forEach(y=>{if(m.has(y.id))return;const A={id:y.id,...y.data()};f.set(i(u,y.id),o(A))}),await f.commit()},async ensureDay(a,u){(await Zu(r(a))).empty&&await this.resetDay(u,a)},subscribeRooms(a){return tc(Xu(t,ds),u=>a(u.docs.map(c=>({id:c.id,...c.data()}))),()=>{})},async getSettings(){const a=await HA(vn(t,QI,"app"));return a.exists()?a.data():{floors:cT,layout:hT}},async saveSettings(a){await ma(vn(t,QI,"app"),a,{merge:!0})},async setRoomEnabled(a,u){await ga(vn(t,ds,a),{enabled:u})},async addRoom(a,u,c){const d=gk(a),f={building:a,floor:u,no:c};await ma(vn(t,ds,d),{building:a,floor:u,no:c,enabled:!0}),e&&await ma(i(e,d),o(f))},async updateRoomNo(a,u){await ga(vn(t,ds,a),{no:u}),e&&await ga(i(e,a),{no:u})},async removeRoom(a){await ec(vn(t,ds,a)),e&&await ec(i(e,a)).catch(()=>{})},subscribeOrder(a,u,c){return tc(s(a,u),d=>c(d.exists()?d.data().ids??[]:[]),()=>c([]))},async saveOrder(a,u,c){await ma(s(a,u),{ids:c,updatedAt:Date.now(),updatedBy:n()})},async clearOrder(a,u){await ec(s(a,u))}}}let Nu=null;function iM(){return Nu||(Nu=rM(),Nu)}function sM(t){const e=iM(),[n,r]=ee.useState([]),[i,s]=ee.useState([]),[o,a]=ee.useState({floors:cT,layout:hT}),[u,c]=ee.useState(!0);ee.useEffect(()=>{e.getSettings().then(a).catch(()=>{});const m=e.subscribeRooms(s),y=e.subscribe(t,A=>{r(A),c(!1)});return e.ensureDay(t,mk(t)).catch(()=>{}),()=>{m(),y()}},[t,e]);const d=ee.useMemo(()=>new Set(i.filter(m=>m.enabled).map(m=>m.id)),[i]);return{rooms:ee.useMemo(()=>i.length?n.filter(m=>d.has(m.id)):n,[n,d,i.length]),dayRooms:n,roomMetas:i,settings:o,loading:u,repo:e}}const oM="modulepreload",aM=function(t,e){return new URL(t,e).href},YI={},Gt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=aM(c,r),c in YI)return;YI[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const P=o[A];if(P.href===c&&(!d||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":oM,d||(y.as="script"),y.crossOrigin="",y.href=c,u&&y.setAttribute("nonce",u),document.head.appendChild(y),d)return new Promise((A,P)=>{y.addEventListener("load",A),y.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function lM(){const[e,n]=ee.useState(()=>({role:null,uid:"",email:"",isDemo:!1,loading:!0}));ee.useEffect(()=>{let i=()=>{};return(async()=>{const{authClient:s,dbClient:o}=await Gt(async()=>{const{authClient:f,dbClient:m}=await Promise.resolve().then(()=>Zc);return{authClient:f,dbClient:m}},void 0,import.meta.url),{onAuthStateChanged:a,signOut:u}=await Gt(async()=>{const{onAuthStateChanged:f,signOut:m}=await Promise.resolve().then(()=>Xc);return{onAuthStateChanged:f,signOut:m}},void 0,import.meta.url),{doc:c,getDoc:d}=await Gt(async()=>{const{doc:f,getDoc:m}=await Promise.resolve().then(()=>Uh);return{doc:f,getDoc:m}},void 0,import.meta.url);i=a(s(),async f=>{if(!f){n(m=>({...m,role:null,uid:"",email:"",loading:!1}));return}try{const m=await d(c(o(),"sq-staff",f.uid)),y=m.exists()?m.data():null;if(!y||y.deleted===!0||y.disabled===!0){await u(s()),n(A=>({...A,role:null,uid:"",email:"",loading:!1}));return}n(A=>({...A,role:y.role,uid:f.uid,email:f.email??"",loading:!1}))}catch{n(m=>({...m,role:null,uid:f.uid,email:f.email??"",loading:!1}))}})})(),()=>i()},[!1]);async function r(){const{authClient:i}=await Gt(async()=>{const{authClient:o}=await Promise.resolve().then(()=>Zc);return{authClient:o}},void 0,import.meta.url),{signOut:s}=await Gt(async()=>{const{signOut:o}=await Promise.resolve().then(()=>Xc);return{signOut:o}},void 0,import.meta.url);await s(i())}return{...e,signOut:r}}function js(t){return t.status==="occupied"||t.status==="clean"?null:t.status==="arriving"&&t.checkInTime?1:t.status==="arriving"?2:t.status==="dirty"&&t.checkedOutAt?3:t.status==="dirty"?4:null}const Vp=(t,e)=>t.no.localeCompare(e.no,"en",{numeric:!0});function JI(t,e){const n=js(t),r=js(e);return n!==r?n-r:n===1&&t.checkInTime!==e.checkInTime?t.checkInTime<e.checkInTime?-1:1:Vp(t,e)}function uM(t,e){const n=t.filter(r=>js(r)!==null);if(e&&e.length){const r=new Map;e.forEach((i,s)=>r.set(i,s)),n.sort((i,s)=>{const o=r.has(i.id)?r.get(i.id):Number.MAX_SAFE_INTEGER,a=r.has(s.id)?r.get(s.id):Number.MAX_SAFE_INTEGER;return o!==a?o-a:JI(i,s)})}else n.sort(JI);return n.map((r,i)=>({room:r,seq:i+1}))}function cM(t,e={}){const n=t.filter(r=>js(r)!==null);return n.sort((r,i)=>{const s=js(r),o=js(i);if(s!==o)return s-o;if(r.floor!==i.floor)return r.floor-i.floor;const a=e[`${r.building}-${r.floor}`]??[],u=a.indexOf(r.id),c=a.indexOf(i.id),d=u>=0?u:Number.MAX_SAFE_INTEGER,f=c>=0?c:Number.MAX_SAFE_INTEGER;return d!==f?d-f:Vp(r,i)}),n.map((r,i)=>({room:r,seq:i+1}))}function hM(t){const e=t.role==="front",n=t.dayKey.slice(5).replace("-","/");return k.jsxs("header",{className:`sticky top-0 z-40 border-b border-slate-200 shadow-sm ${t.mode==="clean"?"bg-indigo-600 text-white":"bg-white text-slate-900"}`,children:[k.jsxs("div",{className:"flex items-center gap-2 px-4 py-2",children:[xc.map(r=>k.jsx("button",{onClick:()=>t.onBuilding(r),className:`rounded-full px-3 py-1 text-sm font-semibold ${t.building===r?"bg-slate-900 text-white":"bg-slate-100 text-slate-600"}`,children:ki[r]},r)),k.jsx("span",{className:"ml-auto text-xs opacity-80",children:n}),k.jsx("span",{className:"rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600",children:e?"櫃台":"房務"})]}),k.jsxs("div",{className:"flex items-center gap-2 px-4 pb-2",children:[!e&&k.jsx("span",{className:"rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white",children:"掃房模式"}),t.isDemo&&k.jsx("span",{className:"text-xs text-amber-700",children:"DEMO 模式（資料不共用）"}),k.jsxs("div",{className:"ml-auto flex gap-2",children:[e&&k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onFillHouse,children:"一鍵滿房"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onClearHouse,children:"一鍵未入住"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onResetDay,children:"換日"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onSettings,children:"⚙"})]}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600",onClick:t.onSignOut,children:"登出"})]})]})]})}function dM({building:t,floor:e,rooms:n,columns:r,canCustomOrder:i,hasCustomOrder:s,onCustomOrder:o,renderCard:a}){const u=n.length,c=n.filter(d=>d.status==="arriving"||d.status==="dirty").length;return k.jsxs("section",{className:"mb-4",children:[k.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[k.jsxs("h2",{className:"text-sm font-semibold text-slate-500",children:[ki[t]," ",e,"F"]}),k.jsxs("div",{className:"flex items-center gap-2",children:[i&&k.jsx("button",{onClick:o,className:`rounded-lg px-2 py-0.5 text-xs ${s?"bg-indigo-600 text-white":"bg-slate-100 text-slate-600"}`,children:s?"自訂順序（已設定）":"自訂順序"}),k.jsxs("span",{className:"text-xs text-slate-400",children:["可掃 ",c," / 共 ",u]})]})]}),k.jsx("div",{className:`grid ${r} gap-2`,children:n.map(a)})]})}function fM({on:t,editable:e,onToggle:n}){return t?k.jsx("span",{className:`tag-pop inline-flex items-center gap-0.5 rounded border border-amber-500 bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold text-amber-950 shadow-sm ${e?"cursor-pointer":""}`,onClick:e?r=>{r.stopPropagation(),n()}:void 0,children:"★ 後續入住"}):e?k.jsx("button",{type:"button",className:"rounded bg-slate-100 px-1 py-0.5 text-[10px] text-slate-400",onClick:r=>{r.stopPropagation(),n()},children:"＋後續入住"}):null}const pM=1e3;function mM({room:t,seq:e,role:n,mode:r,pending:i,onCardClick:s,onLongPressTime:o,onToggleNextGuest:a,onMarkClean:u}){const c=ee.useRef(null),d=ee.useRef(!1),f=n==="front",m=t.status==="occupied"?{cls:"bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,.55)] text-amber-950",border:""}:t.status==="arriving"?{cls:"bg-white text-red-600",border:"border-2 border-red-500"}:t.status==="dirty"&&t.checkedOutAt?{cls:"bg-white text-slate-900",border:"border-2 border-blue-500"}:t.status==="dirty"?{cls:"bg-slate-50 text-slate-700",border:"border border-slate-300"}:{cls:"bg-emerald-50 text-emerald-700 opacity-60",border:"border border-emerald-300"},y=t.status==="occupied"?"入住中":t.status==="clean"?"✓ 已打掃":e!==null?`待掃 ${e}`:"";function A(T){if(!f)return;const v={timer:0,cancelled:!1,startX:T.clientX,startY:T.clientY};c.current=v,v.timer=window.setTimeout(()=>{var I;v.cancelled||(d.current=!0,(I=navigator.vibrate)==null||I.call(navigator,30),o(t))},pM)}function P(){const T=c.current;T&&(clearTimeout(T.timer),T.cancelled=!0),c.current=null}function D(T){const v=c.current;v&&(Math.abs(T.clientX-v.startX)>10||Math.abs(T.clientY-v.startY)>10)&&P()}return k.jsxs("div",{className:`relative flex min-h-[88px] cursor-pointer select-none flex-col justify-between rounded-2xl p-2 ${m.cls} ${m.border} ${i?"animate-pulse opacity-70":""} ${r==="clean"&&t.status!=="occupied"?"active:scale-95":""}`,style:{touchAction:"manipulation"},onClick:()=>{if(d.current){d.current=!1;return}r==="clean"&&t.status==="occupied"||s(t)},children:[k.jsxs("div",{className:"flex items-start justify-between",children:[k.jsx("span",{className:"text-xl font-bold tabular-nums",children:t.no}),f&&r==="normal"&&t.status!=="occupied"&&k.jsx("button",{type:"button",className:`-mr-1 -mt-1 rounded-lg px-1.5 py-0.5 text-sm ${t.status==="clean"?"bg-emerald-600 text-white":"bg-black/5 text-slate-600"}`,onClick:T=>{T.stopPropagation(),u(t)},title:t.status==="clean"?"復原":"標記已打掃",children:"✓"})]}),k.jsx("div",{className:"text-center text-2xl font-black tabular-nums",children:y}),k.jsxs("div",{className:"flex flex-col items-center gap-1",children:[k.jsx("div",{className:"w-full text-center text-[11px] tabular-nums text-slate-500",onPointerDown:A,onPointerUp:P,onPointerCancel:P,onPointerMove:D,children:t.checkInTime??"----"}),k.jsx(fM,{on:t.nextGuest,editable:n==="front",onToggle:()=>a(t)})]})]})}function gM(t){const e=t.replace(/\D/g,"").slice(0,4);if(e.length<3)return{time:null,error:"請輸入 4 位數字"};const n=e.padStart(4,"0");let r=Number(n.slice(0,2));const i=Number(n.slice(2,4));return i>59?{time:null,error:"分鐘格式錯誤"}:r>23?{time:null,error:"小時格式錯誤"}:(r>=1&&r<=11&&(r+=12),{time:`${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`})}function _M(t){const[e,n]=t.split(":"),r=Number(e),i=r<12?"上午":"下午";let s=r%12;return s===0&&(s=12),`${i} ${s}:${n}`}function yM(t,e){const[n,r]=t.split(":"),i=(Number(n)+e*12+24)%24;return`${String(i).padStart(2,"0")}:${r}`}function vM({room:t,onConfirm:e,onClear:n,onClose:r}){const[i,s]=ee.useState(t.checkInTime?t.checkInTime.replace(":",""):""),[o,a]=ee.useState(null),u=ee.useRef(null);ee.useEffect(()=>{var m,y;(m=u.current)==null||m.focus(),(y=u.current)==null||y.select()},[]);const c=gM(i);function d(){if(c.error||!c.time){a(c.error??"時間錯誤");return}e(c.time)}function f(m){const y=c.time??"12:00";s(yM(y,m).replace(":","")),a(null)}return k.jsx("div",{className:"fixed inset-0 z-50 flex items-end bg-black/40",onClick:r,children:k.jsxs("div",{className:"w-full rounded-t-3xl bg-white p-5",onClick:m=>m.stopPropagation(),children:[k.jsxs("h3",{className:"text-base font-bold text-slate-900",children:[t.no," 入住時間"]}),k.jsx("input",{ref:u,inputMode:"numeric",maxLength:4,value:i,onChange:m=>{s(m.target.value),a(null)},className:"mt-4 w-full rounded-xl border border-slate-300 p-3 text-center text-3xl font-black tabular-nums tracking-widest",placeholder:"HHMM"}),k.jsx("div",{className:"mt-2 text-center text-lg font-bold tabular-nums text-indigo-600",children:c.time??"--:--"}),k.jsx("div",{className:"mt-1 text-center text-xs text-slate-500",children:c.time?_M(c.time):""}),o&&k.jsx("div",{className:"mt-2 text-center text-sm text-red-600",children:o}),k.jsxs("div",{className:"mt-4 flex justify-center gap-2",children:[k.jsx("button",{className:"rounded-lg border border-slate-300 px-3 py-2 text-sm",onClick:()=>f(-1),children:"上午"}),k.jsx("button",{className:"rounded-lg border border-slate-300 px-3 py-2 text-sm",onClick:()=>f(1),children:"下午"})]}),k.jsxs("div",{className:"mt-5 flex justify-between",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-red-600",onClick:n,children:"清除"}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-slate-600",onClick:r,children:"取消"}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white",onClick:d,children:"確定"})]})]})]})})}function IM({title:t,rooms:e,ids:n,onSave:r,onClear:i,onClose:s}){const[o,a]=ee.useState(()=>{const d=new Set(e.map(y=>y.id)),f=n.filter(y=>d.has(y)),m=e.filter(y=>!f.includes(y.id)).sort((y,A)=>y.no.localeCompare(A.no,"en",{numeric:!0})).map(y=>y.id);return[...f,...m]}),u=ee.useMemo(()=>new Map(e.map(d=>[d.id,d])),[e]);function c(d,f){const m=d+f;if(m<0||m>=o.length)return;const y=[...o];[y[d],y[m]]=[y[m],y[d]],a(y)}return k.jsx("div",{className:"fixed inset-0 z-50 flex items-end bg-black/40",onClick:s,children:k.jsxs("div",{className:"max-h-[80vh] w-full overflow-y-auto rounded-t-3xl bg-white p-5",onClick:d=>d.stopPropagation(),children:[k.jsxs("h3",{className:"mb-1 text-base font-bold text-slate-900",children:[t,"　自訂打掃順序"]}),k.jsx("p",{className:"mb-3 text-xs text-slate-500",children:"僅今日有效；未設定時依系統自動排序。"}),k.jsxs("ul",{className:"mb-3 divide-y divide-slate-100",children:[o.map((d,f)=>{const m=u.get(d);return m?k.jsxs("li",{className:"flex items-center gap-3 py-2",children:[k.jsx("span",{className:"w-6 text-center text-sm font-semibold tabular-nums text-slate-400",children:f+1}),k.jsx("span",{className:"flex-1 text-base font-bold tabular-nums",children:m.no}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-sm",onClick:()=>c(f,-1),children:"↑"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-sm",onClick:()=>c(f,1),children:"↓"})]},d):null}),o.length===0&&k.jsx("li",{className:"py-3 text-sm text-slate-400",children:"此層目前沒有可掃房間"})]}),k.jsxs("div",{className:"flex justify-between",children:[k.jsx("button",{className:"rounded-lg px-3 py-2 text-sm text-red-600",onClick:i,children:"清除自訂（回自動）"}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-slate-600",onClick:s,children:"取消"}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white",onClick:()=>r(o),children:"儲存"})]})]})]})})}function lR(t){return t.open?k.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6",onClick:t.onCancel,children:k.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl",onClick:e=>e.stopPropagation(),children:[k.jsx("h3",{className:"text-base font-bold text-slate-900",children:t.title}),k.jsx("p",{className:"mt-2 text-sm text-slate-600",children:t.message}),k.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-slate-600",onClick:t.onCancel,children:"取消"}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white",onClick:t.onConfirm,children:"確定"})]})]})}):null}function wM({toasts:t}){return k.jsx("div",{className:"pointer-events-none fixed bottom-4 left-0 right-0 z-50 flex flex-col items-center gap-2 px-4",children:t.map(e=>k.jsx("div",{className:"rounded-lg bg-slate-900/90 px-4 py-2 text-sm text-white shadow-lg",children:e.text},e.id))})}function EM({rooms:t,settings:e,role:n,isDemo:r,repo:i,dayKey:s,onOpenSettings:o,onSignOut:a}){const[u,c]=ee.useState("A"),[d,f]=ee.useState(new Set),[m,y]=ee.useState([]),[A,P]=ee.useState(null),[D,T]=ee.useState(null),[v,I]=ee.useState({}),[V,F]=ee.useState(null),L=n==="housekeeping"?"clean":"normal",w=n==="front";ee.useEffect(()=>{const B=[];for(const Z of xc)for(const ne of e.floors){const oe=`${Z}-${ne}`;B.push(i.subscribeOrder(s,oe,Ye=>I(zt=>({...zt,[oe]:Ye}))))}return()=>B.forEach(Z=>Z())},[i,s,e.floors]);function g(B){const Z=Date.now()+Math.random();y(ne=>[...ne,{id:Z,text:B}]),setTimeout(()=>y(ne=>ne.filter(oe=>oe.id!==Z)),2e3)}async function E(B){const Z=B.map(ne=>ne.roomId);f(ne=>new Set([...ne,...Z]));try{await i.bulkUpdate(B)}catch{g("儲存失敗，請重試")}finally{f(ne=>{const oe=new Set(ne);return Z.forEach(Ye=>oe.delete(Ye)),oe})}}const S=ee.useMemo(()=>{const B=new Map;for(const Z of t.filter(ne=>ne.building===u))B.has(Z.floor)||B.set(Z.floor,[]),B.get(Z.floor).push(Z);for(const Z of B.values())Z.sort((ne,oe)=>ne.no.localeCompare(oe.no,"en",{numeric:!0}));return B},[t,u]),C=ee.useMemo(()=>{const B=new Map,Z=t.filter(ne=>ne.building===u);if(u==="A")for(const{room:ne,seq:oe}of cM(Z,v))B.set(ne.id,oe);else{const ne=new Map;for(const oe of Z)ne.has(oe.floor)||ne.set(oe.floor,[]),ne.get(oe.floor).push(oe);for(const[oe,Ye]of ne)for(const{room:zt,seq:Yh}of uM(Ye,v[`${u}-${oe}`]))B.set(zt.id,Yh)}return B},[t,u,v]);function N(B){if(L==="clean"){if(B.status==="occupied"){g("入住中不可掃");return}B.status==="clean"?E([{roomId:B.id,patch:{status:B.prevStatus??"dirty",prevStatus:null}}]):E([{roomId:B.id,patch:{prevStatus:B.status,status:"clean"}}]);return}n==="front"&&(B.status==="occupied"?E([{roomId:B.id,patch:{status:B.nextGuest?"arriving":"dirty",checkedOutAt:Date.now(),checkInTime:null,prevStatus:null}}]):E([{roomId:B.id,patch:{status:"occupied",nextGuest:!1,checkedOutAt:null,prevStatus:null}}]))}function R(B){n!=="front"||B.status==="occupied"||(B.status==="clean"?E([{roomId:B.id,patch:{status:B.prevStatus??"dirty",prevStatus:null}}]):E([{roomId:B.id,patch:{prevStatus:B.status,status:"clean"}}]))}function bt(B){if(n!=="front")return;const Z=!B.nextGuest,ne={nextGuest:Z};Z&&B.status!=="occupied"&&(ne.status="arriving"),!Z&&B.status==="arriving"&&!B.checkInTime&&(ne.status="dirty"),E([{roomId:B.id,patch:ne}])}function Nn(B){if(!A)return;const Z={checkInTime:B,nextGuest:!0};(A.status==="dirty"||A.status==="clean")&&(Z.status="arriving"),E([{roomId:A.id,patch:Z}]),P(null)}function ui(){A&&(E([{roomId:A.id,patch:{checkInTime:null}}]),P(null))}function an(){const B=t.filter(oe=>oe.building===u),Z=B.filter(oe=>oe.nextGuest).length,ne=ki[u];F({title:`一鍵滿房 ${ne}`,message:`${B.length} 間將全部亮燈，設有「後續入住」的房間會維持待入住。確定？`,onOk:()=>{F(null);const oe=B.map(Ye=>Ye.nextGuest?{roomId:Ye.id,patch:{status:"arriving",checkedOutAt:null}}:{roomId:Ye.id,patch:{status:"occupied",checkedOutAt:null}});E(oe),g(`${ne}已滿房${Z?`（跳過 ${Z} 間後續入住）`:""}`)}})}function W(){const B=t.filter(ne=>ne.building===u),Z=ki[u];F({title:`一鍵未入住（${Z}）`,message:`將 ${B.length} 間房全部設為「未入住」，並清除入住時間與後續入住標記，確定嗎？`,onOk:()=>{F(null),E(B.map(ne=>({roomId:ne.id,patch:{status:"dirty",checkInTime:null,nextGuest:!1,checkedOutAt:null,prevStatus:null}}))),g(`${Z}已全部設為未入住`)}})}function te(){const B=pk(s);F({title:"換日",message:`建立 ${B} 的一天？今天的紀錄會保留。`,onOk:async()=>{F(null);try{await i.resetDay(s,B),g(`已建立 ${B}`)}catch{g("換日失敗，請重試")}}})}const ie=u==="A"?"grid-cols-2 sm:grid-cols-4":"grid-cols-4 sm:grid-cols-6",Ee=D===null?[]:(S.get(D)??[]).filter(B=>B.status==="arriving"||B.status==="dirty");return k.jsxs("div",{className:"min-h-full bg-slate-100 pb-10",children:[k.jsx(hM,{building:u,onBuilding:c,role:n,mode:L,dayKey:s,isDemo:r,onFillHouse:an,onClearHouse:W,onResetDay:te,onSettings:o,onSignOut:a}),k.jsx("main",{className:"px-4 py-4",children:e.floors.map(B=>{const Z=S.get(B)??[];if(Z.length===0)return null;const ne=`${u}-${B}`;return k.jsx(dM,{building:u,floor:B,rooms:Z,columns:ie,canCustomOrder:w,hasCustomOrder:(v[ne]??[]).length>0,onCustomOrder:()=>T(B),renderCard:oe=>k.jsx(mM,{room:oe,seq:C.get(oe.id)??null,role:n,mode:L,pending:d.has(oe.id),onCardClick:N,onLongPressTime:P,onToggleNextGuest:bt,onMarkClean:R},oe.id)},B)})}),A&&k.jsx(vM,{room:A,onConfirm:Nn,onClear:ui,onClose:()=>P(null)}),D!==null&&k.jsx(IM,{title:`${ki[u]} ${D}F`,rooms:Ee,ids:v[`${u}-${D}`]??[],onSave:async B=>{T(null);try{await i.saveOrder(s,`${u}-${D}`,B)}catch{g("儲存失敗，請重試")}},onClear:async()=>{T(null);try{await i.clearOrder(s,`${u}-${D}`)}catch{g("儲存失敗，請重試")}},onClose:()=>T(null)}),k.jsx(lR,{open:!!V,title:(V==null?void 0:V.title)??"",message:(V==null?void 0:V.message)??"",onConfirm:()=>V==null?void 0:V.onOk(),onCancel:()=>F(null)}),k.jsx(wM,{toasts:m})]})}function TM({meta:t,onCommit:e,onToggle:n,onDelete:r}){const[i,s]=ee.useState(t.no),[o,a]=ee.useState(null);ee.useEffect(()=>{s(t.no),a(null)},[t.no,t.id]);function u(){if(i===t.no){a(null);return}const c=e(i);c?(a(c),s(t.no)):a(null)}return k.jsxs("div",{className:"flex items-center gap-2 py-1",children:[k.jsx("input",{value:i,inputMode:"numeric",maxLength:4,onChange:c=>{s(c.target.value),a(null)},onBlur:u,onKeyDown:c=>{c.key==="Enter"&&c.target.blur()},className:`w-20 rounded-lg border p-1 text-center text-sm tabular-nums ${o?"border-red-500":"border-slate-300"}`}),k.jsx("button",{onClick:n,className:`rounded-lg px-2 py-1 text-xs ${t.enabled?"bg-slate-900 text-white":"bg-slate-100 text-slate-400 line-through"}`,children:t.enabled?"啟用":"停用"}),k.jsx("button",{onClick:r,className:"rounded-lg bg-red-50 px-2 py-1 text-xs text-red-600",children:"🗑 刪除"}),o&&k.jsx("span",{className:"text-xs text-red-600",children:o})]})}function AM({settings:t,repo:e,role:n,isDemo:r,email:i,onBack:s,onSignOut:o,onOpenAccounts:a}){const u=t.floors,[c,d]=ee.useState([]),[f,m]=ee.useState(null),[y,A]=ee.useState(!1);ee.useEffect(()=>{const L=e.subscribeRooms(d);return()=>L()},[e]);const P=ee.useMemo(()=>{const L=new Map;for(const w of c){const g=`${w.building}-${w.floor}`;L.has(g)||L.set(g,[]),L.get(g).push(w)}for(const w of L.values())w.sort((g,E)=>g.no.localeCompare(E.no,"en",{numeric:!0}));return L},[c]);function D(){window.alert("儲存失敗，請重試")}function T(L,w){const g=w.trim();return yk(g)?av(c,L.building,g,L.id)?"同館號碼重複":(A(!0),e.updateRoomNo(L.id,g).catch(D).finally(()=>A(!1)),null):"需為 3–4 位數字"}async function v(L){A(!0);try{await e.setRoomEnabled(L.id,!L.enabled)}catch{D()}finally{A(!1)}}function I(L){m({message:`確定刪除房間 ${L.no}？該房當天的紀錄也會移除。`,onOk:async()=>{m(null),A(!0);try{await e.removeRoom(L.id)}catch{D()}finally{A(!1)}}})}function V(L,w){let E=c.filter(S=>S.building===L).reduce((S,C)=>Math.max(S,parseInt(C.no,10)||0),0)+1;for(E<100&&(E=w*100+1);av(c,L,String(E));)E++;return String(E)}async function F(L,w){A(!0);try{await e.addRoom(L,w,V(L,w))}catch{D()}finally{A(!1)}}return k.jsxs("div",{className:"min-h-full bg-slate-100 pb-10",children:[k.jsxs("header",{className:"sticky top-0 z-40 flex items-center gap-2 border-b bg-white px-4 py-3",children:[k.jsx("button",{className:"text-sm text-slate-600",onClick:s,children:"← 返回"}),k.jsx("h1",{className:"text-base font-bold",children:"設定"})]}),k.jsxs("main",{className:"px-4 py-4",children:[k.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[k.jsx("h2",{className:"text-sm font-semibold text-slate-500",children:"房間（房號可自訂）"}),k.jsxs("span",{className:"text-sm text-slate-600",children:[xc.map(L=>`${ki[L]} ${_k(c,L)} 間`).join(" / ")," / 合計 ",c.length," 間"]})]}),xc.map(L=>k.jsxs("div",{className:"mb-4 rounded-2xl bg-white p-3",children:[k.jsx("div",{className:"mb-2 text-sm font-bold text-slate-700",children:ki[L]}),u.map(w=>k.jsxs("div",{className:"mb-2 border-t border-slate-100 pt-2",children:[k.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[k.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:[w,"F"]}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-2 py-0.5 text-xs text-white",onClick:()=>F(L,w),disabled:y,children:"＋ 新增房間"})]}),(P.get(`${L}-${w}`)??[]).map(g=>k.jsx(TM,{meta:g,onCommit:E=>T(g,E),onToggle:()=>v(g),onDelete:()=>I(g)},g.id)),(P.get(`${L}-${w}`)??[]).length===0&&k.jsx("div",{className:"py-1 text-xs text-slate-400",children:"（此層尚無房間）"})]},w))]},L)),k.jsx("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:"帳號"}),k.jsxs("div",{className:"rounded-2xl bg-white p-3 text-sm text-slate-600",children:[k.jsxs("div",{children:["帳號：",i||"（未登入）"]}),k.jsxs("div",{children:["角色：",n==="front"?"櫃台":"房務"]}),r&&k.jsx("div",{className:"text-amber-700",children:"DEMO 模式（資料不共用）"}),n==="front"&&k.jsx("button",{className:"mt-2 block text-indigo-600",onClick:a,children:"→ 帳號管理"}),k.jsx("button",{className:"mt-2 text-red-600",onClick:o,children:"登出"})]})]}),k.jsx(lR,{open:!!f,title:"確認",message:(f==null?void 0:f.message)??"",onConfirm:()=>f==null?void 0:f.onOk(),onCancel:()=>m(null)})]})}function SM(t){return t.sort((e,n)=>{const r=e.role==="front"?0:1,i=n.role==="front"?0:1;return r!==i?r-i:e.email.localeCompare(n.email)})}async function RM(){const{collection:t,getDocs:e}=await Gt(async()=>{const{collection:r,getDocs:i}=await Promise.resolve().then(()=>Uh);return{collection:r,getDocs:i}},void 0,import.meta.url),n=await e(t(jl(),"sq-staff"));return SM(n.docs.map(r=>{const i=r.data();return{uid:r.id,email:i.email||"",role:i.role||"housekeeping",name:i.name||"",note:i.note||"",disabled:i.disabled===!0,deleted:i.deleted===!0}}))}async function bo(t,e){const{doc:n,updateDoc:r}=await Gt(async()=>{const{doc:i,updateDoc:s}=await Promise.resolve().then(()=>Uh);return{doc:i,updateDoc:s}},void 0,import.meta.url);await r(n(jl(),"sq-staff",t),e)}const PM=(t,e)=>bo(t,{role:e}),CM=(t,e)=>bo(t,{note:e}),kM=t=>bo(t,{disabled:!0}),xM=t=>bo(t,{disabled:!1}),NM=t=>bo(t,{deleted:!0,disabled:!0,deletedAt:Date.now()}),bM=t=>bo(t,{deleted:!1,disabled:!1}),DM="saofang.local";function VM(t){const e=t.trim();return e?e.includes("@")?e.toLowerCase():`${e.toLowerCase()}@${DM}`:""}async function OM(t){const e=VM(t.username);if(!/^[a-z0-9._-]{3,}@/.test(e))throw new Error("帳號需 3 位以上英數");if(!t.password||t.password.length<6)throw new Error("密碼至少 6 碼");const{initializeApp:n,deleteApp:r}=await Gt(async()=>{const{initializeApp:m,deleteApp:y}=await Promise.resolve().then(()=>SV);return{initializeApp:m,deleteApp:y}},void 0,import.meta.url),{getAuth:i,createUserWithEmailAndPassword:s,signOut:o,deleteUser:a}=await Gt(async()=>{const{getAuth:m,createUserWithEmailAndPassword:y,signOut:A,deleteUser:P}=await Promise.resolve().then(()=>Xc);return{getAuth:m,createUserWithEmailAndPassword:y,signOut:A,deleteUser:P}},void 0,import.meta.url),{firebaseConfig:u}=await Gt(async()=>{const{firebaseConfig:m}=await Promise.resolve().then(()=>Zc);return{firebaseConfig:m}},void 0,import.meta.url),c=n(u(),`saofang-prov-${Date.now()}`),d=i(c);let f=null;try{f=await s(d,e,t.password);const{doc:m,setDoc:y}=await Gt(async()=>{const{doc:A,setDoc:P}=await Promise.resolve().then(()=>Uh);return{doc:A,setDoc:P}},void 0,import.meta.url);await y(m(jl(),"sq-staff",f.user.uid),{role:t.role,name:"",note:t.note,email:e,disabled:!1,deleted:!1,createdAt:Date.now()})}catch(m){throw f&&await a(f.user).catch(()=>{}),(m==null?void 0:m.code)==="auth/email-already-in-use"?new Error("此帳號已存在"):m}finally{await o(d).catch(()=>{}),await r(c).catch(()=>{})}}function LM({value:t,onSave:e}){const[n,r]=ee.useState(t);return ee.useEffect(()=>{r(t)},[t]),k.jsx("input",{value:n,placeholder:"備註（中文名）",onChange:i=>r(i.target.value),onBlur:()=>{n!==t&&e(n.trim())},onKeyDown:i=>{i.key==="Enter"&&i.target.blur()},className:"w-32 rounded-lg border border-slate-200 px-2 py-1 text-xs"})}function MM({onBack:t,selfUid:e}){const[n,r]=ee.useState([]),[i,s]=ee.useState(!0),[o,a]=ee.useState(null),[u,c]=ee.useState(!1),[d,f]=ee.useState({username:"",password:"",role:"housekeeping",note:""}),[m,y]=ee.useState(!1);async function A(){s(!0);try{r(await RM())}catch(I){a("讀取帳號失敗："+(I instanceof Error?I.message:"錯誤"))}finally{s(!1)}}ee.useEffect(()=>{A()},[]);function P(I){a(I),setTimeout(()=>a(null),3e3)}async function D(I,V){c(!0);try{await I(),await A(),P(V)}catch(F){P("操作失敗："+(F instanceof Error?F.message:"錯誤"))}finally{c(!1)}}const T=n.filter(I=>!I.deleted),v=n.filter(I=>I.deleted);return k.jsxs("div",{className:"min-h-full bg-slate-100 pb-10",children:[k.jsxs("header",{className:"sticky top-0 z-40 flex items-center gap-2 border-b bg-white px-4 py-3",children:[k.jsx("button",{className:"text-sm text-slate-600",onClick:t,children:"← 返回"}),k.jsx("h1",{className:"text-base font-bold",children:"帳號管理"})]}),k.jsxs("main",{className:"px-4 py-4",children:[o&&k.jsx("div",{className:"mb-3 rounded-lg bg-slate-900/90 px-3 py-2 text-sm text-white",children:o}),k.jsxs("section",{className:"mb-4 rounded-2xl bg-white p-3",children:[k.jsx("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:"新增帳號"}),k.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[k.jsx("input",{className:"rounded-lg border border-slate-300 p-2 text-sm",placeholder:"短帳號（如 WIND01）",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,value:d.username,onChange:I=>f({...d,username:I.target.value})}),k.jsx("input",{className:"rounded-lg border border-slate-300 p-2 text-sm",placeholder:"備註（中文名）",value:d.note,onChange:I=>f({...d,note:I.target.value})}),k.jsxs("div",{className:"pw-wrap flex items-center",style:{position:"relative"},children:[k.jsx("input",{type:m?"text":"password",className:"w-full rounded-lg border border-slate-300 p-2 text-sm",style:{paddingRight:48},placeholder:"密碼（≥6）",value:d.password,onChange:I=>f({...d,password:I.target.value})}),k.jsx("button",{type:"button",className:"absolute right-2 text-xs text-slate-500",onClick:()=>y(I=>!I),children:m?"隱藏":"顯示"})]}),k.jsxs("select",{className:"rounded-lg border border-slate-300 p-2 text-sm",value:d.role,onChange:I=>f({...d,role:I.target.value}),children:[k.jsx("option",{value:"housekeeping",children:"房務"}),k.jsx("option",{value:"front",children:"櫃台"})]})]}),k.jsx("button",{disabled:u,className:"mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60",onClick:()=>D(async()=>{await OM(d),f({username:"",password:"",role:"housekeeping",note:""})},"已建立帳號"),children:"建立"}),k.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"短帳號會自動補 @saofang.local；建立後即可用該帳密登入。"})]}),k.jsxs("div",{className:"mb-4 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900",children:["「刪除」＝收回權限並放入保留區（可復原）。若要「永久刪除」或重設密碼，請在電腦執行：",k.jsx("br",{}),k.jsxs("code",{className:"mt-1 block whitespace-pre-wrap break-all rounded bg-white/70 p-1",children:["node tools/set-account.mjs <帳號> --remove",`
`,"node tools/set-account.mjs <帳號> --password <新密碼>"]})]}),k.jsxs("section",{className:"mb-4 rounded-2xl bg-white p-3",children:[k.jsxs("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:["帳號（",T.length,"）"]}),i&&k.jsx("div",{className:"text-sm text-slate-400",children:"載入中…"}),T.map(I=>{const V=I.uid===e;return k.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-t border-slate-100 py-2",children:[k.jsxs("div",{className:"min-w-[150px] flex-1",children:[k.jsxs("div",{className:"text-sm font-semibold",children:[I.role==="front"&&k.jsx("span",{className:"mr-1 rounded bg-indigo-600 px-1 py-0.5 text-[10px] text-white",children:"櫃台"}),I.email||I.uid,V&&k.jsx("span",{className:"ml-1 rounded bg-slate-200 px-1 py-0.5 text-[10px] text-slate-600",children:"本人"})]}),k.jsx("div",{className:"text-xs text-slate-500",children:I.disabled?k.jsx("span",{className:"text-amber-600",children:"已停用"}):"正常"})]}),V?k.jsx("div",{className:"text-xs text-slate-400",children:"本人帳號不可在此停用或刪除"}):k.jsxs(k.Fragment,{children:[k.jsx(LM,{value:I.note,onSave:F=>D(()=>CM(I.uid,F),"已更新備註")}),k.jsxs("select",{className:"rounded-lg border border-slate-300 p-1 text-xs",value:I.role,disabled:u,onChange:F=>D(()=>PM(I.uid,F.target.value),"已更新角色"),children:[k.jsx("option",{value:"housekeeping",children:"房務"}),k.jsx("option",{value:"front",children:"櫃台"})]}),I.disabled?k.jsx("button",{disabled:u,className:"rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white",onClick:()=>D(()=>xM(I.uid),"已啟用"),children:"啟用"}):k.jsx("button",{disabled:u,className:"rounded-lg bg-amber-100 px-2 py-1 text-xs text-amber-800",onClick:()=>D(()=>kM(I.uid),"已停用"),children:"停用"}),k.jsx("button",{disabled:u,className:"rounded-lg bg-red-50 px-2 py-1 text-xs text-red-600",onClick:()=>D(()=>NM(I.uid),"已移至保留區"),children:"刪除"})]})]},I.uid)})]}),k.jsxs("section",{className:"rounded-2xl bg-slate-200 p-3",children:[k.jsxs("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:["保留區（",v.length,"）"]}),v.map(I=>k.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-t border-slate-300 py-2",children:[k.jsxs("div",{className:"min-w-[150px] flex-1",children:[k.jsx("div",{className:"text-sm font-semibold text-slate-500 line-through",children:I.email||I.uid}),k.jsx("div",{className:"text-xs text-slate-400",children:I.note})]}),k.jsx("button",{disabled:u,className:"rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white",onClick:()=>D(()=>bM(I.uid),"已復原"),children:"復原"})]},I.uid)),v.length===0&&k.jsx("div",{className:"py-2 text-xs text-slate-400",children:"（沒有已刪除帳號）"})]})]})]})}function FM(t,e){const n=document.getElementById(t);if(!n)return;const r=n.type==="password";n.type=r?"text":"password",e.innerHTML=r?'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>':'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'}const UM="saofang.local";function jM(){const[t,e]=ee.useState(""),[n,r]=ee.useState(""),[i,s]=ee.useState(null),[o,a]=ee.useState(!1);async function u(c){c.preventDefault(),s(null),a(!0);try{const{authClient:d}=await Gt(async()=>{const{authClient:A}=await Promise.resolve().then(()=>Zc);return{authClient:A}},void 0,import.meta.url),{signInWithEmailAndPassword:f}=await Gt(async()=>{const{signInWithEmailAndPassword:A}=await Promise.resolve().then(()=>Xc);return{signInWithEmailAndPassword:A}},void 0,import.meta.url),m=t.trim().toLowerCase(),y=m.includes("@")?m:`${m}@${UM}`;await f(d(),y,n)}catch{s("登入失敗，請檢查帳號密碼")}finally{a(!1)}}return k.jsx("div",{className:"flex min-h-full items-center justify-center bg-slate-100 px-6",children:k.jsxs("form",{onSubmit:u,className:"w-full max-w-sm rounded-2xl bg-white p-6 shadow",children:[k.jsx("h1",{className:"mb-1 text-lg font-bold text-slate-900",children:"民宿掃房順序"}),k.jsx("p",{className:"mb-5 text-xs text-slate-500",children:"請以櫃台或房務帳號登入"}),k.jsx("label",{className:"mb-1 block text-sm text-slate-600",children:"帳號"}),k.jsx("input",{type:"text",value:t,onChange:c=>e(c.target.value),className:"mb-3 w-full rounded-lg border border-slate-300 p-2 text-sm",autoComplete:"username",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1}),k.jsx("label",{className:"mb-1 block text-sm text-slate-600",children:"密碼"}),k.jsxs("div",{className:"pw-wrap mb-4 flex items-center",style:{position:"relative"},children:[k.jsx("input",{id:"login-pw",type:"password",value:n,onChange:c=>r(c.target.value),className:"w-full rounded-lg border border-slate-300 p-2 text-sm",style:{paddingRight:40},autoComplete:"current-password"}),k.jsx("button",{type:"button",className:"pw-toggle absolute right-2",onClick:c=>FM("login-pw",c.currentTarget),"aria-label":"顯示或隱藏密碼",children:k.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#666",strokeWidth:"2",children:[k.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),k.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),i&&k.jsx("div",{className:"mb-3 text-sm text-red-600",children:i}),k.jsx("button",{type:"submit",disabled:o,className:"w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white disabled:opacity-60",children:o?"登入中…":"登入"})]})})}function BM(){const t=fk(),e=lM();return e.loading?k.jsx("div",{className:"flex h-full items-center justify-center text-slate-500",children:"載入中…"}):e.role?k.jsx(zM,{dayKey:t,auth:e}):k.jsx(jM,{})}function zM({dayKey:t,auth:e}){const{rooms:n,settings:r,repo:i}=sM(t),[s,o]=ee.useState("main");return s==="accounts"&&e.role==="front"?k.jsx(MM,{onBack:()=>o("settings"),selfUid:e.uid}):s==="settings"?k.jsx(AM,{settings:r,repo:i,role:e.role,isDemo:e.isDemo,email:e.email,onBack:()=>o("main"),onSignOut:async()=>{await e.signOut(),o("main")},onOpenAccounts:()=>o("accounts")}):k.jsx(EM,{rooms:n,settings:r,role:e.role,isDemo:e.isDemo,repo:i,dayKey:t,onOpenSettings:()=>o("settings"),onSignOut:async()=>{await e.signOut(),o("main")}})}df.createRoot(document.getElementById("root")).render(k.jsx(tP.StrictMode,{children:k.jsx(BM,{})}));
