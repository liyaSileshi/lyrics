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
      <header className="App-header">
        <Lyrics />
      </header>
    </div>
  );
}

export default App;
