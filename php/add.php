<?php
require_once './include/config.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST['Name'];
    $price = $_POST['price'];
    $place = $_POST['place'];
    $images = $_POST['images'];

    $sql = $db->prepare("INSERT INTO produte (_name,price,place) VALUE(?,?,?)");
    $sql->bindValue(1,$name);
    $sql->bindValue(2,$price);
    $sql->bindValue(3,$place);
    // $sql->bindValue(4,$images);
    echo  json_encode(array("message" => "yes"));
    $sql-> execute();
}
else {
    echo  "test";
}