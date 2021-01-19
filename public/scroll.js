window.addEventListener("scroll", function() {
    let header = document.getElementById("headerLogo")
    header.classList.toggle("headerLogoOnScroll", window.scrollY > 120)
})

