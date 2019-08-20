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
      
    }

    var defaultCarsObj = {
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
    }
    
    var compactObj = {
      'fabia':'skoda_fabia',
      'ibiza':'seat_ibiza',
      'polo':'vw_polo',
      'golf':'vw_golf',
      'a1':'audi_a1',
    }
    var familyObj = {
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
    }

    var managerObj = {
      'superb':'skoda_superb',
      'kodiaq':'skoda_kodiaq',
      'tiguan':'vw_tiguan',
      'touareg':'vw_touareg',
      'a4':'audi_a4',
      'a6':'audi_a6',
      'a7':'audi_a7',
      'a8':'audi_a8',
      'q7':'audi_q7',
      'q8':'audi_q8',
    }

    var suvObj = {
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
      'q8':'audi_q8',
    }
    var sportObj = {
      'octavia rs':'skoda_octavia_rs',
      'leon cupra':'seat_leon_cupra',
      'golf gti':'vw_golf_gti',
      'polo gti':'vw_polo_gti',
      'tt':'audi_tt',
      's3':'audi_s3'
    }
    
    var seatObj = {
      'ibiza':'seat_ibiza',
      'ateca':'seat_ateca',
      'arona':'seat_arona',
      'leon':'seat_leon',
      'leon_cupra':'seat_leon_cupra',
    }

    

    var cars = $('.car');
    var carTypes = $('.type');
    var brands =  $('.brand');
    var removeSelection = $('.removeSelection');

    function addBgStyle(element){
      element.style.backgroundSize = 'contain';
    }

    cars.each(function(){
      addBgStyle(this);
    });


    for (var key in defaultCarsObj) {
      if (defaultCarsObj.hasOwnProperty(key)) {
          createCarDiv(key,defaultCarsObj[key] );
          var cars = $('.car');
          
      }
    }


    function carSelect(target){
      const targetCar = target;
      console.log(targetCar);
      const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
      element.classList.toggle('car-selected');
    }

    cars.each(function(){
      $(this).click(function(event){
        var formSelectedCar = $('.formSelectedCar');
        // console.log(formSelectedCar.length)
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


    //add / remove cars to page based on selection
    function typeFilter(target,fullTarget){
      const targetType = target;
      target = targetType;

      selected = document.getElementsByClassName('type-selected');
      console.log(selected);
      
      if(selected.length > 1){
        console.log('enterd');
        switch(targetType){
          case 'compact family':
            fullObj = Object.assign(carsObj.compact,carsObj.family);
            break;
          case 'family':
            fullObj = Object.assign(carsObj.family);
            break;
          case 'suv':
            fullObj = Object.assign(carsObj.suv);
            break;
          case 'sport':
            fullObj = Object.assign(carsObj.sport);
            break;
          case 'manager': 
            fullObj = Object.assign(carsObj.manager)
            break;    
        }
        
      }{
        switch(targetType){
          case 'compact':
            fullObj = Object.assign(carsObj.compact);
            break;
          case 'family':
            fullObj = Object.assign(carsObj.family);
            break;
          case 'suv':
            fullObj = Object.assign(carsObj.suv);
            break;
          case 'sport':
            fullObj = Object.assign(carsObj.sport);
            break;
          case 'manager': 
            fullObj = Object.assign(carsObj.manager)
            break;    
        }
      }
    

      

      
      // console.log(fullTarget);

      if(fullTarget.classList.contains('type-selected')){
        
        // console.log('no class');
        // console.log(target)
      
        
          
      }else{
        // console.log('YES class');
        // console.log(target);
        // console.log(fullTarget);

        // var elem = document.getElementsByClassName(`type_${targetType}`);
        // console.log(elem)

        


        for (var key in elem) {
          if (elem.hasOwnProperty(key)) {
            // console.log(elem[key]);

          }
        } 
        
      }


        var defaultCars = document.querySelectorAll('.car');
        defaultCars.forEach(function (e){
          e.remove();
        });

      // var fullObj = Object.assign(carsObj.compact);

      for (var key in fullObj) {
        if (fullObj.hasOwnProperty(key)) {
          var elem = document.getElementsByClassName(`type_${targetType}`);
          createCarDiv(key,fullObj[key],targetType);
          if(elem.length > carsObj[targetType].length){
            // console.log('fasdfas')
            
          }else{
            // console.log('fasdfas')
          }
          // console.log(elem);
          

         


            var cars = $('.car');
            
        }
      }


      function carSelect(target){
        const targetCar = target;
        console.log(targetCar);
        const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
        element.classList.toggle('car-selected');
      }

      cars.each(function(){
        $(this).click(function(event){
          var formSelectedCar = $('.formSelectedCar');
          // console.log(formSelectedCar.length)
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
      // console.log(fullObj);

      const element = document.querySelector(`div[data-car-type="${targetType}"]`); 
      
      if(element.classList[3] == 'type-selected'){
        // console.log(target);
        element.className = 'type ';
        element.className += targetType;

      }else{
        console.log('added');
        element.classList.toggle('type-selected');
      }
      
    }
    
    // console.log(cars);

    //foreach carType add eventListener
    carTypes.each(function(){
      $(this).click(function(event){
        var target = event.target.dataset.carType;

        // console.log(target);
        var fullTarget = event.target;
        if(event.target.classList.contains('type-selected')){
          console.log(event.target.classList.remove('type-selected'));

          // var carsss = document.querySelectorAll(target);
          // defaultCars.forEach(function (e){
          //   // console.log(e);
          //   e.remove();
          // })
        }
        else{
          console.log('lgfldsglds');
          typeFilter(target,fullTarget);
        }
        
        

      })
    })
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
    brands.each(function(){
      $(this).click(function(event){
      var target = event.target.dataset.carBrand;
      brandFilter(target);
      })
    })

    

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

      a.className = 'removeSelection';
      a.onclick = function(){
        var target = $(this).parent().parent().parent()[0]
        var targetID = $(this).parent().parent().parent()[0].id;
        var element = $(`div[data-car-name="${targetID}"]`);

        target.remove();
        element.removeClass('car-selected');

        console.log(target);
        console.log(targetID);

        
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


  
    removeSelection.each(function(){
      $(this).click(function(){
        var targetElem = $(this).parent().parent().parent();
        console.log(targetElem);
        targetElem.remove();
      });
    });
    
    function removeMe(){
      console.log(this);
    }
 
  

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
    function removeDefaultCars(){
      var defaultCars = document.querySelectorAll('.default');
      defaultCars.forEach(function (e){
        // console.log(e);
        e.remove();
      })
      
    }

    var selectionOptions = $('.selectionCont>div>div');
    // console.log(selectionOptions);

    function createCarDiv (dataCarName,imgName,filter){
      // console.log(imgName);

      var div = document.createElement('div');
      var cars = document.getElementsByClassName('cars')[0];
      div.setAttribute('data-car-name',dataCarName);
      div.style.backgroundImage = `url(images/cars_bg/${imgName}.jpg)`;
      div.style.backgroundSize = 'contain';
      div.className = 'car '+ dataCarName + ' ' + 'type_'+filter;
      
      // div.className += filter;
      
      cars.appendChild(div);
    }

    selectionOptions.each(function(){
      $(this).click(function(event){
        var e = event.target.dataset;

        if(e.carBrand !== undefined ){
          removeDefaultCars();
          // console.log(e.carBrand);
          // createCarDiv('test');

        }else if(e.carType !== undefined){
          // console.log('selected ' + e.carType);
          console.log(e.carType);

          for (var key in fullObj) {
            if (fullObj.hasOwnProperty(key)) {

                // console.log(fullObj[key]);
    
               
            }
          }
          removeDefaultCars();
          // console.log(e.carType);
          // createCarDiv('test');
        }else{
          console.log('something went wrong');
        }
        
      });
    });
  



  function toRender(){

  }
//combile object to one onject






// var compact = ['fabia','ibiza','polo','golf','a1'];
//   var family = ['octavia','karoq','leon','golf','tiguan','a3','a4','a5','q3','q5'];

//   var suv = ['kodiaq','karoq','ateca','arona','tiguan','touareg','q2','q3','q5','q7','q8'];

//   var manager = ['superb','kodiaq','tiguan','touareg','a4','a6','a7','a8','q7','q8'];
//   var sport = ['octavia RS','leon cupra','golf gti','polo gti','tt','s3'];

//   var audi = ['a1','a3','a4','a5','a6','a7','a8','q2','q3','q5','q7','q8','e-tron','tt','s3'];
//   var seat = ['ibiza','ateca','aruna','leon','leon cupra'];
//   var skoda = ['fabia','superb','kodiaq','karoq','octavia','ocatavia RS'];
//   var vw = ['polo','golf','tiguan','touareg','golf gti','polo gti'];































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