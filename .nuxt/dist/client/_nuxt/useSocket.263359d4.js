import{k as n,ae as e,af as c,N as i}from"./entry.fd4c3c58.js";const s="ws://localhost:4000",w=()=>(n(()=>{if(!window.io){const o=e(s);t(o),window.io=o}console.log("socket.io instance created",window.io)}),c(()=>{window.io&&(window.io.disconnect(),window.io=void 0)}),{socket:i(()=>window.io)}),t=o=>{o.on("connect",()=>{console.log("[socket.io] connected")}),o.on("disconnect",()=>{console.log("[socket.io] disconnected")})};export{w as u};
