import{r as i,o as c,c as m,a as j,M as E,b,V as H,d as g,e as p,f as h,w as u,p as M,g as V,h as v,i as S,j as T,t as R,k as O,F as P,l as N,m as D,n as q,q as X,s as B,A as K,u as W}from"./vendor.d43560c0.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};z();var f=(e,n)=>{const t=e.__vccOpts||e;for(const[s,o]of n)t[s]=o;return t};const F={};function J(e,n){const t=i("router-view");return c(),m(t)}var G=f(F,[["render",J]]);const k=j.create({baseURL:{}.VITE_HOST});k.interceptors.response.use(e=>{const n=e.data;return e.status>=400?(globalThis.$message.error(e.data.message),Promise.reject(new Error(n.message||"Error"))):e},e=>(E.error(e.response.data.message),Promise.reject(e)));function U(e){return k({url:"/api/login",method:"post",data:e})}function Q(){return k({url:"/api/logout",method:"delete"})}const w="arco_admin_template_token";function Y(){return b.get(w)}function Z(e){return b.set(w,e)}function ee(){return b.remove(w)}const $=()=>({token:"token",name:"",avatar:"",role:null}),te=$(),ne={async login({commit:e},n){try{const t=await U(n);return e("SET_TOKEN",t.data.token),Z(t.data.token),!0}catch{return!1}},async logout({commit:e}){try{await Q()}catch{}ee(),e("RESET_STATE")}},oe={RESET_STATE:e=>{Object.assign(e,$())},SET_TOKEN:(e,n)=>{e.token=n}};var re={namespaced:!0,state:te,actions:ne,mutations:oe};const se=new H.Store({modules:{user:re}}),ae="modulepreload",I={},ie="/arco_admin_template/dist/",y=function(n,t){return!t||t.length===0?n():Promise.all(t.map(s=>{if(s=`${ie}${s}`,s in I)return;I[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":ae,o||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),o)return new Promise((l,d)=>{a.addEventListener("load",l),a.addEventListener("error",d)})})).then(()=>n())};var ce="/arco_admin_template/dist/assets/icon.cff29bb4.svg";const ue={methods:{async onMenuClick(e){switch(e){case"\u9000\u51FA\u767B\u5F55":await this.$store.dispatch("user/logout"),await this.$router.replace("/login");break;case"Github":window.open("https://github.com/zhaozhentao/arco_admin_template","_blank");break}}}},A=e=>(M("data-v-89f6a4ca"),e=e(),V(),e),le={class:"layout-navbar"},de={class:"navbar"},pe=A(()=>p("div",{class:"side-left"},[p("div",{style:{height:"38px"}},[p("img",{src:ce})]),p("h5",{class:"arco-typography brand"},"Arco Design")],-1)),_e={class:"side-right"},me=A(()=>p("img",{alt:"avatar",src:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"},null,-1)),he=v("Github"),fe=v("\u9000\u51FA\u767B\u5F55");function ye(e,n,t,s,o,r){const a=i("a-avatar"),l=i("a-doption"),d=i("a-dropdown");return c(),g("div",le,[p("div",de,[pe,p("ul",_e,[p("li",null,[h(d,{onSelect:r.onMenuClick},{content:u(()=>[h(l,null,{default:u(()=>[he]),_:1}),h(l,null,{default:u(()=>[fe]),_:1})]),default:u(()=>[h(a,{size:32},{default:u(()=>[me]),_:1})]),_:1},8,["onSelect"])])])])])}var ge=f(ue,[["render",ye],["__scopeId","data-v-89f6a4ca"]]);const ve={name:"SidebarItem",props:{item:{type:Object},parentPath:{type:String}},computed:{fullPath(){let e=this.item.path.startsWith("/")?this.item.path.substr(1):this.item.path;return e=this.parentPath+"/"+e,e.replaceAll("//","/")}}};function be(e,n,t,s,o,r){const a=i("a-menu-item"),l=i("sidebar-item"),d=i("a-sub-menu");return t.item.children===void 0||t.item.children.length===1?(c(),m(a,{key:r.fullPath},S({default:u(()=>[v(" "+R(t.item.children===void 0?t.item.meta.title:t.item.children[0].meta.title),1)]),_:2},[t.item.children!==void 0?{name:"icon",fn:u(()=>[(c(),m(T(t.item.children[0].meta.icon)))])}:void 0]),1024)):(c(),m(d,{key:r.fullPath},S({title:u(()=>[v(R(t.item.meta.title),1)]),default:u(()=>[(c(!0),g(P,null,O(t.item.children,x=>(c(),m(l,{key:x.path,item:x,"parent-path":r.fullPath},null,8,["item","parent-path"]))),128))]),_:2},[t.item.meta.icon?{name:"icon",fn:u(()=>[(c(),m(T(t.item.meta.icon)))])}:void 0]),1024))}var ke=f(ve,[["render",be]]);const we={components:{sidebarItem:ke},computed:{routes(){return this.$router.options.routes.filter(e=>!e.hidden)},openedMenu(){return this.$route.path}},methods:{to(e){this.$router.push(e)}}};function xe(e,n,t,s,o,r){const a=i("sidebar-item"),l=i("a-menu");return c(),m(l,{style:{width:"220px",height:"100%",flexShrink:0},"default-selected-keys":[r.openedMenu],"auto-open":!0,onMenuItemClick:r.to,"show-collapse-button":""},{default:u(()=>[(c(!0),g(P,null,O(r.routes,d=>(c(),m(a,{key:d.path,item:d,"parent-path":""},null,8,["item"]))),128))]),_:1},8,["default-selected-keys","onMenuItemClick"])}var Ee=f(we,[["render",xe]]);const Se={components:{Navbar:ge,SideBar:Ee},props:{msg:String}},Te={class:"page-wrapper"},Re={class:"content-wrapper"};function Oe(e,n,t,s,o,r){const a=i("navbar"),l=i("side-bar"),d=i("router-view");return c(),g("div",Te,[h(a),p("div",Re,[h(l),h(d,{class:"content"})])])}var C=f(Se,[["render",Oe],["__scopeId","data-v-e19ef5c2"]]);const Pe=[{path:"/404",component:()=>y(()=>import("./404.afc898d0.js"),["assets/404.afc898d0.js","assets/vendor.d43560c0.js"]),hidden:!0},{path:"/login",component:()=>y(()=>import("./index.491c1987.js"),["assets/index.491c1987.js","assets/index.25f5fd56.css","assets/vendor.d43560c0.js"]),hidden:!0},{path:"/",component:C,meta:{title:"Example",icon:"icon-apps"},children:[{name:"table",path:"/table",component:()=>y(()=>import("./index.239b02bb.js"),["assets/index.239b02bb.js","assets/index.05625006.css","assets/vendor.d43560c0.js"]),meta:{title:"table"}},{name:"form",path:"/form",component:()=>y(()=>import("./index.3275289e.js"),["assets/index.3275289e.js","assets/index.58975bd8.css","assets/vendor.d43560c0.js"]),meta:{title:"form"}}]},{path:"/donate",component:C,children:[{path:"",name:"donate",component:()=>y(()=>import("./index.d2001c4b.js"),["assets/index.d2001c4b.js","assets/vendor.d43560c0.js"]),meta:{title:"Donate",icon:"icon-thumb-up"}}]},{path:"/:catchAll(.*)",redirect:"/404",hidden:!0}],$e=()=>N({history:D(),routes:Pe}),L=$e();L.beforeEach(async(e,n,t)=>{if(e.path==="/login"){t();return}if(!Y()){E.info("\u8BF7\u5148\u767B\u5F55"),t("/login");return}t()});const _=X;function Ie(e){_.XHR.prototype.__send=_.XHR.prototype.send,_.XHR.prototype.send=function(){if(this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.custom.requestHeaders){const n={};for(let t in this.custom.requestHeaders)n[t.toString().toLowerCase()]=this.custom.requestHeaders[t];this.custom.options=Object.assign({},this.custom.options,{headers:n})}this.__send.apply(this,arguments)},_.XHR.prototype.proxy_open=_.XHR.prototype.open,_.XHR.prototype.open=function(){let n=this.responseType;this.proxy_open(...arguments),this.custom.xhr&&n&&(this.custom.xhr.responseType=n)};for(const{url:n,method:t,response:s,timeout:o}of e)Le(o),_.mock(q(n,void 0,{end:!1}),t||"get",Ce(s))}function Ae(e){const n=e.split("?")[1];return n?JSON.parse('{"'+decodeURIComponent(n).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function Ce(e){return function(n){let t=null;if(typeof e=="function"){const{body:s,type:o,url:r,headers:a}=n;t=e({method:o,body:JSON.parse(s),query:Ae(r),headers:a})}else t=e;return _.mock(t)}}function Le(e=0){e&&_.setup({timeout:e})}var je=[{url:"/api/login",method:"post",statusCode:200,response:({body:e})=>({token:"user token",name:"Captain"})},{url:"/api/logout",method:"delete",statusCode:200,response:()=>({message:"success"})}];function He(){Ie([...je])}B(G).use(K).use(W).use(se).use(L).mount("#app");He();export{f as _};
