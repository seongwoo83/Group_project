window.addEventListener("DOMContentLoaded", ()=>{
    /* 메인 이미지 */
    const wrapImg = document.querySelectorAll(".img_wrap li img:first-child");
    /* 썸네일 이미지 */
    const miniImg = document.querySelectorAll(".thumbnail img");
    
    /* 썸네일 미니이미지 클릭시 메인 이미지 변경 */
    miniImg.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            initMenu()
            wrapImg[idx].classList.add("on");
        }
    })
    function initMenu(){
        wrapImg.forEach((ele)=>{
            ele.classList.remove("on");
        });
    }

    /* 중간 박스 슬라이드 효과 */
    /* 슬라이드 버튼 */
    const slideBtn = document.querySelectorAll(".btnbx a");
    /* 슬라이드 전체 박스 */
    const slideBx = document.querySelector(".slide");
    
    /* 슬라이드 박스 변수 */
    let scnt = 0;

    /* 슬라이드 버튼 변수 */
    let seq;
    /* 슬라이드 버튼 눌렀을 때 이동하는 이벤트 */
    slideBtn.forEach((ele,idx)=>{
        ele.onclick = (e)=>{
            goSlide(idx);
            e.preventDefault();
        }
    })

    let prot = 0;
    function goSlide(seq){
        if(prot) return;
        prot++;
        /* 슬라이드 박스 */
        let slideList = document.querySelectorAll(".slide li");
        if(seq===1){
            slideBx.style.transition = "left .4s ease-in-out"
            slideBx.style.left = "-369px"
            setTimeout(() => {
                slideBx.appendChild(slideList[0]);
                slideBx.style.left = "0"
                slideBx.style.transition = "none";
            }, 400);
        }else{
            slideBx.insertBefore(slideList[slideList.length-1], slideList[0]);
            slideBx.style.left = "-369px";
            slideBx.style.transition = "none";
            setTimeout(() => {
                slideBx.style.left = "0";
                slideBx.style.transition = "left .4s ease-in-out";
            }, 10);
        }
        setTimeout(() => {
            prot = 0;
        }, 400);
    }

    /* 이미지에 마우스 올렸을 때 설명 이미지 등장 */
    /* 이미지 변수 */
    const slideImg = document.querySelectorAll(".slidebx")
    console.log('slideImg: ', slideImg);
    slideImg.forEach(ele=>{
        let hiddenImg = ele.querySelector("a");
        ele.addEventListener("mouseenter", ()=>{
            hiddenImg.style.opacity = "1";
        })
        ele.addEventListener("mouseleave", ()=>{
            hiddenImg.style.opacity = "0";
        })
        hiddenImg.onclick = (e)=>{
            e.preventDefault();
        }
    })



});