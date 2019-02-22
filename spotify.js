require('dotenv').config();
require("fs")
const userQuery = process.argv[3];



const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const doWhatItSays = require("./says.js")

module.exports = function spotifyThisSong() {

    if (!userQuery) { userQuery = "the sign" };
    spotify.search({ type: "track", query: userQuery, limit: 1 },
        function (err, data) {
            if (err) { return console.log('Error occurred: ' + err); } else {
                let spotifyArr = data.tracks.items;
                // console.log(spotifyArr);
                for (i = 0; i < spotifyArr.length; i++) {
                    console.log(" ");
                    console.log(" ");
                    console.log(`Song: ${data.tracks.items[i].name}\nArtist(s): ${data.tracks.items[i].artists[0].name}\nAlbum: ${data.tracks.items[i].album.name}\nPreview Link: ${data.tracks.items[i].external_urls.spotify}`)
                    console.log(" ");
                }
            }
        })
}




