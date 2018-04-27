import $ from 'jquery';
let apiKey = process.env.export.apikey;

class Call {
  apiCall(symptom){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.5231%2C-122.6765%2C20&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=${apiKey}`);
  }
}

export { Call };
