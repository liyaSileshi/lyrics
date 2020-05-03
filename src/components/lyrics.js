import React, {Component} from 'react';

class Lyrics extends Component{
  constructor(props) {
      super(props)
      this.state = {lyricsData : null,
                    artist: '',
                    song: ''}
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
    const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&callback=callback&q_track=${this.state.song}&q_artist=${this.state.artist}%20&apikey=${apikey}`
    this.getLyricData(url)
  }

  renderLyrics() {
    const lyrics_data = this.state.lyricsData
    console.log(lyrics_data)
    if (lyrics_data !== null){
      const {lyrics_body} = lyrics_data.message.body.lyrics
      let lines = lyrics_body.split('\n')
      console.log('before')
      console.log(lines)
      // remove the last 4 elts in the lines array
      lines.splice(lines.length - 4)
      // filter out elts with empty strings
      lines = lines.filter((line) => {
        return line !== ""
      })
      // replaced regEx with empty space
      lines = lines.map((line) => {
        return line.replace(/[|&;$%@"<>()+,]/g, "");
      })
      
      console.log('after')
      console.log(lines)
      //get a random elt from the lines array
      const randomline = lines[Math.floor(Math.random() *lines.length)];
      console.log(randomline)
      // const [first_line] = lyrics_body.split('\n')
      return randomline
    } 
    return 'loading'
  }


  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input 
            value={this.state.artist} 
            onChange={e => this.setState({ artist: e.target.value })}
            type="text" 
            placeholder="enter artist"
          />
          <input 
            value={this.state.song} 
            onChange={e => this.setState({ song: e.target.value })}
            type="text" 
            placeholder="enter song"
          />

          <button className='submit-btn' type="submit">Generate Lyrics</button>

        </form>
        <p>{this.renderLyrics()}</p>
      </div> 
    )
  }
}

export default Lyrics;
