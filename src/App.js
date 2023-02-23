
import React, {useState, useEffect} from 'react';


// Whatever is in the useEffect logic runs when
// When the app loads for the first time.
// Within my useEffect, do something that causes the state to change
// And re-render the application
// When using useEffect, you need to add a dependency
// A dependency is value or set of value that trigger a re-renders once it is changed

const App = () => {
 const [location, setLocation] = useState("")
 const [longitude, setLongitude] = useState("")
 const [latitude, setLatitude] = useState("")
 const [weather, setWeather] = useState("")

  useEffect(() => {
    loadInitialWeather()
  }, [])


  const loadInitialWeather = async (location = 'North York') => {
    const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${location}&format=jsonv2`)
    const data = await response.json();
    const firstData = data[0]
    setLongitude(firstData.lon)
    setLatitude(firstData.lat)
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${firstData.lat}&longitude=${firstData.lon}&current_weather=true`)
    const weatherData = await weatherResponse.json();

    console.log(weatherData, 'weatherData');
    setWeather(weatherData.current_weather.temperature)
  }

  const handleLocation = async (event) => {
    console.log(event, 'event');
    setLocation(event.target.value)
    loadInitialWeather(event.target.value)
   
  }

  return (
    <>
    <input value={location} onChange={handleLocation} />

    <p>{location || 'North York'}</p>
    <p>{latitude}</p>
    <p>{longitude}</p>
    <p>Current weather is: {weather}</p>
    </>
  )
}




export default App;


// API Weather
// https://api.open-meteo.com/v1/forecast?latitude=43.7543263&longitude=-79.44911696639593&current_weather=true
// Get Latitude/Longitude
// https://nominatim.openstreetmap.org/search.php?q=North York&format=jsonv2