// <Guess  artist =  />
import React, {Component} from 'react';
import Trie from '../utils/prefixtree'
import {uniqueArtists} from '../spotify'
import Autocomplete from './Autocomplete'

class Guess extends Component{
  constructor(props) {
      super(props)
      this.state = {lyricsData : null,
                    guessArtist: ''
                    }
  }
  handleGuessLogic(e) {
    e.preventDefault();
    if (this.state.guessArtist === this.props.artist) {
      console.log('woo hoo')
      return 'woo Hoo'
    } else {
      console.log('better luck next time')
      return 'better luck next time'
    }
  }
  
  render() {
    return (
      <div>
      <form onSubmit={e => this.handleGuessLogic(e)}>
      <input 
        value={this.state.guessArtist} 
        onChange={e => this.setState({ guessArtist: e.target.value })}
        type="text" 
        placeholder="enter artist"
      />
      <button className='submit-btn' type="submit">Submit Guess</button>
      </form>
      <Autocomplete guessArtist = {this.state.guessArtist}/> 
    </div>
    )
  }
}

export default Guess;