<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="../../css/step1.css"> -->
    <link rel="stylesheet" href="../../css/step2.css">
</head>

<body>
    <?php include "../include/GlobaleUsr.php"; ?>

    <div class="stepBorder">
        <span>1</span>
        <span class="st">2</span>
        <span>3</span>
    </div>

    <div class="catrContainer">
        <h2>Traveller Information</h2>
        <div class="cartGrid">

            <div class="cartConatiner">
                <div class="contact">
                    <span>Contact</span>
                    <input type="number" placeholder="Mobile Number">
                    <input type="text" placeholder="CIN">
                </div>

                <div class="adult">
                    <span>Adult</span>
                    <select name="" id="">
                        <option value="">Gender</option>
                        <option value="">Male</option>
                        <option value="">Femal</option>
                    </select>
                    <input type="text" placeholder="First Name">
                    <input type="text" placeholder="Last Name">
                </div>

            </div>
            <div class="passport">
                <div class="border">
                    <button class="check">Passport Information</button>
                    <div class="imageBoreder">
                        <img src="../../images/iconBorder/arrow-top-sign-to-navigate.svg" alt="">
                    </div>
                </div>
                <div class="passportInfo">
                    <div class="paddingInfp">
                        <div class="info__1">
                            <input type="radio" name="info" checked>
                            <span>Passport </span>

                            <input type="text" placeholder="Passport Number">

                            <select name="" id="">
                                <option value="">Nationality</option>
                            </select>

                            <select name="" id="">
                                <option value=""> Issuing Country </option>
                            </select>

                        </div>

                        
                        <div class="info__2">
                            <div class="dateInfoUsr">
                                <input type="radio" name="info">
                                <span> Date of Birth </span>
                                <q> Please enter the date of birth exactly as it is in your Passport</q>
                                <input type="number" placeholder="DD">
                                <input type="number" placeholder="MM">
                                <input type="number" placeholder="YY">
                            </div>
                            <div class="dateInfoPassport">
                                <span> Passport Expiry Date </span>
                                <input type="number" placeholder="DD">
                                <input type="number" placeholder="MM">
                                <input type="number" placeholder="YY">
                                <input type="number" placeholder="F_YY">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="next">Next</button>
            <!-- <button class="next">Next</button> -->


        </div>
    </div>

    <?php include "../include/GlobaleUsrFooter.php"; ?>

</body>

</html>