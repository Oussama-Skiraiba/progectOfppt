send.addEventListener("click",()=>{
    // checkErroe();
    
    let fd = new FormData();

    fd.append('Name', Name.value);
    fd.append('price', price.value);
    fd.append('place', place.value);
    // fd.append('images', images.value);
    
    fetch('http://localhost/progectOfppt/php/add.php', {
        method: 'POST',
        body: fd
    }).then(res => res.json())
    .then(data => console.log(data))
})


// window.onload = ()=>{
//     fetch('http://localhost/progectOfppt/php/show.php', {
//         method: 'GET'
//     }).then(response => response.json())
//     .then(data => {
//         // data.forEach(element => {
//         //         let row = document.createElement("div");
//         //         row.setAttribute("class", "row");
//         //         let col1 = document.createElement("div");
//         //         let col2 = document.createElement("div");
//         //         let col3 = document.createElement("div");
//         //         col1.innerHTML = element._name;
//         //         col1.setAttribute("name", element._name);
//         //         col3.innerHTML = element.price;
//         //         col2.innerHTML = element.place;
//         //         // col4.setAttribute("class", "icon");
//         //         // img.setAttribute("src", 'http://localhost/proge/icon/trash-bin.png');
//         //         // col4.appendChild(img);
//         //         row.appendChild(col1);
//         //         row.appendChild(col2);
//         //         row.appendChild(col3);
//         //         images.appendChild(row)
//         //     });
        
//         console.log(data);
//         })
// }
    

