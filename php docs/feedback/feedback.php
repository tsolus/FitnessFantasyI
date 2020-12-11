<?php 
require './dbh.inc.php';
// require './login.inc.php';

$view1 = $_POST['view1'];
$view2 = $_POST['view2'];
$username = $_POST['username'];
$comments = $_POST['comments'];
$email = $_POST['email'];
$weight = $_POST['weight'];
$height = $_POST['height'];
$date = date('Y-m-d');

$sql = "INSERT INTO Feedback (feedbackNumber, username, email, feedback1, feedback2, suggestion) VALUES ('', '$username', '$email', '$view1', '$view2', '$comments')";
$query = mysqli_query($conn, $sql);

echo '<script>alert("Thank You! We will now adapt your training based on your feedback"); location.replace(document.referrer);</script>';

$sql = "SELECT * FROM UserRepetitions WHERE username ='".$username."';";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$resultcheck = mysqli_num_rows($result);

$sql = "SELECT * FROM UserXpStats WHERE username = '".$username."';";
$result = mysqli_query($conn, $sql);
$resultcheck = mysqli_num_rows($result);

if ($resultcheck > 0){
    while($row1 = mysqli_fetch_assoc($result)){
    	$lvl = $row1['lvl'];
    	$xp = $row1['xp'];
    	$strength = $row1['strength'];
    	$stamina = $row1['stamina'];
    	$agility = $row1['agility'];
    }
}

switch($view1){
	case 'Too Hard':
        $xp = $xp + 40;
		break;
	case 'Pretty Hard':
		$xp = $xp + 70;
		break;
	case 'Appropriate':
		$xp = $xp + 50;
		break;
	case 'Pretty Easy':
		$xp = $xp + 30;
		break;
	case 'Too Easy':
		$xp = $xp + 20;
		break;
}

switch($view2){
	case 'Chest Exercice':
        $strength = $strength + 1;
        $stamina = $stamina + 4;
        $row['pushup'] = $row['pushup'] + 1; 
        $row['dips'] = $row['dips'] + 1; 
		break;
	case 'Back Exercice':
		$strength = $strength + 7;
		$stamina = $stamina + 3;
		$row['pullup'] = $row['pullup'] + 1; 
		break;
	case 'Core Exercice':
		$strength = $strength + 6;
		$stamina = $stamina + 4;
		$row['crunches'] = $row['crunches'] + 1;
		break;
	case 'Legs Exercice':
		$strength = $strength + 8;
		$stamina = $stamina + 3;
		$row['squat'] = $row['squat'] + 1;
		break;
	case 'Running':
		$stamina = $stamina + 12;
		$row['squat'] = $row['squat'] + 1;
		$row['crunches'] = $row['crunches'] + 1;
		break;
	case 'Stretching':
		$agility = $agility + 9;
		break;
}

if($xp >= 100){
	$lvl = $lvl + 1;
	$xp = $xp - 100;
}

$sql = "UPDATE UserRepetitions SET squat = ".$row['squat'].", pushup= ".$row['pushup'].", crunches= ".$row['crunches']." , pullup= ".$row['pullup'].", dips= ".$row['dips']." WHERE username ='".$username."';";
$query = mysqli_query($conn, $sql);

$sql = "INSERT INTO UserXpStats (username, period, height, weight, lvl, xp, strength, stamina, agility) VALUES ('$username', '$date', $height, $weight, $lvl, $xp, $strength, $stamina, $agility);";
$query = mysqli_query($conn, $sql);


?>