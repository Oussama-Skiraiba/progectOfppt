<?php
require_once './include/config.php';

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $q = trim(explode("=",$_SERVER["QUERY_STRING"])[1]);
    $sql = $db->prepare("SELECT * FROM produte WHERE _name  LIKE  ?");
    $sql->bindValue(1, $q . '%');
    // echo  json_encode(array("message" => "yes"));
    $sql->execute();
    $Data = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($Data);
}