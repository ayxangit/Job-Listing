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


// footer click display block span
let btn = document.querySelector("#btn").addEventListener("click",()=>{
    let input = document.querySelector("#input").value;
    if(input ==""){
        alert("Email ünvanınızı qeyd edin")
    }else{
        let span = document.querySelector(".span");
        span.classList.add("display_block_click");
    }
    
  })
  // end