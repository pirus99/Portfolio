<?php
// public/send-email.php
// Accepts JSON POST with {name,email,subject,box} and emails it to a fixed address

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$raw = file_get_contents('php://input');
if (!$raw) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'No input provided']);
    exit;
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
    exit;
}

function sanitize_header($str) {
    return str_replace(["\r", "\n"], '', trim($str));
}

$name = isset($data['name']) ? sanitize_header($data['name']) : '';
$email = isset($data['email']) ? sanitize_header($data['email']) : '';
$subjectField = isset($data['subject']) ? trim($data['subject']) : '';
$box = isset($data['box']) ? trim($data['box']) : '';

if (empty($name) || empty($email) || empty($box)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
    exit;
}

// TODO: set your recipient address here
$to = 'yourtarget@example.com';
$subject = 'Portfolio Contact';

$message = "You received a new contact form submission from your portfolio site.\n\n";
$message .= "Name: " . $name . "\n";
$message .= "Email: " . $email . "\n";
$message .= "Subject: " . $subjectField . "\n\n";
$message .= "Message:\n" . $box . "\n";

$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Attempt to send email
$sent = @mail($to, $subject, $message, $headers);
if ($sent) {
    echo json_encode(['status' => 'ok', 'message' => 'Email sent']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
}
