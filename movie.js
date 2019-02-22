const movieName = process.argv[3];
console.log(movieName);
const request = require("request");
module.exports= function movieThis() {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=babcdc33";

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var myMovieData = JSON.parse(body);
            var queryUrlResults =
                "Title: " + myMovieData.Title + "\n" +
                "Year: " + myMovieData.Year + "\n" +
                "IMDB Rating: " + myMovieData.Ratings[0].Value + "\n" +
                "Rotten Tomatoes Rating: " + myMovieData.Ratings[1].Value + "\n" +
                "Origin Country: " + myMovieData.Country + "\n" +
                "Language: " + myMovieData.Language + "\n" +
                "Plot: " + myMovieData.Plot + "\n" +
                "Actors: " + myMovieData.Actors + "\n"
            console.log(queryUrlResults);
        } else {
            console.log("error: " + err);
            return;
        };
    });
}

