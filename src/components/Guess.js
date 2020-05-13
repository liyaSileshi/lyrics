// <Guess  artist =  />
import React, {Component} from 'react';
import Autocomplete from './Autocomplete'
import './Guess.css'
import Correct from './Correct'
import Incorrect from './Incorrect'

class Guess extends Component{
  constructor(props) {
      super(props)
      this.state = {lyricsData : null,
                    guessArtist: '',
                    gameStatus : ''
                    }
  }

  handleGuessLogic(e) {
    e.preventDefault();

    if (this.state.guessArtist.toLowerCase() === this.props.artist.toLowerCase()) {
      this.setState({gameStatus : 'correct'})
      console.log('woo hoo')
    } else {
      console.log('better luck next time')
      this.setState({gameStatus : 'incorrect'})
    }
  }
  
  displayWinLose() {
    if (this.state.gameStatus === 'correct') {
      return <Correct />
    }
    else if (this.state.gameStatus === 'incorrect') {
      return <Incorrect />
    }
  }
  //when an auto complete option is clicked, add it as input
  updateText = (text) => {this.setState({ guessArtist : text })}

  render() {
    return (
      <div>
      <form className='guess-form' onSubmit={e => this.handleGuessLogic(e)}>
      <input 
        value={this.state.guessArtist} 
        onChange={e => this.setState({ guessArtist: e.target.value })}
        type="text" 
        placeholder="enter artist"
      />
      <button className='submit-btn' type="submit">Submit Guess</button>
      </form>
      <Autocomplete guessArtist = {this.state.guessArtist} updateGuess={this.updateText}/> 
      {this.displayWinLose()}
    </div>
    )
  }
}

export default Guess;