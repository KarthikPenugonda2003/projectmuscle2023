<?php
include 'connection.php';

if(isset($_POST['uname']))
{
$uname=$_POST['uname'];
$pass=$_POST['pass'];
$email=$_POST['email'];
$phno=(float)$_POST['phone'];
$query = "INSERT INTO registration1 VALUES ('$uname', '$pass', '$email', '$phno')";
$res = mysqli_query($con,$query);
if($res)
{
$script = "<script>alert('User Registration Successful');";
$script .= "window.location = 'login.html';</script>";
                    //added newline line 15,21
echo $script;
}
else
echo "<script>alert('User Registration Failed');
 window.location = 'registration.html';
</script>"; 
} 
?>
