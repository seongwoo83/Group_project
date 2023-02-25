const mMainImg = document.querySelectorAll(".img_wrap li img:last-child");
window.addEventListener("resize", ()=>{
    let pageWidth = window.innerWidth;
    if(pageWidth<=767){
        document.querySelectorAll(".img_wrap li img:first-child").forEach(ele=>{
            ele.style.display = "none";
        })
        mMainImg.forEach(ele=>{
            ele.style.display = "block";
        })
    }
})