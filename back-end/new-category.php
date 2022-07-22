<?php 

    include("conf.php");

    $name = $_REQUEST['name'];

    $query = "INSERT INTO Category (name, has_SubCategory) VALUE  ('$name', false)";

    if ($result = $conn->query($query)) {
        echo 1;
    } else {
        echo 0;
    }

?>