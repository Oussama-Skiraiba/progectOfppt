let search = document.querySelector("#search");
let showData = document.querySelector("#showData");

let inputID = document.querySelector(" input[name='_id']");
search.addEventListener('keyup', () => {
    if (search.value === "") { showData.innerHTML = ""; return; }
    fetch('http://localhost/progectOfppt/php/admin/search.php?search=' + search.value)
        .then(res => res.json())
        .then(data => {
            console.log();
            if (data[0] == undefined) {
                return;
            }
            inputID.value = data[0].id || ''
            type.value = data[0].type;
            Leaving_from.value = data[0].leaving_from;
            Going_to.value = data[0].going_to;
            price.value = data[0].price;
            Departing.value = data[0].departing;
            Class.value = data[0].class;
            seats.value = data[0].seats;
            if (data[0].type == "Oneway") {
                Returning.style.display = "none";
            } else {
                Returning.style.display = "";
                Returning.value = data[0]._returning;
            }
            // showData.innerHTML = ""
            // data.forEach(element => {
            // // create temp for take html and show in search and take  data in dataShow
            // let templat = `<span onclick="handle(this)" data-show="${element.type}-${element.leaving_from}-${element.going_to}-${element.price}-${element.departing}-${element._returning}-${element.class}-${element.seats}">${element.leaving_from}</span>`;
            // showData.insertAdjacentHTML("afterbegin", templat);
            // });

            // showData.style.display = "block";
        }
        );
});

send.addEventListener("click", () => {
    if(checkErroe() == undefined){
        checkErroe()
    }else {
    let fd = new FormData();
    fd.append('id', inputID.value);
    fd.append('leaving_from', Leaving_from.value);
    fd.append('type', type.value);
    fd.append('going_to', Going_to.value);
    fd.append('returning', type.value == 'Oneway' ? null : Returning.value);
    fd.append('price', price.value);
    fd.append('departing', Departing.value);
    fd.append('class', Class.value);
    fd.append('seats', seats.value);
    fetch('http://localhost/ProgectOfppt/php/admin/update.php', {
        method: 'POST',
        body: fd
    }).then(res => res.text())
        .then(data => console.log(data));
    }

});

