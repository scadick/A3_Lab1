(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var changeImg = document.querySelectorAll('.data-ref'),
   changeModel = document.querySelector('.modelName'),
   changePrice = document.querySelector('.priceInfo'),
   changeDescription = document.querySelector('.modelDetails'),
   appliedClass;
   const httpRequest = new XMLHttpRequest();

   function getCarData() {
     //1. make an AJAX call to the database; handle any errors first
     if (!httpRequest) {
       alert('giving up, your browser sucks!');
       return false;
     }

     httpRequest.onreadystatechange = processRequest; // fire this function
     // when things change
     httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
     httpRequest.send();
   }

   function processRequest() {
     // handle the stages of our AJAX call
     let reqIndicator = document.querySelector('.request-state');
     reqIndicator.textContent = httpRequest.readyState;

    //debugger;

     if (httpRequest.readyState === XMLHttpRequest.DONE) {
       if (httpRequest.status === 200) { // request worked, all is good!
         //debugger;
         let data = JSON.parse(httpRequest.responseText);
         processResult(data);
       } else {
         alert('There was a problem with the request');
       }
     }
   }

 function processResult (data) {
   debugger;
   const{modelName, pricing, modelDetails} = data;

	 // swap Model of car
 //let modelSwap = document.querySelector('.modelInfo');
 //let objectIndex = carData[this.id];
 let model = document.querySelector('.modelName').textContent = modelName;
 let price = document.querySelector('.priceInfo').innerHTML = pricing;
 let desc = document.querySelector('.modelDetails').textContent = modelDetails;

 //changeModel.firstChild.nodeValue = objectIndex.modelName;
 //changePrice.firstChild.nodeValue = objectIndex.priceInfo;
 //changeDescription.firstChild.nodeValue = objectIndex.modelDetails;

 //appliedClass = this.id;

 console.log(this.id);
 	//opacity changes for images
	changeImg.forEach(function(element, index){
	element.classList.remove("focusMini");
	});
	//this.classList.add("focusMini");
  document.querySelector(`#${data.model}`).classList.add("focusMini");
 }
 changeImg.forEach(function(element, index){

	element.addEventListener('click', getCarData, false);

 });

})();
