import data from './spotify.json'


const song_artist = data.map((song) => {
  return song.artist
})

const artist_set = new Set(song_artist) //    gives only unique artists

const uniqueArtists = Array.from(artist_set) //converts unique artist to Array

//object containing keys as artist in lowercase and value = original case
const artistObject = uniqueArtists.reduce((obj, artist) => {
  obj[artist.toLowerCase()] = artist
  return obj
}, {})
console.log(artistObject)


// Make an Object whose keys are the names of
// categories and whose values are the number of times that
// category appears in the data.
const artistWithCount = data.reduce((obj, song) => {
  // check if cat exists as a key in an object
  if (obj[song["top genre"]] !== undefined){
      //if so add
      obj[song["top genre"]] += 1
  }else{
      // set this key with a value of 1
      obj[song["top genre"]] = 1
  }
  return obj
  }
  ,{})  //initial value of object is {}




// randomly choose a singer and a song
const getRandomSinger = () => {
  const song = data[Math.floor(Math.random() *data.length)]
  return [song.title, song.artist]
}


export default data
export {song_artist, getRandomSinger, uniqueArtists, artistObject}
