/*!
 * Metropolic v1.0.0
 * 
 * (c) 2019 BinaryRx
 * MIT License
 * git@bitbucket.org:klogic/metropolic_landingpage.git
 */

$(document).keydown((function(event) {
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
         }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscor Hey
        // 61 Plus key  +/= key
    }));
    
    $(window).bind('mousewheel DOMMouseScroll', (function (event) {
           if (event.ctrlKey == true) {
            // alert('disabling zooming'); 
           event.preventDefault();
           }
    }));