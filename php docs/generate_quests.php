<?php

$date = date('Y-m-d');
include 'dbh.inc.php';
            // include 'login.inc.php';

            // $username = $_SESSION['username'];

            #DEMO
$username = 'Balaise';

$sql = "SELECT * FROM UserXpStats WHERE username = '".$username."';";
$result = mysqli_query($conn, $sql);
$resultcheck = mysqli_num_rows($result);

if ($resultcheck > 0){
	while($row1 = mysqli_fetch_assoc($result)){
		$strength = $row1['strength'];
		$stamina = $row1['stamina'];
		$agility = $row1['agility'];
	}
}

$sql = "SELECT * FROM UserRepetitions WHERE username = '".$username."';";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$pushup = $row['pushup'];
$squat = $row['squat'];
$crunches = $row['crunches'];
$pullup = $row['pullup'];
$dips = $row['dips'];

$sql = "SELECT * FROM Quests WHERE username = '".$username."';";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$datelastquest = $row['period'];

if($datelastquest < $date){
	$exercisenumber = rand(26,50);
	$sql = "SELECT * FROM Exercise WHERE exerciseId = ".$exercisenumber.";";
	$result = mysqli_query($conn, $sql);
	$row = mysqli_fetch_assoc($result);

	$runningtime = $stamina * 50;
	$stretchingtime = $agility / 5;

	$sql = "UPDATE Quests SET exercise = ".$row['exerciseId'].", runningtime = ".$runningtime.", stretchingtime = ".$stretchingtime.", period = '".$date."' WHERE username = '".$username."';";
	$result = mysqli_query($conn, $sql);
	echo "Your quests have been updated Hero!<br><br>";
}

$sql = "SELECT * FROM Quests WHERE username = '".$username."';";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$exercise = $row['exercise'];
$runningtime = $row['runningtime'];
$stretchingtime = $row['stretchingtime'];

$sql = "SELECT * FROM Exercise WHERE exerciseId = ".$exercise.";";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$exerciseName = $row['exerciseName'];
$muscle1 = $row['muscle1'];
$muscle2 = $row['muscle2'];
$muscle3 = $row['muscle3'];
$explanation = $row['explanation'];

if($muscle1 == 'Gluts' || $muscle1 == 'Quadriceps' || $muscle1 == 'Harmstrings'){
	$mainlyfocusedmuscle = 'Legs';
	$numberrepetitions = $squat;
}

if($muscle1 == 'Core'){
	$mainlyfocusedmuscle = 'Core';
	$numberrepetitions = $crunches;
}

if($muscle1 == 'Shoulders' || $muscle1 == 'Chest' || $muscle1 == 'Arms'){
	$mainlyfocusedmuscle = 'Chest';
	$numberrepetitions = $pushup;
}

if($muscle1 == 'Back'){
	$mainlyfocusedmuscle = 'Back';
	$numberrepetitions = $pullup;
}

$runningtime = $runningtime / 1000;
echo "- Do ".$numberrepetitions." ".$exerciseName.".<br><br>";
echo "This exercise mainly focus the ".$mainlyfocusedmuscle.".<br>".$explanation."<br><br>";
echo "- Run ".$runningtime." kilometers.<br><br>";
echo "- Stretch for ".$stretchingtime." minutes.<br>";


?>