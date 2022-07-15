<?php

    include('conf.php');

    $user = $_REQUEST['user'];
    $pass = $_REQUEST['pass'];

    $query = "SELECT COUNT(*) AS Valid FROM admin_login WHERE (username='$user' OR email='$user') AND password='$pass';";

    $output = array();
    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            $output[] = $row;
        }

        echo json_encode($output);
    }


?>