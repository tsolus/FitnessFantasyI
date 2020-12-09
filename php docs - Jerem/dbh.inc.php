<?php

$timezone = date_default_timezone_set("Asia/Seoul");

$dbServerName = "fitnessfantasy.ciuyphua2sgn.ap-northeast-2.rds.amazonaws.com";
$dbUsername = "admin";
$dbPassword = "FitnessFantasy2020";
$dbName = "FitnessFantasy";

$conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

if($conn -> connect_error){
	die('connect error: ' . $conn -> connect_error);
}
?>