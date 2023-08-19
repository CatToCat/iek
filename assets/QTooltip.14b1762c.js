import{r as P,ag as ht,A as _,R as mt,y as q,w as W,k as vt,o as A,g as nt,D as O,p as R,aB as F,v as gt,X as pt,c as xt,M as bt,aC as yt,N as Tt,a as L,ao as wt,O as Et,aD as Ht,P as St,aE as Wt,m as Ct,h as U,ap as Mt,d as kt,E as Lt}from"./index.5f37100d.js";import{c as N}from"./selection.63057399.js";const Pt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function qt({showing:t,avoidEmit:l,configureAnchorEl:n}){const{props:e,proxy:o,emit:c}=nt(),a=P(null);let r=null;function f(i){return a.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(i){o.hide(i)},toggle(i){o.toggle(i),i.qAnchorHandled=!0},toggleKey(i){ht(i,13)===!0&&u.toggle(i)},contextClick(i){o.hide(i),_(i),mt(()=>{o.show(i),i.qAnchorHandled=!0})},prevent:_,mobileTouch(i){if(u.mobileCleanup(i),f(i)!==!0)return;o.hide(i),a.value.classList.add("non-selectable");const s=i.target;q(u,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,o.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){a.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),t.value===!0&&i!==void 0&&N()}}),n=function(i=e.contextMenu){if(e.noParentEvent===!0||a.value===null)return;let s;i===!0?o.$q.platform.is.mobile===!0?s=[[a.value,"touchstart","mobileTouch","passive"]]:s=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:s=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],q(u,"anchor",s)});function h(){O(u,"anchor")}function H(i){for(a.value=i;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;n()}function b(){if(e.target===!1||e.target===""||o.$el.parentNode===null)a.value=null;else if(e.target===!0)H(o.$el.parentNode);else{let i=e.target;if(typeof e.target=="string")try{i=document.querySelector(e.target)}catch{i=void 0}i!=null?(a.value=i.$el||i,n()):(a.value=null,console.error(`Anchor: target "${e.target}" not found`))}}return W(()=>e.contextMenu,i=>{a.value!==null&&(h(),n(i))}),W(()=>e.target,()=>{a.value!==null&&h(),b()}),W(()=>e.noParentEvent,i=>{a.value!==null&&(i===!0?h():n())}),vt(()=>{b(),l!==!0&&e.modelValue===!0&&a.value===null&&c("update:modelValue",!1)}),A(()=>{r!==null&&clearTimeout(r),h()}),{anchorEl:a,canShow:f,anchorEvents:u}}function At(t,l){const n=P(null);let e;function o(r,f){const u=`${f!==void 0?"add":"remove"}EventListener`,h=f!==void 0?f:e;r!==window&&r[u]("scroll",h,R.passive),window[u]("scroll",h,R.passive),e=f}function c(){n.value!==null&&(o(n.value),n.value=null)}const a=W(()=>t.noParentEvent,()=>{n.value!==null&&(c(),l())});return A(a),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:o}}const{notPassiveCapture:z}=R,E=[];function $(t){const l=t.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=F.length-1;for(;n>=0;){const e=F[n].$;if(e.type.name==="QTooltip"){n--;continue}if(e.type.name!=="QDialog")break;if(e.props.seamless!==!0)return;n--}for(let e=E.length-1;e>=0;e--){const o=E[e];if((o.anchorEl.value===null||o.anchorEl.value.contains(l)===!1)&&(l===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(l)===!1))t.qClickOutside=!0,o.onClickOutside(t);else return}}function zt(t){E.push(t),E.length===1&&(document.addEventListener("mousedown",$,z),document.addEventListener("touchstart",$,z))}function G(t){const l=E.findIndex(n=>n===t);l>-1&&(E.splice(l,1),E.length===0&&(document.removeEventListener("mousedown",$,z),document.removeEventListener("touchstart",$,z)))}let J,Z;function tt(t){const l=t.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function $t(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const Q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{Q[`${t}#ltr`]=t,Q[`${t}#rtl`]=t});function et(t,l){const n=t.split(" ");return{vertical:n[0],horizontal:Q[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function jt(t,l){let{top:n,left:e,right:o,bottom:c,width:a,height:r}=t.getBoundingClientRect();return l!==void 0&&(n-=l[1],e-=l[0],c+=l[1],o+=l[0],a+=l[0],r+=l[1]),{top:n,bottom:c,height:r,left:e,right:o,width:a,middle:e+(o-e)/2,center:n+(c-n)/2}}function Dt(t,l,n){let{top:e,left:o}=t.getBoundingClientRect();return e+=l.top,o+=l.left,n!==void 0&&(e+=n[1],o+=n[0]),{top:e,bottom:e+1,height:1,left:o,right:o+1,width:1,middle:o,center:e}}function Bt(t,l){return{top:0,center:l/2,bottom:l,left:0,middle:t/2,right:t}}function lt(t,l,n,e){return{top:t[n.vertical]-l[e.vertical],left:t[n.horizontal]-l[e.horizontal]}}function it(t,l=0){if(t.targetEl===null||t.anchorEl===null||l>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{it(t,l+1)},10);return}const{targetEl:n,offset:e,anchorEl:o,anchorOrigin:c,selfOrigin:a,absoluteOffset:r,fit:f,cover:u,maxHeight:h,maxWidth:H}=t;if(gt.is.ios===!0&&window.visualViewport!==void 0){const S=document.body.style,{offsetLeft:g,offsetTop:p}=window.visualViewport;g!==J&&(S.setProperty("--q-pe-left",g+"px"),J=g),p!==Z&&(S.setProperty("--q-pe-top",p+"px"),Z=p)}const{scrollLeft:b,scrollTop:i}=n,s=r===void 0?jt(o,u===!0?[0,0]:e):Dt(o,r,e);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:H||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:y,offsetHeight:C}=n,{elWidth:j,elHeight:k}=f===!0||u===!0?{elWidth:Math.max(s.width,y),elHeight:u===!0?Math.max(s.height,C):C}:{elWidth:y,elHeight:C};let v={maxWidth:H,maxHeight:h};(f===!0||u===!0)&&(v.minWidth=s.width+"px",u===!0&&(v.minHeight=s.height+"px")),Object.assign(n.style,v);const T=Bt(j,k);let d=lt(s,T,c,a);if(r===void 0||e===void 0)B(d,s,T,c,a);else{const{top:S,left:g}=d;B(d,s,T,c,a);let p=!1;if(d.top!==S){p=!0;const x=2*e[1];s.center=s.top-=x,s.bottom-=x+2}if(d.left!==g){p=!0;const x=2*e[0];s.middle=s.left-=x,s.right-=x+2}p===!0&&(d=lt(s,T,c,a),B(d,s,T,c,a))}v={top:d.top+"px",left:d.left+"px"},d.maxHeight!==void 0&&(v.maxHeight=d.maxHeight+"px",s.height>d.maxHeight&&(v.minHeight=v.maxHeight)),d.maxWidth!==void 0&&(v.maxWidth=d.maxWidth+"px",s.width>d.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(n.style,v),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==b&&(n.scrollLeft=b)}function B(t,l,n,e,o){const c=n.bottom,a=n.right,r=pt(),f=window.innerHeight-r,u=document.body.clientWidth;if(t.top<0||t.top+c>f)if(o.vertical==="center")t.top=l[e.vertical]>f/2?Math.max(0,f-c):0,t.maxHeight=Math.min(c,f);else if(l[e.vertical]>f/2){const h=Math.min(f,e.vertical==="center"?l.center:e.vertical===o.vertical?l.bottom:l.top);t.maxHeight=Math.min(c,h),t.top=Math.max(0,h-c)}else t.top=Math.max(0,e.vertical==="center"?l.center:e.vertical===o.vertical?l.top:l.bottom),t.maxHeight=Math.min(c,f-t.top);if(t.left<0||t.left+a>u)if(t.maxWidth=Math.min(a,u),o.horizontal==="middle")t.left=l[e.horizontal]>u/2?Math.max(0,u-a):0;else if(l[e.horizontal]>u/2){const h=Math.min(u,e.horizontal==="middle"?l.middle:e.horizontal===o.horizontal?l.right:l.left);t.maxWidth=Math.min(a,h),t.left=Math.max(0,h-t.maxWidth)}else t.left=Math.max(0,e.horizontal==="middle"?l.middle:e.horizontal===o.horizontal?l.left:l.right),t.maxWidth=Math.min(a,u-t.left)}var Nt=xt({name:"QTooltip",inheritAttrs:!1,props:{...Pt,...bt,...yt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:tt},self:{type:String,default:"top middle",validator:tt},offset:{type:Array,default:()=>[14,14],validator:$t},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Tt],setup(t,{slots:l,emit:n,attrs:e}){let o,c;const a=nt(),{proxy:{$q:r}}=a,f=P(null),u=P(!1),h=L(()=>et(t.anchor,r.lang.rtl)),H=L(()=>et(t.self,r.lang.rtl)),b=L(()=>t.persistent!==!0),{registerTick:i,removeTick:s}=wt(),{registerTimeout:y}=Et(),{transitionProps:C,transitionStyle:j}=Ht(t),{localScrollTarget:k,changeScrollEvent:v,unconfigureScrollTarget:T}=At(t,X),{anchorEl:d,canShow:S,anchorEvents:g}=qt({showing:u,configureAnchorEl:ct}),{show:p,hide:x}=St({showing:u,canShow:S,handleShow:at,handleHide:rt,hideOnRouteChange:b,processOnMount:!0});Object.assign(g,{delayShow:ut,delayHide:st});const{showPortal:V,hidePortal:I,renderPortal:ot}=Wt(a,f,ft,"tooltip");if(r.platform.is.mobile===!0){const m={anchorEl:d,innerRef:f,onClickOutside(w){return x(w),w.target.classList.contains("q-dialog__backdrop")&&Lt(w),!0}},D=L(()=>t.modelValue===null&&t.persistent!==!0&&u.value===!0);W(D,w=>{(w===!0?zt:G)(m)}),A(()=>{G(m)})}function at(m){V(),i(()=>{c=new MutationObserver(()=>M()),c.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),M(),X()}),o===void 0&&(o=W(()=>r.screen.width+"|"+r.screen.height+"|"+t.self+"|"+t.anchor+"|"+r.lang.rtl,M)),y(()=>{V(!0),n("show",m)},t.transitionDuration)}function rt(m){s(),I(),K(),y(()=>{I(!0),n("hide",m)},t.transitionDuration)}function K(){c!==void 0&&(c.disconnect(),c=void 0),o!==void 0&&(o(),o=void 0),T(),O(g,"tooltipTemp")}function M(){it({targetEl:f.value,offset:t.offset,anchorEl:d.value,anchorOrigin:h.value,selfOrigin:H.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ut(m){if(r.platform.is.mobile===!0){N(),document.body.classList.add("non-selectable");const D=d.value,w=["touchmove","touchcancel","touchend","click"].map(Y=>[D,Y,"delayHide","passiveCapture"]);q(g,"tooltipTemp",w)}y(()=>{p(m)},t.delay)}function st(m){r.platform.is.mobile===!0&&(O(g,"tooltipTemp"),N(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),y(()=>{x(m)},t.hideDelay)}function ct(){if(t.noParentEvent===!0||d.value===null)return;const m=r.platform.is.mobile===!0?[[d.value,"touchstart","delayShow","passive"]]:[[d.value,"mouseenter","delayShow","passive"],[d.value,"mouseleave","delayHide","passive"]];q(g,"anchor",m)}function X(){if(d.value!==null||t.scrollTarget!==void 0){k.value=Ct(d.value,t.scrollTarget);const m=t.noParentEvent===!0?M:x;v(k.value,m)}}function dt(){return u.value===!0?U("div",{...e,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",e.class],style:[e.style,j.value],role:"tooltip"},kt(l.default)):null}function ft(){return U(Mt,C.value,dt)}return A(K),Object.assign(a.proxy,{updatePosition:M}),ot}});export{Nt as Q,$t as a,At as b,qt as c,zt as d,et as p,G as r,it as s,Pt as u,tt as v};
