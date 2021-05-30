<?php
require_once '../config/config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $passport = $_POST['passport'];
    $nationality = $_POST['nationality'];
    $country = $_POST['country'];
    $dateP = $_POST['dateP'];
    $query = "INSERT INTO passport(uniqueNumber, pp_nationality, pp_date_of_issuel, nationlityPassport) VALUES (? ,? ,? ,?)";
    $sql = $db->prepare($query);
    $sql->bindValue(1, $passport);
    $sql->bindValue(2, $nationality);
    $sql->bindValue(3, $dateP);
    $sql->bindValue(4, $country);
    $sql->execute();
}