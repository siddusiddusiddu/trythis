

document.getElementById("load-screen").style.display = "block";

window.onload = function(){
  document.getElementById("load-screen").style.display = "none";

     
  $(".home-discover").addClass("home-discover-animate");
  $(".home-middle").addClass("home-middle-animate");
  $(".home-last-two").addClass("home-last-two-animate");
  $(".home-first-two").addClass("home-first-two-animate");
  $(".home-learn").addClass("home-learn-animate");
   $(".home-material-icons").addClass("home-material-icons-animate");


}


// for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// this is to display the gototop button and changing color of logo
   var mybutton = document.getElementById("go-to-top");
   var logoHeading = document.querySelector(".bio-name-job");
   window.onscroll = function() {scrollFunction();};
       
   function scrollFunction() {
     if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
         
         mybutton.classList.add("animate-top-element");
       mybutton.style.visibility = "visible";
     } else {
     mybutton.classList.remove("animate-test");
       mybutton.style.visibility = "hidden";
     }

                                        


     if(document.body.scrollTop > 5780 || document.documentElement.scrollTop > 5780){
       logoHeading.style.color = "white";
     }else{
       logoHeading.style.color = "black";
     } 


}


