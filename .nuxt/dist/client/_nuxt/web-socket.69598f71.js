import{C as u,D as i}from"./entry.ae18c763.js";const n={log:(...t)=>console.log("[Content]",...t),warn:(...t)=>console.warn("[Content]",...t)};let e;function g(){if(!window.WebSocket){n.warn("Could not enable hot reload, your browser does not support WebSocket.");return}const t=o=>{try{if(!JSON.parse(o.data))return;i()}catch{}},s=()=>n.log("WS connected!"),a=o=>{switch(o.code){case"ECONNREFUSED":r(!0);break;default:n.warn("WS Error:",o);break}},l=o=>{o.code===1e3||o.code===1005?n.log("WS closed!"):r(!0)},r=(o=!1)=>{if(o){n.log("WS reconnecting.."),setTimeout(r,1e3);return}if(e){try{e.close()}catch{}e=void 0}const c=`${u().public.content.wsUrl}ws`;n.log(`WS connect to ${c}`),e=new WebSocket(c),e.onopen=s,e.onmessage=t,e.onerror=a,e.onclose=l};return r(),{connect:r}}export{g as useContentWebSocket};
