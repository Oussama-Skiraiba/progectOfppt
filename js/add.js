let search = document.querySelector("#search");
let showData = document.querySelector("#showData");
send.addEventListener("click", () => {
    checkErroe();

    let fd = new FormData();

    fd.append('Name', Name.value);
    fd.append('price', price.value);
    fd.append('place', place.value);
    // fd.append('images', images.value);

    fetch('http://localhost/progectOfppt/php/add.php', {
        method: 'POST',
        body: fd
    }).then(res => res.json())
        .then(data => console.log(data));

});

//  search

search.addEventListener('keyup', () => {
    if (search.value === "") { showData.innerHTML = ""; return; }
    fetch('http://localhost/progectOfppt/php/search.php?search=' + search.value
    ).then(res => res.json())
        .then(data => {
            showData.innerHTML = ""
            console.log(data);
            data.forEach(element => {
                // 
                let templat = `<span onclick="handle(this)" data-show="${element.price}-${element.place}-${element._name}">${element._name}</span>`;
                showData.insertAdjacentHTML("afterbegin", templat);
            });
            showData.style.display = "block";
        }
        );
});
function handle(event) {
    let usr = event.getAttribute("data-show").split("-")
    let price = document.querySelector("#price");
    let place = document.querySelector("#place");
    let name  = document.querySelector("#name");
    name.value  = usr[2]
    price.value = usr[0]
    place.value = usr[1]
}

// + search.value +''
