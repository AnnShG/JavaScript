<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "university";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Taking all 4 values from the form data(input)
$name = $_REQUEST['name'];
$surname = $_REQUEST['surname'];
$gender = $_REQUEST['gender'];
$age = $_REQUEST['age'];
 
$sql = "INSERT INTO student VALUES (DEFAULT,'$name','$surname','$gender','$age', 2)"; 
// $sql = "UPDATE student set password = 'default_password' where password is null";
// $sql = "DELETE from lectors where name='karl'";

//DELETE and UPDATE examples
//$sql = "DELETE FROM student WHERE name like='$name'";
//$Sql = "UPDATE student SET NAME - '$Name' WHERE gender='$gender'";

if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
        // Close connection
        mysqli_close($conn);
        header('Location: ' . $_SERVER['HTTP_REFERER']);
?>
