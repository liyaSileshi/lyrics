import data from './spotify.json'


const song_title = data.map((song) => {
    // console.log(song.title)
    return song.artist
})

const song_title_set = new Set(song_title) //    gives only unique songs
const artist_unique = Array.from(song_title_set)
console.log(artist_unique)


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
console.log(artistWithCount)

export default data
export {song_title}
