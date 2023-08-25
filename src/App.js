import logo from './logo.svg';
import './App.css';
import Searchbar from './Compo/search/Searchbar';
import Nav from './Compo/Nav/Nav';
import Footer from './Compo/Footer/Footer';
import Currentmeteo from './Compo/currentmeteo/Currentmeteo';
import { weather_api, weather_api_key } from './Compo/Api/Api'
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handelOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${weather_api}/weather?lat=${lat}&lon=${long}&appid=${weather_api_key}&units=metric`);
    const currentforecastFetch = fetch(`${weather_api}/forecast?lat=${lat}&lon=${long}&appid=${weather_api_key}&units=metric`);

    Promise.all([currentWeatherFetch, currentforecastFetch])
      .then(async (Response) => {
        const weatherResponse = await Response[0].json();
        const forecastResponse = await Response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <main>
        <Searchbar onSearchChange={handelOnSearchChange} />
        {Currentmeteo && <Currentmeteo data={currentWeather}  />}
      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
