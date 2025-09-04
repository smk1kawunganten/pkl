<?php
// proxy.php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$postData = file_get_contents('php://input');
file_put_contents(__DIR__ . '/debug_post.txt', $postData); // Debug: simpan data POST

$url = 'https://script.google.com/macros/s/AKfycbzogJOqrrFadaZDlfcJgIepZXBlqGRumWfAkzDuHEFLKxIIEBuAL1E5oKZouxfzBLW5/exec';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$response = curl_exec($ch);
$err = curl_error($ch);
curl_close($ch);
file_put_contents(__DIR__ . '/debug_response.txt', $response);
if ($err) {
    echo json_encode(['success' => false, 'error' => $err]);
} else {
    echo $response;
} 