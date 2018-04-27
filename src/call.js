import $ from 'jquery';
let key = process.env.export.apikey;

class Call {
  apiCall(){
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C25&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${key}`);
  }
}

export { Call };
