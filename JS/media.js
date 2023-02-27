window.addEventListener("DOMContentLoaded", ()=>{
    const mMainImg = document.querySelectorAll(".img_wrap>li img");
    console.log(mMainImg);
    window.addEventListener("resize", ()=>{
        let pageWidth = window.innerWidth;
        if(pageWidth<=767){
            mMainImg.forEach((ele,idx) => {
                ele.setAttribute("src", `./IMG/m_main_top${idx+1}.jpg`);
                ele.style.width = "100%";
            })
        }else{
            mMainImg.forEach((ele, idx)=>{
                ele.setAttribute("src", `./IMG/main_top${idx+1}.jpg`);
                ele.style.width = "auto";
            })
        }
    })
})
