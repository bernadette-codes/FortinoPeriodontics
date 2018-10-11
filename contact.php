<?php 
if ($_POST) {

	$fullName	    = $_POST['full-name'];
	$phoneNumber    = $_POST['phone-number'];
	$emailAddress   = $_POST['email-address'];
	$subject 	    = $_POST['subject'];
	$contactMessage = $_POST['contact-message'];
	
	if (!filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
		echo "Email is not Valid";
		exit;
	}
	 
	if(!preg_match("/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/", $phoneNumber)) {
 				 echo "Phone is not Valid";
				 exit;
	}

	$msg 	= "Good day Dr. Daniel,\n\n";
    $msg 	.= "Someone contacted you.\n\n";
    $msg 	.= "Name: $fullName\n";
    $msg 	.= "Phone Number: $phoneNumber\n";
    $msg 	.= "E-mail: $emailAddress\n";
	$msg 	.= "Message: $contactMessage \n";

	$from_email = "drfortinoperiodontics"; //from mail, it is mandatory with some hosts
    $recipient_email = 'bernadette@englemaninvest.com'; //recipient email (most cases it is your personal email)

	// boundary
    $semi_rand = md5(time());
    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

    //read from the uploaded file & base64_encode content for the mail
    $encoded_content = chunk_split(base64_encode($msg));

    $boundary = md5("sanwebe");
    //header
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From:" . $from_email . "\r\n";
    $headers .= "Reply-To: " . $emailAddress. "" . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

    //plain text
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($msg));

    //$body .= $encoded_content;

	$sentMail = mail($recipient_email, $subject, $body, $headers);
    if ($sentMail) //output success or failure messages
    {
        echo "<script>window.open('submitted.html','_self')</script>";
    } else {
        echo "<script>alert('Error please try again !')</script>";
    }
}

?>
