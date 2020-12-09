<?php 

        // if(isset($_POST['Update-submit'])){
            include 'dbh.inc.php';
            // include 'login.inc.php';

            // $username = $_SESSION['username'];
            // $date = $_POST['date'];
            // $weight = $_POST['weight'];
            // $heigth = $_POST['heigth'];
            // $lvl = $_SESSION['lvl'];
            // $xp = $_SESSION['xp'];
            // $strength = $_SESSION['strength'];
            // $stamina = $_SESSION['stamina'];
            // $agility = $_SESSION['agility'];

            #DEMO
            $username = 'Balaise';

            $sql = "SELECT * FROM UserXpStats WHERE username = '".$username."';";
            $result = mysqli_query($conn, $sql);
            $resultcheck = mysqli_num_rows($result);

            if ($resultcheck > 0){
                while($row1 = mysqli_fetch_assoc($result)){
                    $date = $row1['period'];
                    $weight = $row1['weight'];
                    $height = $row1['height'];
                    $lvl = $row1['lvl'];
                    $xp = $row1['xp'];
                    $strength = $row1['strength'];
                    $stamina = $row1['stamina'];
                    $agility = $row1['agility'];
                }
            }

            #A modifier pour la DEMO

            $weight = 85;
            $height = 194;
            $date = '2020-12-20';

    		$sql = "INSERT INTO UserXpStats (username, period, height, weight, lvl, xp, strength, stamina, agility) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
            $stmt = mysqli_stmt_init($conn);
            mysqli_stmt_prepare($stmt, $sql);
            mysqli_stmt_bind_param($stmt, "ssiiiiiii", $username, $date, $height, $weight, $lvl, $xp, $strength, $stamina, $agility);
            mysqli_stmt_execute($stmt);
            #A modifier
            #header("Location: ../update.php?update=success");
            mysqli_stmt_close($stmt);

            echo '<script>alert("Your stats are up to date!"); location.replace(document.referrer);</script>';

        // }
        // else{
        //     #A modifier
        //     header("Location: ../update.php");
        //     exit();
        // }
?>