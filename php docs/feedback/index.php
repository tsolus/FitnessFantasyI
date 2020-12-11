<!DOCTYPE html>
<html>
<head>
<title>FeedbacK Engine</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Elegant Feedback Form  Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>

<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
</head>
<body class="agileits_w3layouts">
    <h1 class="agile_head text-center">Workout Feedback</h1>
    <div class="w3layouts_main wrap">
	  <h3>Congratulations, you finished your daily quest! </h3>
	    <form action="feedback.php" method="post" class="agile_form">
		  <h2>How was your workout ?</h2>
			 <ul class="agile_info_select">
				 <li><input type="radio" name="view1" value="Too Easy" id="Too Easy" required> 
				 	  <label for="Too Easy">Too Easy</label>
				      <div class="check w3"></div>
				 </li>
				 <li><input type="radio" name="view1" value="Pretty Easy" id="Pretty Easy"> 
					  <label for="Pretty Easy">Pretty Easy</label>
				      <div class="check w3ls"></div>
				 </li>
				 <li><input type="radio" name="view1" value="Appropriate" id="Appropriate">
					 <label for="Appropriate">Appropriate</label>
				     <div class="check wthree"></div>
				 </li>
				 <li><input type="radio" name="view1" value="Pretty Hard" id="Pretty Hard"> 
					  <label for="Pretty Hard">Pretty Hard</label>
				      <div class="check w3_agileits"></div>
				 </li>
				 <li><input type="radio" name="view1" value="Too Hard" id="Too Hard"> 
					  <label for="Too Hard">Too Hard</label>
				      <div class="check w3_agileits"></div>
				 </li>
			 </ul>	
			 <h2>Which exercise have you improved in ?</h2>
			 <ul class="agile_info_select">
				 <li><input type="radio" name="view2" value="Chest Exercice" id="Chest Exercice" required> 
				 	  <label for="Chest Exercice">Chest Exercice</label>
				      <div class="check w3"></div>
				 </li>
				 <li><input type="radio" name="view2" value="Back Exercice" id="Back Exercice"> 
					  <label for="Back Exercice">Back Exercice</label>
				      <div class="check w3ls"></div>
				 </li>
				 <li><input type="radio" name="view2" value="Core Exercice" id="Abs Exercice">
					 <label for="Abs Exercice">Abs Exercice</label>
				     <div class="check wthree"></div>
				 </li>
				 <li><input type="radio" name="view2" value="Legs Exercice" id="Legs Exercice" required> 
				 	  <label for="Legs Exercice">Legs Exercice</label>
				      <div class="check w3"></div>
				 </li>
				 <li><input type="radio" name="view2" value="Running" id="Running" required> 
				 	  <label for="Running">Running</label>
				      <div class="check w3"></div>
				 </li>
				 <li><input type="radio" name="view2" value="Stretching" id="Stretching" required> 
				 	  <label for="Stretching">Stretching</label>
				      <div class="check w3"></div>
				 </li>
			 </ul>	  
			<h2>If you have specific feedback, please write to here</h2>
			<textarea placeholder="Additional comments" class="w3l_summary" name="comments" required=""></textarea>
			<input type="text" placeholder="Your Current Height" name="height"  />
			<input type="text" placeholder="Your Current Weight" name="weight" />
			<input type="text" placeholder="Your Username" name="username"  />
			<input type="email" placeholder="Your Email" name="email" />
			<center><input type="submit" value="submit Feedback" class="agileinfo" /></center>
	  </form>
	</div>
</body>
</html>

