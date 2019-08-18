// //browser detect

// // Opera 8.0+
// var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// // Firefox 1.0+
// var isFirefox = typeof InstallTrigger !== 'undefined';

// // Safari 3.0+ "[object HTMLElementConstructor]" 
// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// // Internet Explorer 6-11
// var isIE = /*@cc_on!@*/false || !!document.documentMode;

// // Edge 20+
// var isEdge = !isIE && !!window.StyleMedia;

// // Chrome 1 - 71
// var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// // Blink engine detection
// var isBlink = (isChrome || isOpera) && !!window.CSS;


//  ES6





 //add css to car class.
 var cars = $('.car');
//  var cars = document.getElementsByClassName('car');
 function addBgStyle(element){
  element.style.backgroundSize = 'contain';
 }
 cars.each(function(){
  addBgStyle(this);
 });

   //select all the filter buttons
   var carTypes = $('.type');
   var brands =  $('.brand');
   //console log the clicked type
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