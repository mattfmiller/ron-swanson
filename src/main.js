import { Request } from './class';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let displayData = function(result) {
  $('#display-ron').append(result);
}

let displayError = function(error) {
  $('#display-error').text(error);
}

$(document).ready(function() {
  $('#give-me-ron').click(function() {
    Request.apiCall(displayData, displayError);
  });
});
