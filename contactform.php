<?php

 include('Mandrill.php');
    $mandrill = new Mandrill('dPvituQYJMOpjiiPXRIOKg');
    $message = array(
        
        'text' => $_POST["contact_message"],
        'subject' => 'Contacted from website',
        'from_email' => $_POST['contact_email'],
        'from_name' => $_POST['contact_name'],
        'to' => array(
            array(
                'email' => 'support@nintriva.com',
                'name' => 'Nintriva',
                'type' => 'to'
            )
        ),
        'headers' => array('Reply-To' => 'message.reply@nintriva.com'),
        
        
      
    );
    $async = false;
    $ip_pool = 'Main Pool';
    
    $result = $mandrill->messages->send($message, $async, $ip_pool);
    print_r($result);