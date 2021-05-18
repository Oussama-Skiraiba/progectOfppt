let search = document.querySelector("#search");
//  search
// 'http://localhost/progectOfppt/php/search.php?search=   

search.addEventListener('keyup', () => {
    // if (search.value === "") { showData.innerHTML = ""; return; }
    fetch('http://localhost/progectOfppt/php/admin/search.php?search=' + search.value
    ).then(res => res.text())
        .then(data => {
            // showData.innerHTML = ""
            console.log(data);
            // data.forEach(element => {
            //     // 
            //     let templat = `<span onclick="handle(this)" data-show="${element.price}-${element.place}-${element._name}">${element._name}</span>`;
            //     showData.insertAdjacentHTML("afterbegin", templat);
            // });

            // showData.style.display = "block";
        }
        );
});

// function handle(event) {
//     let usr = event.getAttribute("data-show").split("-")
//     let price = document.querySelector("#price");
//     let place = document.querySelector("#place");
//     let name  = document.querySelector("#name");
//     price.value = usr[0]
//     place.value = usr[1]
//     name.value  = usr[2]
//     showData.style.display = "none";
// }
