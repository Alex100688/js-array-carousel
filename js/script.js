"use strict"

const image=[`img/01.jpg, img/02.jpg, img/03jpg, img/04.jpg, img/05.jpg`];
//console.log(image)
const photo=document.querySelectorAll("img");
const figures=document.getElementById(`top`);
figures.addEventListener(`click`, function(){
    photo.classList.add(`open`);
})
for (let i = 0; i < image.length; i++) {

}
//console.log(image)
