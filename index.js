import{A as f,S as p,a as L,i as v}from"./assets/vendor-DilMVqsn.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();document.querySelectorAll(".hero-list-item").forEach(e=>{e.addEventListener("click",n=>{const r=e.querySelector("a");r&&r.click()})});document.addEventListener("DOMContentLoaded",function(){new f(".faq-accordion",{duration:300,showMultiple:!1,openOnInit:[]});const e=document.querySelectorAll(".faq-accordion .ac");e.forEach(n=>{n.querySelector(".ac-trigger").addEventListener("click",()=>{setTimeout(()=>{e.forEach(i=>{i.classList.contains("is-active")?i.classList.add("is-open"):i.classList.remove("is-open")})},10)})})});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-icon"),n=document.querySelector(".mobile-menu"),r=document.querySelector("[data-menu-close]"),i=document.body;e.addEventListener("click",function(){n.classList.add("is-open"),i.classList.add("no-scroll")}),r.addEventListener("click",function(){n.classList.remove("is-open"),i.classList.remove("no-scroll")}),document.querySelectorAll(".mobile-menu-link").forEach(function(s){s.addEventListener("click",function(){n.classList.remove("is-open"),i.classList.remove("no-scroll")})}),document.addEventListener("keydown",function(s){s.key==="Escape"&&(n.classList.remove("is-open"),i.classList.remove("no-scroll"))})});const m=document.querySelector(".menu-btn"),c=document.querySelector(".nav"),d=document.querySelector(".nav-list");m.addEventListener("click",()=>{c.classList.toggle("is-open"),d.classList.toggle("is-open")});const y=d.querySelectorAll("a");y.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("is-open"),d.classList.remove("is-open")})});document.addEventListener("click",e=>{const n=c.contains(e.target),r=m.contains(e.target);!n&&!r&&(c.classList.remove("is-open"),d.classList.remove("is-open"))});document.addEventListener("keydown",e=>{e.key==="Escape"&&(c.classList.remove("is-open"),d.classList.remove("is-open"))});const l=document.querySelector(".slider-nav-prev"),a=document.querySelector(".slider-nav-next");l.disabled=!0;a.addEventListener("click",()=>{o.slideNext()});l.addEventListener("click",()=>{o.slidePrev()});document.addEventListener("keydown",function(e){e.key==="ArrowLeft"&&o.slidePrev(),e.key==="ArrowRight"&&o.slideNext()});E();const o=new p(".swiper-container",{grabCursor:!0,speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{slideChange:function(){l.disabled=!1,a.disabled=!1,o.isEnd&&(a.disabled=!0),o.isBeginning&&(l.disabled=!0)}}});function g(e){const n=document.querySelector(".swiper-wrapper"),r=e.map(({author:i,avatar_url:t,review:s})=>`
           <li class="swiper-slide slider-item">
                <img class="slider-item-img" src="${t}">
                <p class="slider-item-title">${i}</p>
                <p class="slider-item-info">${s}</p>
            </li>             
            `).join("");n.insertAdjacentHTML("beforeend",r)}function w(){document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",`
  
  <div class="slider-error">
    Not found!
  </div>  
  
  `)}async function E(){try{const e=await L.get("https://portfolio-js.b.goit.study/api/reviews");g(e.data)}catch{w(),l.disabled=!0,a.disabled=!0,v.error({title:"Error",message:"Something wrong, try again later!"})}}
//# sourceMappingURL=index.js.map
