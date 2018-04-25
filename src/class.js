import $ from 'jquery';

class Request {

  // JavaScript ES6 Promise
  apiCall(displayGif, displayError) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let error;
      let url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API}&q=ron swanson`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          error = new Error(request.statusText)
          reject(error);
        }
      }
      request.open("GET", url);
      request.send();
    });

    promise.then(function(response) {
      let result = JSON.parse(response);
      displayGif(result);
    }, function(error) {
      displayError(error);
    });
  }

  // jQuery Promise
  jQueryCall (displayQuote,displayError) {
    $.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function(response) {
      displayQuote(response);
    }).fail(function(error) {
      displayError(error);
    });
  }
}

export { Request };
