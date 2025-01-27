<?php
    try {
        // подключаемся к серверу
        $conn = new PDO("mysql:host=localhost;port=3306;dbname=teacoffeedb", "root", "");
    }
    catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>