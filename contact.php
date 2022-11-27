<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $email_subject = $_POST['subject']
  $message = $_POST['message'];

  $email_from = 'soufiane.elgharbaoui@personal-website.com';

	$email_body = "You have received a new message from the user $name.\n".
                    "Here is the message:\n $message".

    $to = "elgharbaoui.soufiane@outlook.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
                          
    mail($to,$email_subject,$email_body,$headers);
?>