import React from 'react';
import data, {song_artist} from './spotify'
import './App.css';
import './components/lyrics'
import Lyrics from './components/lyrics';
import Trie from './utils/prefixtree'
import './components/Autocomplete'

function App() {
  return (
    <div className="App">
        <header>
          <h1> Guess the Artist</h1>
          <p>Can you guess the artist from these lyrics? </p>
        </header>
        <Lyrics />
    </div>
  );
}

export default App;
