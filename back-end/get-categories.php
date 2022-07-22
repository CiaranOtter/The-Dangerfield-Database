<?php

    include("conf.php");

    $query = "SELECT * FROM Category ORDER BY parent";

    $output = array();

    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            $output[] = $row;
        }

        echo json_encode($output);
    } else {    
        echo 0;
    }

?>