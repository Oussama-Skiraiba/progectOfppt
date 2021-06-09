<?php

require_once '../config/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $column = "leaving_from, going_to, type, class, seats, price";
    $sql = $db->prepare("SELECT * FROM flight WHERE _id = ?");
    $sql->bindValue(1, $id);
    $sql->execute();
    $data = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(array("response" => $data));
}