import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Call } from './call.js';

$(document).ready(function() {
  let call = new Call();
  $('#findDoc').click(function() {
    let currentNum = 0;
    let symptom = $('#symptom').val();
    call.apiCall(symptom, `${process.env.exports.apiKey}`).then(function(response) {
      for (let i = 0; i < `${response.data.length}`; i++){
        $('#output').append("<li><div class='card'>" +
        "<div class='card-header'>" +
        `${response.data[i].practices[0].name}`+"</div>" +
        "<ul class='card-body'><li>" +
        "<div class='card-title'>" +
        `${response.data[i].practices[0].visit_address.street}` + " " +
        `${response.data[i].practices[0].visit_address.city}` + ", " +
        `${response.data[i].practices[0].visit_address.state}` + " " +
        `${response.data[i].practices[0].visit_address.zip}` + "</div><br>" +
        `${response.data[i].profile.first_name}` + " " +
        `${response.data[i].profile.last_name}` + ", " +
        `${response.data[i].profile.title}` + "</li>" +
        "<p>Accepting new patients: <span id='yesOrNo'" + currentNum + "></span></p>" +
        "<li class='card-text'>"+
        `${response.data[i].profile.bio}`
        +"</li>" +
        "</ul></div></li>"

        );
        if (`${response.data[i].practices[0].accepts_new_patients}` === true) {
          $('#yesOrNo' + currentNum).append('yes');
        } else {
          $('#yesOrNo' + currentNum).append('no');
        }
        currentNum++;
      }
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
