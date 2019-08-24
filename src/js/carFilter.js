
//all cars obj (key is name , value is the img name)
var carsObj = {
  
  default : {
    'Skoda Octavia':'skoda_octavia',
    'Volkswagen Golf':'vw_golf',
    'Audi A3':'audi_a3',
    'Seat Leon':'seat_leon',
    'Skoda Kodiaq':'skoda_kodiaq',
    'Volkswagen Tiguan':'vw_tiguan',
    'Audi Q3':'audi_q3',
    'Seat Ateca':'seat_ateca',
    'Skoda Superb':'skoda_superb',
    'Audi A4':'audi_a4',
    'Audi A1':'audi_a1',
    'Skoda Fabia':'skoda_fabia',
    'Volkswagen Polo':'vw_polo',
    'Seat Ibiza':'seat_ibiza'
  },
  compact: {
    'Skoda Fabia':'skoda_fabia',
    'Seat Ibiza':'seat_ibiza',
    'Volkswagen Polo':'vw_polo',
    'Volkswagen Golf':'vw_golf',
    'Audi A1':'audi_a1'
  },
  sport:{
    'Skoda Octavia RS':'skoda_octavia_rs',
    'Seat Leon Cupra':'seat_leon_cupra',
    'Volkswagen Golf GTI':'vw_golf_gti',
    'Volkswagen Polo GTI':'vw_polo_gti',
    'Audi TT':'audi_tt',
    'Audi S3':'audi_s3'
  },
  family: {
    'Skoda Octavia':'skoda_octavia',
    'Skoda Karoq':'skoda_karoq',
    'Seat Leon':'seat_leon',
    'Volkswagen Golf':'vw_golf',
    'Volkswagen Tiguan':'vw_tiguan',
    'Audi A3':'audi_a3',
    'Audi A4':'audi_a4',
    'Audi Q3':'audi_q3',
    'Audi Q5':'audi_q5'
  },
  suv:{
    'Skoda Kodiaq':'skoda_kodiaq',
    'Skoda Karoq':'skoda_karoq',
    'Seat Ateca':'seat_ateca',
    'Seat Arona':'seat_arona',
    'Volkswagen Tiguan':'vw_tiguan',
    'Volkswagen Touareg':'vw_touareg',
    'Audi Q2':'audi_q2',
    'Audi Q3':'audi_q3',
    'Audi Q5':'audi_q5',
    'Audi Q7':'audi_q7',
    'Audi Q8':'audi_q8'
  },
  manager: {
    'Skoda Superb':'skoda_superb',
    'Skoda Kodiaq':'skoda_kodiaq',
    'Volkswagen Tiguan':'vw_tiguan',
    'Volkswagen Touareg':'vw_touareg',
    'Audi A6':'audi_a6',
    'Audi A7':'audi_a7',
    'Audi A8':'audi_a8',
    'Audi Q7':'audi_q7',
    'Audi Q8':'audi_q8'
  },
  
};


var car_brands = {
  seat: {
    'Seat Ibiza': 'seat_ibiza',
    'Seat Ateca': 'seat_ateca',
    'Seat Arona': 'seat_arona',
    'Seat Leon': 'seat_leon',
    'Seat Leon Cupra': 'seat_leon_cupra'
  },
  skoda: {
    'Skoda Superb': "skoda_superb",
    'Skoda Kodiaq': "skoda_kodiaq",
    'Skoda Octavia': 'skoda_octavia',
    'Skoda Fabia': 'skoda_fabia',
    'Skoda Karoq': 'skoda_karoq',
    'Skoda Octavia RS': 'skoda_octavia_rs'
  },
  volkswagen: {
    'Volkswagen Polo': "vw_polo",
    "Volkswagen Golf": 'vw_golf',
    "Volkswagen Tiguan": 'vw_tiguan',
    "Volkswagen Touareg": 'vw_touareg',
    "Volkswagen Golf GTI": 'vw_golf_gti',
    "Volkswagen Polo GTI": 'vw_polo_gti'
  },
  audi: {
    'Audi A1': 'audi_a1',
    'Audi A3': 'audi_a3',
    'Audi A4': 'audi_a4',
    'Audi A6': 'audi_a6',
    'Audi A7': 'audi_a7',
    'Audi A8': 'audi_a8',
    'Audi Q2': 'audi_q2',
    'Audi Q3': 'audi_q3',
    'Audi Q5': 'audi_q5',
    'Audi Q7': 'audi_q7',
    'Audi Q8': 'audi_q8',
    'Audi Etron': 'audi_etron',
    'Audi TT': 'audi_tt',
    'Audi S3': 'audi_s3'
  }
};

var modelNames = {
  seat: {
    'Seat Ibiza': 'IBIZA',
    'Seat Ateca': 'Ateca',
    'Seat Arona': 'Arona',
    'Seat Leon': 'LEON',
    'Seat Leon Cupra': 'LEON CUPRA'
  },
  skoda: {
    'Skoda Superb': "NEW SUPERB",
    'Skoda Kodiaq': "KODIAQ",
    'Skoda Octavia': 'OCTAVIA',
    'Skoda Fabia': 'FABIA',
    'Skoda Karoq': 'KAROQ',
    'Skoda Octavia RS': 'OCTAVIA RS'
  },
  volkswagen:{
    'Volkswagen Polo': "Polo",
    "Volkswagen Golf": 'GOLF',
    "Volkswagen Tiguan": 'Tiguan',
    "Volkswagen Touareg": 'Touareg',
    "Volkswagen Golf GTI": 'GOLF GTI',
    "Volkswagen Polo GTI": 'POLO GTI'
  },
  audi:{
    'Audi A1': 'Audi A1',
    'Audi A3': 'Audi A3',
    'Audi A4': 'Audi A4',
    'Audi A6': 'AUDI A6',
    'Audi A7': 'AUDI A7',
    'Audi A8': 'AUDI A8',
    'Audi Q2': 'Audi Q2',
    'Audi Q3': 'Audi Q3',
    'Audi Q5': 'AUDI Q5',
    'Audi Q7': 'AUDI Q7',
    'Audi Q8': 'Audi Q8',
    'Audi Etron': 'audi_etron',
    'Audi TT': 'TT',
    'Audi S3': 'AUDI S3'
  }
}

//get elements
var cars = $('.car');
var carTypes = $('.type');
var brands =  $('.brand');
var removeSelection = $('.removeSelection');


//new

function addCars(obj){

  $.each(obj,function(key, value){

    var car =  $("<div></div>").
      addClass("car " + key + " " + value).
      attr("data-car-name",key).
      css({
        "background-size": "contain",
        "background-image" : "url(images/cars_bg/" + value + ".webp" + "),url(images/cars_bg/" + value + ".jpg" + ")"
      });

    var img = $("<img class='blue_v' src='images/mobile/blue_v.png'></img>");

      // src('test')

    var carWrap = $("<div></div>").
      addClass('carWrap');

      img.appendTo(carWrap);
      car.appendTo(carWrap);
      carWrap.appendTo(".selection__cars.cars");
      

      $(car).on('click',function(){
        $(this).toggleClass('car-selected')

        $(this).parent()[0].firstChild.classList.toggle('show');
          
        

        
        //ADD REMOVE CARS FROM FORM
        if($(this).hasClass('car-selected')){
          var selectedCars = $('.formSelectedCar');
          if(selectedCars.length >=0){
            carsHeader.show();
          }
          if(selectedCars.length >=0 && selectedCars.length  <4){
            addToSelectedCar($(this).attr("data-car-name"));
          }
          if(selectedCars.length >= 4){
            $(this).removeClass('car-selected');
            $(this).parent()[0].firstChild.classList.remove('show')
            $('.error').fadeIn();
          }
        }else{
          removeFromSelectedCars($(this)[0].classList[1])
          var selectedCars = $('.formSelectedCar');
          
        }

      
      })

   
    });


}


//load the default cars on page load
addCars(carsObj.default);


$(".selection__types.types > .type , .selection__brands.brands > .brand").click(function(){

  //if click on type
  if($(this).hasClass("type")){
    $(this).toggleClass("type-selected");
  }

  //if click on brand
  if($(this).hasClass("brand")){
    $(this).toggleClass("brand-selected");
  }
  
 //collect keys 
var selected_types = [],
    selected_brands = [];


    //collect data-car-type
  $(".selection__types.types > .type").each(function(){

    if($(this).hasClass("type-selected")){
      selected_types.push($(this).attr("data-car-type"));
    }

  });

  //collect data-car-brand
  $(".selection__brands.brands > .brand").each(function(){

    if($(this).hasClass("brand-selected")){
      selected_brands.push($(this).attr("data-car-brand"));
    }

  });

  // if no brand is selected
  if(selected_brands.length == 0 && selected_types.length != 0){
    
    var new_cars = {};
  
        $.each(selected_types,function(key,value){
  
            $.each(carsObj[value],function(key,value){
              new_cars[key] = value;
            });
  
        });
  
        $(".selection__cars.cars").empty();
  
          addCars(new_cars);

  }
  // if no type is selected
  if(selected_types.length == 0 && selected_brands.length != 0 ){

    var new_cars = {};
  
        $.each(selected_brands,function(key_1,value_1){

          $.each(car_brands[value_1],function(key_2, value_2){

            $.each(car_brands[value_1],function(key_3, value_3){

              if(key_2 == key_3){
                new_cars[key_3] = value_3;
              }

            });

          });

        });

        $(".selection__cars.cars").empty();
  
        addCars(new_cars);


  }


  //if type and brand are not selected
  if(selected_types.length == 0 && selected_brands.length == 0){
    $(".selection__cars.cars").empty();
  
    addCars(carsObj.default);
  }


  //if type and brand is selected
  if(selected_types.length != 0 && selected_brands.length != 0){


    var new_cars = {};

    $.each(selected_brands,function(key_1,value_1){

      $.each(car_brands[value_1],function(key_2, value_2){

        $.each(selected_types,function(key_3, value_3){

          $.each(carsObj[value_3],function(key_4, value_4){
 
            if(key_2 == key_4){
              new_cars[key_4] = value_4;
            }
  
          });

        });
      });

    });

    $(".selection__cars.cars").empty();
  
    addCars(new_cars);



  }

  // re add classses when filtering selected cars
  var selectedCars = $('.formSelectedCar');
  if(selectedCars.length){
    selectedCars.each(function(){
      $(`div[data-car-name="${$(this)[0].dataset.oCarName}"]`).addClass('car-selected');
      try {
        $(`div[data-car-name="${$(this)[0].dataset.oCarName}"]`).parent()[0].firstChild.classList += ' show';
      }
      catch(error) {
        // console.error(error);
      }
      
    }); 
  }else{
    console.log('there No cars selected');
  }

});

var carsHeader = $('#carsHeader');
carsHeader.hide();

function addToSelectedCar(carName){
  var carName = carName;
  var divFormSelectedCar = document.createElement('div');
  var divInner = document.createElement('div');
  var div = document.createElement('div');
  var result = carName.substr(carName.indexOf(" ") + 1);

  divFormSelectedCar.className = 'formSelectedCar selected_'+ carName;;
  
  divFormSelectedCar.setAttribute('data-o-car-name',carName)

  
  divInner.className = 'inner';
  div.innerText = carName;

  var a = document.createElement('a');
  var img = document.createElement('img');
  // console.log(carName);

  if(carName in modelNames.audi){
      divFormSelectedCar.id = modelNames.audi[carName];
  }else if( carName in modelNames.skoda){
    divFormSelectedCar.id = modelNames.skoda[carName];
  }else if( carName in modelNames.seat){
    divFormSelectedCar.id = modelNames.seat[carName];
  }else if( carName in modelNames.volkswagen){
    divFormSelectedCar.id = modelNames.volkswagen[carName];
  }
  // divFormSelectedCar.id = result;
     if(carName in car_brands.skoda){ 
      
        divFormSelectedCar.setAttribute('data-carbrand','skoda');
        divInner.className = 'inner';
        div.innerText = carName;
      }else if(carName in car_brands.audi){
        divFormSelectedCar.setAttribute('data-carbrand','audi');
        divInner.className = 'inner';
        div.innerText = carName;
      }else if(carName in car_brands.volkswagen){
        divFormSelectedCar.setAttribute('data-carbrand','vw');
        divInner.className = 'inner';
        div.innerText = carName;
      }
      else if(carName in car_brands.seat){
        divFormSelectedCar.setAttribute('data-carbrand','seat');
        divInner.className = 'inner';
        div.innerText = carName;
      }

  a.className = 'removeSelection';
  a.onclick = function(){
    var target = $(this).parent().parent().parent()[0]
    var targetID = $(this).parent().parent().parent()[0].dataset.oCarName;
    var element = $(`div[data-car-name="${targetID}"]`);
    target.remove();
    element.removeClass('car-selected');


    var elementBlueV = element.parent()[0].firstChild;
    elementBlueV.classList.remove('show');

  };

  img.src  = 'images/desktop/X_icon.png';

  a.appendChild(img);
  div.appendChild(a);
  divInner.appendChild(div);
  divFormSelectedCar.appendChild(divInner);
  document.getElementById('formCars').appendChild(divFormSelectedCar);
}

function removeFromSelectedCars(carName){
  selectedCar = document.getElementsByClassName('selected_'+carName)[0];
  if(selectedCar){
    selectedCar.remove();
  }else{
    selectedCar.remove();
  }
}
