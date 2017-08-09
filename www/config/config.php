<?php

return [
    'subject' => [
        'prefix' => '[Contact Form]'
    ],
    'emails' => [
        'to'   => 'mathieu@pointud.com',
        'from' => 'postmaster@geekatori.com'
    ],
    'messages' => [
        'error'   => 'Il y a eu une erreur pendant l\'envoi, merci de réessayer plus tard.',
        'success' => 'Votre message a été envoyé.',
        'validation' => [
            'emptyname'    => 'Un nom est requis.',
            'emptyemail'   => 'Un courriel est requis.',
            'emptysubject' => 'Un sujet est requis.',
            'emptymessage' => 'Un message est requis.'
        ]
    ],
    'fields' => [
        'name'     => 'Nom',
        'email'    => 'Courriel',
        'phone'    => 'Téléphone',
        'subject'  => 'Sujet',
        'message'  => 'Message',
        'btn-send' => 'Envoyer'
    ]
];