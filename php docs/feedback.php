<?php 
require './dbh.inc.php';

$view = $_POST['view'];
$username = $_POST['username'];
$comments = $_POST['comments'];
$email = $_POST['email'];

$sql = "INSERT INTO Feedback (feedbackNumber, username, email, feedback, suggestion) VALUES ('', '$username', '$email', '$view', '$comments')";
$query = mysqli_query($conn, $sql);

echo '<script>alert("Thank You..! Your Feedback is Valuable to Us"); location.replace(document.referrer);</script>';
?>