<?php
include 'connection.php';

if(isset($_POST['uname']))
{
$uname=$_POST['uname'];
$pass=$_POST['pass'];
$query = "select * from registration1 where uname='$uname' and pass ='$pass'";
$res = mysqli_query($con,$query);
$count=mysqli_num_rows($res);
if($count)
echo "<script>alert('Welcome $uname');
window.location = 'main.html';
                    //added newline line 19
</script>";
else
echo "<script>alert('Invalid username/password');
window.location = 'login.html';
</script>";
}
?>
