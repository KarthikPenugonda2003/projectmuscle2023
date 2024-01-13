<?php 
$server="localhost";
$user="root";
$pass="";
$dbname="21b91a54e4";
$con =mysqli_connect($server,$user,$pass,$dbname);
if(!$con)
{
    die("Error : :  ".mysqli_connect_error());
}
?>
