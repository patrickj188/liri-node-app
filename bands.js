let artist = process.argv[3];

const request = require("request");
require('moment');

module.exports = function bandsInTown() {

    let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryUrl, function (error, response, body) {

        if (!error) {
            const myBandData = JSON.parse(body);
            const bandEvent = myBandData[0];
            const queryUrlResults =
                "Band: " + artist + "\n" +
                "city: " + bandEvent.venue.city + "\n" +
                "Venue: " + bandEvent.venue.name + "\n";

            return console.log(queryUrlResults);


        } else {
            console.log("error: " + error);
            return;
        };
    });
}


