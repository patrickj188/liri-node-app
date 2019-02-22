require('dotenv').config();
require("fs")
let userQuery = process.argv[3];

let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let doWhatItSays = require("./says.js")

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




