const fs = require('fs')
const command = process.argv[2];
const input = process.argv[3];
const spotifyThisSong = require("./spotify.js");
const bandsInTown = require("./bands.js");
const movieThis = require("./movie.js");
// const doWhatItSays = require("./says.js")

main(command, input)

function main (command, input) {
    switch (command) {
        case "concert-this":
            bandsInTown(input);
            console.log('bands in town', input)
            break;
        case "spotify-this-song":
            spotifyThisSong(input);
            console.log('spotify this song', input)
            break;
        case "movie-this":
            movieThis(input);
            console.log('movie this', input)
            break;
        case "do-what-it-says":
            console.log('do what it says')
            doWhatItSays();
            break;
    
        default: console.log(
            "\n"
            + "type one of the following commands AFTER node liri.js" + "\n"
            + "concert this" + "\n"
            + "spotify-this-song 'insert song title'" + "\n"
            + "movie-this 'anymovie title'" + "\n"
            + "do-what-it-says" + "\n"
            );
    }
}


function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(err, data) {
		if (err) {
			return console.error(err);
        } 
        var randomArray = data.split(",");
        action = randomArray[0];
        argument = randomArray[1];
        main(action, argument)
	});
}