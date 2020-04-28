import React from 'react';
import logo from './logo.svg';
import './App.css';

async function getLyricData(url) {
  try{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const res = await fetch(proxyurl + url)
    console.log(res)
    const json = await res.json() 
    console.log(json)
    // this.setState({ weatherData: json , isLoading: false})
    console.log(JSON.parse(json))

  } catch(err) {
     // If there is no data 
    //  this.setState({ weatherData: null, errorMessage: err.message }) // Clear the weather data we don't have any to display
     // Print an error to the console. 
     console.log('-- Error fetching --')
     console.log(err.message)
     // You may want to display an error to the screen here. 
   }
}

function App() {
  const apikey = process.env.REACT_APP_LYRICS_API_KEY
  const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=Stay&q_artist=Alessia%20&apikey=${apikey}`
  getLyricData(url)
  console.log(url)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
