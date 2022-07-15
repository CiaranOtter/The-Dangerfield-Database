 <?php

    $db = 'ciarantwo';
    $host = 'sql31.cpt3.host-h.net';
    $user = 'tectobhjww_29';
    $pass = 'AdRBuz3yyYGy35jFxKU8';

    $conn = mysqli_connect($host, $user, $pass, $db);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

?>