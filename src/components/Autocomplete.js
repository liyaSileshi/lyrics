import React, {Component} from 'react';
import Trie from '../utils/prefixtree';
import {uniqueArtists} from '../spotify';

let tree = new Trie(uniqueArtists)

function Autocomplete (props) {
    // console.log(tree)
    if (props.guessArtist.length > 0) {
        console.log(props.guessArtist)
        // console.log(tree.findNode(props.guessArtist))
        return  tree.complete(props.guessArtist)
    }
   else return 'none' 
}

export default Autocomplete;
