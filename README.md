# Doctor Finder

 Authored by Cameron Button

#### Description

  * This application is designed for users to search for a physician with their city or search area.  Additional to physician location the user will be able to query a certain symptom or ailment.

### Set up instructions

  * Clone repository from github
  * run npm install
  * create a local .env file and insert a variable of exports.apiKey equal to your own betterDoctor api key
  * in the command line use the command npm run start
  * type in a symptom and press the search button

#### Behavior Driven Development
  Specifications listed to guide the development process.

  * The user can search for physicians within Portland OR.
    * For example pressing the search button will display a list of physician names within Portland.
    * Next, implement displaying the practice information of the results, such as address and phone number.

  * The user can input a symptom to narrow down their search.
    * For example using the term "sore throat" will display only the names of physicians that specialize or work with sore throats.
