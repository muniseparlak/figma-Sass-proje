let btn = document.querySelectorAll(".accordion");
let backToTop = document.querySelector(".back");


for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    
    var panel = this.nextElementSibling;

    /*ok işaretini değiştirmek için fonksiyon */
  changeIcon = (icon) => icon.classList.toggle("fa-arrow-up")
  
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


/* back to top butonunda en yukarı çıkmak için*/ 
  backToTop.addEventListener("click", function top() {
    window.scrollTo(0,0)
  } )





