<?php
// salvataggio dati
$database_album = json_decode(file_get_contents(__DIR__ . '/album.json'));

$results = $database_album;

if (isset($_GET['index'])) {
    $id = $_GET['index'];
    $selected_disc = $database_album[$id];
    $results = $selected_disc;
}

header('Content-Type: application/json');
echo json_encode($results);
