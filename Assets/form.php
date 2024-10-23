<?php
// assets/form.php

// Get form inputs
$firstName = $_POST['F_name'];
$lastName = $_POST['L_name'];
$email = $_POST['email'];
$subject = $_POST['subject1'];
$message = $_POST['message1'];

// Create a connection to the database (MySQL example)
$servername = "localhost"; // or your server
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into the database
$sql = "INSERT INTO contact_form (first_name, last_name, email, subject, message)
VALUES ('$firstName', '$lastName', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
