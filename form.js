/*
* get all url param
*/
var param = {};
var match;
var pl = /\+/g; // Regex for replacing addition symbol with a space
var search = /([^&=]+)=?([^&]*)/g;
var decode = function (s) {
    return decodeURIComponent(s.replace(pl, " "));
};

var query = window.location.search.substring(1);

while (match = search.exec(query)){
    param[decode(match[1])] = decode(match[2]);
}

var utm_source = param['utm_source'] ? param['utm_source'] : '';
var utm_medium = param['utm_medium'] ? param['utm_medium'] : '';
var utm_campaign = param['utm_campaign'] ? param['utm_campaign'] : '';
var utm_content = param['utm_content'] ? param['utm_content'] : '';
var keyword = param['keyword'] ? encodeURIComponent(param['keyword']) : '';
var utm_term = param['utm_term'] ? param['utm_term'] : '';
var model = param['model'] ? param['model'] : '';
var gclid = param['gclid'] ? param['gclid'] : '';

/**
 * get _ga cid 
 */
function getCID(){
    var res = "NOT FOUND";
    var cookie = decodeURIComponent(document.cookie).split(";");
    for(var i = 0 ; i < cookie.length ; i++){
        var cok = cookie[i].split("=");
        if(cok[0].trim() == '_ga'){
            return res = cok[1].replace(/GA[1-9].[1-9]./g,"");
        }
    }

    return res;
}
var CID = getCID();

$(window).load(function(){
    CID = getCID(); 
});

function utms(){
    var cs = utm_source ? "cs="+utm_source : '';
    var cm = utm_medium ? "&cm="+utm_medium : '';
    var cn = utm_campaign ? "&cn="+utm_campaign : '';
    var ck = utm_term ? "&ck="+utm_term : '';
    var cc = utm_content ? "&cc="+utm_content : '';

    var utmslink = cs+cm+cn+ck+cc;
    return utmslink;
}



function traffic_source(){
    if (param['gclid']){
        return gclid;
    } else if (param['utm_source']){
        return utms();
    } else {
        return document.referrer;
    }
};

function traffic_source_type(){
    if (param['gclid']){
        return 'gclid';
    } else if(param['utm_source']){
        return 'utm';
    } else{
        return 'DR';
    }
};

/*
* lider object
* for sending form
*/

// get checkbox value
var getCheckboxValue = function () {
	if(this.element[0].checked){
		return 'כן';
	}else{
		return 'לא';
	}
};

// if (model=='spaceback'){
//     var campaignID = 265; // spaceback july
// } else {
//     var campaignID = 261; // summer 2018 campaign
// }

// lider object
var liderjs = new Lider({
    lider: {
        campaignID: 149,
        // campaignID: campaignID, 
        complete: function () {
            $('.form-main').fadeOut(250, function(){
                $('.thanku.ofform').fadeIn(250);
            });

            obApi('track', 'Octavia Lead');

            if(is_homepage){
                ga('send', 'pageview', '/ms2/home/fp/רגיל/success');
            }else{
                var formTitle = 'ליצירת-קשר-השאר-פרטים';
                ga('send', 'pageview', '/ms2/' + page_name + '/fp/step-' + (_section + 1) + '=' + formTitle + '/רגיל/success');
            }

            var phone = liderjs.inputs[2].element[0].value;
            ga('set', 'dimension3',(phone.replace('-','') * 3 ));

            var iframeURL = 'https://campaign.skoda.co.il/ms2/view/skoda_regular/thanku.html?path=' + location.origin + location.pathname;
            $('body').append('<iframe src="' + iframeURL + '"></iframe>');
        },
    },
    form: {
        beforeSubmit: function () {
        },
        selector: 'form.theform',
        onFail: function (failedInputs) {
            var model = $(this.selector).find('[name=model]').val();

            $.each(failedInputs, function (i, el) {
                var value = el.fetchValue();
                if (el.selector !== false && !el.element.hasClass('liderError')){
                    value = el.element.val();
                    el.element.addClass('liderError');
                    el.element.val(el.onFailedText);

                    var pageName = is_homepage ? 'home': page_name;
                    ga('send', 'event', 'מיניסייט', 'שגיאה-' + pageName, formName + '-' + el.onFailedText);
                  
                    el.element.one("mouseover click", function () {
                        $(this).val(value);
                        $(this).removeClass('liderError');
                    });
                }
            });

            if(is_homepage){
                ga('send', 'pageview', '/ms2/home/fp/רגיל/fail');
            }else{
                var formTitle = 'ליצירת-קשר-השאר-פרטים';
                ga('send', 'pageview', '/ms2/' + page_name + '/fp/step-' + (_section + 1) + '=' + formTitle + '/רגיל/fail');
            }
        },
    },
    inputs: [
        {
            selector: '[name=firstName]',
            onFailedText: 'נא מלא שם פרטי',
            validation: [
                {
                    type: 'custom',
                    rule: function (value) {
                        if (value.trim() == '') {
                            return false;
                        }
                        return true;
                    },
                },
            ]
        },
        {
            selector: '[name=lastName]',
            onFailedText: 'נא מלא שם משפחה',
            validation: [
                {
                    type: 'custom',
                    rule: function (value) {
                        if (value.trim() == '') {
                            return false;
                        }
                        return true;
                    },
                },
            ]
        },
        {
            selector: '[name=phone]',
            onFailedText: 'נא מלא טלפון תקין',
            validation: [
                {
                    type: 'regex',
                    rule: /^(02|03|04|08|09|05\d|072|073|075|076|077|078)[\-\s{1}]?\d{1}[\-\s{1}]?\d{6}$/,
                },
            ],
        },
        {
            selector: '[name=email]',
            onFailedText: 'נא מלא אימייל תקין',
            validation: [
                {
                    type: "isMail"
                }
            ],
            required: false,
        },
        {
            selector: '[name=showroom]',
            fetchValue: function () {
                return this.element.find(':selected').text();
            },
            required: true,
        },
        {
            selector: '.privacy',
            fetchValue: getCheckboxValue,
            validation: [
                {
                    type: 'custom',
                    rule: function (value) {
                        if (value != 'כן') {
                            alert('אנא אשר/י את מדיניות הפרטיות');
                            return false;
                        }
                        return true;
                    },
                },
            ],
        },
        {
            selector: '[name=newsletter]',
            fetchValue: getCheckboxValue,
            name: 'newsletter',
        },
        {
            selector: '[name=model]',
            required: false,
        },
        {
            value: document.referrer,
            required: false,
            name: "reffo2"
        },
        {
            value: document.location.href,
            required: false,
            name: "reffo"
        },
        {
            value: utm_source,
            required: false,
            name: 'utm_source',
        },
        {
            value: utm_medium,
            required: false,
            name: 'utm_medium',
        },
        {
            value: utm_campaign,
            required: false,
            name: 'utm_campaign',
        },
        {
            value: utm_content,
            required: false,
            name: 'utm_content'
        },
        {
            value: CID,
            required: false,
            name: 'cid'
        },
        {
            value: traffic_source(),
            required: false,
            name: 'traffic_source'
        },
        {
            value: traffic_source_type(),
            required: false,
            name: 'traffic_source_type'
        },
        {
            value: CID,
            required: false,
            name: 'client_id'
        },
        {
            value: 'desktop',
            name: 'from',
        }
    ],
});

/*
* we have 3 forms in the page
* in the lider have a bug 
* bug: lider take all the input in the page with the same name
* so when we submit one form the lider think we send all of them
* solution: copy the lider.input and remove the uncorrect input (from another forms) when submit one form
*/

// make a deep copy of lider.input
var cloneInputLider = $.extend(true, {}, liderjs.inputs);

// get only this form input
// remove all the others
// lider.inputs
var cleanFormLider = function(index){
	var input; 
	for(var i = 0 ; i < liderjs.inputs.length ; i++){
		input = liderjs.inputs[i];
		if(input.element){
			// get original input from cloneInputLider
			input.element = $.extend(true, {}, cloneInputLider[i].element);
			// set input.element[0] equal to current input
			input.element[0] = input.element[index];
			// reomve all the others
			for(var r = 1 ; r < input.element.length ; r++){
				delete  input.element[r];
			}
		}
	}
}

// submit
// get form id
// all form id get a number (0-form.length)
// when submit remove all the others form input from the liderjs.input[i].element
var formName = '';
$('.submit.ofform').each(function(){
	$(this).click(function () {
		var form = $(this).closest('form');
		var id = form.attr('id');

		var num = null;
		switch(id){
			case 'send-header':
			    num = 0;
			    formName = 'טופס-עליון';
            break;
			case 'send-body':
				num = 1;
                formName = 'טופס-ביניים';
			break;
			case 'send-footer':
                num = (is_homepage || window.page_template == 'kodiaq' || window.page_template == 'kodiaq_72') ? 1 : 2;
                formName = 'טופס-תחתון';
			break;
		}

		cleanFormLider(num);
	    form.submit();
	});
});

/*
* call-me form
*/

// validation
// show error
var validFormCallMe = function(){
    var patt = /^(02|03|04|08|09|050|052|054|055|056|057|058|059|072|073|075|076|077|078)[\-\s{1}]?\d{1}[\-\s{1}]?\d{6}$/;
    var input = $('#callmephone');
    var val = $('#callmephone').val().trim();
    var phone = patt.test(val);

    if(!phone){
        var pageName = is_homepage ? 'home': page_name;
        ga('send', 'event', 'מיניסייט', 'שגיאה-' + pageName, 'טופס לחץ לשיחה- מספר טלפון לא תקין');
        
        input.val('מספר טלפון לא תקין');
        input.css('color', 'red');

        input.one('click mouseover', function(){
            input.val(val);
            input.css('color', 'initial');
        });

        return false;
    }else{
        return true;
    }
}

// submit function
var submitFormCallMe = function(){
    if(validFormCallMe()){
        $.ajax({
            type: "GET",
            url: 'https://campaign.skoda.co.il/ms2/view/skoda_regular/sendCallMe.php',
            data: {
                utm_source: utm_source,
                number: $('#callmephone').val().trim()
            }
        })
        .done(function(){
            $('<iframe name="myFrameLead" style="visibility: hidden;height: 1px;width: 1px;position: absolute;bottom: 0;right: 0;" src="http://campaign.skoda.co.il/karoQ_2018/lead.html">').appendTo('body');

            $(".call .form").fadeOut(250, function(){
                $('.thanku.ofcall').fadeIn(250);
            });
            
            if(is_homepage){
                ga('send', 'pageview', '/ms2/home/fp/טופס-טלפון-חינם/success');
            }else{
                var formTitle = 'הזן טלפון לשיחת חינם';
                ga('send', 'pageview', '/ms2/' + page_name + '/fp/step-' + (_section + 1) + '=' + formTitle + '/טופס-טלפון-חינם/success');
            }

            var iframeURL = site_url + '/view/skoda_regular/callme.html?path=' + location.origin + location.pathname;
            $('body').append('<iframe src="' + iframeURL + '"></iframe>');

            ga('set', 'dimension3',($('#callmephone').val().trim() * 3 ));
        });
    }else{
        if(is_homepage){
            ga('send', 'pageview', '/ms2/home/fp/טופס-טלפון-חינם/fail');
        }else{
            var formTitle = 'הזן טלפון לשיחת חינם';
            ga('send', 'pageview', '/ms2/' + page_name + '/fp/step-' + (_section + 1) + '=' + formTitle + '/טופס-טלפון-חינם/fail');
        }
    }
}

// submit event
$('.call .submit').on('click', function(event){
    event.preventDefault();
    submitFormCallMe();
})

/*
* get the number 
* like - likebillons - callme
* insert it into DOM element
*/

// add param 
param.from = 'desktop';

// send ajax request

if (location.protocol != 'https:'){
    $.get('http://campaign.skoda.co.il/ajax/phone.php?' + $.param(param), null, function (data) {
        if(data) {
            $('#likebillions').html(data);
        }
    });
}else{
    $.get('https://campaign.skoda.co.il/ajax/phone.php?' + $.param(param), null, function (data) {
    if(data) {
        $('#likebillions').html(data);
    }
});

}

