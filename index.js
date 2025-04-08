import{A as y,S as w,N as h,a as b,i as k}from"./assets/vendor-DiP2cigh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();document.querySelectorAll(".hero-list-item").forEach(e=>{e.addEventListener("click",t=>{const i=e.querySelector("a");i&&i.click()})});new y(".aboutme-ac-list",{elementClass:"aboutme-ac-item",triggerClass:"aboutme-ac-trigger",panelClass:"aboutme-ac-panel",activeClass:"is-active",duration:400,showMultiple:!1,collapse:!0,openOnInit:[0]});let c=0;const l=new w(".swiper",{modules:[h],loop:!0,spaceBetween:0,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},initialSlide:0,slideActiveClass:"my-active-slide",keyboard:{enabled:!0,onlyInViewport:!1},touchEventsTarget:"swiper",on:{slideChangeTransitionStart(){const e=l.slides.length,t=l.realIndex;document.querySelectorAll(".swiper-slide").forEach(s=>{s.classList.remove("rotate-left","rotate-right")});let i="right";t>c&&t-c<e/2||t<c&&c-t>e/2?i="right":i="left",c=t;const o=document.querySelector(".my-active-slide");o&&o.classList.add(i==="right"?"rotate-right":"rotate-left")}}});document.addEventListener("keydown",e=>{l.slides.forEach(t=>{t.setAttribute("tabindex","0")}),e.key==="ArrowRight"?l.slideNext():e.key==="ArrowLeft"&&l.slidePrev()});const S=document.querySelectorAll(".covers-list"),L=document.querySelector(".covers");window.addEventListener("scroll",q);function q(){S.forEach(e=>{const t=L.getBoundingClientRect().top,i=L.getBoundingClientRect().bottom;t<window.innerHeight&&i>=0?e.classList.add("animate"):e.classList.remove("animate")})}document.addEventListener("DOMContentLoaded",function(){new y(".faq-accordion",{duration:300,showMultiple:!1,openOnInit:[]});const e=document.querySelectorAll(".faq-accordion .ac");e.forEach(t=>{t.querySelector(".ac-trigger").addEventListener("click",()=>{setTimeout(()=>{e.forEach(o=>{o.classList.contains("is-active")?o.classList.add("is-open"):o.classList.remove("is-open")})},10)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-icon"),t=document.querySelector(".mobile-menu"),i=document.querySelector("[data-menu-close]"),o=document.body;e.addEventListener("click",function(){t.classList.add("is-open"),o.classList.add("no-scroll")}),i.addEventListener("click",function(){t.classList.remove("is-open"),o.classList.remove("no-scroll")}),document.querySelectorAll(".mobile-menu-link").forEach(function(n){n.addEventListener("click",function(){t.classList.remove("is-open"),o.classList.remove("no-scroll")})}),document.addEventListener("keydown",function(n){n.key==="Escape"&&(t.classList.remove("is-open"),o.classList.remove("no-scroll"))})});const E=document.querySelector(".menu-btn"),a=document.querySelector(".nav"),u=document.querySelector(".nav-list");E.addEventListener("click",()=>{a.classList.toggle("is-open"),u.classList.toggle("is-open")});const A=u.querySelectorAll("a");A.forEach(e=>{e.addEventListener("click",()=>{a.classList.remove("is-open"),u.classList.remove("is-open")})});document.addEventListener("click",e=>{const t=a.contains(e.target),i=E.contains(e.target);!t&&!i&&(a.classList.remove("is-open"),u.classList.remove("is-open"))});document.addEventListener("keydown",e=>{e.key==="Escape"&&(a.classList.remove("is-open"),u.classList.remove("is-open"))});const r=new w(".swiper-container",{grabCursor:!0,speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{slideChange:function(){d.disabled=!1,m.disabled=!1,r.isEnd&&(m.disabled=!0),r.isBeginning&&(d.disabled=!0)}}}),d=document.querySelector(".slider-nav-prev"),m=document.querySelector(".slider-nav-next");d.disabled=!0;m.addEventListener("click",()=>{r.slideNext()});d.addEventListener("click",()=>{r.slidePrev()});document.addEventListener("keydown",function(e){e.key==="ArrowLeft"&&r.slidePrev(),e.key==="ArrowRight"&&r.slideNext()});async function B(){try{const e=await b.get("https://portfolio-js.b.goit.study/api/reviews");C(e.data)}catch{I(),d.disabled=!0,m.disabled=!0,k.error({title:"Error",message:"Something wrong, try again later!"})}}function C(e){const t=document.querySelector(".slider-list"),i=e.map(({author:o,avatar_url:s,review:n})=>`
           <li class="swiper-slide slider-item">
                <img class="slider-item-img" src="${s}">
                <p class="slider-item-title">${o}</p>
                <p class="slider-item-info">${n}</p>
            </li>             
            `).join("");t.insertAdjacentHTML("beforeend",i)}function I(){document.querySelector(".slider-list").insertAdjacentHTML("beforeend",`
  <div class="slider-error">
    Not found!
  </div>  
  `)}B();const f=document.getElementById("thankYouModal"),P=document.getElementById("closeModal"),g=document.getElementById("contactForm");function x(){f.classList.add("show")}function v(){f.classList.remove("show")}g.addEventListener("submit",e=>{e.preventDefault(),x(),g.reset()});P.addEventListener("click",v);f.addEventListener("click",e=>{e.target===f&&v()});document.addEventListener("keydown",e=>{e.key==="Escape"&&v()});
//# sourceMappingURL=index.js.map
