import { showSlides } from "./slideShow.js";


const iconOpenMenu = document.querySelector(".open-menu");
const menuModal = document.querySelector(".section2-link");
const iconMenu = document.querySelector(".icon-menu");
const linkMore = document.querySelector(".link-more");
const iconArrow = document.querySelector(".iconArrow");

// let scrollY;
let i = 0

iconOpenMenu.addEventListener("click", function(e) {

    // console.log(e);

    menuModal.classList.toggle("show-modal");
    e.currentTarget.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1)' }
          ], {
            duration: 500
    })

    // scrollY = window.scrollY;

    if (menuModal.className === "section2-link show-modal"){
        iconMenu.setAttribute("xlink:href", "img/spriteMenu.svg#menu-close");

        // document.body.style.position = "fixed";
        // document.body.style.top = `-${scrollY}px`;
        // scrollY = document.body.style.top;
        i++;

    }else{
          iconMenu.setAttribute("xlink:href", "img/spriteMenu.svg#open-menu");
        //   document.body.style.position = "static";
        //   scrollY = document.body.style.top;
        //   window.scrollTo(0, parseInt(scrollY ?? '0') * -1);

          

          menuModal.animate([
            { transform: 'translate(0)'},
            { transform: 'translate(-150%)'},
          ], {
            duration: 500,
          })

          linkMore.classList.remove("show");
          iconArrow.setAttribute("xlink:href", "sprite.svg#icon-arrow-down");
          menuModal.style.removeProperty("height");

          i = 0;
    }

})

const navLink = document.querySelectorAll(".nav-link a");

navLink.forEach(a => {
    a.addEventListener("click", function(){
        // document.body.style.position = "static";
        menuModal.classList.remove("show-modal");
        iconMenu.setAttribute("xlink:href", "img/spriteMenu.svg#open-menu");
        i = 0;

        linkMore.classList.remove("show");
        iconArrow.setAttribute("xlink:href", "sprite.svg#icon-arrow-down");
        menuModal.style.removeProperty("height");
    
    })
})




const more2 = document.querySelector(".more2");
more2.addEventListener("click", function(e) {

    
    linkMore.classList.toggle("show");


    if (linkMore.className === "link-more show"){
        iconArrow.setAttribute("xlink:href", "sprite.svg#icon-arrow-up");
        menuModal.style.height = "70%";

    }else{
        iconArrow.setAttribute("xlink:href", "sprite.svg#icon-arrow-down");
        menuModal.style.removeProperty("height");
    }


})

const main = document.querySelector(".main");
main.addEventListener("click", function() {
  
  linkMore.classList.remove("show");
  iconArrow.setAttribute("xlink:href", "sprite.svg#icon-arrow-down");
  menuModal.style.removeProperty("height");
  menuModal.classList.remove("show-modal");
  iconMenu.setAttribute("xlink:href", "img/spriteMenu.svg#open-menu");

  if (i) {
    menuModal.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(-150%)'},
    ], {
        duration: 500,
    })

    i = 0;
  }

//   console.log(scrollY);

//   if (i) {
//     document.body.style.position = "static";
//     scrollY = document.body.style.top;
//     window.scrollTo(0, parseInt(scrollY ?? '0') * -1);
//   }

//   i = 0;

 
})

showSlides();


const ratio = .1;
const options = {
    root : null,
    rootMargin : "0px",
    threshold : ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach( entry => {
        if (entry.intersectionRatio > ratio){
            entry.target.classList.remove("reveal")
            observer.unobserve(entry.target)
        }
    })
}

document.documentElement.classList.add("reveal-loaded");
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach( r => {
    observer.observe(r)
})