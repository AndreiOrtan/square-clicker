(()=>{"use strict";const e=document.getElementById("start-btn"),t=document.createElement("div"),n=document.querySelector("span");let a,o;function r(){t.className="square",t.style.backgroundColor=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}(),document.body.appendChild(t),a=new Date}e.addEventListener("click",r),t.addEventListener("click",(e=>{"square"===e.target.className&&(e.target.classList.toggle("vision"),o=new Date),n.textContent=o-a,setTimeout(r,2e3)}))})();