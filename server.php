<?php

$records = json_decode(file_get_contents('records.json'), true);

# Add a content type header
header('Content-Type: application/json');

#encode the array and echo it out
echo json_encode($records);