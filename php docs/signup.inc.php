<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
    
    	<?php 

    	#get the values from the form after submitting and store them in the rdb
    	if(isset($_POST['signup-submit'])){
    		require 'dbh.inc.php';

    		#user account information
    		$username = $_POST['username'];
			$email = $_POST['email'];
			$password = $_POST['password'];
			$passwordRepeat = $_POST['passwordRepeat'];
			$weight = $_POST['weight'];
			$heigth = $_POST['heigth'];

			#user physical informations
			$pushup = $_POST['pushup'];
			$squat = $_POST['squat'];
			$crunches = $_POST['crunches'];
			$pullup = $_POST['pullup'];
			$dips = $_POST['dips'];

			#user
			$lvl = 1;
			$xp = 0;
			$strength = 50;
			$stamina = $pushup + $squat + $crunches + $pullup + $dips;
			$agility = 30;

			#check the possible errors

			if(empty($username) || empty($email) || empty($password) || empty($passwordRepeat) || empty($weight) || empty($heigth) || empty($pushup) || empty($squat) || empty($crunches) || empty($pullup) || empty($dips)){
				header("Location: ../signup.php?error=emptyfield&username=".$username."&email=".$email);
				exit();
			}

			elseif(filter_var($email, FILTER_VALIDATE_EMAIL)){
				header("Location: ../signup.php?error=invalidemail&username=".$username);
				exit();
			}

			elseif($passwordRepeat != $password){
				header("Location: ../signup.php?error=passwordcheck&username=".$username."&email=".$email);
				exit();
			}

			else{
				$sql = "SELECT username FROM UserInfo WHERE username = ?";
				$stmt = mysqli_stmt_init($conn);
				if(!mysqli_stmt_prepare($stmt,$sql)){
					header("Location: ../signup.php?error=sqlerror");
					exit();
				}
				else{
					mysqli_stmt_bind_param($stmt, "s", $username);
					mysqli_stmt_execute($stmt);
					mysqli_stmt_store_result($stmt);
					$resultcheck = mysqli_num_rows($result);
					if ($resultcheck > 0){
    					header("Location: ../signup.php?error=usernametaken&email=".$email);
					exit();
    				}
    				else{
    					#insert the entered values into the db

    					$sql = "INSERT INTO UserInfo (username, pwd, email, weight, heigth) VALUES (?, ?, ?, ?, ?)";
    					$stmt = mysqli_stmt_init($conn);
						if(!mysqli_stmt_prepare($stmt,$sql)){
							header("Location: ../signup.php?error=sqlerror");
							exit();
						}
						else{
							#hashe password so it is not fully wriiten in the db
							$hashepassword = password_hash($password, PASSWORD_DEFAULT);

							mysqli_stmt_bind_param($stmt, "sssii", $username, $hashepassword, $email, $weight, $height);
							mysqli_stmt_execute($stmt);
							header("Location: ../signup.php?signup=success");
							exit();
						}
    				}
				}
			}
			mysqli_stmt_close($stmt);
			mysqli_close($conn);
    	}
    	else{
    		header("Location: ../signup.php");
			exit();
    	}
    	?>

    </body>
</html>