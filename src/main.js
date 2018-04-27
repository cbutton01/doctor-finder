import { Call } from './call.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let call = new Call();
  $('#findDoc').click(function() {
    let symptom = $('#symptom').val();
    call.apiCall(symptom).then(function(response) {
      for (let i = 0; i < `${response.data.length}`; i++){
        $('#output').append("<li><div class='card'>" +
        "<div class='card-header'>" +
        `${response.data[i].practices[0].name}`+"</div>" +
        "<ul class='card-body'><li>" +
        "<div class='card-title'>" +
        `${response.data[i].practices[0].visit_address.street}` + " " +
        `${response.data[i].practices[0].visit_address.city}` + ", " +
        `${response.data[i].practices[0].visit_address.state}` + " " +
        `${response.data[i].practices[0].visit_address.zip}` + "<br>" +
        `${response.data[i].profile.first_name}` + " " +
        `${response.data[i].profile.last_name}` + ", " +
        `${response.data[i].profile.title}` + "</li>" +
        "<li class='card-text'>"+
        `${response.data[i].profile.bio}`
        +"</li>" +
        "</ul></div></li>"
      );}
    })
    .fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
