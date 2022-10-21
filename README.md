# Weather-App


This project uses 2 API's from openweathermap. org to display the weather for a city, state

-  Geocoding API.  City and state code from the input form is used to access the latitude and longitute for the weather. The format of the API is below:

        http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

-  Current weather Data API.  The longitude and latitude from the GEOcoding API is used to find the current weather to display on the screen.  The format of the API is below (in the API call the paramter:  &units=imperial was added at the end so that the app would return the tempature in fahrenheit):   

        https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



#### Technologies Used

- HTML
- CSS.  
- Javascript
- Jquery. 

Features:
- Used Grid layout for responsive design
- - Used Jquery to make the API calls and for Dom Manipulation. 
- Edited the input data for having both city and state before making API calls
- Generated errors messages: 
    -   When there was not a city and state coded in the input field.
    -   When the GEO API did not find a longitude and latitude for an input city, State code

### Stretch Goals
-  Add more weather information to the window
-  Allow the user to how many days of forcasts they want

