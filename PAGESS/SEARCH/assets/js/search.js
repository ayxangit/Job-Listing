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

// footer click display block span
let btn = document.querySelector("#btn").addEventListener("click",(e)=>{
    let input = document.querySelector("#input").value;
    if(input ==""){
        alert("Email ünvanınızı qeyd edin")
    }else{
        let span = document.querySelector(".span");
        span.classList.add("display_block_click");
        document.querySelector("#input").value = " ";
    }
    e.preventDefault()
    
})
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

// start cahnge heart color
document.querySelector(".red").addEventListener("click",()=>{
    let heart = document.querySelector(" .red");
    heart.style.color = "red";
    
})
document.querySelector(".reds").addEventListener("click",()=>{
    let red = document.querySelector(".icon_boxDesignh .reds");
    red.style.color = "red";
   
})
document.querySelector(".redd").addEventListener("click",()=>{
    let reds = document.querySelector(" .redd");
    reds.style.color = "red" 
})
document.querySelector(".redds").addEventListener("click",()=>{
    let redd = document.querySelector(" .redds");
    redd.style.color = "red"
})
document.querySelector(".red_color").addEventListener("click",()=>{
    let redColor = document.querySelector(" .red_color");
    redColor.style.color = "red" 
})
document.querySelector(".red_colors").addEventListener("click",()=>{
    let red_color = document.querySelector(" .red_colors");
    red_color.style.color = "red" 
})
document.querySelector(".redColor").addEventListener("click",()=>{
    let red_colors = document.querySelector(" .redColor");
    red_colors.style.color = "red"  
})
// end
