<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/step3.css">
</head>

<body>
    <?php include "../include/GlobaleUsr.php"; ?>

    <div class="stepBorder">
        <span>1</span>
        <span>2</span>
        <span class="st">3</span>
    </div>

    <div class="catrContainer">
        <h2>Payment</h2>

        <div class="cartGrid">
            <div class="nameCard">
                <span>Name Card</span>
                <input type="text">
            </div>
            <div class="numberCard">
                <span>Curd number</span>
                <input type="text">
            </div>
        </div>
        <div class="dataCart">
            <span>Expiration data</span>
            <input type="number" placeholder="month">
            <input type="number" placeholder="year">
            <input type="number" placeholder="CVC">
        </div>
    </div>
        <button class="next">Next</button>

    <!-- GlobaleUsrFooter -->
    <!--  <button class="next">Next</button> -->
    <?php include "../include/GlobaleUsrFooter.php"; ?>

</body>

</html>