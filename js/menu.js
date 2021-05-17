let menu = document.querySelector("#menu");
let ul = document.querySelector("#ul");
// menu 
menu.addEventListener('click',()=>{
    // ul.style.right = - 50 +'px';
    ul.classList.toggle('showMenu');
    ul.style.display = "block";
    ul.style.opacity = 1;
    ul.style.Zindex = 1;
})