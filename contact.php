<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }
    if (empty($mobile)) {
        $errors[] = 'Mobile No is empty';
    } else if (preg_match('/^[0-9]{10}+$/', $username)) {
        $errors[] = 'Mobile No is invalid';
    }
    if (empty($subject)) {
        $errors[] = 'Subject is empty';
    }
    if (empty($message)) {
        $errors[] = 'Message is empty';
    }


    if (empty($errors)) {
        $toEmail = 'info@thaigroup.ca';
        $eType = 'Contact Form';
        $headers = ['From' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];
        $emessage = '<html><body>';
        $emessage .= '<p><b>Subject: </b>'.$subject.'</p>';
        $emessage .= '<p><b>Message: </b>'.$message.'</p>';
        $emessage .= '<p><b>Name: </b>'.$name.'</p>';
        $emessage .= '<p><b>Mobile: </b>'.$mobile.'</p>';
        $emessage .= '</body></html>';

        // $email_body = "You have received a new message from: $name.\r\n". //set message sender name
	    // " Here are the details:\r\n $message";

        if (mail($toEmail, $eType, $emessage, $headers)) {
            header('Location: contact.html');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }
}

?>


