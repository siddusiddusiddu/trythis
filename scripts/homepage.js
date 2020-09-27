
var iconsText = document.querySelectorAll(".home-icon");
var iconSpan = document.querySelectorAll(".home-icon-span-value");

var hoverDisplayText = document.querySelector(".home-hover-display-text");
var hoverDisplayDiv = document.querySelector(".home-hover-display-div");


for(var i = 0;i<5;i++){
    iconTextValue(iconsText[i],iconSpan[i]);
}

function iconTextValue(iconsTextFunction,iconSpanFunction){
 iconsTextFunction.addEventListener("mouseenter",function(){

    hoverDisplayDiv.style.transition = "opacity 2.5s";

    hoverDisplayText.innerText = iconSpanFunction.innerText;  
    hoverDisplayDiv.style.opacity = 1;

    
})


iconsTextFunction.addEventListener("mouseleave",function(){
    hoverDisplayDiv.style.transition = "opacity 0s";
    hoverDisplayDiv.style.opacity = 0;
    hoverDisplayText.innerText = "";  
})
}

