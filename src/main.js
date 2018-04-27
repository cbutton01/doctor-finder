import { Call } from './call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let call = new Call();
  $('#findDoc').click(function() {
    call.apiCall().then(function(response) {
      $('#output').append(`${response.data[0].practices[0].name}`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
