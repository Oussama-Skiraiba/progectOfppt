// let body = document.querySelector("#body");
// let erro = (value) => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             removeItem(value.innerHTML);
//             value.parentElement.remove();
//             Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//             )
//         }
//     })
// }

// function removeItem(value) {
//     let fd = new FormData();
//     fd.append('id', id.value);

//     fetch('http://localhost/ProgectOfppt/php/admin/remove.php', {
//         method: 'POST',
//         body: fd
//     })
//         .then(response => response.text())
//         .then(data => { });
// }

// function loopChild() {
//     Array.from(body.children).forEach(child => {
//         child.lastElementChild.addEventListener("click", () => {
//             erro(child.firstElementChild);
//         });
//     });
// }

// window.onload = function () {
//     fetch('http://localhost/ProgectOfppt/php/admin/select.php')
//         .then(response => response.json())
//         .then(data => {
//             data[0].forEach(element => {
//                 let tempas = `<div class="row">
//             <div >${element.type}</div>
//             <div>${element.price}</div>
//             <div>${element.class}</div>
//             <div class="icon delete" data-id="${element.id}">
//             <img src="http://localhost/ProgectOfppt/images/addminIcon/removeImages/remove.png"/>
//             </div>
//             </div>`;
//             body.insertAdjacentHTML("beforeend",tempas);

//             });
//             document.querySelectorAll(".delete").forEach(el=>el.addEventListener('click',()=>{
//                 let id = el.getAttribute("data-id");
//                 console.log(id);
//             }))

//             loopChild();
//         });
// }









let body = document.querySelector("#body");

function removeItem(value) {
    let fd = new FormData();
    fd.append('id', value);

    fetch('http://localhost/ProgectOfppt/php/admin/remove.php', {
        method: 'POST',
        body: fd
    })
        .then(response => response.text())
        .then(data => { });
}

window.onload = function () {
    fetch('http://localhost/ProgectOfppt/php/admin/select.php')
        .then(response => response.json())
        .then(data => {
            data[0].forEach(element => {
                let tempas = `<div class="row">
            <div >${element.type}</div>
            <div>${element.price}</div>
            <div>${element.class}</div>
            <div class="icon delete" data-id="${element.id}">
            <img src="http://localhost/ProgectOfppt/images/addminIcon/removeImages/remove.png"/>
            </div>
            </div>`;
                body.insertAdjacentHTML("beforeend", tempas);

            });
            document.querySelectorAll(".delete").forEach(el => el.addEventListener('click', () => {
                let id = el.getAttribute("data-id");
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    // user click confirm
                    if (result.isConfirmed) {
                        // send request and remove item from html frontend
                        removeItem(id);
                        el.parentElement.remove();
                        // element remove success
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }))

        });
}

