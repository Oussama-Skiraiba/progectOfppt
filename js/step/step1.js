let diparte = document.querySelector("#diparte");
let cartTime = document.querySelector("#cartTime");
let cartGrid = document.querySelector("#cartGrid");
let ul = document.querySelector("#ul");
let menu = document.querySelector("#menu");

const template = `<div class="catrInfo" id="catrInfo">
<img src="../../images/icons/logo.svg" alt="">

<div class="diparte" id="diparte">
    <p>Marrakech </p>
    <span>12:30, Sun 25 Apr Marrakesh
        Menara Airport
        Terminal:1
    </span>
</div>

<div class="cartTime" id="cartTime">
    <span>01h 5m</span>
    <span>Economy</span>
</div>
<div class="diparte">
    <p>Marrakech </p>
    <span>12:30, Sun 25 AprMarrakesh
        Menara Airport
        Terminal:1
    </span>
</div>
</div>`;


// window.onload = () => {
//     fetch('http://localhost/progectOfppt/php/show.php', {
//         method: 'GET'
//     }).then(response => response.json())
//         .then(data => {
//             console.log(data.message);
//             data.forEach(element => {


//                 const template = `<div class="catrInfo" id="catrInfo">
// <img src="../../images/icons/logo.svg" alt="">

// <div class="diparte" id="diparte">
//     <p>${element._name}</p>
//     <span>12:30, Sun 25 Apr Marrakesh
//         Menara Airport
//         Terminal:1
//     </span>
// </div>

// <div class="cartTime" id="cartTime">
//     <span>01h 5m</span>
//     <span>Economy</span>
// </div>
// <div class="diparte">
//     <p>Marrakech </p>
//     <span>12:30, Sun 25 AprMarrakesh
//         Menara Airport
//         Terminal:1
//     </span>
// </div>
// </div>`;
// cartGrid.insertAdjacentHTML('afterbegin',template);

//             });
//         })
// }


menu.addEventListener("click",()=>{
    ul.classList.toggle('show');
    ul.style.display = "block";
    ul.style.opacity = 1;
    ul.style.Zindex = 1;
});