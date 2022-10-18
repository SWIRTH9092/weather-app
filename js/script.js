
// Constants and Variables
const API_KEY = 'a6e9bad4fa160aa7de5ed9f6e4088082';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

let weatherData, userInput;
const $weatherCity = $('#wcity');
console.log("weatherCity",$weatherCity)

// const $cityName = $('cityName');
// const $rated = $('#rated');
const $input = $('input[type="text"]');


// Event Listener for form Input
$('form').on('submit', handleGetData);

// //Event Listener
// function handleGetData(event) {
//     event.preventDefault();
//        // calling preventDefault() on a 'submit' event will prevent a page refresh  
//     userInput = $input.val();
//       // getting the user input
//     $.ajax({
//         url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
//       }).then(
//         (data) => {
//          movieData = data;
//          render();
//         },
//         (error) => {
//          console.log('bad request', error);
//         }
//     );    
// }

// function render() {
//     $title.text(movieData.Title);
//     $year.text(movieData.Year);
//     $rated.text(movieData.Rated);
//  }


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//Handle function for Input
function handleGetData (event) {
  event.preventDefault();

  userInput = $input.val();
  console.log("user Input", userInput)
  $.ajax(BASE_URL + 'q=Martinsburg&appid=' + API_KEY)
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

function render() {
    console.log("weatherData.name", weatherData.name)
    $weatherCity.text(`Weather For: ${weatherData.name}`);
//     $year.text(movieData.Year);
//     $rated.text(movieData.Rated);
 }
 // 