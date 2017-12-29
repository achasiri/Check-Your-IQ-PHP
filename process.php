<?php

	include 'db.php';

//get values from login.php file
if(isset($_POST['submit'])){

$username = $_POST["username"];
$password = $_POST["password"];
	

//query the database for user
$query = "SELECT studentid, Password FROM Users WHERE studentid='$username'";
$result = mysqli_query($conn, $query) or die(mysqli_error($conn));

echo "mysqli_num_rows ".mysqli_num_rows($result);
if ((mysqli_num_rows($result)) > 0)
    {
        // output data of each row
        while($row = mysqli_fetch_assoc($result))
        {				
			echo "pwd ".$row['Password']." usr pwd ".$password;
				
			if( (1 == strcmp($row['Password'],'$password')) && (1 == strcmp($row['studentid'],'$username')))
			{
				//echo "Password matching ";
				header("Location:quiz.html");					
			}          
            
        }
    }
}
else
{
		echo "No rows found ";
}

?>	