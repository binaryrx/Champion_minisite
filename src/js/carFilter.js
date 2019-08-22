
//all cars obj (key is name , value is the img name)
var carsObj = {
  
  default : {
    'octavia':'skoda_octavia',
    'golf':'vw_golf',
    'a3':'audi_a3',
    'leon':'seat_leon',
    'kodiaq':'skoda_kodiaq',
    'tiguan':'vw_tiguan',
    'q3':'audi_q3',
    'ateca':'seat_ateca',
    'superb':'skoda_superb',
    'a4':'audi_a4',
    'a1':'audi_a1',
    'fabia':'skoda_fabia',
    'polo':'vw_polo',
    'ibiza':'seat_ibiza'
  },
  compact: {
    'fabia':'skoda_fabia',
    'ibiza':'seat_ibiza',
    'polo':'vw_polo',
    'golf':'vw_golf',
    'a1':'audi_a1'
  },
  sport:{
    'octavia rs':'skoda_octavia_rs',
    'leon cupra':'seat_leon_cupra',
    'golf gti':'vw_golf_gti',
    'polo gti':'vw_polo_gti',
    'tt':'audi_tt',
    's3':'audi_s3'
  },
  family: {
    'octavia':'skoda_octavia',
    'karoq':'skoda_karoq',
    'leon':'seat_leon',
    'golf':'vw_golf',
    'tiguan':'vw_tiguan',
    'a3':'audi_a3',
    'a4':'audi_a4',
    // 'a5':'audi_a5',
    'q3':'audi_q3',
    'q5':'audi_q5'
  },
  suv:{
    'kodiaq':'skoda_kodiaq',
    'karoq':'skoda_karoq',
    'ateca':'seat_ateca',
    'arona':'seat_arona',
    'tiguan':'vw_tiguan',
    'touareg':'vw_touareg',
    'q2':'audi_q2',
    'q3':'audi_q3',
    'q5':'audi_q5',
    'q7':'audi_q7',
    'q8':'audi_q8'
  },
  manager: {
    'superb':'skoda_superb',
    'kodiaq':'skoda_kodiaq',
    'tiguan':'vw_tiguan',
    'touareg':'vw_touareg',
    'a4':'audi_a4',
    'a6':'audi_a6',
    'a7':'audi_a7',
    'a8':'audi_a8',
    'q7':'audi_q7',
    'q8':'audi_q8'
  },
  
};


var car_brands = {
  seat: {
    'ibiza': 'seat_ibiza',
    'ateca': 'seat_ateca',
    'arona': 'seat_arona',
    'leon': 'seat_leon',
    'leon cupra': 'seat_leon_cupra'
  },
  skoda: {
    'superb': "skoda_superb",
    'kodiaq': "skoda_kodiaq",
    'octavia': 'skoda_octavia',
    'fabia': 'skoda_fabia',
    'karoq': 'skoda_karoq',
    'octavia rs': 'skoda_octavia_rs'
  },
  volkswagen: {
    'polo': "vw_polo",
    "golf": 'vw_golf',
    "tiguan": 'vw_tiguan',
    "touareg": 'vw_touareg',
    "golf gti": 'vw_golf_gti',
    "polo gti": 'vw_polo_gti'
  },
  audi: {
    'a1': 'audi_a1',
    'a3': 'audi_a3',
    'a4': 'audi_a4',
    'a6': 'audi_a6',
    'a7': 'audi_a7',
    'a8': 'audi_a8',
    'q2': 'audi_q2',
    'q3': 'audi_q3',
    'q5': 'audi_q5',
    'q7': 'audi_q7',
    'q8': 'audi_q8',
    'etron': 'audi_etron',
    'tt': 'audi_tt',
    's3': 'audi_s3'
  }
};

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
        "background-image" : "url(images/cars_bg/" + value + ".webp" + ")"
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

        console.log($(this).parent()[0].firstChild.classList.toggle('show'))
        
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
  
  //after filter
  $(".selection__cars.cars > .carWrap >  .car").click(function(){
  
  
    if($(this).hasClass('car-selected')){
      
      // if(selectedCars.length )
  
      addToSelectedCar($(this).attr("data-car-name"));
      var selectedCars = $('.formSelectedCar');
  
      if(selectedCars.length > 4){
        removeFromSelectedCars($(this)[0].classList[1])  
        $(this).removeClass('car-selected');
        $(this).parent()[0].firstChild.classList.remove('show')
        // console.log($(this).parent()[0].firstChild.classList.removeClass('show'))
        $('.error').fadeIn();
        
      }
      // console.log(selectedCars)
    }else{
      removeFromSelectedCars($(this)[0].classList[1])
      var selectedCars = $('.formSelectedCar');
      // console.log($(this));
      
    }
    
  
  });
});


//before filter
$(".selection__cars.cars > .carWrap > .car").click(function(){
  
  if($(this).hasClass('car-selected')){

    addToSelectedCar($(this).attr("data-car-name"));
    var selectedCars = $('.formSelectedCar');

    if(selectedCars.length > 4){
      removeFromSelectedCars($(this)[0].classList[1])  
      $(this).removeClass('car-selected');
      $(this).parent()[0].firstChild.classList.remove('show')
      // console.log($(this).parent()[0].firstChild.classList.remove('show'));
      $('.error').fadeIn();
    }
    
  }else{
    removeFromSelectedCars($(this)[0].classList[1])
    var selectedCars = $('.formSelectedCar');
    
  }
  
});


//function to recieve a car name, selects the car by data-car-name
//every time the function is run,toggle the car-selected class on/off (filter on the car)
function carSelect(target){
  const targetCar = target;
  // console.log(targetCar);
  const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
  element.classList.toggle('car-selected');
}

//for each car in the cars array, bind click event,
cars.each((function(){
  $(this).click((function(event){
    //select the cars area in form
    var formSelectedCar = $('.formSelectedCar');
    var targetDiv = event.target;
    var target = event.target.dataset.carName;
    // var img = document.createElement('img'); 
    // img.src = "images/mobile/blue_v.png";
    // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
    // img.classList = 'blue_v';

    //append car to list 
    if(formSelectedCar.length == 0){
      carSelect(target);
      addToSelectedCar(target);
      //if  4 cars, remove last show error + remove last selection
    }else if(formSelectedCar.length >= 4){
      $('.error').fadeIn();
      $(this).removeClass('car-selected');
      removeFromSelectedCars(target)
      // $('.error').fadeOut();
    }else{
      if( $(this).hasClass('car-selected') ){

        $(this).removeClass('car-selected');
        
        removeFromSelectedCars(target)
      }else{
        carSelect(target);
        addToSelectedCar(target);
      }
    }    
    
  }));
  
}));

function buildCarObj(targetType){
  
};


//console log the clicked brand
function brandFilter(target){
    // var target = e.target || e.srcElement || e.originalTarget;
      // const brandSelected = target.dataset.carBrand;
      const targetType = target;
      // console.log(targetType);
      const element = document.querySelector(`div[data-car-brand="${target}"]`);
      element.classList.toggle('brand-selected');

}


function addToSelectedCar(carName){
  var carName = carName;
  var divFormSelectedCar = document.createElement('div');
  var divInner = document.createElement('div');
  var div = document.createElement('div');

  divFormSelectedCar.className = 'formSelectedCar selected_'+ carName;;
  divFormSelectedCar.id = carName;
  divInner.className = 'inner';
  div.innerText = carName;

  var a = document.createElement('a');
  var img = document.createElement('img');
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
    var targetID = $(this).parent().parent().parent()[0].id;
    var element = $(`div[data-car-name="${targetID}"]`);

    target.remove();
    element.removeClass('car-selected');


    // console.log(target);
    // console.log(targetID);

    
  };

  img.src  = 'images/desktop/X_icon.png';

  a.appendChild(img);
  div.appendChild(a);
  divInner.appendChild(div);
  divFormSelectedCar.appendChild(divInner);
  document.getElementById('formCars').appendChild(divFormSelectedCar);
}

function removeFromSelectedCars(carName){
  // console.log(carName);
  selectedCar = document.getElementsByClassName('selected_'+carName)[0];
  if(selectedCar){
    // console.log('true')
    selectedCar.remove();
  }else{
    // console.log('false')
    selectedCar.remove();
  // console.log(selectedCar);
  }
}

  

cars.each(function(){
  $(this).click(function(event){
    var formSelectedCar = $('.formSelectedCar');
    console.log(formSelectedCar.length)
    var targetDiv = event.target;
    var target = event.target.dataset.carName;
    // var img = document.createElement('img'); 
    // img.src = "images/mobile/blue_v.png";
    // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
    // img.classList = 'blue_v';

    //append car to list
    if(formSelectedCar.length == 0){
      carSelect(target);
      addToSelectedCar(target);
      //if more than 4 cars, remove last show error + remove last selection
    }else if(formSelectedCar.length >= 4){
      $('.error').fadeIn();
      $(this).removeClass('car-selected');
      removeFromSelectedCars(target)
      // $('.error').fadeOut();
    }else{
      if( $(this).hasClass('car-selected') ){
        $(this).removeClass('car-selected');
        removeFromSelectedCars(target)
      }else{
        carSelect(target);
        addToSelectedCar(target);
        
      }
    }
    
    
  });
  
});
 Array.from(brands).forEach(brand => brand.addEventListener('click',brandFilter));
function removeDefaultCars(){
  var defaultCars = document.querySelectorAll('.default');
  defaultCars.forEach((function (e){
    // console.log(e);
    e.remove();
  }))
  
}

var selectionOptions = $('.selectionCont>div>div');


selectionOptions.each((function(){
  $(this).click((function(event){
    var e = event.target.dataset;

    if(e.carBrand !== undefined ){
      removeDefaultCars();
      // console.log(e.carBrand);
      // createCarDiv('test');

    }else if(e.carType !== undefined){
      // console.log('selected ' + e.carType);
      // console.log(e.carType);

      for (var key in carsObj) {
        if (carsObj.hasOwnProperty(key)) {

            // console.log(fullObj[key]);

            
        }
      }
      removeDefaultCars();
      // console.log(e.carType);
      // createCarDiv('test');
    }else{
      console.log('something went wrong');
    }
    
  }));
}));
