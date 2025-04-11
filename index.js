import{A as M,S as E,N as b,K as w,a as x,i as D}from"./assets/vendor-D4dcv84H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();new M(".aboutme-ac-list",{elementClass:"aboutme-ac-item",triggerClass:"aboutme-ac-trigger",panelClass:"aboutme-ac-panel",activeClass:"is-active",duration:400,showMultiple:!1,collapse:!0,openOnInit:[0]});let l=0;const C=new E(".aboutme-swiper",{modules:[b,w],loop:!0,spaceBetween:0,slidesPerView:"auto",navigation:{nextEl:".aboutme-swiper-button-next",prevEl:".aboutme-swiper-button-prev"},initialSlide:0,slideActiveClass:"aboutme-active-slide",wrapperClass:"aboutme-swiper-wrapper",slideClass:"aboutme-swiper-slide",keyboard:{enabled:!0,onlyInViewport:!0},touchEventsTarget:"swiper",on:{slideChangeTransitionStart(){const e=C.slides.length,t=C.realIndex;document.querySelectorAll(".aboutme-swiper-slide").forEach(s=>{s.classList.remove("rotate-left","rotate-right")});let n="right";t>l&&t-l<e/2||t<l&&l-t>e/2?n="right":n="left",l=t;const o=document.querySelector(".aboutme-active-slide");o&&o.classList.add(n==="right"?"rotate-right":"rotate-left")}}}),T=document.querySelectorAll(".covers-list"),I=document.querySelector(".covers");window.addEventListener("scroll",j);function j(){T.forEach(e=>{const t=I.getBoundingClientRect().top,n=I.getBoundingClientRect().bottom;t<window.innerHeight&&n>=0?e.classList.add("animate"):e.classList.remove("animate")})}document.addEventListener("DOMContentLoaded",function(){new M(".faq-accordion",{duration:500,showMultiple:!1,openOnInit:[]});const e=document.querySelectorAll(".faq-accordion .ac");e.forEach(t=>{t.querySelector(".ac-trigger").addEventListener("click",()=>{setTimeout(()=>{e.forEach(o=>{o.classList.contains("is-active")?o.classList.add("is-open"):o.classList.remove("is-open")})},10)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-icon"),t=document.querySelector(".mobile-menu"),n=document.querySelector("[data-menu-close]"),o=document.body;function s(c){c.key==="Escape"&&(t.classList.remove("is-open"),o.classList.remove("no-scroll"),document.removeEventListener("keydown",s))}e.addEventListener("click",function(){t.classList.add("is-open"),o.classList.add("no-scroll"),document.addEventListener("keydown",s)}),n.addEventListener("click",function(){t.classList.remove("is-open"),o.classList.remove("no-scroll"),document.removeEventListener("keydown",s)}),document.querySelectorAll(".mobile-menu-link").forEach(function(c){c.addEventListener("click",function(){t.classList.remove("is-open"),o.classList.remove("no-scroll"),document.removeEventListener("keydown",s)})})});const A=document.querySelector(".menu-btn"),f=document.querySelector(".nav"),h=document.querySelector(".nav-list");function P(e){e.key==="Escape"&&g()}function V(){f.classList.add("is-open"),h.classList.add("is-open"),document.addEventListener("keydown",P)}function g(){f.classList.remove("is-open"),h.classList.remove("is-open"),document.removeEventListener("keydown",P)}A.addEventListener("click",()=>{f.classList.contains("is-open")?g():V()});const $=h.querySelectorAll("a");$.forEach(e=>{e.addEventListener("click",()=>{g()})});document.addEventListener("click",e=>{const t=f.contains(e.target),n=A.contains(e.target);!t&&!n&&g()});document.querySelectorAll(".hero-list-item").forEach(e=>{e.addEventListener("click",t=>{const n=e.querySelector("a");n&&n.click()})});const a=new E(".swiper-project",{modules:[b,w],slidesPerView:1,spaceBetween:0,navigation:!1,keyboard:{enabled:!0,onlyInViewport:!1}}),u=document.querySelector(".custom-button-prev"),m=document.querySelector(".custom-button-next");u.addEventListener("click",()=>{a.slidePrev()});m.addEventListener("click",()=>{a.slideNext()});const y=()=>{u.disabled=a.isBeginning,m.disabled=a.isEnd,a.isBeginning?u.classList.add("disabled"):u.classList.remove("disabled"),a.isEnd?m.classList.add("disabled"):m.classList.remove("disabled")};a.on("reachEnd",()=>{y()});a.on("reachBeginning",()=>{y()});a.on("fromEdge",()=>{y()});y();const p=new E(".swiper-container",{modules:[b,w],navigation:!1,keyboard:{enabled:!0,onlyInViewport:!0},grabCursor:!0,speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{slideChange:function(){d.disabled=!1,v.disabled=!1,p.isEnd&&(v.disabled=!0),p.isBeginning&&(d.disabled=!0)}}}),d=document.querySelector(".slider-nav-prev"),v=document.querySelector(".slider-nav-next");d.disabled=!0;v.addEventListener("click",()=>{p.slideNext()});d.addEventListener("click",()=>{p.slidePrev()});async function F(){try{const e=await x.get("https://portfolio-js.b.goit.study/api/reviews");K(e.data)}catch{z(),d.disabled=!0,v.disabled=!0,D.error({title:"Error",message:"Something wrong, try again later!"})}}function K(e){const t=document.querySelector(".slider-list"),n=e.map(({author:o,avatar_url:s,review:r})=>`
           <li class="swiper-slide slider-item">
                <img class="slider-item-img" alt="body" src="${s}">
                <p class="slider-item-title">${o}</p>
                <p class="slider-item-info">${r}</p>
            </li>             
            `).join("");t.insertAdjacentHTML("beforeend",n)}function z(){document.querySelector(".slider-list").insertAdjacentHTML("beforeend",`
  <div class="slider-error">
    Not found!
  </div>  
  `)}F();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("contactForm"),t=document.getElementById("emailInput"),n=document.querySelector(".bottom-input"),o=document.getElementById("emailError"),s=document.getElementById("thankYouModal"),r=document.getElementById("closeModal"),c=i=>{i.key==="Escape"&&s.classList.contains("show")&&L()},k=i=>{s.classList.toggle("show",i),document.body.style.overflow=i?"hidden":"auto",i?document.addEventListener("keydown",c):document.removeEventListener("keydown",c)},S=i=>/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(i),B=i=>{t.style.borderBottom=i?"1px solid #3CBC81":"1px solid #E74A3B",o.textContent=i?"Success!":"Invalid email, try again",o.classList.toggle("success",i),o.classList.toggle("error",!i)};t.addEventListener("input",()=>{const i=S(t.value.trim());B(i)}),n.addEventListener("input",()=>{n.value.length>300&&(n.value=n.value.slice(0,300))});const L=()=>k(!1);r.addEventListener("click",L),s.addEventListener("click",i=>{i.target===s&&L()}),e.addEventListener("submit",async i=>{i.preventDefault();const q=t.value.trim(),O=n.value.trim();if(!S(q)){B(!1);return}try{await x.post("https://portfolio-js.b.goit.study/api/requests",{email:q,comment:O},{headers:{"Content-Type":"application/json"}}),k(!0),e.reset(),t.style.borderBottom="1px solid #aaa",o.textContent="",o.classList.remove("success","error")}catch(N){alert("Error! Please check the entered data and try again."),console.error("Error:",N)}})});
//# sourceMappingURL=index.js.map
