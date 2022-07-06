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
    breakpoints: {
      375: {
          loop:true,
          slidesPerView: 1,
          spaceBetween: 30
      },
    768: {
      loop:true,
      slidesPerView: 2,
      spaceBetween: 30
    },
    1500: {
      slidesPerView: 2,
      spaceBetween: 30
    },
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



// start responsive navbar
document.querySelector(".fa-bars").addEventListener("click",()=>{
  let bar = document.querySelector(".fa-bars")
  bar.style.display = "none";
  let mark = document.querySelector(".fa-xmark");
  mark.style.display = "block";
})

document.querySelector(".fa-xmark").addEventListener("click",()=>{
  let bar = document.querySelector(".fa-xmark")
  bar.style.display = "none";
  let mark = document.querySelector(".fa-bars");
  mark.style.display = "block";
})
// end

// footer click display block span
let btn = document.querySelector("#btn").addEventListener("click",()=>{
  let input = document.querySelector("#input").value;
  if(input ==""){
      alert("Email ünvanınızı qeyd edin")
  }else{
      let span = document.querySelector(".span");
      span.classList.add("display_block_click");
  }
  // e.preventDefault()
})
// end

