import{o as u}from"./open-closed.a1983147.js";import{f as r,k as l,a3 as f}from"./entry.e5b1d4c0.js";function a(t,n){if(t)return t;let e=n!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function v(t,n){let e=r(a(t.value.type,t.value.as));return l(()=>{e.value=a(t.value.type,t.value.as)}),f(()=>{var o;e.value||!u(n)||u(n)instanceof HTMLButtonElement&&!((o=u(n))!=null&&o.hasAttribute("type"))&&(e.value="button")}),e}export{v as b};