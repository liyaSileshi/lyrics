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
      // console.log(json)
      // return json
      console.log(this.state.lyricsData)
      this.setState({ lyricData: json })
      console.log(this.state.lyricsData)
  
      // this.setState({ weatherData: json , isLoading: false})
  
  
    } catch(err) {
        // If there is no data 
      //  this.setState({ weatherData: null, errorMessage: err.message }) // Clear the weather data we don't have any to display
        // Print an error to the console. 
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

  render() {
    const lyrics_data = this.state.lyricsData
    // const {lyrics} = lyric_data[0]
    console.log(lyrics_data)
    return (
      <div>
        <button onClick = {(e) => this.handleSubmit(e)}></button>
      </div>
      
    )
  }

}





export default Lyrics;
