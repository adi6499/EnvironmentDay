let box = document.querySelectorAll(".box")
 

window.addEventListener("scroll", (e) => {
    let scrollTop = document.documentElement.scrollTop
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scrollTop / scrollHeight * 100
    if (scrolled >= 22) {
        box.forEach((b,i) => {
            b.classList.add("animation")
            b.style.animationDelay = `${i * 0.0625}s`
        })
    } else {
        box.forEach((b,i) => {
            b.classList.remove("animation")
            b.style.animationDelay = `${i * 0.0625}s`
        })
    }
    let bar = document.querySelectorAll(".bar")
    bar.forEach((b)=>{
        b.style.height=`${scrolled}%`
        b.style.background=`hsl(${scrolled},100%,50%)`
        b.style.boxShadow=`0px 0px 35px hsl(${scrolled},100%,50%)`
    })
})
