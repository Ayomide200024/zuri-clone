document.querySelectorAll("a > .shift").forEach(anchor => {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behaviour : "smooth"
      });
    });
  });  