import React from 'react';
import "./Currentmeteo.css";
function Currentmeteo({data}) {
  if (!data) {
    return <div></div>; // Vous pouvez également afficher un message de chargement personnalisé
  }
  return (
    <div className="current-weather">
      <div className="top">
        <div className="info">
          <p className='city'>{data.city}</p>
          <p className='Description'>{data.weather[0].description}</p>
        </div>
        <img alt="Météo Icon" className='weather_icon' src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round (data.main.temp)}°C</p>
        <div className="details">
          <div className="parameterrow">
            <span className="parameterspan">details :</span>
          </div>
          <div className="parameterrow">
            <span className="parameterspan">Ressentie :</span>
            <span className="parameterdetails">{Math.round (data.main.feels_like)}°C</span>
          </div>
          <div className="parameterrow">
            <span className="parameterspan">Vent :</span>
            <span className="parameterdetails">{Math.round (data.wind.speed)} km/h</span>
          </div>
          <div className="parameterrow">
            <span className="parameterspan">Humidité :</span>
            <span className="parameterdetails">{data.main.humidity}%</span>
          </div>
          <div className="parameterrow">
            <span className="parameterspan">Précipitations :</span>
            <span className="parameterdetails">{data.main.pressure}hPa</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Currentmeteo