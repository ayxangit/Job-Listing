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

let header = document.querySelector(".header")

window.onscroll =()=>{
    if(window.scrollY>=100){
        header.classList.add("scroll_change");
    }else{
        header.classList.remove("scroll_change");
    }
}
// end

// change input border color
document.querySelector("#btnsd").addEventListener("click",(e)=>{
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let subject = document.querySelector("#subject");
    let message = document.querySelector("#message");
    

    if((name.value == "")&&(message.value == "")){
        name.classList.toggle("red_color")
        email.classList.toggle("red_color")
        subject.classList.toggle("red_color")
        message.classList.toggle("red_text")
    }
    e.preventDefault();
})
// end