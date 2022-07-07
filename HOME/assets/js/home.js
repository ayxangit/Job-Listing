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


// start  first select tag section Job Posted
let text_icon = document.querySelector("text_icon")
let select_input = document.querySelector(".select_input")
let selected_text = document.querySelector("#selected_text")
let options = document.querySelectorAll(".options")
let list = document.querySelector("#list")
let click_up = document.querySelector("#click_up")

select_input.addEventListener("click",()=>{
    list.classList.toggle("hide");
    click_up.classList.toggle("up_down");
})

for(option of options){
    option.onclick = function(){
        selected_text.innerHTML = this.textContent;
    }
}

// end

// start second select tag Job Posted 

let select_category = document.querySelector(".select_category");
let category_icon = document.querySelector(".category_icon");
let category_text = document.querySelector("#category_text");
let choosing = document.querySelector("#choosing");
let category_options = document.querySelectorAll(".category_options");
let clickUp = document.querySelector("#clickUp");

select_category.addEventListener("click",()=>{
    choosing.classList.toggle("empty");
    clickUp.classList.toggle("upDown");
})

for(choose of category_options ){
    choose.onclick = function(){
        category_text.innerHTML = this.textContent;
    }
}
// end


// slide section
// Init Swiper
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
            slidesPerView: 1,
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

//   end
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


// footer click display block span
let btn = document.querySelector("#btn").addEventListener("click",(e)=>{
    let input = document.querySelector("#input").value;
    if(input ==""){
        alert("Email ünvanınızı qeyd edin")
    }else{
        let span = document.querySelector(".span");
        span.classList.add("display_block_click");
    }
    e.preventDefault()
    
})
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
document.querySelector(".fa-xmark").addEventListener("click",()=>{
    let bar = document.querySelector(".fa-bars");
    bar.style.display = "block";
    let mark = document.querySelector(".fa-xmark");
    mark.style.display = "none"
})

document.querySelector(".fa-bars").addEventListener("click",()=>{
    let bar = document.querySelector(".fa-bars");
    bar.style.display = "none";
    let mark = document.querySelector(".fa-xmark");
    mark.style.display = "block"
})
// end






