//  ES6
 //add css to car class.
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


  

   //console log the clicked type + toggle the class type-selected
   function typeFilter(target){
     const targetType = target;
     console.log(targetType);
     const element = document.querySelector(`div[data-car-type="${target}"]`); 
     element.classList.toggle('type-selected');  
    
    
   }
   //foreach carType add eventListener
   carTypes.each(function(){
     $(this).click(function(event){
      var target = event.target.dataset.carType;
      typeFilter(target);
     })
   })
  //  Array.from(carTypes).forEach(type => type.addEventListener('click',typeFilter));

   //console log the clicked brand
   function brandFilter(target){
      // var target = e.target || e.srcElement || e.originalTarget;
        // const brandSelected = target.dataset.carBrand;
        const targetType = target;
        console.log(targetType);
        const element = document.querySelector(`div[data-car-brand="${target}"]`);
        element.classList.toggle('brand-selected');

   }
   brands.each(function(){
    $(this).click(function(event){
     var target = event.target.dataset.carBrand;
     // console.log('here:');
     brandFilter(target);
    })
  })

  function carSelect(target){
    const targetCar = target;
    // console.log(targetCar);
    const element = document.querySelector(`div[data-car-name="${targetCar}"]`);
    element.classList.toggle('car-selected');
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
    console.log(carName);
    selectedCar = document.getElementsByClassName('selected_'+carName)[0];
    if(selectedCar){
      console.log('true')
      selectedCar.remove();
    }else{
      console.log('false')
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
  //  Array.from(brands).forEach(brand => brand.addEventListener('click',brandFilter));






























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