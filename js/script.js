
// Constants and Variables
const API_KEY = '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

let weatherData, userInput;
const $weatherCity = $('#wcity');
console.log("weatherCity",$weatherCity)

// const $cityName = $('cityName');
// const $rated = $('#rated');
const $input = $('input[type="text"]');


// Event Listener for form Input
$('form').on('submit', handleGetData);

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//Handle function for Input
function handleGetData (event) {
  // calling preventDefault() on a 'submit' event will    prevent a page refresh  
  event.preventDefault();

  //  getting User Input
  userInput = $input.val();
  console.log("user Input", userInput)

  // Calling API for weather information
  $.ajax(BASE_URL + 'q=Martinsburg&appid=' + API_KEY + '&units=imperial')
  .then(
    (data) => { 
    weatherData = data;
    console.log("weatherrdata", weatherData);
    render();
  }, 
    (error) => {
    console.log('error:', error);
  })
}

// Update HTML Text
function render() {
    console.log("weatherData.name", weatherData.name)
    $weatherCity.text(`Weather For: ${weatherData.name}`);   

//     $year.text(movieData.Year);
//     $rated.text(movieData.Rated);
 }
 // 