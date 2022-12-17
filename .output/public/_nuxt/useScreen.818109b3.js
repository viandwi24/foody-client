import{o as y,V as I,w as R,t as L,R as O,u as B}from"./open-closed.bcd7c5c7.js";import{o as m,P as w,M as b}from"./focus-management.c75eb7cc.js";import{b as W}from"./use-resolve-button-type.3c76d206.js";import{a as j,f as $}from"./hidden.e3ad9401.js";import{a as T,f as g,a2 as S,N as x,z as M,a3 as C,F as G,k as E,a4 as N,i as U,Q as q}from"./entry.ae18c763.js";import{t as z}from"./micro-task.22f8fa92.js";let H=T({props:{onFocus:{type:Function,required:!0}},setup(e){let s=g(!0);return()=>s.value?S($,{as:"button",type:"button",features:j.Focusable,onFocus(o){o.preventDefault();let i,t=50;function r(){var a;if(t--<=0){i&&cancelAnimationFrame(i);return}if((a=e.onFocus)!=null&&a.call(e)){s.value=!1,cancelAnimationFrame(i);return}i=requestAnimationFrame(r)}i=requestAnimationFrame(r)}}):null}}),D=Symbol("TabsContext");function A(e){let s=U(D,null);if(s===null){let o=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,A),o}return s}let Z=T({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:s,attrs:o,emit:i}){let t=g(null),r=g([]),a=g([]),d=x(()=>e.selectedIndex!==null),c=x(()=>d.value?e.selectedIndex:t.value),p={selectedIndex:t,orientation:x(()=>e.vertical?"vertical":"horizontal"),activation:x(()=>e.manual?"manual":"auto"),tabs:r,panels:a,setSelectedIndex(l){c.value!==l&&i("change",l),d.value||(t.value=l)},registerTab(l){r.value.includes(l)||r.value.push(l)},unregisterTab(l){let u=r.value.indexOf(l);u!==-1&&r.value.splice(u,1)},registerPanel(l){a.value.includes(l)||a.value.push(l)},unregisterPanel(l){let u=a.value.indexOf(l);u!==-1&&a.value.splice(u,1)}};return M(D,p),C(()=>{var l;if(p.tabs.value.length<=0||e.selectedIndex===null&&t.value!==null)return;let u=p.tabs.value.map(h=>y(h)).filter(Boolean),f=u.filter(h=>!h.hasAttribute("disabled")),P=(l=e.selectedIndex)!=null?l:e.defaultIndex;if(P<0)t.value=u.indexOf(f[0]);else if(P>p.tabs.value.length)t.value=u.indexOf(f[f.length-1]);else{let h=u.slice(0,P),n=[...u.slice(P),...h].find(v=>f.includes(v));if(!n)return;t.value=u.indexOf(n)}}),()=>{let l={selectedIndex:t.value};return S(G,[r.value.length<=0&&S(H,{onFocus:()=>{for(let u of r.value){let f=y(u);if((f==null?void 0:f.tabIndex)===0)return f.focus(),!0}return!1}}),I({theirProps:{...o,...R(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:s,attrs:o,name:"TabGroup"})])}}}),ee=T({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:s,slots:o}){let i=A("TabList");return()=>{let t={selectedIndex:i.selectedIndex.value},r={role:"tablist","aria-orientation":i.orientation.value};return I({ourProps:r,theirProps:e,slot:t,attrs:s,slots:o,name:"TabList"})}}}),te=T({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},setup(e,{attrs:s,slots:o,expose:i}){let t=A("Tab"),r=`headlessui-tabs-tab-${L()}`,a=g(null);i({el:a,$el:a}),E(()=>t.registerTab(a)),N(()=>t.unregisterTab(a));let d=x(()=>t.tabs.value.indexOf(a)),c=x(()=>d.value===t.selectedIndex.value);function p(n){let v=t.tabs.value.map(F=>y(F)).filter(Boolean);if(n.key===m.Space||n.key===m.Enter){n.preventDefault(),n.stopPropagation(),t.setSelectedIndex(d.value);return}switch(n.key){case m.Home:case m.PageUp:return n.preventDefault(),n.stopPropagation(),w(v,b.First);case m.End:case m.PageDown:return n.preventDefault(),n.stopPropagation(),w(v,b.Last)}if(B(t.orientation.value,{vertical(){if(n.key===m.ArrowUp)return w(v,b.Previous|b.WrapAround);if(n.key===m.ArrowDown)return w(v,b.Next|b.WrapAround)},horizontal(){if(n.key===m.ArrowLeft)return w(v,b.Previous|b.WrapAround);if(n.key===m.ArrowRight)return w(v,b.Next|b.WrapAround)}}))return n.preventDefault()}function l(){var n;(n=y(a))==null||n.focus()}let u=g(!1);function f(){var n;u.value||(u.value=!0,!e.disabled&&((n=y(a))==null||n.focus(),t.setSelectedIndex(d.value),z(()=>{u.value=!1})))}function P(n){n.preventDefault()}let h=W(x(()=>({as:e.as,type:s.type})),a);return()=>{var n;let v={selected:c.value},F={ref:a,onKeydown:p,onFocus:t.activation.value==="manual"?l:f,onMousedown:P,onClick:f,id:r,role:"tab",type:h.value,"aria-controls":(n=y(t.panels.value[d.value]))==null?void 0:n.id,"aria-selected":c.value,tabIndex:c.value?0:-1,disabled:e.disabled?!0:void 0};return I({ourProps:F,theirProps:e,slot:v,attrs:s,slots:o,name:"Tab"})}}}),ae=T({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:s,attrs:o}){let i=A("TabPanels");return()=>{let t={selectedIndex:i.selectedIndex.value};return I({theirProps:e,ourProps:{},slot:t,attrs:o,slots:s,name:"TabPanels"})}}}),re=T({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:s,slots:o,expose:i}){let t=A("TabPanel"),r=`headlessui-tabs-panel-${L()}`,a=g(null);i({el:a,$el:a}),E(()=>t.registerPanel(a)),N(()=>t.unregisterPanel(a));let d=x(()=>t.panels.value.indexOf(a)),c=x(()=>d.value===t.selectedIndex.value);return()=>{var p;let l={selected:c.value},u={ref:a,id:r,role:"tabpanel","aria-labelledby":(p=y(t.tabs.value[d.value]))==null?void 0:p.id,tabIndex:c.value?0:-1};return!c.value&&e.unmount&&!e.static?S($,{as:"span",...u}):I({ourProps:u,theirProps:e,slot:l,attrs:s,slots:o,features:O.Static|O.RenderStrategy,visible:c.value,name:"TabPanel"})}}});var K=(e=>(e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.EXTRA_LARGE="xl",e))(K||{});const k={sm:576,md:768,lg:992,xl:1200},ne=()=>{const e=q({width:0,height:0}),s=g("sm"),o=r=>{r===void 0&&(r=e.width);const{["sm"]:a,["md"]:d,["lg"]:c,["xl"]:p}=k;return r<Number(a)?"sm":r<Number(d)?"md":r<Number(c)?"lg":(r<Number(p),"xl")},i=()=>{const{innerWidth:r,innerHeight:a}=window;e.width=r,e.height=a,s.value=o()},t=r=>{const{["sm"]:a,["md"]:d,["lg"]:c,["xl"]:p}=k,l=e.width;return r==="sm"?l>=Number(a):r==="md"?l>=Number(d):r==="lg"?l>=Number(c):r==="xl"?l>=Number(p):!1};return E(()=>{typeof window>"u"||(window.addEventListener("resize",i),o(window.innerWidth))}),N(()=>{typeof window>"u"||window.removeEventListener("resize",i)}),{getSize:o,screenSize:e,current:s,higherThan:t}};export{K as S,ee as a,re as b,Z as l,te as n,ae as r,ne as u};
