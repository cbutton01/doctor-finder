# Doctor Finder

 Authored by Cameron Button

#### Description

  * This application is designed for users to search for a physician with their city or search area.  Additional to physician location the user will be able to query a certain symptom or ailment.

### Set up instructions

  * Clone repository from github
  * run npm install
  * _IMPORTANT_ you will need your own API key from https://developer.betterdoctor.com/ in order to run this project locally.
  * After getting an API key create a .env file in the top directory of doctor-finder
  * Inside the .env creat a variable named exports.apiKey and assign it the value of your own API key.
  * in the command line use the command npm run start
  * type in a symptom and press the search button

#### Behavior Driven Development
  Specifications listed to guide the development process.

  * The user can search for physicians within Portland OR.
    * For example pressing the search button will display a list of physician names within Portland.
    * Next, implement displaying the practice information of the results, such as address and phone number.

  * The user can input a symptom to narrow down their search.
    * For example using the term "sore throat" will display only the names of physicians that specialize or work with sore throats.

### Known Bugs and issues

  * Accepting new patients field is not being populated correctly.
  * Preforming a search only appends new items to the list, this is inconvenient for the user, but a solution has not been found.
  * Errors not being displayed correctly.
