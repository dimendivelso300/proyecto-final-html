!function(){var e,t,n,o;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 1200px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),$(".nav-list__link").click((function(){$(".menu-wrap").removeClass("is-open")}));var c,l=document.querySelectorAll('a[href*="#"]'),r=!0,a=!1,s=void 0;try{for(var i,d=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))},u=l[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)d(0,i)}catch(e){a=!0,s=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw s}}(c={openTextOneBtn:document.querySelector(".btn-cream"),closeTextOneBtn:document.querySelector(".btn-cream"),textOne:document.querySelector(".text-btn-cream")}).openTextOneBtn.addEventListener("click",(function(){c.textOne.classList.toggle("is-hidden"),c.closeTextOneBtn.classList.toggle("active__cream")})),function(){var e={openTextTwoBtn:document.querySelector(".btn-coffee"),closeTextTwoBtn:document.querySelector(".btn-coffee"),textTwo:document.querySelector(".text-btn-coffee")};e.openTextTwoBtn.addEventListener("click",(function(){e.textTwo.classList.toggle("is-hidden"),e.closeTextTwoBtn.classList.toggle("active__coffee")}))}(),function(){var e={openTextThreeBtn:document.querySelector(".btn-milkshakes"),closeTextThreeBtn:document.querySelector(".btn-milkshakes"),textThree:document.querySelector(".text-btn-milkshakes")};e.openTextThreeBtn.addEventListener("click",(function(){e.textThree.classList.toggle("is-hidden"),e.closeTextThreeBtn.classList.toggle("active__milkshakes")}))}(),window.onscroll=function(){window.pageYOffset>f?m.classList.add("sticky"):m.classList.remove("sticky")};var m=document.getElementById("home"),f=m.offsetTop;!function(){var e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("backdrop--is-hidden"),document.body.classList.toggle("modal-open")}console.log(e.openModalBtn),e.openModalBtn.forEach((function(e){e.addEventListener("click",t)})),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.1bca1243.js.map
