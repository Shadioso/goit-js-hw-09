const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let r=null;e.addEventListener("click",(()=>{e.disabled=!0,r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(()=>{e.disabled=!1,clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.edf2498e.js.map
