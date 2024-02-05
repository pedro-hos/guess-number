import{a as se,Q as Te}from"./QPage.b718a80c.js";import{d as we,Q as te}from"./QBtn.a357d353.js";import{i as ze,r as M,o as oe,d as je,w as D,a as me,Z as Le,g as re,c as w,y as Ne,$ as Be,a0 as Ue,s as De,b as ee,z as Ke,A as Ze,h as A,t as ae,W as He,a1 as Qe,k as Ge,u as _e,_ as Ce,a2 as Ye,K as j,Q as W,Y as C,a3 as ge,T as ye,N as le,S as fe,R as Me,L as X,a4 as We,U as J,a5 as be,M as Je,a6 as Xe,a7 as et}from"./index.d89efe97.js";import{Q as tt,h as ie,c as lt}from"./QSpinner.c244af3a.js";import{u as nt,a as ot}from"./use-dark.70cc0e11.js";let he,ue=0;const z=new Array(256);for(let e=0;e<256;e++)z[e]=(e+256).toString(16).substring(1);const at=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let n=t;n>0;n--)l.push(Math.floor(Math.random()*256));return l}})(),Se=4096;function $e(){(he===void 0||ue+16>Se)&&(ue=0,he=at(Se));const e=Array.prototype.slice.call(he,ue,ue+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,z[e[0]]+z[e[1]]+z[e[2]]+z[e[3]]+"-"+z[e[4]]+z[e[5]]+"-"+z[e[6]]+z[e[7]]+"-"+z[e[8]]+z[e[9]]+"-"+z[e[10]]+z[e[11]]+z[e[12]]+z[e[13]]+z[e[14]]+z[e[15]]}function Oe(e,t){return e===void 0?t===!0?`f_${$e()}`:void 0:e}function rt(e,t=!0){if(ze.value===!0){const l=M(e);return t===!0&&e===void 0&&oe(()=>{l.value=`f_${$e()}`}),l}return M(Oe(e,t))}function st({validate:e,resetValidation:t,requiresQForm:l}){const n=je(Le,!1);if(n!==!1){const{props:d,proxy:u}=re();Object.assign(u,{validate:e,resetValidation:t}),D(()=>d.disable,f=>{f===!0?(typeof t=="function"&&t(),n.unbindComponent(u)):n.bindComponent(u)}),oe(()=>{d.disable!==!0&&n.bindComponent(u)}),me(()=>{d.disable!==!0&&n.unbindComponent(u)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const qe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Re=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Ae=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,de=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ce=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,pe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>qe.test(e),hexaColor:e=>Re.test(e),hexOrHexaColor:e=>Ae.test(e),rgbColor:e=>de.test(e),rgbaColor:e=>ce.test(e),rgbOrRgbaColor:e=>de.test(e)||ce.test(e),hexOrRgbColor:e=>qe.test(e)||de.test(e),hexaOrRgbaColor:e=>Re.test(e)||ce.test(e),anyColor:e=>Ae.test(e)||de.test(e)||ce.test(e)},it=[!0,!1,"ondemand"],ut={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>it.includes(e)}};function dt(e,t){const{props:l,proxy:n}=re(),d=M(!1),u=M(null),f=M(!1);st({validate:N,resetValidation:L});let v=0,S;const x=w(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),p=w(()=>l.disable!==!0&&x.value===!0&&t.value===!1),m=w(()=>l.error===!0||d.value===!0),Z=w(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:u.value);D(()=>l.modelValue,()=>{f.value=!0,p.value===!0&&l.lazyRules===!1&&T()});function E(){l.lazyRules!=="ondemand"&&p.value===!0&&f.value===!0&&T()}D(()=>l.reactiveRules,K=>{K===!0?S===void 0&&(S=D(()=>l.rules,E,{immediate:!0,deep:!0})):S!==void 0&&(S(),S=void 0)},{immediate:!0}),D(()=>l.lazyRules,E),D(e,K=>{K===!0?f.value=!0:p.value===!0&&l.lazyRules!=="ondemand"&&T()});function L(){v++,t.value=!1,f.value=!1,d.value=!1,u.value=null,T.cancel()}function N(K=l.modelValue){if(l.disable===!0||x.value===!1)return!0;const V=++v,G=t.value!==!0?()=>{f.value=!0}:()=>{},B=(k,q)=>{k===!0&&G(),d.value=k,u.value=q||null,t.value=!1},O=[];for(let k=0;k<l.rules.length;k++){const q=l.rules[k];let I;if(typeof q=="function"?I=q(K,pe):typeof q=="string"&&pe[q]!==void 0&&(I=pe[q](K)),I===!1||typeof I=="string")return B(!0,I),!1;I!==!0&&I!==void 0&&O.push(I)}return O.length===0?(B(!1),!0):(t.value=!0,Promise.all(O).then(k=>{if(k===void 0||Array.isArray(k)===!1||k.length===0)return V===v&&B(!1),!0;const q=k.find(I=>I===!1||typeof I=="string");return V===v&&B(q!==void 0,q),q===void 0},k=>(V===v&&(console.error(k),B(!0)),!1)))}const T=Ne(N,0);return me(()=>{S!==void 0&&S(),T.cancel()}),Object.assign(n,{resetValidation:L,validate:N}),Be(n,"hasError",()=>m.value),{isDirtyModel:f,hasRules:x,hasError:m,errorMessage:Z,validate:N,resetValidation:L}}const Ve=/^on[A-Z]/;function ct(e,t){const l={listeners:M({}),attributes:M({})};function n(){const d={},u={};for(const f in e)f!=="class"&&f!=="style"&&Ve.test(f)===!1&&(d[f]=e[f]);for(const f in t.props)Ve.test(f)===!0&&(u[f]=t.props[f]);l.attributes.value=d,l.listeners.value=u}return Ue(n),n(),l}let xe=[],ft=[];function Pe(e){ft.length===0?e():xe.push(e)}function vt(e){xe=xe.filter(t=>t!==e)}function ke(e){return e!=null&&(""+e).length!==0}const mt={...nt,...ut,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},gt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ht({requiredForAttr:e=!0,tagProp:t}={}){const{props:l,attrs:n,proxy:d,vnode:u}=re(),f=ot(l,d.$q),v=rt(l.for,e);return{requiredForAttr:e,tag:t===!0?w(()=>l.tag):{value:"label"},isDark:f,editable:w(()=>l.disable!==!0&&l.readonly!==!0),innerLoading:M(!1),focused:M(!1),hasPopupOpen:!1,splitAttrs:ct(n,u),targetUid:v,rootRef:M(null),targetRef:M(null),controlRef:M(null)}}function pt(e){const{props:t,emit:l,slots:n,attrs:d,proxy:u}=re(),{$q:f}=u;let v=null;e.hasValue===void 0&&(e.hasValue=w(()=>ke(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{l("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:r}),Object.assign(e,{clearValue:c,onControlFocusin:s,onControlFocusout:r,focus:q}),e.computedCounter===void 0&&(e.computedCounter=w(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:S,hasRules:x,hasError:p,errorMessage:m,resetValidation:Z}=dt(e.focused,e.innerLoading),E=e.floatingLabel!==void 0?w(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):w(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),L=w(()=>t.bottomSlots===!0||t.hint!==void 0||x.value===!0||t.counter===!0||t.error!==null),N=w(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=w(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(E.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(p.value===!0?" q-field--error":"")+(p.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&L.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),K=w(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(p.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),V=w(()=>t.labelSlot===!0||t.label!==void 0),G=w(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&p.value!==!0?` text-${t.labelColor}`:"")),B=w(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:E.value,modelValue:t.modelValue,emitValue:e.emitValue})),O=w(()=>{const o={};return e.targetUid.value&&(o.for=e.targetUid.value),t.disable===!0&&(o["aria-disabled"]="true"),o});D(()=>t.for,o=>{e.targetUid.value=Oe(o,e.requiredForAttr)});function k(){const o=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(o===null||o.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==o&&h.focus({preventScroll:!0}))}function q(){Pe(k)}function I(){vt(k);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function s(o){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",o))}function r(o,h){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",o)),h!==void 0&&h())})}function c(o){De(o),f.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),ee(()=>{const h=S.value;Z(),S.value=h})}function i(){const o=[];return n.prepend!==void 0&&o.push(A("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:ae},n.prepend())),o.push(A("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},y())),p.value===!0&&t.noErrorIcon===!1&&o.push(R("error",[A(we,{name:f.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push(R("inner-loading-append",n.loading!==void 0?n.loading():[A(tt,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push(R("inner-clearable-append",[A(we,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||f.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:c})])),n.append!==void 0&&o.push(A("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:ae},n.append())),e.getInnerAppend!==void 0&&o.push(R("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function y(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(A("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):n.rawControl!==void 0?o.push(n.rawControl()):n.control!==void 0&&o.push(A("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(B.value))),V.value===!0&&o.push(A("div",{class:G.value},ie(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(A("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(ie(n.default))}function g(){let o,h;p.value===!0?m.value!==null?(o=[A("div",{role:"alert"},m.value)],h=`q--slot-error-${m.value}`):(o=ie(n.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[A("div",t.hint)],h=`q--slot-hint-${t.hint}`):(o=ie(n.hint),h="q--slot-hint"));const H=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&H===!1&&o===void 0)return;const _=A("div",{key:h,class:"q-field__messages col"},o);return A("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:ae},[t.hideBottomSpace===!0?_:A(He,{name:"q-transition--field-message"},()=>_),H===!0?A("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function R(o,h){return h===null?null:A("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let b=!1;return Ke(()=>{b=!0}),Ze(()=>{b===!0&&t.autofocus===!0&&u.focus()}),t.autofocus===!0&&oe(()=>{u.focus()}),me(()=>{v!==null&&clearTimeout(v)}),Object.assign(u,{focus:q,blur:I}),function(){const h=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...O.value}:O.value;return A(e.tag.value,{ref:e.rootRef,class:[T.value,d.class],style:d.style,...h},[n.before!==void 0?A("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:ae},n.before()):null,A("div",{class:"q-field__inner relative-position col self-stretch"},[A("div",{ref:e.controlRef,class:K.value,tabindex:-1,...e.controlEvents},i()),L.value===!0?g():null]),n.after!==void 0?A("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:ae},n.after()):null])}}const Fe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ve={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ie=Object.keys(ve);Ie.forEach(e=>{ve[e].regex=new RegExp(ve[e].pattern)});const yt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ie.join("")+"])|(.)","g"),Ee=/[.*+?^${}()|[\]\\]/g,$=String.fromCharCode(1),bt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function xt(e,t,l,n){let d,u,f,v,S,x;const p=M(null),m=M(E());function Z(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,N),D(()=>e.mask,s=>{if(s!==void 0)T(m.value,!0);else{const r=q(m.value);N(),e.modelValue!==r&&t("update:modelValue",r)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&T(m.value,!0)}),D(()=>e.unmaskedValue,()=>{p.value===!0&&T(m.value)});function E(){if(N(),p.value===!0){const s=O(q(e.modelValue));return e.fillMask!==!1?I(s):s}return e.modelValue}function L(s){if(s<d.length)return d.slice(-s);let r="",c=d;const i=c.indexOf($);if(i>-1){for(let y=s-c.length;y>0;y--)r+=$;c=c.slice(0,i)+r+c.slice(i)}return c}function N(){if(p.value=e.mask!==void 0&&e.mask.length!==0&&Z(),p.value===!1){v=void 0,d="",u="";return}const s=Fe[e.mask]===void 0?e.mask:Fe[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",c=r.replace(Ee,"\\$&"),i=[],y=[],g=[];let R=e.reverseFillMask===!0,b="",o="";s.replace(yt,(P,a,F,Y,Q)=>{if(Y!==void 0){const U=ve[Y];g.push(U),o=U.negate,R===!0&&(y.push("(?:"+o+"+)?("+U.pattern+"+)?(?:"+o+"+)?("+U.pattern+"+)?"),R=!1),y.push("(?:"+o+"+)?("+U.pattern+")?")}else if(F!==void 0)b="\\"+(F==="\\"?"":F),g.push(F),i.push("([^"+b+"]+)?"+b+"?");else{const U=a!==void 0?a:Q;b=U==="\\"?"\\\\\\\\":U.replace(Ee,"\\\\$&"),g.push(U),i.push("([^"+b+"]+)?"+b+"?")}});const h=new RegExp("^"+i.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?"+(b===""?"":"["+b+"]*")+"$"),H=y.length-1,_=y.map((P,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+P):a===H?new RegExp("^"+P+"("+(o===""?".":o)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+P));f=g,v=P=>{const a=h.exec(e.reverseFillMask===!0?P:P.slice(0,g.length+1));a!==null&&(P=a.slice(1).join(""));const F=[],Y=_.length;for(let Q=0,U=P;Q<Y;Q++){const ne=_[Q].exec(U);if(ne===null)break;U=U.slice(ne.shift().length),F.push(...ne)}return F.length!==0?F.join(""):P},d=g.map(P=>typeof P=="string"?P:$).join(""),u=d.split($).join(r)}function T(s,r,c){const i=n.value,y=i.selectionEnd,g=i.value.length-y,R=q(s);r===!0&&N();const b=O(R),o=e.fillMask!==!1?I(b):b,h=m.value!==o;i.value!==o&&(i.value=o),h===!0&&(m.value=o),document.activeElement===i&&ee(()=>{if(o===u){const _=e.reverseFillMask===!0?u.length:0;i.setSelectionRange(_,_,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const _=i.selectionEnd;let P=y-1;for(let a=S;a<=P&&a<_;a++)d[a]!==$&&P++;V.right(i,P);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const _=e.reverseFillMask===!0?y===0?o.length>b.length?1:0:Math.max(0,o.length-(o===u?0:Math.min(b.length,g)+1))+1:y;i.setSelectionRange(_,_,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const _=Math.max(0,o.length-(o===u?0:Math.min(b.length,g+1)));_===1&&y===1?i.setSelectionRange(_,_,"forward"):V.rightReverse(i,_)}else{const _=o.length-g;i.setSelectionRange(_,_,"backward")}else if(h===!0){const _=Math.max(0,d.indexOf($),Math.min(b.length,y)-1);V.right(i,_)}else{const _=y-1;V.right(i,_)}});const H=e.unmaskedValue===!0?q(o):o;String(e.modelValue)!==H&&(e.modelValue!==null||H!=="")&&l(H,!0)}function K(s,r,c){const i=O(q(s.value));r=Math.max(0,d.indexOf($),Math.min(i.length,r)),S=r,s.setSelectionRange(r,c,"forward")}const V={left(s,r){const c=d.slice(r-1).indexOf($)===-1;let i=Math.max(0,r-1);for(;i>=0;i--)if(d[i]===$){r=i,c===!0&&r++;break}if(i<0&&d[r]!==void 0&&d[r]!==$)return V.right(s,0);r>=0&&s.setSelectionRange(r,r,"backward")},right(s,r){const c=s.value.length;let i=Math.min(c,r+1);for(;i<=c;i++)if(d[i]===$){r=i;break}else d[i-1]===$&&(r=i);if(i>c&&d[r-1]!==void 0&&d[r-1]!==$)return V.left(s,c);s.setSelectionRange(r,r,"forward")},leftReverse(s,r){const c=L(s.value.length);let i=Math.max(0,r-1);for(;i>=0;i--)if(c[i-1]===$){r=i;break}else if(c[i]===$&&(r=i,i===0))break;if(i<0&&c[r]!==void 0&&c[r]!==$)return V.rightReverse(s,0);r>=0&&s.setSelectionRange(r,r,"backward")},rightReverse(s,r){const c=s.value.length,i=L(c),y=i.slice(0,r+1).indexOf($)===-1;let g=Math.min(c,r+1);for(;g<=c;g++)if(i[g-1]===$){r=g,r>0&&y===!0&&r--;break}if(g>c&&i[r-1]!==void 0&&i[r-1]!==$)return V.leftReverse(s,c);s.setSelectionRange(r,r,"forward")}};function G(s){t("click",s),x=void 0}function B(s){if(t("keydown",s),Qe(s)===!0||s.altKey===!0)return;const r=n.value,c=r.selectionStart,i=r.selectionEnd;if(s.shiftKey||(x=void 0),s.keyCode===37||s.keyCode===39){s.shiftKey&&x===void 0&&(x=r.selectionDirection==="forward"?c:i);const y=V[(s.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(s.preventDefault(),y(r,x===c?i:c),s.shiftKey){const g=r.selectionStart;r.setSelectionRange(Math.min(x,g),Math.max(x,g),"forward")}}else s.keyCode===8&&e.reverseFillMask!==!0&&c===i?(V.left(r,c),r.setSelectionRange(r.selectionStart,i,"backward")):s.keyCode===46&&e.reverseFillMask===!0&&c===i&&(V.rightReverse(r,i),r.setSelectionRange(c,r.selectionEnd,"forward"))}function O(s){if(s==null||s==="")return"";if(e.reverseFillMask===!0)return k(s);const r=f;let c=0,i="";for(let y=0;y<r.length;y++){const g=s[c],R=r[y];if(typeof R=="string")i+=R,g===R&&c++;else if(g!==void 0&&R.regex.test(g))i+=R.transform!==void 0?R.transform(g):g,c++;else return i}return i}function k(s){const r=f,c=d.indexOf($);let i=s.length-1,y="";for(let g=r.length-1;g>=0&&i>-1;g--){const R=r[g];let b=s[i];if(typeof R=="string")y=R+y,b===R&&i--;else if(b!==void 0&&R.regex.test(b))do y=(R.transform!==void 0?R.transform(b):b)+y,i--,b=s[i];while(c===g&&b!==void 0&&R.regex.test(b));else return y}return y}function q(s){return typeof s!="string"||v===void 0?typeof s=="number"?v(""+s):s:v(s)}function I(s){return u.length-s.length<=0?s:e.reverseFillMask===!0&&s.length!==0?u.slice(0,-s.length)+s:s+u.slice(s.length)}return{innerValue:m,hasMask:p,moveCursorForPaste:K,updateMaskValue:T,onMaskedKeydown:B,onMaskedClick:G}}const kt={name:String};function Ct(e){return w(()=>e.name||e.for)}function wt(e,t){function l(){const n=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(u=>{d.items.add(u)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?w(()=>{if(e.type==="file")return l()}):w(l)}const _t=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Mt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,St=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,qt=/[a-z0-9_ -]$/i;function Rt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(Ge.is.firefox===!0?qt.test(l.data)===!1:_t.test(l.data)===!0||Mt.test(l.data)===!0||St.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var At=lt({name:"QInput",inheritAttrs:!1,props:{...mt,...bt,...kt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...gt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:l}){const{proxy:n}=re(),{$q:d}=n,u={};let f=NaN,v,S,x=null,p;const m=M(null),Z=Ct(e),{innerValue:E,hasMask:L,moveCursorForPaste:N,updateMaskValue:T,onMaskedKeydown:K,onMaskedClick:V}=xt(e,t,b,m),G=wt(e,!0),B=w(()=>ke(E.value)),O=Rt(g),k=ht(),q=w(()=>e.type==="textarea"||e.autogrow===!0),I=w(()=>q.value===!0||["text","search","url","tel","password"].includes(e.type)),s=w(()=>{const a={...k.splitAttrs.listeners.value,onInput:g,onPaste:y,onChange:h,onBlur:H,onFocus:_e};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=O,L.value===!0&&(a.onKeydown=K,a.onClick=V),e.autogrow===!0&&(a.onAnimationend=R),a}),r=w(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:Z.value,...k.splitAttrs.attributes.value,id:k.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return q.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});D(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),D(()=>e.modelValue,a=>{if(L.value===!0){if(S===!0&&(S=!1,String(a)===f))return;T(a)}else E.value!==a&&(E.value=a,e.type==="number"&&u.hasOwnProperty("value")===!0&&(v===!0?v=!1:delete u.value));e.autogrow===!0&&ee(o)}),D(()=>e.autogrow,a=>{a===!0?ee(o):m.value!==null&&l.rows>0&&(m.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&ee(o)});function c(){Pe(()=>{const a=document.activeElement;m.value!==null&&m.value!==a&&(a===null||a.id!==k.targetUid.value)&&m.value.focus({preventScroll:!0})})}function i(){m.value!==null&&m.value.select()}function y(a){if(L.value===!0&&e.reverseFillMask!==!0){const F=a.target;N(F,F.selectionStart,F.selectionEnd)}t("paste",a)}function g(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const F=a.target.value;if(a.target.qComposing===!0){u.value=F;return}if(L.value===!0)T(F,!1,a.inputType);else if(b(F),I.value===!0&&a.target===document.activeElement){const{selectionStart:Y,selectionEnd:Q}=a.target;Y!==void 0&&Q!==void 0&&ee(()=>{a.target===document.activeElement&&F.indexOf(a.target.value)===0&&a.target.setSelectionRange(Y,Q)})}e.autogrow===!0&&o()}function R(a){t("animationend",a),o()}function b(a,F){p=()=>{x=null,e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==a&&f!==a&&(f=a,F===!0&&(S=!0),t("update:modelValue",a),ee(()=>{f===a&&(f=NaN)})),p=void 0},e.type==="number"&&(v=!0,u.value=a),e.debounce!==void 0?(x!==null&&clearTimeout(x),u.value=a,x=setTimeout(p,e.debounce)):p()}function o(){requestAnimationFrame(()=>{const a=m.value;if(a!==null){const F=a.parentNode.style,{scrollTop:Y}=a,{overflowY:Q,maxHeight:U}=d.platform.is.firefox===!0?{}:window.getComputedStyle(a),ne=Q!==void 0&&Q!=="scroll";ne===!0&&(a.style.overflowY="hidden"),F.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",ne===!0&&(a.style.overflowY=parseInt(U,10)<a.scrollHeight?"auto":"hidden"),F.marginBottom="",a.scrollTop=Y}})}function h(a){O(a),x!==null&&(clearTimeout(x),x=null),p!==void 0&&p(),t("change",a.target.value)}function H(a){a!==void 0&&_e(a),x!==null&&(clearTimeout(x),x=null),p!==void 0&&p(),v=!1,S=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=E.value!==void 0?E.value:"")})}function _(){return u.hasOwnProperty("value")===!0?u.value:E.value!==void 0?E.value:""}me(()=>{H()}),oe(()=>{e.autogrow===!0&&o()}),Object.assign(k,{innerValue:E,fieldClass:w(()=>`q-${q.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:w(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:b,hasValue:B,floatingLabel:w(()=>B.value===!0&&(e.type!=="number"||isNaN(E.value)===!1)||ke(e.displayValue)),getControl:()=>A(q.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...r.value,...s.value,...e.type!=="file"?{value:_()}:G.value}),getShadowControl:()=>A("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(q.value===!0?"":" text-no-wrap")},[A("span",{class:"invisible"},_()),A("span",e.shadowText)])});const P=pt(k);return Object.assign(n,{focus:c,select:i,getNativeElement:()=>m.value}),Be(n,"nativeEl",()=>m.value),P}});const Vt={name:"GameComponent",emits:["changelevel","errorMessage"],props:{level:Number},setup(e,t){const l=M(""),n=M([]),d=M(null),u=M("play");let f=1,v=f+10,S=1,x=2,p=1,m;const Z=M("play_arrow"),E=M("volume_up");console.log(d.value==null);const L=()=>{u.value=="play"?(Z.value="pause",d.value.pause(),u.value="pause"):(Z.value="play_arrow",d.value.play(),u.value="play")},N=()=>{E.value=E.value=="volume_up"?"volume_off":"volume_up",d.value.muted=!d.value.muted},T=()=>{if(l.value==m)if(p==10)t.emit("changelevel");else{let B=n.value[n.value.length-1].indexOf("?");n.value[n.value.length-1][B]=l.value,K()&&t.emit("changelevel"),l.value="",p++,S=x+1,x=S+1,G()}else l.value="",t.emit("errorMessage")},K=()=>p==1||p==3||p==7,V=(B,O)=>Math.floor(Math.random()*(O-B)+B),G=()=>{for(let B=S;B<x;B++){let O=[];B==x-1&&(m=V(f,v));for(let k=f;k<v;k++)k==m?O.push("?"):O.push(k);f+=10,v+=10,n.value.push(O)}};return oe(()=>{d.value.play(),G()}),Ye(()=>{u.value=="play"&&d.value.play()}),{number:l,lines:n,audio:d,playIcon:Z,muteIcon:E,muteUnmute:N,playPause:L,verifyValue:T}}},Ft={autoplay:"",loop:"",ref:"audio"},Et=C("source",{src:"/audio/game_music.mp3",type:"audio/mpeg"},null,-1),Bt=[Et],$t={class:"row"},Ot={class:"col-10"},Pt={class:"col-2"},It=C("hr",null,null,-1),Tt={class:"row justify-center",style:{"margin-top":"10px"}},zt={class:"col-auto"},jt=C("hr",null,null,-1);function Lt(e,t,l,n,d,u){return j(),W(fe,null,[C("audio",Ft,Bt,512),C("div",$t,[C("div",Ot,[C("span",{class:ge(e.$q.screen.lg||e.$q.screen.md||e.$q.screen.xl?"text-h5":"text-overline")}," Fase: "+ye(l.level),3)]),C("div",Pt,[le(te,{round:"",outline:"",color:"light",class:"q-ma-xs",icon:n.playIcon,onClick:n.playPause},null,8,["icon","onClick"]),le(te,{round:"",outline:"",color:"light",class:"q-ma-xs",icon:n.muteIcon,onClick:n.muteUnmute},null,8,["icon","onClick"])])]),It,(j(!0),W(fe,null,Me(n.lines,(f,v)=>(j(),W("div",{class:"row justify-center",style:{"margin-top":"20px"},key:v},[(j(!0),W(fe,null,Me(f,(S,x)=>(j(),W("div",{key:x,class:"text-center col-1"},[S=="?"?(j(),X(At,{key:0,"input-class":"text-center",class:ge(e.$q.screen.lg||e.$q.screen.md||e.$q.screen.xl?"text-h4":"text-overline"),rounded:"",filled:"",color:"teal",dense:"",type:"number","bg-color":"primary",modelValue:n.number,"onUpdate:modelValue":t[0]||(t[0]=p=>n.number=p),onKeyup:We(n.verifyValue,["enter"])},null,8,["class","modelValue","onKeyup"])):J("",!0),S!="?"?(j(),W("span",{key:1,class:ge(e.$q.screen.lg||e.$q.screen.md||e.$q.screen.xl?"text-h4":"text-overline")},ye(S),3)):J("",!0)]))),128))]))),128)),C("div",Tt,[C("div",zt,[le(te,{class:"btn q-ma-sm",outline:"",disable:n.number=="",rounded:"",color:"positive",label:"Confirmar",size:"xl",onClick:n.verifyValue},null,8,["disable","onClick"])])]),jt],64)}var Nt=Ce(Vt,[["render",Lt]]);const Ut={name:"LevelComponent",props:{level:{type:Number,default:1},error:{type:Boolean,default:!1}},setup(e,t){const l=M(""),n=M(""),d=M("");let u=new Map;u.set("1",{level:1,text:"A SUA PRIMEIRA MISS\xC3O \xC9 ME AJUDAR A LEMBRAR A SENHA PARA ABRIR A PORTA DO FOGUETE! VAMOS L\xC1?"}),u.set("2",{level:2,text:"Belo trabalho! agora voc\xEA precisa me ajudar a ligar o foguete, ser\xE1 que conseguimos adivinhar o c\xF3digo?"}),u.set("3",{level:3,text:"Conseguimos! nossa miss\xE3o agora \xE9 encontrar as coordenadas para o planeta tamon, onde o meu irm\xE3o mike est\xE1. Voc\xEA poderia me ajudar?"}),u.set("4",{level:4,text:"maravilha, encontramos o mike! agora precisamos voltar para o planeta terra. Voc\xEA pode nos ajudar a encontrar as coordenadas?"}),u.set("5",{level:5,text:"muito obrigado! agora estamos s\xE3os e salvos em casa."}),u.set("error",{text:"Parece que esse n\xE3o \xE9 o n\xFAmero certo. Vamos tentar novamente?"});const f=M(u),v=()=>{t.emit("changeComponent")};return oe(()=>{e.error?(l.value=f.value.get("error").text,d.value="images/game/levels/error.png",n.value="/audio/error.mp3"):(l.value=f.value.get(""+e.level).text,n.value=`/audio/level_${e.level}.mp3`,d.value=`images/game/levels/${e.level}/level_${e.level}.png`)}),{levelObject:f,text:l,smallScreen:d,audioSrc:n,changeComponent:v}}},Dt={autoplay:""},Kt=["src"],Zt={key:0},Ht={class:"row justify-center",style:{"margin-top":"10px"}},Qt={class:"row"},Gt={class:"col"},Yt={class:"col",style:{"margin-top":"70px","margin-left":"250px"}},Wt={class:"btn-box"},Jt={class:"row"},Xt={class:"col"},el={class:"col"},tl={class:"row",style:{"margin-top":"50px"}},ll={class:"col"},nl={key:1},ol={class:"row justify-center items-center content-center"},al={class:"row justify-center items-center content-center"},rl={class:"btn-box"},sl={class:"row"},il={class:"col"};function ul(e,t,l,n,d,u){return j(),W(fe,null,[C("audio",Dt,[C("source",{src:n.audioSrc,type:"audio/mpeg"},null,8,Kt)]),e.$q.screen.md||e.$q.screen.xl||e.$q.screen.lg?(j(),W("div",Zt,[C("div",Ht,[C("div",{class:"col-6 text-center",style:be([l.level==5?"border: dashed #4e7f1c;":"border: dashed #d5d656;","margin-left: 10px;"])},[C("span",{class:"text-h6",style:be([l.level==5?"color: black;":""])},ye(n.text),5)],4)]),C("div",Qt,[C("div",Gt,[le(se,{src:`/images/game/levels/${l.level}/left.png`,style:{height:"280px","max-width":"300px"}},null,8,["src"])]),C("div",Yt,[C("div",Wt,[C("div",Jt,[C("div",Xt,[l.level<5?(j(),X(te,{key:0,class:"btn",outline:"",rounded:"",color:"primary",label:"Vamos Nessa",size:"lg",onClick:n.changeComponent},null,8,["onClick"])):J("",!0),l.level==5?(j(),X(te,{key:1,class:"btn",outline:"",rounded:"",color:"primary",label:"Finalizar",size:"xl",to:"/"})):J("",!0)])])])]),C("div",el,[le(se,{src:`/images/game/levels/${l.level}/right.png`,style:{height:"280px","max-width":"300px"}},null,8,["src"])])]),C("div",tl,[C("div",ll,[le(se,{src:`/images/game/levels/${l.level}/footer.png`,style:{height:"auto","max-width":"100%"}},null,8,["src"])])])])):J("",!0),e.$q.screen.sm||e.$q.screen.xs?(j(),W("div",nl,[C("div",ol,[le(se,{src:n.smallScreen,style:{height:"380px","max-width":"300px"}},null,8,["src"])]),C("div",al,[C("div",rl,[C("div",sl,[C("div",il,[l.level<5?(j(),X(te,{key:0,class:"btn",outline:"",rounded:"",color:"primary",label:"Vamos Nessa",size:"lg",onClick:n.changeComponent},null,8,["onClick"])):J("",!0),l.level==5?(j(),X(te,{key:1,class:"btn",outline:"",rounded:"",color:"primary",label:"Finalizar",size:"xl",to:"/"})):J("",!0)])])])])])):J("",!0)],64)}var dl=Ce(Ut,[["render",ul]]);const cl={name:"GamePage",components:{GameComponent:Nt,LevelComponent:dl},setup(){const e=M("LevelComponent"),t=M(1),l=M(!1),n=()=>{e.value=e.value=="LevelComponent"?"GameComponent":"LevelComponent"};return{current:e,level:t,error:l,changeComponent:n,levelUp:()=>{t.value++,l.value=!1,n()},showErrorMessage:()=>{l.value=!0,n()}}}},fl={class:"q-pa"};function vl(e,t,l,n,d,u){return j(),X(Te,{class:"q-pa-sm",style:be([n.level==5?"background-color: #03A2B7":""])},{default:Je(()=>[C("div",fl,[(j(),X(Xe,{exclude:"LevelComponent"},[(j(),X(et(n.current),{level:n.level,error:n.error,onChangelevel:n.levelUp,onErrorMessage:n.showErrorMessage,onChangeComponent:n.changeComponent},null,40,["level","error","onChangelevel","onErrorMessage","onChangeComponent"]))],1024))])]),_:1},8,["style"])}var bl=Ce(cl,[["render",vl]]);export{bl as default};
