import{B as C,C as I,u as K,d as L,r as s,o as B,e as N,f as m,g as e,m as n,w as t,p as j,h as q,D as v,i as d}from"./vendor.a42ef267.js";import{_ as A}from"./index.df125002.js";function P(a=!1){const o=C(a);return{loading:o,setLoading:l=>{o.value=l},toggle:()=>{o.value=!o.value}}}const R=a=>(j("data-v-501dcfc8"),a=a(),q(),a),U={class:"login"},z={class:"login-form"},D=R(()=>m("div",{class:"login-form-title"},"Login Arco Admin",-1)),E={class:"login-form-password-actions"},F=d(" \u8BB0\u4F4F\u5BC6\u7801 "),T=d("\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),G=d(" \u767B\u5F55 "),H=d(" \u6CE8\u518C\u8D26\u53F7 "),J={setup(a){const o=I({username:"admin",password:"admin"}),{loading:p,setLoading:i}=P(),l=K(),b=L(),c=async()=>{i(!0);const _=await l.dispatch("user/login",o);i(!1),_&&await b.push({name:"table"})};return(_,r)=>{const w=s("icon-user"),f=s("a-input"),g=s("a-form-item"),y=s("icon-lock"),x=s("a-checkbox"),k=s("a-link"),h=s("a-button"),V=s("a-space"),S=s("a-form");return B(),N("div",U,[m("div",z,[D,e(S,{ref:"loginForm",model:n(o),layout:"vertical",onSubmit:c},{default:t(()=>[e(g,{field:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(f,{modelValue:n(o).username,"onUpdate:modelValue":r[0]||(r[0]=u=>n(o).username=u),placeholder:"\u7528\u6237\u540D\uFF1Aadmin",onKeyup:v(c,["enter"])},{prefix:t(()=>[e(w)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(g,{field:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(f,{modelValue:n(o).password,"onUpdate:modelValue":r[1]||(r[1]=u=>n(o).password=u),placeholder:"\u5BC6\u7801\uFF1Aadmin",type:"password",onKeyup:v(c,["enter"])},{prefix:t(()=>[e(y)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(V,{size:16,direction:"vertical"},{default:t(()=>[m("div",E,[e(x,{checked:"rememberPassword",onChange:_.setRememberPassword},{default:t(()=>[F]),_:1},8,["onChange"]),e(k,null,{default:t(()=>[T]),_:1})]),e(h,{type:"primary","html-type":"submit",long:"",loading:n(p)},{default:t(()=>[G]),_:1},8,["loading"]),e(h,{type:"text",long:"",class:"login-form-register-btn"},{default:t(()=>[H]),_:1})]),_:1})]),_:1},8,["model"])])])}}};var Q=A(J,[["__scopeId","data-v-501dcfc8"]]);export{Q as default};