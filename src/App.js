import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import ImageContainer from './components/ImageContainer'


function App() {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Xxw4xON4bwc08eKAIx07uqbUoGirpleIO7Lmmv8r')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <ImageContainer data={data} />
    </div>
  );
}

export default App;
