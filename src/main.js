import { Call } from './call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let key = process.env.export.API_KEY;
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C25&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${key}`).then(function(response) {

    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
