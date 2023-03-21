import { showSlides } from "./slideShow.js";



const iconOpenMenu = document.querySelector(".icon-open-menu");
const menuModal = document.querySelector(".section2-link");
iconOpenMenu.addEventListener("click", function(e) {

    console.log(e);

    menuModal.classList.toggle("show-modal");
    e.currentTarget.animate([
            { transform: 'scale(0)' },
            { transform: 'scale(1)' }
          ], {
            duration: 500
    })
    const iconMenu = document.querySelector(".icon-menu");

    if (menuModal.className === "section2-link show-modal"){
        iconMenu.setAttribute("xlink:href", "img/spriteMenu.svg#menu-close");
    }else{
          iconMenu.setAttribute("xlink:href", "img/spriteMenu.svg#open-menu");

          menuModal.animate([
            { transform: 'translate(0)'},
            { transform: 'translate(-150%)'},
          ], {
            duration: 1000,
          })

          linkMore.classList.remove("show");
          iconArrow.setAttribute("xlink:href", "sprite.svg#icon-arrow-down");
          menuModal.style.removeProperty("height");
    }

})

const linkMore = document.querySelector(".link-more");
const iconArrow = document.querySelector(".iconArrow");


const more = document.querySelector(".more");
more.addEventListener("click", function(e) {

    console.log(e.target, e.currentTarget);

    linkMore.classList.toggle("show");

    // const iconArrow = document.querySelector(".iconArrow");

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
  menuModal.style.removeProperty("height");
 
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
            console.log("visible");
        }else{
            console.log("invisible");
        }
    })
}

document.documentElement.classList.add("reveal-loaded");
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach( r => {
    observer.observe(r)
})