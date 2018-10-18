<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    if ($_POST && isset($_FILES['additional-files'])) {
        $roffice = $_POST['referring-office'];
        $rdoctor = $_POST['referring-doctor'];
        $pname = $_POST['patient-name'];
        $title = $_POST['title-patient'];
        $pnumber = $_POST['patient-number'];
        $paddress = $_POST['patient-address'];
        $pins = $_POST['patient-insurance'];
        $polnumber = $_POST['policy-number'];
        $cnumber = $_POST['certificate-number'];
        $rcase = $_POST['referral-case'];
        $dfilms = $_POST['diagnostic-films'];
        $ainformation = $_POST['additional-information'];
        $contactp = $_POST['contact-patient'];

        $from_email = "drfortinoperiodontics.com"; //from mail, it is mandatory with some hosts
        $recipient_email = 'drfortinoperio@gmail.com'; //recipient email (most cases it is your personal email)

        //Capture POST data from HTML form and Sanitize them,
        $sender_name = "drfortinoperiodontics.com"; //sender name
        $reply_to_email = "drfortinoperiodontics.com"; //sender email used in "reply-to" header
        $subject = "Patient Referral"; //get subject from HTML form
        $message = "Good day Dr. Daniel,\n\n
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
        Contact Patient: $contactp\n
        \n";
        //message
        $files = array();
        foreach ($_FILES as $name => $file) {
            $file_name = $file['name'];
            $temp_name = $file['tmp_name'];
            $file_type = $file['type'];
            $path_parts = pathinfo($file_name);
            $ext = $path_parts['extension'];
            array_push($files, $file);
        }

        // boundary 
        $semi_rand = md5(time());
        $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 

        //read from the uploaded file & base64_encode content for the mail
        $encoded_content = chunk_split(base64_encode($message));

        $boundary = md5("sanwebe");
        //header
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "From:" . $from_email . "\r\n";
        $headers .= "Reply-To: " . $reply_to_email . "" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

        //plain text
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($message));

        //attachment
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: $file_type; name=" . $file_name . "\r\n";
        $body .= "Content-Disposition: attachment; filename=" . $file_name . "\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "X-Attachment-Id: " . rand(1000, 99999) . "\r\n\r\n";
        $body .= $encoded_content;

        for ($x = 0; $x < count($files); $x++) {
            $file = fopen($files[$x]['tmp_name'], "rb");
            $data = fread($file, filesize($files[$x]['tmp_name']));
            fclose($file);
            $data = chunk_split(base64_encode($data));
            $name = $files[$x]['name'];
            $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" .
                "Content-Disposition: attachment;\n" . " filename=\"$name\"\n" .
                "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
            $message .= "--{$mime_boundary}\n";
        }
        $sentMail = mail($recipient_email, $subject, $body, $headers);
        if ($sentMail) //output success or failure messages
        {
            echo "<script>window.open('submitted.html','_self')</script>";
        } else {

            echo "<script>alert('Error please try again !')</script>";
        }
    }

    ?>
