<?php

// if(isset($_POST['login-submit'])){
require 'dbh.inc.php';

    // $email = $_POST['email'];
    // $password = $_POST['pwd'];

$email = 'new.user@gmail.com';
$password = '12345';

if(empty($email) || empty($password)){
	echo '<script>alert("Please complete every field."); location.replace(document.referrer);</script>';
    	#A modifier
		#header("Location: ../index.php?error=emptyfield");
	exit();
}
else{
	$sql = "SELECT * FROM UserInfo WHERE email = ?";
	$stmt = $conn->prepare($sql);
	$stmt->bind_param("s", $email);
	$stmt->execute();
	$result = $stmt->get_result();
	$resultcheck = mysqli_num_rows($result);
	if ($row = mysqli_fetch_assoc($result)){
		$passwordCheck = password_verify($password, $row['pwd']);
		if($passwordCheck == false){
			echo '<script>alert("Incorrect password."); location.replace(document.referrer);</script>';
    		#A modifier
			#header("Location: ../index.php?error=wrongpassword");
			exit();
		}
		elseif ($passwordCheck == true){
			session_start();
			$_SESSION['username'] = $row['username'];
			$sql = "SELECT * FROM UserXpStats WHERE username = '".$_SESSION['username']."';";
			$result = mysqli_query($conn, $sql);
			$resultcheck = mysqli_num_rows($result);

			if ($resultcheck > 0){
				while($row = mysqli_fetch_assoc($result)){
					$_SESSION['lvl'] = $row['lvl'];
					$_SESSION['xp'] = $row['xp'];
					$_SESSION['strength'] = $row['strength'];
					$_SESSION['stamina'] = $row['stamina'];
					$_SESSION['agility'] = $row['agility'];
				}
			}
			$_SESSION['email'] = $row['email'];
    		echo '<script>alert("Welcome back Hercules ;)"); location.replace(document.referrer);</script>';
    		#A modifier
			#header("Location: ../index.php?login=success");
			exit();
		}
		else{
    				#A modifier
			header("Location: ../index.php?error=wrongpassword");
			exit();
		}
	}
	else{
		echo '<script>alert("This user does not exist. Please create a new account!"); location.replace(document.referrer);</script>';
    	#A modifier
		header("Location: ../index.php?error=nouser");
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