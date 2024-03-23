const elBtn = document.querySelector(".js-menu");
elBtn.addEventListener("click", ()=>{
    elBtn.closest(".site-header").classList.toggle("open-menu")
})