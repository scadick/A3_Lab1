(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var changeImg = document.querySelectorAll('.data-ref'),
   changeModel = document.querySelector('.modelName'),
   changePrice = document.querySelector('.priceInfo'),
   changeDescription = document.querySelector('.modelDetails'),
   appliedClass;
 }

 function swapModel () {
 let modelSwap = document.querySelector('.modelInfo');
 let objectIndex = carData[this.id];

 changeModel.firstChild.nodeValue.objectIndex.modelName;
 changePrice.firstChild.nodeValue.objectIndex.priceInfo;
 changeDescription.firstChild.nodeValue.objectIndex.modelDetails;

 appliedClass = this.id;

 console.log(this.id);

 });
 swapModel.addEventListener('click', function() {swapModel(index, objectIndex);}, false);


})();
