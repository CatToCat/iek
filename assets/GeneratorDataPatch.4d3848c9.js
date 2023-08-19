import{n as Fe,c as V,a as b,h,d as ee,M as De,u as Te,aB as xe,N as Ie,r as k,j as Be,an as Me,O as je,aC as Qe,P as Ue,aD as Ke,w as O,aF as Ge,C as We,aG as Je,aH as he,m as Xe,aI as Ye,ao as Ze,o as ce,g as te,aJ as Ve,aK as _e,aL as et,E as qe,aM as Pe,am as tt,aN as ot,k as de,ab as Ee,a4 as L,B as Oe,ak as Le,A as me,aO as nt,aP as it,aQ as ge,aR as at,R as lt,_ as rt,ai as st,a0 as ut,a1 as ct,a2 as Q,aa as w,a3 as E,au as dt,at as pe,ac as ve,as as ye,ay as ft,az as ht}from"./index.1a0ddb21.js";import{u as mt,v as be,a as gt,b as pt,c as vt,p as Ce,r as Se,s as yt,d as bt,Q as Ct}from"./QTooltip.c687682e.js";import{a as we,Q as St}from"./QItem.10922261.js";import{Q as wt}from"./QPage.ba60b987.js";import{api as kt}from"./axios.2aa925e5.js";import{u as Tt}from"./use-quasar.e1de08af.js";import"./selection.ff171a67.js";function ze(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const a=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,l=a.display;return l==="block"||l==="table"?e:ze(e.parentNode)}function se(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function Ae(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let a=0;t.count!==0&&a<e.childNodes.length;a++)o=Ae(e.childNodes[a],t,o);return o}const xt=/^https?:\/\//;class Bt{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(se(t.anchorNode,this.el,!0)&&se(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?ze(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),a=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),a.removeAllRanges(),a.addRange(o)):(a.selectAllChildren(this.el),a.collapseToEnd())}savePosition(){let t=-1,o;const a=document.getSelection(),l=this.el.parentNode;if(a.focusNode&&se(a.focusNode,l))for(o=a.focusNode,t=a.focusOffset;o&&o!==l;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),a=Ae(this.el,{count:this.savedPos});a&&(a.collapse(!1),o.removeAllRanges(),o.addRange(a))}}hasParent(t,o){const a=o?this.parent:this.blockParent;return a!==null?a.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,a=this.parent){return a===null?!1:t.includes(a.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,a.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const a=document.queryCommandValue(t);return a===`"${o}"`||a===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const l=document.queryCommandState(t);return o!==void 0?l===o:l}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,a=Fe){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){a();const l=window.open();l.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),l.print(),l.close();return}else if(t==="link"){const l=this.getParentAttribute("href");if(l===null){const s=this.selectWord(this.selection),r=s?s.toString():"";if(!r.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=xt.test(r)?r:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(s.getRangeAt(0))}else this.eVm.editLinkUrl.value=l,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),a();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),a();return}document.execCommand(t,!1,o),a()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const a=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const l=t.focusNode,s=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",a[0],"character"),t.modify("move",a[1],"word"),t.extend(l,s),t.modify("extend",a[1],"character"),t.modify("extend",a[0],"word"),t}}var _t=V({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const o=b(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>h("div",{class:o.value},ee(t.default))}}),qt=V({name:"QMenu",inheritAttrs:!1,props:{...mt,...De,...Te,...xe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:be},self:{type:String,validator:be},offset:{type:Array,validator:gt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ie,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:a}){let l=null,s,r,c;const m=te(),{proxy:g}=m,{$q:u}=g,v=k(null),p=k(!1),y=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),T=Be(e,u),{registerTick:q,removeTick:z}=Me(),{registerTimeout:x}=je(),{transitionProps:A,transitionStyle:P}=Qe(e),{localScrollTarget:f,changeScrollEvent:$,unconfigureScrollTarget:K}=pt(e,F),{anchorEl:C,canShow:oe}=vt({showing:p}),{hide:G}=Ue({showing:p,canShow:oe,handleShow:re,handleHide:Z,hideOnRouteChange:y,processOnMount:!0}),{showPortal:W,hidePortal:J,renderPortal:ne}=Ke(m,v,i,"menu"),D={anchorEl:C,innerRef:v,onClickOutside(n){if(e.persistent!==!0&&p.value===!0)return G(n),(n.type==="touchstart"||n.target.classList.contains("q-dialog__backdrop"))&&qe(n),!0}},X=b(()=>Ce(e.anchor||(e.cover===!0?"center middle":"bottom start"),u.lang.rtl)),ie=b(()=>e.cover===!0?X.value:Ce(e.self||"top start",u.lang.rtl)),ae=b(()=>(e.square===!0?" q-menu--square":"")+(T.value===!0?" q-menu--dark q-dark":"")),le=b(()=>e.autoClose===!0?{onClick:j}:{}),Y=b(()=>p.value===!0&&e.persistent!==!0);O(Y,n=>{n===!0?(Ve(R),bt(D)):(he(R),Se(D))});function I(){_e(()=>{let n=v.value;n&&n.contains(document.activeElement)!==!0&&(n=n.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.querySelector("[autofocus], [data-autofocus]")||n,n.focus({preventScroll:!0}))})}function re(n){if(l=e.noRefocus===!1?document.activeElement:null,Ge(B),W(),F(),s=void 0,n!==void 0&&(e.touchPosition||e.contextMenu)){const d=We(n);if(d.left!==void 0){const{top:S,left:_}=C.value.getBoundingClientRect();s={left:d.left-_,top:d.top-S}}}r===void 0&&(r=O(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,H)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{H(),e.noFocus!==!0&&I()}),x(()=>{u.platform.is.ios===!0&&(c=e.autoClose,v.value.click()),H(),W(!0),o("show",n)},e.transitionDuration)}function Z(n){z(),J(),M(!0),l!==null&&(n===void 0||n.qClickOutside!==!0)&&(((n&&n.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),x(()=>{J(!0),o("hide",n)},e.transitionDuration)}function M(n){s=void 0,r!==void 0&&(r(),r=void 0),(n===!0||p.value===!0)&&(Je(B),K(),Se(D),he(R)),n!==!0&&(l=null)}function F(){(C.value!==null||e.scrollTarget!==void 0)&&(f.value=Xe(C.value,e.scrollTarget),$(f.value,H))}function j(n){c!==!0?(Ye(g,n),o("click",n)):c=!1}function B(n){Y.value===!0&&e.noFocus!==!0&&et(v.value,n.target)!==!0&&I()}function R(n){o("escapeKey"),G(n)}function H(){yt({targetEl:v.value,offset:e.offset,anchorEl:C.value,anchorOrigin:X.value,selfOrigin:ie.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function i(){return h(Ze,A.value,()=>p.value===!0?h("div",{role:"menu",...a,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+ae.value,a.class],style:[a.style,P.value],...le.value},ee(t.default)):null)}return ce(M),Object.assign(g,{focus:I,updatePosition:H}),ne}});const Pt=Object.keys(Pe),Et=e=>Pt.reduce((t,o)=>{const a=e[o];return a!==void 0&&(t[o]=a),t},{});var Ot=V({name:"QBtnDropdown",props:{...Pe,...xe,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:o}){const{proxy:a}=te(),l=k(e.modelValue),s=k(null),r=tt(),c=b(()=>{const f={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":r,"aria-label":e.toggleAriaLabel||a.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(f["aria-disabled"]="true"),f}),m=b(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),g=b(()=>ot(e)),u=b(()=>Et(e));O(()=>e.modelValue,f=>{s.value!==null&&s.value[f?"show":"hide"]()}),O(()=>e.split,P);function v(f){l.value=!0,o("beforeShow",f)}function p(f){o("show",f),o("update:modelValue",!0)}function y(f){l.value=!1,o("beforeHide",f)}function T(f){o("hide",f),o("update:modelValue",!1)}function q(f){o("click",f)}function z(f){Oe(f),P(),o("click",f)}function x(f){s.value!==null&&s.value.toggle(f)}function A(f){s.value!==null&&s.value.show(f)}function P(f){s.value!==null&&s.value.hide(f)}return Object.assign(a,{show:A,hide:P,toggle:x}),de(()=>{e.modelValue===!0&&A()}),()=>{const f=[h(Ee,{class:m.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&f.push(h(qt,{ref:s,id:r,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:v,onShow:p,onBeforeHide:y,onHide:T},t.default)),e.split===!1?h(L,{class:"q-btn-dropdown q-btn-dropdown--simple",...u.value,...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:q},{default:()=>ee(t.label,[]).concat(f),loading:t.loading}):h(_t,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...g.value,glossy:e.glossy,stretch:e.stretch},()=>[h(L,{class:"q-btn-dropdown--current",...u.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:z},{default:t.label,loading:t.loading}),h(L,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...c.value,...g.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>f)])}}});function Re(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function fe(e){return h("div",{class:"q-editor__toolbar-group"},e)}function He(e,t,o,a=!1){const l=a||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),s=[];if(t.tip&&e.$q.platform.is.desktop){const r=t.key?h("div",[h("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;s.push(h(Ct,{delay:1e3},()=>[h("div",{innerHTML:t.tip}),r]))}return h(L,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:l?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:l&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(r){o&&o(),Re(r,t,e)}},()=>s)}function Lt(e,t){const o=t.list==="only-icons";let a=t.label,l=t.icon!==null?t.icon:void 0,s,r;function c(){g.component.proxy.hide()}if(o)r=t.options.map(u=>{const v=u.type===void 0?e.caret.is(u.cmd,u.param):!1;return v&&(a=u.tip,l=u.icon!==null?u.icon:void 0),He(e,u,c,v)}),s=e.toolbarBackgroundClass.value,r=[fe(r)];else{const u=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,v=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,p=t.list==="no-icons";r=t.options.map(y=>{const T=y.disable?y.disable(e):!1,q=y.type===void 0?e.caret.is(y.cmd,y.param):!1;q&&(a=y.tip,l=y.icon!==null?y.icon:void 0);const z=y.htmlTip;return h(St,{active:q,activeClass:u,clickable:!0,disable:T,dense:!0,onClick(x){c(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),Re(x,y,e)}},()=>[p===!0?null:h(we,{class:q?u:v,side:!0},()=>h(Ee,{name:y.icon!==null?y.icon:void 0})),h(we,z?()=>h("div",{class:"text-no-wrap",innerHTML:y.htmlTip}):y.tip?()=>h("div",{class:"text-no-wrap"},y.tip):void 0)])}),s=[e.toolbarBackgroundClass.value,v]}const m=t.highlight&&a!==t.label,g=h(Ot,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:m?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:m&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:a,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:l,contentClass:s,onShow:u=>e.emit("dropdownShow",u),onHide:u=>e.emit("dropdownHide",u),onBeforeShow:u=>e.emit("dropdownBeforeShow",u),onBeforeHide:u=>e.emit("dropdownBeforeHide",u)},()=>r);return g}function zt(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>fe(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?ee(e.slots[o.slot]):o.type==="dropdown"?Lt(e,o):He(e,o))))}function At(e,t,o,a={}){const l=Object.keys(a);if(l.length===0)return{};const s={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return l.forEach(r=>{const c=a[r];s[r]={cmd:"fontName",param:c,icon:o,tip:c,htmlTip:`<font face="${c}">${c}</font>`}}),s}function Rt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const a=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[h("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),h("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:l=>{Oe(l),o=l.target.value},onKeydown:l=>{if(Le(l)!==!0)switch(l.keyCode){case 13:return me(l),a();case 27:me(l),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),fe([h(L,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),h(L,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:a})])]}}let U=0;const Ht={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Nt=["update:fullscreen","fullscreen"];function $t(){const e=te(),{props:t,emit:o,proxy:a}=e;let l,s,r;const c=k(!1);nt(e)===!0&&O(()=>a.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&u()}),O(()=>t.fullscreen,v=>{c.value!==v&&m()}),O(c,v=>{o("update:fullscreen",v),o("fullscreen",v)});function m(){c.value===!0?u():g()}function g(){c.value!==!0&&(c.value=!0,r=a.$el.parentNode,r.replaceChild(s,a.$el),document.body.appendChild(a.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:u},ge.add(l))}function u(){c.value===!0&&(l!==void 0&&(ge.remove(l),l=void 0),r.replaceChild(a.$el,s),c.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),a.$el.scrollIntoView!==void 0&&setTimeout(()=>{a.$el.scrollIntoView()})))}return it(()=>{s=document.createElement("span")}),de(()=>{t.fullscreen===!0&&g()}),ce(u),Object.assign(a,{toggleFullscreen:m,setFullscreen:g,exitFullscreen:u}),{inFullscreen:c,toggleFullscreen:m}}const Ft=Object.prototype.toString,ue=Object.prototype.hasOwnProperty,Dt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function ke(e){if(e!==Object(e)||Dt.has(Ft.call(e))===!0||e.constructor&&ue.call(e,"constructor")===!1&&ue.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||ue.call(e,t)}function Ne(){let e,t,o,a,l,s,r=arguments[0]||{},c=1,m=!1;const g=arguments.length;for(typeof r=="boolean"&&(m=r,r=arguments[1]||{},c=2),Object(r)!==r&&typeof r!="function"&&(r={}),g===c&&(r=this,c--);c<g;c++)if((e=arguments[c])!==null)for(t in e)o=r[t],a=e[t],r!==a&&(m===!0&&a&&((l=Array.isArray(a))||ke(a)===!0)?(l===!0?s=Array.isArray(o)===!0?o:[]:s=ke(o)===!0?o:{},r[t]=Ne(m,s,a)):a!==void 0&&(r[t]=a));return r}var It=V({name:"QEditor",props:{...Te,...Ht,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...Nt,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:o,attrs:a}){const{proxy:l,vnode:s}=te(),{$q:r}=l,c=Be(e,r),{inFullscreen:m,toggleFullscreen:g}=$t(),u=at(a,s),v=k(null),p=k(null),y=k(null),T=k(!1),q=b(()=>!e.readonly&&!e.disable);let z,x,A=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),z=window.getComputedStyle(document.body).fontFamily;const P=b(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),f=b(()=>{const i=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:i,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!q.value,size:"sm"}}),$=b(()=>{const i=r.lang.editor,n=r.iconSet.editor;return{bold:{cmd:"bold",icon:n.bold,tip:i.bold,key:66},italic:{cmd:"italic",icon:n.italic,tip:i.italic,key:73},strike:{cmd:"strikeThrough",icon:n.strikethrough,tip:i.strikethrough,key:83},underline:{cmd:"underline",icon:n.underline,tip:i.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:n.unorderedList,tip:i.unorderedList},ordered:{cmd:"insertOrderedList",icon:n.orderedList,tip:i.orderedList},subscript:{cmd:"subscript",icon:n.subscript,tip:i.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:n.superscript,tip:i.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:d=>d.caret&&!d.caret.can("link"),icon:n.hyperlink,tip:i.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:n.toggleFullscreen,tip:i.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:n.viewSource,tip:i.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:n.quote,tip:i.quote,key:81},left:{cmd:"justifyLeft",icon:n.left,tip:i.left},center:{cmd:"justifyCenter",icon:n.center,tip:i.center},right:{cmd:"justifyRight",icon:n.right,tip:i.right},justify:{cmd:"justifyFull",icon:n.justify,tip:i.justify},print:{type:"no-state",cmd:"print",icon:n.print,tip:i.print,key:80},outdent:{type:"no-state",disable:d=>d.caret&&!d.caret.can("outdent"),cmd:"outdent",icon:n.outdent,tip:i.outdent},indent:{type:"no-state",disable:d=>d.caret&&!d.caret.can("indent"),cmd:"indent",icon:n.indent,tip:i.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:n.removeFormat,tip:i.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:n.hr,tip:i.hr},undo:{type:"no-state",cmd:"undo",icon:n.undo,tip:i.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:n.redo,tip:i.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:n.heading1||n.heading,tip:i.heading1,htmlTip:`<h1 class="q-ma-none">${i.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:n.heading2||n.heading,tip:i.heading2,htmlTip:`<h2 class="q-ma-none">${i.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:n.heading3||n.heading,tip:i.heading3,htmlTip:`<h3 class="q-ma-none">${i.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:n.heading4||n.heading,tip:i.heading4,htmlTip:`<h4 class="q-ma-none">${i.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:n.heading5||n.heading,tip:i.heading5,htmlTip:`<h5 class="q-ma-none">${i.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:n.heading6||n.heading,tip:i.heading6,htmlTip:`<h6 class="q-ma-none">${i.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:n.heading,tip:i.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:n.code,htmlTip:`<code>${i.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:n.size1||n.size,tip:i.size1,htmlTip:`<font size="1">${i.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:n.size2||n.size,tip:i.size2,htmlTip:`<font size="2">${i.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:n.size3||n.size,tip:i.size3,htmlTip:`<font size="3">${i.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:n.size4||n.size,tip:i.size4,htmlTip:`<font size="4">${i.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:n.size5||n.size,tip:i.size5,htmlTip:`<font size="5">${i.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:n.size6||n.size,tip:i.size6,htmlTip:`<font size="6">${i.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:n.size7||n.size,tip:i.size7,htmlTip:`<font size="7">${i.size7}</font>`}}}),K=b(()=>{const i=e.definitions||{},n=e.definitions||e.fonts?Ne(!0,{},$.value,i,At(z,r.lang.editor.defaultFont,r.iconSet.editor.font,e.fonts)):$.value;return e.toolbar.map(d=>d.map(S=>{if(S.options)return{type:"dropdown",icon:S.icon,label:S.label,size:"sm",dense:!0,fixedLabel:S.fixedLabel,fixedIcon:S.fixedIcon,highlight:S.highlight,list:S.list,options:S.options.map($e=>n[$e])};const _=n[S];return _?_.type==="no-state"||i[S]&&(_.cmd===void 0||$.value[_.cmd]&&$.value[_.cmd].type==="no-state")?_:Object.assign({type:"toggle"},_):{type:"slot",slot:S}}))}),C={$q:r,props:e,slots:t,emit:o,inFullscreen:m,toggleFullscreen:g,runCmd:j,isViewingSource:T,editLinkUrl:y,toolbarBackgroundClass:P,buttonProps:f,contentRef:p,buttons:K,setContent:F};O(()=>e.modelValue,i=>{A!==i&&(A=i,F(i,!0))}),O(y,i=>{o(`link${i?"Show":"Hide"}`)});const oe=b(()=>e.toolbar&&e.toolbar.length!==0),G=b(()=>{const i={},n=d=>{d.key&&(i[d.key]={cmd:d.cmd,param:d.param})};return K.value.forEach(d=>{d.forEach(S=>{S.options?S.options.forEach(n):n(S)})}),i}),W=b(()=>m.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),J=b(()=>`q-editor q-editor--${T.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(m.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(c.value===!0?" q-editor--dark q-dark":"")),ne=b(()=>[e.contentClass,"q-editor__content",{col:m.value,"overflow-auto":m.value||e.maxHeight}]),D=b(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function X(){if(p.value!==null){const i=`inner${T.value===!0?"Text":"HTML"}`,n=p.value[i];n!==e.modelValue&&(A=n,o("update:modelValue",n))}}function ie(i){if(o("keydown",i),i.ctrlKey!==!0||Le(i)===!0){B();return}const n=i.keyCode,d=G.value[n];if(d!==void 0){const{cmd:S,param:_}=d;qe(i),j(S,_,!1)}}function ae(i){B(),o("click",i)}function le(i){if(p.value!==null){const{scrollTop:n,scrollHeight:d}=p.value;x=d-n}C.caret.save(),o("blur",i)}function Y(i){lt(()=>{p.value!==null&&x!==void 0&&(p.value.scrollTop=p.value.scrollHeight-x)}),o("focus",i)}function I(i){const n=v.value;if(n!==null&&n.contains(i.target)===!0&&(i.relatedTarget===null||n.contains(i.relatedTarget)!==!0)){const d=`inner${T.value===!0?"Text":"HTML"}`;C.caret.restorePosition(p.value[d].length),B()}}function re(i){const n=v.value;n!==null&&n.contains(i.target)===!0&&(i.relatedTarget===null||n.contains(i.relatedTarget)!==!0)&&(C.caret.savePosition(),B())}function Z(){x=void 0}function M(i){C.caret.save()}function F(i,n){if(p.value!==null){n===!0&&C.caret.savePosition();const d=`inner${T.value===!0?"Text":"HTML"}`;p.value[d]=i,n===!0&&(C.caret.restorePosition(p.value[d].length),B())}}function j(i,n,d=!0){R(),C.caret.restore(),C.caret.apply(i,n,()=>{R(),C.caret.save(),d&&B()})}function B(){setTimeout(()=>{y.value=null,l.$forceUpdate()},1)}function R(){_e(()=>{p.value!==null&&p.value.focus({preventScroll:!0})})}function H(){return p.value}return de(()=>{C.caret=l.caret=new Bt(p.value,C),F(e.modelValue),B(),document.addEventListener("selectionchange",M)}),ce(()=>{document.removeEventListener("selectionchange",M)}),Object.assign(l,{runCmd:j,refreshToolbar:B,focus:R,getContentEl:H}),()=>{let i;if(oe.value){const n=[h("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+P.value},zt(C))];y.value!==null&&n.push(h("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+P.value},Rt(C))),i=h("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},n)}return h("div",{ref:v,class:J.value,style:{height:m.value===!0?"100%":null},...D.value,onFocusin:I,onFocusout:re},[i,h("div",{ref:p,style:W.value,class:ne.value,contenteditable:q.value,placeholder:e.placeholder,...u.listeners.value,onInput:X,onKeydown:ie,onClick:ae,onBlur:le,onFocus:Y,onMousedown:Z,onTouchstartPassive:Z})])}}});const Mt=st({name:"GeneratorDataPatch",setup(){const e=Tt(),t=k(`<pre>CREATE TABLE IEK_GENERATOR (
    id INTEGER PRIMARY KEY,
    bizz VARCHAR(36) NOT NULL,
    topic VARCHAR(20) NOT NULL,
    attribute VARCHAR(20) NOT NULL,
    source LONGTEXT,
    expect LONGTEXT,
    remark VARCHAR(255),
    is_active CHAR(1) NOT NULL CHECK (is_active IN ('Y', 'N')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</pre>`),o=k("3"),a=k(""),l=k("");function s(m){const g=document.createElement("div");return g.innerHTML=m,g.textContent||g.innerText||""}function r(){if(!t.value||!o.value){e.dialog({title:"Error",message:"Input value and Count are required fields.",color:"negative",position:"top",icon:"report_problem"});return}const m={topic:"generator_datapatch",attribute:"G_DATA_PATCH",source:JSON.stringify({statement:s(t.value),count:o.value})};console.log(m),kt.post("/generator",m).then(g=>{const u=JSON.parse(g.data.data.expect);console.log(u.jsonStatement),a.value=u.sqlStatement.join(`

`),l.value=u.jsonStatement.map(v=>JSON.stringify(v,null,2)).join(`

`)}).catch(()=>{e.notify({color:"negative",position:"top",message:"Submission failed",icon:"report_problem"})})}function c(m){const g=document.createElement("textarea");g.value=m,document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),this.$q.notify({message:"Copied to clipboard!",color:"positive",position:"top-right",icon:"done"})}return{editor:t,count:o,submitInput:r,sqlStatementElement:a,jsonStatementElement:l,copyToClipboard:c}}}),N=e=>(ft("data-v-3a088212"),e=e(),ht(),e),jt={class:"section"},Qt=N(()=>w("div",{class:"q-mt-md text-h6"},"SQL Schema",-1)),Ut={class:"section"},Kt={class:"row justify-around"},Gt={class:"col-2"},Wt=N(()=>w("div",{style:{"font-size":"15px"}},"Count",-1)),Jt={class:"col-4"},Xt=N(()=>w("div",{style:{"font-size":"15px"}},"\xA0",-1)),Yt={class:"col-2"},Zt=N(()=>w("div",{style:{"font-size":"15px"}},"\xA0",-1)),Vt={class:"col-2"},eo=N(()=>w("div",{style:{"font-size":"15px"}},"\xA0",-1)),to={class:"section"},oo=N(()=>w("div",{class:"q-mt-md text-h6"},"SQL Statement",-1)),no={class:"scrollable-pre",style:{"white-space":"pre-line"}},io={class:"section"},ao=N(()=>w("div",{class:"q-mt-md text-h6"},"JSON Statement",-1)),lo={class:"scrollable-pre",style:{"white-space":"pre-line"}};function ro(e,t,o,a,l,s){return ut(),ct(wt,{class:"flex flex-center flex-column"},{default:Q(()=>[w("div",jt,[Qt,E(It,{modelValue:e.editor,"onUpdate:modelValue":t[0]||(t[0]=r=>e.editor=r),"min-height":"30rem"},null,8,["modelValue"])]),w("div",Ut,[w("div",Kt,[w("div",Gt,[Wt,E(dt,{modelValue:e.count,"onUpdate:modelValue":t[1]||(t[1]=r=>e.count=r)},null,8,["modelValue"])]),w("div",Jt,[Xt,E(L,{label:"Generator",color:"primary",onClick:t[2]||(t[2]=r=>e.submitInput())})]),w("div",Yt,[Zt,E(L,{label:"Copy SQL",color:"green",onClick:t[3]||(t[3]=r=>e.copyToClipboard(e.sqlStatementElement))})]),w("div",Vt,[eo,E(L,{label:"Copy JSON",color:"green",onClick:t[4]||(t[4]=r=>e.copyToClipboard(e.jsonStatementElement))})])])]),w("div",to,[oo,E(ye,{flat:"",bordered:""},{default:Q(()=>[E(pe,null,{default:Q(()=>[w("pre",no,ve(e.sqlStatementElement),1)]),_:1})]),_:1})]),w("div",io,[ao,E(ye,{flat:"",bordered:""},{default:Q(()=>[E(pe,null,{default:Q(()=>[w("pre",lo,ve(e.jsonStatementElement),1)]),_:1})]),_:1})])]),_:1})}var po=rt(Mt,[["render",ro],["__scopeId","data-v-3a088212"]]);export{po as default};
