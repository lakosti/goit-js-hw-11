import{S as u,i as l}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",h="42030111-51447223cbabab8b20d1b63f9",i={form:document.querySelector(".form"),list:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",f);const m=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(o){o.preventDefault();const t=o.currentTarget,s=t.elements.search.value;i.loader.style.display="block",p(s).then(a=>{const e=a.hits;if(!s||!e.length){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i.list.innerHTML="";return}i.list.innerHTML=y(e),m.refresh()}).catch(a=>{l.error({title:"Error",message:`${a}`})}).finally(()=>{t.reset(),i.loader.style.display="none"})}function p(o){const t=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function y(o){return o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:c})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-img"
              src="${t}"
              alt="${a}"

            />
          </a>
          <div class="wrapper">
            <div class="wrap">
              <h2 class="header">Likes</h2>
              <p class="numbers">${e}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Views</h2>
              <p class="numbers">${r}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Comments</h2>
              <p class="numbers">${n}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Downloads</h2>
              <p class="numbers">${c}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
