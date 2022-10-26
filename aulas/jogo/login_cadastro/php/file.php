<?php
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];
    $record = array("user"=>$user,"pwd"=>$pwd);

    $registros = json_decode(file_get_contents("../json/users.json"), true);
    array_push($registros["usuarios"], $record);
    file_put_contents("../json/users.json",json_encode($registros));
    header("Location: ../sucess.html");
?>