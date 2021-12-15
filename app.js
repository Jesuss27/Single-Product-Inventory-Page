const mobileHamburger = document.querySelector("#mobile");
const mobileLinks = document.querySelector(".mobile-links")




mobileHamburger.addEventListener("click", () => {
    mobileHamburger.classList.toggle("active")
    mobileLinks.classList.toggle("is-active")
    console.log("click")
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
       mobileHamburger.classList.remove("active");
        mobileLinks.classList.remove("is-active");
    }
})

