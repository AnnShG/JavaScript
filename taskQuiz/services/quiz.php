<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
    $output = implode(',', $output);

    echo "<script>console.log(Debug Objects: " . $output . "' );</script>";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$grade= $_REQUEST['grade'];


$sql = "INSERT INTO users VALUES (DEFAULT,'$name','$surname', '$grade')"; 

debug_to_console($sql);
if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
        // Close connection
        mysqli_close($conn);
        header('Location: ' . $_SERVER['HTTP_REFERER']);

  
?>