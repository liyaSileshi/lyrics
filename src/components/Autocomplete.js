import React from 'react';
import Trie from '../utils/prefixtree';
import {uniqueArtists, artistObject} from '../spotify';

// class Autocomplete


let tree = new Trie(uniqueArtists)

function Autocomplete (props) {
    if (props.guessArtist.length > 0) {
        console.log(props.guessArtist)
        console.log(tree.strings())
        return tree.complete(props.guessArtist.toLowerCase()).map((name) => {
            return <div onClick = {() => {
                props.updateGuess(artistObject[name])
                console.log(artistObject[name])
            }}>{artistObject[name]}</div>
          })
    }
   else return 'none' 
}

export default Autocomplete;
