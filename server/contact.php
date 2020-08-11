<?php

    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json');
    
    $POST = file_get_contents("php://input");
    $data = json_decode($POST);
  
    
    $nombre = $data->nombre;
    $email = $data->email;
    $telefono = $data->telefono;
    $asunto = $data->asunto;
    $consulta = $data->mensaje;

    $emailDestino = "obra@mantelectrick.com";
       

    $mensaje = "E-mail: " . $email .PHP_EOL. "Nombre: " . $nombre .PHP_EOL. "Telefono: " . $telefono .PHP_EOL. "Consulta: " . $consulta;

    if(mail($emailDestino, $asunto, $mensaje)) {
        http_response_code(200);
        echo true;
    } else {
        http_response_code(500);
        echo false;
    }
?>