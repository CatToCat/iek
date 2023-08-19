import{h as m,c as z,r as w,W as O,k as c,o as h,n as R,R as p,g as T,p as g}from"./index.17327cfd.js";const E=m("div",{class:"q-space"});var x=z({name:"QSpace",setup(){return()=>E}});function L(){const t=w(!O.value);return t.value===!1&&c(()=>{t.value=!0}),t}const y=typeof ResizeObserver!="undefined",b=y===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Q=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let r=null,n,s={width:-1,height:-1};function u(i){i===!0||t.debounce===0||t.debounce==="0"?a():r===null&&(r=setTimeout(a,t.debounce))}function a(){if(r!==null&&(clearTimeout(r),r=null),n){const{offsetWidth:i,offsetHeight:o}=n;(i!==s.width||o!==s.height)&&(s={width:i,height:o},e("resize",s))}}const{proxy:d}=T();if(y===!0){let i;const o=l=>{n=d.$el.parentNode,n?(i=new ResizeObserver(u),i.observe(n),a()):l!==!0&&p(()=>{o(!0)})};return c(()=>{o()}),h(()=>{r!==null&&clearTimeout(r),i!==void 0&&(i.disconnect!==void 0?i.disconnect():n&&i.unobserve(n))}),R}else{let l=function(){r!==null&&(clearTimeout(r),r=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",u,g.passive),o=void 0)},v=function(){l(),n&&n.contentDocument&&(o=n.contentDocument.defaultView,o.addEventListener("resize",u,g.passive),a())};const i=L();let o;return c(()=>{p(()=>{n=d.$el,n&&v()})}),h(l),d.trigger=u,()=>{if(i.value===!0)return m("object",{style:b.style,tabindex:-1,type:"text/html",data:b.url,"aria-hidden":"true",onLoad:v})}}}});const f={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},k=Object.keys(f);f.all=!0;function S(t){const e={};for(const r of k)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?f:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const C=["INPUT","TEXTAREA"];function j(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&C.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}export{Q,x as a,S as g,j as s};
