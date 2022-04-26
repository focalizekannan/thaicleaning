<?php
$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $previous_exp = $_POST['previous_exp'];
    $cleaning_exp = $_POST['cleaning_exp'];
    $address = $_POST['address'];
    $message = $_POST['message'];

    if (empty($fname)) {
        $errors[] = 'First Name is empty';
    }
    if (empty($lname)) {
        $errors[] = 'Last Name is empty';
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
    if (empty($previous_exp)) {
        $errors[] = 'Previous exp is empty';
    }
    if (empty($cleaning_exp)) {
        $errors[] = 'Cleaning exp is empty';
    }
    if (empty($address)) {
        $errors[] = 'Address is empty';
    }
    if (empty($message)) {
        $errors[] = 'Message is empty';
    }


    if (empty($errors)) {
        $toEmail = 'info@thaigroup.ca';
        $eType = 'Career Form';
        $headers = ['From' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];
        $emessage = '<html><body>';
        $emessage .= '<p><b>First Name: </b>'.$fname.'</p>';
        $emessage .= '<p><b>Last Name: </b>'.$lname.'</p>';
        $emessage .= '<p><b>Email: </b>'.$email.'</p>';
        $emessage .= '<p><b>Mobile: </b>'.$mobile.'</p>';
        $emessage .= '<p><b>Previous Experience: </b>'.$previous_exp.'</p>';
        $emessage .= '<p><b>Cleaning Experience: </b>'.$cleaning_exp.'</p>';
        $emessage .= '<p><b>Address: </b>'.$address.'</p>';
        $emessage .= '<p><b>Message: </b>'.$message.'</p>';
        $emessage .= '</body></html>';

        // $email_body = "You have received a new message from: $name.\r\n". //set message sender name
	    // " Here are the details:\r\n $message";

        if (mail($toEmail, $eType, $emessage, $headers)) {
            header('Location: career.html');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
        print_r($errorMessage);
    }
}

?>


