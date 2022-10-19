
// Constants and Variables
const API_KEY = 'a6e9bad4fa160aa7de5ed9f6e4088082';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

let weatherData, userInput;

// jquery variables for HTML elements
const $weatherCity = $('#wcity');
const $temp = $('#temp');
const $feelsLike = $('#feelslike')
const $weather = $('#weather')
const $input = $('input[type="text"]');

// Event Listener for form Input
$('form').on('submit', handleGetData);

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//Handle function for Input
function handleGetData (event) {
  // calling preventDefault() on a 'submit' event will    prevent a page refresh  
  event.preventDefault();

  //  getting User Input and reset to placeholder
  userInput = $input.val();
  $input.val("")
    // Calling API for weather information
  $.ajax(`${BASE_URL}q=${userInput}&appid=${API_KEY}&units=imperial`)

  // $.ajax(BASE_URL + 'q=Martinsburg&appid=' + API_KEY + '&units=imperial')
  .then(
    (data) => { 
    weatherData = data;
    render();
  }, 
    (error) => {
    //  checkiing for city not found
    if (error.status === 404) {
      $weatherCity.text
      $temp.text("Temperature: ")
      $feelsLike.text("Feels Like: ")
      $weather.text ("Weather: ")  
     } else {
    // all other errors log....  
      console.log("error", error)
    }

  })
}

// Update HTML Text
function render() {
    $weatherCity.text
        (`Weather For:  ${weatherData.name}`);   
    $temp.text
        (`Temperature: ${Math.round(weatherData.main.temp)}  °`)
    $feelsLike.text
        (`Feels Like:  ${Math.round(weatherData.main.feels_like)} °`)
    $weather.text
        (`Weather:  ${(weatherData.weather[0].description
          )}`)

 }
