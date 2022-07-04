// start job location section slide
var swiper2 = new Swiper(".mySwiper_box", {
    loop:true,
    autoplay:true,
    slidesPerView:1,
    spaceBetween: 30,
    speed:350,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
//   end

// header change scroll
let header = document.querySelector(".header")

window.onscroll =()=>{
    if(window.scrollY>=100){
        header.classList.add("scroll_change");
    }else{
        header.classList.remove("scroll_change");
    }
}
// end

window.addEventListener('scroll',function(){
    let scroll = document.querySelector(".scroll_to_button");
    scroll.classList.toggle("scroll_visibilty_opacity",window.scrollY>500);
})

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
// end