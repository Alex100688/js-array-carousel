"use strict"

const image=[`img/01.jpg, img/02.jpg, img/03jpg, img/04.jpg, img/05.jpg`];
//console.log(image)
const figures=document.getElementById(`top`);
const imgTop=document.querySelector(`.items`);
figures.addEventListener(`click`, function(){
   imgTop.classList.add(`open`);
   imgTop.classList.remove(`open`);
})


for (let i = 0; i < image.length; i++) {

}
//console.log(image)
