const frontpage=document.getElementById('front');
const menu=document.getElementById('rotate');
const closebtn=document.querySelector('.close');



const rotatepage=function(){
frontpage.classList.toggle('rotated');
closebtn.classList.toggle('closeit');
menu.classList.toggle('opacity');


 };


menu.addEventListener('click', rotatepage);
closebtn.addEventListener('click', rotatepage);
