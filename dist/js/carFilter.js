/*!
 * Metropolic v1.0.0
 * 
 * (c) 2019 BinaryRx
 * MIT License
 * git@bitbucket.org:klogic/metropolic_landingpage.git
 */

   
 //add css to car class.
 var cars = document.querySelectorAll('.car');
 function addBgStyle(element){
  element.style.backgroundSize = 'contain';
 }
 cars.forEach(addBgStyle);
   
   

   //select all the filter buttons
   const carTypes = document.querySelectorAll('.type');
   const brands =  document.querySelectorAll('.brand');



   //console log the clicked type
   function typeFilter(e){
     const typeSelected = e.toElement.dataset.carType;
     const element = document.querySelector(`div[data-car-type="${typeSelected}"]`);

     element.classList.toggle('type-selected');
     // console.log(e);
     // console.log(typeSelected);
     // console.log(element);
   }
   //foreach carType add eventListener
   carTypes.forEach(type => type.addEventListener('click',typeFilter));

   //console log the clicked brand
   function brandFilter(e){
     const brandSelected = e.toElement.dataset.carBrand;
     const element = document.querySelector(`div[data-car-brand="${brandSelected}"]`);
     element.classList.toggle('brand-selected');
     // console.log(e);
     // console.log(brandSelected);
   }
   brands.forEach(brand => brand.addEventListener('click',brandFilter));