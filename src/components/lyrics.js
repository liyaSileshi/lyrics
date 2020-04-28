import React, {Component} from 'react';

class Lyrics extends Component{
  constructor(props) {
      super(props)
      this.state = {lyricsData : null}
  }
    
  async getLyricData(url) {
    try{
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const res = await fetch(proxyurl + url)
      const json = await res.json() 
      // return json
      
      this.setState({ lyricsData: json })
      
    } catch(err) {
        console.log('-- Error fetching --')
        console.log(err.message)
        // You may want to display an error to the screen here. 
      }
  }

  handleSubmit(e) {
    e.preventDefault();
    const apikey = process.env.REACT_APP_LYRICS_API_KEY
    const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=Stay&q_artist=Alessia%20&apikey=${apikey}`
    this.getLyricData(url)
  }

  renderLyrics() {
    const lyrics_data = this.state.lyricsData
    console.log(lyrics_data)
    if (lyrics_data !== null){
      const {lyrics_body} = lyrics_data.message.body.lyrics
      console.log(lyrics_body)
      return lyrics_body
    } 
    return 'loading'
  }


  render() {
    return (
      <div>
        <button onClick = {(e) => this.handleSubmit(e)}></button>
        <p>{this.renderLyrics()}</p>
      </div> 
    )
  }
}

export default Lyrics;
