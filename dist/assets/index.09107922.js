import{r as d,o as a,c as l,w as _,a as v,t as g,b as E,d as O,e as h,f as b,F as x,g as S,h as k,i as w,j as A,k as L,p as I,m as T,l as C,A as H,n as V}from"./vendor.77edc79e.js";const $=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}};$();var f=(r,o)=>{const e=r.__vccOpts||r;for(const[s,t]of o)e[s]=t;return e};const j={};function D(r,o){const e=d("router-view");return a(),l(e)}var M=f(j,[["render",D]]);const N="modulepreload",P={},q="/arco_admin_template/dist/",m=function(o,e){return!e||e.length===0?o():Promise.all(e.map(s=>{if(s=`${q}${s}`,s in P)return;P[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":N,t||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),t)return new Promise((u,p)=>{i.addEventListener("load",u),i.addEventListener("error",p)})})).then(()=>o())},X={name:"SidebarItem",props:{item:{type:Object},parentPath:{type:String}},computed:{fullPath(){let r=this.item.path.startsWith("/")?this.item.path.substr(1):this.item.path;return r=this.parentPath+"/"+r,r.replaceAll("//","/")}}};function B(r,o,e,s,t,n){const i=d("a-menu-item"),u=d("sidebar-item",!0),p=d("a-sub-menu");return e.item.children===void 0||e.item.children.length===0?(a(),l(i,{key:n.fullPath},{default:_(()=>[v(g(e.item.meta.title),1)]),_:1})):(a(),l(p,{key:n.fullPath},E({title:_(()=>[v(g(e.item.meta.title),1)]),default:_(()=>[(a(!0),h(x,null,b(e.item.children,y=>(a(),l(u,{key:y.path,item:y,"parent-path":n.fullPath},null,8,["item","parent-path"]))),128))]),_:2},[e.item.meta.icon?{name:"icon",fn:_(()=>[(a(),l(O(e.item.meta.icon)))])}:void 0]),1024))}var F=f(X,[["render",B]]);const W={components:{SidebarItem:F},computed:{routes(){return this.$router.options.routes.filter(r=>!r.hidden)},openedMenu(){return this.$route.path}},methods:{to(r){this.$router.push(r)}}};function J(r,o,e,s,t,n){const i=d("sidebar-item"),u=d("a-menu");return a(),l(u,{style:{width:"220px",height:"100%",flexShrink:0},"default-selected-keys":[n.openedMenu],"auto-open":!0,onMenuItemClick:n.to,"show-collapse-button":""},{default:_(()=>[(a(!0),h(x,null,b(n.routes,p=>(a(),l(i,{key:p.path,item:p,"parent-path":""},null,8,["item"]))),128))]),_:1},8,["default-selected-keys","onMenuItemClick"])}var K=f(W,[["render",J]]),U="/arco_admin_template/dist/assets/icon.60fd6263.svg";const z={components:{SideBar:K},props:{msg:String}},G={class:"page-wrapper"},Q=w('<div class="layout-navbar" data-v-6817fd76><div class="navbar" data-v-6817fd76><div class="side-left" data-v-6817fd76><div style="height:38px;" data-v-6817fd76><img src="'+U+'" data-v-6817fd76></div><h5 class="arco-typography brand" data-v-6817fd76>Arco Design</h5></div></div></div>',1),Y={class:"content-wrapper"};function Z(r,o,e,s,t,n){const i=d("side-bar"),u=d("router-view");return a(),h("div",G,[Q,S("div",Y,[k(i),k(u,{class:"content"})])])}var R=f(z,[["render",Z],["__scopeId","data-v-6817fd76"]]);const ee=[{path:"/404",component:()=>m(()=>import("./404.ffa08521.js"),["assets/404.ffa08521.js","assets/vendor.77edc79e.js"]),hidden:!0},{path:"/login",component:()=>m(()=>import("./index.fe574637.js"),["assets/index.fe574637.js","assets/index.25f5fd56.css","assets/vendor.77edc79e.js"]),hidden:!0},{path:"/",component:R,meta:{title:"Menu1",icon:"icon-apps"},children:[{name:"dashboard",path:"/dashboard",component:()=>m(()=>import("./index.df969f73.js"),["assets/index.df969f73.js","assets/index.170148bc.css","assets/vendor.77edc79e.js"]),meta:{title:"Dashboard",icon:"icon-face-smile-fill"}},{path:"/form",component:()=>m(()=>import("./index.df969f73.js"),["assets/index.df969f73.js","assets/index.170148bc.css","assets/vendor.77edc79e.js"]),meta:{title:"Form",icon:"icon-face-smile-fill"}}]},{path:"/menu2",component:R,meta:{title:"Menu2",icon:"icon-idcard"},children:[{path:"dashboard",component:()=>m(()=>import("./index.df969f73.js"),["assets/index.df969f73.js","assets/index.170148bc.css","assets/vendor.77edc79e.js"]),meta:{title:"Files",icon:"icon-face-smile-fill"}},{path:"form",component:()=>m(()=>import("./index.df969f73.js"),["assets/index.df969f73.js","assets/index.170148bc.css","assets/vendor.77edc79e.js"]),meta:{title:"Dir",icon:"icon-face-smile-fill"}}]},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}],te=()=>A({history:L(),routes:ee}),re=te();const c=T;function oe(r){c.XHR.prototype.__send=c.XHR.prototype.send,c.XHR.prototype.send=function(){if(this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.custom.requestHeaders){const o={};for(let e in this.custom.requestHeaders)o[e.toString().toLowerCase()]=this.custom.requestHeaders[e];this.custom.options=Object.assign({},this.custom.options,{headers:o})}this.__send.apply(this,arguments)},c.XHR.prototype.proxy_open=c.XHR.prototype.open,c.XHR.prototype.open=function(){let o=this.responseType;this.proxy_open(...arguments),this.custom.xhr&&o&&(this.custom.xhr.responseType=o)};for(const{url:o,method:e,response:s,timeout:t}of r)ie(t),c.mock(I(o,void 0,{end:!1}),e||"get",se(s))}function ne(r){const o=r.split("?")[1];return o?JSON.parse('{"'+decodeURIComponent(o).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function se(r){return function(o){let e=null;if(typeof r=="function"){const{body:s,type:t,url:n,headers:i}=o;e=r({method:t,body:JSON.parse(s),query:ne(n),headers:i})}else e=r;return c.mock(e)}}function ie(r=0){r&&c.setup({timeout:r})}var ae=[{url:"/api/login",method:"post",statusCode:200,response:({body:r})=>({message:"wrong"})}];function ce(){oe([...ae])}C(M).use(H).use(V).use(re).mount("#app");ce();export{f as _};