require('dotenv').config();

require('moment');
const fs = require("fs");
const request = require("request");
const liriReturn = process.argv[2];
const spotifyThisSong = require("./spotify.js");
const bandsInTown = require("./bands.js");
const movieThis = require("./movie.js");
// const doWhatItSays = require("./says.js")

switch (liriReturn) {
    case "concert-this":
        bandsInTown();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;

    default: console.log(
        "\n"
        + "type one of the following commands AFTER node liri.js" + "\n"
        + "concert this" + "\n"
        + "spotify-this-song 'insert song title'" + "\n"
        + "movie-this 'anymovie title'" + "\n"
        + "do-what-it-says" + "\n");
};


function doWhatItSays( action, argument) {

	fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) {
			logOutput.error(err);
		} else {
			var randomArray = data.split(",");
			action = randomArray[0];
            argument = randomArray[1];
            
        console.log(action + " " + argument)
		}
	});
}




