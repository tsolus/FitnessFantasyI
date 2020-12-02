<?php 
include 'dbh.inc.php';

    		$sql = "SELECT * FROM UserXpStats WHERE username = 'Balaise';";
    		$result = mysqli_query($conn, $sql);
    		$chart_data1 = '';
        $chart_data2 = '';
        $row = mysqli_fetch_assoc($result);
        $username = $row['username'];
    		while($row = mysqli_fetch_array($result)){
    			$chart_data1 .= "{ period: '".$row['period']."', weight: ".$row['weight']." },";
          $chart_data2 .= "{ period: '".$row['period']."', lvl: ".$row['lvl']." },";
    		}
?>


<!DOCTYPE html>
<html>
<head>
	<title> Weigth and level graph Fitness Fantasy </title>
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
</head>
<body>
	<br /> <br />
    <div class = "container" style = "width:900px">

        <h2 align = "left"> FitnessFantasy chart with PHP & MySql </h2>
        <?php echo $username; ?>
        <h3 align = "left"> Weight Evolution </h3>
        <br /> <br />

    </div>
	<div id="myfirstchart" style="height: 250px;"></div>
  <div class = "container" style = "width:900px">

        <?php echo $username; ?>
        <h3 align = "left"> Level Evolution </h3>
        <br /> <br />

    </div>
  <div id="secondchart" style="height: 250px;"></div>


</body>
</html>

<script>

  new Morris.Line({
    element: 'myfirstchart',
    data: [<?php echo $chart_data1; ?>],
    lineColors: ['#fc8710'],
    xkey: 'period',
    ykeys: ['weight'],
    labels: ['Weigth'],
    ymin: 'auto',
    });

  new Morris.Line({
    element: 'secondchart',
    data: [<?php echo $chart_data2; ?>],
    lineColors: ['#819C79'],
    xkey: 'period',
    ykeys: ['lvl'],
    labels: ['Level'],
    ymin: 'auto',
    });
	
	
</script>