//  vraibale globale input for check 
let send = document.querySelector("#send");
let Name = document.querySelector("#name");
let price = document.querySelector("#price");
let place = document.querySelector("#place");
let quantity = document.querySelector("#quantity");
let description = document.querySelector("#description");
let file = document.querySelector("#file");
let images = document.querySelector("#images");
// function for heandle errore

let error = (index, text) => {
    Swal.fire({
        position: 'center',
        icon: index,
        title: text,
        showConfirmButton: false,
        timer: 1500
    })
}

// open  file for uploage imag
images.addEventListener('click', () => {
    file.click();
})

// show images
file.addEventListener("change", (e) => {
    let show = document.querySelector("#showImg");
    show.src = URL.createObjectURL(e.target.files[0]);
    show.style.display = 'block';
    show.style.opacity = 1;
    show.style.position ='relative';
});

let checkErroe = ()=>{
    if (Name.value == "") {
        error('error', 'Name is empty')
    }
    else if (price.value == "") {
        error('error', 'price is empty')
    }
    else if (place.value == "") {
        error('error', 'place is empty')
    }
    else if (quantity.value == "") {
        error('error', 'quantity is empty')
    }
    else if (description.value == "") {
        error('error', 'description is empty')
    }
    else {
        error('success','Your work has been saved' )
    }
}
