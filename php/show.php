<?php
require_once './include/config.php';

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = $db->prepare("SELECT * FROM produte");
    $sql->execute();
    $Data = $sql->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($Data);
}
