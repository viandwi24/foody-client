import{o as u}from"./open-closed.bcd7c5c7.js";import{f as r,k as l,a3 as f}from"./entry.ae18c763.js";function a(t,n){if(t)return t;let e=n!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function v(t,n){let e=r(a(t.value.type,t.value.as));return l(()=>{e.value=a(t.value.type,t.value.as)}),f(()=>{var o;e.value||!u(n)||u(n)instanceof HTMLButtonElement&&!((o=u(n))!=null&&o.hasAttribute("type"))&&(e.value="button")}),e}export{v as b};