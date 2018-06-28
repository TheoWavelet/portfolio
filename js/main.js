const frontpage=document.getElementById('front');
const menu=document.getElementById('rotate');
const closebtn=document.querySelector('.close');
const webprev=document.querySelector('.webprev');
const webnext=document.querySelector('.webnext');
const animprev=document.querySelector('.animprev');
const animnext=document.querySelector('.animnext');
const webitems=document.querySelector('.web-items');
const animitems=document.querySelector('.anim-items');
let w_items=3;
let a_items=3;
const w_maxitems=6;
const a_maxitems=6;

const rotatepage=function(){
frontpage.classList.toggle('rotated');
closebtn.classList.toggle('closeit');
menu.classList.toggle('opacity');


 };


menu.addEventListener('click', rotatepage);
closebtn.addEventListener('click', rotatepage);


const wshiftleft=function(){
    if(w_items>3){
    webitems.style.transform="translatex(0px)";
w_items=w_items-3;
console.log("works");}

};
const wshiftright=function(){
    if(w_items<w_maxitems){
        webitems.style.transform="translatex(-1150px)";
    w_items=w_items+3;
    console.log("works");}
};
const ashiftleft=function(){
    if(a_items>3){
        animitems.style.transform="translatex(0px)";
    a_items=a_items-3;
    console.log("works");}
};
const ashiftright=function(){
    if(a_items<a_maxitems){
        animitems.style.transform="translatex(-1150px)";
    a_items=a_items+3;
    console.log("works");}
};




webprev.addEventListener('click', wshiftleft);
webnext.addEventListener('click', wshiftright);
animprev.addEventListener('click', ashiftleft);
animnext.addEventListener('click', ashiftright);
