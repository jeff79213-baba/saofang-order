(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function UR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ZI={exports:{}},nh={},ew={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),jR=Symbol.for("react.portal"),BR=Symbol.for("react.fragment"),zR=Symbol.for("react.strict_mode"),$R=Symbol.for("react.profiler"),qR=Symbol.for("react.provider"),GR=Symbol.for("react.context"),KR=Symbol.for("react.forward_ref"),WR=Symbol.for("react.suspense"),HR=Symbol.for("react.memo"),QR=Symbol.for("react.lazy"),Z_=Symbol.iterator;function YR(t){return t===null||typeof t!="object"?null:(t=Z_&&t[Z_]||t["@@iterator"],typeof t=="function"?t:null)}var tw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nw=Object.assign,rw={};function fo(t,e,n){this.props=t,this.context=e,this.refs=rw,this.updater=n||tw}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iw(){}iw.prototype=fo.prototype;function Lp(t,e,n){this.props=t,this.context=e,this.refs=rw,this.updater=n||tw}var Mp=Lp.prototype=new iw;Mp.constructor=Lp;nw(Mp,fo.prototype);Mp.isPureReactComponent=!0;var ey=Array.isArray,sw=Object.prototype.hasOwnProperty,Fp={current:null},ow={key:!0,ref:!0,__self:!0,__source:!0};function aw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sw.call(e,r)&&!ow.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:Fp.current}}function JR(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function XR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ty=/\/+/g;function wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XR(""+t.key):e.toString(36)}function Vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case jR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wd(o,0):r,ey(i)?(n="",t!=null&&(n=t.replace(ty,"$&/")+"/"),Vu(i,e,n,"",function(c){return c})):i!=null&&(Up(i)&&(i=JR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ty,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ey(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+wd(s,a);o+=Vu(s,e,n,u,i)}else if(u=YR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+wd(s,a++),o+=Vu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function au(t,e,n){if(t==null)return t;var r=[],i=0;return Vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ZR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Ou={transition:null},eP={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Ou,ReactCurrentOwner:Fp};function lw(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:au,forEach:function(t,e,n){au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return au(t,function(){e++}),e},toArray:function(t){return au(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=fo;le.Fragment=BR;le.Profiler=$R;le.PureComponent=Lp;le.StrictMode=zR;le.Suspense=WR;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eP;le.act=lw;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)sw.call(e,u)&&!ow.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:GR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qR,_context:t},t.Consumer=t};le.createElement=aw;le.createFactory=function(t){var e=aw.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:KR,render:t}};le.isValidElement=Up;le.lazy=function(t){return{$$typeof:QR,_payload:{_status:-1,_result:t},_init:ZR}};le.memo=function(t,e){return{$$typeof:HR,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Ou.transition;Ou.transition={};try{t()}finally{Ou.transition=e}};le.unstable_act=lw;le.useCallback=function(t,e){return Nt.current.useCallback(t,e)};le.useContext=function(t){return Nt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Nt.current.useEffect(t,e)};le.useId=function(){return Nt.current.useId()};le.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Nt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};le.useRef=function(t){return Nt.current.useRef(t)};le.useState=function(t){return Nt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Nt.current.useTransition()};le.version="18.3.1";ew.exports=le;var Z=ew.exports;const tP=UR(Z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nP=Z,rP=Symbol.for("react.element"),iP=Symbol.for("react.fragment"),sP=Object.prototype.hasOwnProperty,oP=nP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aP={key:!0,ref:!0,__self:!0,__source:!0};function uw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sP.call(e,r)&&!aP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rP,type:t,key:s,ref:o,props:i,_owner:oP.current}}nh.Fragment=iP;nh.jsx=uw;nh.jsxs=uw;ZI.exports=nh;var k=ZI.exports,ff={},cw={exports:{}},Jt={},hw={exports:{}},dw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ee){var ie=W.length;W.push(ee);e:for(;0<ie;){var Te=ie-1>>>1,me=W[Te];if(0<i(me,ee))W[Te]=ee,W[ie]=me,ie=Te;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ee=W[0],ie=W.pop();if(ie!==ee){W[0]=ie;e:for(var Te=0,me=W.length,Le=me>>>1;Te<Le;){var K=2*(Te+1)-1,re=W[K],te=K+1,oe=W[te];if(0>i(re,ie))te<me&&0>i(oe,re)?(W[Te]=oe,W[te]=ie,Te=te):(W[Te]=re,W[K]=ie,Te=K);else if(te<me&&0>i(oe,ie))W[Te]=oe,W[te]=ie,Te=te;else break e}}return ee}function i(W,ee){var ie=W.sortIndex-ee.sortIndex;return ie!==0?ie:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,m=3,y=!1,A=!1,C=!1,D=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(W){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=W)r(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function V(W){if(C=!1,v(W),!A)if(n(u)!==null)A=!0,ci(F);else{var ee=n(c);ee!==null&&an(V,ee.startTime-W)}}function F(W,ee){A=!1,C&&(C=!1,E(g),g=-1),y=!0;var ie=m;try{for(v(ee),f=n(u);f!==null&&(!(f.expirationTime>ee)||W&&!P());){var Te=f.callback;if(typeof Te=="function"){f.callback=null,m=f.priorityLevel;var me=Te(f.expirationTime<=ee);ee=t.unstable_now(),typeof me=="function"?f.callback=me:f===n(u)&&r(u),v(ee)}else r(u);f=n(u)}if(f!==null)var Le=!0;else{var K=n(c);K!==null&&an(V,K.startTime-ee),Le=!1}return Le}finally{f=null,m=ie,y=!1}}var O=!1,w=null,g=-1,T=5,S=-1;function P(){return!(t.unstable_now()-S<T)}function N(){if(w!==null){var W=t.unstable_now();S=W;var ee=!0;try{ee=w(!0,W)}finally{ee?R():(O=!1,w=null)}}else O=!1}var R;if(typeof I=="function")R=function(){I(N)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,bn=Dt.port2;Dt.port1.onmessage=N,R=function(){bn.postMessage(null)}}else R=function(){D(N,0)};function ci(W){w=W,O||(O=!0,R())}function an(W,ee){g=D(function(){W(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){A||y||(A=!0,ci(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var ie=m;m=ee;try{return W()}finally{m=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ie=m;m=W;try{return ee()}finally{m=ie}},t.unstable_scheduleCallback=function(W,ee,ie){var Te=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Te+ie:Te):ie=Te,W){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=ie+me,W={id:d++,callback:ee,priorityLevel:W,startTime:ie,expirationTime:me,sortIndex:-1},ie>Te?(W.sortIndex=ie,e(c,W),n(u)===null&&W===n(c)&&(C?(E(g),g=-1):C=!0,an(V,ie-Te))):(W.sortIndex=me,e(u,W),A||y||(A=!0,ci(F))),W},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(W){var ee=m;return function(){var ie=m;m=ee;try{return W.apply(this,arguments)}finally{m=ie}}}})(dw);hw.exports=dw;var lP=hw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uP=Z,Ht=lP;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fw=new Set,Fa={};function Ji(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(Fa[t]=e,t=0;t<e.length;t++)fw.add(e[t])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,cP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ny={},ry={};function hP(t){return pf.call(ry,t)?!0:pf.call(ny,t)?!1:cP.test(t)?ry[t]=!0:(ny[t]=!0,!1)}function dP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fP(t,e,n,r){if(e===null||typeof e>"u"||dP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function Bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jp,Bp);pt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jp,Bp);pt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jp,Bp);pt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zp(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fP(e,n,i,r)&&(n=null),r||i===null?hP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=uP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),vs=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),pw=Symbol.for("react.provider"),mw=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),Gp=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),gw=Symbol.for("react.offscreen"),iy=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=iy&&t[iy]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,Ed;function la(t){if(Ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+t}var Td=!1;function Sd(t,e){if(!t||Td)return"";Td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?la(t):""}function pP(t){switch(t.tag){case 5:return la(t.type);case 16:return la("Lazy");case 13:return la("Suspense");case 19:return la("SuspenseList");case 0:case 2:case 15:return t=Sd(t.type,!1),t;case 11:return t=Sd(t.type.render,!1),t;case 1:return t=Sd(t.type,!0),t;default:return""}}function yf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case vs:return"Portal";case mf:return"Profiler";case $p:return"StrictMode";case gf:return"Suspense";case _f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mw:return(t.displayName||"Context")+".Consumer";case pw:return(t._context.displayName||"Context")+".Provider";case qp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gp:return e=t.displayName||null,e!==null?e:yf(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return yf(t(e))}catch{}}return null}function mP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yf(e);case 8:return e===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gP(t){var e=_w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=gP(t))}function yw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vw(t,e){e=e.checked,e!=null&&zp(t,"checked",e,!1)}function If(t,e){vw(t,e);var n=Br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&wf(t,e.type,Br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wf(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ef(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ay(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ua(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Br(n)}}function Iw(t,e){var n=Br(e.value),r=Br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ly(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ww(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ww(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,Ew=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_P=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){_P.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function Tw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function Sw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yP=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(yP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rf=null;function Kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pf=null,bs=null,Ds=null;function uy(t){if(t=wl(t)){if(typeof Pf!="function")throw Error(B(280));var e=t.stateNode;e&&(e=ah(e),Pf(t.stateNode,t.type,e))}}function Aw(t){bs?Ds?Ds.push(t):Ds=[t]:bs=t}function Rw(){if(bs){var t=bs,e=Ds;if(Ds=bs=null,uy(t),e)for(t=0;t<e.length;t++)uy(e[t])}}function Pw(t,e){return t(e)}function Cw(){}var Ad=!1;function kw(t,e,n){if(Ad)return t(e,n);Ad=!0;try{return Pw(t,e,n)}finally{Ad=!1,(bs!==null||Ds!==null)&&(Cw(),Rw())}}function ja(t,e){var n=t.stateNode;if(n===null)return null;var r=ah(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Cf=!1;if(Yn)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{Cf=!1}function vP(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ea=!1,uc=null,cc=!1,kf=null,IP={onError:function(t){Ea=!0,uc=t}};function wP(t,e,n,r,i,s,o,a,u){Ea=!1,uc=null,vP.apply(IP,arguments)}function EP(t,e,n,r,i,s,o,a,u){if(wP.apply(this,arguments),Ea){if(Ea){var c=uc;Ea=!1,uc=null}else throw Error(B(198));cc||(cc=!0,kf=c)}}function Xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cy(t){if(Xi(t)!==t)throw Error(B(188))}function TP(t){var e=t.alternate;if(!e){if(e=Xi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cy(i),t;if(s===r)return cy(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Nw(t){return t=TP(t),t!==null?bw(t):null}function bw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bw(t);if(e!==null)return e;t=t.sibling}return null}var Dw=Ht.unstable_scheduleCallback,hy=Ht.unstable_cancelCallback,SP=Ht.unstable_shouldYield,AP=Ht.unstable_requestPaint,Ke=Ht.unstable_now,RP=Ht.unstable_getCurrentPriorityLevel,Wp=Ht.unstable_ImmediatePriority,Vw=Ht.unstable_UserBlockingPriority,hc=Ht.unstable_NormalPriority,PP=Ht.unstable_LowPriority,Ow=Ht.unstable_IdlePriority,rh=null,An=null;function CP(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(rh,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:NP,kP=Math.log,xP=Math.LN2;function NP(t){return t>>>=0,t===0?32:31-(kP(t)/xP|0)|0}var hu=64,du=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ca(a):(s&=o,s!==0&&(r=ca(s)))}else o=n&~i,o!==0?r=ca(o):s!==0&&(r=ca(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function bP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=bP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lw(){var t=hu;return hu<<=1,!(hu&4194240)&&(hu=64),t}function Rd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function VP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function Mw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fw,Qp,Uw,jw,Bw,Nf=!1,fu=[],xr=null,Nr=null,br=null,Ba=new Map,za=new Map,wr=[],OP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dy(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function Jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=wl(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LP(t,e,n,r,i){switch(e){case"focusin":return xr=Jo(xr,t,e,n,r,i),!0;case"dragenter":return Nr=Jo(Nr,t,e,n,r,i),!0;case"mouseover":return br=Jo(br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ba.set(s,Jo(Ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,za.set(s,Jo(za.get(s)||null,t,e,n,r,i)),!0}return!1}function zw(t){var e=Si(t.target);if(e!==null){var n=Xi(e);if(n!==null){if(e=n.tag,e===13){if(e=xw(n),e!==null){t.blockedOn=e,Bw(t.priority,function(){Uw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rf=r,n.target.dispatchEvent(r),Rf=null}else return e=wl(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function fy(t,e,n){Lu(t)&&n.delete(e)}function MP(){Nf=!1,xr!==null&&Lu(xr)&&(xr=null),Nr!==null&&Lu(Nr)&&(Nr=null),br!==null&&Lu(br)&&(br=null),Ba.forEach(fy),za.forEach(fy)}function Xo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,MP)))}function $a(t){function e(i){return Xo(i,t)}if(0<fu.length){Xo(fu[0],t);for(var n=1;n<fu.length;n++){var r=fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(xr!==null&&Xo(xr,t),Nr!==null&&Xo(Nr,t),br!==null&&Xo(br,t),Ba.forEach(e),za.forEach(e),n=0;n<wr.length;n++)r=wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)zw(n),n.blockedOn===null&&wr.shift()}var Vs=sr.ReactCurrentBatchConfig,fc=!0;function FP(t,e,n,r){var i=_e,s=Vs.transition;Vs.transition=null;try{_e=1,Yp(t,e,n,r)}finally{_e=i,Vs.transition=s}}function UP(t,e,n,r){var i=_e,s=Vs.transition;Vs.transition=null;try{_e=4,Yp(t,e,n,r)}finally{_e=i,Vs.transition=s}}function Yp(t,e,n,r){if(fc){var i=bf(t,e,n,r);if(i===null)Ld(t,e,r,pc,n),dy(t,r);else if(LP(i,t,e,n,r))r.stopPropagation();else if(dy(t,r),e&4&&-1<OP.indexOf(t)){for(;i!==null;){var s=wl(i);if(s!==null&&Fw(s),s=bf(t,e,n,r),s===null&&Ld(t,e,r,pc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ld(t,e,r,null,n)}}var pc=null;function bf(t,e,n,r){if(pc=null,t=Kp(r),t=Si(t),t!==null)if(e=Xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function $w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RP()){case Wp:return 1;case Vw:return 4;case hc:case PP:return 16;case Ow:return 536870912;default:return 16}default:return 16}}var Rr=null,Jp=null,Mu=null;function qw(){if(Mu)return Mu;var t,e=Jp,n=e.length,r,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mu=i.slice(t,1<r?1-r:void 0)}function Fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pu(){return!0}function py(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pu:py,this.isPropagationStopped=py,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Xt(po),Il=Ue({},po,{view:0,detail:0}),jP=Xt(Il),Pd,Cd,Zo,ih=Ue({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zo&&(Zo&&t.type==="mousemove"?(Pd=t.screenX-Zo.screenX,Cd=t.screenY-Zo.screenY):Cd=Pd=0,Zo=t),Pd)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),my=Xt(ih),BP=Ue({},ih,{dataTransfer:0}),zP=Xt(BP),$P=Ue({},Il,{relatedTarget:0}),kd=Xt($P),qP=Ue({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),GP=Xt(qP),KP=Ue({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WP=Xt(KP),HP=Ue({},po,{data:0}),gy=Xt(HP),QP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JP[t])?!!e[t]:!1}function Zp(){return XP}var ZP=Ue({},Il,{key:function(t){if(t.key){var e=QP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?YP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?Fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eC=Xt(ZP),tC=Ue({},ih,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_y=Xt(tC),nC=Ue({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),rC=Xt(nC),iC=Ue({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),sC=Xt(iC),oC=Ue({},ih,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aC=Xt(oC),lC=[9,13,27,32],em=Yn&&"CompositionEvent"in window,Ta=null;Yn&&"documentMode"in document&&(Ta=document.documentMode);var uC=Yn&&"TextEvent"in window&&!Ta,Gw=Yn&&(!em||Ta&&8<Ta&&11>=Ta),yy=" ",vy=!1;function Kw(t,e){switch(t){case"keyup":return lC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function cC(t,e){switch(t){case"compositionend":return Ww(e);case"keypress":return e.which!==32?null:(vy=!0,yy);case"textInput":return t=e.data,t===yy&&vy?null:t;default:return null}}function hC(t,e){if(ws)return t==="compositionend"||!em&&Kw(t,e)?(t=qw(),Mu=Jp=Rr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gw&&e.locale!=="ko"?null:e.data;default:return null}}var dC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dC[t.type]:e==="textarea"}function Hw(t,e,n,r){Aw(r),e=mc(e,"onChange"),0<e.length&&(n=new Xp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Sa=null,qa=null;function fC(t){sE(t,0)}function sh(t){var e=Ss(t);if(yw(e))return t}function pC(t,e){if(t==="change")return e}var Qw=!1;if(Yn){var xd;if(Yn){var Nd="oninput"in document;if(!Nd){var wy=document.createElement("div");wy.setAttribute("oninput","return;"),Nd=typeof wy.oninput=="function"}xd=Nd}else xd=!1;Qw=xd&&(!document.documentMode||9<document.documentMode)}function Ey(){Sa&&(Sa.detachEvent("onpropertychange",Yw),qa=Sa=null)}function Yw(t){if(t.propertyName==="value"&&sh(qa)){var e=[];Hw(e,qa,t,Kp(t)),kw(fC,e)}}function mC(t,e,n){t==="focusin"?(Ey(),Sa=e,qa=n,Sa.attachEvent("onpropertychange",Yw)):t==="focusout"&&Ey()}function gC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sh(qa)}function _C(t,e){if(t==="click")return sh(e)}function yC(t,e){if(t==="input"||t==="change")return sh(e)}function vC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:vC;function Ga(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pf.call(e,i)||!_n(t[i],e[i]))return!1}return!0}function Ty(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sy(t,e){var n=Ty(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ty(n)}}function Jw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xw(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IC(t){var e=Xw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jw(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sy(n,s);var o=Sy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wC=Yn&&"documentMode"in document&&11>=document.documentMode,Es=null,Df=null,Aa=null,Vf=!1;function Ay(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||Es==null||Es!==lc(r)||(r=Es,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&Ga(Aa,r)||(Aa=r,r=mc(Df,"onSelect"),0<r.length&&(e=new Xp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Es)))}function mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},bd={},Zw={};Yn&&(Zw=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function oh(t){if(bd[t])return bd[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zw)return bd[t]=e[n];return t}var eE=oh("animationend"),tE=oh("animationiteration"),nE=oh("animationstart"),rE=oh("transitionend"),iE=new Map,Ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){iE.set(t,e),Ji(e,[t])}for(var Dd=0;Dd<Ry.length;Dd++){var Vd=Ry[Dd],EC=Vd.toLowerCase(),TC=Vd[0].toUpperCase()+Vd.slice(1);Zr(EC,"on"+TC)}Zr(eE,"onAnimationEnd");Zr(tE,"onAnimationIteration");Zr(nE,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(rE,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function Py(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EP(r,e,void 0,t),t.currentTarget=null}function sE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Py(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Py(i,a,c),s=u}}}if(cc)throw t=kf,cc=!1,kf=null,t}function Ae(t,e){var n=e[Uf];n===void 0&&(n=e[Uf]=new Set);var r=t+"__bubble";n.has(r)||(oE(e,t,2,!1),n.add(r))}function Od(t,e,n){var r=0;e&&(r|=4),oE(n,t,r,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[gu]){t[gu]=!0,fw.forEach(function(n){n!=="selectionchange"&&(SC.has(n)||Od(n,!1,t),Od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,Od("selectionchange",!1,e))}}function oE(t,e,n,r){switch($w(e)){case 1:var i=FP;break;case 4:i=UP;break;default:i=Yp}n=i.bind(null,e,n,t),i=void 0,!Cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ld(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Si(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}kw(function(){var c=s,d=Kp(n),f=[];e:{var m=iE.get(t);if(m!==void 0){var y=Xp,A=t;switch(t){case"keypress":if(Fu(n)===0)break e;case"keydown":case"keyup":y=eC;break;case"focusin":A="focus",y=kd;break;case"focusout":A="blur",y=kd;break;case"beforeblur":case"afterblur":y=kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=my;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=zP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=rC;break;case eE:case tE:case nE:y=GP;break;case rE:y=sC;break;case"scroll":y=jP;break;case"wheel":y=aC;break;case"copy":case"cut":case"paste":y=WP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_y}var C=(e&4)!==0,D=!C&&t==="scroll",E=C?m!==null?m+"Capture":null:m;C=[];for(var I=c,v;I!==null;){v=I;var V=v.stateNode;if(v.tag===5&&V!==null&&(v=V,E!==null&&(V=ja(I,E),V!=null&&C.push(Wa(I,V,v)))),D)break;I=I.return}0<C.length&&(m=new y(m,A,null,n,d),f.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Rf&&(A=n.relatedTarget||n.fromElement)&&(Si(A)||A[Jn]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(A=n.relatedTarget||n.toElement,y=c,A=A?Si(A):null,A!==null&&(D=Xi(A),A!==D||A.tag!==5&&A.tag!==6)&&(A=null)):(y=null,A=c),y!==A)){if(C=my,V="onMouseLeave",E="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(C=_y,V="onPointerLeave",E="onPointerEnter",I="pointer"),D=y==null?m:Ss(y),v=A==null?m:Ss(A),m=new C(V,I+"leave",y,n,d),m.target=D,m.relatedTarget=v,V=null,Si(d)===c&&(C=new C(E,I+"enter",A,n,d),C.target=v,C.relatedTarget=D,V=C),D=V,y&&A)t:{for(C=y,E=A,I=0,v=C;v;v=us(v))I++;for(v=0,V=E;V;V=us(V))v++;for(;0<I-v;)C=us(C),I--;for(;0<v-I;)E=us(E),v--;for(;I--;){if(C===E||E!==null&&C===E.alternate)break t;C=us(C),E=us(E)}C=null}else C=null;y!==null&&Cy(f,m,y,C,!1),A!==null&&D!==null&&Cy(f,D,A,C,!0)}}e:{if(m=c?Ss(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var F=pC;else if(Iy(m))if(Qw)F=yC;else{F=gC;var O=mC}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=_C);if(F&&(F=F(t,c))){Hw(f,F,n,d);break e}O&&O(t,m,c),t==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&wf(m,"number",m.value)}switch(O=c?Ss(c):window,t){case"focusin":(Iy(O)||O.contentEditable==="true")&&(Es=O,Df=c,Aa=null);break;case"focusout":Aa=Df=Es=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,Ay(f,n,d);break;case"selectionchange":if(wC)break;case"keydown":case"keyup":Ay(f,n,d)}var w;if(em)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ws?Kw(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Gw&&n.locale!=="ko"&&(ws||g!=="onCompositionStart"?g==="onCompositionEnd"&&ws&&(w=qw()):(Rr=d,Jp="value"in Rr?Rr.value:Rr.textContent,ws=!0)),O=mc(c,g),0<O.length&&(g=new gy(g,t,null,n,d),f.push({event:g,listeners:O}),w?g.data=w:(w=Ww(n),w!==null&&(g.data=w)))),(w=uC?cC(t,n):hC(t,n))&&(c=mc(c,"onBeforeInput"),0<c.length&&(d=new gy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=w))}sE(f,e)})}function Wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ja(t,n),s!=null&&r.unshift(Wa(t,s,i)),s=ja(t,e),s!=null&&r.push(Wa(t,s,i))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ja(n,s),u!=null&&o.unshift(Wa(n,u,a))):i||(u=ja(n,s),u!=null&&o.push(Wa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var AC=/\r\n?/g,RC=/\u0000|\uFFFD/g;function ky(t){return(typeof t=="string"?t:""+t).replace(AC,`
`).replace(RC,"")}function _u(t,e,n){if(e=ky(e),ky(t)!==e&&n)throw Error(B(425))}function gc(){}var Of=null,Lf=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,PC=typeof clearTimeout=="function"?clearTimeout:void 0,xy=typeof Promise=="function"?Promise:void 0,CC=typeof queueMicrotask=="function"?queueMicrotask:typeof xy<"u"?function(t){return xy.resolve(null).then(t).catch(kC)}:Ff;function kC(t){setTimeout(function(){throw t})}function Md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$a(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$a(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),wn="__reactFiber$"+mo,Ha="__reactProps$"+mo,Jn="__reactContainer$"+mo,Uf="__reactEvents$"+mo,xC="__reactListeners$"+mo,NC="__reactHandles$"+mo;function Si(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ny(t);t!==null;){if(n=t[wn])return n;t=Ny(t)}return e}t=n,n=t.parentNode}return null}function wl(t){return t=t[wn]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function ah(t){return t[Ha]||null}var jf=[],As=-1;function ei(t){return{current:t}}function Ce(t){0>As||(t.current=jf[As],jf[As]=null,As--)}function we(t,e){As++,jf[As]=t.current,t.current=e}var zr={},At=ei(zr),Ut=ei(!1),Vi=zr;function qs(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function _c(){Ce(Ut),Ce(At)}function by(t,e,n){if(At.current!==zr)throw Error(B(168));we(At,e),we(Ut,n)}function aE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,mP(t)||"Unknown",i));return Ue({},n,r)}function yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,Vi=At.current,we(At,t),we(Ut,Ut.current),!0}function Dy(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=aE(t,e,Vi),r.__reactInternalMemoizedMergedChildContext=t,Ce(Ut),Ce(At),we(At,t)):Ce(Ut),we(Ut,n)}var Ln=null,lh=!1,Fd=!1;function lE(t){Ln===null?Ln=[t]:Ln.push(t)}function bC(t){lh=!0,lE(t)}function ti(){if(!Fd&&Ln!==null){Fd=!0;var t=0,e=_e;try{var n=Ln;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,lh=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(t+1)),Dw(Wp,ti),i}finally{_e=e,Fd=!1}}return null}var Rs=[],Ps=0,vc=null,Ic=0,Zt=[],en=0,Oi=null,Bn=1,zn="";function gi(t,e){Rs[Ps++]=Ic,Rs[Ps++]=vc,vc=t,Ic=e}function uE(t,e,n){Zt[en++]=Bn,Zt[en++]=zn,Zt[en++]=Oi,Oi=t;var r=Bn;t=zn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bn=1<<32-pn(e)+i|n<<i|r,zn=s+t}else Bn=1<<s|n<<i|r,zn=t}function nm(t){t.return!==null&&(gi(t,1),uE(t,1,0))}function rm(t){for(;t===vc;)vc=Rs[--Ps],Rs[Ps]=null,Ic=Rs[--Ps],Rs[Ps]=null;for(;t===Oi;)Oi=Zt[--en],Zt[en]=null,zn=Zt[--en],Zt[en]=null,Bn=Zt[--en],Zt[en]=null}var Wt=null,Kt=null,be=!1,fn=null;function cE(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Kt=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Oi!==null?{id:Bn,overflow:zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Kt=null,!0):!1;default:return!1}}function Bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(be){var e=Kt;if(e){var n=e;if(!Vy(t,e)){if(Bf(t))throw Error(B(418));e=Dr(n.nextSibling);var r=Wt;e&&Vy(t,e)?cE(r,n):(t.flags=t.flags&-4097|2,be=!1,Wt=t)}}else{if(Bf(t))throw Error(B(418));t.flags=t.flags&-4097|2,be=!1,Wt=t}}}function Oy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function yu(t){if(t!==Wt)return!1;if(!be)return Oy(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=Kt)){if(Bf(t))throw hE(),Error(B(418));for(;e;)cE(t,e),e=Dr(e.nextSibling)}if(Oy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Wt?Dr(t.stateNode.nextSibling):null;return!0}function hE(){for(var t=Kt;t;)t=Dr(t.nextSibling)}function Gs(){Kt=Wt=null,be=!1}function im(t){fn===null?fn=[t]:fn.push(t)}var DC=sr.ReactCurrentBatchConfig;function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function vu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ly(t){var e=t._init;return e(t._payload)}function dE(t){function e(E,I){if(t){var v=E.deletions;v===null?(E.deletions=[I],E.flags|=16):v.push(I)}}function n(E,I){if(!t)return null;for(;I!==null;)e(E,I),I=I.sibling;return null}function r(E,I){for(E=new Map;I!==null;)I.key!==null?E.set(I.key,I):E.set(I.index,I),I=I.sibling;return E}function i(E,I){return E=Mr(E,I),E.index=0,E.sibling=null,E}function s(E,I,v){return E.index=v,t?(v=E.alternate,v!==null?(v=v.index,v<I?(E.flags|=2,I):v):(E.flags|=2,I)):(E.flags|=1048576,I)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,I,v,V){return I===null||I.tag!==6?(I=Gd(v,E.mode,V),I.return=E,I):(I=i(I,v),I.return=E,I)}function u(E,I,v,V){var F=v.type;return F===Is?d(E,I,v.props.children,V,v.key):I!==null&&(I.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===vr&&Ly(F)===I.type)?(V=i(I,v.props),V.ref=ea(E,I,v),V.return=E,V):(V=Gu(v.type,v.key,v.props,null,E.mode,V),V.ref=ea(E,I,v),V.return=E,V)}function c(E,I,v,V){return I===null||I.tag!==4||I.stateNode.containerInfo!==v.containerInfo||I.stateNode.implementation!==v.implementation?(I=Kd(v,E.mode,V),I.return=E,I):(I=i(I,v.children||[]),I.return=E,I)}function d(E,I,v,V,F){return I===null||I.tag!==7?(I=ki(v,E.mode,V,F),I.return=E,I):(I=i(I,v),I.return=E,I)}function f(E,I,v){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Gd(""+I,E.mode,v),I.return=E,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case lu:return v=Gu(I.type,I.key,I.props,null,E.mode,v),v.ref=ea(E,null,I),v.return=E,v;case vs:return I=Kd(I,E.mode,v),I.return=E,I;case vr:var V=I._init;return f(E,V(I._payload),v)}if(ua(I)||Qo(I))return I=ki(I,E.mode,v,null),I.return=E,I;vu(E,I)}return null}function m(E,I,v,V){var F=I!==null?I.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return F!==null?null:a(E,I,""+v,V);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:return v.key===F?u(E,I,v,V):null;case vs:return v.key===F?c(E,I,v,V):null;case vr:return F=v._init,m(E,I,F(v._payload),V)}if(ua(v)||Qo(v))return F!==null?null:d(E,I,v,V,null);vu(E,v)}return null}function y(E,I,v,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return E=E.get(v)||null,a(I,E,""+V,F);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case lu:return E=E.get(V.key===null?v:V.key)||null,u(I,E,V,F);case vs:return E=E.get(V.key===null?v:V.key)||null,c(I,E,V,F);case vr:var O=V._init;return y(E,I,v,O(V._payload),F)}if(ua(V)||Qo(V))return E=E.get(v)||null,d(I,E,V,F,null);vu(I,V)}return null}function A(E,I,v,V){for(var F=null,O=null,w=I,g=I=0,T=null;w!==null&&g<v.length;g++){w.index>g?(T=w,w=null):T=w.sibling;var S=m(E,w,v[g],V);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(E,w),I=s(S,I,g),O===null?F=S:O.sibling=S,O=S,w=T}if(g===v.length)return n(E,w),be&&gi(E,g),F;if(w===null){for(;g<v.length;g++)w=f(E,v[g],V),w!==null&&(I=s(w,I,g),O===null?F=w:O.sibling=w,O=w);return be&&gi(E,g),F}for(w=r(E,w);g<v.length;g++)T=y(w,E,g,v[g],V),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?g:T.key),I=s(T,I,g),O===null?F=T:O.sibling=T,O=T);return t&&w.forEach(function(P){return e(E,P)}),be&&gi(E,g),F}function C(E,I,v,V){var F=Qo(v);if(typeof F!="function")throw Error(B(150));if(v=F.call(v),v==null)throw Error(B(151));for(var O=F=null,w=I,g=I=0,T=null,S=v.next();w!==null&&!S.done;g++,S=v.next()){w.index>g?(T=w,w=null):T=w.sibling;var P=m(E,w,S.value,V);if(P===null){w===null&&(w=T);break}t&&w&&P.alternate===null&&e(E,w),I=s(P,I,g),O===null?F=P:O.sibling=P,O=P,w=T}if(S.done)return n(E,w),be&&gi(E,g),F;if(w===null){for(;!S.done;g++,S=v.next())S=f(E,S.value,V),S!==null&&(I=s(S,I,g),O===null?F=S:O.sibling=S,O=S);return be&&gi(E,g),F}for(w=r(E,w);!S.done;g++,S=v.next())S=y(w,E,g,S.value,V),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?g:S.key),I=s(S,I,g),O===null?F=S:O.sibling=S,O=S);return t&&w.forEach(function(N){return e(E,N)}),be&&gi(E,g),F}function D(E,I,v,V){if(typeof v=="object"&&v!==null&&v.type===Is&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case lu:e:{for(var F=v.key,O=I;O!==null;){if(O.key===F){if(F=v.type,F===Is){if(O.tag===7){n(E,O.sibling),I=i(O,v.props.children),I.return=E,E=I;break e}}else if(O.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===vr&&Ly(F)===O.type){n(E,O.sibling),I=i(O,v.props),I.ref=ea(E,O,v),I.return=E,E=I;break e}n(E,O);break}else e(E,O);O=O.sibling}v.type===Is?(I=ki(v.props.children,E.mode,V,v.key),I.return=E,E=I):(V=Gu(v.type,v.key,v.props,null,E.mode,V),V.ref=ea(E,I,v),V.return=E,E=V)}return o(E);case vs:e:{for(O=v.key;I!==null;){if(I.key===O)if(I.tag===4&&I.stateNode.containerInfo===v.containerInfo&&I.stateNode.implementation===v.implementation){n(E,I.sibling),I=i(I,v.children||[]),I.return=E,E=I;break e}else{n(E,I);break}else e(E,I);I=I.sibling}I=Kd(v,E.mode,V),I.return=E,E=I}return o(E);case vr:return O=v._init,D(E,I,O(v._payload),V)}if(ua(v))return A(E,I,v,V);if(Qo(v))return C(E,I,v,V);vu(E,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,I!==null&&I.tag===6?(n(E,I.sibling),I=i(I,v),I.return=E,E=I):(n(E,I),I=Gd(v,E.mode,V),I.return=E,E=I),o(E)):n(E,I)}return D}var Ks=dE(!0),fE=dE(!1),wc=ei(null),Ec=null,Cs=null,sm=null;function om(){sm=Cs=Ec=null}function am(t){var e=wc.current;Ce(wc),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Ec=t,sm=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Ec===null)throw Error(B(308));Cs=t,Ec.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Ai=null;function lm(t){Ai===null?Ai=[t]:Ai.push(t)}function pE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xn(t,r)}function Xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ir=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xn(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xn(t,n)}function Uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hp(t,n)}}function My(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,r){var i=t.updateQueue;Ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var A=t,C=a;switch(m=e,y=n,C.tag){case 1:if(A=C.payload,typeof A=="function"){f=A.call(y,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=C.payload,m=typeof A=="function"?A.call(y,f,m):A,m==null)break e;f=Ue({},f,m);break e;case 2:Ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=f}}function Fy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var El={},Rn=ei(El),Qa=ei(El),Ya=ei(El);function Ri(t){if(t===El)throw Error(B(174));return t}function cm(t,e){switch(we(Ya,e),we(Qa,t),we(Rn,El),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tf(e,t)}Ce(Rn),we(Rn,e)}function Ws(){Ce(Rn),Ce(Qa),Ce(Ya)}function gE(t){Ri(Ya.current);var e=Ri(Rn.current),n=Tf(e,t.type);e!==n&&(we(Qa,t),we(Rn,n))}function hm(t){Qa.current===t&&(Ce(Rn),Ce(Qa))}var Me=ei(0);function Sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ud=[];function dm(){for(var t=0;t<Ud.length;t++)Ud[t]._workInProgressVersionPrimary=null;Ud.length=0}var ju=sr.ReactCurrentDispatcher,jd=sr.ReactCurrentBatchConfig,Li=0,Fe=null,Xe=null,rt=null,Ac=!1,Ra=!1,Ja=0,VC=0;function yt(){throw Error(B(321))}function fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,s){if(Li=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=t===null||t.memoizedState===null?FC:UC,t=n(r,i),Ra){s=0;do{if(Ra=!1,Ja=0,25<=s)throw Error(B(301));s+=1,rt=Xe=null,e.updateQueue=null,ju.current=jC,t=n(r,i)}while(Ra)}if(ju.current=Rc,e=Xe!==null&&Xe.next!==null,Li=0,rt=Xe=Fe=null,Ac=!1,e)throw Error(B(300));return t}function mm(){var t=Ja!==0;return Ja=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Fe.memoizedState=rt=t:rt=rt.next=t,rt}function sn(){if(Xe===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=rt===null?Fe.memoizedState:rt.next;if(e!==null)rt=e,Xe=t;else{if(t===null)throw Error(B(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},rt===null?Fe.memoizedState=rt=t:rt=rt.next=t}return rt}function Xa(t,e){return typeof e=="function"?e(t):e}function Bd(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var d=c.lane;if((Li&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Fe.lanes|=d,Mi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,_n(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zd(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_n(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _E(){}function yE(t,e){var n=Fe,r=sn(),i=e(),s=!_n(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,gm(wE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Za(9,IE.bind(null,n,r,i,e),void 0,null),st===null)throw Error(B(349));Li&30||vE(n,e,i)}return i}function vE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function IE(t,e,n,r){e.value=n,e.getSnapshot=r,EE(e)&&TE(t)}function wE(t,e,n){return n(function(){EE(e)&&TE(t)})}function EE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function TE(t){var e=Xn(t,1);e!==null&&mn(e,t,1,-1)}function Uy(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=MC.bind(null,Fe,t),[e.memoizedState,t]}function Za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function SE(){return sn().memoizedState}function Bu(t,e,n,r){var i=vn();Fe.flags|=t,i.memoizedState=Za(1|e,n,void 0,r===void 0?null:r)}function uh(t,e,n,r){var i=sn();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&fm(r,o.deps)){i.memoizedState=Za(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=Za(1|e,n,s,r)}function jy(t,e){return Bu(8390656,8,t,e)}function gm(t,e){return uh(2048,8,t,e)}function AE(t,e){return uh(4,2,t,e)}function RE(t,e){return uh(4,4,t,e)}function PE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function CE(t,e,n){return n=n!=null?n.concat([t]):null,uh(4,4,PE.bind(null,e,t),n)}function _m(){}function kE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NE(t,e,n){return Li&21?(_n(n,e)||(n=Lw(),Fe.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function OC(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=jd.transition;jd.transition={};try{t(!1),e()}finally{_e=n,jd.transition=r}}function bE(){return sn().memoizedState}function LC(t,e,n){var r=Lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},DE(t))VE(e,n);else if(n=pE(t,e,n,r),n!==null){var i=kt();mn(n,t,r,i),OE(n,e,r)}}function MC(t,e,n){var r=Lr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(DE(t))VE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_n(a,o)){var u=e.interleaved;u===null?(i.next=i,lm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=pE(t,e,i,r),n!==null&&(i=kt(),mn(n,t,r,i),OE(n,e,r))}}function DE(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function VE(t,e){Ra=Ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function OE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hp(t,n)}}var Rc={readContext:rn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},FC={readContext:rn,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:jy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4194308,4,PE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bu(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LC.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:Uy,useDebugValue:_m,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=Uy(!1),e=t[0];return t=OC.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=vn();if(be){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),st===null)throw Error(B(349));Li&30||vE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jy(wE.bind(null,r,s,t),[t]),r.flags|=2048,Za(9,IE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vn(),e=st.identifierPrefix;if(be){var n=zn,r=Bn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UC={readContext:rn,useCallback:kE,useContext:rn,useEffect:gm,useImperativeHandle:CE,useInsertionEffect:AE,useLayoutEffect:RE,useMemo:xE,useReducer:Bd,useRef:SE,useState:function(){return Bd(Xa)},useDebugValue:_m,useDeferredValue:function(t){var e=sn();return NE(e,Xe.memoizedState,t)},useTransition:function(){var t=Bd(Xa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:_E,useSyncExternalStore:yE,useId:bE,unstable_isNewReconciler:!1},jC={readContext:rn,useCallback:kE,useContext:rn,useEffect:gm,useImperativeHandle:CE,useInsertionEffect:AE,useLayoutEffect:RE,useMemo:xE,useReducer:zd,useRef:SE,useState:function(){return zd(Xa)},useDebugValue:_m,useDeferredValue:function(t){var e=sn();return Xe===null?e.memoizedState=t:NE(e,Xe.memoizedState,t)},useTransition:function(){var t=zd(Xa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:_E,useSyncExternalStore:yE,useId:bE,unstable_isNewReconciler:!1};function hn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ch={isMounted:function(t){return(t=t._reactInternals)?Xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Lr(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(mn(e,t,i,r),Uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Lr(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,i),e!==null&&(mn(e,t,i,r),Uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Lr(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vr(t,i,r),e!==null&&(mn(e,t,r,n),Uu(e,t,r))}};function By(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,r)||!Ga(i,s):!0}function LE(t,e,n){var r=!1,i=zr,s=e.contextType;return typeof s=="object"&&s!==null?s=rn(s):(i=jt(e)?Vi:At.current,r=e.contextTypes,s=(r=r!=null)?qs(t,i):zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ch,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ch.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rn(s):(s=jt(e)?Vi:At.current,i.context=qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ch.enqueueReplaceState(i,i.state,null),Tc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",r=e;do n+=pP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BC=typeof WeakMap=="function"?WeakMap:Map;function ME(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cc||(Cc=!0,np=r),Kf(t,e)},n}function FE(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kf(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tk.bind(null,t,e,n),e.then(t,t))}function qy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var zC=sr.ReactCurrentOwner,Ot=!1;function Ct(t,e,n,r){e.child=t===null?fE(e,null,n,r):Ks(e,t.child,n,r)}function Ky(t,e,n,r,i){n=n.render;var s=e.ref;return Os(e,i),r=pm(t,e,n,r,s,i),n=mm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(be&&n&&nm(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,UE(t,e,s,r,i)):(t=Gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(o,r)&&t.ref===e.ref)return Zn(t,e,i)}return e.flags|=1,t=Mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function UE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ga(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,Zn(t,e,i)}return Wf(t,e,n,r,i)}function jE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(xs,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(xs,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(xs,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(xs,qt),qt|=r;return Ct(t,e,i,n),e.child}function BE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wf(t,e,n,r,i){var s=jt(n)?Vi:At.current;return s=qs(e,s),Os(e,i),n=pm(t,e,n,r,s,i),r=mm(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zn(t,e,i)):(be&&r&&nm(e),e.flags|=1,Ct(t,e,n,i),e.child)}function Hy(t,e,n,r,i){if(jt(n)){var s=!0;yc(e)}else s=!1;if(Os(e,i),e.stateNode===null)zu(t,e),LE(e,n,r),Gf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=jt(n)?Vi:At.current,c=qs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&zy(e,o,r,c),Ir=!1;var m=e.memoizedState;o.state=m,Tc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Ut.current||Ir?(typeof d=="function"&&(qf(e,n,d,r),u=e.memoizedState),(a=Ir||By(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:hn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=jt(n)?Vi:At.current,u=qs(e,u));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&zy(e,o,r,u),Ir=!1,m=e.memoizedState,o.state=m,Tc(e,r,o,i);var A=e.memoizedState;a!==f||m!==A||Ut.current||Ir?(typeof y=="function"&&(qf(e,n,y,r),A=e.memoizedState),(c=Ir||By(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Hf(t,e,n,r,s,i)}function Hf(t,e,n,r,i,s){BE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dy(e,n,!1),Zn(t,e,s);r=e.stateNode,zC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):Ct(t,e,a,s),e.memoizedState=r.state,i&&Dy(e,n,!0),e.child}function zE(t){var e=t.stateNode;e.pendingContext?by(t,e.pendingContext,e.pendingContext!==e.context):e.context&&by(t,e.context,!1),cm(t,e.containerInfo)}function Qy(t,e,n,r,i){return Gs(),im(i),e.flags|=256,Ct(t,e,n,r),e.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function $E(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Me,i&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fh(o,r,0,null),t=ki(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yf(n),e.memoizedState=Qf,t):ym(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $C(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=ki(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qf,r}return s=t.child,t=s.sibling,r=Mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ym(t,e){return e=fh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Iu(t,e,n,r){return r!==null&&im(r),Ks(e,t.child,null,n),t=ym(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $C(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$d(Error(B(422))),Iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fh({mode:"visible",children:r.children},i,0,null),s=ki(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=Yf(o),e.memoizedState=Qf,s);if(!(e.mode&1))return Iu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=$d(s,r,void 0),Iu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xn(t,i),mn(r,t,i,-1))}return Sm(),r=$d(Error(B(421))),Iu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Kt=Dr(i.nextSibling),Wt=e,be=!0,fn=null,t!==null&&(Zt[en++]=Bn,Zt[en++]=zn,Zt[en++]=Oi,Bn=t.id,zn=t.overflow,Oi=e),e=ym(e,r.children),e.flags|=4096,e)}function Yy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$f(t.return,e,n)}function qd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yy(t,n,e);else if(t.tag===19)Yy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Sc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Sc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qd(e,!0,n,null,s);break;case"together":qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qC(t,e,n){switch(e.tag){case 3:zE(e),Gs();break;case 5:gE(e);break;case 1:jt(e.type)&&yc(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(wc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?$E(t,e,n):(we(Me,Me.current&1),t=Zn(t,e,n),t!==null?t.sibling:null);we(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,jE(t,e,n)}return Zn(t,e,n)}var GE,Jf,KE,WE;GE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jf=function(){};KE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ri(Rn.current);var s=null;switch(n){case"input":i=vf(t,i),r=vf(t,r),s=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),s=[];break;case"textarea":i=Ef(t,i),r=Ef(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gc)}Sf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};WE=function(t,e,n,r){n!==r&&(e.flags|=4)};function ta(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GC(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return jt(e.type)&&_c(),vt(e),null;case 3:return r=e.stateNode,Ws(),Ce(Ut),Ce(At),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(sp(fn),fn=null))),Jf(t,e),vt(e),null;case 5:hm(e);var i=Ri(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)KE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return vt(e),null}if(t=Ri(Rn.current),yu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[Ha]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<ha.length;i++)Ae(ha[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":sy(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":ay(r,s),Ae("invalid",r)}Sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_u(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_u(r.textContent,a,t),i=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":uu(r),oy(r,s,!0);break;case"textarea":uu(r),ly(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ww(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[Ha]=r,GE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Af(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<ha.length;i++)Ae(ha[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":sy(t,r),i=vf(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":ay(t,r),i=Ef(t,r),Ae("invalid",t);break;default:i=r}Sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Sw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ew(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ua(t,u):typeof u=="number"&&Ua(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&zp(t,s,u,o))}switch(n){case"input":uu(t),oy(t,r,!1);break;case"textarea":uu(t),ly(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)WE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Ri(Ya.current),Ri(Rn.current),yu(e)){if(r=e.stateNode,n=e.memoizedProps,r[wn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:_u(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_u(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r}return vt(e),null;case 13:if(Ce(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Kt!==null&&e.mode&1&&!(e.flags&128))hE(),Gs(),e.flags|=98560,s=!1;else if(s=yu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[wn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else fn!==null&&(sp(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?Ze===0&&(Ze=3):Sm())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return Ws(),Jf(t,e),t===null&&Ka(e.stateNode.containerInfo),vt(e),null;case 10:return am(e.type._context),vt(e),null;case 17:return jt(e.type)&&_c(),vt(e),null;case 19:if(Ce(Me),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ta(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sc(t),o!==null){for(e.flags|=128,ta(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>Qs&&(e.flags|=128,r=!0,ta(s,!1),e.lanes=4194304)}else{if(!r)if(t=Sc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return vt(e),null}else 2*Ke()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Me.current,we(Me,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return Tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function KC(t,e){switch(rm(e),e.tag){case 1:return jt(e.type)&&_c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),Ce(Ut),Ce(At),dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(Ce(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Me),null;case 4:return Ws(),null;case 10:return am(e.type._context),null;case 22:case 23:return Tm(),null;case 24:return null;default:return null}}var wu=!1,Et=!1,WC=typeof WeakSet=="function"?WeakSet:Set,Q=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Xf(t,e,n){try{n()}catch(r){ze(t,e,r)}}var Jy=!1;function HC(t,e){if(Of=fc,t=Xw(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++d===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lf={focusedElem:t,selectionRange:n},fc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var C=A.memoizedProps,D=A.memoizedState,E=e.stateNode,I=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:hn(e.type,C),D);E.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){ze(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return A=Jy,Jy=!1,A}function Pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xf(e,n,s)}i=i.next}while(i!==r)}}function hh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function HE(t){var e=t.alternate;e!==null&&(t.alternate=null,HE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wn],delete e[Ha],delete e[Uf],delete e[xC],delete e[NC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function QE(t){return t.tag===5||t.tag===3||t.tag===4}function Xy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||QE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gc));else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}var ct=null,dn=!1;function mr(t,e,n){for(n=n.child;n!==null;)YE(t,e,n),n=n.sibling}function YE(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(rh,n)}catch{}switch(n.tag){case 5:Et||ks(n,e);case 6:var r=ct,i=dn;ct=null,mr(t,e,n),ct=r,dn=i,ct!==null&&(dn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(dn?(t=ct,n=n.stateNode,t.nodeType===8?Md(t.parentNode,n):t.nodeType===1&&Md(t,n),$a(t)):Md(ct,n.stateNode));break;case 4:r=ct,i=dn,ct=n.stateNode.containerInfo,dn=!0,mr(t,e,n),ct=r,dn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xf(n,e,o),i=i.next}while(i!==r)}mr(t,e,n);break;case 1:if(!Et&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ze(n,e,a)}mr(t,e,n);break;case 21:mr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,mr(t,e,n),Et=r):mr(t,e,n);break;default:mr(t,e,n)}}function Zy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WC),e.forEach(function(r){var i=rk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,dn=!1;break e;case 3:ct=a.stateNode.containerInfo,dn=!0;break e;case 4:ct=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(ct===null)throw Error(B(160));YE(s,o,i),ct=null,dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ze(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)JE(e,t),e=e.sibling}function JE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),yn(t),r&4){try{Pa(3,t,t.return),hh(3,t)}catch(C){ze(t,t.return,C)}try{Pa(5,t,t.return)}catch(C){ze(t,t.return,C)}}break;case 1:cn(e,t),yn(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(cn(e,t),yn(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var i=t.stateNode;try{Ua(i,"")}catch(C){ze(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vw(i,s),Af(a,o);var c=Af(a,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Sw(i,f):d==="dangerouslySetInnerHTML"?Ew(i,f):d==="children"?Ua(i,f):zp(i,d,f,c)}switch(a){case"input":If(i,s);break;case"textarea":Iw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ns(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ns(i,!!s.multiple,s.defaultValue,!0):Ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ha]=s}catch(C){ze(t,t.return,C)}}break;case 6:if(cn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){ze(t,t.return,C)}}break;case 3:if(cn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(C){ze(t,t.return,C)}break;case 4:cn(e,t),yn(t);break;case 13:cn(e,t),yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wm=Ke())),r&4&&Zy(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(c=Et)||d,cn(e,t),Et=c):cn(e,t),yn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(m=Q,y=m.child,m.tag){case 0:case 11:case 14:case 15:Pa(4,m,m.return);break;case 1:ks(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(C){ze(r,n,C)}}break;case 5:ks(m,m.return);break;case 22:if(m.memoizedState!==null){tv(f);continue}}y!==null?(y.return=m,Q=y):tv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Tw("display",o))}catch(C){ze(t,t.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){ze(t,t.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(e,t),yn(t),r&4&&Zy(t);break;case 21:break;default:cn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(QE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ua(i,""),r.flags&=-33);var s=Xy(t);tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Xy(t);ep(t,a,o);break;default:throw Error(B(161))}}catch(u){ze(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QC(t,e,n){Q=t,XE(t)}function XE(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Et;a=wu;var c=Et;if(wu=o,(Et=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?nv(i):u!==null?(u.return=o,Q=u):nv(i);for(;s!==null;)Q=s,XE(s),s=s.sibling;Q=i,wu=a,Et=c}ev(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):ev(t)}}function ev(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||hh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&$a(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Et||e.flags&512&&Zf(e)}catch(m){ze(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function tv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function nv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hh(4,e)}catch(u){ze(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ze(e,i,u)}}var s=e.return;try{Zf(e)}catch(u){ze(e,s,u)}break;case 5:var o=e.return;try{Zf(e)}catch(u){ze(e,o,u)}}}catch(u){ze(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var YC=Math.ceil,Pc=sr.ReactCurrentDispatcher,vm=sr.ReactCurrentOwner,nn=sr.ReactCurrentBatchConfig,fe=0,st=null,Je=null,ft=0,qt=0,xs=ei(0),Ze=0,el=null,Mi=0,dh=0,Im=0,Ca=null,Vt=null,wm=0,Qs=1/0,On=null,Cc=!1,np=null,Or=null,Eu=!1,Pr=null,kc=0,ka=0,rp=null,$u=-1,qu=0;function kt(){return fe&6?Ke():$u!==-1?$u:$u=Ke()}function Lr(t){return t.mode&1?fe&2&&ft!==0?ft&-ft:DC.transition!==null?(qu===0&&(qu=Lw()),qu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:$w(t.type)),t):1}function mn(t,e,n,r){if(50<ka)throw ka=0,rp=null,Error(B(185));vl(t,n,r),(!(fe&2)||t!==st)&&(t===st&&(!(fe&2)&&(dh|=n),Ze===4&&Er(t,ft)),Bt(t,r),n===1&&fe===0&&!(e.mode&1)&&(Qs=Ke()+500,lh&&ti()))}function Bt(t,e){var n=t.callbackNode;DP(t,e);var r=dc(t,t===st?ft:0);if(r===0)n!==null&&hy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hy(n),e===1)t.tag===0?bC(rv.bind(null,t)):lE(rv.bind(null,t)),CC(function(){!(fe&6)&&ti()}),n=null;else{switch(Mw(r)){case 1:n=Wp;break;case 4:n=Vw;break;case 16:n=hc;break;case 536870912:n=Ow;break;default:n=hc}n=oT(n,ZE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ZE(t,e){if($u=-1,qu=0,fe&6)throw Error(B(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var r=dc(t,t===st?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xc(t,r);else{e=r;var i=fe;fe|=2;var s=tT();(st!==t||ft!==e)&&(On=null,Qs=Ke()+500,Ci(t,e));do try{ZC();break}catch(a){eT(t,a)}while(!0);om(),Pc.current=s,fe=i,Je!==null?e=0:(st=null,ft=0,e=Ze)}if(e!==0){if(e===2&&(i=xf(t),i!==0&&(r=i,e=ip(t,i))),e===1)throw n=el,Ci(t,0),Er(t,r),Bt(t,Ke()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!JC(i)&&(e=xc(t,r),e===2&&(s=xf(t),s!==0&&(r=s,e=ip(t,s))),e===1))throw n=el,Ci(t,0),Er(t,r),Bt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:_i(t,Vt,On);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=wm+500-Ke(),10<e)){if(dc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ff(_i.bind(null,t,Vt,On),e);break}_i(t,Vt,On);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YC(r/1960))-r,10<r){t.timeoutHandle=Ff(_i.bind(null,t,Vt,On),r);break}_i(t,Vt,On);break;case 5:_i(t,Vt,On);break;default:throw Error(B(329))}}}return Bt(t,Ke()),t.callbackNode===n?ZE.bind(null,t):null}function ip(t,e){var n=Ca;return t.current.memoizedState.isDehydrated&&(Ci(t,e).flags|=256),t=xc(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&sp(e)),t}function sp(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function JC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Im,e&=~dh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function rv(t){if(fe&6)throw Error(B(327));Ls();var e=dc(t,0);if(!(e&1))return Bt(t,Ke()),null;var n=xc(t,e);if(t.tag!==0&&n===2){var r=xf(t);r!==0&&(e=r,n=ip(t,r))}if(n===1)throw n=el,Ci(t,0),Er(t,e),Bt(t,Ke()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_i(t,Vt,On),Bt(t,Ke()),null}function Em(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Qs=Ke()+500,lh&&ti())}}function Fi(t){Pr!==null&&Pr.tag===0&&!(fe&6)&&Ls();var e=fe;fe|=1;var n=nn.transition,r=_e;try{if(nn.transition=null,_e=1,t)return t()}finally{_e=r,nn.transition=n,fe=e,!(fe&6)&&ti()}}function Tm(){qt=xs.current,Ce(xs)}function Ci(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,PC(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_c();break;case 3:Ws(),Ce(Ut),Ce(At),dm();break;case 5:hm(r);break;case 4:Ws();break;case 13:Ce(Me);break;case 19:Ce(Me);break;case 10:am(r.type._context);break;case 22:case 23:Tm()}n=n.return}if(st=t,Je=t=Mr(t.current,null),ft=qt=e,Ze=0,el=null,Im=dh=Mi=0,Vt=Ca=null,Ai!==null){for(e=0;e<Ai.length;e++)if(n=Ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ai=null}return t}function eT(t,e){do{var n=Je;try{if(om(),ju.current=Rc,Ac){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ac=!1}if(Li=0,rt=Xe=Fe=null,Ra=!1,Ja=0,vm.current=null,n===null||n.return===null){Ze=1,el=e,Je=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=ft,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=qy(o);if(y!==null){y.flags&=-257,Gy(y,o,a,s,e),y.mode&1&&$y(s,c,e),e=y,u=c;var A=e.updateQueue;if(A===null){var C=new Set;C.add(u),e.updateQueue=C}else A.add(u);break e}else{if(!(e&1)){$y(s,c,e),Sm();break e}u=Error(B(426))}}else if(be&&a.mode&1){var D=qy(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Gy(D,o,a,s,e),im(Hs(u,a));break e}}s=u=Hs(u,a),Ze!==4&&(Ze=2),Ca===null?Ca=[s]:Ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=ME(s,u,e);My(s,E);break e;case 1:a=u;var I=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof I.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Or===null||!Or.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=FE(s,a,e);My(s,V);break e}}s=s.return}while(s!==null)}rT(n)}catch(F){e=F,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function tT(){var t=Pc.current;return Pc.current=Rc,t===null?Rc:t}function Sm(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),st===null||!(Mi&268435455)&&!(dh&268435455)||Er(st,ft)}function xc(t,e){var n=fe;fe|=2;var r=tT();(st!==t||ft!==e)&&(On=null,Ci(t,e));do try{XC();break}catch(i){eT(t,i)}while(!0);if(om(),fe=n,Pc.current=r,Je!==null)throw Error(B(261));return st=null,ft=0,Ze}function XC(){for(;Je!==null;)nT(Je)}function ZC(){for(;Je!==null&&!SP();)nT(Je)}function nT(t){var e=sT(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?rT(t):Je=e,vm.current=null}function rT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KC(n,e),n!==null){n.flags&=32767,Je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Je=null;return}}else if(n=GC(n,e,qt),n!==null){Je=n;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);Ze===0&&(Ze=5)}function _i(t,e,n){var r=_e,i=nn.transition;try{nn.transition=null,_e=1,ek(t,e,n,r)}finally{nn.transition=i,_e=r}return null}function ek(t,e,n,r){do Ls();while(Pr!==null);if(fe&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VP(t,s),t===st&&(Je=st=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eu||(Eu=!0,oT(hc,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=_e;_e=1;var a=fe;fe|=4,vm.current=null,HC(t,n),JE(n,t),IC(Lf),fc=!!Of,Lf=Of=null,t.current=n,QC(n),AP(),fe=a,_e=o,nn.transition=s}else t.current=n;if(Eu&&(Eu=!1,Pr=t,kc=i),s=t.pendingLanes,s===0&&(Or=null),CP(n.stateNode),Bt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cc)throw Cc=!1,t=np,np=null,t;return kc&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===rp?ka++:(ka=0,rp=t):ka=0,ti(),null}function Ls(){if(Pr!==null){var t=Mw(kc),e=nn.transition,n=_e;try{if(nn.transition=null,_e=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,kc=0,fe&6)throw Error(B(331));var i=fe;for(fe|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:Pa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var m=d.sibling,y=d.return;if(HE(d),d===c){Q=null;break}if(m!==null){m.return=y,Q=m;break}Q=y}}}var A=s.alternate;if(A!==null){var C=A.child;if(C!==null){A.child=null;do{var D=C.sibling;C.sibling=null,C=D}while(C!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var I=t.current;for(Q=I;Q!==null;){o=Q;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Q=v;else e:for(o=I;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hh(9,a)}}catch(F){ze(a,a.return,F)}if(a===o){Q=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,Q=V;break e}Q=a.return}}if(fe=i,ti(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(rh,t)}catch{}r=!0}return r}finally{_e=n,nn.transition=e}}return!1}function iv(t,e,n){e=Hs(n,e),e=ME(t,e,1),t=Vr(t,e,1),e=kt(),t!==null&&(vl(t,1,e),Bt(t,e))}function ze(t,e,n){if(t.tag===3)iv(t,t,n);else for(;e!==null;){if(e.tag===3){iv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=Hs(n,t),t=FE(e,t,1),e=Vr(e,t,1),t=kt(),e!==null&&(vl(e,1,t),Bt(e,t));break}}e=e.return}}function tk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(ft&n)===n&&(Ze===4||Ze===3&&(ft&130023424)===ft&&500>Ke()-wm?Ci(t,0):Im|=n),Bt(t,e)}function iT(t,e){e===0&&(t.mode&1?(e=du,du<<=1,!(du&130023424)&&(du=4194304)):e=1);var n=kt();t=Xn(t,e),t!==null&&(vl(t,e,n),Bt(t,n))}function nk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iT(t,n)}function rk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),iT(t,n)}var sT;sT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,qC(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,be&&e.flags&1048576&&uE(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zu(t,e),t=e.pendingProps;var i=qs(e,At.current);Os(e,n),i=pm(null,e,r,t,i,n);var s=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=ch,e.stateNode=i,i._reactInternals=e,Gf(e,r,t,n),e=Hf(null,e,r,!0,s,n)):(e.tag=0,be&&s&&nm(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sk(r),t=hn(r,t),i){case 0:e=Wf(null,e,r,t,n);break e;case 1:e=Hy(null,e,r,t,n);break e;case 11:e=Ky(null,e,r,t,n);break e;case 14:e=Wy(null,e,r,hn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Wf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Hy(t,e,r,i,n);case 3:e:{if(zE(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mE(t,e),Tc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hs(Error(B(423)),e),e=Qy(t,e,r,n,i);break e}else if(r!==i){i=Hs(Error(B(424)),e),e=Qy(t,e,r,n,i);break e}else for(Kt=Dr(e.stateNode.containerInfo.firstChild),Wt=e,be=!0,fn=null,n=fE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===i){e=Zn(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return gE(e),t===null&&zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mf(r,i)?o=null:s!==null&&Mf(r,s)&&(e.flags|=32),BE(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&zf(e),null;case 13:return $E(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ks(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Ky(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(wc,r._currentValue),r._currentValue=o,s!==null)if(_n(s.value,o)){if(s.children===i.children&&!Ut.current){e=Zn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Wn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Os(e,n),i=rn(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=hn(r,e.pendingProps),i=hn(r.type,i),Wy(t,e,r,i,n);case 15:return UE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),zu(t,e),e.tag=1,jt(r)?(t=!0,yc(e)):t=!1,Os(e,n),LE(e,r,i),Gf(e,r,i,n),Hf(null,e,r,!0,t,n);case 19:return qE(t,e,n);case 22:return jE(t,e,n)}throw Error(B(156,e.tag))};function oT(t,e){return Dw(t,e)}function ik(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new ik(t,e,n,r)}function Am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sk(t){if(typeof t=="function")return Am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qp)return 11;if(t===Gp)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return ki(n.children,i,s,e);case $p:o=8,i|=8;break;case mf:return t=tn(12,n,e,i|2),t.elementType=mf,t.lanes=s,t;case gf:return t=tn(13,n,e,i),t.elementType=gf,t.lanes=s,t;case _f:return t=tn(19,n,e,i),t.elementType=_f,t.lanes=s,t;case gw:return fh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pw:o=10;break e;case mw:o=9;break e;case qp:o=11;break e;case Gp:o=14;break e;case vr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ki(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function fh(t,e,n,r){return t=tn(22,t,r,e),t.elementType=gw,t.lanes=n,t.stateNode={isHidden:!1},t}function Gd(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Kd(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ok(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rd(0),this.expirationTimes=Rd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rm(t,e,n,r,i,s,o,a,u){return t=new ok(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function ak(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aT(t){if(!t)return zr;t=t._reactInternals;e:{if(Xi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(jt(n))return aE(t,n,e)}return e}function lT(t,e,n,r,i,s,o,a,u){return t=Rm(n,r,!0,t,i,s,o,a,u),t.context=aT(null),n=t.current,r=kt(),i=Lr(n),s=Wn(r,i),s.callback=e??null,Vr(n,s,i),t.current.lanes=i,vl(t,i,r),Bt(t,r),t}function ph(t,e,n,r){var i=e.current,s=kt(),o=Lr(i);return n=aT(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(i,e,o),t!==null&&(mn(t,i,o,s),Uu(t,i,o)),o}function Nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pm(t,e){sv(t,e),(t=t.alternate)&&sv(t,e)}function lk(){return null}var uT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}mh.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ph(t,e,null,null)};mh.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fi(function(){ph(null,t,null,null)}),e[Jn]=null}};function mh(t){this._internalRoot=t}mh.prototype.unstable_scheduleHydration=function(t){if(t){var e=jw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wr.length&&e!==0&&e<wr[n].priority;n++);wr.splice(n,0,t),n===0&&zw(t)}};function km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ov(){}function uk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Nc(o);s.call(c)}}var o=lT(e,r,t,0,null,!1,!1,"",ov);return t._reactRootContainer=o,t[Jn]=o.current,Ka(t.nodeType===8?t.parentNode:t),Fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Nc(u);a.call(c)}}var u=Rm(t,0,!1,null,null,!1,!1,"",ov);return t._reactRootContainer=u,t[Jn]=u.current,Ka(t.nodeType===8?t.parentNode:t),Fi(function(){ph(e,u,n,r)}),u}function _h(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Nc(o);a.call(u)}}ph(e,o,t,i)}else o=uk(n,e,t,i,r);return Nc(o)}Fw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(Hp(e,n|1),Bt(e,Ke()),!(fe&6)&&(Qs=Ke()+500,ti()))}break;case 13:Fi(function(){var r=Xn(t,1);if(r!==null){var i=kt();mn(r,t,1,i)}}),Pm(t,1)}};Qp=function(t){if(t.tag===13){var e=Xn(t,134217728);if(e!==null){var n=kt();mn(e,t,134217728,n)}Pm(t,134217728)}};Uw=function(t){if(t.tag===13){var e=Lr(t),n=Xn(t,e);if(n!==null){var r=kt();mn(n,t,e,r)}Pm(t,e)}};jw=function(){return _e};Bw=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Pf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ah(r);if(!i)throw Error(B(90));yw(r),If(r,i)}}}break;case"textarea":Iw(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};Pw=Em;Cw=Fi;var ck={usingClientEntryPoint:!1,Events:[wl,Ss,ah,Aw,Rw,Em]},na={findFiberByHostInstance:Si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hk={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Nw(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||lk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{rh=Tu.inject(hk),An=Tu}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ck;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!km(e))throw Error(B(200));return ak(t,e,null,n)};Jt.createRoot=function(t,e){if(!km(t))throw Error(B(299));var n=!1,r="",i=uT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rm(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,Ka(t.nodeType===8?t.parentNode:t),new Cm(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Nw(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return Fi(t)};Jt.hydrate=function(t,e,n){if(!gh(e))throw Error(B(200));return _h(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!km(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lT(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mh(e)};Jt.render=function(t,e,n){if(!gh(e))throw Error(B(200));return _h(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!gh(t))throw Error(B(40));return t._reactRootContainer?(Fi(function(){_h(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};Jt.unstable_batchedUpdates=Em;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return _h(t,e,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function cT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT)}catch(t){console.error(t)}}cT(),cw.exports=Jt;var dk=cw.exports,av=dk;ff.createRoot=av.createRoot,ff.hydrateRoot=av.hydrateRoot;function fk(t=new Date){const e=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Taipei",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),n=r=>e.find(i=>i.type===r).value;return`${n("year")}-${n("month")}-${n("day")}`}function pk(t){const[e,n,r]=t.split("-").map(Number),i=new Date(Date.UTC(e,n-1,r));return i.setUTCDate(i.getUTCDate()+1),`${i.getUTCFullYear()}-${String(i.getUTCMonth()+1).padStart(2,"0")}-${String(i.getUTCDate()).padStart(2,"0")}`}function mk(t){const[e,n,r]=t.split("-").map(Number),i=new Date(Date.UTC(e,n-1,r));return i.setUTCDate(i.getUTCDate()-1),`${i.getUTCFullYear()}-${String(i.getUTCMonth()+1).padStart(2,"0")}-${String(i.getUTCDate()).padStart(2,"0")}`}const bc=["A","B"],xi={A:"一館",B:"二館"},hT=[1,2,3,5],dT={A:{1:2,2:2,3:2,5:2},B:{1:12,2:12,3:12,5:12}};function gk(t){var n,r;const e=((r=(n=globalThis.crypto)==null?void 0:n.randomUUID)==null?void 0:r.call(n))??Math.random().toString(16).slice(2);return`${t}-${e}`}function _k(t,e){return t.filter(n=>n.building===e).length}function yk(t){return/^\d{3,4}$/.test(t)}function lv(t,e,n,r){return t.some(i=>i.building===e&&i.no===n&&i.id!==r)}var uv={};/**
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
 */const fT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[d],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Ik;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ik extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wk=function(t){const e=fT(t);return pT.encodeByteArray(e,!0)},Dc=function(t){return wk(t).replace(/\./g,"")},mT=function(t){try{return pT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Tk=()=>Ek().__FIREBASE_DEFAULTS__,Sk=()=>{if(typeof process>"u"||typeof uv>"u")return;const t=uv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ak=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mT(t[1]);return e&&JSON.parse(e)},yh=()=>{try{return Tk()||Sk()||Ak()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gT=t=>{var e,n;return(n=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rk=t=>{const e=gT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_T=()=>{var t;return(t=yh())===null||t===void 0?void 0:t.config},yT=t=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function Ck(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Dc(JSON.stringify(n)),Dc(JSON.stringify(o)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function xk(){var t;const e=(t=yh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vk(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vT(){return!xk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IT(){try{return typeof indexedDB=="object"}catch{return!1}}function Ok(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Lk="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lk,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tl.prototype.create)}}class Tl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Mk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,a,r)}}function Mk(t,e){return t.replace(Fk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Fk=/\{\$([^}]+)}/g;function Uk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cv(s)&&cv(o)){if(!$r(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cv(t){return t!==null&&typeof t=="object"}/**
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
 */function go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function da(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jk(t,e){const n=new Bk(t,e);return n.subscribe.bind(n)}class Bk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wd),i.error===void 0&&(i.error=Wd),i.complete===void 0&&(i.complete=Wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wd(){}/**
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
 */function X(t){return t&&t._delegate?t._delegate:t}class Ui{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yi="[DEFAULT]";/**
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
 */class $k{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gk(e))try{this.getOrInitializeService({instanceIdentifier:yi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yi){return this.instances.has(e)}getOptions(e=yi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yi){return this.component?this.component.multipleInstances?e:yi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qk(t){return t===yi?void 0:t}function Gk(t){return t.instantiationMode==="EAGER"}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Wk={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Hk=ue.INFO,Qk={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Yk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Qk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xm{constructor(e){this.name=e,this._logLevel=Hk,this._logHandler=Yk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Jk=(t,e)=>e.some(n=>t instanceof n);let hv,dv;function Xk(){return hv||(hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zk(){return dv||(dv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wT=new WeakMap,op=new WeakMap,ET=new WeakMap,Hd=new WeakMap,Nm=new WeakMap;function ex(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wT.set(n,t)}).catch(()=>{}),Nm.set(e,t),e}function tx(t){if(op.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});op.set(t,e)}let ap={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return op.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ET.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nx(t){ap=t(ap)}function rx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qd(this),e,...n);return ET.set(r,e.sort?e.sort():[e]),Fr(r)}:Zk().includes(t)?function(...e){return t.apply(Qd(this),e),Fr(wT.get(this))}:function(...e){return Fr(t.apply(Qd(this),e))}}function ix(t){return typeof t=="function"?rx(t):(t instanceof IDBTransaction&&tx(t),Jk(t,Xk())?new Proxy(t,ap):t)}function Fr(t){if(t instanceof IDBRequest)return ex(t);if(Hd.has(t))return Hd.get(t);const e=ix(t);return e!==t&&(Hd.set(t,e),Nm.set(e,t)),e}const Qd=t=>Nm.get(t);function sx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Fr(o.result),u.oldVersion,u.newVersion,Fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ox=["get","getKey","getAll","getAllKeys","count"],ax=["put","add","delete","clear"],Yd=new Map;function fv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ax.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ox.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Yd.set(e,s),s}nx(t=>({...t,get:(e,n,r)=>fv(e,n)||t.get(e,n,r),has:(e,n)=>!!fv(e,n)||t.has(e,n)}));/**
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
 */class lx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ux(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ux(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lp="@firebase/app",pv="0.10.13";/**
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
 */const er=new xm("@firebase/app"),cx="@firebase/app-compat",hx="@firebase/analytics-compat",dx="@firebase/analytics",fx="@firebase/app-check-compat",px="@firebase/app-check",mx="@firebase/auth",gx="@firebase/auth-compat",_x="@firebase/database",yx="@firebase/data-connect",vx="@firebase/database-compat",Ix="@firebase/functions",wx="@firebase/functions-compat",Ex="@firebase/installations",Tx="@firebase/installations-compat",Sx="@firebase/messaging",Ax="@firebase/messaging-compat",Rx="@firebase/performance",Px="@firebase/performance-compat",Cx="@firebase/remote-config",kx="@firebase/remote-config-compat",xx="@firebase/storage",Nx="@firebase/storage-compat",bx="@firebase/firestore",Dx="@firebase/vertexai-preview",Vx="@firebase/firestore-compat",Ox="firebase",Lx="10.14.1";/**
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
 */const tl="[DEFAULT]",Mx={[lp]:"fire-core",[cx]:"fire-core-compat",[dx]:"fire-analytics",[hx]:"fire-analytics-compat",[px]:"fire-app-check",[fx]:"fire-app-check-compat",[mx]:"fire-auth",[gx]:"fire-auth-compat",[_x]:"fire-rtdb",[yx]:"fire-data-connect",[vx]:"fire-rtdb-compat",[Ix]:"fire-fn",[wx]:"fire-fn-compat",[Ex]:"fire-iid",[Tx]:"fire-iid-compat",[Sx]:"fire-fcm",[Ax]:"fire-fcm-compat",[Rx]:"fire-perf",[Px]:"fire-perf-compat",[Cx]:"fire-rc",[kx]:"fire-rc-compat",[xx]:"fire-gcs",[Nx]:"fire-gcs-compat",[bx]:"fire-fst",[Vx]:"fire-fst-compat",[Dx]:"fire-vertex","fire-js":"fire-js",[Ox]:"fire-js-all"};/**
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
 */const ji=new Map,Vc=new Map,Oc=new Map;function up(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(Oc.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,t);for(const n of ji.values())up(n,t);for(const n of Vc.values())up(n,t);return!0}function _o(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function TT(t,e,n=tl){_o(t,e).clearInstance(n)}function $e(t){return t.settings!==void 0}/**
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
 */const Fx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Tl("app","Firebase",Fx);/**
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
 */class Ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Zi=Lx;function bm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tl,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ur.create("bad-app-name",{appName:String(i)});if(n||(n=_T()),!n)throw Ur.create("no-options");const s=ji.get(i);if(s){if($r(n,s.options)&&$r(r,s.config))return s;throw Ur.create("duplicate-app",{appName:i})}const o=new Kk(i);for(const u of Oc.values())o.addComponent(u);const a=new Ux(n,r,o);return ji.set(i,a),a}function Dm(t=tl){const e=ji.get(t);if(!e&&t===tl&&_T())return bm();if(!e)throw Ur.create("no-app",{appName:t});return e}async function jx(t){let e=!1;const n=t.name;ji.has(n)?(e=!0,ji.delete(n)):Vc.has(n)&&t.decRefCount()<=0&&(Vc.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Hn(t,e,n){var r;let i=(r=Mx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(a.join(" "));return}Bi(new Ui(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bx="firebase-heartbeat-database",zx=1,nl="firebase-heartbeat-store";let Jd=null;function ST(){return Jd||(Jd=sx(Bx,zx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),Jd}async function $x(t){try{const n=(await ST()).transaction(nl),r=await n.objectStore(nl).get(AT(t));return await n.done,r}catch(e){if(e instanceof Nn)er.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function mv(t,e){try{const r=(await ST()).transaction(nl,"readwrite");await r.objectStore(nl).put(e,AT(t)),await r.done}catch(n){if(n instanceof Nn)er.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function AT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qx=1024,Gx=30*24*60*60*1e3;class Kx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Gx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gv(),{heartbeatsToSend:r,unsentEntries:i}=Wx(this._heartbeatsCache.heartbeats),s=Dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return er.warn(n),""}}}function gv(){return new Date().toISOString().substring(0,10)}function Wx(t,e=qx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_v(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_v(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IT()?Ok().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $x(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _v(t){return Dc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Qx(t){Bi(new Ui("platform-logger",e=>new lx(e),"PRIVATE")),Bi(new Ui("heartbeat",e=>new Kx(e),"PRIVATE")),Hn(lp,pv,t),Hn(lp,pv,"esm2017"),Hn("fire-js","")}Qx("");var yv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,RT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function T(){}T.prototype=g.prototype,w.D=g.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(S,P,N){for(var R=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)R[Dt-2]=arguments[Dt];return g.prototype[P].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,T){T||(T=0);var S=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)S[P]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(P=0;16>P;++P)S[P]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=w.g[0],T=w.g[1],P=w.g[2];var N=w.g[3],R=g+(N^T&(P^N))+S[0]+3614090360&4294967295;g=T+(R<<7&4294967295|R>>>25),R=N+(P^g&(T^P))+S[1]+3905402710&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(T^N&(g^T))+S[2]+606105819&4294967295,P=N+(R<<17&4294967295|R>>>15),R=T+(g^P&(N^g))+S[3]+3250441966&4294967295,T=P+(R<<22&4294967295|R>>>10),R=g+(N^T&(P^N))+S[4]+4118548399&4294967295,g=T+(R<<7&4294967295|R>>>25),R=N+(P^g&(T^P))+S[5]+1200080426&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(T^N&(g^T))+S[6]+2821735955&4294967295,P=N+(R<<17&4294967295|R>>>15),R=T+(g^P&(N^g))+S[7]+4249261313&4294967295,T=P+(R<<22&4294967295|R>>>10),R=g+(N^T&(P^N))+S[8]+1770035416&4294967295,g=T+(R<<7&4294967295|R>>>25),R=N+(P^g&(T^P))+S[9]+2336552879&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(T^N&(g^T))+S[10]+4294925233&4294967295,P=N+(R<<17&4294967295|R>>>15),R=T+(g^P&(N^g))+S[11]+2304563134&4294967295,T=P+(R<<22&4294967295|R>>>10),R=g+(N^T&(P^N))+S[12]+1804603682&4294967295,g=T+(R<<7&4294967295|R>>>25),R=N+(P^g&(T^P))+S[13]+4254626195&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(T^N&(g^T))+S[14]+2792965006&4294967295,P=N+(R<<17&4294967295|R>>>15),R=T+(g^P&(N^g))+S[15]+1236535329&4294967295,T=P+(R<<22&4294967295|R>>>10),R=g+(P^N&(T^P))+S[1]+4129170786&4294967295,g=T+(R<<5&4294967295|R>>>27),R=N+(T^P&(g^T))+S[6]+3225465664&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^T&(N^g))+S[11]+643717713&4294967295,P=N+(R<<14&4294967295|R>>>18),R=T+(N^g&(P^N))+S[0]+3921069994&4294967295,T=P+(R<<20&4294967295|R>>>12),R=g+(P^N&(T^P))+S[5]+3593408605&4294967295,g=T+(R<<5&4294967295|R>>>27),R=N+(T^P&(g^T))+S[10]+38016083&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^T&(N^g))+S[15]+3634488961&4294967295,P=N+(R<<14&4294967295|R>>>18),R=T+(N^g&(P^N))+S[4]+3889429448&4294967295,T=P+(R<<20&4294967295|R>>>12),R=g+(P^N&(T^P))+S[9]+568446438&4294967295,g=T+(R<<5&4294967295|R>>>27),R=N+(T^P&(g^T))+S[14]+3275163606&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^T&(N^g))+S[3]+4107603335&4294967295,P=N+(R<<14&4294967295|R>>>18),R=T+(N^g&(P^N))+S[8]+1163531501&4294967295,T=P+(R<<20&4294967295|R>>>12),R=g+(P^N&(T^P))+S[13]+2850285829&4294967295,g=T+(R<<5&4294967295|R>>>27),R=N+(T^P&(g^T))+S[2]+4243563512&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^T&(N^g))+S[7]+1735328473&4294967295,P=N+(R<<14&4294967295|R>>>18),R=T+(N^g&(P^N))+S[12]+2368359562&4294967295,T=P+(R<<20&4294967295|R>>>12),R=g+(T^P^N)+S[5]+4294588738&4294967295,g=T+(R<<4&4294967295|R>>>28),R=N+(g^T^P)+S[8]+2272392833&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^T)+S[11]+1839030562&4294967295,P=N+(R<<16&4294967295|R>>>16),R=T+(P^N^g)+S[14]+4259657740&4294967295,T=P+(R<<23&4294967295|R>>>9),R=g+(T^P^N)+S[1]+2763975236&4294967295,g=T+(R<<4&4294967295|R>>>28),R=N+(g^T^P)+S[4]+1272893353&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^T)+S[7]+4139469664&4294967295,P=N+(R<<16&4294967295|R>>>16),R=T+(P^N^g)+S[10]+3200236656&4294967295,T=P+(R<<23&4294967295|R>>>9),R=g+(T^P^N)+S[13]+681279174&4294967295,g=T+(R<<4&4294967295|R>>>28),R=N+(g^T^P)+S[0]+3936430074&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^T)+S[3]+3572445317&4294967295,P=N+(R<<16&4294967295|R>>>16),R=T+(P^N^g)+S[6]+76029189&4294967295,T=P+(R<<23&4294967295|R>>>9),R=g+(T^P^N)+S[9]+3654602809&4294967295,g=T+(R<<4&4294967295|R>>>28),R=N+(g^T^P)+S[12]+3873151461&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^T)+S[15]+530742520&4294967295,P=N+(R<<16&4294967295|R>>>16),R=T+(P^N^g)+S[2]+3299628645&4294967295,T=P+(R<<23&4294967295|R>>>9),R=g+(P^(T|~N))+S[0]+4096336452&4294967295,g=T+(R<<6&4294967295|R>>>26),R=N+(T^(g|~P))+S[7]+1126891415&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~T))+S[14]+2878612391&4294967295,P=N+(R<<15&4294967295|R>>>17),R=T+(N^(P|~g))+S[5]+4237533241&4294967295,T=P+(R<<21&4294967295|R>>>11),R=g+(P^(T|~N))+S[12]+1700485571&4294967295,g=T+(R<<6&4294967295|R>>>26),R=N+(T^(g|~P))+S[3]+2399980690&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~T))+S[10]+4293915773&4294967295,P=N+(R<<15&4294967295|R>>>17),R=T+(N^(P|~g))+S[1]+2240044497&4294967295,T=P+(R<<21&4294967295|R>>>11),R=g+(P^(T|~N))+S[8]+1873313359&4294967295,g=T+(R<<6&4294967295|R>>>26),R=N+(T^(g|~P))+S[15]+4264355552&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~T))+S[6]+2734768916&4294967295,P=N+(R<<15&4294967295|R>>>17),R=T+(N^(P|~g))+S[13]+1309151649&4294967295,T=P+(R<<21&4294967295|R>>>11),R=g+(P^(T|~N))+S[4]+4149444226&4294967295,g=T+(R<<6&4294967295|R>>>26),R=N+(T^(g|~P))+S[11]+3174756917&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~T))+S[2]+718787259&4294967295,P=N+(R<<15&4294967295|R>>>17),R=T+(N^(P|~g))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+P&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var T=g-this.blockSize,S=this.B,P=this.h,N=0;N<g;){if(P==0)for(;N<=T;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<g;)if(S[P++]=w.charCodeAt(N++),P==this.blockSize){i(this,S),P=0;break}}else for(;N<g;)if(S[P++]=w[N++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var T=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=T&255,T/=256;for(this.u(w),w=Array(16),g=T=0;4>g;++g)for(var S=0;32>S;S+=8)w[T++]=this.g[g]>>>S&255;return w};function s(w,g){var T=a;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=g(w)}function o(w,g){this.h=g;for(var T=[],S=!0,P=w.length-1;0<=P;P--){var N=w[P]|0;S&&N==g||(T[P]=N,S=!1)}this.g=T}var a={};function u(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return D(c(-w));for(var g=[],T=1,S=0;w>=T;S++)g[S]=w/T|0,T*=4294967296;return new o(g,0)}function d(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return D(d(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(g,8)),S=f,P=0;P<w.length;P+=8){var N=Math.min(8,w.length-P),R=parseInt(w.substring(P,P+N),g);8>N?(N=c(Math.pow(g,N)),S=S.j(N).add(c(R))):(S=S.j(T),S=S.add(c(R)))}return S}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-D(this).m();for(var w=0,g=1,T=0;T<this.g.length;T++){var S=this.i(T);w+=(0<=S?S:4294967296+S)*g,g*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(C(this))return"-"+D(this).toString(w);for(var g=c(Math.pow(w,6)),T=this,S="";;){var P=V(T,g).g;T=E(T,P.j(g));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=P,A(T))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function C(w){return w.h==-1}t.l=function(w){return w=E(this,w),C(w)?-1:A(w)?0:1};function D(w){for(var g=w.g.length,T=[],S=0;S<g;S++)T[S]=~w.g[S];return new o(T,~w.h).add(m)}t.abs=function(){return C(this)?D(this):this},t.add=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],S=0,P=0;P<=g;P++){var N=S+(this.i(P)&65535)+(w.i(P)&65535),R=(N>>>16)+(this.i(P)>>>16)+(w.i(P)>>>16);S=R>>>16,N&=65535,R&=65535,T[P]=R<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(w,g){return w.add(D(g))}t.j=function(w){if(A(this)||A(w))return f;if(C(this))return C(w)?D(this).j(D(w)):D(D(this).j(w));if(C(w))return D(this.j(D(w)));if(0>this.l(y)&&0>w.l(y))return c(this.m()*w.m());for(var g=this.g.length+w.g.length,T=[],S=0;S<2*g;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<w.g.length;P++){var N=this.i(S)>>>16,R=this.i(S)&65535,Dt=w.i(P)>>>16,bn=w.i(P)&65535;T[2*S+2*P]+=R*bn,I(T,2*S+2*P),T[2*S+2*P+1]+=N*bn,I(T,2*S+2*P+1),T[2*S+2*P+1]+=R*Dt,I(T,2*S+2*P+1),T[2*S+2*P+2]+=N*Dt,I(T,2*S+2*P+2)}for(S=0;S<g;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=g;S<2*g;S++)T[S]=0;return new o(T,0)};function I(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function v(w,g){this.g=w,this.h=g}function V(w,g){if(A(g))throw Error("division by zero");if(A(w))return new v(f,f);if(C(w))return g=V(D(w),g),new v(D(g.g),D(g.h));if(C(g))return g=V(w,D(g)),new v(D(g.g),g.h);if(30<w.g.length){if(C(w)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var T=m,S=g;0>=S.l(w);)T=F(T),S=F(S);var P=O(T,1),N=O(S,1);for(S=O(S,2),T=O(T,2);!A(S);){var R=N.add(S);0>=R.l(w)&&(P=P.add(T),N=R),S=O(S,1),T=O(T,1)}return g=E(w,P.j(g)),new v(P,g)}for(P=f;0<=w.l(g);){for(T=Math.max(1,Math.floor(w.m()/g.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=c(T),R=N.j(g);C(R)||0<R.l(w);)T-=S,N=c(T),R=N.j(g);A(N)&&(N=m),P=P.add(N),w=E(w,R)}return new v(P,w)}t.A=function(w){return V(this,w).h},t.and=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)&w.i(S);return new o(T,this.h&w.h)},t.or=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)|w.i(S);return new o(T,this.h|w.h)},t.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),T=[],S=0;S<g;S++)T[S]=this.i(S)^w.i(S);return new o(T,this.h^w.h)};function F(w){for(var g=w.g.length+1,T=[],S=0;S<g;S++)T[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(T,w.h)}function O(w,g){var T=g>>5;g%=32;for(var S=w.g.length-T,P=[],N=0;N<S;N++)P[N]=0<g?w.i(N+T)>>>g|w.i(N+T+1)<<32-g:w.i(N+T);return new o(P,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,RT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Ni=o}).apply(typeof yv<"u"?yv:typeof self<"u"?self:typeof window<"u"?window:{});var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PT,pa,CT,Ku,cp,kT,xT,NT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Su=="object"&&Su];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var b=l[_];if(!(b in p))break e;p=p[b]}l=l[l.length-1],_=p[l],h=h(_),h!=_&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,_=!1,b={next:function(){if(!_&&p<l.length){var M=p++;return{value:h(M,l[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),l.apply(h,b)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function y(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function A(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,b,M){for(var q=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)q[Ie-2]=arguments[Ie];return h.prototype[b].apply(_,q)}}function C(l){const h=l.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=l[_];return p}return[]}function D(l,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const b=l.length||0,M=_.length||0;l.length=b+M;for(let q=0;q<M;q++)l[b+q]=_[q]}else l.push(_)}}class E{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function I(l){return/^[\s\xa0]*$/.test(l)}function v(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var F=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function O(l,h,p){for(const _ in l)h.call(p,l[_],_,l)}function w(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function g(l){const h={};for(const p in l)h[p]=l[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,h){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)l[p]=_[p];for(let M=0;M<T.length;M++)p=T[M],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function P(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function R(){var l=ee;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Dt{constructor(){this.h=this.g=null}add(h,p){const _=bn.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var bn=new E(()=>new ci,l=>l.reset());class ci{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let an,W=!1,ee=new Dt,ie=()=>{const l=a.Promise.resolve(void 0);an=()=>{l.then(Te)}};var Te=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){N(p)}var h=bn;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}W=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function re(l,h){if(Le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(F){e:{try{V(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:te[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&re.aa.h.call(this)}}A(re,Le);var te={2:"touch",3:"pen",4:"mouse"};re.prototype.h=function(){re.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ln=0;function Oo(l,h,p,_,b){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=b,this.key=++ln,this.da=this.fa=!1}function is(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ql(l){this.src=l,this.g={},this.h=0}ql.prototype.add=function(l,h,p,_,b){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var q=Zh(l,h,_,b);return-1<q?(h=l[q],p||(h.fa=!1)):(h=new Oo(h,this.src,M,!!_,b),h.fa=p,l.push(h)),h};function Xh(l,h){var p=h.type;if(p in l.g){var _=l.g[p],b=Array.prototype.indexOf.call(_,h,void 0),M;(M=0<=b)&&Array.prototype.splice.call(_,b,1),M&&(is(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Zh(l,h,p,_){for(var b=0;b<l.length;++b){var M=l[b];if(!M.da&&M.listener==h&&M.capture==!!p&&M.ha==_)return b}return-1}var ed="closure_lm_"+(1e6*Math.random()|0),td={};function e_(l,h,p,_,b){if(Array.isArray(h)){for(var M=0;M<h.length;M++)e_(l,h[M],p,_,b);return null}return p=r_(p),l&&l[oe]?l.K(h,p,c(_)?!!_.capture:!1,b):cR(l,h,p,!1,_,b)}function cR(l,h,p,_,b,M){if(!h)throw Error("Invalid event type");var q=c(b)?!!b.capture:!!b,Ie=rd(l);if(Ie||(l[ed]=Ie=new ql(l)),p=Ie.add(h,p,_,q,M),p.proxy)return p;if(_=hR(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)K||(b=q),b===void 0&&(b=!1),l.addEventListener(h.toString(),_,b);else if(l.attachEvent)l.attachEvent(n_(h.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function hR(){function l(p){return h.call(l.src,l.listener,p)}const h=dR;return l}function t_(l,h,p,_,b){if(Array.isArray(h))for(var M=0;M<h.length;M++)t_(l,h[M],p,_,b);else _=c(_)?!!_.capture:!!_,p=r_(p),l&&l[oe]?(l=l.i,h=String(h).toString(),h in l.g&&(M=l.g[h],p=Zh(M,p,_,b),-1<p&&(is(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[h],l.h--)))):l&&(l=rd(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Zh(h,p,_,b)),(p=-1<l?h[l]:null)&&nd(p))}function nd(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[oe])Xh(h.i,l);else{var p=l.type,_=l.proxy;h.removeEventListener?h.removeEventListener(p,_,l.capture):h.detachEvent?h.detachEvent(n_(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=rd(h))?(Xh(p,l),p.h==0&&(p.src=null,h[ed]=null)):is(l)}}}function n_(l){return l in td?td[l]:td[l]="on"+l}function dR(l,h){if(l.da)l=!0;else{h=new re(h,this);var p=l.listener,_=l.ha||l.src;l.fa&&nd(l),l=p.call(_,h)}return l}function rd(l){return l=l[ed],l instanceof ql?l:null}var id="__closure_events_fn_"+(1e9*Math.random()>>>0);function r_(l){return typeof l=="function"?l:(l[id]||(l[id]=function(h){return l.handleEvent(h)}),l[id])}function mt(){me.call(this),this.i=new ql(this),this.M=this,this.F=null}A(mt,me),mt.prototype[oe]=!0,mt.prototype.removeEventListener=function(l,h,p,_){t_(this,l,h,p,_)};function Rt(l,h){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=h.type||h,typeof h=="string")h=new Le(h,l);else if(h instanceof Le)h.target=h.target||l;else{var b=h;h=new Le(_,l),S(h,b)}if(b=!0,p)for(var M=p.length-1;0<=M;M--){var q=h.g=p[M];b=Gl(q,_,!0,h)&&b}if(q=h.g=l,b=Gl(q,_,!0,h)&&b,b=Gl(q,_,!1,h)&&b,p)for(M=0;M<p.length;M++)q=h.g=p[M],b=Gl(q,_,!1,h)&&b}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],_=0;_<p.length;_++)is(p[_]);delete l.g[h],l.h--}}this.F=null},mt.prototype.K=function(l,h,p,_){return this.i.add(String(l),h,!1,p,_)},mt.prototype.L=function(l,h,p,_){return this.i.add(String(l),h,!0,p,_)};function Gl(l,h,p,_){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,M=0;M<h.length;++M){var q=h[M];if(q&&!q.da&&q.capture==p){var Ie=q.listener,ut=q.ha||q.src;q.fa&&Xh(l.i,q),b=Ie.call(ut,_)!==!1&&b}}return b&&!_.defaultPrevented}function i_(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function s_(l){l.g=i_(()=>{l.g=null,l.i&&(l.i=!1,s_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class fR extends me{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:s_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lo(l){me.call(this),this.h=l,this.g={}}A(Lo,me);var o_=[];function a_(l){O(l.g,function(h,p){this.g.hasOwnProperty(p)&&nd(h)},l),l.g={}}Lo.prototype.N=function(){Lo.aa.N.call(this),a_(this)},Lo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sd=a.JSON.stringify,pR=a.JSON.parse,mR=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function od(){}od.prototype.h=null;function l_(l){return l.h||(l.h=l.i())}function u_(){}var Mo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ad(){Le.call(this,"d")}A(ad,Le);function ld(){Le.call(this,"c")}A(ld,Le);var hi={},c_=null;function Kl(){return c_=c_||new mt}hi.La="serverreachability";function h_(l){Le.call(this,hi.La,l)}A(h_,Le);function Fo(l){const h=Kl();Rt(h,new h_(h))}hi.STAT_EVENT="statevent";function d_(l,h){Le.call(this,hi.STAT_EVENT,l),this.stat=h}A(d_,Le);function Pt(l){const h=Kl();Rt(h,new d_(h,l))}hi.Ma="timingevent";function f_(l,h){Le.call(this,hi.Ma,l),this.size=h}A(f_,Le);function Uo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function jo(){this.g=!0}jo.prototype.xa=function(){this.g=!1};function gR(l,h,p,_,b,M){l.info(function(){if(l.g)if(M)for(var q="",Ie=M.split("&"),ut=0;ut<Ie.length;ut++){var pe=Ie[ut].split("=");if(1<pe.length){var gt=pe[0];pe=pe[1];var _t=gt.split("_");q=2<=_t.length&&_t[1]=="type"?q+(gt+"="+pe+"&"):q+(gt+"=redacted&")}}else q=null;else q=M;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+h+`
`+p+`
`+q})}function _R(l,h,p,_,b,M,q){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+h+`
`+p+`
`+M+" "+q})}function ss(l,h,p,_){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+vR(l,p)+(_?" "+_:"")})}function yR(l,h){l.info(function(){return"TIMEOUT: "+h})}jo.prototype.info=function(){};function vR(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var M=b[0];if(M!="noop"&&M!="stop"&&M!="close")for(var q=1;q<b.length;q++)b[q]=""}}}}return sd(p)}catch{return h}}var Wl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},p_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ud;function Hl(){}A(Hl,od),Hl.prototype.g=function(){return new XMLHttpRequest},Hl.prototype.i=function(){return{}},ud=new Hl;function dr(l,h,p,_){this.j=l,this.i=h,this.l=p,this.R=_||1,this.U=new Lo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new m_}function m_(){this.i=null,this.g="",this.h=!1}var g_={},cd={};function hd(l,h,p){l.L=1,l.v=Xl(Dn(h)),l.m=p,l.P=!0,__(l,null)}function __(l,h){l.F=Date.now(),Ql(l),l.A=Dn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),N_(p.i,"t",_),l.C=0,p=l.j.J,l.h=new m_,l.g=Q_(l.j,p?h:null,!l.m),0<l.O&&(l.M=new fR(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,_=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(o_[0]=b.toString()),b=o_);for(var M=0;M<b.length;M++){var q=e_(p,b[M],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Fo(),gR(l.i,l.u,l.A,l.l,l.R,l.m)}dr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Vn(l)==3?h.j():this.Y(l)},dr.prototype.Y=function(l){try{if(l==this.g)e:{const _t=Vn(this.g);var h=this.g.Ba();const ls=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||F_(this.g)))){this.J||_t!=4||h==7||(h==8||0>=ls?Fo(3):Fo(2)),dd(this);var p=this.g.Z();this.X=p;t:if(y_(this)){var _=F_(this.g);l="";var b=_.length,M=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){di(this),Bo(this);var q="";break t}this.h.i=new a.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,l+=this.h.i.decode(_[h],{stream:!(M&&h==b-1)});_.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,_R(this.i,this.u,this.A,this.l,this.R,_t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,ut=this.g;if((Ie=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(Ie)){var pe=Ie;break t}}pe=null}if(p=pe)ss(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fd(this,p);else{this.o=!1,this.s=3,Pt(12),di(this),Bo(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<q.length;)if(un=IR(this,q),un==cd){_t==4&&(this.s=4,Pt(14),p=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(un==g_){this.s=4,Pt(15),ss(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else ss(this.i,this.l,un,null),fd(this,un);if(y_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||q.length!=0||this.h.h||(this.s=1,Pt(16),p=!1),this.o=this.o&&p,!p)ss(this.i,this.l,q,"[Invalid Chunked Response]"),di(this),Bo(this);else if(0<q.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),vd(gt),gt.M=!0,Pt(11))}}else ss(this.i,this.l,q,null),fd(this,q);_t==4&&di(this),this.o&&!this.J&&(_t==4?G_(this.j,this):(this.o=!1,Ql(this)))}else MR(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),di(this),Bo(this)}}}catch{}finally{}};function y_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function IR(l,h){var p=l.C,_=h.indexOf(`
`,p);return _==-1?cd:(p=Number(h.substring(p,_)),isNaN(p)?g_:(_+=1,_+p>h.length?cd:(h=h.slice(_,_+p),l.C=_+p,h)))}dr.prototype.cancel=function(){this.J=!0,di(this)};function Ql(l){l.S=Date.now()+l.I,v_(l,l.I)}function v_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Uo(m(l.ba,l),h)}function dd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}dr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(yR(this.i,this.A),this.L!=2&&(Fo(),Pt(17)),di(this),this.s=2,Bo(this)):v_(this,this.S-l)};function Bo(l){l.j.G==0||l.J||G_(l.j,l)}function di(l){dd(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,a_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function fd(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||pd(p.h,l))){if(!l.K&&pd(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)iu(p),nu(p);else break e;yd(p),Pt(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=Uo(m(p.Za,p),6e3));if(1>=E_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else pi(p,11)}else if((l.K||p.g==l)&&iu(p),!I(h))for(b=p.Da.g.parse(h),h=0;h<b.length;h++){let pe=b[h];if(p.T=pe[0],pe=pe[1],p.G==2)if(pe[0]=="c"){p.K=pe[1],p.ia=pe[2];const gt=pe[3];gt!=null&&(p.la=gt,p.j.info("VER="+p.la));const _t=pe[4];_t!=null&&(p.Aa=_t,p.j.info("SVER="+p.Aa));const ls=pe[5];ls!=null&&typeof ls=="number"&&0<ls&&(_=1.5*ls,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const un=l.g;if(un){const ou=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ou){var M=_.h;M.g||ou.indexOf("spdy")==-1&&ou.indexOf("quic")==-1&&ou.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(md(M,M.h),M.h=null))}if(_.D){const Id=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Id&&(_.ya=Id,Se(_.I,_.D,Id))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=l;if(_.qa=H_(_,_.J?_.ia:null,_.W),q.K){T_(_.h,q);var Ie=q,ut=_.L;ut&&(Ie.I=ut),Ie.B&&(dd(Ie),Ql(Ie)),_.g=q}else $_(_);0<p.i.length&&ru(p)}else pe[0]!="stop"&&pe[0]!="close"||pi(p,7);else p.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?pi(p,7):_d(p):pe[0]!="noop"&&p.l&&p.l.ta(pe),p.v=0)}}Fo(4)}catch{}}var wR=class{constructor(l,h){this.g=l,this.map=h}};function I_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function w_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function E_(l){return l.h?1:l.g?l.g.size:0}function pd(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function md(l,h){l.g?l.g.add(h):l.h=h}function T_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}I_.prototype.cancel=function(){if(this.i=S_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function S_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return C(l.i)}function ER(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,_=0;_<p;_++)h.push(l[_]);return h}h=[],p=0;for(_ in l)h[p++]=l[_];return h}function TR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const _ in l)h[p++]=_;return h}}}function A_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=TR(l),_=ER(l),b=_.length,M=0;M<b;M++)h.call(void 0,_[M],p&&p[M],l)}var R_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SR(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),b=null;if(0<=_){var M=l[p].substring(0,_);b=l[p].substring(_+1)}else M=l[p];h(M,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function fi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fi){this.h=l.h,Yl(this,l.j),this.o=l.o,this.g=l.g,Jl(this,l.s),this.l=l.l;var h=l.i,p=new qo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),P_(this,p),this.m=l.m}else l&&(h=String(l).match(R_))?(this.h=!1,Yl(this,h[1]||"",!0),this.o=zo(h[2]||""),this.g=zo(h[3]||"",!0),Jl(this,h[4]),this.l=zo(h[5]||"",!0),P_(this,h[6]||"",!0),this.m=zo(h[7]||"")):(this.h=!1,this.i=new qo(null,this.h))}fi.prototype.toString=function(){var l=[],h=this.j;h&&l.push($o(h,C_,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push($o(h,C_,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push($o(p,p.charAt(0)=="/"?PR:RR,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",$o(p,kR)),l.join("")};function Dn(l){return new fi(l)}function Yl(l,h,p){l.j=p?zo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Jl(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function P_(l,h,p){h instanceof qo?(l.i=h,xR(l.i,l.h)):(p||(h=$o(h,CR)),l.i=new qo(h,l.h))}function Se(l,h,p){l.i.set(h,p)}function Xl(l){return Se(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function zo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function $o(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,AR),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function AR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var C_=/[#\/\?@]/g,RR=/[#\?:]/g,PR=/[#\?]/g,CR=/[#\?@]/g,kR=/#/g;function qo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function fr(l){l.g||(l.g=new Map,l.h=0,l.i&&SR(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=qo.prototype,t.add=function(l,h){fr(this),this.i=null,l=os(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function k_(l,h){fr(l),h=os(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function x_(l,h){return fr(l),h=os(l,h),l.g.has(h)}t.forEach=function(l,h){fr(this),this.g.forEach(function(p,_){p.forEach(function(b){l.call(h,b,_,this)},this)},this)},t.na=function(){fr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const b=l[_];for(let M=0;M<b.length;M++)p.push(h[_])}return p},t.V=function(l){fr(this);let h=[];if(typeof l=="string")x_(this,l)&&(h=h.concat(this.g.get(os(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return fr(this),this.i=null,l=os(this,l),x_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function N_(l,h,p){k_(l,h),0<p.length&&(l.i=null,l.g.set(os(l,h),C(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const M=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var b=M;q[_]!==""&&(b+="="+encodeURIComponent(String(q[_]))),l.push(b)}}return this.i=l.join("&")};function os(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function xR(l,h){h&&!l.j&&(fr(l),l.i=null,l.g.forEach(function(p,_){var b=_.toLowerCase();_!=b&&(k_(this,_),N_(this,b,p))},l)),l.j=h}function NR(l,h){const p=new jo;if(a.Image){const _=new Image;_.onload=y(pr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=y(pr,p,"TestLoadImage: error",!1,h,_),_.onabort=y(pr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=y(pr,p,"TestLoadImage: timeout",!1,h,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else h(!1)}function bR(l,h){const p=new jo,_=new AbortController,b=setTimeout(()=>{_.abort(),pr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:_.signal}).then(M=>{clearTimeout(b),M.ok?pr(p,"TestPingServer: ok",!0,h):pr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),pr(p,"TestPingServer: error",!1,h)})}function pr(l,h,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function DR(){this.g=new mR}function VR(l,h,p){const _=p||"";try{A_(l,function(b,M){let q=b;c(b)&&(q=sd(b)),h.push(_+M+"="+encodeURIComponent(q))})}catch(b){throw h.push(_+"type="+encodeURIComponent("_badmap")),b}}function Zl(l){this.l=l.Ub||null,this.j=l.eb||!1}A(Zl,od),Zl.prototype.g=function(){return new eu(this.l,this.j)},Zl.prototype.i=function(l){return function(){return l}}({});function eu(l,h){mt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(eu,mt),t=eu.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Ko(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Go(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;b_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function b_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Go(this):Ko(this),this.readyState==3&&b_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Go(this))},t.Qa=function(l){this.g&&(this.response=l,Go(this))},t.ga=function(){this.g&&Go(this)};function Go(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ko(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Ko(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function D_(l){let h="";return O(l,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function gd(l,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=D_(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Se(l,h,p))}function Be(l){mt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Be,mt);var OR=/^https?$/i,LR=["POST","PUT"];t=Be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ud.g(),this.v=this.o?l_(this.o):l_(ud),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(M){V_(this,M);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(LR,h,void 0))||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of p)this.g.setRequestHeader(M,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{M_(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){V_(this,M)}};function V_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,O_(l),tu(l)}function O_(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),tu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tu(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?L_(this):this.bb())},t.bb=function(){L_(this)};function L_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Vn(l)!=4||l.Z()!=2)){if(l.u&&Vn(l)==4)i_(l.Ea,0,l);else if(Rt(l,"readystatechange"),Vn(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=q===0){var b=String(l.D).match(R_)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),_=!OR.test(b?b.toLowerCase():"")}p=_}if(p)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var M=2<Vn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",O_(l)}}finally{tu(l)}}}}function tu(l,h){if(l.g){M_(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Rt(l,"ready");try{p.onreadystatechange=_}catch{}}}function M_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Vn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),pR(h)}};function F_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function MR(l){const h={};l=(l.g&&2<=Vn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(I(l[_]))continue;var p=P(l[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=h[b]||[];h[b]=M,M.push(p)}w(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wo(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function U_(l){this.Aa=0,this.i=[],this.j=new jo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wo("baseRetryDelayMs",5e3,l),this.cb=Wo("retryDelaySeedMs",1e4,l),this.Wa=Wo("forwardChannelMaxRetries",2,l),this.wa=Wo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new I_(l&&l.concurrentRequestLimit),this.Da=new DR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=U_.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,_){Pt(0),this.W=l,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=H_(this,null,this.W),ru(this)};function _d(l){if(j_(l),l.G==3){var h=l.U++,p=Dn(l.I);if(Se(p,"SID",l.K),Se(p,"RID",h),Se(p,"TYPE","terminate"),Ho(l,p),h=new dr(l,l.j,h),h.L=2,h.v=Xl(Dn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Q_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ql(h)}W_(l)}function nu(l){l.g&&(vd(l),l.g.cancel(),l.g=null)}function j_(l){nu(l),l.u&&(a.clearTimeout(l.u),l.u=null),iu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ru(l){if(!w_(l.h)&&!l.s){l.s=!0;var h=l.Ga;an||ie(),W||(an(),W=!0),ee.add(h,l),l.B=0}}function FR(l,h){return E_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Uo(m(l.Ga,l,h),K_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new dr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=g(M),S(M,this.S)):M=this.S),this.m!==null||this.O||(b.H=M,M=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=z_(this,b,h),p=Dn(this.I),Se(p,"RID",l),Se(p,"CVER",22),this.D&&Se(p,"X-HTTP-Session-Id",this.D),Ho(this,p),M&&(this.O?h="headers="+encodeURIComponent(String(D_(M)))+"&"+h:this.m&&gd(p,this.m,M)),md(this.h,b),this.Ua&&Se(p,"TYPE","init"),this.P?(Se(p,"$req",h),Se(p,"SID","null"),b.T=!0,hd(b,p,null)):hd(b,p,h),this.G=2}}else this.G==3&&(l?B_(this,l):this.i.length==0||w_(this.h)||B_(this))};function B_(l,h){var p;h?p=h.l:p=l.U++;const _=Dn(l.I);Se(_,"SID",l.K),Se(_,"RID",p),Se(_,"AID",l.T),Ho(l,_),l.m&&l.o&&gd(_,l.m,l.o),p=new dr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=z_(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),md(l.h,p),hd(p,_,h)}function Ho(l,h){l.H&&O(l.H,function(p,_){Se(h,_,p)}),l.l&&A_({},function(p,_){Se(h,_,p)})}function z_(l,h,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let M=-1;for(;;){const q=["count="+p];M==-1?0<p?(M=b[0].g,q.push("ofs="+M)):M=0:q.push("ofs="+M);let Ie=!0;for(let ut=0;ut<p;ut++){let pe=b[ut].g;const gt=b[ut].map;if(pe-=M,0>pe)M=Math.max(0,b[ut].g-100),Ie=!1;else try{VR(gt,q,"req"+pe+"_")}catch{_&&_(gt)}}if(Ie){_=q.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,_}function $_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;an||ie(),W||(an(),W=!0),ee.add(h,l),l.v=0}}function yd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Uo(m(l.Fa,l),K_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,q_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Uo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),nu(this),q_(this))};function vd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function q_(l){l.g=new dr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Dn(l.qa);Se(h,"RID","rpc"),Se(h,"SID",l.K),Se(h,"AID",l.T),Se(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Se(h,"TO",l.ja),Se(h,"TYPE","xmlhttp"),Ho(l,h),l.m&&l.o&&gd(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Xl(Dn(h)),p.m=null,p.P=!0,__(p,l)}t.Za=function(){this.C!=null&&(this.C=null,nu(this),yd(this),Pt(19))};function iu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function G_(l,h){var p=null;if(l.g==h){iu(l),vd(l),l.g=null;var _=2}else if(pd(l.h,h))p=h.D,T_(l.h,h),_=1;else return;if(l.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var b=l.B;_=Kl(),Rt(_,new f_(_,p)),ru(l)}else $_(l);else if(b=h.s,b==3||b==0&&0<h.X||!(_==1&&FR(l,h)||_==2&&yd(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),b){case 1:pi(l,5);break;case 4:pi(l,10);break;case 3:pi(l,6);break;default:pi(l,2)}}}function K_(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function pi(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),_=l.Xa;const b=!_;_=new fi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yl(_,"https"),Xl(_),b?NR(_.toString(),p):bR(_.toString(),p)}else Pt(2);l.G=0,l.l&&l.l.sa(h),W_(l),j_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function W_(l){if(l.G=0,l.ka=[],l.l){const h=S_(l.h);(h.length!=0||l.i.length!=0)&&(D(l.ka,h),D(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function H_(l,h,p){var _=p instanceof fi?Dn(p):new fi(p);if(_.g!="")h&&(_.g=h+"."+_.g),Jl(_,_.s);else{var b=a.location;_=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var M=new fi(null);_&&Yl(M,_),h&&(M.g=h),b&&Jl(M,b),p&&(M.l=p),_=M}return p=l.D,h=l.ya,p&&h&&Se(_,p,h),Se(_,"VER",l.la),Ho(l,_),_}function Q_(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Be(new Zl({eb:p})):new Be(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Y_(){}t=Y_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function su(){}su.prototype.g=function(l,h){return new $t(l,h)};function $t(l,h){mt.call(this),this.g=new U_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!I(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new as(this)}A($t,mt),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){_d(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=sd(l),l=p);h.i.push(new wR(h.Ya++,l)),h.G==3&&ru(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,_d(this.g),delete this.g,$t.aa.N.call(this)};function J_(l){ad.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}A(J_,ad);function X_(){ld.call(this),this.status=1}A(X_,ld);function as(l){this.g=l}A(as,Y_),as.prototype.ua=function(){Rt(this.g,"a")},as.prototype.ta=function(l){Rt(this.g,new J_(l))},as.prototype.sa=function(l){Rt(this.g,new X_)},as.prototype.ra=function(){Rt(this.g,"b")},su.prototype.createWebChannel=su.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,NT=function(){return new su},xT=function(){return Kl()},kT=hi,cp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wl.NO_ERROR=0,Wl.TIMEOUT=8,Wl.HTTP_ERROR=6,Ku=Wl,p_.COMPLETE="complete",CT=p_,u_.EventType=Mo,Mo.OPEN="a",Mo.CLOSE="b",Mo.ERROR="c",Mo.MESSAGE="d",mt.prototype.listen=mt.prototype.K,pa=u_,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,PT=Be}).apply(typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{});const vv="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let yo="10.14.0";/**
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
 */const qr=new xm("@firebase/firestore");function ms(){return qr.logLevel}function Yx(t){qr.setLogLevel(t)}function j(t,...e){if(qr.logLevel<=ue.DEBUG){const n=e.map(Vm);qr.debug(`Firestore (${yo}): ${t}`,...n)}}function We(t,...e){if(qr.logLevel<=ue.ERROR){const n=e.map(Vm);qr.error(`Firestore (${yo}): ${t}`,...n)}}function Qt(t,...e){if(qr.logLevel<=ue.WARN){const n=e.map(Vm);qr.warn(`Firestore (${yo}): ${t}`,...n)}}function Vm(t){if(typeof t=="string")return t;try{/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function Y(t,e){t||H()}function Jx(t,e){t||H()}function $(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class bT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Xx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zx{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Y(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ot,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ot)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new bT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new it(e)}}class eN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Y(this.o===void 0);const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.R=n.token,new VT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class rN{getToken(){return Promise.resolve(new VT(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Om{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function OT(t){return t+"\0"}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ve(0,0))}static max(){return new J(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends rl{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const sN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends rl{construct(e,n,r){return new Pe(e,n,r)}static isValidIdentifier(e){return sN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ce.fromString(e))}static fromName(e){return new G(ce.fromString(e).popFirst(5))}static empty(){return new G(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ce(e.slice()))}}/**
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
 */class Js{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function hp(t){return t.fields.find(e=>e.kind===2)}function vi(t){return t.fields.filter(e=>e.kind!==2)}function oN(t,e){let n=ne(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=aN(t.fields[r],e.fields[r]),n!==0)return n;return ne(t.fields.length,e.fields.length)}Js.UNKNOWN_ID=-1;class bi{constructor(e,n){this.fieldPath=e,this.kind=n}}function aN(t,e){const n=Pe.comparator(t.fieldPath,e.fieldPath);return n!==0?n:ne(t.kind,e.kind)}class Xs{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Xs(0,Yt.min())}}function LT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Yt(i,G.empty(),e)}function MT(t){return new Yt(t.readTime,t.key,-1)}class Yt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yt(J.min(),G.empty(),-1)}static max(){return new Yt(J.max(),G.empty(),-1)}}function Lm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ni(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==FT)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class vh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new ot,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new xa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Mm(r.target.error);this.V.reject(new xa(e,i))}}static open(e,n,r,i){try{return new vh(n,e.transaction(i,r))}catch(s){throw new xa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new uN(n)}}class Pn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Pn.S(et())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return j("SimpleDb","Removing database:",e),Ii(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!IT())return!1;if(Pn.v())return!0;const e=et(),n=Pn.S(e),r=0<n&&n<10,i=jT(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new xa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new U(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new xa(e,o))},i.onupgradeneeded=s=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=vh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),x.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(j("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function jT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class lN{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ii(this.B.delete())}}class xa extends U{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ri(t){return t.name==="IndexedDbTransactionError"}class uN{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(j("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ii(r)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),Ii(this.store.add(e))}get(e){return Ii(this.store.get(e)).next(n=>(n===void 0&&(n=null),j("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),Ii(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),Ii(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new x((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new x((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){j("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new x((r,i)=>{n.onerror=s=>{const o=Mm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new x((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new lN(a),c=n(a.primaryKey,a.value,u);if(c instanceof x){const d=c.catch(f=>(u.done(),x.reject(f)));r.push(d)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>x.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ii(t){return new x((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Mm(r.target.error);n(i)}})}let Iv=!1;function Mm(t){const e=Pn.S(et());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Iv||(Iv=!0,setTimeout(()=>{throw r},0)),r}}return t}class cN{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){j("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{j("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ri(n)?j("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await ni(n)}await this.X(6e4)})}}class hN{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return x.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return j("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(j("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=MT(s);Lm(o,r)>0&&(r=o)}),new Yt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Lt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Lt.oe=-1;function Sl(t){return t==null}function il(t){return t===0&&1/t==-1/0}function BT(t){return typeof t=="number"&&Number.isInteger(t)&&!il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wv(e)),e=dN(t.get(n),e);return wv(e)}function dN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function wv(t){return t+""}function En(t){const e=t.length;if(Y(e>=2),e===2)return Y(t.charAt(0)===""&&t.charAt(1)===""),ce.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new ce(r)}/**
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
 */const Ev=["userId","batchId"];/**
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
 */function Wu(t,e){return[t,Tt(e)]}function zT(t,e,n){return[t,Tt(e),n]}const fN={},pN=["prefixPath","collectionGroup","readTime","documentId"],mN=["prefixPath","collectionGroup","documentId"],gN=["collectionGroup","readTime","prefixPath","documentId"],_N=["canonicalId","targetId"],yN=["targetId","path"],vN=["path","targetId"],IN=["collectionId","parent"],wN=["indexId","uid"],EN=["uid","sequenceNumber"],TN=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],SN=["indexId","uid","orderedDocumentKey"],AN=["userId","collectionPath","documentId"],RN=["userId","collectionPath","largestBatchId"],PN=["userId","collectionGroup","largestBatchId"],$T=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],CN=[...$T,"documentOverlays"],qT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],GT=qT,Fm=[...GT,"indexConfiguration","indexState","indexEntries"],kN=Fm,xN=[...Fm,"globals"];/**
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
 */class dp extends UT{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function tt(t,e){const n=$(t);return Pn.F(n._e,e)}/**
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
 */function Tv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KT(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function WT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Au(this.root,e,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Au(this.root,e,this.comparator,!0)}}class Au{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ye(this.comparator);return n.data=e,n}}class Sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function cs(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new ye(Pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class HT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new HT("Invalid base64 string: "+s):s}}(e);return new je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const bN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(Y(!!t),typeof t=="string"){let e=0;const n=bN.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function nr(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
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
 */function Ih(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wh(t){const e=t.mapValue.fields.__previous_value__;return Ih(e)?wh(e):e}function sl(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class DN{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Gr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Hu={nullValue:"NULL_VALUE"};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ih(t)?4:QT(t)?9007199254740991:Eh(t)?10:11:H()}function kn(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sl(t).isEqual(sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=tr(i.timestampValue),a=tr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return nr(i.bytesValue).isEqual(nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),a=Ne(s.doubleValue);return o===a?il(o)===il(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Tv(o)!==Tv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!kn(o[u],a[u])))return!1;return!0}(t,e);default:return H()}}function ol(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Av(t.timestampValue,e.timestampValue);case 4:return Av(sl(t),sl(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=nr(s),u=nr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=ne(a[c],u[c]);if(d!==0)return d}return ne(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Ne(s.latitude),Ne(o.latitude));return a!==0?a:ne(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Rv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,d;const f=s.fields||{},m=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=ne(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:Rv(y,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cr.mapValue&&o===Cr.mapValue)return 0;if(s===Cr.mapValue)return 1;if(o===Cr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=ne(u[f],d[f]);if(m!==0)return m;const y=Wr(a[u[f]],c[d[f]]);if(y!==0)return y}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw H()}}function Av(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=tr(t),r=tr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Rv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Wr(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Zs(t){return fp(t)}function fp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=fp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${fp(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function Qu(t){switch(Kr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wh(t);return e?16+Qu(e):16;case 5:return 2*t.stringValue.length;case 6:return nr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Qu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ii(r.fields,(s,o)=>{i+=s.length+Qu(o)}),i}(t.mapValue);default:throw H()}}function zi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pp(t){return!!t&&"integerValue"in t}function al(t){return!!t&&"arrayValue"in t}function Pv(t){return!!t&&"nullValue"in t}function Cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yu(t){return!!t&&"mapValue"in t}function Eh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Na(t.arrayValue.values[n]);return e}return Object.assign({},t)}function QT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const YT={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function VN(t){return"nullValue"in t?Hu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?zi(Gr.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Eh(t)?YT:{mapValue:{}}:H()}function ON(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?zi(Gr.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?YT:"mapValue"in t?Eh(t)?{mapValue:{}}:Cr:H()}function kv(t,e){const n=Wr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function xv(t,e){const n=Wr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Na(n)}setAll(e){let n=Pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(Na(this.value))}}function JT(t){const e=[];return ii(t.fields,(n,r)=>{const i=new Pe([n]);if(Yu(r)){const s=JT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
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
 */class Re{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,J.min(),J.min(),J.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Re(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Re(e,2,n,J.min(),J.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,J.min(),J.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hr{constructor(e,n){this.position=e,this.inclusive=n}}function Nv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Wr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ll{constructor(e,n="asc"){this.field=e,this.dir=n}}function LN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class XT{}class he extends XT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MN(e,n,r):n==="array-contains"?new jN(e,r):n==="in"?new i0(e,r):n==="not-in"?new BN(e,r):n==="array-contains-any"?new zN(e,r):new he(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FN(e,r):new UN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wr(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends XT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ge(e,n)}matches(e){return eo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eo(t){return t.op==="and"}function mp(t){return t.op==="or"}function Um(t){return ZT(t)&&eo(t)}function ZT(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function gp(t){if(t instanceof he)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(Um(t))return t.filters.map(e=>gp(e)).join(",");{const e=t.filters.map(n=>gp(n)).join(",");return`${t.op}(${e})`}}function e0(t,e){return t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.field.isEqual(i.field)&&kn(r.value,i.value)}(t,e):t instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&e0(o,i.filters[a]),!0):!1}(t,e):void H()}function t0(t,e){const n=t.filters.concat(e);return ge.create(n,t.op)}function n0(t){return t instanceof he?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof ge?function(n){return n.op.toString()+" {"+n.getFilters().map(n0).join(" ,")+"}"}(t):"Filter"}class MN extends he{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class FN extends he{constructor(e,n){super(e,"in",n),this.keys=r0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UN extends he{constructor(e,n){super(e,"not-in",n),this.keys=r0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function r0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class jN extends he{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return al(n)&&ol(n.arrayValue,this.value)}}class i0 extends he{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ol(this.value.arrayValue,n)}}class BN extends he{constructor(e,n){super(e,"not-in",n)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ol(this.value.arrayValue,n)}}class zN extends he{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ol(this.value.arrayValue,r))}}/**
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
 */class $N{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function _p(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $N(t,e,n,r,i,s,o)}function $i(t){const e=$(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.ue=n}return e.ue}function Al(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!e0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bv(t.startAt,e.startAt)&&bv(t.endAt,e.endAt)}function Lc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Mc(t,e){return t.filters.filter(n=>n instanceof he&&n.field.isEqual(e))}function Dv(t,e,n){let r=Hu,i=!0;for(const s of Mc(t,e)){let o=Hu,a=!0;switch(s.op){case"<":case"<=":o=VN(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Hu}kv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];kv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Vv(t,e,n){let r=Cr,i=!0;for(const s of Mc(t,e)){let o=Cr,a=!0;switch(s.op){case">=":case">":o=ON(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Cr}xv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];xv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class or{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function s0(t,e,n,r,i,s,o,a){return new or(t,e,n,r,i,s,o,a)}function vo(t){return new or(t)}function Ov(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jm(t){return t.collectionGroup!==null}function Ms(t){const e=$(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ye(Pe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ll(s,r))}),n.has(Pe.keyField().canonicalString())||e.ce.push(new ll(Pe.keyField(),r))}return e.ce}function St(t){const e=$(t);return e.le||(e.le=a0(e,Ms(t))),e.le}function o0(t){const e=$(t);return e.he||(e.he=a0(e,t.explicitOrderBy)),e.he}function a0(t,e){if(t.limitType==="F")return _p(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ll(i.field,s)});const n=t.endAt?new Hr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hr(t.startAt.position,t.startAt.inclusive):null;return _p(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yp(t,e){const n=t.filters.concat([e]);return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fc(t,e,n){return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return Al(St(t),St(e))&&t.limitType===e.limitType}function l0(t){return`${$i(St(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>n0(i)).join(", ")}]`),Sl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zs(i)).join(",")),`Target(${r})`}(St(t))}; limitType=${t.limitType})`}function Pl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Nv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ms(r),i)||r.endAt&&!function(o,a,u){const c=Nv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ms(r),i))}(t,e)}function u0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c0(t){return(e,n)=>{let r=!1;for(const i of Ms(t)){const s=qN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qN(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Wr(u,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class ar{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return WT(this.inner)}size(){return this.innerSize}}/**
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
 */const GN=new Ee(G.comparator);function Ft(){return GN}const h0=new Ee(G.comparator);function ma(...t){let e=h0;for(const n of t)e=e.insert(n.key,n);return e}function d0(t){let e=h0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tn(){return ba()}function f0(){return ba()}function ba(){return new ar(t=>t.toString(),(t,e)=>t.isEqual(e))}const KN=new Ee(G.comparator),WN=new ye(G.comparator);function se(...t){let e=WN;for(const n of t)e=e.add(n);return e}const HN=new ye(ne);function Bm(){return HN}/**
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
 */function zm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:il(e)?"-0":e}}function p0(t){return{integerValue:""+t}}function m0(t,e){return BT(e)?p0(e):zm(t,e)}/**
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
 */class Th{constructor(){this._=void 0}}function QN(t,e,n){return t instanceof to?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ih(s)&&(s=wh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qi?_0(t,e):t instanceof Gi?y0(t,e):function(i,s){const o=g0(i,s),a=Lv(o)+Lv(i.Pe);return pp(o)&&pp(i.Pe)?p0(a):zm(i.serializer,a)}(t,e)}function YN(t,e,n){return t instanceof qi?_0(t,e):t instanceof Gi?y0(t,e):n}function g0(t,e){return t instanceof no?function(r){return pp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class to extends Th{}class qi extends Th{constructor(e){super(),this.elements=e}}function _0(t,e){const n=v0(e);for(const r of t.elements)n.some(i=>kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends Th{constructor(e){super(),this.elements=e}}function y0(t,e){let n=v0(e);for(const r of t.elements)n=n.filter(i=>!kn(i,r));return{arrayValue:{values:n}}}class no extends Th{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Lv(t){return Ne(t.integerValue||t.doubleValue)}function v0(t){return al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Cl{constructor(e,n){this.field=e,this.transform=n}}function JN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qi&&i instanceof qi||r instanceof Gi&&i instanceof Gi?Ys(r.elements,i.elements,kn):r instanceof no&&i instanceof no?kn(r.Pe,i.Pe):r instanceof to&&i instanceof to}(t.transform,e.transform)}class XN{constructor(e,n){this.version=e,this.transformResults=n}}class De{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sh{}function I0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wo(t.key,De.none()):new Io(t.key,t.data,De.none());{const n=t.data,r=dt.empty();let i=new ye(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new lr(t.key,r,new Mt(i.toArray()),De.none())}}function ZN(t,e,n){t instanceof Io?function(i,s,o){const a=i.value.clone(),u=Fv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(i,s,o){if(!Ju(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Fv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(w0(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Io?function(s,o,a,u){if(!Ju(s.precondition,o))return a;const c=s.value.clone(),d=Uv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(s,o,a,u){if(!Ju(s.precondition,o))return a;const c=Uv(s.fieldTransforms,u,o),d=o.data;return d.setAll(w0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Ju(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=g0(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Mv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ys(r,i,(s,o)=>JN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Io extends Sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lr extends Sh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function w0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fv(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YN(o,a,n[i]))}return r}function Uv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QN(s,o,e))}return r}class wo extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $m extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=I0(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,r)=>Mv(n,r))&&Ys(this.baseMutations,e.baseMutations,(n,r)=>Mv(n,r))}}class Gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=function(){return KN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gm(e,n,r,i)}}/**
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
 */class Km{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class E0{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */var Qe,de;function T0(t){switch(t){default:return H();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function S0(t){if(t===void 0)return We("GRPC error has no .code"),L.UNKNOWN;switch(t){case Qe.OK:return L.OK;case Qe.CANCELLED:return L.CANCELLED;case Qe.UNKNOWN:return L.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return L.INTERNAL;case Qe.UNAVAILABLE:return L.UNAVAILABLE;case Qe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Qe.NOT_FOUND:return L.NOT_FOUND;case Qe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Qe.ABORTED:return L.ABORTED;case Qe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Qe.DATA_LOSS:return L.DATA_LOSS;default:return H()}}(de=Qe||(Qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let Uc=null;/**
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
 */const nb=new Ni([4294967295,4294967295],0);function jv(t){const e=A0().encode(t),n=new RT;return n.update(e),new Uint8Array(n.digest())}function Bv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ni([n,r],0),new Ni([i,s],0)]}class Wm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ga(`Invalid padding: ${n}`);if(r<0)throw new ga(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ga(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ga(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ni.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ni.fromNumber(r)));return i.compare(nb)===1&&(i=new Ni([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=jv(e),[r,i]=Bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=jv(e),[r,i]=Bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ga extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kl(J.min(),i,new Ee(ne),Ft(),se())}}class xl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xl(r,n,se(),se(),se())}}/**
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
 */class Xu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class R0{constructor(e,n){this.targetId=e,this.me=n}}class P0{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zv{constructor(){this.fe=0,this.ge=qv(),this.pe=je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new xl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=qv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Y(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ft(),this.qe=$v(),this.Qe=new Ee(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Lc(s))if(r===0){const o=new G(s.path);this.Ue(n,o,Re.newNoDocument(o,J.min()))}else Y(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}Uc==null||Uc.et(function(d,f,m,y,A){var C,D,E,I,v,V;const F={localCacheCount:d,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},O=f.unchangedNames;return O&&(F.bloomFilter={applied:A===0,hashCount:(C=O==null?void 0:O.hashCount)!==null&&C!==void 0?C:0,bitmapLength:(I=(E=(D=O==null?void 0:O.bits)===null||D===void 0?void 0:D.bitmap)===null||E===void 0?void 0:E.length)!==null&&I!==void 0?I:0,padding:(V=(v=O==null?void 0:O.bits)===null||v===void 0?void 0:v.padding)!==null&&V!==void 0?V:0,mightContain:w=>{var g;return(g=y==null?void 0:y.mightContain(w))!==null&&g!==void 0&&g}}),F}(o,e.me,this.Le.tt(),a,u))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=nr(r).toUint8Array()}catch(u){if(u instanceof HT)return Qt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Wm(o,i,s)}catch(u){return Qt(u instanceof ga?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Lc(a.target)){const u=new G(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Re.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new kl(e,n,this.Qe,this.ke,r);return this.ke=Ft(),this.qe=$v(),this.Qe=new Ee(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new zv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ye(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new zv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $v(){return new Ee(G.comparator)}function qv(){return new Ee(G.comparator)}const ib={asc:"ASCENDING",desc:"DESCENDING"},sb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ob={and:"AND",or:"OR"};class ab{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vp(t,e){return t.useProto3Json||Sl(e)?e:{value:e}}function ro(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lb(t,e){return ro(t,e.toTimestamp())}function He(t){return Y(!!t),J.fromTimestamp(function(n){const r=tr(n);return new Ve(r.seconds,r.nanos)}(t))}function Hm(t,e){return Ip(t,e).canonicalString()}function Ip(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function k0(t){const e=ce.fromString(t);return Y(U0(e)),e}function ul(t,e){return Hm(t.databaseId,e.path)}function Cn(t,e){const n=k0(e);if(n.get(1)!==t.databaseId.projectId)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(b0(n))}function x0(t,e){return Hm(t.databaseId,e)}function N0(t){const e=k0(t);return e.length===4?ce.emptyPath():b0(e)}function wp(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b0(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gv(t,e,n){return{name:ul(t,e),fields:n.value.mapValue.fields}}function D0(t,e,n){const r=Cn(t,e.name),i=He(e.updateTime),s=e.createTime?He(e.createTime):J.min(),o=new dt({mapValue:{fields:e.fields}}),a=Re.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function ub(t,e){return"found"in e?function(r,i){Y(!!i.found),i.found.name,i.found.updateTime;const s=Cn(r,i.found.name),o=He(i.found.updateTime),a=i.found.createTime?He(i.found.createTime):J.min(),u=new dt({mapValue:{fields:i.found.fields}});return Re.newFoundDocument(s,o,a,u)}(t,e):"missing"in e?function(r,i){Y(!!i.missing),Y(!!i.readTime);const s=Cn(r,i.missing),o=He(i.readTime);return Re.newNoDocument(s,o)}(t,e):H()}function cb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Y(d===void 0||typeof d=="string"),je.fromBase64String(d||"")):(Y(d===void 0||d instanceof Buffer||d instanceof Uint8Array),je.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?L.UNKNOWN:S0(c.code);return new U(d,c.message||"")}(o);n=new P0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cn(t,r.document.name),s=He(r.document.updateTime),o=r.document.createTime?He(r.document.createTime):J.min(),a=new dt({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Xu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cn(t,r.document),s=r.readTime?He(r.readTime):J.min(),o=Re.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cn(t,r.document),s=r.removedTargetIds||[];n=new Xu([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tb(i,s),a=r.targetId;n=new R0(a,o)}}return n}function cl(t,e){let n;if(e instanceof Io)n={update:Gv(t,e.key,e.value)};else if(e instanceof wo)n={delete:ul(t,e.key)};else if(e instanceof lr)n={update:Gv(t,e.key,e.data),updateMask:gb(e.fieldMask)};else{if(!(e instanceof $m))return H();n={verify:ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof to)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof no)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function Ep(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?De.updateTime(He(s.updateTime)):s.exists!==void 0?De.exists(s.exists):De.none()}(e.currentDocument):De.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)Y(a.setToServerValue==="REQUEST_TIME"),u=new to;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];u=new qi(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];u=new Gi(d)}else"increment"in a?u=new no(o,a.increment):H();const c=Pe.fromServerFormat(a.fieldPath);return new Cl(c,u)}(t,i)):[];if(e.update){e.update.name;const i=Cn(t,e.update.name),s=new dt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Mt(c.map(d=>Pe.fromServerFormat(d)))}(e.updateMask);return new lr(i,s,o,n,r)}return new Io(i,s,n,r)}if(e.delete){const i=Cn(t,e.delete);return new wo(i,n)}if(e.verify){const i=Cn(t,e.verify);return new $m(i,n)}return H()}function hb(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?He(i.updateTime):He(s);return o.isEqual(J.min())&&(o=He(s)),new XN(o,i.transformResults||[])}(n,e))):[]}function V0(t,e){return{documents:[x0(t,e.path)]}}function Ah(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=x0(t,i);const s=function(c){if(c.length!==0)return F0(ge.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Tr(m.field),direction:fb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=vp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function O0(t,e,n,r){const{_t:i,parent:s}=Ah(t,e),o={},a=[];let u=0;return n.forEach(c=>{const d=r?c.alias:"aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?a.push({alias:d,count:{}}):c.aggregateType==="avg"?a.push({alias:d,avg:{field:Tr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:d,sum:{field:Tr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function L0(t){let e=N0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=M0(f);return m instanceof ge&&Um(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new ll(_s(A.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Sl(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new Hr(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new Hr(y,m)}(n.endAt)),s0(e,i,o,s,a,"F",u,c)}function db(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_s(n.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_s(n.unaryFilter.field);return he.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return he.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return he.create(_s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ge.create(n.compositeFilter.filters.map(r=>M0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function fb(t){return ib[t]}function pb(t){return sb[t]}function mb(t){return ob[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function _s(t){return Pe.fromServerFormat(t.fieldPath)}function F0(t){return t instanceof he?function(n){if(n.op==="=="){if(Cv(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cv(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(n.field),op:pb(n.op),value:n.value}}}(t):t instanceof ge?function(n){const r=n.getFilters().map(i=>F0(i));return r.length===1?r[0]:{compositeFilter:{op:mb(n.op),filters:r}}}(t):H()}function gb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,i,s=J.min(),o=J.min(),a=je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class j0{constructor(e){this.ct=e}}function _b(t,e){let n;if(e.document)n=D0(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=Wi(e.noDocument.readTime);n=Re.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=G.fromSegments(e.unknownDocument.path),i=Wi(e.unknownDocument.version);n=Re.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ve(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function Kv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:jc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ul(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ro(s,o.version.toTimestamp()),createTime:ro(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ki(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:Ki(e.version)}}return r}function jc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ki(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Wi(t){const e=new Ve(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function wi(t,e){const n=(e.baseMutations||[]).map(s=>Ep(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ep(t.ct,s)),i=Ve.fromMillis(e.localWriteTimeMs);return new qm(e.batchId,i,n,r)}function _a(t){const e=Wi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Wi(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Y(s.documents.length===1),St(vo(N0(s.documents[0])))}(t.query):function(s){return St(L0(s))}(t.query),new $n(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,je.fromBase64String(t.resumeToken))}function B0(t,e){const n=Ki(e.snapshotVersion),r=Ki(e.lastLimboFreeSnapshotVersion);let i;i=Lc(e.target)?V0(t.ct,e.target):Ah(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:$i(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Qm(t){const e=L0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fc(e,e.limit,"L"):e}function Xd(t,e){return new Km(e.largestBatchId,Ep(t.ct,e.overlayMutation))}function Wv(t,e){const n=e.path.lastSegment();return[t,Tt(e.path.popLast()),n]}function Hv(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Ki(r.readTime),documentKey:Tt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class yb{getBundleMetadata(e,n){return Qv(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Wi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Qv(e).put(function(i){return{bundleId:i.id,createTime:Ki(He(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Yv(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Qm(s.bundledQuery),readTime:Wi(s.readTime)}}(r)})}saveNamedQuery(e,n){return Yv(e).put(function(i){return{name:i.name,readTime:Ki(He(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Qv(t){return tt(t,"bundles")}function Yv(t){return tt(t,"namedQueries")}/**
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
 */class Rh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Rh(e,r)}getOverlay(e,n){return ra(e).get(Wv(this.userId,n)).next(r=>r?Xd(this.serializer,r):null)}getOverlays(e,n){const r=Tn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Km(n,o);i.push(this.ht(e,a))}),x.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Tt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ra(e).j("collectionPathOverlayIndex",a))}),x.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Tn(),s=Tt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ra(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Xd(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Tn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ra(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,d)=>{const f=Xd(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return ra(e).put(function(i,s,o){const[a,u,c]=Wv(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:cl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ra(t){return tt(t,"documentOverlays")}/**
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
 */class vb{Pt(e){return tt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?je.fromUint8Array(r):je.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Ei{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Ne(e.integerValue));else if("doubleValue"in e){const r=Ne(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),il(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=tr(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(nr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?QT(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Eh(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):H()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Ne(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),G.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Ei.vt=new Ei;function Ib(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Jv(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Ib(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class wb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Jv(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Jv(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Eb{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Tb{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ia{constructor(){this.jt=new wb,this.Ht=new Eb(this.jt),this.Jt=new Tb(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Ti{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ti(this.indexId,this.documentKey,this.arrayValue,r)}}function gr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Xv(t.arrayValue,e.arrayValue),n!==0?n:(n=Xv(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function Xv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Zv{constructor(e){this.Xt=new ye((n,r)=>Pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Y(e.collectionGroup===this.collectionId),this.nn)return!1;const n=hp(e);if(n!==void 0&&!this.sn(n))return!1;const r=vi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ye(Pe.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new bi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new bi(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new bi(r.field,r.dir==="asc"?0:1)));return new Js(Js.UNKNOWN_ID,this.collectionId,n,Xs.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function z0(t){var e,n;if(Y(t instanceof he||t instanceof ge),t instanceof he){if(t instanceof i0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>he.create(t.field,"==",s)))||[];return ge.create(i,"or")}return t}const r=t.filters.map(i=>z0(i));return ge.create(r,t.op)}function Sb(t){if(t.getFilters().length===0)return[];const e=Ap(z0(t));return Y($0(e)),Tp(e)||Sp(e)?[e]:e.getFilters()}function Tp(t){return t instanceof he}function Sp(t){return t instanceof ge&&Um(t)}function $0(t){return Tp(t)||Sp(t)||function(n){if(n instanceof ge&&mp(n)){for(const r of n.getFilters())if(!Tp(r)&&!Sp(r))return!1;return!0}return!1}(t)}function Ap(t){if(Y(t instanceof he||t instanceof ge),t instanceof he)return t;if(t.filters.length===1)return Ap(t.filters[0]);const e=t.filters.map(r=>Ap(r));let n=ge.create(e,t.op);return n=Bc(n),$0(n)?n:(Y(n instanceof ge),Y(eo(n)),Y(n.filters.length>1),n.filters.reduce((r,i)=>Ym(r,i)))}function Ym(t,e){let n;return Y(t instanceof he||t instanceof ge),Y(e instanceof he||e instanceof ge),n=t instanceof he?e instanceof he?function(i,s){return ge.create([i,s],"and")}(t,e):eI(t,e):e instanceof he?eI(e,t):function(i,s){if(Y(i.filters.length>0&&s.filters.length>0),eo(i)&&eo(s))return t0(i,s.getFilters());const o=mp(i)?i:s,a=mp(i)?s:i,u=o.filters.map(c=>Ym(c,a));return ge.create(u,"or")}(t,e),Bc(n)}function eI(t,e){if(eo(e))return t0(e,t.getFilters());{const n=e.filters.map(r=>Ym(t,r));return ge.create(n,"or")}}function Bc(t){if(Y(t instanceof he||t instanceof ge),t instanceof he)return t;const e=t.getFilters();if(e.length===1)return Bc(e[0]);if(ZT(t))return t;const n=e.map(i=>Bc(i)),r=[];return n.forEach(i=>{i instanceof he?r.push(i):i instanceof ge&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ge.create(r,t.op)}/**
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
 */class Ab{constructor(){this.un=new Jm}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Yt.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Jm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ye(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ye(ce.comparator)).toArray()}}/**
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
 */const Ru=new Uint8Array(0);class Rb{constructor(e,n){this.databaseId=n,this.cn=new Jm,this.ln=new ar(r=>$i(r),(r,i)=>Al(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:Tt(i)};return tI(e).put(s)}return x.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[OT(n),""],!1,!0);return tI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(En(o.parent))}return r})}addFieldIndex(e,n){const r=sa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ds(e);return s.next(a=>{o.put(Hv(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=sa(e),i=ds(e),s=hs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=sa(e),r=hs(e),i=ds(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return x.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Zv(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=hs(e);let i=!0;const s=new Map;return x.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=se();const a=[];return x.forEach(s,(u,c)=>{j("IndexedDbIndexManager",`Using index ${function(v){return`id=${v.indexId}|cg=${v.collectionGroup}|f=${v.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${$i(n)}`);const d=function(v,V){const F=hp(V);if(F===void 0)return null;for(const O of Mc(v,F.fieldPath))switch(O.op){case"array-contains-any":return O.value.arrayValue.values||[];case"array-contains":return[O.value]}return null}(c,u),f=function(v,V){const F=new Map;for(const O of vi(V))for(const w of Mc(v,O.fieldPath))switch(w.op){case"==":case"in":F.set(O.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return F.set(O.fieldPath.canonicalString(),w.value),Array.from(F.values())}return null}(c,u),m=function(v,V){const F=[];let O=!0;for(const w of vi(V)){const g=w.kind===0?Dv(v,w.fieldPath,v.startAt):Vv(v,w.fieldPath,v.startAt);F.push(g.value),O&&(O=g.inclusive)}return new Hr(F,O)}(c,u),y=function(v,V){const F=[];let O=!0;for(const w of vi(V)){const g=w.kind===0?Vv(v,w.fieldPath,v.endAt):Dv(v,w.fieldPath,v.endAt);F.push(g.value),O&&(O=g.inclusive)}return new Hr(F,O)}(c,u),A=this.In(u,c,m),C=this.In(u,c,y),D=this.Tn(u,c,f),E=this.En(u.indexId,d,A,m.inclusive,C,y.inclusive,D);return x.forEach(E,I=>r.G(I,n.limit).next(v=>{v.forEach(V=>{const F=G.fromSegments(V.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return x.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=Sb(ge.create(e.filters,"and")).map(r=>_p(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let f=0;f<u;++f){const m=n?this.dn(n[f/c]):Ru,y=this.An(e,m,r[f%c],i),A=this.Rn(e,m,s[f%c],o),C=a.map(D=>this.An(e,m,D,!0));d.push(...this.createRange(y,A,C))}return d}An(e,n,r,i){const s=new Ti(e,G.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Ti(e,G.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Zv(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return x.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new ye(Pe.comparator),d=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new ia;for(const i of vi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Ei.vt.It(s,o)}return r.zt()}dn(e){const n=new ia;return Ei.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new ia;return Ei.vt.It(zi(this.databaseId,n),r.Yt(function(s){const o=vi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new ia);let s=0;for(const o of vi(e)){const a=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&al(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);Ei.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new ia;u.seed(a.zt()),Ei.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof he&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=sa(e),i=ds(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return x.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(d,f){const m=f?new Xs(f.sequenceNumber,new Yt(Wi(f.readTime),new G(En(f.documentKey)),f.largestBatchId)):Xs.empty(),y=d.fields.map(([A,C])=>new bi(Pe.fromServerFormat(A),C));return new Js(d.indexId,d.collectionGroup,y,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=sa(e),s=ds(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>x.forEach(a,u=>s.put(Hv(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return x.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?x.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),x.forEach(a,u=>this.wn(e,i,u).next(c=>{const d=this.Sn(s,u);return c.isEqual(d)?x.resolve():this.bn(e,s,u,c,d)}))))})}Dn(e,n,r,i){return hs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return hs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=hs(e);let s=new ye(gr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Ti(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new ye(gr);const i=this.Vn(n,e);if(i==null)return r;const s=hp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(al(o))for(const a of o.arrayValue.values||[])r=r.add(new Ti(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Ti(n.indexId,e.key,Ru,i));return r}bn(e,n,r,i,s){j("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,d,f,m){const y=u.getIterator(),A=c.getIterator();let C=cs(y),D=cs(A);for(;C||D;){let E=!1,I=!1;if(C&&D){const v=d(C,D);v<0?I=!0:v>0&&(E=!0)}else C!=null?I=!0:E=!0;E?(f(D),D=cs(A)):I?(m(C),C=cs(y)):(C=cs(y),D=cs(A))}}(i,s,gr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),x.waitFor(o)}yn(e){let n=1;return ds(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>gr(o,a)).filter((o,a,u)=>!a||gr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=gr(o,e),u=gr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Ru,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Ru,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,n){return gr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(nI)}getMinOffset(e,n){return x.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||H())).next(nI)}}function tI(t){return tt(t,"collectionParents")}function hs(t){return tt(t,"indexEntries")}function sa(t){return tt(t,"indexConfiguration")}function ds(t){return tt(t,"indexState")}function nI(t){Y(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Lm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Yt(e.readTime,e.documentKey,n)}/**
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
 */const rI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function q0(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(d,f,m)=>(a++,m.delete()));s.push(u.next(()=>{Y(a===1)}));const c=[];for(const d of n.mutations){const f=zT(e,d.key.path,n.batchId);s.push(i.delete(f)),c.push(d.key)}return x.waitFor(s).next(()=>c)}function zc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(41943040,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);class Ph{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Y(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ph(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return _r(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ys(e),o=_r(e);return o.add({}).next(a=>{Y(typeof a=="number");const u=new qm(a,n,r,i),c=function(y,A,C){const D=C.baseMutations.map(I=>cl(y.ct,I)),E=C.mutations.map(I=>cl(y.ct,I));return{userId:A,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:D,mutations:E}}(this.serializer,this.userId,u),d=[];let f=new ye((m,y)=>ne(m.canonicalString(),y.canonicalString()));for(const m of i){const y=zT(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),d.push(o.put(c)),d.push(s.put(y,fN))}return f.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),x.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return _r(e).get(n).next(r=>r?(Y(r.userId===this.userId),wi(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?x.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return _r(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(Y(a.batchId>=r),s=wi(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return _r(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return _r(e).U("userMutationsIndex",n).next(r=>r.map(i=>wi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Wu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ys(e).J({range:i},(o,a,u)=>{const[c,d,f]=o,m=En(d);if(c===this.userId&&n.path.isEqual(m))return _r(e).get(f).next(y=>{if(!y)throw H();Y(y.userId===this.userId),s.push(wi(this.serializer,y))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(ne);const i=[];return n.forEach(s=>{const o=Wu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=ys(e).J({range:a},(c,d,f)=>{const[m,y,A]=c,C=En(y);m===this.userId&&s.path.isEqual(C)?r=r.add(A):f.done()});i.push(u)}),x.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Wu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ye(ne);return ys(e).J({range:o},(u,c,d)=>{const[f,m,y]=u,A=En(m);f===this.userId&&r.isPrefixOf(A)?A.length===i&&(a=a.add(y)):d.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(_r(e).get(s).next(o=>{if(o===null)throw H();Y(o.userId===this.userId),r.push(wi(this.serializer,o))}))}),x.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return q0(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),x.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return x.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ys(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=En(s[1]);i.push(u)}else a.done()}).next(()=>{Y(i.length===0)})})}containsKey(e,n){return G0(e,this.userId,n)}Nn(e){return K0(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function G0(t,e,n){const r=Wu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ys(t).J({range:s,H:!0},(a,u,c)=>{const[d,f,m]=a;d===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function _r(t){return tt(t,"mutations")}function ys(t){return tt(t,"documentMutations")}function K0(t){return tt(t,"mutationQueues")}/**
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
 */class Hi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hi(0)}static kn(){return new Hi(-1)}}/**
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
 */class Pb{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Hi(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>J.fromTimestamp(new Ve(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>fs(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Y(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return fs(e).J((o,a)=>{const u=_a(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>x.waitFor(s)).next(()=>i)}forEachTarget(e,n){return fs(e).J((r,i)=>{const s=_a(i);n(s)})}qn(e){return iI(e).get("targetGlobalKey").next(n=>(Y(n!==null),n))}Qn(e,n){return iI(e).put("targetGlobalKey",n)}Kn(e,n){return fs(e).put(B0(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=$i(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return fs(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=_a(a);Al(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Sr(e);return n.forEach(o=>{const a=Tt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),x.waitFor(i)}removeMatchingKeys(e,n,r){const i=Sr(e);return x.forEach(n,s=>{const o=Tt(s.path);return x.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Sr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Sr(e);let s=se();return i.J({range:r,H:!0},(o,a,u)=>{const c=En(o[1]),d=new G(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=Tt(n.path),i=IDBKeyRange.bound([r],[OT(r)],!1,!0);let s=0;return Sr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return fs(e).get(n).next(r=>r?_a(r):null)}}function fs(t){return tt(t,"targets")}function iI(t){return tt(t,"targetGlobal")}function Sr(t){return tt(t,"targetDocuments")}/**
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
 */function sI([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class Cb{constructor(e){this.Un=e,this.buffer=new ye(sI),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class W0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){j("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ri(n)?j("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ni(n)}await this.Hn(3e5)})}}class kb{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(Lt.oe);const r=new Cb(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(rI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rI):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ms()<=ue.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function H0(t,e){return new kb(t,e)}/**
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
 */class xb{constructor(e,n){this.db=e,this.garbageCollector=H0(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Pu(e,r)}removeReference(e,n,r){return Pu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Pu(e,n)}nr(e,n){return function(i,s){let o=!1;return K0(i).Y(a=>G0(i,a,s).next(u=>(u&&(o=!0),x.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),Sr(e).delete(function(f){return[0,Tt(f.path)]}(o))))});i.push(u)}}).next(()=>x.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Pu(e,n)}tr(e,n){const r=Sr(e);let i,s=Lt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Lt.oe&&n(new G(En(i)),s),s=c,i=u):s=Lt.oe}).next(()=>{s!==Lt.oe&&n(new G(En(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Pu(t,e){return Sr(t).put(function(r,i){return{targetId:0,path:Tt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class Q0{constructor(){this.changes=new ar(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Nb{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return mi(e).put(r)}removeEntry(e,n,r){return mi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],jc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Re.newInvalidDocument(n);return mi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(oa(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Re.newInvalidDocument(n)};return mi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(oa(n))},(i,s)=>{r={document:this.ir(n,s),size:zc(s)}}).next(()=>r)}getEntries(e,n){let r=Ft();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Ft(),i=new Ee(G.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,zc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return x.resolve();let i=new ye(lI);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(oa(i.first()),oa(i.last())),o=i.getIterator();let a=o.getNext();return mi(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&lI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(oa(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),jc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return mi(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=Ft();for(const f of c){const m=this.ir(G.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Pl(n,m)||i.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=Ft();const o=aI(n,r),a=aI(n,Yt.max());return mi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,d)=>{const f=this.ir(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new bb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return oI(e).get("remoteDocumentGlobalKey").next(n=>(Y(!!n),n))}rr(e,n){return oI(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=_b(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Re.newInvalidDocument(e)}}function Y0(t){return new Nb(t)}class bb extends Q0{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new ar(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ye((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Kv(this.cr.serializer,o);i=i.add(s.path.popLast());const c=zc(u);r+=c-a.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Kv(this.cr.serializer,o.convertToNoDocument(J.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),x.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function oI(t){return tt(t,"remoteDocumentGlobal")}function mi(t){return tt(t,"remoteDocumentsV14")}function oa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function aI(t,e){const n=e.documentKey.path.toArray();return[t,jc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function lI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
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
 */class J0{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Da(r.mutation,i,Mt.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Tn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ma();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ft();const o=ba(),a=function(){return ba()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof lr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Da(d.mutation,c,d.mutation.getFieldMask(),Ve.now())):o.set(c.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new Db(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ba();let i=new Ee((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Mt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(i.get(a.batchId)||se()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=f0();d.forEach(m=>{if(!s.has(m)){const y=I0(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Tn());let a=-1,u=s;return o.next(c=>x.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(d=>({batchId:a,changes:d0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ma();return this.indexManager.getCollectionParents(e,s).next(a=>x.forEach(a,u=>{const c=function(f,m){return new or(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Re.newInvalidDocument(d)))});let a=ma();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Da(d.mutation,c,Mt.empty(),Ve.now()),Pl(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class Vb{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:He(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Qm(i.bundledQuery),readTime:He(i.readTime)}}(n)),x.resolve()}}/**
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
 */class Ob{constructor(){this.overlays=new Ee(G.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Tn(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Tn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Tn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return x.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Km(n,r));let s=this.Ir.get(n);s===void 0&&(s=se(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class Lb{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
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
 */class Xm{constructor(){this.Tr=new ye(nt.Er),this.dr=new ye(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new ce([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new ce([])),r=new nt(n,e),i=new nt(n,e+1);let s=se();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class Mb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ye(nt.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ye(ne);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new nt(new G(s),0);let a=new ye(ne);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),x.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),i=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Fb{constructor(e){this.Mr=e,this.docs=function(){return new Ee(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let r=Ft();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ft();const o=n.path,a=new G(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Lm(MT(d),r)<=0||(i.has(d.key)||Pl(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ub(this)}getSize(e){return x.resolve(this.size)}}class Ub extends Q0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class jb{constructor(e){this.persistence=e,this.Nr=new ar(n=>$i(n),Al),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Xm,this.targetCount=0,this.kr=Hi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
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
 */class Zm{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Lt(0),this.Kr=!1,this.Kr=!0,this.$r=new Lb,this.referenceDelegate=e(this),this.Ur=new jb(this),this.indexManager=new Ab,this.remoteDocumentCache=function(i){return new Fb(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new j0(n),this.Gr=new Vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ob,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Mb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new Bb(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Bb extends UT{constructor(e){super(),this.currentSequenceNumber=e}}class Ch{constructor(e){this.persistence=e,this.Jr=new Xm,this.Yr=null}static Zr(e){return new Ch(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class $c{constructor(e,n){this.persistence=e,this.ti=new ar(r=>Tt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=H0(this,n)}static Zr(e,n){return new $c(e,n)}zr(){}jr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return x.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?x.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),x.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qu(e.data.value)),n}nr(e,n,r){return x.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zb{constructor(e){this.serializer=e}O(e,n,r,i){const s=new vh("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ev,{unique:!0}),u.createObjectStore("documentMutations")}(e),uI(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=x.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),uI(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ev,{unique:!0});const f=c.store("mutations"),m=d.map(y=>f.put(y));return x.waitFor(m)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:AN});c.createIndex("collectionPathOverlayIndex",RN,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",PN,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:pN});c.createIndex("documentKeyIndex",mN),c.createIndex("collectionGroupIndex",gN)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:wN}).createIndex("sequenceNumberIndex",EN,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:TN}).createIndex("documentKeyIndex",SN,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=zc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>x.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>x.forEach(a,u=>{Y(u.userId===s.userId);const c=wi(this.serializer,u);return q0(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new ce(o),c=function(f){return[0,Tt(f)]}(u);s.push(n.get(c).next(d=>d?x.resolve():(f=>n.put({targetId:0,path:Tt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>x.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:IN});const r=n.store("collectionParents"),i=new Jm,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Tt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new ce(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const d=En(a);return s(d.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=_a(i),o=B0(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new G(ce.fromString(f.document.name).popFirst(5)):f.noDocument?G.fromSegments(f.noDocument.path):f.unknownDocument?G.fromSegments(f.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>x.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=Y0(this.serializer),s=new Zm(Ch.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let d=(c=a.get(u.userId))!==null&&c!==void 0?c:se();wi(this.serializer,u).keys().forEach(f=>d=d.add(f)),a.set(u.userId,d)}),x.forEach(a,(u,c)=>{const d=new it(c),f=Rh.lt(this.serializer,d),m=s.getIndexManager(d),y=Ph.lt(d,this.serializer,m,s.referenceDelegate);return new J0(i,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new dp(n,Lt.oe),u).next()})})}}function uI(t){t.createObjectStore("targetDocuments",{keyPath:yN}).createIndex("documentTargetsIndex",vN,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",_N,{unique:!0}),t.createObjectStore("targetGlobal")}const Zd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class eg{constructor(e,n,r,i,s,o,a,u,c,d,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=d,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!eg.D())throw new U(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new xb(this,i),this.Ai=n+"main",this.serializer=new j0(u),this.Ri=new Pn(this.Ai,this.hi,new zb(this.serializer)),this.$r=new vb,this.Ur=new Pb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Y0(this.serializer),this.Gr=new yb,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(L.FAILED_PRECONDITION,Zd);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Lt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Cu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(ri(e))return j("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return j("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return aa(e).get("owner").next(n=>x.resolve(this.vi(n)))}Ci(e){return Cu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=tt(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return x.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?x.resolve(!0):aa(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new U(L.FAILED_PRECONDITION,Zd);return!1}}return!(!this.networkEnabled||!this.inForeground)||Cu(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&j("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new dp(e,Lt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Cu(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Ph.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Rb(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Rh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){j("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?xN:u===16?kN:u===15?Fm:u===14?GT:u===13?qT:u===12?CN:u===11?$T:void H()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new dp(a,this.Qr?this.Qr.next():Lt.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new U(L.FAILED_PRECONDITION,FT);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return aa(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new U(L.FAILED_PRECONDITION,Zd)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return aa(e).put("owner",n)}static D(){return Pn.D()}bi(e){const n=aa(e);return n.get("owner").next(r=>this.vi(r)?(j("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):x.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;vT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return j("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function aa(t){return tt(t,"owner")}function Cu(t){return tt(t,"clientMetadata")}function tg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class ng{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ng(e,n.fromCache,r,i)}}/**
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
 */class X0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return vT()?8:jT(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $b;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ms()<=ue.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(ms()<=ue.DEBUG&&j("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ms()<=ue.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,St(n))):x.resolve())}Yi(e,n){if(Ov(n))return x.resolve(null);let r=St(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fc(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Fc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Ov(n)||i.isEqual(J.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?x.resolve(null):(ms()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.rs(e,o,n,LT(i,-1)).next(a=>a))})}ts(e,n){let r=new ye(c0(e));return n.forEach((i,s)=>{Pl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ms()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yt.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class qb{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(ne),this._s=new ar(s=>$i(s),Al),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Z0(t,e,n,r){return new qb(t,e,n,r)}async function eS(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=se();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function Gb(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,m=f.keys();let y=x.resolve();return m.forEach(A=>{y=y.next(()=>d.getEntry(u,A)).next(C=>{const D=c.docVersions.get(A);Y(D!==null),C.version.compareTo(D)<0&&(f.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),d.addEntry(C)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tS(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Kb(t,e){const n=$(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(f,y),function(C,D,E){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,y,d)&&a.push(n.Ur.updateTargetData(s,y))});let u=Ft(),c=se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(nS(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(J.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function nS(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ft();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function Wb(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function io(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function so(t,e,n){const r=$(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ri(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function qc(t,e,n){const r=$(t);let i=J.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=$(u),m=f._s.get(d);return m!==void 0?x.resolve(f.os.get(m)):f.Ur.getTargetData(c,d)}(r,o,St(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:se())).next(a=>(sS(r,u0(e),a),{documents:a,Ts:s})))}function rS(t,e){const n=$(t),r=$(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function iS(t,e){const n=$(t),r=n.us.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,LT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(sS(n,e,i),i))}function sS(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function Hb(t,e,n,r){const i=$(t);let s=se(),o=Ft();for(const c of n){const d=e.Es(c.metadata.name);c.document&&(s=s.add(d));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(d,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),u=await io(i,function(d){return St(vo(ce.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>nS(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>i.Ur.addMatchingKeys(c,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.Ps,d.Is)).next(()=>d.Ps)))}async function Qb(t,e,n=se()){const r=await io(t,St(Qm(e.bundledQuery))),i=$(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=He(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(je.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function cI(t,e){return`firestore_clients_${t}_${e}`}function hI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ef(t,e){return`firestore_targets_${t}_${e}`}class Gc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new U(i.error.code,i.error.message))),o?new Gc(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Va{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new U(r.error.code,r.error.message))),s?new Va(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Kc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Bm();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=BT(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Kc(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class rg{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new rg(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Rp{constructor(){this.activeTargetIds=Bm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tf{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Ee(ne),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=cI(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Rp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(cI(this.persistenceKey,r));if(i){const s=Kc.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(ef(this.persistenceKey,e));if(i){const s=Va.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ef(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return j("SharedClientState","READ",e,n),n}setItem(e,n){j("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){j("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(j("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=Lt.oe;if(s!=null)try{const a=JSON.parse(s);Y(typeof a=="number"),o=a}catch(a){We("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Lt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new Gc(this.currentUser,e,n,r),s=hI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=hI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=ef(this.persistenceKey,e),s=new Va(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return Kc.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Gc.Rs(new it(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return Va.Rs(i,n)}Ls(e){return rg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);j("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=Bm();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class oS{constructor(){this.so=new Rp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dI{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ku=null;function nf(){return ku===null?ku=function(){return 268435456+Math.round(2147483648*Math.random())}():ku++,"0x"+ku.toString(16)}/**
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
 */const It="WebChannelConnection";class Zb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=nf(),u=this.xo(n,r.toUriEncodedString());j("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(j("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Qt("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=Jb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=nf();return new Promise((o,a)=>{const u=new PT;u.setWithCredentials(!0),u.listenOnce(CT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ku.NO_ERROR:const d=u.getResponseJson();j(It,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ku.TIMEOUT:j(It,`RPC '${e}' ${s} timed out`),a(new U(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ku.HTTP_ERROR:const f=u.getStatus();if(j(It,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const A=function(D){const E=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(y.status);a(new U(A,y.message))}else a(new U(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new U(L.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{j(It,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);j(It,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=nf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NT(),a=xT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");j(It,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);let m=!1,y=!1;const A=new Xb({Io:D=>{y?j(It,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(j(It,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),j(It,`RPC '${e}' stream ${i} sending:`,D),f.send(D))},To:()=>f.close()}),C=(D,E,I)=>{D.listen(E,v=>{try{I(v)}catch(V){setTimeout(()=>{throw V},0)}})};return C(f,pa.EventType.OPEN,()=>{y||(j(It,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),C(f,pa.EventType.CLOSE,()=>{y||(y=!0,j(It,`RPC '${e}' stream ${i} transport closed`),A.So())}),C(f,pa.EventType.ERROR,D=>{y||(y=!0,Qt(It,`RPC '${e}' stream ${i} transport errored:`,D),A.So(new U(L.UNAVAILABLE,"The operation could not be completed")))}),C(f,pa.EventType.MESSAGE,D=>{var E;if(!y){const I=D.data[0];Y(!!I);const v=I,V=v.error||((E=v[0])===null||E===void 0?void 0:E.error);if(V){j(It,`RPC '${e}' stream ${i} received error:`,V);const F=V.status;let O=function(T){const S=Qe[T];if(S!==void 0)return S0(S)}(F),w=V.message;O===void 0&&(O=L.INTERNAL,w="Unknown error status: "+F+" with message "+V.message),y=!0,A.So(new U(O,w)),f.close()}else j(It,`RPC '${e}' stream ${i} received:`,I),A.bo(I)}}),C(a,kT.STAT_EVENT,D=>{D.stat===cp.PROXY?j(It,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===cp.NOPROXY&&j(It,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}/**
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
 */function aS(){return typeof window<"u"?window:null}function Zu(){return typeof document<"u"?document:null}/**
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
 */function Nl(t){return new ab(t,!0)}/**
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
 */class ig{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class lS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ig(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new U(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e1 extends lS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=cb(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?He(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=wp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Lc(u)?{documents:V0(s,u)}:{query:Ah(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=C0(s,o.resumeToken);const c=vp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ro(s,o.snapshotVersion.toTimestamp());const c=vp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=db(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=wp(this.serializer),n.removeTarget=e,this.a_(n)}}class t1 extends lS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Y(!!e.streamToken),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=hb(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=wp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cl(this.serializer,r))};this.a_(n)}}/**
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
 */class n1 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ip(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Ip(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class r1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(We(n),this.D_=!1):j("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class i1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{si(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=$(u);c.L_.add(4),await Eo(c),c.q_.set("Unknown"),c.L_.delete(4),await bl(c)}(this))})}),this.q_=new r1(r,i)}}async function bl(t){if(si(t))for(const e of t.B_)await e(!0)}async function Eo(t){for(const e of t.B_)await e(!1)}function kh(t,e){const n=$(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ag(n)?og(n):So(n).r_()&&sg(n,e))}function oo(t,e){const n=$(t),r=So(n);n.N_.delete(e),r.r_()&&uS(n,e),n.N_.size===0&&(r.r_()?r.o_():si(n)&&n.q_.set("Unknown"))}function sg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(t).A_(e)}function uS(t,e){t.Q_.xe(e),So(t).R_(e)}function og(t){t.Q_=new rb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),So(t).start(),t.q_.v_()}function ag(t){return si(t)&&!So(t).n_()&&t.N_.size>0}function si(t){return $(t).L_.size===0}function cS(t){t.Q_=void 0}async function s1(t){t.q_.set("Online")}async function o1(t){t.N_.forEach((e,n)=>{sg(t,e)})}async function a1(t,e){cS(t),ag(t)?(t.q_.M_(e),og(t)):t.q_.set("Unknown")}async function l1(t,e,n){if(t.q_.set("Online"),e instanceof P0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wc(t,r)}else if(e instanceof Xu?t.Q_.Ke(e):e instanceof R0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await tS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(je.EMPTY_BYTE_STRING,d.snapshotVersion)),uS(s,u);const f=new $n(d.target,u,c,d.sequenceNumber);sg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Wc(t,r)}}async function Wc(t,e,n){if(!ri(e))throw e;t.L_.add(1),await Eo(t),t.q_.set("Offline"),n||(n=()=>tS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bl(t)})}function hS(t,e){return e().catch(n=>Wc(t,n,e))}async function To(t){const e=$(t),n=Qr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;u1(e);)try{const i=await Wb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,c1(e,i)}catch(i){await Wc(e,i)}dS(e)&&fS(e)}function u1(t){return si(t)&&t.O_.length<10}function c1(t,e){t.O_.push(e);const n=Qr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function dS(t){return si(t)&&!Qr(t).n_()&&t.O_.length>0}function fS(t){Qr(t).start()}async function h1(t){Qr(t).p_()}async function d1(t){const e=Qr(t);for(const n of t.O_)e.m_(n.mutations)}async function f1(t,e,n){const r=t.O_.shift(),i=Gm.from(r,e,n);await hS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await To(t)}async function p1(t,e){e&&Qr(t).V_&&await async function(r,i){if(function(o){return T0(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();Qr(r).s_(),await hS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await To(r)}}(t,e),dS(t)&&fS(t)}async function fI(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=si(n);n.L_.add(3),await Eo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bl(n)}async function Pp(t,e){const n=$(t);e?(n.L_.delete(2),await bl(n)):e||(n.L_.add(2),await Eo(n),n.q_.set("Unknown"))}function So(t){return t.K_||(t.K_=function(n,r,i){const s=$(n);return s.w_(),new e1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:s1.bind(null,t),Ro:o1.bind(null,t),mo:a1.bind(null,t),d_:l1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ag(t)?og(t):t.q_.set("Unknown")):(await t.K_.stop(),cS(t))})),t.K_}function Qr(t){return t.U_||(t.U_=function(n,r,i){const s=$(n);return s.w_(),new t1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:h1.bind(null,t),mo:p1.bind(null,t),f_:d1.bind(null,t),g_:f1.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await To(t)):(await t.U_.stop(),t.O_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class lg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new lg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ao(t,e){if(We("AsyncQueue",`${e}: ${t}`),ri(t))return new U(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ma(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class pI{constructor(){this.W_=new Ee(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ao{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ao(e,n,Fs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class m1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class g1{constructor(){this.queries=mI(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=$(n),s=i.queries;i.queries=mI(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new U(L.ABORTED,"Firestore shutting down"))}}function mI(){return new ar(t=>l0(t),Rl)}async function ug(t,e){const n=$(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new m1,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ao(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&hg(n)}async function cg(t,e){const n=$(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _1(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&hg(n)}function y1(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function hg(t){t.Y_.forEach(e=>{e.next()})}var Cp,gI;(gI=Cp||(Cp={})).ea="default",gI.Cache="cache";class dg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Cp.Cache}}/**
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
 */class _I{constructor(e){this.serializer=e}Es(e){return Cn(this.serializer,e)}ds(e){return e.metadata.exists?D0(this.serializer,e.document,!1):Re.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return He(e)}}class I1{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=pS(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=ce.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new _I(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||se()).add(s);n.set(o,a)}}return n}async complete(){const e=await Hb(this.localStore,new _I(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await Qb(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function pS(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class mS{constructor(e){this.key=e}}class gS{constructor(e){this.key=e}}class _S{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=c0(e),this.Ra=new Fs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new pI,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),y=Pl(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?A!==C&&(r.track({type:3,doc:y}),D=!0):this.ga(m,y)||(r.track({type:2,doc:y}),D=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(a=!0)),D&&(y?(o=o.add(y),s=C?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(y,A){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return C(y)-C(A)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ao(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pI,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new gS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new mS(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ao.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class w1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class E1{constructor(e){this.key=e,this.va=!1}}class T1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ar(a=>l0(a),Rl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(G.comparator),this.Na=new Map,this.La=new Xm,this.Ba={},this.ka=new Map,this.qa=Hi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function S1(t,e,n=!0){const r=xh(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await yS(r,e,n,!0),i}async function A1(t,e){const n=xh(t);await yS(n,e,!0,!1)}async function yS(t,e,n,r){const i=await io(t.localStore,St(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await fg(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&kh(t.remoteStore,i),a}async function fg(t,e,n,r,i){t.Ka=(f,m,y)=>async function(C,D,E,I){let v=D.view.ma(E);v.ns&&(v=await qc(C.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,v)));const V=I&&I.targetChanges.get(D.targetId),F=I&&I.targetMismatches.get(D.targetId)!=null,O=D.view.applyChanges(v,C.isPrimaryClient,V,F);return kp(C,D.targetId,O.wa),O.snapshot}(t,f,m,y);const s=await qc(t.localStore,e,!0),o=new _S(e,s.Ts),a=o.ma(s.documents),u=xl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);kp(t,n,c.wa);const d=new w1(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function R1(t,e,n){const r=$(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Rl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await so(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&oo(r.remoteStore,i.targetId),lo(r,i.targetId)}).catch(ni)):(lo(r,i.targetId),await so(r.localStore,i.targetId,!0))}async function P1(t,e){const n=$(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),oo(n.remoteStore,r.targetId))}async function C1(t,e,n){const r=_g(t);try{const i=await function(o,a){const u=$(o),c=Ve.now(),d=a.reduce((y,A)=>y.add(A.key),se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let A=Ft(),C=se();return u.cs.getEntries(y,d).next(D=>{A=D,A.forEach((E,I)=>{I.isValidDocument()||(C=C.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,A)).next(D=>{f=D;const E=[];for(const I of a){const v=eb(I,f.get(I.key).overlayedDocument);v!=null&&E.push(new lr(I.key,v,JT(v.value.mapValue),De.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,E,a)}).next(D=>{m=D;const E=D.applyToLocalDocumentSet(f,C);return u.documentOverlayCache.saveOverlays(y,D.batchId,E)})}).then(()=>({batchId:m.batchId,changes:d0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ee(ne)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await ur(r,i.changes),await To(r.remoteStore)}catch(i){const s=Ao(i,"Failed to persist write");n.reject(s)}}async function vS(t,e){const n=$(t);try{const r=await Kb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Y(o.va):i.removedDocuments.size>0&&(Y(o.va),o.va=!1))}),await ur(n,r,e)}catch(r){await ni(r)}}function yI(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=$(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&hg(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function k1(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(G.comparator);o=o.insert(s,Re.newNoDocument(s,J.min()));const a=se().add(s),u=new kl(J.min(),new Map,new Ee(ne),o,a);await vS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),gg(r)}else await so(r.localStore,e,!1).then(()=>lo(r,e,n)).catch(ni)}async function x1(t,e){const n=$(t),r=e.batch.batchId;try{const i=await Gb(n.localStore,e);mg(n,r,null),pg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ur(n,i)}catch(i){await ni(i)}}async function N1(t,e,n){const r=$(t);try{const i=await function(o,a){const u=$(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Y(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);mg(r,e,n),pg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ur(r,i)}catch(i){await ni(i)}}async function b1(t,e){const n=$(t);si(n.remoteStore)||j("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=$(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=Ao(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function pg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function mg(t,e,n){const r=$(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function lo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||IS(t,r)})}function IS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(oo(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),gg(t))}function kp(t,e,n){for(const r of n)r instanceof mS?(t.La.addReference(r.key,e),D1(t,r)):r instanceof gS?(j("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||IS(t,r.key)):H()}function D1(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(j("SyncEngine","New document in limbo: "+n),t.xa.add(r),gg(t))}function gg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(ce.fromString(e)),r=t.qa.next();t.Na.set(r,new E1(n)),t.Oa=t.Oa.insert(n,r),kh(t.remoteStore,new $n(St(vo(n.path)),r,"TargetPurposeLimboResolution",Lt.oe))}}async function ur(t,e,n){const r=$(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=ng.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=$(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>x.forEach(c,m=>x.forEach(m.$i,y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>x.forEach(m.Ui,y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!ri(f))throw f;j("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=d.os.get(m),A=y.snapshotVersion,C=y.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(m,C)}}}(r.localStore,s))}async function V1(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await eS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new U(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ur(n,r.hs)}}function O1(t,e){const n=$(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let i=se();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function L1(t,e){const n=$(t),r=await qc(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&kp(n,e.targetId,i.wa),i}async function M1(t,e){const n=$(t);return iS(n.localStore,e).then(r=>ur(n,r))}async function F1(t,e,n,r){const i=$(t),s=await function(a,u){const c=$(a),d=$(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.Mn(f,u).next(m=>m?c.localDocuments.getDocuments(f,m):x.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await To(i.remoteStore):n==="acknowledged"||n==="rejected"?(mg(i,e,r||null),pg(i,e),function(a,u){$($(a).mutationQueue).On(u)}(i.localStore,e)):H(),await ur(i,s)):j("SyncEngine","Cannot apply mutation batch with id: "+e)}async function U1(t,e){const n=$(t);if(xh(n),_g(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await vI(n,r.toArray());n.Qa=!0,await Pp(n.remoteStore,!0);for(const s of i)kh(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(lo(n,o),so(n.localStore,o,!0))),oo(n.remoteStore,o)}),await i,await vI(n,r),function(o){const a=$(o);a.Na.forEach((u,c)=>{oo(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Ee(G.comparator)}(n),n.Qa=!1,await Pp(n.remoteStore,!1)}}async function vI(t,e,n){const r=$(t),i=[],s=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await io(r.localStore,St(u[0]));for(const c of u){const d=r.Fa.get(c),f=await L1(r,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await rS(r.localStore,o);a=await io(r.localStore,c),await fg(r,wS(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function wS(t){return s0(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function j1(t){return function(n){return $($(n).persistence).Qi()}($(t).localStore)}async function B1(t,e,n,r){const i=$(t);if(i.Qa)return void j("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await iS(i.localStore,u0(s[0])),a=kl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",je.EMPTY_BYTE_STRING);await ur(i,o,a);break}case"rejected":await so(i.localStore,e,!0),lo(i,e,r);break;default:H()}}async function z1(t,e,n){const r=xh(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){j("SyncEngine","Adding an already active target "+i);continue}const s=await rS(r.localStore,i),o=await io(r.localStore,s);await fg(r,wS(s),o.targetId,!1,o.resumeToken),kh(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await so(r.localStore,i,!1).then(()=>{oo(r.remoteStore,i),lo(r,i)}).catch(ni)}}function xh(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k1.bind(null,e),e.Ca.d_=_1.bind(null,e.eventManager),e.Ca.$a=y1.bind(null,e.eventManager),e}function _g(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N1.bind(null,e),e}function $1(t,e,n){const r=$(t);(async function(s,o,a){try{const u=await o.getMetadata();if(await function(y,A){const C=$(y),D=He(A.createTime);return C.persistence.runTransaction("hasNewerBundle","readonly",E=>C.Gr.getBundleMetadata(E,A.id)).then(E=>!!E&&E.createTime.compareTo(D)>=0)}(s.localStore,u))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(pS(u));const c=new I1(u,s.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await c.la(d);m&&a._updateProgress(m),d=await o.Ua()}const f=await c.complete();return await ur(s,f.Ia,void 0),await function(y,A){const C=$(y);return C.persistence.runTransaction("Save bundle","readwrite",D=>C.Gr.saveBundleMetadata(D,A))}(s.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return Qt("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Z0(this.persistence,new X0,e.initialUser,this.serializer)}Ga(e){return new Zm(Ch.Zr,this.serializer)}Wa(e){return new oS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yr.provider={build:()=>new Yr};class q1 extends Yr{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Y(this.persistence.referenceDelegate instanceof $c);const r=this.persistence.referenceDelegate.garbageCollector;return new W0(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Zm(r=>$c.Zr(r,n),this.serializer)}}class yg extends Yr{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await _g(this.Ja.syncEngine),await To(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Z0(this.persistence,new X0,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new W0(r,e.asyncQueue,n)}Ha(e,n){const r=new hN(n,this.persistence);return new cN(e.asyncQueue,r)}Ga(e){const n=tg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new eg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,aS(),Zu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new oS}}class ES extends yg{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof tf&&(this.sharedClientState.syncEngine={no:F1.bind(null,n),ro:B1.bind(null,n),io:z1.bind(null,n),Qi:j1.bind(null,n),eo:M1.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await U1(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=aS();if(!tf.D(n))throw new U(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=tg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new tf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Jr{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V1.bind(null,this.syncEngine),await Pp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new g1}()}createDatastore(e){const n=Nl(e.databaseInfo.databaseId),r=function(s){return new Zb(s)}(e.databaseInfo);return function(s,o,a,u){return new n1(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new i1(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yI(this.syncEngine,n,0),function(){return dI.D()?new dI:new Yb}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,d){const f=new T1(i,s,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=$(i);j("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Eo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jr.provider={build:()=>new Jr};function II(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Nh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class G1{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new ot,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
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
 */class K1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=$(i),a={documents:s.map(f=>ul(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ce.emptyPath(),a,s.length),c=new Map;u.forEach(f=>{const m=ub(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());Y(!!m),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new wo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=G.fromPath(r);this.mutations.push(new $m(i,this.precondition(i)))}),await async function(r,i){const s=$(r),o={writes:i.map(a=>cl(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,ce.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw H();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new U(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?De.exists(!1):De.updateTime(n):De.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new U(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return De.updateTime(n)}return De.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class W1{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new ig(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new K1(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Sl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!T0(n)}return!1}}/**
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
 */class H1{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=Om.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ao(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rf(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vg(t);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>fI(e.remoteStore,i)),t._onlineComponents=e}async function vg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await rf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Qt("Error using user provided cache. Falling back to memory cache: "+n),await rf(t,new Yr)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await rf(t,new Yr);return t._offlineComponents}async function bh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await wI(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await wI(t,new Jr))),t._onlineComponents}function TS(t){return vg(t).then(e=>e.persistence)}function Ro(t){return vg(t).then(e=>e.localStore)}function SS(t){return bh(t).then(e=>e.remoteStore)}function Ig(t){return bh(t).then(e=>e.syncEngine)}function AS(t){return bh(t).then(e=>e.datastore)}async function uo(t){const e=await bh(t),n=e.eventManager;return n.onListen=S1.bind(null,e.syncEngine),n.onUnlisten=R1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=A1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=P1.bind(null,e.syncEngine),n}function Q1(t){return t.asyncQueue.enqueue(async()=>{const e=await TS(t),n=await SS(t);return e.setNetworkEnabled(!0),function(i){const s=$(i);return s.L_.delete(0),bl(s)}(n)})}function Y1(t){return t.asyncQueue.enqueue(async()=>{const e=await TS(t),n=await SS(t);return e.setNetworkEnabled(!1),async function(i){const s=$(i);s.L_.add(0),await Eo(s),s.q_.set("Offline")}(n)})}function J1(t,e){const n=new ot;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const f=$(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new U(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Ao(a,`Failed to get document '${s} from cache`);o.reject(u)}}(await Ro(t),e,n)),n.promise}function RS(t,e,n={}){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Nh({next:m=>{d.Za(),o.enqueueAndForget(()=>cg(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new U(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new U(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new dg(vo(a.path),d,{includeMetadataChanges:!0,_a:!0});return ug(s,f)}(await uo(t),t.asyncQueue,e,n,r)),r.promise}function X1(t,e){const n=new ot;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await qc(i,s,!0),u=new _S(s,a.Ts),c=u.ma(a.documents),d=u.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const u=Ao(a,`Failed to execute query '${s} against cache`);o.reject(u)}}(await Ro(t),e,n)),n.promise}function PS(t,e,n={}){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const d=new Nh({next:m=>{d.Za(),o.enqueueAndForget(()=>cg(s,f)),m.fromCache&&u.source==="server"?c.reject(new U(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new dg(a,d,{includeMetadataChanges:!0,_a:!0});return ug(s,f)}(await uo(t),t.asyncQueue,e,n,r)),r.promise}function Z1(t,e,n){const r=new ot;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await AS(t);r.resolve(async function(o,a,u){var c;const d=$(o),{request:f,ut:m,parent:y}=O0(d.serializer,o0(a),u);d.connection.Fo||delete f.parent;const A=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,y,f,1)).filter(D=>!!D.result);Y(A.length===1);const C=(c=A[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(C).reduce((D,E)=>(D[m[E]]=C[E],D),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}function eD(t,e){const n=new Nh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).Y_.add(s),s.next()}(await uo(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){$(i).Y_.delete(s)}(await uo(t),n))}}function tD(t,e,n,r){const i=function(o,a){let u;return u=typeof o=="string"?A0().encode(o):o,function(d,f){return new G1(d,f)}(function(d,f){if(d instanceof Uint8Array)return II(d,f);if(d instanceof ArrayBuffer)return II(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,Nl(e));t.asyncQueue.enqueueAndForget(async()=>{$1(await Ig(t),i,r)})}function nD(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=$(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Ro(t),e))}function rD(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=$(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(c=>function(f,m,y,A,C){f=[...f],m=[...m],f.sort(y),m.sort(y);const D=f.length,E=m.length;let I=0,v=0;for(;I<E&&v<D;){const V=y(f[v],m[I]);V<0?C(f[v++]):V>0?A(m[I++]):(I++,v++)}for(;I<E;)A(m[I++]);for(;v<D;)C(f[v++])}(c,i,oN,d=>{a.push(o.addFieldIndex(u,d))},d=>{a.push(o.deleteFieldIndex(u,d))})).next(()=>x.waitFor(a)))}(await Ro(t),e))}function iD(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){$(r).ss.zi=i}(await Ro(t),e))}function sD(t){return t.asyncQueue.enqueue(async()=>function(n){const r=$(n),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await Ro(t)))}/**
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
 */function CS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const EI=new Map;/**
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
 */function wg(t,e,n){if(!n)throw new U(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kS(t,e,n,r){if(e===!0&&r===!0)throw new U(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function TI(t){if(!G.isDocumentKey(t))throw new U(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function SI(t){if(G.isDocumentKey(t))throw new U(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dh(t);throw new U(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function xS(t,e){if(e<=0)throw new U(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class AI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new AI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new AI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DT;switch(r.type){case"firstParty":return new tN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=EI.get(n);r&&(j("ComponentProvider","Removing Datastore"),EI.delete(n),r.terminate())}(this),Promise.resolve()}}function NS(t,e,n,r={}){var i;const s=(t=ae(t,Dl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=it.MOCK_USER;else{a=Ck(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(c)}t._authCredentials=new Xx(new bT(a,u))}}/**
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
 */class lt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lt(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class gn extends lt{constructor(e,n,r){super(e,n,vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new G(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function ec(t,e,...n){if(t=X(t),wg("collection","path",e),t instanceof Dl){const r=ce.fromString(e,...n);return SI(r),new gn(t,null,r)}{if(!(t instanceof qe||t instanceof gn))throw new U(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return SI(r),new gn(t.firestore,null,r)}}function oD(t,e){if(t=ae(t,Dl),wg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new U(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lt(t,null,function(r){return new or(ce.emptyPath(),r)}(e))}function In(t,e,...n){if(t=X(t),arguments.length===1&&(e=Om.newId()),wg("doc","path",e),t instanceof Dl){const r=ce.fromString(e,...n);return TI(r),new qe(t,null,new G(r))}{if(!(t instanceof qe||t instanceof gn))throw new U(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return TI(r),new qe(t.firestore,t instanceof gn?t.converter:null,new G(r))}}function aD(t,e){return t=X(t),e=X(e),(t instanceof qe||t instanceof gn)&&(e instanceof qe||e instanceof gn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Eg(t,e){return t=X(t),e=X(e),t instanceof lt&&e instanceof lt&&t.firestore===e.firestore&&Rl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class RI{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ig(this,"async_queue_retry"),this.Vu=()=>{const r=Zu();r&&j("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Zu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Zu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ot;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ri(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=lg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function xp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class bS{constructor(){this._progressObserver={},this._taskCompletionResolver=new ot,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const lD=-1;class ve extends Dl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new RI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new RI(e),this._firestoreClient=void 0,await e}}}function uD(t,e,n){n||(n="(default)");const r=_o(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if($r(s,e))return i;throw new U(L.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(L.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function DS(t,e){const n=typeof t=="object"?t:Dm(),r=typeof t=="string"?t:e||"(default)",i=_o(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Rk("firestore");s&&NS(i,...s)}return i}function Oe(t){if(t._terminated)throw new U(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||VS(t),t._firestoreClient}function VS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,d){return new DN(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,CS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new H1(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}function cD(t,e){Qt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return OS(t,Jr.provider,{build:r=>new yg(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function hD(t){Qt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();OS(t,Jr.provider,{build:n=>new ES(n,e.cacheSizeBytes)})}function OS(t,e,n){if((t=ae(t,ve))._firestoreClient||t._terminated)throw new U(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new U(L.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},VS(t)}function dD(t){if(t._initialized&&!t._terminated)throw new U(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ot;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Pn.D())return Promise.resolve();const i=r+"main";await Pn.delete(i)}(tg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function fD(t){return function(n){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>b1(await Ig(n),r)),r.promise}(Oe(t=ae(t,ve)))}function pD(t){return Q1(Oe(t=ae(t,ve)))}function mD(t){return Y1(Oe(t=ae(t,ve)))}function gD(t){return TT(t.app,"firestore",t._databaseId.database),t._delete()}function _D(t,e){const n=Oe(t=ae(t,ve)),r=new bS;return tD(n,t._databaseId,e,r),r}function yD(t,e){return nD(Oe(t=ae(t,ve)),e).then(n=>n?new lt(t,null,n.query):null)}/**
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
 */class co{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class LS{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Xr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xr(je.fromBase64String(e))}catch(n){throw new U(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xr(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function vD(){return new oi("__name__")}/**
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
 */class ai{constructor(e){this._methodName=e}}/**
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
 */class Vh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class Vl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const ID=/^__.*__$/;class wD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Io(e,this.data,n,this.fieldTransforms)}}class MS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function FS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Oh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Hc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(FS(this.Cu)&&ID.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ED{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nl(e)}Qu(e,n,r,i=!1){return new Oh({Cu:e,methodName:n,qu:r,path:Pe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function es(t){const e=t._freezeSettings(),n=Nl(t._databaseId);return new ED(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lh(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);kg("Data must be an object, but it was:",o,r);const a=BS(r,o);let u,c;if(s.merge)u=new Mt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=hl(e,f,n);if(!o.contains(m))throw new U(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);$S(d,m)||d.push(m)}u=new Mt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new wD(new dt(a),u,c)}class Ol extends ai{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ol}}function US(t,e,n){return new Oh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Tg extends ai{_toFieldTransform(e){return new Cl(e.path,new to)}isEqual(e){return e instanceof Tg}}class Sg extends ai{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=US(this,e,!0),r=this.Ku.map(s=>ts(s,n)),i=new qi(r);return new Cl(e.path,i)}isEqual(e){return e instanceof Sg&&$r(this.Ku,e.Ku)}}class Ag extends ai{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=US(this,e,!0),r=this.Ku.map(s=>ts(s,n)),i=new Gi(r);return new Cl(e.path,i)}isEqual(e){return e instanceof Ag&&$r(this.Ku,e.Ku)}}class Rg extends ai{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new no(e.serializer,m0(e.serializer,this.$u));return new Cl(e.path,n)}isEqual(e){return e instanceof Rg&&this.$u===e.$u}}function Pg(t,e,n,r){const i=t.Qu(1,e,n);kg("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();ii(r,(u,c)=>{const d=Mh(e,u,n);c=X(c);const f=i.Nu(d);if(c instanceof Ol)s.push(d);else{const m=ts(c,f);m!=null&&(s.push(d),o.set(d,m))}});const a=new Mt(s);return new MS(o,a,i.fieldTransforms)}function Cg(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[hl(e,r,n)],u=[i];if(s.length%2!=0)throw new U(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(hl(e,s[m])),u.push(s[m+1]);const c=[],d=dt.empty();for(let m=a.length-1;m>=0;--m)if(!$S(c,a[m])){const y=a[m];let A=u[m];A=X(A);const C=o.Nu(y);if(A instanceof Ol)c.push(y);else{const D=ts(A,C);D!=null&&(c.push(y),d.set(y,D))}}const f=new Mt(c);return new MS(d,f,o.fieldTransforms)}function jS(t,e,n,r=!1){return ts(n,t.Qu(r?4:3,e))}function ts(t,e){if(zS(t=X(t)))return kg("Unsupported field value:",e,t),BS(t,e);if(t instanceof ai)return function(r,i){if(!FS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ts(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=X(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return m0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:ro(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ro(i.serializer,s)}}if(r instanceof Vh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xr)return{bytesValue:C0(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Vl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return zm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Dh(r)}`)}(t,e)}function BS(t,e){const n={};return WT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=ts(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Vh||t instanceof Xr||t instanceof qe||t instanceof ai||t instanceof Vl)}function kg(t,e,n){if(!zS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Dh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function hl(t,e,n){if((e=X(e))instanceof oi)return e._internalPath;if(typeof e=="string")return Mh(t,e);throw Hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const TD=new RegExp("[~\\*/\\[\\]]");function Mh(t,e,n){if(e.search(TD)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oi(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new U(L.INVALID_ARGUMENT,a+t+u)}function $S(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class dl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SD extends dl{data(){return super.data()}}function Fh(t,e){return typeof e=="string"?Mh(t,e):e instanceof oi?e._internalPath:e._delegate._internalPath}/**
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
 */function qS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xg{}class Po extends xg{}function AD(t,e,...n){let r=[];e instanceof xg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof ns).length,a=s.filter(u=>u instanceof Co).length;if(o>1||o>0&&a>0)throw new U(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Co extends Po{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Co(e,n,r)}_apply(e){const n=this._parse(e);return KS(e._query,n),new lt(e.firestore,e.converter,yp(e._query,n))}_parse(e){const n=es(e.firestore);return function(s,o,a,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new U(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){CI(f,d);const y=[];for(const A of f)y.push(PI(u,s,A));m={arrayValue:{values:y}}}else m=PI(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||CI(f,d),m=jS(a,o,f,d==="in"||d==="not-in");return he.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function RD(t,e,n){const r=e,i=Fh("where",t);return Co._create(i,r,n)}class ns extends xg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ns(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ge.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)KS(o,u),o=yp(o,u)}(e._query,n),new lt(e.firestore,e.converter,yp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function PD(...t){return t.forEach(e=>WS("or",e)),ns._create("or",t)}function CD(...t){return t.forEach(e=>WS("and",e)),ns._create("and",t)}class Uh extends Po{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Uh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new U(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(s,o)}(e._query,this._field,this._direction);return new lt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new or(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function kD(t,e="asc"){const n=e,r=Fh("orderBy",t);return Uh._create(r,n)}class Ll extends Po{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ll(e,n,r)}_apply(e){return new lt(e.firestore,e.converter,Fc(e._query,this._limit,this._limitType))}}function xD(t){return xS("limit",t),Ll._create("limit",t,"F")}function ND(t){return xS("limitToLast",t),Ll._create("limitToLast",t,"L")}class Ml extends Po{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ml(e,n,r)}_apply(e){const n=GS(e,this.type,this._docOrFields,this._inclusive);return new lt(e.firestore,e.converter,function(i,s){return new or(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function bD(...t){return Ml._create("startAt",t,!0)}function DD(...t){return Ml._create("startAfter",t,!1)}class Fl extends Po{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Fl(e,n,r)}_apply(e){const n=GS(e,this.type,this._docOrFields,this._inclusive);return new lt(e.firestore,e.converter,function(i,s){return new or(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function VD(...t){return Fl._create("endBefore",t,!1)}function OD(...t){return Fl._create("endAt",t,!0)}function GS(t,e,n,r){if(n[0]=X(n[0]),n[0]instanceof dl)return function(s,o,a,u,c){if(!u)throw new U(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const f of Ms(s))if(f.field.isKeyField())d.push(zi(o,u.key));else{const m=u.data.field(f.field);if(Ih(m))throw new U(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new U(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new Hr(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=es(t.firestore);return function(o,a,u,c,d,f){const m=o.explicitOrderBy;if(d.length>m.length)throw new U(L.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let A=0;A<d.length;A++){const C=d[A];if(m[A].field.isKeyField()){if(typeof C!="string")throw new U(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof C}`);if(!jm(o)&&C.indexOf("/")!==-1)throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${C}' contains a slash.`);const D=o.path.child(ce.fromString(C));if(!G.isDocumentKey(D))throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const E=new G(D);y.push(zi(a,E))}else{const D=jS(u,c,C);y.push(D)}}return new Hr(y,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function PI(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new U(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jm(e)&&n.indexOf("/")!==-1)throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!G.isDocumentKey(r))throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zi(t,new G(r))}if(n instanceof qe)return zi(t,n._key);throw new U(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dh(n)}.`)}function CI(t,e){if(!Array.isArray(t)||t.length===0)throw new U(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KS(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function WS(t,e){if(!(e instanceof Co||e instanceof ns))throw new U(L.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Ng{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new Vl(s)}convertGeoPoint(e){return new Vh(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const n=tr(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);Y(U0(r));const i=new Gr(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function jh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class LD extends Ng{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}/**
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
 */function MD(t){return new co("sum",hl("sum",t))}function FD(t){return new co("avg",hl("average",t))}function HS(){return new co("count")}function UD(t,e){var n,r;return t instanceof co&&e instanceof co&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function jD(t,e){return Eg(t.query,e.query)&&$r(t.data(),e.data())}/**
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
 */class kr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qi extends dl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oa extends Qi{data(e={}){return super.data(e)}}class Yi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new kr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oa(this._firestore,this._userDataWriter,r.key,r,new kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new kr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Oa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new kr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:BD(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}function zD(t,e){return t instanceof Qi&&e instanceof Qi?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Yi&&e instanceof Yi&&t._firestore===e._firestore&&Eg(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function QS(t){t=ae(t,qe);const e=ae(t.firestore,ve);return RS(Oe(e),t._key).then(n=>bg(e,t,n))}class li extends Ng{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function $D(t){t=ae(t,qe);const e=ae(t.firestore,ve),n=Oe(e),r=new li(e);return J1(n,t._key).then(i=>new Qi(e,r,t._key,i,new kr(i!==null&&i.hasLocalMutations,!0),t.converter))}function qD(t){t=ae(t,qe);const e=ae(t.firestore,ve);return RS(Oe(e),t._key,{source:"server"}).then(n=>bg(e,t,n))}function tc(t){t=ae(t,lt);const e=ae(t.firestore,ve),n=Oe(e),r=new li(e);return qS(t._query),PS(n,t._query).then(i=>new Yi(e,r,t,i))}function GD(t){t=ae(t,lt);const e=ae(t.firestore,ve),n=Oe(e),r=new li(e);return X1(n,t._query).then(i=>new Yi(e,r,t,i))}function KD(t){t=ae(t,lt);const e=ae(t.firestore,ve),n=Oe(e),r=new li(e);return PS(n,t._query,{source:"server"}).then(i=>new Yi(e,r,t,i))}function ya(t,e,n){t=ae(t,qe);const r=ae(t.firestore,ve),i=jh(t.converter,e,n);return ko(r,[Lh(es(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,De.none())])}function va(t,e,n,...r){t=ae(t,qe);const i=ae(t.firestore,ve),s=es(i);let o;return o=typeof(e=X(e))=="string"||e instanceof oi?Cg(s,"updateDoc",t._key,e,n,r):Pg(s,"updateDoc",t._key,e),ko(i,[o.toMutation(t._key,De.exists(!0))])}function nc(t){return ko(ae(t.firestore,ve),[new wo(t._key,De.none())])}function WD(t,e){const n=ae(t.firestore,ve),r=In(t),i=jh(t.converter,e);return ko(n,[Lh(es(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function rc(t,...e){var n,r,i;t=X(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(xp(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,d;if(t instanceof qe)c=ae(t.firestore,ve),d=vo(t._key.path),u={next:f=>{e[o]&&e[o](bg(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ae(t,lt);c=ae(f.firestore,ve),d=f._query;const m=new li(c);u={next:y=>{e[o]&&e[o](new Yi(c,m,f,y))},error:e[o+1],complete:e[o+2]},qS(t._query)}return function(m,y,A,C){const D=new Nh(C),E=new dg(y,D,A);return m.asyncQueue.enqueueAndForget(async()=>ug(await uo(m),E)),()=>{D.Za(),m.asyncQueue.enqueueAndForget(async()=>cg(await uo(m),E))}}(Oe(c),d,a,u)}function HD(t,e){return eD(Oe(t=ae(t,ve)),xp(e)?e:{next:e})}function ko(t,e){return function(r,i){const s=new ot;return r.asyncQueue.enqueueAndForget(async()=>C1(await Ig(r),i,s)),s.promise}(Oe(t),e)}function bg(t,e,n){const r=n.docs.get(e._key),i=new li(t);return new Qi(t,i,e._key,r,new kr(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function QD(t){return YS(t,{count:HS()})}function YS(t,e){const n=ae(t.firestore,ve),r=Oe(n),i=KT(e,(s,o)=>new E0(o,s.aggregateType,s._internalFieldPath));return Z1(r,t._query,i).then(s=>function(a,u,c){const d=new li(a);return new LS(u,d,c)}(n,t,s))}class YD{constructor(e){this.kind="memory",this._onlineComponentProvider=Jr.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=Yr.provider}toJSON(){return{kind:this.kind}}}class JD{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=JS(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class XD{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Yr.provider}toJSON(){return{kind:this.kind}}}class ZD{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new q1(e)}}toJSON(){return{kind:this.kind}}}function eV(){return new XD}function tV(t){return new ZD(t==null?void 0:t.cacheSizeBytes)}function nV(t){return new YD(t)}function rV(t){return new JD(t)}class iV{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Jr.provider,this._offlineComponentProvider={build:n=>new yg(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class sV{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Jr.provider,this._offlineComponentProvider={build:n=>new ES(n,e==null?void 0:e.cacheSizeBytes)}}}function JS(t){return new iV(t==null?void 0:t.forceOwnership)}function oV(){return new sV}/**
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
 */class XS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=es(e)}set(e,n,r){this._verifyNotCommitted();const i=Ar(e,this._firestore),s=jh(i.converter,n,r),o=Lh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,De.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ar(e,this._firestore);let o;return o=typeof(n=X(n))=="string"||n instanceof oi?Cg(this._dataReader,"WriteBatch.update",s._key,n,r,i):Pg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,De.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ar(e,this._firestore);return this._mutations=this._mutations.concat(new wo(n._key,De.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ar(t,e){if((t=X(t)).firestore!==e)throw new U(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class ZS extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=es(n)}get(n){const r=Ar(n,this._firestore),i=new LD(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return H();const o=s[0];if(o.isFoundDocument())return new dl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new dl(this._firestore,i,r._key,null,r.converter);throw H()})}set(n,r,i){const s=Ar(n,this._firestore),o=jh(s.converter,r,i),a=Lh(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Ar(n,this._firestore);let a;return a=typeof(r=X(r))=="string"||r instanceof oi?Cg(this._dataReader,"Transaction.update",o._key,r,i,s):Pg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Ar(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ar(e,this._firestore),r=new li(this._firestore);return super.get(e).then(i=>new Qi(this._firestore,r,n._key,i._document,new kr(!1,!1),n.converter))}}function lV(t,e,n){t=ae(t,ve);const r=Object.assign(Object.assign({},aV),n);return function(s){if(s.maxAttempts<1)throw new U(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new ot;return s.asyncQueue.enqueueAndForget(async()=>{const c=await AS(s);new W1(s.asyncQueue,c,a,o,u).au()}),u.promise}(Oe(t),i=>e(new ZS(t,i)),r)}/**
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
 */function uV(){return new Ol("deleteField")}function cV(){return new Tg("serverTimestamp")}function hV(...t){return new Sg("arrayUnion",t)}function dV(...t){return new Ag("arrayRemove",t)}function fV(t){return new Rg("increment",t)}function pV(t){return new Vl(t)}/**
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
 */function Np(t){return Oe(t=ae(t,ve)),new XS(t,e=>ko(t,e))}/**
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
 */function mV(t,e){const n=Oe(t=ae(t,ve));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return Qt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(c){try{return JSON.parse(c)}catch(d){throw new U(L.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=kI(u,"collectionGroup"),d=[];if(Array.isArray(u.fields))for(const f of u.fields){const m=Mh("setIndexConfiguration",kI(f,"fieldPath"));f.arrayConfig==="CONTAINS"?d.push(new bi(m,2)):f.order==="ASCENDING"?d.push(new bi(m,0)):f.order==="DESCENDING"&&d.push(new bi(m,1))}a.push(new Js(Js.UNKNOWN_ID,c,d,Xs.empty()))}return a}(e);return rD(n,r)}function kI(t,e){if(typeof t[e]!="string")throw new U(L.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
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
 */class eA{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function gV(t){var e;t=ae(t,ve);const n=xI.get(t);if(n)return n;if(((e=Oe(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new eA(t);return xI.set(t,r),r}function _V(t){tA(t,!0)}function yV(t){tA(t,!1)}function vV(t){sD(Oe(t._firestore)).then(e=>j("deleting all persistent cache indexes succeeded")).catch(e=>Qt("deleting all persistent cache indexes failed",e))}function tA(t,e){iD(Oe(t._firestore),e).then(n=>j(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Qt(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const xI=new WeakMap;/**
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
 */function IV(t){var e;const n=(e=Oe(ae(t.firestore,ve))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:Ah(n,St(t._query))._t}function wV(t,e){var n;const r=KT(e,(s,o)=>new E0(o,s.aggregateType,s._internalFieldPath)),i=(n=Oe(ae(t.firestore,ve))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return i===void 0?null:O0(i,o0(t._query),r,!0).request}/**
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
 */class EV{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Dg.instance.onExistenceFilterMismatch(e)}}class Dg{constructor(){this.Uu=new Map}static get instance(){return xu||(xu=new Dg,function(n){if(Uc)throw new Error("a TestingHooksSpi instance is already set");Uc=n}(xu)),xu}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let xu=null;(function(e,n=!0){(function(i){yo=i})(Zi),Bi(new Ui("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ve(new Zx(r.getProvider("auth-internal")),new nN(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Hn(vv,"4.7.3",e),Hn(vv,"4.7.3","esm2017")})();const Bh=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Ng,AggregateField:co,AggregateQuerySnapshot:LS,Bytes:Xr,CACHE_SIZE_UNLIMITED:lD,CollectionReference:gn,DocumentReference:qe,DocumentSnapshot:Qi,FieldPath:oi,FieldValue:ai,Firestore:ve,FirestoreError:U,GeoPoint:Vh,LoadBundleTask:bS,PersistentCacheIndexManager:eA,Query:lt,QueryCompositeFilterConstraint:ns,QueryConstraint:Po,QueryDocumentSnapshot:Oa,QueryEndAtConstraint:Fl,QueryFieldFilterConstraint:Co,QueryLimitConstraint:Ll,QueryOrderByConstraint:Uh,QuerySnapshot:Yi,QueryStartAtConstraint:Ml,SnapshotMetadata:kr,Timestamp:Ve,Transaction:ZS,VectorValue:Vl,WriteBatch:XS,_AutoId:Om,_ByteString:je,_DatabaseId:Gr,_DocumentKey:G,_EmptyAppCheckTokenProvider:rN,_EmptyAuthCredentialsProvider:DT,_FieldPath:Pe,_TestingHooks:EV,_cast:ae,_debugAssert:Jx,_internalAggregationQueryToProtoRunAggregationQueryRequest:wV,_internalQueryToProtoQueryTarget:IV,_isBase64Available:NN,_logWarn:Qt,_validateIsNotUsedTogether:kS,addDoc:WD,aggregateFieldEqual:UD,aggregateQuerySnapshotEqual:jD,and:CD,arrayRemove:dV,arrayUnion:hV,average:FD,clearIndexedDbPersistence:dD,collection:ec,collectionGroup:oD,connectFirestoreEmulator:NS,count:HS,deleteAllPersistentCacheIndexes:vV,deleteDoc:nc,deleteField:uV,disableNetwork:mD,disablePersistentCacheIndexAutoCreation:yV,doc:In,documentId:vD,enableIndexedDbPersistence:cD,enableMultiTabIndexedDbPersistence:hD,enableNetwork:pD,enablePersistentCacheIndexAutoCreation:_V,endAt:OD,endBefore:VD,ensureFirestoreConfigured:Oe,executeWrite:ko,getAggregateFromServer:YS,getCountFromServer:QD,getDoc:QS,getDocFromCache:$D,getDocFromServer:qD,getDocs:tc,getDocsFromCache:GD,getDocsFromServer:KD,getFirestore:DS,getPersistentCacheIndexManager:gV,increment:fV,initializeFirestore:uD,limit:xD,limitToLast:ND,loadBundle:_D,memoryEagerGarbageCollector:eV,memoryLocalCache:nV,memoryLruGarbageCollector:tV,namedQuery:yD,onSnapshot:rc,onSnapshotsInSync:HD,or:PD,orderBy:kD,persistentLocalCache:rV,persistentMultipleTabManager:oV,persistentSingleTabManager:JS,query:AD,queryEqual:Eg,refEqual:aD,runTransaction:lV,serverTimestamp:cV,setDoc:ya,setIndexConfiguration:mV,setLogLevel:Yx,snapshotEqual:zD,startAfter:DD,startAt:bD,sum:MD,terminate:gD,updateDoc:va,vector:pV,waitForPendingWrites:fD,where:RD,writeBatch:Np},Symbol.toStringTag,{value:"Module"}));var TV="firebase",SV="10.14.1";/**
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
 */Hn(TV,SV,"app");const AV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Nn,SDK_VERSION:Zi,_DEFAULT_ENTRY_NAME:tl,_addComponent:up,_apps:ji,_components:Oc,_getProvider:_o,_isFirebaseServerApp:$e,_registerComponent:Bi,_removeServiceInstance:TT,_serverApps:Vc,deleteApp:jx,getApp:Dm,initializeApp:bm,registerVersion:Hn},Symbol.toStringTag,{value:"Module"}));function Vg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}/**
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
 */function NV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function nA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bV=NV,rA=nA,iA=new Tl("auth","Firebase",nA()),DV={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
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
 */const Qc=new xm("@firebase/auth");function VV(t,...e){Qc.logLevel<=ue.WARN&&Qc.warn(`Auth (${Zi}): ${t}`,...e)}function ic(t,...e){Qc.logLevel<=ue.ERROR&&Qc.error(`Auth (${Zi}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Lg(t,...e)}function xt(t,...e){return Lg(t,...e)}function Og(t,e,n){const r=Object.assign(Object.assign({},rA()),{[e]:n});return new Tl("auth","Firebase",r).create(e,{appName:t.name})}function at(t){return Og(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zt(t,"argument-error"),Og(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iA.create(t,...e)}function z(t,e,...n){if(!t)throw Lg(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ic(e),new Error(e)}function rr(t,e){t||Sn(e)}/**
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
 */function fl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mg(){return NI()==="http:"||NI()==="https:"}function NI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function OV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mg()||bk()||"connection"in navigator)?navigator.onLine:!0}function LV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=kk()||Dk()}get(){return OV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fg(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FV=new Ul(3e4,6e4);function ke(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xe(t,e,n,r,i={}){return oA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=go(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Nk()||(c.referrerPolicy="no-referrer"),sA.fetch()(aA(t,t.config.apiHost,n,a),c)})}async function oA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MV),e);try{const i=new jV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ia(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ia(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ia(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Og(t,d,c);zt(t,d)}}catch(i){if(i instanceof Nn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function cr(t,e,n,r,i={}){const s=await xe(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fg(t.config,i):`${t.config.apiScheme}://${i}`}function UV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),FV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function bI(t){return t!==void 0&&t.getResponse!==void 0}function DI(t){return t!==void 0&&t.enterprise!==void 0}class lA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function BV(t){return(await xe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function uA(t,e){return xe(t,"GET","/v2/recaptchaConfig",ke(t,e))}/**
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
 */async function zV(t,e){return xe(t,"POST","/v1/accounts:delete",e)}async function $V(t,e){return xe(t,"POST","/v1/accounts:update",e)}async function cA(t,e){return xe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function La(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function qV(t,e=!1){return X(t).getIdToken(e)}async function hA(t,e=!1){const n=X(t),r=await n.getIdToken(e),i=zh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:La(sf(i.auth_time)),issuedAtTime:La(sf(i.iat)),expirationTime:La(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function zh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const i=mT(n);return i?JSON.parse(i):(ic("Failed to decode base64 JWT payload"),null)}catch(i){return ic("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function VI(t){const e=zh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ir(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&GV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ir(t,cA(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fA(s.providerUserInfo):[],a=WV(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function dA(t){const e=X(t);await pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fA(t){return t.map(e=>{var{providerId:n}=e,r=Vg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function HV(t,e){const n=await oA(t,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QV(t,e){return xe(t,"POST","/v2/accounts:revokeToken",ke(t,e))}/**
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
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=VI(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Us;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function yr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ir(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hA(this,e)}reload(){return dA(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(at(this.auth));const e=await this.getIdToken();return await ir(this,zV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:V,isAnonymous:F,providerData:O,stsTokenManager:w}=n;z(v&&w,e,"internal-error");const g=Us.fromJSON(this.name,w);z(typeof v=="string",e,"internal-error"),yr(f,e.name),yr(m,e.name),z(typeof V=="boolean",e,"internal-error"),z(typeof F=="boolean",e,"internal-error"),yr(y,e.name),yr(A,e.name),yr(C,e.name),yr(D,e.name),yr(E,e.name),yr(I,e.name);const T=new qn({uid:v,auth:e,email:m,emailVerified:V,displayName:f,isAnonymous:F,photoURL:A,phoneNumber:y,tenantId:C,stsTokenManager:g,createdAt:E,lastLoginAt:I});return O&&Array.isArray(O)&&(T.providerData=O.map(S=>Object.assign({},S))),D&&(T._redirectEventId=D),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Us;i.updateFromServerResponse(n);const s=new qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Us;a.updateFromIdToken(r);const u=new qn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const OI=new Map;function Gn(t){rr(t instanceof Function,"Expected a class definition");let e=OI.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,OI.set(t,e),e)}/**
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
 */class pA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pA.type="NONE";const Dp=pA;/**
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
 */function sc(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sc(this.userKey,i.apiKey,s),this.fullPersistenceKey=sc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(Gn(Dp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gn(Dp);const o=sc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=qn._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new js(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new js(s,e,r))}}/**
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
 */function LI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IA(e))return"Blackberry";if(wA(e))return"Webos";if(gA(e))return"Safari";if((e.includes("chrome/")||_A(e))&&!e.includes("edge/"))return"Chrome";if(vA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mA(t=et()){return/firefox\//i.test(t)}function gA(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _A(t=et()){return/crios\//i.test(t)}function yA(t=et()){return/iemobile/i.test(t)}function vA(t=et()){return/android/i.test(t)}function IA(t=et()){return/blackberry/i.test(t)}function wA(t=et()){return/webos/i.test(t)}function Ug(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YV(t=et()){var e;return Ug(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JV(){return Vk()&&document.documentMode===10}function EA(t=et()){return Ug(t)||vA(t)||wA(t)||IA(t)||/windows phone/i.test(t)||yA(t)}/**
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
 */function TA(t,e=[]){let n;switch(t){case"Browser":n=LI(et());break;case"Worker":n=`${LI(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
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
 */async function ZV(t,e={}){return xe(t,"GET","/v2/passwordPolicy",ke(t,e))}/**
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
 */class nO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new MI(this),this.idTokenSubscription=new MI(this),this.beforeStateQueue=new XV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await cA(this,{idToken:e}),r=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(at(this));const n=e?X(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(at(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(at(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZV(this),n=new tO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&VV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ge(t){return X(t)}class MI{constructor(e){this.auth=e,this.observer=null,this.addObserver=jk(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rO(t){jl=t}function jg(t){return jl.loadJS(t)}function iO(){return jl.recaptchaV2Script}function sO(){return jl.recaptchaEnterpriseScript}function oO(){return jl.gapiScript}function SA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aO="recaptcha-enterprise",lO="NO_RECAPTCHA";class AA{constructor(e){this.type=aO,this.auth=Ge(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{uA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new lA(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;DI(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(lO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&DI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sO();u.length!==0&&(u+=a),jg(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function FI(t,e,n,r=!1){const i=new AA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ml(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await FI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await FI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}async function uO(t){const e=Ge(t),n=await uA(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new lA(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")&&new AA(e).verify()}/**
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
 */function RA(t,e){const n=_o(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($r(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function cO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PA(t,e,n){const r=Ge(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=CA(e),{host:o,port:a}=hO(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dO()}function CA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hO(t){const e=CA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:UI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:UI(o)}}}function UI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class No{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function kA(t,e){return xe(t,"POST","/v1/accounts:resetPassword",ke(t,e))}async function fO(t,e){return xe(t,"POST","/v1/accounts:update",e)}async function pO(t,e){return xe(t,"POST","/v1/accounts:signUp",e)}async function mO(t,e){return xe(t,"POST","/v1/accounts:update",ke(t,e))}/**
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
 */async function gO(t,e){return cr(t,"POST","/v1/accounts:signInWithPassword",ke(t,e))}async function $h(t,e){return xe(t,"POST","/v1/accounts:sendOobCode",ke(t,e))}async function _O(t,e){return $h(t,e)}async function yO(t,e){return $h(t,e)}async function vO(t,e){return $h(t,e)}async function IO(t,e){return $h(t,e)}/**
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
 */async function wO(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",ke(t,e))}async function EO(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",ke(t,e))}/**
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
 */class ho extends No{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ho(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ho(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,n,"signInWithPassword",gO);case"emailLink":return wO(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,r,"signUpPassword",pO);case"emailLink":return EO(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qn(t,e){return cr(t,"POST","/v1/accounts:signInWithIdp",ke(t,e))}/**
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
 */const TO="http://localhost";class xn extends No{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}buildRequest(){const e={requestUri:TO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
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
 */async function SO(t,e){return xe(t,"POST","/v1/accounts:sendVerificationCode",ke(t,e))}async function AO(t,e){return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,e))}async function RO(t,e){const n=await cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,e));if(n.temporaryProof)throw Ia(t,"account-exists-with-different-credential",n);return n}const PO={USER_NOT_FOUND:"user-not-found"};async function CO(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ke(t,n),PO)}/**
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
 */class jr extends No{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new jr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new jr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return AO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return RO(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return CO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new jr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function kO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xO(t){const e=da(fa(t)).link,n=e?da(fa(e)).deep_link_id:null,r=da(fa(t)).deep_link_id;return(r?da(fa(r)).link:null)||r||n||e||t}class bo{constructor(e){var n,r,i,s,o,a;const u=da(fa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=kO((i=u.mode)!==null&&i!==void 0?i:null);z(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xO(e);try{return new bo(n)}catch{return null}}}function NO(t){return bo.parseLink(t)}/**
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
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return ho._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bo.parseLink(n);return z(r,"argument-error"),ho._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Do extends hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ma extends Do{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),xn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),xn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ma.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ma.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ma(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Mn extends Do{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
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
 */class Fn extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
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
 */class Un extends Do{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */const bO="http://localhost";class gl extends No{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new gl(r,s)}static _create(e,n){return new gl(e,n)}buildRequest(){return{requestUri:bO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const DO="saml.";class Yc extends hr{constructor(e){z(e.startsWith(DO),"argument-error"),super(e)}static credentialFromResult(e){return Yc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Yc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=gl.fromJSON(e);return z(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return gl._create(r,n)}catch{return null}}}/**
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
 */class jn extends Do{constructor(){super("twitter.com")}static credential(e,n){return xn._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
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
 */async function xA(t,e){return cr(t,"POST","/v1/accounts:signUp",ke(t,e))}/**
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
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qn._fromIdTokenResponse(e,r,i),o=jI(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jI(r);return new on({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function VO(t){var e;if($e(t.app))return Promise.reject(at(t));const n=Ge(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new on({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await xA(n,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Jc extends Nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jc(e,n,r,i)}}function NA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function bA(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function OO(t,e){const n=X(t);await qh(!0,n,e);const{providerUserInfo:r}=await $V(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=bA(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Bg(t,e,n=!1){const r=await ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}async function qh(t,e,n){await pl(e);const r=bA(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
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
 */async function DA(t,e,n=!1){const{auth:r}=t;if($e(r.app))return Promise.reject(at(r));const i="reauthenticate";try{const s=await ir(t,NA(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=zh(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),on._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
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
 */async function VA(t,e,n=!1){if($e(t.app))return Promise.reject(at(t));const r="signIn",i=await NA(t,r,e),s=await on._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Gh(t,e){return VA(Ge(t),e)}async function OA(t,e){const n=X(t);return await qh(!1,n,e.providerId),Bg(n,e)}async function LA(t,e){return DA(X(t),e)}/**
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
 */async function LO(t,e){return cr(t,"POST","/v1/accounts:signInWithCustomToken",ke(t,e))}/**
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
 */async function MO(t,e){if($e(t.app))return Promise.reject(at(t));const n=Ge(t),r=await LO(n,{token:e,returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Bl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?zg._fromServerResponse(e,n):"totpInfo"in n?$g._fromServerResponse(e,n):zt(e,"internal-error")}}class zg extends Bl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new zg(n)}}class $g extends Bl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new $g(n)}}/**
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
 */function Kh(t,e,n){var r;z(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function qg(t){const e=Ge(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FO(t,e,n){const r=Ge(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Kh(r,i,n),await ml(r,i,"getOobCode",yO)}async function UO(t,e,n){await kA(X(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qg(t),r})}async function jO(t,e){await mO(X(t),{oobCode:e})}async function MA(t,e){const n=X(t),r=await kA(n,{oobCode:e}),i=r.requestType;switch(z(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":z(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":z(r.mfaInfo,n,"internal-error");default:z(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Bl._fromServerResponse(Ge(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function BO(t,e){const{data:n}=await MA(X(t),e);return n.email}async function zO(t,e,n){if($e(t.app))return Promise.reject(at(t));const r=Ge(t),o=await ml(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xA).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qg(t),u}),a=await on._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $O(t,e,n){return $e(t.app)?Promise.reject(at(t)):Gh(X(t),ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qg(t),r})}/**
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
 */async function qO(t,e,n){const r=Ge(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){z(a.handleCodeInApp,r,"argument-error"),a&&Kh(r,o,a)}s(i,n),await ml(r,i,"getOobCode",vO)}function GO(t,e){const n=bo.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function KO(t,e,n){if($e(t.app))return Promise.reject(at(t));const r=X(t),i=ui.credentialWithLink(e,n||fl());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Gh(r,i)}/**
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
 */async function WO(t,e){return xe(t,"POST","/v1/accounts:createAuthUri",ke(t,e))}/**
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
 */async function HO(t,e){const n=Mg()?fl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await WO(X(t),r);return i||[]}async function QO(t,e){const n=X(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Kh(n.auth,i,e);const{email:s}=await _O(n.auth,i);s!==t.email&&await t.reload()}async function YO(t,e,n){const r=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Kh(r.auth,s,n);const{email:o}=await IO(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function JO(t,e){return xe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function XO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=X(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ir(r,JO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ZO(t,e){const n=X(t);return $e(n.auth.app)?Promise.reject(at(n.auth)):FA(n,e,null)}function eL(t,e){return FA(X(t),null,e)}async function FA(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ir(t,fO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function tL(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=zh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Bs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new nL(s,i);case"github.com":return new rL(s,i);case"google.com":return new iL(s,i);case"twitter.com":return new sL(s,i,t.screenName||null);case"custom":case"anonymous":return new Bs(s,null);default:return new Bs(s,r,i)}}class Bs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class UA extends Bs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class nL extends Bs{constructor(e,n){super(e,"facebook.com",n)}}class rL extends UA{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class iL extends Bs{constructor(e,n){super(e,"google.com",n)}}class sL extends UA{constructor(e,n,r){super(e,"twitter.com",n,r)}}function oL(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:tL(n)}/**
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
 */function aL(t,e){return X(t).setPersistence(e)}function lL(t){return uO(t)}async function uL(t,e){return Ge(t).validatePassword(e)}function jA(t,e,n,r){return X(t).onIdTokenChanged(e,n,r)}function BA(t,e,n){return X(t).beforeAuthStateChanged(e,n)}function cL(t,e,n,r){return X(t).onAuthStateChanged(e,n,r)}function hL(t){X(t).useDeviceLanguage()}function dL(t,e){return X(t).updateCurrentUser(e)}function fL(t){return X(t).signOut()}function pL(t,e){return Ge(t).revokeAccessToken(e)}async function mL(t){return X(t).delete()}/**
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
 */class Pi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Pi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Pi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Pi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Pi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Gg{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ge(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Bl._fromServerResponse(r,a));z(i.mfaPendingCredential,r,"internal-error");const o=Pi._fromMfaPendingCredential(i.mfaPendingCredential);return new Gg(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const d=await on._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return z(n.user,r,"internal-error"),on._forOperation(n.user,n.operationType,c);default:zt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function gL(t,e){var n;const r=X(t),i=e;return z(e.customData.operationType,r,"argument-error"),z((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Gg._fromError(r,i)}/**
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
 */function _L(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:start",ke(t,e))}function yL(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:finalize",ke(t,e))}function vL(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:start",ke(t,e))}function IL(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:finalize",ke(t,e))}function wL(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ke(t,e))}class Kg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Bl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Kg(e)}async getSession(){return Pi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await ir(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await ir(this.user,wL(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const of=new WeakMap;function EL(t){const e=X(t);return of.has(e)||of.set(e,Kg._fromUser(e)),of.get(e)}const Xc="__sak";/**
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
 */class zA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const TL=1e3,SL=10;class $A extends zA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=EA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$A.type="LOCAL";const qA=$A;/**
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
 */class GA extends zA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GA.type="SESSION";const Wg=GA;/**
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
 */function AL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await AL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wh.receivers=[];/**
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
 */function Hh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Hh("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function PL(t){Ye().location.href=t}/**
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
 */function Hg(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function CL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xL(){return Hg()?self:null}/**
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
 */const KA="firebaseLocalStorageDb",NL=1,Zc="firebaseLocalStorage",WA="fbase_key";class zl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qh(t,e){return t.transaction([Zc],e?"readwrite":"readonly").objectStore(Zc)}function bL(){const t=indexedDB.deleteDatabase(KA);return new zl(t).toPromise()}function Vp(){const t=indexedDB.open(KA,NL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zc,{keyPath:WA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zc)?e(r):(r.close(),await bL(),e(await Vp()))})})}async function BI(t,e,n){const r=Qh(t,!0).put({[WA]:e,value:n});return new zl(r).toPromise()}async function DL(t,e){const n=Qh(t,!1).get(e),r=await new zl(n).toPromise();return r===void 0?null:r.value}function zI(t,e){const n=Qh(t,!0).delete(e);return new zl(n).toPromise()}const VL=800,OL=3;class HA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wh._getInstance(xL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CL(),!this.activeServiceWorker)return;this.sender=new RL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await BI(e,Xc,"1"),await zI(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>BI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qh(i,!1).getAll();return new zl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HA.type="LOCAL";const QA=HA;/**
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
 */function LL(t,e){return xe(t,"POST","/v2/accounts/mfaSignIn:start",ke(t,e))}function ML(t,e){return xe(t,"POST","/v2/accounts/mfaSignIn:finalize",ke(t,e))}function FL(t,e){return xe(t,"POST","/v2/accounts/mfaSignIn:finalize",ke(t,e))}/**
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
 */const UL=500,jL=6e4,Nu=1e12;class BL{constructor(e){this.auth=e,this.counter=Nu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new zL(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Nu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Nu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Nu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class zL{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$L(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},jL)},UL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $L(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const af=SA("rcb"),qL=new Ul(3e4,6e4);class GL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return z(KL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&bI(Ye().grecaptcha)?Promise.resolve(Ye().grecaptcha):new Promise((r,i)=>{const s=Ye().setTimeout(()=>{i(xt(e,"network-request-failed"))},qL.get());Ye()[af]=()=>{Ye().clearTimeout(s),delete Ye()[af];const a=Ye().grecaptcha;if(!a||!bI(a)){i(xt(e,"internal-error"));return}const u=a.render;a.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${iO()}?${go({onload:af,render:"explicit",hl:n})}`;jg(o).catch(()=>{clearTimeout(s),i(xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ye().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function KL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class WL{async load(e){return new BL(e)}clearedOneInstance(){}}/**
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
 */const YA="recaptcha",HL={theme:"light",type:"image"};class QL{constructor(e,n,r=Object.assign({},HL)){this.parameters=r,this.type=YA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ge(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new WL:new GL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Mg()&&!Hg(),this.auth,"internal-error"),await YL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await BV(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function YL(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Qg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=jr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function JL(t,e,n){if($e(t.app))return Promise.reject(at(t));const r=Ge(t),i=await Yh(r,e,X(n));return new Qg(i,s=>Gh(r,s))}async function XL(t,e,n){const r=X(t);await qh(!1,r,"phone");const i=await Yh(r.auth,e,X(n));return new Qg(i,s=>OA(r,s))}async function ZL(t,e,n){const r=X(t);if($e(r.auth.app))return Promise.reject(at(r.auth));const i=await Yh(r.auth,e,X(n));return new Qg(i,s=>LA(r,s))}async function Yh(t,e,n){var r;const i=await n.verify();try{z(typeof i=="string",t,"argument-error"),z(n.type===YA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return z(o.type==="enroll",t,"internal-error"),(await _L(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{z(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return z(a,t,"missing-multi-factor-info"),(await LL(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await SO(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function e2(t,e){const n=X(t);if($e(n.auth.app))return Promise.reject(at(n.auth));await Bg(n,e)}/**
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
 */class Di{constructor(e){this.providerId=Di.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,n){return Yh(this.auth,e,X(n))}static credential(e,n){return jr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Di.credentialFromTaggedObject(n)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?jr._fromTokenResponse(n,r):null}}Di.PROVIDER_ID="phone";Di.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function rs(t,e){return e?Gn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yg extends No{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t2(t){return VA(t.auth,new Yg(t),t.bypassAuthState)}function n2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),DA(n,new Yg(t),t.bypassAuthState)}async function r2(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Bg(n,new Yg(t),t.bypassAuthState)}/**
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
 */class JA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t2;case"linkViaPopup":case"linkViaRedirect":return r2;case"reauthViaPopup":case"reauthViaRedirect":return n2;default:zt(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const i2=new Ul(2e3,1e4);async function s2(t,e,n){if($e(t.app))return Promise.reject(xt(t,"operation-not-supported-in-this-environment"));const r=Ge(t);xo(t,e,hr);const i=rs(r,n);return new Kn(r,"signInViaPopup",e,i).executeNotNull()}async function o2(t,e,n){const r=X(t);if($e(r.auth.app))return Promise.reject(xt(r.auth,"operation-not-supported-in-this-environment"));xo(r.auth,e,hr);const i=rs(r.auth,n);return new Kn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function a2(t,e,n){const r=X(t);xo(r.auth,e,hr);const i=rs(r.auth,n);return new Kn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Kn extends JA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Hh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i2.get())};e()}}Kn.currentPopupAction=null;/**
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
 */const l2="pendingRedirect",oc=new Map;class u2 extends JA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const r=await c2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function c2(t,e){const n=ZA(e),r=XA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Jg(t,e){return XA(t)._set(ZA(e),"true")}function h2(t,e){oc.set(t._key(),e)}function XA(t){return Gn(t._redirectPersistence)}function ZA(t){return sc(l2,t.config.apiKey,t.name)}/**
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
 */function d2(t,e,n){return f2(t,e,n)}async function f2(t,e,n){if($e(t.app))return Promise.reject(at(t));const r=Ge(t);xo(t,e,hr),await r._initializationPromise;const i=rs(r,n);return await Jg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function p2(t,e,n){return m2(t,e,n)}async function m2(t,e,n){const r=X(t);if(xo(r.auth,e,hr),$e(r.auth.app))return Promise.reject(at(r.auth));await r.auth._initializationPromise;const i=rs(r.auth,n);await Jg(i,r.auth);const s=await tR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function g2(t,e,n){return _2(t,e,n)}async function _2(t,e,n){const r=X(t);xo(r.auth,e,hr),await r.auth._initializationPromise;const i=rs(r.auth,n);await qh(!1,r,e.providerId),await Jg(i,r.auth);const s=await tR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function y2(t,e){return await Ge(t)._initializationPromise,eR(t,e,!1)}async function eR(t,e,n=!1){if($e(t.app))return Promise.reject(at(t));const r=Ge(t),i=rs(r,e),o=await new u2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function tR(t){const e=Hh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const v2=10*60*1e3;class I2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!w2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v2&&this.cachedEventUids.clear(),this.cachedEventUids.has($I(e))}saveEventToCache(e){this.cachedEventUids.add($I(e)),this.lastProcessedEventTime=Date.now()}}function $I(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function w2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nR(t);default:return!1}}/**
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
 */async function E2(t,e={}){return xe(t,"GET","/v1/projects",e)}/**
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
 */const T2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S2=/^https?/;async function A2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E2(t);for(const n of e)try{if(R2(n))return}catch{}zt(t,"unauthorized-domain")}function R2(t){const e=fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!S2.test(n))return!1;if(T2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const P2=new Ul(3e4,6e4);function qI(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function C2(t){return new Promise((e,n)=>{var r,i,s;function o(){qI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qI(),n(xt(t,"network-request-failed"))},timeout:P2.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ye().gapi)===null||s===void 0)&&s.load)o();else{const a=SA("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},jg(`${oO()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw ac=null,e})}let ac=null;function k2(t){return ac=ac||C2(t),ac}/**
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
 */const x2=new Ul(5e3,15e3),N2="__/auth/iframe",b2="emulator/auth/iframe",D2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},V2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O2(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fg(e,b2):`https://${t.config.authDomain}/${N2}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=V2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${go(r).slice(1)}`}async function L2(t){const e=await k2(t),n=Ye().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:O2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Ye().setTimeout(()=>{s(o)},x2.get());function u(){Ye().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const M2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},F2=500,U2=600,j2="_blank",B2="http://localhost";class GI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function z2(t,e,n,r=F2,i=U2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},M2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=et().toLowerCase();n&&(a=_A(c)?j2:n),mA(c)&&(e=e||B2,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[y,A])=>`${m}${y}=${A},`,"");if(YV(c)&&a!=="_self")return $2(e||"",a),new GI(null);const f=window.open(e||"",a,d);z(f,t,"popup-blocked");try{f.focus()}catch{}return new GI(f)}function $2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const q2="__/auth/handler",G2="emulator/auth/handler",K2=encodeURIComponent("fac");async function KI(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof hr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Do){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${K2}=${encodeURIComponent(u)}`:"";return`${W2(t)}?${go(a).slice(1)}${c}`}function W2({config:t}){return t.emulator?Fg(t,G2):`https://${t.authDomain}/${q2}`}/**
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
 */const lf="webStorageSupport";class H2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wg,this._completeRedirectFn=eR,this._overrideRedirectResult=h2}async _openPopup(e,n,r,i){var s;rr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await KI(e,n,r,fl(),i);return z2(e,o,Hh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await KI(e,n,r,fl(),i);return PL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await L2(e),r=new I2(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lf,{type:lf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[lf];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EA()||gA()||Ug()}}const rR=H2;class iR{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Sn("unexpected MultiFactorSessionType")}}}class Xg extends iR{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xg(e)}_finalizeEnroll(e,n,r){return yL(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return ML(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class sR{constructor(){}static assertion(e){return Xg._fromCredential(e)}}sR.FACTOR_ID="phone";class oR{static assertionForEnrollment(e,n){return _l._fromSecret(e,n)}static assertionForSignIn(e,n){return _l._fromEnrollmentId(e,n)}static async generateSecret(e){var n;const r=e;z(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");const i=await vL(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Jh._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}}oR.FACTOR_ID="totp";class _l extends iR{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new _l(n,void 0,e)}static _fromEnrollmentId(e,n){return new _l(n,e)}async _finalizeEnroll(e,n,r){return z(typeof this.secret<"u",e,"argument-error"),IL(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){z(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return FL(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}}class Jh{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new Jh(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let i=!1;return(bu(e)||bu(n))&&(i=!0),i&&(bu(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),bu(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function bu(t){return typeof t>"u"||(t==null?void 0:t.length)===0}var WI="@firebase/auth",HI="1.7.9";/**
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
 */class Q2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Y2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J2(t){Bi(new Ui("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TA(t)},c=new nO(r,i,s,u);return cO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bi(new Ui("auth-internal",e=>{const n=Ge(e.getProvider("auth").getImmediate());return(r=>new Q2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(WI,HI,Y2(t)),Hn(WI,HI,"esm2017")}/**
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
 */const X2=5*60,Z2=yT("authIdTokenMaxAge")||X2;let QI=null;const eM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Z2)return;const i=n==null?void 0:n.token;QI!==i&&(QI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aR(t=Dm()){const e=_o(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RA(t,{popupRedirectResolver:rR,persistence:[QA,qA,Wg]}),r=yT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eM(s.toString());BA(n,o,()=>o(n.currentUser)),jA(n,a=>o(a))}}const i=gT("auth");return i&&PA(n,`http://${i}`),n}function tM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rO({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J2("Browser");const eh=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:xV,ActionCodeURL:bo,AuthCredential:No,AuthErrorCodes:DV,EmailAuthCredential:ho,EmailAuthProvider:ui,FacebookAuthProvider:Mn,FactorId:RV,GithubAuthProvider:Un,GoogleAuthProvider:Fn,OAuthCredential:xn,OAuthProvider:Ma,OperationType:kV,PhoneAuthCredential:jr,PhoneAuthProvider:Di,PhoneMultiFactorGenerator:sR,ProviderId:PV,RecaptchaVerifier:QL,SAMLAuthProvider:Yc,SignInMethod:CV,TotpMultiFactorGenerator:oR,TotpSecret:Jh,TwitterAuthProvider:jn,applyActionCode:jO,beforeAuthStateChanged:BA,browserLocalPersistence:qA,browserPopupRedirectResolver:rR,browserSessionPersistence:Wg,checkActionCode:MA,confirmPasswordReset:UO,connectAuthEmulator:PA,createUserWithEmailAndPassword:zO,debugErrorMap:bV,deleteUser:mL,fetchSignInMethodsForEmail:HO,getAdditionalUserInfo:oL,getAuth:aR,getIdToken:qV,getIdTokenResult:hA,getMultiFactorResolver:gL,getRedirectResult:y2,inMemoryPersistence:Dp,indexedDBLocalPersistence:QA,initializeAuth:RA,initializeRecaptchaConfig:lL,isSignInWithEmailLink:GO,linkWithCredential:OA,linkWithPhoneNumber:XL,linkWithPopup:a2,linkWithRedirect:g2,multiFactor:EL,onAuthStateChanged:cL,onIdTokenChanged:jA,parseActionCodeURL:NO,prodErrorMap:rA,reauthenticateWithCredential:LA,reauthenticateWithPhoneNumber:ZL,reauthenticateWithPopup:o2,reauthenticateWithRedirect:p2,reload:dA,revokeAccessToken:pL,sendEmailVerification:QO,sendPasswordResetEmail:FO,sendSignInLinkToEmail:qO,setPersistence:aL,signInAnonymously:VO,signInWithCredential:Gh,signInWithCustomToken:MO,signInWithEmailAndPassword:$O,signInWithEmailLink:KO,signInWithPhoneNumber:JL,signInWithPopup:s2,signInWithRedirect:d2,signOut:fL,unlink:OO,updateCurrentUser:dL,updateEmail:ZO,updatePassword:eL,updatePhoneNumber:e2,updateProfile:XO,useDeviceLanguage:hL,validatePassword:uL,verifyBeforeUpdateEmail:YO,verifyPasswordResetCode:BO},Symbol.toStringTag,{value:"Module"}));function nM(){return{apiKey:"AIzaSyD3quPJCOUoUH_Um5UceWXYuUXfRpJEuyo",authDomain:"opencode-sk.firebaseapp.com",projectId:"opencode-sk",appId:"1:741268730945:web:503cf0dfab0e9100b042c0"}}let uf=null;function Zg(){return uf||(uf=bm({apiKey:"AIzaSyD3quPJCOUoUH_Um5UceWXYuUXfRpJEuyo",authDomain:"opencode-sk.firebaseapp.com",projectId:"opencode-sk",appId:"1:741268730945:web:503cf0dfab0e9100b042c0"})),uf}let cf=null;function lR(){return cf||(cf=aR(Zg())),cf}let hf=null;function $l(){return hf||(hf=DS(Zg())),hf}const th=Object.freeze(Object.defineProperty({__proto__:null,authClient:lR,dbClient:$l,firebaseApp:Zg,firebaseConfig:nM},Symbol.toStringTag,{value:"Module"})),df="sq-days",ps="sq-rooms",YI="sq-settings";function rM(){const t=$l();let e="";const n=()=>{var a;return((a=lR().currentUser)==null?void 0:a.uid)??""},r=a=>ec(t,df,a,"rooms"),i=(a,u)=>In(t,df,a,"rooms",u),s=(a,u)=>In(t,df,a,"orders",u);function o(a,u="dirty"){return{building:a.building,floor:a.floor,no:a.no,status:u,checkInTime:null,nextGuest:!1,checkedOutAt:null,prevStatus:null,updatedAt:Date.now(),updatedBy:n()}}return{subscribe(a,u){return e=a,rc(r(a),c=>u(c.docs.map(d=>({id:d.id,...d.data()}))),()=>{})},async update(a,u){await va(i(e,a),{...u,updatedAt:Date.now(),updatedBy:n()})},async bulkUpdate(a){const u=Np(t);for(const{roomId:c,patch:d}of a)u.update(i(e,c),{...d,updatedAt:Date.now(),updatedBy:n()});await u.commit()},async resetDay(a,u){const c=await tc(r(a)),d=await tc(ec(t,ps)),f=Np(t),m=new Set;c.forEach(y=>{const A=y.data();m.add(y.id),f.set(i(u,y.id),{building:A.building,floor:A.floor,no:A.no,status:A.status==="occupied"?"occupied":"dirty",checkInTime:null,nextGuest:!1,checkedOutAt:null,prevStatus:null,updatedAt:Date.now(),updatedBy:n()})}),d.forEach(y=>{if(m.has(y.id))return;const A={id:y.id,...y.data()};f.set(i(u,y.id),o(A))}),await f.commit()},async ensureDay(a,u){(await tc(r(a))).empty&&await this.resetDay(u,a)},subscribeRooms(a){return rc(ec(t,ps),u=>a(u.docs.map(c=>({id:c.id,...c.data()}))),()=>{})},async getSettings(){const a=await QS(In(t,YI,"app"));return a.exists()?a.data():{floors:hT,layout:dT}},async saveSettings(a){await ya(In(t,YI,"app"),a,{merge:!0})},async setRoomEnabled(a,u){await va(In(t,ps,a),{enabled:u})},async addRoom(a,u,c){const d=gk(a),f={building:a,floor:u,no:c};await ya(In(t,ps,d),{building:a,floor:u,no:c,enabled:!0}),e&&await ya(i(e,d),o(f))},async updateRoomNo(a,u){await va(In(t,ps,a),{no:u}),e&&await va(i(e,a),{no:u})},async removeRoom(a){await nc(In(t,ps,a)),e&&await nc(i(e,a)).catch(()=>{})},subscribeOrder(a,u,c){return rc(s(a,u),d=>c(d.exists()?d.data().ids??[]:[]),()=>c([]))},async saveOrder(a,u,c){await ya(s(a,u),{ids:c,updatedAt:Date.now(),updatedBy:n()})},async clearOrder(a,u){await nc(s(a,u))}}}let Du=null;function iM(){return Du||(Du=rM(),Du)}function sM(t){const e=iM(),[n,r]=Z.useState([]),[i,s]=Z.useState([]),[o,a]=Z.useState({floors:hT,layout:dT}),[u,c]=Z.useState(!0);Z.useEffect(()=>{e.getSettings().then(a).catch(()=>{});const m=e.subscribeRooms(s),y=e.subscribe(t,A=>{r(A),c(!1)});return e.ensureDay(t,mk(t)).catch(()=>{}),()=>{m(),y()}},[t,e]);const d=Z.useMemo(()=>new Set(i.filter(m=>m.enabled).map(m=>m.id)),[i]);return{rooms:Z.useMemo(()=>i.length?n.filter(m=>d.has(m.id)):n,[n,d,i.length]),dayRooms:n,roomMetas:i,settings:o,loading:u,repo:e}}const oM="modulepreload",aM=function(t,e){return new URL(t,e).href},JI={},Gt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=aM(c,r),c in JI)return;JI[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let A=o.length-1;A>=0;A--){const C=o[A];if(C.href===c&&(!d||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":oM,d||(y.as="script"),y.crossOrigin="",y.href=c,u&&y.setAttribute("nonce",u),document.head.appendChild(y),d)return new Promise((A,C)=>{y.addEventListener("load",A),y.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function lM(){const[e,n]=Z.useState(()=>({role:null,uid:"",email:"",isDemo:!1,loading:!0}));Z.useEffect(()=>{let i=()=>{};return(async()=>{const{authClient:s,dbClient:o}=await Gt(async()=>{const{authClient:f,dbClient:m}=await Promise.resolve().then(()=>th);return{authClient:f,dbClient:m}},void 0,import.meta.url),{onAuthStateChanged:a,signOut:u}=await Gt(async()=>{const{onAuthStateChanged:f,signOut:m}=await Promise.resolve().then(()=>eh);return{onAuthStateChanged:f,signOut:m}},void 0,import.meta.url),{doc:c,getDoc:d}=await Gt(async()=>{const{doc:f,getDoc:m}=await Promise.resolve().then(()=>Bh);return{doc:f,getDoc:m}},void 0,import.meta.url);i=a(s(),async f=>{if(!f){n(m=>({...m,role:null,uid:"",email:"",loading:!1}));return}try{const m=await d(c(o(),"sq-staff",f.uid)),y=m.exists()?m.data():null;if(!y||y.deleted===!0||y.disabled===!0){await u(s()),n(A=>({...A,role:null,uid:"",email:"",loading:!1}));return}n(A=>({...A,role:y.role,uid:f.uid,email:f.email??"",loading:!1}))}catch{n(m=>({...m,role:null,uid:f.uid,email:f.email??"",loading:!1}))}})})(),()=>i()},[!1]);async function r(){const{authClient:i}=await Gt(async()=>{const{authClient:o}=await Promise.resolve().then(()=>th);return{authClient:o}},void 0,import.meta.url),{signOut:s}=await Gt(async()=>{const{signOut:o}=await Promise.resolve().then(()=>eh);return{signOut:o}},void 0,import.meta.url);await s(i())}return{...e,signOut:r}}function zs(t){return t.status==="occupied"||t.status==="clean"?null:t.status==="arriving"&&t.checkInTime?1:t.status==="arriving"?2:t.status==="dirty"&&t.checkedOutAt?3:t.status==="dirty"?4:null}const Op=(t,e)=>t.no.localeCompare(e.no,"en",{numeric:!0});function XI(t,e){const n=zs(t),r=zs(e);return n!==r?n-r:n===1&&t.checkInTime!==e.checkInTime?t.checkInTime<e.checkInTime?-1:1:Op(t,e)}function uM(t,e){const n=t.filter(r=>zs(r)!==null);if(e&&e.length){const r=new Map;e.forEach((i,s)=>r.set(i,s)),n.sort((i,s)=>{const o=r.has(i.id)?r.get(i.id):Number.MAX_SAFE_INTEGER,a=r.has(s.id)?r.get(s.id):Number.MAX_SAFE_INTEGER;return o!==a?o-a:XI(i,s)})}else n.sort(XI);return n.map((r,i)=>({room:r,seq:i+1}))}function cM(t,e={}){const n=t.filter(r=>zs(r)!==null);return n.sort((r,i)=>{const s=zs(r),o=zs(i);if(s!==o)return s-o;if(r.floor!==i.floor)return r.floor-i.floor;const a=e[`${r.building}-${r.floor}`]??[],u=a.indexOf(r.id),c=a.indexOf(i.id),d=u>=0?u:Number.MAX_SAFE_INTEGER,f=c>=0?c:Number.MAX_SAFE_INTEGER;return d!==f?d-f:Op(r,i)}),n.map((r,i)=>({room:r,seq:i+1}))}function hM({mode:t,locked:e,onToggle:n}){return e?k.jsx("span",{className:"rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white",children:"打掃模式"}):k.jsx("button",{type:"button",onClick:n,className:`rounded-full px-3 py-1 text-xs font-semibold ${t==="clean"?"bg-indigo-600 text-white":"bg-slate-200 text-slate-700"}`,children:t==="clean"?"打掃模式":"一般模式"})}function dM(t){const e=t.role==="front",n=t.dayKey.slice(5).replace("-","/");return k.jsxs("header",{className:`sticky top-0 z-40 border-b border-slate-200 shadow-sm ${t.mode==="clean"?"bg-indigo-600 text-white":"bg-white text-slate-900"}`,children:[k.jsxs("div",{className:"flex items-center gap-2 px-4 py-2",children:[bc.map(r=>k.jsx("button",{onClick:()=>t.onBuilding(r),className:`rounded-full px-3 py-1 text-sm font-semibold ${t.building===r?"bg-slate-900 text-white":"bg-slate-100 text-slate-600"}`,children:xi[r]},r)),k.jsx("span",{className:"ml-auto text-xs opacity-80",children:n}),k.jsx("span",{className:"rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600",children:e?"櫃台":"房務"})]}),k.jsxs("div",{className:"flex items-center gap-2 px-4 pb-2",children:[k.jsx(hM,{mode:t.mode,locked:!e,onToggle:t.onMode}),t.isDemo&&k.jsx("span",{className:"text-xs text-amber-700",children:"DEMO 模式（資料不共用）"}),k.jsxs("div",{className:"ml-auto flex gap-2",children:[e&&k.jsxs(k.Fragment,{children:[k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onFillHouse,children:"一鍵滿房"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onClearHouse,children:"一鍵未入住"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onResetDay,children:"換日"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs",onClick:t.onSettings,children:"⚙"})]}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600",onClick:t.onSignOut,children:"登出"})]})]})]})}function fM({building:t,floor:e,rooms:n,columns:r,canCustomOrder:i,hasCustomOrder:s,onCustomOrder:o,renderCard:a}){const u=n.length,c=n.filter(d=>d.status==="arriving"||d.status==="dirty").length;return k.jsxs("section",{className:"mb-4",children:[k.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[k.jsxs("h2",{className:"text-sm font-semibold text-slate-500",children:[xi[t]," ",e,"F"]}),k.jsxs("div",{className:"flex items-center gap-2",children:[i&&k.jsx("button",{onClick:o,className:`rounded-lg px-2 py-0.5 text-xs ${s?"bg-indigo-600 text-white":"bg-slate-100 text-slate-600"}`,children:s?"自訂順序（已設定）":"自訂順序"}),k.jsxs("span",{className:"text-xs text-slate-400",children:["可掃 ",c," / 共 ",u]})]})]}),k.jsx("div",{className:`grid ${r} gap-2`,children:n.map(a)})]})}function pM({on:t,editable:e,onToggle:n}){return t?k.jsx("span",{className:`tag-pop inline-flex items-center gap-0.5 rounded border border-amber-500 bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold text-amber-950 shadow-sm ${e?"cursor-pointer":""}`,onClick:e?r=>{r.stopPropagation(),n()}:void 0,children:"★ 後續入住"}):e?k.jsx("button",{type:"button",className:"rounded bg-slate-100 px-1 py-0.5 text-[10px] text-slate-400",onClick:r=>{r.stopPropagation(),n()},children:"＋後續入住"}):null}const mM=1e3;function gM({room:t,seq:e,role:n,mode:r,pending:i,onCardClick:s,onLongPressTime:o,onToggleNextGuest:a,onMarkClean:u}){const c=Z.useRef(null),d=Z.useRef(!1),f=n==="front",m=t.status==="occupied"?{cls:"bg-amber-400 shadow-[0_0_16px_rgba(251,191,36,.55)] text-amber-950",border:""}:t.status==="arriving"?{cls:"bg-white text-red-600",border:"border-2 border-red-500"}:t.status==="dirty"&&t.checkedOutAt?{cls:"bg-white text-slate-900",border:"border-2 border-blue-500"}:t.status==="dirty"?{cls:"bg-slate-50 text-slate-700",border:"border border-slate-300"}:{cls:"bg-emerald-50 text-emerald-700 opacity-60",border:"border border-emerald-300"},y=t.status==="occupied"?"入住中":t.status==="clean"?"✓ 已打掃":e!==null?`待掃 ${e}`:"";function A(E){if(!f)return;const I={timer:0,cancelled:!1,startX:E.clientX,startY:E.clientY};c.current=I,I.timer=window.setTimeout(()=>{var v;I.cancelled||(d.current=!0,(v=navigator.vibrate)==null||v.call(navigator,30),o(t))},mM)}function C(){const E=c.current;E&&(clearTimeout(E.timer),E.cancelled=!0),c.current=null}function D(E){const I=c.current;I&&(Math.abs(E.clientX-I.startX)>10||Math.abs(E.clientY-I.startY)>10)&&C()}return k.jsxs("div",{className:`relative flex min-h-[88px] cursor-pointer select-none flex-col justify-between rounded-2xl p-2 ${m.cls} ${m.border} ${i?"animate-pulse opacity-70":""} ${r==="clean"&&t.status!=="occupied"?"active:scale-95":""}`,style:{touchAction:"manipulation"},onClick:()=>{if(d.current){d.current=!1;return}r==="clean"&&t.status==="occupied"||s(t)},children:[k.jsxs("div",{className:"flex items-start justify-between",children:[k.jsx("span",{className:"text-xl font-bold tabular-nums",children:t.no}),f&&r==="normal"&&t.status!=="occupied"&&k.jsx("button",{type:"button",className:`-mr-1 -mt-1 rounded-lg px-1.5 py-0.5 text-sm ${t.status==="clean"?"bg-emerald-600 text-white":"bg-black/5 text-slate-600"}`,onClick:E=>{E.stopPropagation(),u(t)},title:t.status==="clean"?"復原":"標記已打掃",children:"✓"})]}),k.jsx("div",{className:"text-center text-2xl font-black tabular-nums",children:y}),k.jsxs("div",{className:"flex flex-col items-center gap-1",children:[k.jsx("div",{className:"w-full text-center text-[11px] tabular-nums text-slate-500",onPointerDown:A,onPointerUp:C,onPointerCancel:C,onPointerMove:D,children:t.checkInTime??"----"}),k.jsx(pM,{on:t.nextGuest,editable:n==="front",onToggle:()=>a(t)})]})]})}function _M(t){const e=t.replace(/\D/g,"").slice(0,4);if(e.length<3)return{time:null,error:"請輸入 4 位數字"};const n=e.padStart(4,"0");let r=Number(n.slice(0,2));const i=Number(n.slice(2,4));return i>59?{time:null,error:"分鐘格式錯誤"}:r>23?{time:null,error:"小時格式錯誤"}:(r>=1&&r<=11&&(r+=12),{time:`${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`})}function yM(t){const[e,n]=t.split(":"),r=Number(e),i=r<12?"上午":"下午";let s=r%12;return s===0&&(s=12),`${i} ${s}:${n}`}function vM(t,e){const[n,r]=t.split(":"),i=(Number(n)+e*12+24)%24;return`${String(i).padStart(2,"0")}:${r}`}function IM({room:t,onConfirm:e,onClear:n,onClose:r}){const[i,s]=Z.useState(t.checkInTime?t.checkInTime.replace(":",""):""),[o,a]=Z.useState(null),u=Z.useRef(null);Z.useEffect(()=>{var m,y;(m=u.current)==null||m.focus(),(y=u.current)==null||y.select()},[]);const c=_M(i);function d(){if(c.error||!c.time){a(c.error??"時間錯誤");return}e(c.time)}function f(m){const y=c.time??"12:00";s(vM(y,m).replace(":","")),a(null)}return k.jsx("div",{className:"fixed inset-0 z-50 flex items-end bg-black/40",onClick:r,children:k.jsxs("div",{className:"w-full rounded-t-3xl bg-white p-5",onClick:m=>m.stopPropagation(),children:[k.jsxs("h3",{className:"text-base font-bold text-slate-900",children:[t.no," 入住時間"]}),k.jsx("input",{ref:u,inputMode:"numeric",maxLength:4,value:i,onChange:m=>{s(m.target.value),a(null)},className:"mt-4 w-full rounded-xl border border-slate-300 p-3 text-center text-3xl font-black tabular-nums tracking-widest",placeholder:"HHMM"}),k.jsx("div",{className:"mt-2 text-center text-lg font-bold tabular-nums text-indigo-600",children:c.time??"--:--"}),k.jsx("div",{className:"mt-1 text-center text-xs text-slate-500",children:c.time?yM(c.time):""}),o&&k.jsx("div",{className:"mt-2 text-center text-sm text-red-600",children:o}),k.jsxs("div",{className:"mt-4 flex justify-center gap-2",children:[k.jsx("button",{className:"rounded-lg border border-slate-300 px-3 py-2 text-sm",onClick:()=>f(-1),children:"上午"}),k.jsx("button",{className:"rounded-lg border border-slate-300 px-3 py-2 text-sm",onClick:()=>f(1),children:"下午"})]}),k.jsxs("div",{className:"mt-5 flex justify-between",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-red-600",onClick:n,children:"清除"}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-slate-600",onClick:r,children:"取消"}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white",onClick:d,children:"確定"})]})]})]})})}function wM({title:t,rooms:e,ids:n,onSave:r,onClear:i,onClose:s}){const[o,a]=Z.useState(()=>{const d=new Set(e.map(y=>y.id)),f=n.filter(y=>d.has(y)),m=e.filter(y=>!f.includes(y.id)).sort((y,A)=>y.no.localeCompare(A.no,"en",{numeric:!0})).map(y=>y.id);return[...f,...m]}),u=Z.useMemo(()=>new Map(e.map(d=>[d.id,d])),[e]);function c(d,f){const m=d+f;if(m<0||m>=o.length)return;const y=[...o];[y[d],y[m]]=[y[m],y[d]],a(y)}return k.jsx("div",{className:"fixed inset-0 z-50 flex items-end bg-black/40",onClick:s,children:k.jsxs("div",{className:"max-h-[80vh] w-full overflow-y-auto rounded-t-3xl bg-white p-5",onClick:d=>d.stopPropagation(),children:[k.jsxs("h3",{className:"mb-1 text-base font-bold text-slate-900",children:[t,"　自訂打掃順序"]}),k.jsx("p",{className:"mb-3 text-xs text-slate-500",children:"僅今日有效；未設定時依系統自動排序。"}),k.jsxs("ul",{className:"mb-3 divide-y divide-slate-100",children:[o.map((d,f)=>{const m=u.get(d);return m?k.jsxs("li",{className:"flex items-center gap-3 py-2",children:[k.jsx("span",{className:"w-6 text-center text-sm font-semibold tabular-nums text-slate-400",children:f+1}),k.jsx("span",{className:"flex-1 text-base font-bold tabular-nums",children:m.no}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-sm",onClick:()=>c(f,-1),children:"↑"}),k.jsx("button",{className:"rounded-lg bg-slate-100 px-2 py-1 text-sm",onClick:()=>c(f,1),children:"↓"})]},d):null}),o.length===0&&k.jsx("li",{className:"py-3 text-sm text-slate-400",children:"此層目前沒有可掃房間"})]}),k.jsxs("div",{className:"flex justify-between",children:[k.jsx("button",{className:"rounded-lg px-3 py-2 text-sm text-red-600",onClick:i,children:"清除自訂（回自動）"}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-slate-600",onClick:s,children:"取消"}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white",onClick:()=>r(o),children:"儲存"})]})]})]})})}function uR(t){return t.open?k.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6",onClick:t.onCancel,children:k.jsxs("div",{className:"w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl",onClick:e=>e.stopPropagation(),children:[k.jsx("h3",{className:"text-base font-bold text-slate-900",children:t.title}),k.jsx("p",{className:"mt-2 text-sm text-slate-600",children:t.message}),k.jsxs("div",{className:"mt-5 flex justify-end gap-2",children:[k.jsx("button",{className:"rounded-lg px-4 py-2 text-sm text-slate-600",onClick:t.onCancel,children:"取消"}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white",onClick:t.onConfirm,children:"確定"})]})]})}):null}function EM({toasts:t}){return k.jsx("div",{className:"pointer-events-none fixed bottom-4 left-0 right-0 z-50 flex flex-col items-center gap-2 px-4",children:t.map(e=>k.jsx("div",{className:"rounded-lg bg-slate-900/90 px-4 py-2 text-sm text-white shadow-lg",children:e.text},e.id))})}function TM({rooms:t,settings:e,role:n,isDemo:r,repo:i,dayKey:s,onOpenSettings:o,onSignOut:a}){const[u,c]=Z.useState("A"),[d,f]=Z.useState(n==="housekeeping"?"clean":"normal"),[m,y]=Z.useState(new Set),[A,C]=Z.useState([]),[D,E]=Z.useState(null),[I,v]=Z.useState(null),[V,F]=Z.useState({}),[O,w]=Z.useState(null),g=n==="housekeeping"?"clean":d,T=n==="front";Z.useEffect(()=>{const K=[];for(const re of bc)for(const te of e.floors){const oe=`${re}-${te}`;K.push(i.subscribeOrder(s,oe,ln=>F(Oo=>({...Oo,[oe]:ln}))))}return()=>K.forEach(re=>re())},[i,s,e.floors]);function S(K){const re=Date.now()+Math.random();C(te=>[...te,{id:re,text:K}]),setTimeout(()=>C(te=>te.filter(oe=>oe.id!==re)),2e3)}async function P(K){const re=K.map(te=>te.roomId);y(te=>new Set([...te,...re]));try{await i.bulkUpdate(K)}catch{S("儲存失敗，請重試")}finally{y(te=>{const oe=new Set(te);return re.forEach(ln=>oe.delete(ln)),oe})}}const N=Z.useMemo(()=>{const K=new Map;for(const re of t.filter(te=>te.building===u))K.has(re.floor)||K.set(re.floor,[]),K.get(re.floor).push(re);for(const re of K.values())re.sort((te,oe)=>te.no.localeCompare(oe.no,"en",{numeric:!0}));return K},[t,u]),R=Z.useMemo(()=>{const K=new Map,re=t.filter(te=>te.building===u);if(u==="A")for(const{room:te,seq:oe}of cM(re,V))K.set(te.id,oe);else{const te=new Map;for(const oe of re)te.has(oe.floor)||te.set(oe.floor,[]),te.get(oe.floor).push(oe);for(const[oe,ln]of te)for(const{room:Oo,seq:is}of uM(ln,V[`${u}-${oe}`]))K.set(Oo.id,is)}return K},[t,u,V]);function Dt(K){if(g==="clean"){if(K.status==="occupied"){S("入住中不可掃");return}K.status==="clean"?P([{roomId:K.id,patch:{status:K.prevStatus??"dirty",prevStatus:null}}]):P([{roomId:K.id,patch:{prevStatus:K.status,status:"clean"}}]);return}n==="front"&&(K.status==="occupied"?P([{roomId:K.id,patch:{status:K.nextGuest?"arriving":"dirty",checkedOutAt:Date.now(),checkInTime:null,prevStatus:null}}]):P([{roomId:K.id,patch:{status:"occupied",nextGuest:!1,checkedOutAt:null,prevStatus:null}}]))}function bn(K){n!=="front"||K.status==="occupied"||(K.status==="clean"?P([{roomId:K.id,patch:{status:K.prevStatus??"dirty",prevStatus:null}}]):P([{roomId:K.id,patch:{prevStatus:K.status,status:"clean"}}]))}function ci(K){if(n!=="front")return;const re=!K.nextGuest,te={nextGuest:re};re&&K.status!=="occupied"&&(te.status="arriving"),!re&&K.status==="arriving"&&!K.checkInTime&&(te.status="dirty"),P([{roomId:K.id,patch:te}])}function an(K){if(!D)return;const re={checkInTime:K,nextGuest:!0};(D.status==="dirty"||D.status==="clean")&&(re.status="arriving"),P([{roomId:D.id,patch:re}]),E(null)}function W(){D&&(P([{roomId:D.id,patch:{checkInTime:null}}]),E(null))}function ee(){const K=t.filter(oe=>oe.building===u),re=K.filter(oe=>oe.nextGuest).length,te=xi[u];w({title:`一鍵滿房 ${te}`,message:`${K.length} 間將全部亮燈，設有「後續入住」的房間會維持待入住。確定？`,onOk:()=>{w(null);const oe=K.map(ln=>ln.nextGuest?{roomId:ln.id,patch:{status:"arriving",checkedOutAt:null}}:{roomId:ln.id,patch:{status:"occupied",checkedOutAt:null}});P(oe),S(`${te}已滿房${re?`（跳過 ${re} 間後續入住）`:""}`)}})}function ie(){const K=t.filter(te=>te.building===u),re=xi[u];w({title:`一鍵未入住（${re}）`,message:`將 ${K.length} 間房全部設為「未入住」，並清除入住時間與後續入住標記，確定嗎？`,onOk:()=>{w(null),P(K.map(te=>({roomId:te.id,patch:{status:"dirty",checkInTime:null,nextGuest:!1,checkedOutAt:null,prevStatus:null}}))),S(`${re}已全部設為未入住`)}})}function Te(){const K=pk(s);w({title:"換日",message:`建立 ${K} 的一天？今天的紀錄會保留。`,onOk:async()=>{w(null);try{await i.resetDay(s,K),S(`已建立 ${K}`)}catch{S("換日失敗，請重試")}}})}const me=u==="A"?"grid-cols-2 sm:grid-cols-4":"grid-cols-4 sm:grid-cols-6",Le=I===null?[]:(N.get(I)??[]).filter(K=>K.status==="arriving"||K.status==="dirty");return k.jsxs("div",{className:"min-h-full bg-slate-100 pb-10",children:[k.jsx(dM,{building:u,onBuilding:c,role:n,mode:g,onMode:()=>f(K=>K==="clean"?"normal":"clean"),dayKey:s,isDemo:r,onFillHouse:ee,onClearHouse:ie,onResetDay:Te,onSettings:o,onSignOut:a}),k.jsx("main",{className:"px-4 py-4",children:e.floors.map(K=>{const re=N.get(K)??[];if(re.length===0)return null;const te=`${u}-${K}`;return k.jsx(fM,{building:u,floor:K,rooms:re,columns:me,canCustomOrder:T,hasCustomOrder:(V[te]??[]).length>0,onCustomOrder:()=>v(K),renderCard:oe=>k.jsx(gM,{room:oe,seq:R.get(oe.id)??null,role:n,mode:g,pending:m.has(oe.id),onCardClick:Dt,onLongPressTime:E,onToggleNextGuest:ci,onMarkClean:bn},oe.id)},K)})}),D&&k.jsx(IM,{room:D,onConfirm:an,onClear:W,onClose:()=>E(null)}),I!==null&&k.jsx(wM,{title:`${xi[u]} ${I}F`,rooms:Le,ids:V[`${u}-${I}`]??[],onSave:async K=>{v(null);try{await i.saveOrder(s,`${u}-${I}`,K)}catch{S("儲存失敗，請重試")}},onClear:async()=>{v(null);try{await i.clearOrder(s,`${u}-${I}`)}catch{S("儲存失敗，請重試")}},onClose:()=>v(null)}),k.jsx(uR,{open:!!O,title:(O==null?void 0:O.title)??"",message:(O==null?void 0:O.message)??"",onConfirm:()=>O==null?void 0:O.onOk(),onCancel:()=>w(null)}),k.jsx(EM,{toasts:A})]})}function SM({meta:t,onCommit:e,onToggle:n,onDelete:r}){const[i,s]=Z.useState(t.no),[o,a]=Z.useState(null);Z.useEffect(()=>{s(t.no),a(null)},[t.no,t.id]);function u(){if(i===t.no){a(null);return}const c=e(i);c?(a(c),s(t.no)):a(null)}return k.jsxs("div",{className:"flex items-center gap-2 py-1",children:[k.jsx("input",{value:i,inputMode:"numeric",maxLength:4,onChange:c=>{s(c.target.value),a(null)},onBlur:u,onKeyDown:c=>{c.key==="Enter"&&c.target.blur()},className:`w-20 rounded-lg border p-1 text-center text-sm tabular-nums ${o?"border-red-500":"border-slate-300"}`}),k.jsx("button",{onClick:n,className:`rounded-lg px-2 py-1 text-xs ${t.enabled?"bg-slate-900 text-white":"bg-slate-100 text-slate-400 line-through"}`,children:t.enabled?"啟用":"停用"}),k.jsx("button",{onClick:r,className:"rounded-lg bg-red-50 px-2 py-1 text-xs text-red-600",children:"🗑 刪除"}),o&&k.jsx("span",{className:"text-xs text-red-600",children:o})]})}function AM({settings:t,repo:e,role:n,isDemo:r,email:i,onBack:s,onSignOut:o,onOpenAccounts:a}){const u=t.floors,[c,d]=Z.useState([]),[f,m]=Z.useState(null),[y,A]=Z.useState(!1);Z.useEffect(()=>{const O=e.subscribeRooms(d);return()=>O()},[e]);const C=Z.useMemo(()=>{const O=new Map;for(const w of c){const g=`${w.building}-${w.floor}`;O.has(g)||O.set(g,[]),O.get(g).push(w)}for(const w of O.values())w.sort((g,T)=>g.no.localeCompare(T.no,"en",{numeric:!0}));return O},[c]);function D(){window.alert("儲存失敗，請重試")}function E(O,w){const g=w.trim();return yk(g)?lv(c,O.building,g,O.id)?"同館號碼重複":(A(!0),e.updateRoomNo(O.id,g).catch(D).finally(()=>A(!1)),null):"需為 3–4 位數字"}async function I(O){A(!0);try{await e.setRoomEnabled(O.id,!O.enabled)}catch{D()}finally{A(!1)}}function v(O){m({message:`確定刪除房間 ${O.no}？該房當天的紀錄也會移除。`,onOk:async()=>{m(null),A(!0);try{await e.removeRoom(O.id)}catch{D()}finally{A(!1)}}})}function V(O,w){let T=c.filter(S=>S.building===O).reduce((S,P)=>Math.max(S,parseInt(P.no,10)||0),0)+1;for(T<100&&(T=w*100+1);lv(c,O,String(T));)T++;return String(T)}async function F(O,w){A(!0);try{await e.addRoom(O,w,V(O,w))}catch{D()}finally{A(!1)}}return k.jsxs("div",{className:"min-h-full bg-slate-100 pb-10",children:[k.jsxs("header",{className:"sticky top-0 z-40 flex items-center gap-2 border-b bg-white px-4 py-3",children:[k.jsx("button",{className:"text-sm text-slate-600",onClick:s,children:"← 返回"}),k.jsx("h1",{className:"text-base font-bold",children:"設定"})]}),k.jsxs("main",{className:"px-4 py-4",children:[k.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[k.jsx("h2",{className:"text-sm font-semibold text-slate-500",children:"房間（房號可自訂）"}),k.jsxs("span",{className:"text-sm text-slate-600",children:[bc.map(O=>`${xi[O]} ${_k(c,O)} 間`).join(" / ")," / 合計 ",c.length," 間"]})]}),bc.map(O=>k.jsxs("div",{className:"mb-4 rounded-2xl bg-white p-3",children:[k.jsx("div",{className:"mb-2 text-sm font-bold text-slate-700",children:xi[O]}),u.map(w=>k.jsxs("div",{className:"mb-2 border-t border-slate-100 pt-2",children:[k.jsxs("div",{className:"mb-1 flex items-center justify-between",children:[k.jsxs("span",{className:"text-xs font-semibold text-slate-500",children:[w,"F"]}),k.jsx("button",{className:"rounded-lg bg-indigo-600 px-2 py-0.5 text-xs text-white",onClick:()=>F(O,w),disabled:y,children:"＋ 新增房間"})]}),(C.get(`${O}-${w}`)??[]).map(g=>k.jsx(SM,{meta:g,onCommit:T=>E(g,T),onToggle:()=>I(g),onDelete:()=>v(g)},g.id)),(C.get(`${O}-${w}`)??[]).length===0&&k.jsx("div",{className:"py-1 text-xs text-slate-400",children:"（此層尚無房間）"})]},w))]},O)),k.jsx("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:"帳號"}),k.jsxs("div",{className:"rounded-2xl bg-white p-3 text-sm text-slate-600",children:[k.jsxs("div",{children:["帳號：",i||"（未登入）"]}),k.jsxs("div",{children:["角色：",n==="front"?"櫃台":"房務"]}),r&&k.jsx("div",{className:"text-amber-700",children:"DEMO 模式（資料不共用）"}),n==="front"&&k.jsx("button",{className:"mt-2 block text-indigo-600",onClick:a,children:"→ 帳號管理"}),k.jsx("button",{className:"mt-2 text-red-600",onClick:o,children:"登出"})]})]}),k.jsx(uR,{open:!!f,title:"確認",message:(f==null?void 0:f.message)??"",onConfirm:()=>f==null?void 0:f.onOk(),onCancel:()=>m(null)})]})}function RM(t){return t.sort((e,n)=>{const r=e.role==="front"?0:1,i=n.role==="front"?0:1;return r!==i?r-i:e.email.localeCompare(n.email)})}async function PM(){const{collection:t,getDocs:e}=await Gt(async()=>{const{collection:r,getDocs:i}=await Promise.resolve().then(()=>Bh);return{collection:r,getDocs:i}},void 0,import.meta.url),n=await e(t($l(),"sq-staff"));return RM(n.docs.map(r=>{const i=r.data();return{uid:r.id,email:i.email||"",role:i.role||"housekeeping",name:i.name||"",note:i.note||"",disabled:i.disabled===!0,deleted:i.deleted===!0}}))}async function Vo(t,e){const{doc:n,updateDoc:r}=await Gt(async()=>{const{doc:i,updateDoc:s}=await Promise.resolve().then(()=>Bh);return{doc:i,updateDoc:s}},void 0,import.meta.url);await r(n($l(),"sq-staff",t),e)}const CM=(t,e)=>Vo(t,{role:e}),kM=(t,e)=>Vo(t,{note:e}),xM=t=>Vo(t,{disabled:!0}),NM=t=>Vo(t,{disabled:!1}),bM=t=>Vo(t,{deleted:!0,disabled:!0,deletedAt:Date.now()}),DM=t=>Vo(t,{deleted:!1,disabled:!1}),VM="saofang.local";function OM(t){const e=t.trim();return e?e.includes("@")?e.toLowerCase():`${e.toLowerCase()}@${VM}`:""}async function LM(t){const e=OM(t.username);if(!/^[a-z0-9._-]{3,}@/.test(e))throw new Error("帳號需 3 位以上英數");if(!t.password||t.password.length<6)throw new Error("密碼至少 6 碼");const{initializeApp:n,deleteApp:r}=await Gt(async()=>{const{initializeApp:m,deleteApp:y}=await Promise.resolve().then(()=>AV);return{initializeApp:m,deleteApp:y}},void 0,import.meta.url),{getAuth:i,createUserWithEmailAndPassword:s,signOut:o,deleteUser:a}=await Gt(async()=>{const{getAuth:m,createUserWithEmailAndPassword:y,signOut:A,deleteUser:C}=await Promise.resolve().then(()=>eh);return{getAuth:m,createUserWithEmailAndPassword:y,signOut:A,deleteUser:C}},void 0,import.meta.url),{firebaseConfig:u}=await Gt(async()=>{const{firebaseConfig:m}=await Promise.resolve().then(()=>th);return{firebaseConfig:m}},void 0,import.meta.url),c=n(u(),`saofang-prov-${Date.now()}`),d=i(c);let f=null;try{f=await s(d,e,t.password);const{doc:m,setDoc:y}=await Gt(async()=>{const{doc:A,setDoc:C}=await Promise.resolve().then(()=>Bh);return{doc:A,setDoc:C}},void 0,import.meta.url);await y(m($l(),"sq-staff",f.user.uid),{role:t.role,name:"",note:t.note,email:e,disabled:!1,deleted:!1,createdAt:Date.now()})}catch(m){throw f&&await a(f.user).catch(()=>{}),(m==null?void 0:m.code)==="auth/email-already-in-use"?new Error("此帳號已存在"):m}finally{await o(d).catch(()=>{}),await r(c).catch(()=>{})}}function MM({value:t,onSave:e}){const[n,r]=Z.useState(t);return Z.useEffect(()=>{r(t)},[t]),k.jsx("input",{value:n,placeholder:"備註（中文名）",onChange:i=>r(i.target.value),onBlur:()=>{n!==t&&e(n.trim())},onKeyDown:i=>{i.key==="Enter"&&i.target.blur()},className:"w-32 rounded-lg border border-slate-200 px-2 py-1 text-xs"})}function FM({onBack:t,selfUid:e}){const[n,r]=Z.useState([]),[i,s]=Z.useState(!0),[o,a]=Z.useState(null),[u,c]=Z.useState(!1),[d,f]=Z.useState({username:"",password:"",role:"housekeeping",note:""}),[m,y]=Z.useState(!1);async function A(){s(!0);try{r(await PM())}catch(v){a("讀取帳號失敗："+(v instanceof Error?v.message:"錯誤"))}finally{s(!1)}}Z.useEffect(()=>{A()},[]);function C(v){a(v),setTimeout(()=>a(null),3e3)}async function D(v,V){c(!0);try{await v(),await A(),C(V)}catch(F){C("操作失敗："+(F instanceof Error?F.message:"錯誤"))}finally{c(!1)}}const E=n.filter(v=>!v.deleted),I=n.filter(v=>v.deleted);return k.jsxs("div",{className:"min-h-full bg-slate-100 pb-10",children:[k.jsxs("header",{className:"sticky top-0 z-40 flex items-center gap-2 border-b bg-white px-4 py-3",children:[k.jsx("button",{className:"text-sm text-slate-600",onClick:t,children:"← 返回"}),k.jsx("h1",{className:"text-base font-bold",children:"帳號管理"})]}),k.jsxs("main",{className:"px-4 py-4",children:[o&&k.jsx("div",{className:"mb-3 rounded-lg bg-slate-900/90 px-3 py-2 text-sm text-white",children:o}),k.jsxs("section",{className:"mb-4 rounded-2xl bg-white p-3",children:[k.jsx("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:"新增帳號"}),k.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[k.jsx("input",{className:"rounded-lg border border-slate-300 p-2 text-sm",placeholder:"短帳號（如 WIND01）",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1,value:d.username,onChange:v=>f({...d,username:v.target.value})}),k.jsx("input",{className:"rounded-lg border border-slate-300 p-2 text-sm",placeholder:"備註（中文名）",value:d.note,onChange:v=>f({...d,note:v.target.value})}),k.jsxs("div",{className:"pw-wrap flex items-center",style:{position:"relative"},children:[k.jsx("input",{type:m?"text":"password",className:"w-full rounded-lg border border-slate-300 p-2 text-sm",style:{paddingRight:48},placeholder:"密碼（≥6）",value:d.password,onChange:v=>f({...d,password:v.target.value})}),k.jsx("button",{type:"button",className:"absolute right-2 text-xs text-slate-500",onClick:()=>y(v=>!v),children:m?"隱藏":"顯示"})]}),k.jsxs("select",{className:"rounded-lg border border-slate-300 p-2 text-sm",value:d.role,onChange:v=>f({...d,role:v.target.value}),children:[k.jsx("option",{value:"housekeeping",children:"房務"}),k.jsx("option",{value:"front",children:"櫃台"})]})]}),k.jsx("button",{disabled:u,className:"mt-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60",onClick:()=>D(async()=>{await LM(d),f({username:"",password:"",role:"housekeeping",note:""})},"已建立帳號"),children:"建立"}),k.jsx("p",{className:"mt-1 text-xs text-slate-400",children:"短帳號會自動補 @saofang.local；建立後即可用該帳密登入。"})]}),k.jsxs("div",{className:"mb-4 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900",children:["「刪除」＝收回權限並放入保留區（可復原）。若要「永久刪除」或重設密碼，請在電腦執行：",k.jsx("br",{}),k.jsxs("code",{className:"mt-1 block whitespace-pre-wrap break-all rounded bg-white/70 p-1",children:["node tools/set-account.mjs <帳號> --remove",`
`,"node tools/set-account.mjs <帳號> --password <新密碼>"]})]}),k.jsxs("section",{className:"mb-4 rounded-2xl bg-white p-3",children:[k.jsxs("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:["帳號（",E.length,"）"]}),i&&k.jsx("div",{className:"text-sm text-slate-400",children:"載入中…"}),E.map(v=>{const V=v.uid===e;return k.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-t border-slate-100 py-2",children:[k.jsxs("div",{className:"min-w-[150px] flex-1",children:[k.jsxs("div",{className:"text-sm font-semibold",children:[v.role==="front"&&k.jsx("span",{className:"mr-1 rounded bg-indigo-600 px-1 py-0.5 text-[10px] text-white",children:"櫃台"}),v.email||v.uid,V&&k.jsx("span",{className:"ml-1 rounded bg-slate-200 px-1 py-0.5 text-[10px] text-slate-600",children:"本人"})]}),k.jsx("div",{className:"text-xs text-slate-500",children:v.disabled?k.jsx("span",{className:"text-amber-600",children:"已停用"}):"正常"})]}),V?k.jsx("div",{className:"text-xs text-slate-400",children:"本人帳號不可在此停用或刪除"}):k.jsxs(k.Fragment,{children:[k.jsx(MM,{value:v.note,onSave:F=>D(()=>kM(v.uid,F),"已更新備註")}),k.jsxs("select",{className:"rounded-lg border border-slate-300 p-1 text-xs",value:v.role,disabled:u,onChange:F=>D(()=>CM(v.uid,F.target.value),"已更新角色"),children:[k.jsx("option",{value:"housekeeping",children:"房務"}),k.jsx("option",{value:"front",children:"櫃台"})]}),v.disabled?k.jsx("button",{disabled:u,className:"rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white",onClick:()=>D(()=>NM(v.uid),"已啟用"),children:"啟用"}):k.jsx("button",{disabled:u,className:"rounded-lg bg-amber-100 px-2 py-1 text-xs text-amber-800",onClick:()=>D(()=>xM(v.uid),"已停用"),children:"停用"}),k.jsx("button",{disabled:u,className:"rounded-lg bg-red-50 px-2 py-1 text-xs text-red-600",onClick:()=>D(()=>bM(v.uid),"已移至保留區"),children:"刪除"})]})]},v.uid)})]}),k.jsxs("section",{className:"rounded-2xl bg-slate-200 p-3",children:[k.jsxs("h2",{className:"mb-2 text-sm font-semibold text-slate-500",children:["保留區（",I.length,"）"]}),I.map(v=>k.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-t border-slate-300 py-2",children:[k.jsxs("div",{className:"min-w-[150px] flex-1",children:[k.jsx("div",{className:"text-sm font-semibold text-slate-500 line-through",children:v.email||v.uid}),k.jsx("div",{className:"text-xs text-slate-400",children:v.note})]}),k.jsx("button",{disabled:u,className:"rounded-lg bg-emerald-600 px-2 py-1 text-xs text-white",onClick:()=>D(()=>DM(v.uid),"已復原"),children:"復原"})]},v.uid)),I.length===0&&k.jsx("div",{className:"py-2 text-xs text-slate-400",children:"（沒有已刪除帳號）"})]})]})]})}function UM(t,e){const n=document.getElementById(t);if(!n)return;const r=n.type==="password";n.type=r?"text":"password",e.innerHTML=r?'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>':'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'}const jM="saofang.local";function BM(){const[t,e]=Z.useState(""),[n,r]=Z.useState(""),[i,s]=Z.useState(null),[o,a]=Z.useState(!1);async function u(c){c.preventDefault(),s(null),a(!0);try{const{authClient:d}=await Gt(async()=>{const{authClient:A}=await Promise.resolve().then(()=>th);return{authClient:A}},void 0,import.meta.url),{signInWithEmailAndPassword:f}=await Gt(async()=>{const{signInWithEmailAndPassword:A}=await Promise.resolve().then(()=>eh);return{signInWithEmailAndPassword:A}},void 0,import.meta.url),m=t.trim().toLowerCase(),y=m.includes("@")?m:`${m}@${jM}`;await f(d(),y,n)}catch{s("登入失敗，請檢查帳號密碼")}finally{a(!1)}}return k.jsx("div",{className:"flex min-h-full items-center justify-center bg-slate-100 px-6",children:k.jsxs("form",{onSubmit:u,className:"w-full max-w-sm rounded-2xl bg-white p-6 shadow",children:[k.jsx("h1",{className:"mb-1 text-lg font-bold text-slate-900",children:"民宿掃房順序"}),k.jsx("p",{className:"mb-5 text-xs text-slate-500",children:"請以櫃台或房務帳號登入"}),k.jsx("label",{className:"mb-1 block text-sm text-slate-600",children:"帳號"}),k.jsx("input",{type:"text",value:t,onChange:c=>e(c.target.value),className:"mb-3 w-full rounded-lg border border-slate-300 p-2 text-sm",autoComplete:"username",autoCapitalize:"none",autoCorrect:"off",spellCheck:!1}),k.jsx("label",{className:"mb-1 block text-sm text-slate-600",children:"密碼"}),k.jsxs("div",{className:"pw-wrap mb-4 flex items-center",style:{position:"relative"},children:[k.jsx("input",{id:"login-pw",type:"password",value:n,onChange:c=>r(c.target.value),className:"w-full rounded-lg border border-slate-300 p-2 text-sm",style:{paddingRight:40},autoComplete:"current-password"}),k.jsx("button",{type:"button",className:"pw-toggle absolute right-2",onClick:c=>UM("login-pw",c.currentTarget),"aria-label":"顯示或隱藏密碼",children:k.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#666",strokeWidth:"2",children:[k.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),k.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),i&&k.jsx("div",{className:"mb-3 text-sm text-red-600",children:i}),k.jsx("button",{type:"submit",disabled:o,className:"w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white disabled:opacity-60",children:o?"登入中…":"登入"})]})})}function zM(){const t=fk(),e=lM();return e.loading?k.jsx("div",{className:"flex h-full items-center justify-center text-slate-500",children:"載入中…"}):e.role?k.jsx($M,{dayKey:t,auth:e}):k.jsx(BM,{})}function $M({dayKey:t,auth:e}){const{rooms:n,settings:r,repo:i}=sM(t),[s,o]=Z.useState("main");return s==="accounts"&&e.role==="front"?k.jsx(FM,{onBack:()=>o("settings"),selfUid:e.uid}):s==="settings"?k.jsx(AM,{settings:r,repo:i,role:e.role,isDemo:e.isDemo,email:e.email,onBack:()=>o("main"),onSignOut:async()=>{await e.signOut(),o("main")},onOpenAccounts:()=>o("accounts")}):k.jsx(TM,{rooms:n,settings:r,role:e.role,isDemo:e.isDemo,repo:i,dayKey:t,onOpenSettings:()=>o("settings"),onSignOut:async()=>{await e.signOut(),o("main")}})}ff.createRoot(document.getElementById("root")).render(k.jsx(tP.StrictMode,{children:k.jsx(zM,{})}));
