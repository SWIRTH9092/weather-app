
// Constants and Variables
const API_KEY = ';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

let weatherData, userInput;
// const $title = $('#title');
// const $cityName = $('cityName');
// const $rated = $('#rated');
// const $input = $('input[type="text"]');

// $('form').on('submit', handleGetData);

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


function handleGetData() {
  $.ajax(BASE_URL + 'q=Martinsburg&appid=' + API_KEY)
  .then(
    (data) => { 
    weatherData = data;
    console.log("weatherrdata", weatherData);
    //  render();
  }, 
    (error) => {
    console.log('error:', error);
  })
}

 // 