
<?php

if($_POST && isset($_FILES['additional-files']))
{

   ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
 
$roffice=$_POST['referring-office'];
$rdoctor=$_POST['referring-doctor'];
$pname=$_POST['patient-name'];
$title=$_POST['title-patient'];
$pnumber=$_POST['patient-number'];
$paddress=$_POST['patient-address'];
$pins=$_POST['patient-insurance'];
$polnumber=$_POST['policy-number'];
$cnumber=$_POST['certificate-number'];
$rcase=$_POST['referral-case'];
$dfilms=$_POST['diagnostic-films'];
$ainformation=$_POST['additional-information'];
$contactp=$_POST['contact-patient'];

    $from_email = "drfortinoperiodontics.com";
    $recipient_email = 'bernadette@englemaninvest.com';

    //Capture POST data from HTML form and Sanitize them,
    $sender_name    = "drfortinoperiodontics.com";
    $reply_to_email = "drfortinoperiodontics.com"; //sender email used in "reply-to" header
    $subject = "Patient Referral";
   $message = "
Good day Dr. Daniel,\n
\n
You have a patient referral.\n
Referring Office: $roffice\n
Referring Doctor: $rdoctor\n
Patient Name: $pname\n
Title: $title\n
Patient Phone Number: $pnumber\n
Patient Address: $paddress\n
Patient Insurance Company: $pins\n
Policy Number: $polnumber\n
Certificate Number: $cnumber\n
Reason for Referral: $rcase\n
Diagnostic Films: $dfilms\n
Additional Information: $ainformation\n
Contact Patient: $contactp\n";
 //message

    //Get uploaded file data
    $file_tmp_name    = $_FILES['additional-files']['tmp_name'];
    $file_name        = $_FILES['additional-files']['name'];
    $file_size        = $_FILES['additional-files']['size'];
    $file_type        = $_FILES['additional-files']['type'];
    $file_error       = $_FILES['additional-files']['error'];

    if($file_error > 0)
    {
        die('Upload error or No files uploaded');
    }else{

    }



//read from the uploaded file & base64_encode content for the mail
    $handle = fopen($file_tmp_name, "r");
    if($file_size=1){
    $content = fread($handle, $file_size);
    fclose($handle);
    $encoded_content = chunk_split(base64_encode($content));

        $boundary = md5("sanwebe");
        //header
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "From:".$from_email."\r\n";
        $headers .= "Reply-To: ".$reply_to_email."" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

        //plain text
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($message));

        //attachment
        $body .= "--$boundary\r\n";
        $body .="Content-Type: $file_type; name=".$file_name."\r\n";
        $body .="Content-Disposition: attachment; filename=".$file_name."\r\n";
        $body .="Content-Transfer-Encoding: base64\r\n";
        $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n";
        $body .= $encoded_content;

    $sentMail = @mail($recipient_email, $subject, $body, $headers);
    if($sentMail) //output success or failure messages
    {
       echo"<script>window.open('submitted.html','_self')</script>";
    }else{

         echo"<script>alert('Error please try again !')</script>";
    }

}else{

	echo"";
}



}

?>
