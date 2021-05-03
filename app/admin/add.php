<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/add.css">
</head>

<body>
    <?php include "../include/headerAndMainAdmin.php"; ?>
    <!--  -->

    <!--  -->
    <?php include "../include/fotterHomePageAdmin.php"; ?>

    <div class="container">
        <h2>Add</h2>
        <div class="containerCart">
            <div class="input">
                <input type="text" placeholder="name" id="name">
                <input type="number" placeholder="price" id="price">
                <input type="number" placeholder="place" id="place">
                <input type="number" placeholder="quantity" id="quantity">
                <textarea name=""  placeholder="description" id="description"></textarea>
            </div>
            <div class="aploadImages">
            
                <div class="center" id="images">
                    <input type="file" id="file">
                    <img src="../../images/addminIcon/cloud.svg" alt="cloud">
                </div>
                    <img src="" alt="showImg" id="showImg" class="showImg">
            
            </div>
            
            <button class="send" id="send">send</button>
        </div>

    </div>

</body>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>   
<script src="../../js/errore.js"></script>
<script src="../../js/add.js"></script>
</html>