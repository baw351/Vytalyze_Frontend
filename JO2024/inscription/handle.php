<?php

echo "<pre>";
var_dump($_POST);
echo "</pre>";

if (
    ! isset($_POST['firstname']) AND
    ! isset($_POST['email'])
) {
    echo 'Erreur';
    die;
}

if ($_POST['name'] === 'Nerilyne') {
    echo 'Erreur';
    die;
}
