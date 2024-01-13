<?php
include 'connection.php';

$email = $_POST['email'];
$uname = $_POST['uname'];
$message = $_POST['message'];
$datetime = date('Y-m-d H:i:s'); // Get the current date and time

// Insert data into the database
$query = "INSERT INTO contact1 (email, uname, message, datetime) VALUES ('$email', '$uname', '$message', '$datetime')";
$res = mysqli_query($con, $query);
if($res)
{
    $script = "<script>alert('Message sent!');";
    $script .= "window.location = 'AboutContact.html';</script>";
                    //added newline line 15,21
echo $script;
}
else
    echo "<script>alert('Error! Please try again');
 window.location = 'AboutContact.html';
</script>"; 

// Close the database connection
$conn->close();
?>