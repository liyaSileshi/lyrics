import React from 'react';
import data, {song_title} from './spotify'
import './App.css';
import './components/lyrics'
import Lyrics from './components/lyrics';
import Trie from './utils/prefixtree'


function App() {
  let tree = new Trie(['hey', 'howdy', 'yo', 'hey'])
  console.log(tree.root)
  console.log(tree.size)
  console.log('contains>..')
  console.log(tree.contains('yos'))
  let comp = tree.complete('h')
  console.log(comp)
  console.log(tree.strings())
  return (
    <div className="App">
      <header className="App-header">
        <Lyrics />
      </header>
    </div>
  );
}

export default App;
