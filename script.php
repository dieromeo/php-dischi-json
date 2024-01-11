<?php
// salvataggio dati
$database_album = json_decode(file_get_contents(__DIR__ . '/album.json'));

header('Content-Type: application/json');
echo json_encode($database_album);
