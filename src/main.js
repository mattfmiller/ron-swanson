import { Request } from './class';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let displayGif = function(result) {
  $('#display-ron').html(`<img src="${result.data[Math.floor(Math.random()*25)].images.fixed_height.url}">`);
}

let displayQuote = function(result) {
  $('#display-quote').text(result);
}

let displayError = function(error) {
  $('#display-error').text(error);
}

$(document).ready(function() {
  $('#give-me-ron').click(function() {
    let request = new Request();
    request.apiCall(displayGif, displayError);
    request.jQueryCall(displayQuote, displayError);
  });
});
