<?php

$form_id = isset($_GET['facebook_form']) ? $_GET['facebook_form'] : null;
$firstName = isset($_GET['firstName']) ? $_GET['firstName'] : '';
$lastName = isset($_GET['lastName']) ? $_GET['lastName'] : '';
$phone = isset($_GET['phone']) ? $_GET['phone'] : null;
$mobile = isset($_GET['mobile']) ? $_GET['mobile'] : '';
$email = isset($_GET['email']) ? $_GET['email'] : '';

$remarks = isset($_GET['remarks']) ? $_GET['remarks'] : '';
$mailingApproval = isset($_GET['mailingApproval']) ? $_GET['mailingApproval'] : '';


// if(isset($_GET['project']) && $_GET['project'] == "Givat-shmuel_yahad_april-2019"){
    
// }

switch ($form_id) {
    case "2196916033721468"://טופס קיים גבעת שמואל - Africa Israel - Givat-shmuel_april-2019
        $projectID = '685';
        $password = 'FaceBK17';
        break;

    case "311616136384083"://ירושלים - Jerusalem_savion-view_june-2019
        $projectID = '699';
        $password = 'FaceBK17';
        break;
    case "348867656063445"://חדרה - Hadera_savioney-nof-hadera_june-2019
        $projectID = '361';
        $password = 'FaceBK17';
        break;
    case '337869573547802' ://נתניה - Netanya_savyon-city_june-2019
        $projectID = '1269';
        $password = 'FaceBK17';
        break;
    case '622780268225541' ://גבעת שמואל - Givat-shmuel_savyoney-givat-shmuel_june-2019
        $projectID = '685';
        $password = 'FaceBK17';
        break;
    case '854175668301001' ://כפר יונה - Kfar-yona_savioney-hasharon_june-2019
        $projectID = '510';
        $password = 'FaceBK17';
        break;
    case '1386499688158187' ://חריש - Harish_savioney-harish-2019
        $projectID = '1283';
        $password = 'FaceBK17';
        break;
    case '483362965825983' ://נתניה - Netanya_savyon-city_july-2019
        $projectID = '1269';
        $password = 'FaceBK17';
        break;
    case '388843895097969' ://כפר יונה - Kfar-yona_savioney-hasharon_july-2019
        $projectID = '510 ';
        $password = 'FaceBK17';
        break;
    case '463803527733026' ://Savioney-hair_givataim_patai-13
        $projectID = '470';
        $password = 'FaceBK17';
        break;
    default:
        $projectID = '685';
        $password = 'FaceBK17';
}

echo "the projectId is: $projectID";


//print_r($projectID);
//$projectID = '685';
//$password = 'FaceBK17';

$data = array(
    'projectID' => $projectID,
    'password' => $password,
    'firstName' => $firstName,
    'lastName' => $lastName,
    'phone' => $phone,
    'mobile' => '',
    'email' => $email,
    'remarks' => '',
    'mailingApproval' => "false"
);
//print_r($data);
$query = http_build_query($data);
//http://ws.res.afi-g.com/RegisterLead/RegisterSrvc.asmx/SendLead?projectID=685&password=FaceBK17&firstName=test&lastName=test&phone=0508907997&mobile=''&email=test@gmail.com&remarks=''&mailingApproval=false
//print_r($query);

$url = "http://ws.res.afi-g.com/RegisterLead/RegisterSrvc.asmx/SendLead?".$query;
//print_r($url);
$send = file_get_contents($url);
//print_r($send);
//$leadID = htmlentities($_GET["id"]);

//$file = __DIR__ . '/' . $brand . 'Log.txt';
//$log = file_get_contents($file);
//file_put_contents($file, $log . $leadID . " SEND: " .  $send . "\r\n");
file_put_contents($send . "\r\n");

return $send;

?>