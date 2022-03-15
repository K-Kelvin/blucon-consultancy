console.log("this is the script running");

const navSlide = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  //toggle nav
  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) =>{
      if (link.style.animation){
        link.style.animation = '';
      }else {
        link.style.animation = `navLinkFade 0.5s ease forwards $(index /7 + 0.3)s`
      }
     })
  });

  navLinks.forEach(link => link.addEventListener("click", function(){
    nav.classList.remove('nav-active');
  }))

  window.addEventListener("mousedown", function (e) {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');

    if (e.target !== burger && e.target !== nav && e.target !== line1 && e.target !== line2 && e.target !== line3){
      nav.classList.remove('nav-active');
    }
  })
}

navSlide();
