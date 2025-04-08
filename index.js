import{A as f,S as v,N as g,a as y,i as w}from"./assets/vendor-YT3qo1zF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();document.querySelectorAll(".hero-list-item").forEach(e=>{e.addEventListener("click",t=>{const n=e.querySelector("a");n&&n.click()})});new f(".aboutme-ac-list",{elementClass:"aboutme-ac-item",triggerClass:"aboutme-ac-trigger",panelClass:"aboutme-ac-panel",activeClass:"is-active",duration:400,showMultiple:!1,collapse:!0,openOnInit:[0]});let c=0;const l=new v(".swiper",{modules:[g],loop:!0,spaceBetween:0,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},initialSlide:0,slideActiveClass:"my-active-slide",keyboard:{enabled:!0,onlyInViewport:!1},touchEventsTarget:"swiper",on:{slideChangeTransitionStart(){const e=l.slides.length,t=l.realIndex;document.querySelectorAll(".swiper-slide").forEach(s=>{s.classList.remove("rotate-left","rotate-right")});let n="right";t>c&&t-c<e/2||t<c&&c-t>e/2?n="right":n="left",c=t;const r=document.querySelector(".my-active-slide");r&&r.classList.add(n==="right"?"rotate-right":"rotate-left")}}});document.addEventListener("keydown",e=>{l.slides.forEach(t=>{t.setAttribute("tabindex","0")}),e.key==="ArrowRight"?l.slideNext():e.key==="ArrowLeft"&&l.slidePrev()});document.addEventListener("DOMContentLoaded",function(){new f(".faq-accordion",{duration:300,showMultiple:!1,openOnInit:[]});const e=document.querySelectorAll(".faq-accordion .ac");e.forEach(t=>{t.querySelector(".ac-trigger").addEventListener("click",()=>{setTimeout(()=>{e.forEach(r=>{r.classList.contains("is-active")?r.classList.add("is-open"):r.classList.remove("is-open")})},10)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-icon"),t=document.querySelector(".mobile-menu"),n=document.querySelector("[data-menu-close]"),r=document.body;e.addEventListener("click",function(){t.classList.add("is-open"),r.classList.add("no-scroll")}),n.addEventListener("click",function(){t.classList.remove("is-open"),r.classList.remove("no-scroll")}),document.querySelectorAll(".mobile-menu-link").forEach(function(i){i.addEventListener("click",function(){t.classList.remove("is-open"),r.classList.remove("no-scroll")})}),document.addEventListener("keydown",function(i){i.key==="Escape"&&(t.classList.remove("is-open"),r.classList.remove("no-scroll"))})});const L=document.querySelector(".menu-btn"),a=document.querySelector(".nav"),u=document.querySelector(".nav-list");L.addEventListener("click",()=>{a.classList.toggle("is-open"),u.classList.toggle("is-open")});const b=u.querySelectorAll("a");b.forEach(e=>{e.addEventListener("click",()=>{a.classList.remove("is-open"),u.classList.remove("is-open")})});document.addEventListener("click",e=>{const t=a.contains(e.target),n=L.contains(e.target);!t&&!n&&(a.classList.remove("is-open"),u.classList.remove("is-open"))});document.addEventListener("keydown",e=>{e.key==="Escape"&&(a.classList.remove("is-open"),u.classList.remove("is-open"))});const d=document.querySelector(".slider-nav-prev"),m=document.querySelector(".slider-nav-next");d.disabled=!0;m.addEventListener("click",()=>{o.slideNext()});d.addEventListener("click",()=>{o.slidePrev()});document.addEventListener("keydown",function(e){e.key==="ArrowLeft"&&o.slidePrev(),e.key==="ArrowRight"&&o.slideNext()});k();const o=new v(".swiper-container",{grabCursor:!0,speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{slideChange:function(){d.disabled=!1,m.disabled=!1,o.isEnd&&(m.disabled=!0),o.isBeginning&&(d.disabled=!0)}}});function E(e){const t=document.querySelector(".swiper-wrapper"),n=e.map(({author:r,avatar_url:s,review:i})=>`
           <li class="swiper-slide slider-item">
                <img class="slider-item-img" src="${s}">
                <p class="slider-item-title">${r}</p>
                <p class="slider-item-info">${i}</p>
            </li>             
            `).join("");t.insertAdjacentHTML("beforeend",n)}function h(){document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",`
  
  <div class="slider-error">
    Not found!
  </div>  
  
  `)}async function k(){try{const e=await y.get("https://portfolio-js.b.goit.study/api/reviews");E(e.data)}catch{h(),d.disabled=!0,m.disabled=!0,w.error({title:"Error",message:"Something wrong, try again later!"})}}
//# sourceMappingURL=index.js.map
