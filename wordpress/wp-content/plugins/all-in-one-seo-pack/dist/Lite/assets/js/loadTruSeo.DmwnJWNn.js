import{H as _,b as w,f as I,d as k,u as C,y as L,B as M,C as q}from"./links.rndHrQjc.js";import{s as T}from"./metabox.CX8rIsNV.js";import{m as t,e as B,t as A,f as N,h as W}from"./postSlug.DxjFndk_.js";const U=()=>{let e=!1;if(document.querySelector("#wp-content-wrap.tmce-active")){const c=window.setInterval(()=>{!window.tinyMCE||!window.tinyMCE.activeEditor||(window.clearInterval(c),t(),window.tinyMCE.get("content").on("keyup",()=>{t(500)}),window.tinyMCE.get("content").on("paste",()=>{t(500)}))},50)}else{const c=document.querySelector("textarea#content");c&&(c.addEventListener("keyup",()=>{t(500)}),c.addEventListener("paste",()=>{t(500)}))}const n=document.querySelector("#post input#title");n&&n.addEventListener("input",()=>{t(500)}),b();const i=document.querySelector("#post_name");i&&i.addEventListener("change",()=>{t(500)});const o=document.querySelector("#edit-slug-buttons");o&&o.addEventListener("click",c=>{c.target===o.querySelector("#edit-slug-buttons button.save")&&t()});const r=document.querySelector("#categorychecklist");r&&r.addEventListener("change",function(){B()});const s=function(c){c.forEach(m=>{if(m.attributeName==="class"){if(document.querySelector("#wp-content-wrap.tmce-active")){if(!window.tinyMCE)return;window.tinyMCE.get("content").on("keyup",()=>{t(500)}),window.tinyMCE.get("content").on("paste",()=>{t(500)})}const d=document.querySelector("#content");d&&(d.addEventListener("keyup",()=>{t(500)}),d.addEventListener("paste",()=>{t(500)})),b()}})},u=new MutationObserver(s),p=document.querySelector("#wp-content-wrap");p&&u.observe(p,{attributes:!0});const l=document.querySelector("#wp-excerpt-wrap");l&&u.observe(l,{attributes:!0}),setInterval(()=>{e&&(e=!1)},500),A()&&!_()&&(e=!0,setInterval(()=>{window.tinyMCE&&window.tinyMCE.activeEditor&&window.tinyMCE.activeEditor.isDirty()&&!e&&(e=!0,t())},500))},b=()=>{if(document.querySelector("#wp-excerpt-wrap.tmce-active")){const n=window.setInterval(()=>{window.tinyMCE&&(window.clearInterval(n),t(),window.tinyMCE.get("excerpt").on("keyup",()=>{t(500)}),window.tinyMCE.get("excerpt").on("paste",()=>{t(500)}))},50)}const e=document.querySelector("#post textarea#excerpt");e&&(e.addEventListener("keyup",()=>{t(500)}),e.addEventListener("paste",()=>{t(500)}))},D=()=>{t(),window.wp.data.subscribe(()=>{t(500);const e=window.wp.data.select("core/editor").isSavingPost(),n=window.wp.data.select("core/editor").isAutosavingPost();if(e&&!n){const i=w();i.isDirty=!1,t()}})},P=()=>{const e=I();return(e==null?void 0:e.isUnlicensed)||!1},h=()=>{var d,f,y,E,v,S,g,x;let e="",n="",i="",o=[];const r=k(),s=w(),u=document.getElementById("_sku");u&&(e=u.value,r.updateWooCommerceSku(e));const p=document.getElementById("_sale_price"),l=document.getElementById("_regular_price");p&&(n=p.value),!n&&l&&(n=l.value);const m=((f=(d=C().aioseo.data)==null?void 0:d.wooCommerce)==null?void 0:f.currencySymbol)||"$"+parseFloat(n||0).toFixed(2);if(r.updateWooCommercePrice(m),o=document.querySelectorAll('#post input[name="tax_input[product_brand][]"]:checked'),o.length||(o=document.querySelectorAll('#post input[name="tax_input[pwb-brand][]"]:checked')),o.length){if(i!==o[0].parentNode.innerText&&(i=o[0].parentNode.innerText,r.updateWooCommerceBrand(o[0].parentNode.innerText)),(E=(y=s.currentPost)==null?void 0:y.primary_term)!=null&&E["pwb-brand"]){const a=document.getElementById(`in-pwb-brand-${s.currentPost.primary_term["pwb-brand"]}`);(v=a==null?void 0:a.parentNode)!=null&&v.innerText&&r.updateWooCommerceBrand(a.parentNode.innerText)}}else r.updateWooCommerceBrand("");if((g=(S=s.currentPost)==null?void 0:S.primary_term)!=null&&g.product_cat){const a=document.getElementById(`in-product_cat-${s.currentPost.primary_term.product_cat}`);(x=a==null?void 0:a.parentNode)!=null&&x.innerText&&r.updateTaxonomyTitle(a.parentNode.innerText)}};window.addEventListener("DOMContentLoaded",()=>{P()||h()});const O=()=>{P()||window.addEventListener("change",e=>{e.target.tagName==="INPUT"&&h()})},R=(e,n=!0)=>{if(!T())return;t();const i=w();if(i.currentPost.context==="term")N();else if(C().ping(),n&&i.savePostState(),L()){const r=window.setInterval(()=>{window.wp.data.select("core/editor").getCurrentPost().id&&(window.clearInterval(r),D())},50)}else _()&&O(),(M()||q())&&U(),W()};export{R as l};
