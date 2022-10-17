// const promise = $.ajax({
//     url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// });

// promise.then(
//   (data) => {
//    console.log(data);
//   },
//   (error) => {
//    console.log('bad request: ', error);
//   }
// );

// const $title = $('#title');
// const $year = $('#year');
// const $rated = $('#rated');

// $.ajax({
//     url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
//   }).then(
//     function(data){
//         $title.text(data.Title);
//         $year.text(data.Year);
//         $rated.text(data.Rated);
//     },
//     function(error){
//      console.log('bad request', error);
//     }
//   );

// let movieData;

// $('form').on('submit', handleGetData);

// function handleGetData(event) {
//     event.preventDefault();
//    // calling preventDefault() on a 'submit' event will prevent a page refresh  
//     $.ajax({
//          url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
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

let movieData, userInput;

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
      // getting the user input
    $.ajax({
        url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
      }).then(
        (data) => {
         movieData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated);
 }