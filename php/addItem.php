<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Password');
// header("Access-Control-Allow-Credentials: true");

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

require_once("db.php");

$img = "defaultimg";
//позже надо продумать загрузку img и сохраниения названия в бд

if (isset($obj['title']) || isset($obj['category']) || isset($obj['discript']) || isset($obj['price'])){
    $titleItem = $obj['title'];
    $categoryItem = $obj['category'];
    $discripItem = $obj['discript'];
    $priceItem = $obj['price'];
    
    
    $sqlInsert = "INSERT INTO `item`(`img`, `title`, `category`, `discrip`, `price`) VALUES ('".$img."','".$titleItem."','".$categoryItem."','".$discripItem."','".$priceItem."')";
    $res = $conn->query($sqlInsert);
}

if ($res){
    echo json_encode(
        ["output" => "
            Товар добавлен
        "]
    );
}else{
    echo json_encode(
        ["output" => "
            Ошибка при регистрации товара
        "]
    );
}

?>