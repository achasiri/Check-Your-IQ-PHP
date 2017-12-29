<?php

include 'db.php';
 
//if(isset($_POST['submit'])){

  $firstname=$_POST["FirstName"];
  $lastname= $_POST["LastName"];
  $studentid=$_POST["studentid"];
  $Password=$_POST["Password"];
  $confirmPassword=$_POST["confirmPassword"];

  echo "studentid $studentid ";

  $query ="INSERT INTO Users (FirstName, LastName, studentid, Password, scre) VALUES('$firstname' ,'$lastname' , '$studentid', '$Password', '0')";
//  or die("Could not find in the database");
 
  $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
  		if($result == true){
	
  			$output="there is no such result";
			echo "result $result".$result;
  		}
  		else{
  		
			echo "else ".$result;
			}
		header ( "Location:index.html");	

if(isset($_POST['logout']))
{
	header ( "Location:login.php");
}
//}
?>	