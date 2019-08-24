<?php

$utm_source = isset($_GET['utm_source']) ? $_GET['utm_source'] : '';
$phoneNumber = '0732452033';
if($utm_source){
  switch($utm_source){
    case 'star':
    $phoneNumber = '0732452025';
    break;
    
    case 'googlesearch':
    $phoneNumber = '0732452026';
    break;
    case 'gdn':
    $phoneNumber = '0732452027';
    break;

    case 'facebook':
    $phoneNumber = '0732452028';
    break;
    
    case 'instagram':
    $phoneNumber = '0732452029';
    break;
    
    case 'youtube':
    $phoneNumber = '0732452030';
    break;
    
    case 'ad_extension':
    $phoneNumber = '0732452031';
    break;
    
    case 'dv':
    $phoneNumber = '0732452032';
    break;
    
    case 'nosource':
    $phoneNumber = '0732452033';
    break;
    
    case 'mako':
    $phoneNumber = '0732452034';
    break;
    
    case 'walla':
    $phoneNumber = '0732452035';
    break;
    
    case 'defaultive':
    $phoneNumber = '0732452036';
    break;
  }
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>צ'מפיון מוטורס</title>
    <meta name="description" content="אירוע המכירות של השנה חוזר">
    <!-- <meta name="viewport" content="width=device-width,height=device-height, initial-scale=1"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta http-equiv="Referrer-Policy" content="no-referrer, strict-origin-when-cross-origin">
    <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'self';
     script-src 'unsafe-inline' 'self' https://code.jquery.com/ https://www.googletagmanager.com/ https://kit.fontawesome.com/ https://www.google-analytics.com/ https://www.googleadservices.com/ https://connect.facebook.net/ https://211412.tctm.co/t https://googleads.g.doubleclick.net/ https://facebook.com/ https://google.com/ https://google.co.il/ https://211412.tctm.co/t.js https://k.co.il/ https://www.bmby.com/;
     connect-src 'self' https://211412.tctm.co/x.json;
     img-src 'self' https://www.google.com/ https://www.google-analytics.com/ https://www.facebook.com/ https://www.google.co.il/ https://googleads.g.doubleclick.net/;
     style-src 'unsafe-inline' 'self' https://netdna.bootstrapcdn.com/;
     style-src-elem 'self' https://kit-free.fontawesome.com https://netdna.bootstrapcdn.com/  ;
     font-src 'self' https://netdna.bootstrapcdn.com/ https://kit-free.fontawesome.com/;"> -->


    <!-- Add jQuery -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <!-- Add FancyBox -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" /> -->
    <!-- <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script> -->
    <!-- Add Stylesheet -->
    <link rel="stylesheet" type="text/css" href="css/main.min.css" />
    <!-- Add FontAwesome -->
    <script src="https://kit.fontawesome.com/7c6882f75f.js"></script>
    <!-- <link href="https://fonts.googleapis.com/css?family=Assistant:300,400,600,700&amp;subset=hebrew" rel="stylesheet"> -->
    <!-- Add favicon -->
    <!-- <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon"> -->
    <!-- preload -->
    <link rel="preload" href="fonts/VWHebrew-Light.otf" as="font" crossorigin=anonymous>
    <link rel="preload" href="fonts/VWHebrew-Regular.otf" as="font" crossorigin=anonymous>
    <link rel="preload" href="fonts/VWHebrew-Bold.otf" as="font" crossorigin=anonymous>
    <!-- <link rel="preload" href="images/desktop/bg.webp" as="image" crossorigin=anonymous> -->

  <!-- <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141535915-1"></script>

  <!-- Jtag -->
  <script async src="js/gtag.js"></script>

  <!-- Google Tag Manager -->
  <script async src="js/gtm.js"></script>
  <script async src="js/ga.js"> </script>

  </head>


  <body>


  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2VTNF"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

    <main>

    <!-- TOP WELCOME SECTION -->
      <section class="welcome">
        <div class="outer">
          <img src="images/desktop/champion_logo.png" alt="" class="champ_logo">
          <div class="inner">

            <img src="images/desktop/sun_desktop.webp" alt="" class="desktop sun">
            <div class="textCont">
              <h3 class="topTxt">אירוע המכירות של השנה חוזר!</h3>
              <h2 class="desktop"><span></span> <span>&nbsp;&nbsp;11-13 בספטמבר&nbsp;&nbsp;</span><span></span></h2>
              <img src="images/desktop/cars_logos_white.png" alt="">
              <h3 class="subTxt">מותגי הרכב המובילים בעולם בהטבות שאסור לפספס</h3>
              <h2 class="mobile"><div></div>11-13 בספטמבר</h2>


              <div class="buttons desktop downArrow" >
                <a href="#carSelect" >
                  <span>לצפייה בדגמים</span>
                  <img src="images/desktop/arrows.webp" alt="">
                </a>
              </div>
            </div>
          </div>

          <div class="buttons mobile">

            <button class="btn btn--secondary" id="openForm">להשארת פרטים
              <img src="images/mobile/triangle.png" alt="">
            </button>

            <button id="callme" class="btn btn--secondary" onclick="document.location.href = 'tel:<?php echo $phoneNumber;?>'">  לשיחה עם נציג
            <img src="images/mobile/phone_icon.png" alt="">
            </button>

          </div>

          <div class="legal mobile">
            <a href="pollution.png" target="_blank">דרגות זיהום ובטיחות</a>
            <span>|</span>
            <a href="legal.png" target="_blank">הערות משפטיות</a>
          </div>

        </div>

      </section>

      <section class="form" id="form">
      <img src="images/desktop/champion_logo.png" alt="" class="champ_logo mobile">
      <img src="images/mobile/X_icon.png" alt="" id="closeForm" class="close mobile">

       <div class="outer">
         <div id="thanku">
         תודה שפניתם אלינו, <br>
נציגנו יחזור אליכם<br> בהקדם.
         </div>
         <div class="inner">
           <h2 id='formHead'>לתיאום פגישה</h2>
           <!-- <form action=""> -->
           <form novalidate="novalidate" id="mainForm" method="GET">
           <input class="input" type="text" name="firstName" placeholder="שם פרטי"  validation-text="יש למלא שם פרטי" data-v="name" data-required="true">
           <input class="input" type="text" name="lastName" placeholder="שם משפחה"  validation-text="יש למלא שם משפחה" data-v="name" data-required="true">
           <input type="numbers" class="input" name="phone" placeholder="טלפון" validation-text="יש למלא טלפון" data-v="phone_il" data-required="true">

             <input class="input lastInp" type="email" name="email" placeholder='דוא"ל' validation-text='יש למלא דוא"ל' data-v="email" data-required="true">

             <!-- brand select -->
             <select name="brand" id="" >
             <option value="" disabled selected>בחר מותג</option>
               <option value="skoda">Skoda</option>
               <option value="volkswagen">Volkswagen</option>
               <option value="seat">Seat</option>
               <option value="audi">Audi</option>
             </select>

             <!-- Selected cars from car selector -->
             <div class="formSelectedCars">
                <h3 id="carsHeader">הרכבים שבחרתי</h3>
                <div class="formCarsCont" id="formCars">


                </div>
                <button id="sendME">שלח ></button>
                <div class="checkbox">
                  <input type="checkbox" name="privacy" id="checkme" class="privacy" value='כן'  checked>
            <label for="privacy" style="direction: rtl" class="container">מסכים
                    <a style='text-decoration:underline;' href="https://www.championmotors.co.il/%d7%9e%d7%93%d7%99%d7%a0%d7%99%d7%95%d7%aa-%d7%a4%d7%a8%d7%98%d7%99%d7%95%d7%aa/" target="_blank" >
                    למדיניות הפרטיות
                    </a>
                    ומאשר שמירת הפרטים במאגר המידע
                  </label>
                </div>

                <div class="checkbox" >
                  <input type="checkbox" name="newsletter" id="newsletter-footer">
                  <label for="newsletter-footer">מאשר קבלת מידע שיווקי, הצעות למוצרים ו/או שירותים מצ'מפיון מוטורס במייל וב-sms</label></div>
             </div>

             <div class="legal desktop">
               <h3>לשיחה עם נציג: <?php echo $phoneNumber;?></h3>
            <a href="pollution.html" target="_blank">דרגות זיהום ובטיחות</a>
            <span>&nbsp;|&nbsp; </span>
            <a href="legal.html" target="_blank">הערות משפטיות</a>
          </div>

           </form>
         </div>
       </div>
      </section>

      <!-- CARS SELECTIONS SECTION -->

      <section class="carsSelection" id="carSelect">
        <div class="selection">

          <!-- Instructions , head -->
          <div class="selection__head">
            <h3>בחרו את הדגמים המועדפים עליכם</h3>
            <p>סמנו קטגוריות ומותגים</p>
          </div>

          <!-- SELECT CAR TYPE -->
          <div class="selectionCont">
            <div class="selection__types types">
              <div class="type type--1 compact" data-car-type="compact"></div>
              <div class="type type--2 family" data-car-type="family"></div>
              <div class="type type--3 suv" data-car-type="suv"></div>
              <div class="type type--4 manager" data-car-type="manager"></div>
              <div class="type type--5 sport" data-car-type="sport"></div>
            </div>

            <!-- SELECT BRAND -->

            <div class="selection__brands brands">

              <div class="brand brand--1 audi" data-car-brand="audi"></div>
              <div class="brand brand--2 seat" data-car-brand="seat"></div>
              <div class="brand brand--3 skoda" data-car-brand="skoda"></div>
              <div class="brand brand--4 volkswagen" data-car-brand="volkswagen"></div>
            </div>
          </div>
        </div>

        <div class="carSelectionHeader">
          <h2>לחצו על הדגמים לבחירה</h2>
          <div class='error'>ניתן לסמן עד 4 רכבים</div>
        </div>

        <div class="selection__cars cars">
          </div>

          <footer id="foot">
            <div class="cont">
              <button class="mobile" id="openFormButtom"><span>להשארת פרטים</span> לחצו כאן &nbsp;>></button>
              <p><br>*כפוף לתקנון ולתנאי המבצע, מימון - בכפוף לתנאי גופי המימון ובאחריותם,<br>טרייד אין כפוך לתנאי חברת אוטודיל.</p>
              <!-- <img src="images/desktop/champion_logo.png" alt="chamption motors"> -->
              <img src="images/desktop/logos_footer.webp" alt="Volkswagen Seat Skoda Audi" class="desktop">
              <img src="images/mobile/footer_logos.png" alt="Volkswagen Seat Skoda Audi" class="mobile footerImg">
            </div>
          </footer>
      </section>
    </main>

    <script>


    </script>

    <script src="js/zoom.min.js?v=1.2"></script>
    <script src="js/formValidationAjax.min.js?v=1.2"></script>
    <script src="js/script.js?v=1.2"></script>
    <script src="js/carFilter.js?v=1.2"></script>
  </body>
</html>
