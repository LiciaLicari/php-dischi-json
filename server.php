<?php

$records = file_get_contents('records.json');
var_dump($records)

# Add a content type header
header('Content-Type: application/json');

#return the json: encode the array and echo it out
echo json_encode($records);