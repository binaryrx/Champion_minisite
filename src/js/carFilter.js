/*!
 * Metropolic v1.0.0
 * 
 * (c) 2019 BinaryRx
 * MIT License
 * git@bitbucket.org:klogic/metropolic_landingpage.git
 */

//  ES6
 //add css to car class.
    
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

// var defaultCarsObj = {
// 'octavia':'skoda_octavia',
// 'golf':'vw_golf',
// 'a3':'audi_a3',
// 'leon':'seat_leon',
// 'kodiaq':'skoda_kodiaq',
// 'tiguan':'vw_tiguan',
// 'q3':'audi_q3',
// 'ateca':'seat_ateca',
// 'superb':'skoda_superb',
// 'a4':'audi_a4',
// 'a1':'audi_a1',
// 'fabia':'skoda_fabia',
// 'polo':'vw_polo',
// 'ibiza':'seat_ibiza'
// }

// var compactObj = {
// 'fabia':'skoda_fabia',
// 'ibiza':'seat_ibiza',
// 'polo':'vw_polo',
// 'golf':'vw_golf',
// 'a1':'audi_a1',
// }
// var familyObj = {
// 'octavia':'skoda_octavia',
// 'karoq':'skoda_karoq',
// 'leon':'seat_leon',
// 'golf':'vw_golf',
// 'tiguan':'vw_tiguan',
// 'a3':'audi_a3',
// 'a4':'audi_a4',
// // 'a5':'audi_a5',
// 'q3':'audi_q3',
// 'q5':'audi_q5'
// }

// var managerObj = {
// 'superb':'skoda_superb',
// 'kodiaq':'skoda_kodiaq',
// 'tiguan':'vw_tiguan',
// 'touareg':'vw_touareg',
// 'a4':'audi_a4',
// 'a6':'audi_a6',
// 'a7':'audi_a7',
// 'a8':'audi_a8',
// 'q7':'audi_q7',
// 'q8':'audi_q8',
// }

// var suvObj = {
// 'kodiaq':'skoda_kodiaq',
// 'karoq':'skoda_karoq',
// 'ateca':'seat_ateca',
// 'arona':'seat_arona',
// 'tiguan':'vw_tiguan',
// 'touareg':'vw_touareg',
// 'q2':'audi_q2',
// 'q3':'audi_q3',
// 'q5':'audi_q5',
// 'q7':'audi_q7',
// 'q8':'audi_q8',
// }
// var sportObj = {
// 'octavia rs':'skoda_octavia_rs',
// 'leon cupra':'seat_leon_cupra',
// 'golf gti':'vw_golf_gti',
// 'polo gti':'vw_polo_gti',
// 'tt':'audi_tt',
// 's3':'audi_s3'
// }

// var seatObj = {
// 'ibiza':'seat_ibiza',
// 'ateca':'seat_ateca',
// 'arona':'seat_arona',
// 'leon':'seat_leon',
// 'leon_cupra':'seat_leon_cupra',
// }

//get elements
var cars = $('.car');
var carTypes = $('.type');
var brands =  $('.brand');
var removeSelection = $('.removeSelection');


//render all default cars from defaultCarsObj{}
// for (var key in defaultCarsObj) {
//   if (defaultCarsObj.hasOwnProperty(key)) {
//       createCarDiv(key,defaultCarsObj[key] );
//       var cars = $('.car');
      
//   }
// }

//new

function addCars(obj){

  $.each(obj,function(key, value){

    var car =  $("<div></div>").
      addClass("car " + key + " " + value).
      attr("data-car-name",key).
      css({
        "background-size": "contain",
        "background-image" : "url(images/cars_bg/" + value + ".jpg" + ")"
      });
  
      car.wrapInner("<div class='bg'></div>").appendTo(".selection__cars.cars");
  
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
    
                new_cars[key_2] = value_2;
            

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

        new_cars[key_2] = value_2;

        $.each(selected_types,function(key_3, value_3){

          $.each(carsObj[value_3],function(key_4, value_4){
 
 
              new_cars[key_4] = value_4;
            
  
          });

        });
      });

    });

    $(".selection__cars.cars").empty();
  
    addCars(new_cars);

    

  }
  
  //after filter
  $(".selection__cars.cars > .car").click(function(){

    addToSelectedCar($(this).attr("data-car-name"));
  
  });
});


//before filter
$(".selection__cars.cars > .car").click(function(){

  addToSelectedCar($(this).attr("data-car-name"));

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

//add / remove cars to page based on selection
// function typeFilter(target,fullTarget){
//   //target = typeName
//   //fullTarget = the Div itsSelf

//   var targetType = target;
//   // target = targetType;

//   var selected = document.querySelectorAll('.type-selected');

//   console.log(selected);
//   // console.log(selected);
//   var selectedTypes;
//   for (var i = 0; i < selected.length; i++) {

//      selectedTypes += selected[i].dataset.carType;
//     console.log(selectedTypes);
//     // console.log(selected[i].dataset.carType); //second console output
//   }
  
  
//     switch(targetType){
//       case 'compact':
//         fullObj = Object.assign(carsObj.compact);
//         break;
//       case 'family':
//         fullObj = Object.assign(carsObj.family);
//         break;
//       case 'suv':
//         fullObj = Object.assign(carsObj.suv);
//         break;
//       case 'sport':
//         fullObj = Object.assign(carsObj.sport);
//         break;
//       case 'manager': 
//         fullObj = Object.assign(carsObj.manager)
//         break;    
//     }

//   // console.log(fullTarget);

//   // if(fullTarget.classList.contains('type-selected')){
    
//   //   // console.log('no class');
//   //   // console.log(target)
  
//   // }else{
//   //   // console.log('YES class');
//   //   // console.log(target);
//   //   // console.log(fullTarget);

//   //   // var elem = document.getElementsByClassName(`type_${targetType}`);
//   //   // console.log(elem)

//     // for (var key in elem) {
//     //   if (elem.hasOwnProperty(key)) {
//     //     // console.log(elem[key]);

//     //   }
//     // } 
//   // }

//     var defaultCars = document.querySelectorAll('.car');
//     defaultCars.forEach((function (e){
//       e.remove();
//     }));

//   //for every car in the fullObj, create a Car
//   for (var key in fullObj) {
//     if (fullObj.hasOwnProperty(key)) {
//       var elem = document.getElementsByClassName(`type_${targetType}`);
//       createCarDiv(key,fullObj[key],targetType);
//       var cars = $('.car');
//       // if(elem.length > carsObj[targetType].length){
//       //   // console.log('fasdfas')
        
//       // }else{
//       //   // console.log('fasdfas')
//       // }
//       // console.log(elem);
      
//     }
//   }


//   function carSelect(target){
//     const targetCar = target;
//     // console.log(targetCar);
//     const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
//     element.classList.toggle('car-selected');
//   }

//   cars.each((function(){
//     $(this).click((function(event){
//       var formSelectedCar = $('.formSelectedCar');
//       // console.log(formSelectedCar.length)
//       var targetDiv = event.target;
//       var target = event.target.dataset.carName;
//       // var img = document.createElement('img'); 
//       // img.src = "images/mobile/blue_v.png";
//       // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
//       // img.classList = 'blue_v';

//       //append car to list
//       if(formSelectedCar.length == 0){
//         carSelect(target);
//         addToSelectedCar(target);
//         //if more than 4 cars, remove last show error + remove last selection
//       }else if(formSelectedCar.length >= 4){
//         $('.error').fadeIn();
//         $(this).removeClass('car-selected');
//         removeFromSelectedCars(target)
//         // $('.error').fadeOut();
//       }else{
//         if( $(this).hasClass('car-selected') ){
//           $(this).removeClass('car-selected');
//           removeFromSelectedCars(target)
//         }else{
          
//           carSelect(target);
//           addToSelectedCar(target);
          
//         }
//       }    
      
//     }));
    
//   }));
//   // console.log(fullObj);

//   const element = document.querySelector(`div[data-car-type="${targetType}"]`); 
  
//   if(element.classList[3] == 'type-selected'){
//     // console.log(target);
//     element.className = 'type ';
//     element.className += targetType;

//   }else{
//     // console.log('added');
//     element.classList.toggle('type-selected');
//   }
  
// }


//foreach carType add eventListener
// carTypes.each((function(){
//   $(this).click((function(event){
//     var target = event.target.dataset.carType;

//     // console.log(target);
//     var fullTarget = event.target;
//     // console.log(fullTarget)
//     if(event.target.classList.contains('type-selected')){
//       event.target.classList.remove('type-selected');
//       console.log('car type unselected: ' + target);

//       // var carsss = document.querySelectorAll(target);
//       // defaultCars.forEach(function (e){
//       //   // console.log(e);
//       //   e.remove();
//       // })
//     }
//     else{
//       console.log('car type selected: ' + target);
//       // console.log(event.target.dataset.carType);
//       typeFilter(target,fullTarget);
//     }
    
    

//   }))
// }))
//  Array.from(carTypes).forEach(type => type.addEventListener('click',typeFilter));

//console log the clicked brand
function brandFilter(target){
    // var target = e.target || e.srcElement || e.originalTarget;
      // const brandSelected = target.dataset.carBrand;
      const targetType = target;
      // console.log(targetType);
      const element = document.querySelector(`div[data-car-brand="${target}"]`);
      element.classList.toggle('brand-selected');

}

// brands.each((function(){
//   $(this).click((function(event){
//   var target = event.target.dataset.carBrand;
//   brandFilter(target);
//   }))
// }))

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


// function removeFromSelectedCars(carName){
//   // console.log(carName);
//   selectedCar = document.getElementsByClassName('selected_'+carName)[0];
//   if(selectedCar){
//     // console.log('true')
//     selectedCar.remove();
//   }else{
//     // console.log('false')
//     selectedCar.remove();
//   // console.log(selectedCar);
//   }
// }



// removeSelection.each((function(){
//   $(this).click((function(){
//     var targetElem = $(this).parent().parent().parent();
//     // console.log(targetElem);
//     targetElem.remove();
//   }));
// }));


 
  

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


/*!
 * Metropolic v1.0.0
 * 
 * (c) 2019 BinaryRx
 * MIT License
 * git@bitbucket.org:klogic/metropolic_landingpage.git
 */

//  ES6
 //add css to car class.
    
//all cars obj (key is name , value is the img name)
// var carsObj = {
  
//   default : {
//     'octavia':'skoda_octavia',
//     'golf':'vw_golf',
//     'a3':'audi_a3',
//     'leon':'seat_leon',
//     'kodiaq':'skoda_kodiaq',
//     'tiguan':'vw_tiguan',
//     'q3':'audi_q3',
//     'ateca':'seat_ateca',
//     'superb':'skoda_superb',
//     'a4':'audi_a4',
//     'a1':'audi_a1',
//     'fabia':'skoda_fabia',
//     'polo':'vw_polo',
//     'ibiza':'seat_ibiza'
//   },
//   compact: {
//     'fabia':'skoda_fabia',
//     'ibiza':'seat_ibiza',
//     'polo':'vw_polo',
//     'golf':'vw_golf',
//     'a1':'audi_a1'
//   },
//   sport:{
//     'octavia rs':'skoda_octavia_rs',
//     'leon cupra':'seat_leon_cupra',
//     'golf gti':'vw_golf_gti',
//     'polo gti':'vw_polo_gti',
//     'tt':'audi_tt',
//     's3':'audi_s3'
//   },
//   family: {
//     'octavia':'skoda_octavia',
//     'karoq':'skoda_karoq',
//     'leon':'seat_leon',
//     'golf':'vw_golf',
//     'tiguan':'vw_tiguan',
//     'a3':'audi_a3',
//     'a4':'audi_a4',
//     // 'a5':'audi_a5',
//     'q3':'audi_q3',
//     'q5':'audi_q5'
//   },
//   suv:{
//     'kodiaq':'skoda_kodiaq',
//     'karoq':'skoda_karoq',
//     'ateca':'seat_ateca',
//     'arona':'seat_arona',
//     'tiguan':'vw_tiguan',
//     'touareg':'vw_touareg',
//     'q2':'audi_q2',
//     'q3':'audi_q3',
//     'q5':'audi_q5',
//     'q7':'audi_q7',
//     'q8':'audi_q8'
//   },
//   manager: {
//     'superb':'skoda_superb',
//     'kodiaq':'skoda_kodiaq',
//     'tiguan':'vw_tiguan',
//     'touareg':'vw_touareg',
//     'a4':'audi_a4',
//     'a6':'audi_a6',
//     'a7':'audi_a7',
//     'a8':'audi_a8',
//     'q7':'audi_q7',
//     'q8':'audi_q8'
//   },
  
// };


// var car_brands = {
//   seat: {
//     'ibiza': 'seat_ibiza',
//     'ateca': 'seat_ateca',
//     'arona': 'seat_arona',
//     'leon': 'seat_leon',
//     'leon cupra': 'seat_leon_cupra'
//   },
//   skoda: {
//     'superb': "skoda_superb",
//     'kodiaq': "skoda_kodiaq",
//     'octavia': 'skoda_octavia',
//     'fabia': 'skoda_fabia',
//     'karoq': 'skoda_karoq',
//     'octavia rs': 'skoda_octavia_rs'
//   },
//   volkswagen: {
//     'polo': "vw_polo",
//     "golf": 'vw_golf',
//     "tiguan": 'vw_tiguan',
//     "touareg": 'vw_touareg',
//     "golf gti": 'vw_golf_gti',
//     "polo gti": 'vw_polo_gti'
//   },
//   audi: {
//     'a1': 'audi_a1',
//     'a3': 'audi_a3',
//     'a4': 'audi_a4',
//     'a6': 'audi_a6',
//     'a7': 'audi_a7',
//     'a8': 'audi_a8',
//     'q2': 'audi_q2',
//     'q3': 'audi_q3',
//     'q5': 'audi_q5',
//     'q7': 'audi_q7',
//     'q8': 'audi_q8',
//     'etron': 'audi_etron',
//     'tt': 'audi_tt',
//     's3': 'audi_s3'
//   }
// };

// //get elements
// var cars = $('.car');
// var carTypes = $('.type');
// var brands =  $('.brand');
// var removeSelection = $('.removeSelection');

// //give cars elem a background size
// function addBgStyle(element){
//   element.style.backgroundSize = 'contain';
// }

// //apply to all cars
// cars.each((function(){
//   addBgStyle(this);
// }));

// //render all default cars from defaultCarsObj{}
// // for (var key in defaultCarsObj) {
// //   if (defaultCarsObj.hasOwnProperty(key)) {
// //       createCarDiv(key,defaultCarsObj[key] );
// //       var cars = $('.car');
      
// //   }
// // }

// //new

// function addCars(obj){

//   $.each(obj,function(key, value){

//     var car =  $(`<div><div class="car ${key} ${value}" date-car-name="${key}" style=" background: url(images/cars_bg/${value}.jpg);background-size:contain";"></div></div>`);
//     //   addClass("car " + key + " " + value).
//     //   attr("data-car-name",key).
//     //   css({
//     //     "background-size": "contain",
//     //     "background-image" : "url(images/cars_bg/" + value + ".jpg" + ")"
//     //   });
  
//       car.appendTo(".selection__cars.cars");
//       // car.on('click',function(){
//       //   console
//       // })
  
//     });

// }


// //load the default cars on page load
// addCars(carsObj.default);

// $(".selection__cars.cars > .car").click(function(){

//   addToSelectedCar($(this).attr("data-car-name"));

// });

// $(".selection__types.types > .type , .selection__brands.brands > .brand").click(function(){

//   //if click on type
//   if($(this).hasClass("type")){
//     $(this).toggleClass("type-selected");
//   }

//   //if click on brand
//   if($(this).hasClass("brand")){
//     $(this).toggleClass("brand-selected");
//   }
  
//  //collect keys 
// var selected_types = [],
//     selected_brands = [];


//     //collect data-car-type
//   $(".selection__types.types > .type").each(function(){

//     if($(this).hasClass("type-selected")){
//       selected_types.push($(this).attr("data-car-type"));
//     }

//   });

//   //collect data-car-brand
//   $(".selection__brands.brands > .brand").each(function(){

//     if($(this).hasClass("brand-selected")){
//       selected_brands.push($(this).attr("data-car-brand"));
//     }

//   });

//   // if no brand is selected
//   if(selected_brands.length == 0 && selected_types.length != 0){
    
//     var new_cars = {};
  
//         $.each(selected_types,function(key,value){
  
//             $.each(carsObj[value],function(key,value){
//               new_cars[key] = value;
//             });
  
//         });
  
//         $(".selection__cars.cars").empty();
  
//           addCars(new_cars);

//   }

//   // if no type is selected
//   if(selected_types.length == 0 && selected_brands.length != 0 ){

//     var new_cars = {};
  
//         $.each(selected_brands,function(key_1,value_1){

//           $.each(car_brands[value_1],function(key_2, value_2){
    
//                 new_cars[key_2] = value_2;
            

//           });

//         });

//         $(".selection__cars.cars").empty();
  
//         addCars(new_cars);


//   }


//   //if type and brand are not selected
//   if(selected_types.length == 0 && selected_brands.length == 0){
//     $(".selection__cars.cars").empty();
  
//     addCars(carsObj.default);
//   }

//   //if type and brand is selected
//   if(selected_types.length != 0 && selected_brands.length != 0){


//     var new_cars = {};

//     $.each(selected_brands,function(key_1,value_1){

//       $.each(car_brands[value_1],function(key_2, value_2){

//         new_cars[key_2] = value_2;

//         $.each(selected_types,function(key_3, value_3){

//           $.each(carsObj[value_3],function(key_4, value_4){
 
 
//               new_cars[key_4] = value_4;
            
  
//           });

//         });
//       });

//     });

//     $(".selection__cars.cars").empty();
  
//     addCars(new_cars);



//   }

// });




// //function to recieve a car name, selects the car by data-car-name
// //every time the function is run,toggle the car-selected class on/off (filter on the car)
// function carSelect(target){
//   const targetCar = target;
//   // console.log(targetCar);
//   const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
//   element.classList.toggle('car-selected');
// }

// //for each car in the cars array, bind click event,
// cars.each((function(){
//   $(this).click((function(event){
//     //select the cars area in form
//     var formSelectedCar = $('.formSelectedCar');
//     var targetDiv = event.target;
//     var target = event.target.dataset.carName;
//     // var img = document.createElement('img'); 
//     // img.src = "images/mobile/blue_v.png";
//     // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
//     // img.classList = 'blue_v';

//     //append car to list 
//     if(formSelectedCar.length == 0){
//       carSelect(target);
//       addToSelectedCar(target);
//       //if  4 cars, remove last show error + remove last selection
//     }else if(formSelectedCar.length >= 4){
//       $('.error').fadeIn();
//       $(this).removeClass('car-selected');
//       removeFromSelectedCars(target)
//       // $('.error').fadeOut();
//     }else{
//       if( $(this).hasClass('car-selected') ){

//         $(this).removeClass('car-selected');
//         removeFromSelectedCars(target)
//       }else{
//         carSelect(target);
//         addToSelectedCar(target);
//       }
//     }    
    
//   }));
  
// }));

// function buildCarObj(targetType){
  
// };

// //add / remove cars to page based on selection
// // function typeFilter(target,fullTarget){
// //   //target = typeName
// //   //fullTarget = the Div itsSelf

// //   var targetType = target;
// //   // target = targetType;

// //   var selected = document.querySelectorAll('.type-selected');

// //   console.log(selected);
// //   // console.log(selected);
// //   var selectedTypes;
// //   for (var i = 0; i < selected.length; i++) {

// //      selectedTypes += selected[i].dataset.carType;
// //     console.log(selectedTypes);
// //     // console.log(selected[i].dataset.carType); //second console output
// //   }
  
  
// //     switch(targetType){
// //       case 'compact':
// //         fullObj = Object.assign(carsObj.compact);
// //         break;
// //       case 'family':
// //         fullObj = Object.assign(carsObj.family);
// //         break;
// //       case 'suv':
// //         fullObj = Object.assign(carsObj.suv);
// //         break;
// //       case 'sport':
// //         fullObj = Object.assign(carsObj.sport);
// //         break;
// //       case 'manager': 
// //         fullObj = Object.assign(carsObj.manager)
// //         break;    
// //     }

// //   // console.log(fullTarget);

// //   // if(fullTarget.classList.contains('type-selected')){
    
// //   //   // console.log('no class');
// //   //   // console.log(target)
  
// //   // }else{
// //   //   // console.log('YES class');
// //   //   // console.log(target);
// //   //   // console.log(fullTarget);

// //   //   // var elem = document.getElementsByClassName(`type_${targetType}`);
// //   //   // console.log(elem)

// //     // for (var key in elem) {
// //     //   if (elem.hasOwnProperty(key)) {
// //     //     // console.log(elem[key]);

// //     //   }
// //     // } 
// //   // }

// //     var defaultCars = document.querySelectorAll('.car');
// //     defaultCars.forEach((function (e){
// //       e.remove();
// //     }));

// //   //for every car in the fullObj, create a Car
// //   for (var key in fullObj) {
// //     if (fullObj.hasOwnProperty(key)) {
// //       var elem = document.getElementsByClassName(`type_${targetType}`);
// //       createCarDiv(key,fullObj[key],targetType);
// //       var cars = $('.car');
// //       // if(elem.length > carsObj[targetType].length){
// //       //   // console.log('fasdfas')
        
// //       // }else{
// //       //   // console.log('fasdfas')
// //       // }
// //       // console.log(elem);
      
// //     }
// //   }


// //   function carSelect(target){
// //     const targetCar = target;
// //     // console.log(targetCar);
// //     const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
// //     element.classList.toggle('car-selected');
// //   }

// //   cars.each((function(){
// //     $(this).click((function(event){
// //       var formSelectedCar = $('.formSelectedCar');
// //       // console.log(formSelectedCar.length)
// //       var targetDiv = event.target;
// //       var target = event.target.dataset.carName;
// //       // var img = document.createElement('img'); 
// //       // img.src = "images/mobile/blue_v.png";
// //       // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
// //       // img.classList = 'blue_v';

// //       //append car to list
// //       if(formSelectedCar.length == 0){
// //         carSelect(target);
// //         addToSelectedCar(target);
// //         //if more than 4 cars, remove last show error + remove last selection
// //       }else if(formSelectedCar.length >= 4){
// //         $('.error').fadeIn();
// //         $(this).removeClass('car-selected');
// //         removeFromSelectedCars(target)
// //         // $('.error').fadeOut();
// //       }else{
// //         if( $(this).hasClass('car-selected') ){
// //           $(this).removeClass('car-selected');
// //           removeFromSelectedCars(target)
// //         }else{
          
// //           carSelect(target);
// //           addToSelectedCar(target);
          
// //         }
// //       }    
      
// //     }));
    
// //   }));
// //   // console.log(fullObj);

// //   const element = document.querySelector(`div[data-car-type="${targetType}"]`); 
  
// //   if(element.classList[3] == 'type-selected'){
// //     // console.log(target);
// //     element.className = 'type ';
// //     element.className += targetType;

// //   }else{
// //     // console.log('added');
// //     element.classList.toggle('type-selected');
// //   }
  
// // }


// //foreach carType add eventListener
// // carTypes.each((function(){
// //   $(this).click((function(event){
// //     var target = event.target.dataset.carType;

// //     // console.log(target);
// //     var fullTarget = event.target;
// //     // console.log(fullTarget)
// //     if(event.target.classList.contains('type-selected')){
// //       event.target.classList.remove('type-selected');
// //       console.log('car type unselected: ' + target);

// //       // var carsss = document.querySelectorAll(target);
// //       // defaultCars.forEach(function (e){
// //       //   // console.log(e);
// //       //   e.remove();
// //       // })
// //     }
// //     else{
// //       console.log('car type selected: ' + target);
// //       // console.log(event.target.dataset.carType);
// //       typeFilter(target,fullTarget);
// //     }
    
    

// //   }))
// // }))
// //  Array.from(carTypes).forEach(type => type.addEventListener('click',typeFilter));

// //console log the clicked brand
// function brandFilter(target){
//     // var target = e.target || e.srcElement || e.originalTarget;
//       // const brandSelected = target.dataset.carBrand;
//       const targetType = target;
//       // console.log(targetType);
//       const element = document.querySelector(`div[data-car-brand="${target}"]`);
//       element.classList.toggle('brand-selected');

// }

// // brands.each((function(){
// //   $(this).click((function(event){
// //   var target = event.target.dataset.carBrand;
// //   brandFilter(target);
// //   }))
// // }))

// function addToSelectedCar(carName){
//   var carName = carName;
//   var divFormSelectedCar = document.createElement('div');
//   var divInner = document.createElement('div');
//   var div = document.createElement('div');

//   divFormSelectedCar.className = 'formSelectedCar selected_'+ carName;;
//   divFormSelectedCar.id = carName;
//   divInner.className = 'inner';
//   div.innerText = carName;

//   var a = document.createElement('a');
//   var img = document.createElement('img');

//   a.className = 'removeSelection';
//   a.onclick = function(){
//     var target = $(this).parent().parent().parent()[0]
//     var targetID = $(this).parent().parent().parent()[0].id;
//     var element = $(`div[data-car-name="${targetID}"]`);

//     target.remove();
//     element.removeClass('car-selected');

//     // console.log(target);
//     // console.log(targetID);

    
//   };

//   img.src  = 'images/desktop/X_icon.png';

//   a.appendChild(img);
//   div.appendChild(a);
//   divInner.appendChild(div);
//   divFormSelectedCar.appendChild(divInner);
//   document.getElementById('formCars').appendChild(divFormSelectedCar);
// }


// function removeFromSelectedCars(carName){
//   // console.log(carName);
//   selectedCar = document.getElementsByClassName('selected_'+carName)[0];
//   if(selectedCar){
//     // console.log('true')
//     selectedCar.remove();
//   }else{
//     // console.log('false')
//     selectedCar.remove();
//   // console.log(selectedCar);
//   }
// }



// removeSelection.each((function(){
//   $(this).click((function(){
//     var targetElem = $(this).parent().parent().parent();
//     // console.log(targetElem);
//     targetElem.remove();
//   }));
// }));


 
  

// cars.each(function(){
//   $(this).click(function(event){
//     var formSelectedCar = $('.formSelectedCar');
//     console.log(formSelectedCar.length)
//     var targetDiv = event.target;
//     var target = event.target.dataset.carName;
//     // var img = document.createElement('img'); 
//     // img.src = "images/mobile/blue_v.png";
//     // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
//     // img.classList = 'blue_v';

//     //append car to list
//     if(formSelectedCar.length == 0){
//       carSelect(target);
//       addToSelectedCar(target);
//       //if more than 4 cars, remove last show error + remove last selection
//     }else if(formSelectedCar.length >= 4){
//       $('.error').fadeIn();
//       $(this).removeClass('car-selected');
//       removeFromSelectedCars(target)
//       // $('.error').fadeOut();
//     }else{
//       if( $(this).hasClass('car-selected') ){
//         $(this).removeClass('car-selected');
//         removeFromSelectedCars(target)
//       }else{
//         carSelect(target);
//         addToSelectedCar(target);
        
//       }
//     }
    
    
//   });
  
// });
//  Array.from(brands).forEach(brand => brand.addEventListener('click',brandFilter));
// function removeDefaultCars(){
//   var defaultCars = document.querySelectorAll('.default');
//   defaultCars.forEach((function (e){
//     // console.log(e);
//     e.remove();
//   }))
  
// }

// var selectionOptions = $('.selectionCont>div>div');
// // console.log(selectionOptions);

// function createCarDiv (dataCarName,imgName,filter){
//   // console.log(imgName);

//   var div = document.createElement('div');
//   var cars = document.getElementsByClassName('cars')[0];
//   div.setAttribute('data-car-name',dataCarName);
//   div.style.backgroundImage = `url(images/cars_bg/${imgName}.jpg)`;
//   div.style.backgroundSize = 'contain';
//   div.className = 'car '+ dataCarName + ' ' + 'type_'+filter;
  
//   // div.className += filter;
  
//   cars.appendChild(div);
// }

// selectionOptions.each((function(){
//   $(this).click((function(event){
//     var e = event.target.dataset;

//     if(e.carBrand !== undefined ){
//       removeDefaultCars();
//       // console.log(e.carBrand);
//       // createCarDiv('test');

//     }else if(e.carType !== undefined){
//       // console.log('selected ' + e.carType);
//       // console.log(e.carType);

//       for (var key in fullObj) {
//         if (fullObj.hasOwnProperty(key)) {

//             // console.log(fullObj[key]);

            
//         }
//       }
//       removeDefaultCars();
//       // console.log(e.carType);
//       // createCarDiv('test');
//     }else{
//       console.log('something went wrong');
//     }
    
//   }));
// }));
















// ES5
// 'use strict';

// var cars = $('.car');
// //  var cars = document.getElementsByClassName('car');
// function addBgStyle(element) {
//   element.style.backgroundSize = 'contain';
// }
// cars.each(function () {
//   addBgStyle(this);
// });

// //select all the filter buttons
// var carTypes = $('.type');
// var brands = $('.brand');
// //console log the clicked type
// function typeFilter(target) {
//   var targetType = target;
//   console.log(targetType);
//   var element = document.querySelector('div[data-car-type="' + target + '"]');
//   element.classList.toggle('type-selected');
// }
// //foreach carType add eventListener
// carTypes.each(function () {
//   $(this).click(function (event) {
//     var target = event.target.dataset.carType;
//     typeFilter(target);
//   });
// });
// //  Array.from(carTypes).forEach(type => type.addEventListener('click',typeFilter));

// //console log the clicked brand
// function brandFilter(target) {
//   // var target = e.target || e.srcElement || e.originalTarget;
//   // const brandSelected = target.dataset.carBrand;
//   var targetType = target;
//   console.log(targetType);
//   var element = document.querySelector('div[data-car-brand="' + target + '"]');
//   element.classList.toggle('brand-selected');
// }
// brands.each(function () {
//   $(this).click(function (event) {
//     var target = event.target.dataset.carBrand;
//     // console.log('here:');
//     brandFilter(target);
//   });
// });


// //  ES6
//  //add css to car class.
    
// //all cars obj (key is name , value is the img name)
// var carsObj = {
//   //Initial view
//   default : {
//     'octavia':'skoda_octavia',
//     'golf':'vw_golf',
//     'a3':'audi_a3',
//     'leon':'seat_leon',
//     'kodiaq':'skoda_kodiaq',
//     'tiguan':'vw_tiguan',
//     'q3':'audi_q3',
//     'ateca':'seat_ateca',
//     'superb':'skoda_superb',
//     'a4':'audi_a4',
//     'a1':'audi_a1',
//     'fabia':'skoda_fabia',
//     'polo':'vw_polo',
//     'ibiza':'seat_ibiza'
//   },
//   // types
//   compact: {
//     'fabia':'skoda_fabia',
//     'ibiza':'seat_ibiza',
//     'polo':'vw_polo',
//     'golf':'vw_golf',
//     'a1':'audi_a1'
//   },
//   sport:{
//     'octavia rs':'skoda_octavia_rs',
//     'leon cupra':'seat_leon_cupra',
//     'golf gti':'vw_golf_gti',
//     'polo gti':'vw_polo_gti',
//     'tt':'audi_tt',
//     's3':'audi_s3'
//   },
//   family: {
//     'octavia':'skoda_octavia',
//     'karoq':'skoda_karoq',
//     'leon':'seat_leon',
//     'golf':'vw_golf',
//     'tiguan':'vw_tiguan',
//     'a3':'audi_a3',
//     'a4':'audi_a4',
//     'q3':'audi_q3',
//     'q5':'audi_q5'
//   },
//   suv:{
//     'kodiaq':'skoda_kodiaq',
//     'karoq':'skoda_karoq',
//     'ateca':'seat_ateca',
//     'arona':'seat_arona',
//     'tiguan':'vw_tiguan',
//     'touareg':'vw_touareg',
//     'q2':'audi_q2',
//     'q3':'audi_q3',
//     'q5':'audi_q5',
//     'q7':'audi_q7',
//     'q8':'audi_q8'
//   },
//   manager: {
//     'superb':'skoda_superb',
//     'kodiaq':'skoda_kodiaq',
//     'tiguan':'vw_tiguan',
//     'touareg':'vw_touareg',
//     'a4':'audi_a4',
//     'a6':'audi_a6',
//     'a7':'audi_a7',
//     'a8':'audi_a8',
//     'q7':'audi_q7',
//     'q8':'audi_q8'
//   },

//   // Brands
//   seat: {
//     'ibiza':'seat_ibiza',
//     'ateca':'seat_ateca',
//     'arona':'seat_arona',
//     'leon':'seat_leon',
//     'leon cupra':'seat_leon_cupra'
//   },
//   skoda: {
//     'superb':"skoda_superb",
//     'kodiaq':"skoda_kodiaq",
//     'octavia':'skoda_octavia',
//     'fabia':'skoda_fabia',
//     'karoq':'skoda_karoq',
//     'octavia rs':'skoda_octavia_rs'
//   },
//   vw:{
//     'polo':"vw_polo",
//     "golf":'vw_golf',
//     "tiguan":'vw_tiguan',
//     "touareg":'vw_touareg',
//     "golf gti":'vw_golf_gti',
//     "polo gti":'vw_polo_gti'
//   },
//   audi:{
//     'a1':'audi_a1',
//     'a3':'audi_a3',
//     'a4':'audi_a4',
//     'a6':'audi_a6',
//     'a7':'audi_a7',
//     'a8':'audi_a8',
//     'q2':'audi_q2',
//     'q3':'audi_q3',
//     'q5':'audi_q5',
//     'q7':'audi_q7',
//     'q8':'audi_q8',
//     'etron':'audi_etron',
//     'tt':'audi_tt',
//     's3':'audi_s3'
//   }
  
// }



// //get elements
// var cars = $('.car');
// var carTypes = $('.type');
// var brands =  $('.brand');
// var removeSelection = $('.removeSelection');

// //give cars elem a background size
// function addBgStyle(element){
//   element.style.backgroundSize = 'contain';
// }

// //apply to all cars
// cars.each(function(){
//   addBgStyle(this);
// });

// //render all default cars from defaultCarsObj{}
// for (var key in carsObj.default) {
//   if (carsObj.default.hasOwnProperty(key)) {
//       createCarDiv(key,carsObj.default[key], 'default');
//       var cars = $('.car');
      
//   }
// }

// //function to recieve a car name, selects the car by data-car-name
// //every time the function is run,toggle the car-selected class on/off (filter on the car)
// function carSelect(target){
//   const targetCar = target;
//   // console.log(targetCar);
//   const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
//   element.classList.toggle('car-selected');
// }

// //for each car in the cars array, bind click event,
// cars.each(function(){
//   $(this).click(function(event){
//     //select the cars area in form
//     var formSelectedCar = $('.formSelectedCar');
//     var targetDiv = event.target;
//     var target = event.target.dataset.carName;
//     var img = document.createElement('img'); 
//     // img.src = "images/mobile/blue_v.png";
//     // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
//     // img.classList = 'blue_v';
//     // target.appendChild(img);

//     //append car to list 
//     if(formSelectedCar.length == 0){
//       carSelect(target);
//       addToSelectedCar(target);
//       //if  4 cars, remove last show error + remove last selection
//     }else if(formSelectedCar.length >= 4){
//       $('.error').fadeIn();
//       $(this).removeClass('car-selected');
//       removeFromSelectedCars(target)
//       // $('.error').fadeOut();
//     }else{
//       if( $(this).hasClass('car-selected') ){

//         $(this).removeClass('car-selected');
//         removeFromSelectedCars(target)
//       }else{
//         carSelect(target);
//         addToSelectedCar(target);
//       }
//     }    
    
//   });
  
// });



// //add / remove cars to page based on selection
// function typeFilter(target,fullTarget){
//   //target = typeName
//   //fullTarget = the Div itsSelf

//   var targetType = target;
//   // target = targetType;

//   var selected = document.querySelectorAll('.type-selected');

//   console.log(selected);
//   // console.log(selected);
//   var selectedTypes;
//   for (var i = 0; i < selected.length; i++) {

//      selectedTypes += selected[i].dataset.carType;
//     console.log(selectedTypes);
//     // console.log(selected[i].dataset.carType); //second console output
//   }
  
  
//     switch(targetType){
//       case 'compact':
//         fullObj = Object.assign(carsObj.compact);
//         break;
//       case 'family':
//         fullObj = Object.assign(carsObj.family);
//         break;
//       case 'suv':
//         fullObj = Object.assign(carsObj.suv);
//         break;
//       case 'sport':
//         fullObj = Object.assign(carsObj.sport);
//         break;
//       case 'manager': 
//         fullObj = Object.assign(carsObj.manager)
//         break;    
//     }

//   // console.log(fullTarget);

//   // if(fullTarget.classList.contains('type-selected')){
    
//   //   // console.log('no class');
//   //   // console.log(target)
  
//   // }else{
//   //   // console.log('YES class');
//   //   // console.log(target);
//   //   // console.log(fullTarget);

//   //   // var elem = document.getElementsByClassName(`type_${targetType}`);
//   //   // console.log(elem)

//     // for (var key in elem) {
//     //   if (elem.hasOwnProperty(key)) {
//     //     // console.log(elem[key]);

//     //   }
//     // } 
//   // }

//     var defaultCars = document.querySelectorAll('.car');
//     defaultCars.forEach(function (e){
//       e.remove();
//     });

//   //for every car in the fullObj, create a Car
//   for (var key in fullObj) {
//     // console.log(key);

//     if (fullObj.hasOwnProperty(key)) {
//       // var elem = document.getElementsByClassName(`type_${targetType}`);
//       // console.log('created car');
//     // console.log(key);
//     createCarDiv(key,fullObj[key],targetType);
//       var cars = $('.car');
//       // if(elem.length > carsObj[targetType].length){
//       //   // console.log('fasdfas')
        
//       // }else{
//       //   // console.log('fasdfas')
//       // }
//       // console.log(elem);
      
//     }
//   }


//   function carSelect(target){
//     const targetCar = target;
//     // console.log(targetCar);
//     const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
//     element.classList.toggle('car-selected');
//   }

//   cars.each(function(){
//     $(this).click(function(event){
//       var formSelectedCar = $('.formSelectedCar');
//       // console.log(formSelectedCar.length)
//       var targetDiv = event.target;
//       var target = event.target.dataset.carName;
//       // var img = document.createElement('img'); 
//       // img.src = "images/mobile/blue_v.png";
//       // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
//       // img.classList = 'blue_v';
//       // target.appendChild(img);

//       //append car to list
//       if(formSelectedCar.length == 0){
//         carSelect(target);
//         addToSelectedCar(target);
//         //if more than 4 cars, remove last show error + remove last selection
//       }else if(formSelectedCar.length >= 4){
//         $('.error').fadeIn();
//         $(this).removeClass('car-selected');
//         removeFromSelectedCars(target)
//         // $('.error').fadeOut();
//       }else{
//         if( $(this).hasClass('car-selected') ){
//           $(this).removeClass('car-selected');
//           removeFromSelectedCars(target)
//         }else{
          
//           carSelect(target);
//           addToSelectedCar(target);
          
//         }
//       }    
      
//     });
    
//   });
//   // console.log(fullObj);

//   const element = document.querySelector(`div[data-car-type="${targetType}"]`); 
  
//   // if(element.classList[3] == 'type-selected'){
//   //   // console.log(target);
//   //   element.className = 'type ';
//   //   element.className += targetType;

//   // }else{
//   //   // console.log('added');
//   //   element.classList.toggle('type-selected');
//   // }
  
// }

// function brandFilter(carBrand,divBrand){
//   var carBrand = carBrand;
//   // target = targetType;
//   var selected = document.querySelectorAll('.brand-selected');

//   console.log(selected);
//   // console.log(selected);
//   var selectedTypes;
//   for (var i = 0; i < selected.length; i++) {

//      selectedTypes += selected[i].dataset.carType;
//     console.log(selectedTypes);
//     // console.log(selected[i].dataset.carType); //second console output
//   }
  
  
//     switch(targetType){
//       case 'compact':
//         fullObj = Object.assign(carsObj.compact);
//         break;
//       case 'family':
//         fullObj = Object.assign(carsObj.family);
//         break;
//       case 'suv':
//         fullObj = Object.assign(carsObj.suv);
//         break;
//       case 'sport':
//         fullObj = Object.assign(carsObj.sport);
//         break;
//       case 'manager': 
//         fullObj = Object.assign(carsObj.manager)
//         break;    
//     }

//   // console.log(fullTarget);

//   // if(fullTarget.classList.contains('type-selected')){
    
//   //   // console.log('no class');
//   //   // console.log(target)
  
//   // }else{
//   //   // console.log('YES class');
//   //   // console.log(target);
//   //   // console.log(fullTarget);

//   //   // var elem = document.getElementsByClassName(`type_${targetType}`);
//   //   // console.log(elem)

//     // for (var key in elem) {
//     //   if (elem.hasOwnProperty(key)) {
//     //     // console.log(elem[key]);

//     //   }
//     // } 
//   // }

//     var defaultCars = document.querySelectorAll('.car');
//     defaultCars.forEach(function (e){
//       e.remove();
//     });

//   //for every car in the fullObj, create a Car
//   for (var key in fullObj) {
//     if (fullObj.hasOwnProperty(key)) {
//       // var elem = document.getElementsByClassName(`type_${targetType}`);
//       // createCarDiv(key,fullObj[key],targetType);
//       var cars = $('.car');
//       // if(elem.length > carsObj[targetType].length){
//       //   // console.log('fasdfas')
        
//       // }else{
//       //   // console.log('fasdfas')
//       // }
//       // console.log(elem);
      
//     }
//   }


//   function carSelect(target){
//     const targetCar = target;
//     // console.log(targetCar);
//     const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
//     element.classList.toggle('car-selected');
//   }

//   cars.each(function(){
//     $(this).click(function(event){
//       var formSelectedCar = $('.formSelectedCar');
//       // console.log(formSelectedCar.length)
//       var targetDiv = event.target;
//       var target = event.target.dataset.carName;
//       // var img = document.createElement('img'); 
//       // img.src = "images/mobile/blue_v.png";
//       // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
//       // img.classList = 'blue_v';

//       //append car to list
//       if(formSelectedCar.length == 0){
//         carSelect(target);
//         addToSelectedCar(target);
//         //if more than 4 cars, remove last show error + remove last selection
//       }else if(formSelectedCar.length >= 4){
//         $('.error').fadeIn();
//         $(this).removeClass('car-selected');
//         removeFromSelectedCars(target)
//         // $('.error').fadeOut();
//       }else{
//         if( $(this).hasClass('car-selected') ){
//           $(this).removeClass('car-selected');
//           removeFromSelectedCars(target)
//         }else{
          
//           carSelect(target);
//           addToSelectedCar(target);
          
//         }
//       }    
      
//     });
    
//   });
//   // console.log(fullObj);

//   // const element = document.querySelector(`div[data-car-type="${targetType}"]`); 
  
//   // if(element.classList[3] == 'type-selected'){
//   //   // console.log(target);
//   //   element.className = 'type ';
//   //   element.className += targetType;

//   // }else{
//   //   // console.log('added');
//   //   element.classList.toggle('type-selected');
//   // }
// }


// //foreach carType add eventListener
// carTypes.each(function(){
//   $(this).click(function(event){
//     var carTypeDiv = event.target;
//     var carType = event.target.dataset.carType;
//     if(carTypeDiv.classList.contains('type-selected')){
//       carTypeDiv.classList.remove('type-selected');
//       // console.log('car type unselected: ' + carType);
//     } else{
//       carTypeDiv.className += ' type-selected';
//       // console.log('car type selected: ' + carType);
//       typeFilter(carType,carTypeDiv);
//     }
    
    

//   })
// })

// brands.each(function(){
//   $(this).click(function(event){
//     var divBrand = event.target;
//     var carBrand = event.target.dataset.carBrand;

//     if( $(this).hasClass('brand-selected') ){
//       $(this).removeClass('brand-selected');
//       console.log('no class' );
//       console.log( $(this) );
//     } else{
//       $(this).addClass('brand-selected');
//       console.log('with class' );
//       console.log($(this));
//       brandFilter(carBrand,divBrand)
//     }

//     // console.log(divBrand);
//     // console.log(carBrand);
    
    
//   });
// })



// console.log(brands);

// //  Array.from(carTypes).forEach(type => type.addEventListener('click',typeFilter));

// //console log the clicked brand
// function brandFilter(target){
//     // var target = e.target || e.srcElement || e.originalTarget;
//       // const brandSelected = target.dataset.carBrand;
//       const targetType = target;
//       // console.log(targetType);
//       const element = document.querySelector(`div[data-car-brand="${target}"]`);
//       element.classList.toggle('brand-selected');

// }

// brands.each(function(){
//   $(this).click(function(event){
//   var target = event.target.dataset.carBrand;
//   brandFilter(target);
//   })
// })

// function addToSelectedCar(carName){
//   var carName = carName;
//   var divFormSelectedCar = document.createElement('div');
//   var divInner = document.createElement('div');
//   var div = document.createElement('div');

//   divFormSelectedCar.className = 'formSelectedCar selected_'+ carName;;
//   divFormSelectedCar.id = carName;
//   if(carName in carsObj.skoda){ 
//     divFormSelectedCar.setAttribute('data-carbrand','skoda');
//     divInner.className = 'inner';
//     div.innerText = carName;
//   }else if(carName in carsObj.audi){
//     divFormSelectedCar.setAttribute('data-carbrand','audi');
//     divInner.className = 'inner';
//     div.innerText = carName;
//   }else if(carName in carsObj.vw){
//     divFormSelectedCar.setAttribute('data-carbrand','vw');
//     divInner.className = 'inner';
//     div.innerText = carName;
//   }
//   else if(carName in carsObj.seat){
//     divFormSelectedCar.setAttribute('data-carbrand','seat');
//     divInner.className = 'inner';
//     div.innerText = carName;
//   }
  

//   var a = document.createElement('a');
//   var img = document.createElement('img');

//   a.className = 'removeSelection';
//   a.onclick = function(){
//     var target = $(this).parent().parent().parent()[0]
//     var targetID = $(this).parent().parent().parent()[0].id;
//     var element = $(`div[data-car-name="${targetID}"]`);

//     target.remove();
//     element.removeClass('car-selected');

//     // console.log(target);
//     // console.log(targetID);

    
//   };

//   img.src  = 'images/desktop/X_icon.png';

//   a.appendChild(img);
//   div.appendChild(a);
//   divInner.appendChild(div);
//   divFormSelectedCar.appendChild(divInner);
//   document.getElementById('formCars').appendChild(divFormSelectedCar);
// }


// function removeFromSelectedCars(carName){
//   // console.log(carName);
//   selectedCar = document.getElementsByClassName('selected_'+carName)[0];
//   if(selectedCar){
//     // console.log('true')
//     selectedCar.remove();
//   }else{
//     // console.log('false')
//     selectedCar.remove();
//   // console.log(selectedCar);
//   }
// }



// removeSelection.each(function(){
//   $(this).click(function(){
//     var targetElem = $(this).parent().parent().parent();
//     // console.log(targetElem);
//     targetElem.remove();
//   });
// });


 
  

// // cars.each(function(){
// //   $(this).click(function(event){
// //     var formSelectedCar = $('.formSelectedCar');
// //     console.log(formSelectedCar.length)
// //     var targetDiv = event.target;
// //     var target = event.target.dataset.carName;
// //     // var img = document.createElement('img'); 
// //     // img.src = "images/mobile/blue_v.png";
// //     // img.style = "position: absolute;top: 50%;width: 40%;right: 50%;transform: translate(50%,-80%)";
// //     // img.classList = 'blue_v';

// //     //append car to list
// //     if(formSelectedCar.length == 0){
// //       carSelect(target);
// //       addToSelectedCar(target);
// //       //if more than 4 cars, remove last show error + remove last selection
// //     }else if(formSelectedCar.length >= 4){
// //       $('.error').fadeIn();
// //       $(this).removeClass('car-selected');
// //       removeFromSelectedCars(target)
// //       // $('.error').fadeOut();
// //     }else{
// //       if( $(this).hasClass('car-selected') ){
// //         $(this).removeClass('car-selected');
// //         removeFromSelectedCars(target)
// //       }else{
// //         carSelect(target);
// //         addToSelectedCar(target);
        
// //       }
// //     }
    
    
// //   });
  
// // });
// //  Array.from(brands).forEach(brand => brand.addEventListener('click',brandFilter));
// function removeDefaultCars(){
//   var defaultCars = document.querySelectorAll('.default');
//   defaultCars.forEach(function (e){
//     // console.log(e);
//     e.remove();
//   })
  
// }

// var selectionOptions = $('.selectionCont>div>div');
// // console.log(selectionOptions);

// function createCarDiv (dataCarName,imgName,filter){
//   // console.log(imgName);

//   var div = document.createElement('div');
//   var outerDiv = document.createElement('div');
//   var cars = document.getElementsByClassName('cars')[0];

//   outerDiv.className = 'carWrapper'

//   div.setAttribute('data-car-name',dataCarName);
//   div.style.backgroundImage = `url(images/cars_bg/${imgName}.jpg)`;
//   div.style.backgroundSize = 'contain';
//   div.className = 'car '+ dataCarName + ' ' + 'type_'+filter;
//   // div.className += filter;

//   if(div.style.backgroundImage !== '' || undefined){
//     console.log('creating');
//     outerDiv.appendChild(div);
//     cars.appendChild(outerDiv);
//   }
  
  
// }

// selectionOptions.each(function(){
//   $(this).click(function(event){
//     var e = event.target.dataset;

//     if(e.carBrand !== undefined ){
//       removeDefaultCars();
//       // console.log(e.carBrand);
//       // createCarDiv('test');

//     }else if(e.carType !== undefined){
//       // console.log('selected ' + e.carType);
//       // console.log(e.carType);

//       for (var key in fullObj) {
//         if (fullObj.hasOwnProperty(key)) {
//             // console.log(fullObj[key]);
//         }
//       }
//       removeDefaultCars();
//       // console.log(e.carType);
//       // createCarDiv('test');
//     }else{
//       console.log('something went wrong');
//     }
    
//   });
// });
















// // ES5
// // 'use strict';

// // var cars = $('.car');
// // //  var cars = document.getElementsByClassName('car');
// // function addBgStyle(element) {
// //   element.style.backgroundSize = 'contain';
// // }
// // cars.each(function () {
// //   addBgStyle(this);
// // });

// // //select all the filter buttons
// // var carTypes = $('.type');
// // var brands = $('.brand');
// // //console log the clicked type
// // function typeFilter(target) {
// //   var targetType = target;
// //   console.log(targetType);
// //   var element = document.querySelector('div[data-car-type="' + target + '"]');
// //   element.classList.toggle('type-selected');
// // }
// // //foreach carType add eventListener
// // carTypes.each(function () {
// //   $(this).click(function (event) {
// //     var target = event.target.dataset.carType;
// //     typeFilter(target);
// //   });
// // });
// // //  Array.from(carTypes).forEach(type => type.addEventListener('click',typeFilter));

// // //console log the clicked brand
// // function brandFilter(target) {
// //   // var target = e.target || e.srcElement || e.originalTarget;
// //   // const brandSelected = target.dataset.carBrand;
// //   var targetType = target;
// //   console.log(targetType);
// //   var element = document.querySelector('div[data-car-brand="' + target + '"]');
// //   element.classList.toggle('brand-selected');
// // }
// // brands.each(function () {
// //   $(this).click(function (event) {
// //     var target = event.target.dataset.carBrand;
// //     // console.log('here:');
// //     brandFilter(target);
// //   });
// // });