(()=>{function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0});const o={action:e=>{document.addEventListener("DOMContentLoaded",(()=>{for(const t of e){document.querySelectorAll(t.selector).forEach((e=>{try{t.func(e)}catch(e){console.error(e)}}))}}))}};t.default=o,e(t).action([{selector:"article img",func:e=>{const t=document.createElement("a");t.href=e.src,t.target="_blank",t.innerHTML=e.outerHTML,e.replaceWith(t)}}])})();