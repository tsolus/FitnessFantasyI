<?php
//if(isset($_POST['login-submit'])){
require 'dbh.inc.php';

    // $email = $_SESSION['email'];
   	// $newpassword = $_POST['pwd'];
	// $repeatnewpassword = $_POST['pwd'];

$email = 'new.user@gmail.com';
$newpassword = '12345';
$repeatnewpassword = '12345';

if(empty($email) || empty($newpassword) || empty($repeatnewpassword)){
	echo '<script>alert("Please complete every field."); location.replace(document.referrer);</script>';
    	#A modifier
		#header("Location: ../change_password?error=emptyfield");
	exit();
	
}
elseif($newpassword != $repeatnewpassword){
	echo '<script>alert("The 2 password must be the same."); location.replace(document.referrer);</script>';
    	#A modifier
		#header("Location: ../change_password?error=wrongpassword");
	exit();
}
else{
	$sql = "SELECT * FROM UserInfo WHERE email = ?;";
	$stmt = $conn->prepare($sql);
	$stmt->bind_param("s", $email);
	$stmt->execute();
	$result = $stmt->get_result();
	$resultcheck = mysqli_num_rows($result);
	$row = mysqli_fetch_assoc($result);
	$passwordCheck = password_verify($newpassword, $row['pwd']);
	if($passwordCheck == true){
		echo '<script>alert("Please choose a password different from the actual one."); location.replace(document.referrer);</script>';
    		#A modifier
			#header("Location: ../index.php?error=wrongpassword");
		exit();
	}
	else{
		$sql = "UPDATE UserInfo SET pwd = ? WHERE email = '".$email."';";
		$hashepassword = password_hash($newpassword, PASSWORD_DEFAULT);
		$stmt = $conn->prepare($sql);
		$stmt->bind_param("s", $hashepassword);
		$stmt->execute();
		echo '<script>alert("Password changed!"); location.replace(document.referrer);</script>';
    		#A modifier
			#header("Location: ../index.php?login=success");
		exit();
	}
}
// }
// else{
// 	#A modifier
// 	header("Location: ../index.php");
// 	exit();
// }
?>