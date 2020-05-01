import React from 'react';
import data, {song_title} from './spotify'
import './App.css';
import './components/lyrics'
import Lyrics from './components/lyrics';





function App() {
 
  
  return (
    <div className="App">
      <header className="App-header">
        <Lyrics />
      </header>
    </div>
  );
}

export default App;
