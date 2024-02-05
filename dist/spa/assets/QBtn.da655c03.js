import{c as d,h as g,g as z,V as se,j as V,p as ce,x as de,u as te,v as fe,r as N,a as ve,B as ge,s as P,W as me,l as be,t as he}from"./index.ea4d7531.js";import{c as ne,u as ae,f as re,h as ye,d as K,b as ke,Q as pe}from"./QSpinner.da09b4d0.js";const F="0 0 24 24",U=e=>e,Q=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Q,"ion-ios":Q,"ion-logo":Q,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xe=new RegExp("^("+Object.keys(ue).join("|")+")"),qe=new RegExp("^("+Object.keys(le).join("|")+")"),W=new RegExp("^("+Object.keys(ie).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,$e=/^img:/,Re=/^svguse:/,we=/^ion-/,Le=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var H=ne({name:"QIcon",props:{...ae,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=z(),n=re(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const o=a.iconMapFn(r);if(o!==void 0)if(o.icon!==void 0){if(r=o.icon,r==="none"||!r)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Ee.test(r)===!0){const[o,y=F]=r.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(l=>{const[k,b,p]=l.split("@@");return g("path",{style:b,d:k,transform:p})})}}if($e.test(r)===!0)return{img:!0,src:r.substring(4)};if(Re.test(r)===!0){const[o,y=F]=r.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const h=r.match(xe);if(h!==null)s=ue[h[1]](r);else if(Le.test(r)===!0)s=r;else if(we.test(r)===!0)s=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(W.test(r)===!0){s="notranslate material-symbols";const o=r.match(W);o!==null&&(r=r.substring(6),s+=ie[o[1]]),q=r}else{s="notranslate material-icons";const o=r.match(qe);o!==null&&(r=r.substring(2),s+=le[o[1]]),q=r}return{cls:s,content:q}});return()=>{const s={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?g(e.tag,s,ye(t.default)):f.value.img===!0?g(e.tag,s,K(t.default,[g("img",{src:f.value.src})])):f.value.svg===!0?g(e.tag,s,K(t.default,[g("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?g(e.tag,s,K(t.default,[g("svg",{viewBox:f.value.viewBox},[g("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(s.class+=" "+f.value.cls),g(e.tag,s,K(t.default,[f.value.content])))}}});function Be(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function Xe(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=se(e);if(t)return t.$el||t}function Ce(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function X(e,t,a,n){a.modifiers.stop===!0&&te(e);const i=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const s=document.createElement("span"),r=document.createElement("span"),q=fe(e),{left:h,top:o,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),b=k/2,p=`${(y-k)/2}px`,c=f?p:`${q.left-h-b}px`,x=`${(l-k)/2}px`,S=f?x:`${q.top-o-b}px`;r.className="q-ripple__inner",Be(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${i?" text-"+i:""}`,s.setAttribute("dir","ltr"),s.appendChild(r),t.appendChild(s);const C=()=>{s.remove(),clearTimeout(_)};a.abort.push(C);let _=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,_=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,_=setTimeout(()=>{s.remove(),a.abort.splice(a.abort.indexOf(C),1)},275)},250)},50)}function Y(e,{modifiers:t,value:a,arg:n}){const i=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var _e=ke({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&X(i,e,n,i.qKeyEvent===!0)},keystart:Ce(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&V(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&X(i,e,n,!0)},300)};Y(n,t),e.__qripple=n,ce(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Y(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),de(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Se=Object.keys(oe),Pe={align:{type:String,validator:e=>Se.includes(e)}};function Te(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function Oe(e){return e.appContext.config.globalProperties.$router!==void 0}function Ye(e){return e.isUnmounted===!0||e.isDeactivated===!0}function G(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function J(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ae(e,t){for(const a in t){const n=t[a],i=e[a];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,s)=>f!==i[s]))return!1}return!0}function Z(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Me(e,t){return Array.isArray(e)===!0?Z(e,t):Array.isArray(t)===!0?Z(t,e):e===t}function je(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Me(e[a],t[a])===!1)return!1;return!0}const Ke={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ie({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=z(),{props:n,proxy:i,emit:f}=a,s=Oe(a),r=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>s===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>s===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),o=d(()=>h.value!==null),y=d(()=>r.value===!0||o.value===!0),l=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=d(()=>r.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(o.value===!1)return-1;const{matched:v}=h.value,{length:E}=v,R=v[E-1];if(R===void 0)return-1;const L=i.$route.matched;if(L.length===0)return-1;const B=L.findIndex(J.bind(null,R));if(B>-1)return B;const I=G(v[E-2]);return E>1&&G(R)===I&&L[L.length-1].path!==I?L.findIndex(J.bind(null,v[E-2])):B}),p=d(()=>o.value===!0&&b.value!==-1&&Ae(i.$route.params,h.value.params)),c=d(()=>p.value===!0&&b.value===i.$route.matched.length-1&&je(i.$route.params,h.value.params)),x=d(()=>o.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function C(v,{returnRouterError:E,to:R=n.to,replace:L=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const B=i.$router[L===!0?"replace":"push"](R);return E===!0?B:B.then(()=>{}).catch(()=>{})}function _(v){if(o.value===!0){const E=R=>C(v,R);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:o,hasHrefLink:r,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:p,linkIsExactActive:c,linkClass:x,linkAttrs:k,getLink:S,navigateToRouterLink:C,navigateOnClick:_}}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,ze=["flat","outline","push","unelevated"],Ne=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Fe={...ae,...Ke,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ze.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Pe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ue(e){const t=re(e,De),a=Te(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:s,navigateOnClick:r}=Ie({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>o.value===!0?e.tabindex||0:-1),l=d(()=>Ne(e,"standard")),k=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,s.value):Qe.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=d(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:o}}const{passiveCapture:$}=be;let T=null,O=null,A=null;var Ge=ne({name:"QBtn",props:{...Fe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=z(),{classes:i,style:f,innerClasses:s,attributes:r,hasLink:q,linkTag:h,navigateOnClick:o,isActionable:y}=Ue(e),l=N(null),k=N(null);let b=null,p,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=d(()=>({center:e.round})),_=d(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const u={onClick:R,onKeydown:L,onMousedown:I};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";u[`onTouchstart${m}`]=B}return u}return{onClick:P}}),E=d(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...v.value}));function R(u){if(l.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&l.value.contains(m)===!1&&m.contains(l.value)===!1){l.value.focus();const D=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",D,$),l.value!==null&&l.value.removeEventListener("blur",D,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",D,$),l.value.addEventListener("blur",D,$)}}o(u)}}function L(u){l.value!==null&&(a("keydown",u),V(u,[13,32])===!0&&O!==l.value&&(O!==null&&M(),u.defaultPrevented!==!0&&(l.value.focus(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),l.value.addEventListener("blur",w,$)),P(u)))}function B(u){l.value!==null&&(a("touchstart",u),u.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&M(),T=l.value,b=u.target,b.addEventListener("touchcancel",w,$),b.addEventListener("touchend",w,$)),p=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,p=!1},200)))}function I(u){l.value!==null&&(u.qSkipRipple=p===!0,a("mousedown",u),u.defaultPrevented!==!0&&A!==l.value&&(A!==null&&M(),A=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,$)))}function w(u){if(l.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===l.value)){if(u!==void 0&&u.type==="keyup"){if(O===l.value&&V(u,[13,32])===!0){const m=new MouseEvent("click",u);m.qKeyEvent=!0,u.defaultPrevented===!0&&he(m),u.cancelBubble===!0&&te(m),l.value.dispatchEvent(m),P(u),u.qKeyEvent=!0}a("keyup",u)}M()}}function M(u){const m=k.value;u!==!0&&(T===l.value||A===l.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===l.value&&(b!==null&&(b.removeEventListener("touchcancel",w,$),b.removeEventListener("touchend",w,$)),T=b=null),A===l.value&&(document.removeEventListener("mouseup",w,$),A=null),O===l.value&&(document.removeEventListener("keyup",w,!0),l.value!==null&&l.value.removeEventListener("blur",w,$),O=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(u){P(u),u.qSkipRipple=!0}return ve(()=>{M(!0)}),Object.assign(n,{click:R}),()=>{let u=[];e.icon!==void 0&&u.push(g(H,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&u.push(g("span",{class:"block"},[e.label])),u=K(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(g(H,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[g("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},u)),e.loading!==null&&m.push(g(me,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(pe)])]:null)),ge(g(h.value,E.value,m),[[_e,S.value,void 0,C.value]])}}});export{Ge as Q,Ie as a,Ye as b,Be as c,H as d,Xe as g,Ke as u,Oe as v};
