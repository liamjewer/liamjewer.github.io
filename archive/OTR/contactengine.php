<?php

$EmailTo = "Ontherisepodcast19@gmail.com";
$Subject = "On The Rise Podcast Contact Form";
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message:";
$Body .= "\n";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

// redirect to success page or error page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=sent\">";
}else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error\">";
}
?>