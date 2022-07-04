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

// testimontial section slide
var swiper = new Swiper(".mySwiper", {
    loop:true,
    speed: 350,
    slidesPerView: 2,
    autoplay: true,
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    }, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
// end

// scroll to top button
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