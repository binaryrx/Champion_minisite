<?php

if(!class_exists('CustomSoapClient')){
	class CustomSoapClient extends SoapClient{
		public function __doRequest($request, $location, $action, $version, $one_way = 0) {
		if(strrpos($location, 'terminal-crm') !== false) {
			$location = str_replace('terminal-crm', 'td.champ.co.il', $location);
		}
			return parent::__doRequest($request, $location, $action, $version, $one_way);
		}
	}
}


if(!isset($aDataToSend)){

	// if(isset($_GET['utm_medium']) && $_GET['utm_medium'] == 'champion'){
	// 	$campaignID = 559;
	// }else{
		 $campaignID = 825;
		 $ToolID = 'Sk1490Ch02';
	// }

	//Because skoda change the CampaignId every month we set the CampaignId to all request from here.
	@$aDataToSend = array(
		'CampaignId' => $campaignID,
		'SenderID' => 3,
		'SenderName'=> 'klogic',
		'LeadId' => $leadId,
		'FirstName' => $_GET['firstName'],
		'LastName' => $_GET['lastName'],
		'Phone' => $_GET['phone'],
		'Email' => $_GET['email'],
		'DealerID' => $_GET['DealerID'],
		'SourceId1' => 103,
		'SourceId2' => 17
	);
}

if(isset($_GET['model']) && $_GET['model'] ){
	$modelName = strtolower($_GET['model']);
	$models = array(
		'roomster'=>60,
		'fabia hatch'=>70,
		'fabia space'=>71,
		'fabia sedan'=>72,
		'octavia tour'=>80,
		'octavia com.t'=>81,
		'octavia'=>82,
		'octavia space'=>83,
		'superb'=>90,
		'superb combi'=>91,
		'yeti'=>95,
		'citigo'=>61,
		'rapid'=>64,
		'spaceback'=>68
	);
	if(isset($models[$modelName])){
		$aDataToSend['ModelGroupId'] = $models[$modelName];
	}
}


if(isset($_GET['showroom'])){
	$showroom = $_GET['showroom'];
	switch($showroom){
		case 'בני ברק - מרכזי':
			$DealerID = '001';
		break;
		case 'ראשון לציון':
			$DealerID = '015';
		break;
		case 'נתניה':
			$DealerID = '018';
		break;
		case 'רעננה':
			$DealerID = '045';
		break;
		case 'חיפה':
			$DealerID = '004';
		break;
		case 'עפולה':
			$DealerID = '016';
		break;
		case 'רחובות':
			$DealerID = '022';
		break;
		case 'אשדוד':
			$DealerID = '007';
		break;
		case 'באר שבע':
			$DealerID = '003';
		break;
		case 'ירושלים':
			$DealerID = '002';
		break;
		case 'מוניות יהודה מזרחי':
			$DealerID = '023';
		break;
	}

	$aDataToSend['DealerID'] = $DealerID;
}


if(isset($_GET['utm_source'])){
	$utmsource = $_GET['utm_source'];

	$source1 = 103;
	$source2 = 17;
	if(isset($_GET['from']) && $_GET['from'] == 'desktop'){  //desktop
		$source = array(
			'google'=>1,
			'sport5'=>2,
			'one'=>3,
			'ump'=>8,
			'clickon'=>9,
			'globes'=>10,
			'waze'=>13,
			'auto'=>4,
			'walla'=>14,
			'ynet'=>12,
			'netcar'=>15,
			'brandsite'=>16,
			'icar'=>18,
			'carsforum'=>19,
			'yad2'=>20,
			'ymedia'=>21,
			'mobile'=>22,
			'minisite'=>24,
			'autoconsultants'=>25,
			'quando'=>26,
			'wesell'=>27,
			'championmotors'=>28,
			'callbiz'=>29,
			'youtube'=>30,
			'googlearabic'=>31,
			'maple'=>36,
			'mediacom'=>37,
			'net1'=>38,
			'skindo'=>39,
			'self'=>40,
			'yoyo'=>43,
			'divurseat'=>44,
			'adland'=>45,
			'facebook'=>57,
			'live_chat'=>47,
			'automatic_live_chat'=>48,
			'mail'=>50,
			'advanced'=>51,
			'outbrain'=>52,
			'kikler'=>53,
			'panet'=>54,
			'impactia'=>58,
			'mediagol'=>59,
			'rotter'=>60,
			'webmedia'=>63,
			'adddesktop'=>64,
			'hi_tech_zone'=>67,
			'gdn'=>68,
			'google_remarketing'=>74,
			'ilx'=>78,
			'artimedia'=>79,
			'taboola'=>80,
			'googlesearch'=>81,
			'themarker'=>82,
			'timeout'=>83,
			'binthomi'=>84,
			'mako'=>85,
			'nrg'=>86,
			'israelhaiom'=>87,
			'nana10'=>88,
			'news2'=>89,
			'reshet'=>91,
			'bizportal'=>92,
			'calcalist'=>93,
			'medmob'=>94,
			'haarets'=>96,
			'agoge'=>97,
			'gear'=>98,
			'the_car'=>99,
			'mariv'=>100,
			'sport1'=>101,
			'vworgainc'=>103,
            'skodaorganic'=>104,
            'audiorganic'=>105,
			'seatorganic'=>106,
			'get_a_car'=>125,	
			'newsletter'=>124,	
			'instagram'=>118,	
			'taboola'=>80,	
			'outbrain'=>52,	
			'facebookcontent' => 120,	
			'tochen' => 119,
			'tmi' => 108,
			'jpost'=> 109,
			'content' => 110,
			'carsmedia' => 111,	
		    'facebookleadadsdesktop'=>114,	
			'novy'=>129,
			'agoge-1'=>130,
			'oceanmedia'=>131,	
			'homemobile'=>35,
			'yad2_clicktocall'=>56,
			'brandsite_model'=>107,
			'icar_news_letter'=>112,
			'desktop_calculator'=>115,
			'champion_calculator'=>116,
			'brandsite_calculator'=>117,
			'autocom'=>121,
			'vagit'=>122,
			'autosport'=>123,
			'auto_consulting'=>127,
			'icar_consulting'=>128,
			'megama'=>132,
			'facebook_brand_page'=>133,
			'over_drive'=>136,
			'idx'=>137,
			'newsletter'=>124,
			'organic_banner'=>139
		);
		
		if(isset($source[$utmsource])){
			$source2 = $source[$utmsource];
		}

	}else{ // mobile
		$source1 = 105;
		$source2 = 3;

		$source = array(
			'ynet'=>1,
			'one'=>2,
			'gdn'=>4,
			'facebook'=>5,
			'organic'=>6,
			'maple'=>7,
			'icar'=>8,
			'yad2'=>9,
			'auto'=>10,
			'carsforum'=>11,
			'google'=>12,
			'googlesearch'=>12,
			'walla'=>14,
			'themarker'=>15,
			'globes'=>16,
			'ilx'=>17,
			'mako'=>18,
			'sport5'=>19,
			'youtube'=>20,
			'callbiz'=>21,
			'sekindo'=>22,
			'googleremarketing'=>26,
			'timeout'=>27,
			'mobile'=>28,
			'calcalist'=>29,
			'medmob'=>30,
			'waze'=>31,
			'haarets'=>32,
			'serviceapp'=>33,
			'service_app-puss _No'=>34,
			'agoge'=>35,
			'nrg'=>36,
			'artimedia'=>37,
			'gear'=>38,
			'the_car'=>39,
			'mariv'=>40,
			'sport1'=>41,
			'vworgainc'=>42,
            'skodaorganic'=>43,
            'audiorganic'=>44,
            'seatorganic'=>45,
			'championmotors'=>46,
			'get_a_car'=>70,	
			'newsletter'=>68,	
			'instagram'=>57,	
			'netcar'=>64,	
			'taboola'=>60,	
			'outbrain'=>61,	
			'facebookcontent'=>62,	
			'facebookleadadsmobile'=>54,	
			'tochen'=>59,
			'tmi' => 48,
			'jpost'=>49,
			'content'=>50,
			'carsmedia'=>51,
			'novy'=>129,
			'agoge1'=>130,
			'oceanmedia'=>131,
			'tmi'=>48,
			'jpost'=>49,
			'content'=>50,
			'carsmedia'=>51,
			'facebook_lead_ads'=>54,
			'NOVY'=>129,
			'Agoge-1'=>130,
			'oceanmedia'=>131,	
			'brandsite_model'=>47,
			'clickon'=>52,
			'brandsite_calculator'=>55,
			'champion_calculator'=>56,
			'fortvision'=>58,
			'autocom'=>65,
			'vagit'=>66,
			'autosport'=>67,
			'live_chat'=>69,
			'novy'=>72,
			'agoge1'=>73,
			'megama'=>75,
			'bizportal'=>76,
			'panet'=>77,
			'over_drive'=>80,
			'idx'=>81,
			'newsletter'=>68,
			'organic_banner'=>82
		);
		
		if(isset($source[$utmsource])){
			$source2 = $source[$utmsource];
		}
	}

	$aDataToSend['SourceId1'] = $source1;
	$aDataToSend['SourceId2'] = $source2;
}



// $url = 'http://212.235.69.35/Getleads/ChampLeads.svc?wsdl';
$url = 'http://leads.champ.co.il/GetLeads/Champleads.svc?wsdl';

$result = '';
$response = true;
$error = null;

try{
	$client = new CustomSoapClient($url, array(
		'trace' => 1,
		'soap_version' => SOAP_1_1
	));
}catch (SoapFault $e) { 
	$error = $e;
	$response = false;
}

if( $response ){

	try{
		if( $_SERVER['REMOTE_ADDR'] != '62.219.132.51' ){
			$response = $client->__soapCall('InsertLead', array($aDataToSend));
		}
	}catch (SoapFault $e) {
		$error = $e;
		$response = false;
	}
}

$isInsert = false;
if(is_object($response)){
	$responseVariables = get_object_vars($response);
	$isInsert = isset($responseVariables["InsertLeadResult"]) && $responseVariables["InsertLeadResult"] == true ? true:false;
}elseif(!$response){
	$isInsert = false;
}

$leadID = htmlentities($_GET["id"]);

$file = __DIR__ . '/skodaLog.txt';
$log = file_get_contents($file);
// file_put_contents($file, $log . $leadID . "\r\n");
file_put_contents($file, $log . $leadID . " source1: " . $aDataToSend['SourceId1'] . " source2: " . $aDataToSend['SourceId2'] . " SEND: " . ($isInsert ? "TRUE":"FALSE") . "\r\n");

// if(!$isInsert){
// 	$mainApp = new LiderApp();
// 	$mainApp->errorReport($leadId);
// }
return array(
	'result' => 'done',
	'success' => $response ? 'true' : 'false',
	// 'insert' => $isInsert,
	// 'error' => $error
);

?>