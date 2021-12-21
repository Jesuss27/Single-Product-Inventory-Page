const mobileHamburger = document.querySelector("#mobile");
const mobileLinks = document.querySelector(".mobile-links")
const heart = document.querySelector(".heart-icon")
const desktopHamburger = document.querySelector("#desktop")



heart.addEventListener("click",() => {
    heart.classList.toggle("clicked")
    console.log(heart)
})

mobileHamburger.addEventListener("click", () => {
    mobileHamburger.classList.toggle("active")
    mobileLinks.classList.toggle("is-active")
    console.log("click")
})
desktopHamburger.addEventListener("click", () => {
    desktopHamburger.classList.toggle("desktop-active")
    mobileLinks.classList.toggle("is-active")
    console.log(desktopHamburger)
})

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
       mobileHamburger.classList.remove("active");
        mobileLinks.classList.remove("is-active");
    }
})

