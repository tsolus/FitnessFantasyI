<?php 
require './dbh.inc.php';

$view1 = $_POST['view1'];
$view2 = $_POST['view2'];
$username = $_POST['username'];
$comments = $_POST['comments'];
$email = $_POST['email'];

$sql = "INSERT INTO Feedback (feedbackNumber, username, email, feedback1, feedback2, suggestion) VALUES ('', '$username', '$email', '$view1', '$view2', '$comments')";
$query = mysqli_query($conn, $sql);

echo '<script>alert("Thank You! We will now adapt your training based on your feedback"); location.replace(document.referrer);</script>';

?>