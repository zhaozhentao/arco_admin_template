import{z as K,B as L,u as B,d as N,r as n,o as S,e as q,g as e,m as a,w as t,f as h,C as b,i as r}from"./vendor.34b307a7.js";function z(_=!1){const o=K(_);return{loading:o,setLoading:i=>{o.value=i},toggle:()=>{o.value=!o.value}}}const A={class:"login-form"},P=h("div",{class:"login-form-title"},"Login Arco Admin",-1),R={class:"login-form-password-actions"},U=r(" \u8BB0\u4F4F\u5BC6\u7801 "),j=r("\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),E=r(" \u767B\u5F55 "),F=r(" \u6CE8\u518C\u8D26\u53F7 "),T={setup(_){const o=L({username:"admin",password:"admin"}),{loading:m,setLoading:l}=z(),i=B(),v=N(),d=async()=>{l(!0);const c=await i.dispatch("user/login",o);l(!1),c&&await v.push({name:"table"})};return(c,s)=>{const y=n("icon-user"),p=n("a-input"),g=n("a-form-item"),w=n("icon-lock"),x=n("a-checkbox"),k=n("a-link"),f=n("a-button"),V=n("a-space"),C=n("a-form");return S(),q("div",A,[P,e(C,{ref:"loginForm",model:a(o),layout:"vertical",onSubmit:d},{default:t(()=>[e(g,{field:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(p,{modelValue:a(o).username,"onUpdate:modelValue":s[0]||(s[0]=u=>a(o).username=u),placeholder:"\u7528\u6237\u540D\uFF1Aadmin",onKeyup:b(d,["enter"])},{prefix:t(()=>[e(y)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(g,{field:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(p,{modelValue:a(o).password,"onUpdate:modelValue":s[1]||(s[1]=u=>a(o).password=u),placeholder:"\u5BC6\u7801\uFF1Aadmin",type:"password",onKeyup:b(d,["enter"])},{prefix:t(()=>[e(w)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(V,{size:16,direction:"vertical"},{default:t(()=>[h("div",R,[e(x,{checked:"rememberPassword",onChange:c.setRememberPassword},{default:t(()=>[U]),_:1},8,["onChange"]),e(k,null,{default:t(()=>[j]),_:1})]),e(f,{type:"primary","html-type":"submit",long:"",loading:a(m)},{default:t(()=>[E]),_:1},8,["loading"]),e(f,{type:"text",long:"",class:"login-form-register-btn"},{default:t(()=>[F]),_:1})]),_:1})]),_:1},8,["model"])])}}};export{T as default};
