
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="css/dashboard.css"> -->
    <!-- <link rel="stylesheet" href="css/qr.css"> -->
    <!-- <link rel="icon" href="icon/caduceus-symbol.png" sizes="32*32"> -->
    <title>Document</title>
</head>

<body>
    
    <div class="qrScan">
        <h2> Qr Scan</h2>
        <div class="video">
            <video id="qrV"></video>
            <!-- <input type="text" disabled> -->

        </div>
    </div>
    
</body>


<script type="module">
    import QrScanner from '../../qrLib/qr-scanner.min.js';
    QrScanner.WORKER_PATH = '../../qrLib/qr-scanner-worker.min.js';
    // do something with QrScanner
    let qrVideo = document.querySelector("#qrV");
    let id;
    const qrScan = new QrScanner(qrVideo, (result) => {
        id = result;
        let fd = new FormData();
        fd.set('id', id);

        fetch("http://localhost/ProgectOfppt/php/admin/qrScaner.php", {
                method: "POST",
                body: fd
            }).then(res => res.text())
            .then(data => {
                let flight = data.response[0];
                if (flight == undefined) {
                    qrScan.stop();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'medicine not found',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => qrScan.start());
                } else {
                    qrScan.stop();
                    let html = `<label>leaving_from :</label> <input type="text" value="${flight.leaving_from}" disabled><br>
                            <label>going_to :</label> <input type="text" value="${flight.going_to}" disabled><br>
                            <label>type :</label> <input type="text" value="${flight.type}" disabled><br>
                            <label>type :</label> <input type="text" value="${flight.class}" disabled><br>
                            <label>type :</label> <input type="text" value="${flight.seats}" disabled><br>
                            <label>type :</label> <input type="text" value="${flight.price}" disabled><br>
                            `;
                    swite(html, flight._id);
                }
                
                console.log(data)
            })
    });
    qrScan.start();
    // 
    let swite = (h, id) => {
        Swal.fire({
            title: `<strong>Medicine N° ${id}</strong>`,
            icon: 'success',
            html: h,
            showCloseButton: true,
        })
    }
</script>

</html>