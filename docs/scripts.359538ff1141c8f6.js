function runMenu(){let e=document.querySelector("#menu-bar"),t=document.querySelector(".phone-nav"),c=document.querySelector(".phone-nav").children,n=document.querySelector("#contactMenu"),l=document.querySelector(".contact-insider-link"),r=document.querySelector("app-home");if(e.classList.toggle("fa-times"),e.className.includes("fa-times")){let o=function(){e.classList.remove("fa-times"),hideMenu(t),hideMenu(l),r.style="display:none;"},i=function(){n.classList.add("active"),n.className.includes("active")&&showMenu(l)};showMenu(t),c[0].addEventListener("click",o),c[1].addEventListener("click",o),c[2].addEventListener("click",o),n.addEventListener("click",i)}else hideMenu(t),hideMenu(l)}function hideMenu(e){e.style="transform: rotateX(90deg)"}function showMenu(e){e.style="transform: rotateX(0deg)"}window.onload=()=>{let e=document.querySelector(".home-container .btn1"),t=document.querySelector("app-home"),c=document.querySelector(".computer-nav").children;if(e.onclick=()=>{t.style="display:none;"},window.innerWidth>1e3)for(let n=0;n<3;n++)c[n].onclick=()=>{t.style="display:none;"};else document.querySelector("#menu-bar").addEventListener("click",runMenu)},window.onscroll=()=>{let e=document.querySelector("#menu-bar"),t=document.querySelector(".phone-nav"),c=document.querySelector(".contact-insider-link");e.classList.remove("fa-times"),hideMenu(t),hideMenu(c)};