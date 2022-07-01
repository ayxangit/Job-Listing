
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



