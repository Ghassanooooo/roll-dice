let d1=document.querySelector('.dice-1');
let d2=document.querySelector('.dice-2');
let botton=document.querySelector('.botton');

botton.addEventListener('click',()=>{
let random1 = Math.floor((Math.random() * 6) + 1);
let random2 = Math.floor((Math.random() * 6) + 1);
d1.classList.toggle(`dice-${random1}`);
d2.classList.toggle(`dice-${random2}`);
})