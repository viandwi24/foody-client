import{a as z,e as w,Q as m,N as s,o as d,b as o,u as e,s as r,r as u,$ as f,p as b,w as B,a0 as N,a1 as _}from"./entry.e5b1d4c0.js";import{u as C}from"./useSyncProps.48a7bd56.js";const E={class:r("text-input-container relative flex")},P={class:"text-input-wrapper relative flex flex-1"},D=["type","placeholder"],I=z({__name:"TextInput",props:{modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},size:{type:String,default:"md"},type:{type:String,default:"default"}},emits:["update:modelValue"],setup(a,{emit:g}){const n=a,t=w(),c=m({xs:"px-1 py-0.5",sm:"px-2 py-1.5",md:"px-4 py-2",lg:"px-5 py-3"}),x=m({xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}),i=C(n,"modelValue",g),S=s(()=>typeof t.prefix<"u"||typeof t["prefix-disabled"]<"u"),v=s(()=>typeof t.suffix<"u"),l=s(()=>"border-gray-900/10 dark:border-gray-50/[0.2]"),$=s(()=>"dark:focus:border-white focus:border-gray-900"),h=s(()=>c[n.size]||c.md),k=s(()=>x[n.size]||x.md);return(p,y)=>(d(),o("div",E,[e(t)["prefix-disabled"]?(d(),o("div",{key:0,class:r(`flex rounded-l bg-gray-100 dark:bg-slate-800 text-gray-500 border ${e(l)}`)},[u(p.$slots,"prefix-disabled")],2)):f("",!0),e(t).prefix?(d(),o("div",{key:1,class:r(`flex rounded-l border ${e(l)}`)},[u(p.$slots,"prefix")],2)):f("",!0),b("div",P,[B(b("input",{"onUpdate:modelValue":y[0]||(y[0]=V=>_(i)?i.value=V:null),class:r(`text-input w-full flex-1 bg-transparent outline-none border ${e(S)?"":"rounded-l"} ${e(v)?"":"rounded-r"} ${e(l)} ${e($)} ${e(h)} ${e(k)}`),type:a.type,placeholder:a.placeholder},null,10,D),[[N,e(i)]])]),e(t).suffix?(d(),o("div",{key:2,class:r(`flex rounded-r border ${e(l)}`)},[u(p.$slots,"suffix")],2)):f("",!0)]))}});export{I as _};