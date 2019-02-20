

// const liriReturn = process.argv[2];
let artist = process.argv[3];

const request = require("request");

module.exports = function bandsInTown() {

    let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error) {
            const myBandData = JSON.parse(body);
            const bandEvent = myBandData[0];
            // let bandTime = bandEvent.datetime;
            // let dateTime = moment(bandTime).format("MMM Do YY"); 
            const queryUrlResults =
                "Band: " + artist + "\n" +
                "city: " + bandEvent.venue.city + "\n" +
                "Venue: " + bandEvent.venue.name + "\n";
                // "Date: "  + dateTime;

            return console.log(queryUrlResults);


        } else {
            console.log("error: " + error);
            return;
        };
    });
}


