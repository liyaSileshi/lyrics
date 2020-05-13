import React, {Component} from 'react';
import {getRandomSinger} from '../spotify'
import Guess from './Guess'
import Loading from './Loading'
import './lyrics.css'
import Error from './Error'

class Lyrics extends Component{
  constructor(props) {
      super(props)
      this.state = {lyricsData : null,
                    isLoading: false, // to check if data is still being loaded or already loaded
                    artist: '',
                    song: ''}
  }
    
  async getLyricData(url) {
    try{
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const res = await fetch(proxyurl + url)
      const json = await res.json()     
      this.setState({ lyricsData: json, isLoading: false })
      
    } catch(err) {
        this.setState({ lyricsData: null }) 
        console.log('-- Error fetching --')
        console.log(err.message)
        // You may want to display an error to the screen here. 
      }
  }

  handleSubmit(e) {
    this.setState({isLoading : true})
    e.preventDefault();
    const apikey = process.env.REACT_APP_LYRICS_API_KEY
    const [title, artist] = getRandomSinger()
    //set the state of the song to the current randomly selected title and artist
    this.setState({artist : artist, song : title})
    console.log(title)
    console.log(artist)
    const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=${title}&q_artist=${artist}%20&apikey=${apikey}`
    // const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=yo&q_artist=u%20&apikey=${apikey}`
    this.getLyricData(url)
  }

  renderLyrics() {
    const lyricsData = this.state.lyricsData
    if (lyricsData === null) { //
      // If there is no data return undefined
      return undefined
    }

    if (lyricsData.message.header.status_code === 200){ // if json status is valid, show data
      const {lyrics_body} = lyricsData.message.body.lyrics
      let lines = lyrics_body.split('\n')
      // remove the last 4 elts in the lines array
      lines.splice(lines.length - 4)
      // filter out elts with empty strings
      lines = lines.filter((line) => {
        return line !== ""
      })
      // return the first 6 lines of the lyrics
      const firstSix = lines.slice(0, 6)
      return firstSix.map((lyric) => {
        return <p>{lyric}</p>
      })
    } else { //invalid json
      return <Error />
    }
  }

  checkRender() {
    if (this.state.isLoading) { //renders when waiting for json request data
      return <Loading />
    } 
    return this.renderLyrics()
  }

  render() {
    return (
      <div className = 'game'>
        <div className='lyricsGenerate'>
          <form onSubmit={e => this.handleSubmit(e)}>
            <button className='submit-btn' type="submit">Generate Lyrics</button>
          </form>
          <p>{this.checkRender()}</p>
        </div>
        <div className = 'guess'>
          {/* Guess component */}
          <Guess artist = {this.state.artist}/>
        </div>
      </div> 
    )
  }
}

export default Lyrics;
