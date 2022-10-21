
// Constants and Variables
const API_Key = 'a6e9bad4fa160aa7de5ed9f6e4088082';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'


let weatherData, geoData, userInput, cityName, stateCode, srchComma, baseGEO_API;

const baseGEO_URL = 'https://api.openweathermap.org/geo/1.0/direct?q=' 


// jquery variables for HTML elements
const $weatherCity = $('#wcity');
const $temp = $('#temp');
const $feelsLike = $('#feelslike')
const $weather = $('#weather')
const $input = $('input[type="text"]');

// Function to handle error for not finding weather
function errorHandling (errorMessage) {
  $weatherCity.text(errorMessage).css("color", "red")
  $temp.text("")
  $feelsLike.text("")
  $weather.text ("")  
}

// Event Listener for form Input
$('form').on('submit', handleGetData);

//Handle function for Input
function handleGetData (event) {
// calling preventDefault() on a 'submit' event will    prevent a page refresh  
  event.preventDefault();

  //  getting User Input and reset to placeholder
  userInput = $input.val();
  srchComma = userInput.search(",")

  //Edit input city, state
  // if error found, display error.message
  if (srchComma > 0) {
      cityName = userInput.substring(0, srchComma).trim()
      stateCode = userInput.substring(srchComma + 1, userInput.length)
  } else {
    //Function to handle error for not finding weather
      errorHandling('Error in Input Format: City Name, State Code')
    return
  }
  
  //  Reset Input value
  $input.val("")

  // Call to get Geo Data
  const promise1 = $.ajax(baseGEO_URL + `${cityName},${stateCode.trim()},&appid=${API_Key}`);
   promise1.then(
     (gData) => { 
         geoData = gData

      // check to see if the city-state code was found
        //  if no log error message and return
      if (geoData.length === 0) {
         errorHandling(`City Name, State Code not found: ${userInput}`)
         $temp.text("")
         return
        }

      //  Save city name for output
      cityName = geoData[0].name  

      // now read weather by longitude-latitude   
      const promise2 = $.ajax(BASE_URL + `lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${API_Key}&units=imperial`)
      promise2.then(
        (data) => {
            weatherData = data;
            render();
          }, 
        (error) => {
            console.log("error", error)
          }
        )
      },
      (error) => {
        console.log("error", error)
      })
}

// Update HTML Text
function render() {
    $weatherCity.text
        (`${cityName} Weather`).css("color", "#091D34")  
    $temp.text
        (`Temperature: ${Math.round(weatherData.main.temp)}°`)
    $feelsLike.text
        (`Feels Like:  ${Math.round(weatherData.main.feels_like)}°`)
    $weather.text
        (`Weather:  ${(weatherData.weather[0].description)}`)
  }
