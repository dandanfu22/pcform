<?php
$phdo = new PDO('mysql:host=localhost; dbname=test;charset=utf8', 'fujii', 'fujiidan222');

$username = $_POST['name'];
$furigana = $_POST['furigana'];
$year =  $_POST['year'];
$month = $_POST['month'];
$day = $_POST['day'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$participationdate1 = $_POST['participationdate1'];
$participationdate2 = $_POST['participationdate2'];
$participationdate3 = $_POST['participationdate3'];
$termsofservice = $_POST['termsofservice'];
$privacypolicy = $_POST['privacypolicy'];

$stmt = $pdo->prepare("INSERT INTO users (name,furigana,year,month,day,tel,email,participationdate1,participationdate2,participationdate3,termsofservice,privacypolicy) VALUES(?, ?)");
$stmt->execute([$name, $furigana, $year, $day, $tel, $email, $participationdate1, $participationdate2, $participationdate3, $termsofservice, $privacypolicy]);
echo "保存しました！";
