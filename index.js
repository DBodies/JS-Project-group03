import{S as a,a as u,i as p}from"./assets/vendor-DhkyhFKW.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const o=document.querySelector(".slider-nav-prev"),d=document.querySelector(".slider-nav-next");o.disabled=!0;d.addEventListener("click",()=>{s.slideNext()});o.addEventListener("click",()=>{s.slidePrev()});document.addEventListener("keydown",function(t){t.key==="ArrowLeft"&&s.slidePrev(),t.key==="ArrowRight"&&s.slideNext()});w();const s=new a(".swiper-container",{grabCursor:!0,speed:500,slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{slideChange:function(){o.disabled=!1,d.disabled=!1,s.isEnd&&(d.disabled=!0),s.isBeginning&&(o.disabled=!0)}}});function f(t){const i=document.querySelector(".swiper-wrapper"),c=t.map(({author:n,avatar_url:e,review:r})=>`
           <li class="swiper-slide slider-item">
                <img class="slider-item-img" src="${e}">
                <p class="slider-item-title">${n}</p>
                <p class="slider-item-info">${r}</p>
            </li>             
            `).join("");i.insertAdjacentHTML("beforeend",c)}function m(){document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",`
  
  <div class="slider-error">
    Not found!
  </div>  
  
  `)}async function w(){try{debugger;const t=await u.get("https://portfolio-js.b.goit.study/api/reviews");f(t.data)}catch{m(),o.disabled=!0,d.disabled=!0,p.error({title:"Error",message:"Something wrong, try again later!"})}}
//# sourceMappingURL=index.js.map
