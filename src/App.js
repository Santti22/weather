import './App.css';
import Weather from './Weather'
import {isLoading, useEffect, useState} from 'react'

  function App() {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  useEffect (() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      
      }, (error) => {
        alert(error)
      })
    }
    else {
      alert('your browser does not support geolocation!')
    }
  })
  if (isLoading) {
    return <p>Loading...</p>
  } 
  else {
  return (
    <div className="content">
      <h3>Your position:</h3>
      <p>
        Position:
        {lat.toFixed(3)}, 
        {lng.toFixed(3)}
      </p>
      <Weather lat={lat} lng={lng} />
    </div>
    
    );
  }
}

export default App;
