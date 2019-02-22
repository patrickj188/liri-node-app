const fs = require("fs");
require("./spotify.js");


module.exports = function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {

    //THIS SPLITS ALL THE INFORMATIOM INSIDE 
    data = data.split(',');

    var command;
    var parameter;

    for (var i = 0; i < data.length; i++) {
      result = data[i];
    }
    if (data.length == 2) {
      command = data[0];
      parameter = data[1];
      // console.log(command);
      // console.log(parameter);
    }
    // PRINTS THE CONTENTS OF DATA WHICH IS IN RESULT 
    //console.log(result);

    if (result != false) {
      parameter = parameter.replace('"', '');
      parameter = parameter.replace('"', '');
      // console.log(parameter);

      switch (command) {
        case "concert-this":
          bandsInTown();
          break;
        case "spotify-this-song":
          spotifyThisSong();
          break;
        case "movie-this":
          movieThis();
          break;
      }
    }
  });

  //THIS SPLITS ALL THE INFORMATIOM INSIDE 
  data = data.split(',');

  var command;
  var parameter;

  for (var i = 0; i < data.length; i++) {
    result = data[i];
  }
  if (data.length == 2) {
    command = data[0];
    parameter = data[1];
    // console.log(command);
    // console.log(parameter);
  }
  // PRINTS THE CONTENTS OF DATA WHICH IS IN RESULT 
  //console.log(result);

  if (result != false) {
    parameter = parameter.replace('"', '');
    parameter = parameter.replace('"', '');
    // console.log(parameter);

    switch (command) {
      case "concert-this":
        bandsInTown();
        break;
      case "spotify-this-song":
        spotifyThisSong();
        break;
      case "movie-this":
        movieThis();
        break;
    }
  }
}