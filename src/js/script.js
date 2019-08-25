function Validator(form, options) {
  this.inputs = [].slice.call(form.querySelectorAll("[data-v]"));
  this.options = options;
  form.addEventListener("submit", this.onsubmit.bind(this));
}

Validator.prototype = {
  onsubmit: function(e) {
    e.preventDefault();
    if (this.validate()) {
      if (this.inOptions("onsubmit")) {
        this.options.onsubmit();
      }
      return true;
    }
    return false;
  },
  inOptions: function(string) {
    return this.options.hasOwnProperty(string);
  },
  inValidations: function(string) {
    return this.validations.hasOwnProperty(string);
  },
  validate: function() {
    var _this = this;
    var faildInputs = this.inputs.filter(function(input) {
      var validFn = input.getAttribute("data-v");
      validFn =
        typeof validFn === "string" && validFn.length === 0
          ? "rValue"
          : validFn;
      var required =
        input.getAttribute("data-required") == "true" ||
        input.getAttribute("data-required") == "1";
      if (!required && input.value.length === 0) {
        return false;
      }
      return required && input.value.length === 0
        ? true
        : !_this.validations[validFn].call(_this, input);
    });

    if (faildInputs.length) {
      if (this.inOptions("onError")) {
        this.options.onError(faildInputs);
      }
      return false;
    }

    return true;
  },
  validations: {
    email: function(input) {
      return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        input.value
      );
    },
    name: function(input) {
      return /^[a-zA-Z|\s|א-ת]{2,30}$/.test(input.value.trim());
    },
    phone_il: function(input) {
      ///^[0][5][0]-\d{7}|[0][5][2]-\d{7}|[0][5][4]-\d{7}|[0][5][7]-\d{7}|[0][7][7]-\d{7}|[0][2]-\d{7}|[0][3]-\d{7}|[0][4]-\d{7}|[0][8]-\d{7}|[0][9]-\d{7}|[0][5][0]\d{7}|[0][5][2]\d{7}|[0][5][4]\d{7}|[0][5][7]\d{7}|[0][7][7]\d{7}|[0][2]\d{7}|[0][3]\d{7}|[0][4]\d{7}|[0][8]\d{7}|[0][9]\d{7}$/
      return /^\b\d{2,3}-*\d{7}\b$/.test(input.value.replace("-", ""));
    },
    fullName: function(input) {
      return /^[a-zA-Zא-ת']+[ ]+[a-zA-Zא-ת'\- ]*$/.test(input.value);
    },
    rValue: function(input) {
      return input.value;
    }
  }
};

const lead = data =>
  $.when(
    $.ajax({
      type: "GET",
      url: "http://lider.k.co.il/savej",
      data,
      crossDomain: true,
      dataType: "jsonp"
    })
  );

// window.location.reload(true);
//Listen to the resize event
window.addEventListener("resize", function() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  var vh = window.innerHeight * 0.01;
  vh = vh + "px";

  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", vh);
});

$(document).ready(function() {
  //Change background on mobile threshold.
  var x = window.matchMedia("(max-width: 768px)");

  function DeviceFormDetect(x) {
    if (x.matches) {
      console.log("mobile");
    } else {
      console.log("desktop");
      $("section.form").removeClass("open");
      $("section.form").addClass("block");
    }
  }
  DeviceFormDetect(x);

  var images = [];

  //define image preloading function
  function preload() {
    for (var i = 0; i < arguments.length; i++) {
      images[i] = new Image();
      images[i].crossOrigin = "anonymous";
      images[i].src = preload.arguments[i];
    }
    // console.log(images);
  }
  //-- usage --//
  preload(
    "images/desktop/welcome_bg_full.webp",
    "images/desktop/champion_logo.png",
    "images/desktop/sun_desktop.webp",
    "images/desktop/buttons/compact_BTN_blue.jpg",
    "images/desktop/buttons/family_BTN_blue.jpg",
    "images/desktop/buttons/suv_BTN_blue.jpg",
    "images/desktop/buttons/managers_BTN_blue.jpg",
    "images/desktop/buttons/sport_BTN_blue.jpg",
    "images/desktop/buttons/audi_BTN_blue.jpg",
    "images/desktop/buttons/skoda_BTN_blue.jpg",
    "images/desktop/buttons/seat_BTN_blue.jpg",
    "images/desktop/buttons/vw_BTN_blue.jpg",
    "images/desktop/buttons/compact_BTN_blue.webp",
    "images/desktop/buttons/family_BTN_blue.webp",
    "images/desktop/buttons/suv_BTN_blue.webp",
    "images/desktop/buttons/managers_BTN_blue.webp",
    "images/desktop/buttons/sport_BTN_blue.webp",
    "images/desktop/buttons/audi_BTN_blue.webp",
    "images/desktop/buttons/skoda_BTN_blue.webp",
    "images/desktop/buttons/seat_BTN_blue.webp",
    "images/desktop/buttons/vw_BTN_blue.webp"
  );

  //                  //
  // checkbox logic   //
  //                  //

  $("#checkme").attr("checked", true);

  $("#checkme").val("כן");

  $(".checkbox").on("click", function() {
    //   console.log('clicked');
    if ($("#checkme").attr("checked")) {
      $("#checkme").attr("checked", false);
      $("#checkme").val("לא");
    } else {
      $("#checkme").attr("checked", true);
      $("#checkme").val("כן");
    }
  });

  //do things if mobile or desktop
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      //mobile
      // $('.downArrow').click(function(){
      // var header = $('#myHeader').height();
      // var jumpHere = $('#jumpHere').offset().top;
      // backgroundBg = $('#secondBg').offset().top;
      // var offset = backgroundBg - header;
      // $('html, body').animate({scrollTop: offset +2}, '500','swing');
      // });
    } else {
      //desktop

      // please note,
      // that IE11 now returns undefined again for window.chrome
      // and new Opera 30 outputs true for window.chrome
      // but needs to check if window.opr is not undefined
      // and new IE Edge outputs to true now for window.chrome
      // and if not iOS Chrome check
      // so use the below updated condition
      var isChromium = window.chrome;
      var winNav = window.navigator;
      var vendorName = winNav.vendor;
      var isOpera = typeof window.opr !== "undefined";
      var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
      var isIOSChrome = winNav.userAgent.match("CriOS");

      if (isIOSChrome) {
        // is Google Chrome on IOS
      } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
      ) {
        // Run Code
      }
    }
  }

  x.addListener(myFunction);

  myFunction(x); //trigger

  // Open/Close form mobile

  $("#openForm").on("click", function() {
    $("section.welcome").fadeOut();
    $("section.form").fadeIn();
    $("section.form").addClass("open");
    $("section#carSelect").fadeOut();
  });

  $("#openFormButtom").on("click", function() {
    $("section.welcome").fadeOut();
    $("section.form").fadeIn();
    $("section.form").addClass("open");
    $("section#carSelect").fadeOut();
  });

  $("#closeForm").on("click", function() {
    $("section#carSelect").fadeIn();
    $("section.welcome").fadeIn();
    $("section.form").fadeOut();
  });
});

$("#callme").on("click", function() {
  dataLayer.push({ event: "Phone" });
});

//                                   //
//            LEAD SENDING           //
//                                   //

// GET parameters
var urlParams;
var match;
var pl = /\+/g;
var search = /([^&=]+)=?([^&]*)/g;
var validDate = /\b(19|20)\d\d\b/;

var decode = function(s) {
  return decodeURIComponent(s.replace(pl, " "));
};

var query = window.location.search.substring(1);

urlParams = {};
while ((match = search.exec(query))) {
  urlParams[decode(match[1])] = decode(match[2]);
}

var fullName = urlParams["Fname"] || "";
var phone = urlParams["Phone"] || "";
var email = urlParams["Email"] || "";
var utm_source = urlParams["utm_source"] || "";
var utm_medium = urlParams["utm_medium"] || "";
var utm_campaign = urlParams["utm_campaign"] || "";
var utm_content = urlParams["utm_content"] || "";
var utm_term = urlParams["utm_term"] || "";

var carString = [];

var checkbox = $('input[type="checkbox"]');
checkbox.val("לא");
checkbox.on("change", function() {
  if ($(this).is(":checked")) $(this).val("כן");
  else $(this).val("לא");
});

var x = window.matchMedia("(max-width: 768px)");

let run = false;
const validator = new Validator($("form").get(0), {
  onsubmit: () => {
    if (run) return;
    run = true;
    $("#sendME").text("טוען...");

    const brandMapToCampaignId = {
      skoda: "208",
      seat: "209",
      vw: "210",
      audi: "211"
    };

    var selectedCars = Array.from(
      document.getElementsByClassName("formSelectedCar")
    );
    var str = "Mon 25-Jul-2011";
    var firstSpace = str.indexOf(" ");
    var newStr = str.slice(firstSpace);

    const selectedCarsByBrand = selectedCars.reduce(
      (prevValue, currentValue) => {
        const cardbrand = currentValue.dataset.carbrand;
        const id = currentValue.id;
        // var result = id.substr(id.indexOf(" ") + 1);

        prevValue[cardbrand] = prevValue[cardbrand]
          ? [...prevValue[cardbrand], id]
          : [id];
        return prevValue;
      },
      {}
    );
    const selectedBrands = Object.keys(selectedCarsByBrand);
    const formData = $("form")
      .serializeArray()
      .reduce((prevValue, input) => {
        prevValue[input.name] = input.value;
        return prevValue;
      }, {});

    const cars = Object.values(selectedCarsByBrand).flat();
    const comments = cars.length > 1 ? cars.join(",") : false;

    const leadRequest = $.when(
      selectedBrands.map(brand => {
        return lead(
          Object.assign(
            formData,
            {
              utm_source: utm_source,
              utm_medium: utm_medium,
              utm_campaign: utm_campaign,
              utm_content: utm_content,
              utm_term: utm_term,
              reffo: document.location.href,
              reffo2: document.referrer,
              from: x.matches ? "mobile" : "desktop",
              campaignId: brandMapToCampaignId[brand],
              brand: brand,
              MediaTitle: utm_source
            },
            comments ? { comments: "בחירה מרובה: " + comments } : {},
            selectedCarsByBrand[brand].length == 1
              ? { model: selectedCarsByBrand[brand].join("") }
              : {}
          )
        );
      })
    );

    leadRequest.always(() => {
      $("#mainForm").fadeOut(250, function() {
        $("#thanku").fadeIn(250);
        $("#formHead").fadeOut(250);
      });
      dataLayer.push({ event: "Lead" });
    });
  },
  onError: errorElements => {
    errorElements.forEach(el => {
      const $el = $(el),
        value = el.value;
      $el.val($el.attr("validation-text")).one("focus", e => {
        $el.val($el.attr("validation-text") === value ? "" : value);
      });
    });
  }
});

window.mobilecheck = function() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

// if(x.matches){
//   sendLead('http://lider.k.co.il/savej','GET','mobile');
// }else{
//   sendLead('http://lider.k.co.il/savej','GET','desktop');
// }
