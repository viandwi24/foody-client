import{_ as z}from"./Title.vue_vue_type_script_setup_true_lang.e3b6d23a.js";import C from"./Header.76066d36.js";import{_ as $}from"./Title.vue_vue_type_script_setup_true_lang.8766396f.js";import{_ as k}from"./Button.vue_vue_type_script_setup_true_lang.4815a5e4.js";import v from"./index.b992b5a8.js";import{_ as V}from"./TextInput.vue_vue_type_script_setup_true_lang.94abf3c1.js";import N from"./Body.d03422f3.js";import h from"./Wrapper.32c82d9d.js";import{u as P}from"./useLang.45f198c8.js";import{a as B,M as b,a7 as S,a8 as T,o as H,c as I,m as i,l as e,p as n,x as r,u as t,t as c}from"./entry.fd4c3c58.js";import{c as M}from"./str.e3d4e921.js";import"./useSyncProps.23073ba0.js";const U={class:""},j={class:"mb-2"},D={class:"flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"},F={class:"mb-2"},L={class:"capitalize"},W={class:"mb-2"},q={class:"flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"},se=B({__name:"test",setup(A){const{t:u}=P();b(()=>({title:M(u("pages.test.title")),meta:[{name:"description",content:u("pages.test.description")}]}));const a=S(),o=T();return(s,m)=>{const x=z,y=C,d=$,l=k,_=v,f=V,g=N,w=h;return H(),I(w,null,{default:i(()=>[e(y,null,{default:i(()=>[e(x,{text:s.$t("pages.test.title"),class:"capitalize"},null,8,["text"])]),_:1}),e(g,null,{default:i(()=>[e(_,null,{default:i(()=>[e(d,{text:s.$t("pages.test.counter"),class:"capitalize"},null,8,["text"]),n("div",U,[n("div",j,"Counter : "+r(t(a).count),1),n("div",D,[e(l,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:s.$t("pages.test.increment"),onClick:c(t(a).increment,["prevent"])},null,8,["text","onClick"]),e(l,{class:"w-full md:w-auto",type:"secondary",size:"sm",text:`${s.$t("pages.test.increment")} 2x`,onClick:c(t(a).increment2x,["prevent"])},null,8,["text","onClick"]),e(l,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:s.$t("pages.test.decrement"),onClick:c(t(a).decrement,["prevent"])},null,8,["text","onClick"]),e(l,{class:"w-full md:w-auto capitalize",type:"secondary",size:"sm",text:s.$t("pages.test.reset"),onClick:c(t(a).reset,["prevent"])},null,8,["text","onClick"])])])]),_:1}),e(_,null,{default:i(()=>[e(d,{text:s.$t("pages.test.identity"),class:"capitalize"},null,8,["text"]),n("div",F,[n("span",L,r(s.$t("pages.test.full_name"))+" : ",1),n("span",null,r(t(o).fullName),1)]),n("div",W,[n("div",q,[e(f,{modelValue:t(o).firstName,"onUpdate:modelValue":m[0]||(m[0]=p=>t(o).firstName=p),size:"md",class:"w-full md:w-1/3"},null,8,["modelValue"]),e(f,{modelValue:t(o).lastName,"onUpdate:modelValue":m[1]||(m[1]=p=>t(o).lastName=p),size:"md",class:"w-full md:w-1/3"},null,8,["modelValue"]),e(l,{class:"capitalize w-full md:w-auto",text:s.$t("pages.test.reset"),type:"secondary",size:"md",onClick:c(t(o).reset,["prevent"])},null,8,["text","onClick"])])])]),_:1})]),_:1})]),_:1})}}});export{se as default};