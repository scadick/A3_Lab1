(function () {
  var carButtons = document.querySelectorAll('.data-ref');

  function getCarData() {
    const url = './includes/functions.php?carModel=' + this.id;

    // fetchAPI uses the Promise API (new for ES6)
    //fetch(url) // this does the AJAX call
    //    .then((resp) => resp.json())
    //    .then((data) => { processResults(data); }
    //    .catch(function(error) {
    //      console.log(error);
    //    });
    fetch(url) // do our ajax call
    .then((resp) => resp.json()) // convert the response to JSON (built-in method)
    .then({ modelName, pricing, modelDetails, model }) => {
      //const { modelName, pricing, modelDetails } = data;

      let carModel = document.querySelector('.modelName').textContent = modelName;
      let price = document.querySelector('.priceInfo').innerHTML = pricing;
      let desc = document.querySelector('.modelDetails').textContent = modelDetails;

      // refactor this with an arrow function (shorthand function declaration)
      carButtons.forEach(car => car.classList.add('nonActive'));

      document.querySelector(`#${model}`).classList.remove('nonActive');
     }) // then do the process result function
    .catch(function(error) {
      console.log(error); // catch any errors and show them in the console
    });
  }
  // processResult is run when the AJAX call is complete and we have the data back. It gets called on line 36, and the data variable gets passed in from that function (it's the JavaScript object we got from the database)
  //function processResult(data) {
    // destructure the data and extract only what we need
    // the data is coming in as an object - it's 'structured' data. We can reach into it and pull out just the values we need by using a destructuring assignment
    //const { modelName, pricing, modelDetails } = data;

    // this is statement chaining - we can select an element and change its content all at once, instead of doing it in multiple steps
    //let model = document.querySelector('.modelName').textContent = modelName;
    //let price = document.querySelector('.priceInfo').innerHTML = pricing;
    //let desc = document.querySelector('.modelDetails').textContent = modelDetails;

    // loop through all the car thumbnails again and add a nonActive class to them to fade them out. a forEach function uses the collection we set up in our variable declaration at the top on line 5, and passes each element in one at a time (that's what the car in the round brackets is). It also tracks what iteration of the loop it's on with the index variable (0, 1, 2 etc), which we're not using in the function.
    //carButtons.forEach(function(car, index) {
    //  car.classList.add('nonActive');
    //});

    //this.classList.remove('nonActive');
    // the "this" keyword won't work any more because we're out of scope (we'll get into scope and what it means in the winter term). we need to select the current element another way - the model field is part of the dataset we got back from the database, and it's also the ID of the current model (they match) so we can use that to select the element on the page using a JavaScript template string
    //
    // template strings are new in ES6; among other things, they let you dig in to data and pull out values, create HTML blobs in JavaScript files, and generally make life a lot easier for JS developers who have had to write hacky ways to do things like this
    //document.querySelector(`#${data.model}`).classList.remove('nonActive');

  // loop through and add event handling to each car thumbnail on the page. on a click, they'll fire the AJAX call at the top of the script file.
  carButtons.forEach(function(car, index) {
    car.addEventListener('click', getCarData, false);
  });

})();
