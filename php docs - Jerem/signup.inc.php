<!DOCTYPE html>
<html>
<head>
	<title>Page Title</title>
</head>
<body>

	<?php 

    	#get the values from the form after submitting and store them in the rdb
    	//if(isset($_POST['signup-submit'])){
	require 'dbh.inc.php';

    		#user account information
	$date = date('y-m-d');
   			// $username = $_POST['username'];
			// $email = $_POST['email'];
			// $password = $_POST['password'];
			// $passwordRepeat = $_POST['passwordRepeat'];
			// $weight = $_POST['weight'];
			// $heigth = $_POST['heigth'];

	$username = 'NewUser';
	$email = 'new.user@gmail.com';
	$password = '12345';
	$passwordRepeat = '12345';
	$weight = 65;
	$height = 176;

			#user physical informations
			// $pushup = $_POST['pushup'];
			// $squat = $_POST['squat'];
			// $crunches = $_POST['crunches'];
			// $pullup = $_POST['pullup'];
			// $dips = $_POST['dips'];

	$pushup = 9;
	$squat = 15;
	$crunches = 20;
	$pullup = 2;
	$dips = 4;

			#user
	$lvl = 1;
	$xp = 0;
	$strength = 50;
	$stamina = $pushup + $squat + $crunches + $pullup + $dips;
	$agility = 30;

			#check the possible errors

	if(empty($username) || empty($email) || empty($password) || empty($passwordRepeat) || empty($weight) || empty($height) || empty($pushup) || empty($squat) || empty($crunches) || empty($pullup) || empty($dips)){
		echo '<script>alert("Please complete every field."); location.replace(document.referrer);</script>';
				#header("Location: ../signup.php?error=emptyfield&username=".$username."&email=".$email);
		exit();
	}

	elseif(filter_var($email, FILTER_VALIDATE_EMAIL) == false){
		echo '<script>alert("Your email format is invalid, please try again."); location.replace(document.referrer);</script>';
				#header("Location: ../signup.php?error=invalidemail&username=".$username);
		exit();
	}

	elseif($passwordRepeat != $password){
		echo '<script>alert("The 2 passwords must be the same."); location.replace(document.referrer);</script>';
				#header("Location: ../signup.php?error=passwordcheck&username=".$username."&email=".$email);
		exit();
	}

	else{
		$sql = "SELECT username FROM UserInfo WHERE username = ?;";
		$stmt = $conn->prepare($sql);
		$stmt->bind_param("s", $username);
		$stmt->execute();
		$result = $stmt->get_result();
		$resultcheck = mysqli_num_rows($result);
		if ($resultcheck > 0){
			echo '<script>alert("This username is already taken."); location.replace(document.referrer);</script>';
    					#header("Location: ../signup.php?error=usernametaken&email=".$email);
			exit();
		}
		else{
    					#insert the entered values into the db

			$sql = "INSERT INTO UserInfo (username, pwd, email, weight, height) VALUES (?, ?, ?, ?, ?);";

    					//$stmt = mysqli_stmt_init($conn);
						// mysqli_stmt_prepare($stmt,$sql);
			$stmt = $conn->prepare($sql);
							#hashe password so it is not fully writen in the db
			$hashepassword = password_hash($password, PASSWORD_DEFAULT);
			$stmt->bind_param("sssii", $username, $hashepassword, $email, $weight, $height);
			$stmt->execute();
							// mysqli_stmt_bind_param($stmt, "sssii", $username, $hashepassword, $email, $weight, $height);
							// mysqli_stmt_execute($stmt);
			echo '<script>alert("Welcome to the adventure :)"); location.replace(document.referrer);</script>';
							#header("Location: ../signup.php?signup=success");
			exit();

		}

	}
	mysqli_stmt_close($stmt);
   //  	}
   //  	else{
   //  		header("Location: ../signup.php");
			// exit();
   //  	}
	?>

</body>
</html>