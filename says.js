const fs = require("fs");
require("./spotify.js");


module.exports = function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    data = data.split(',');
    const command;
    const parameter;

    for (var i = 0; i < data.length; i++) {
      result = data[i];
    }
    if (data.length == 2) {
      command = data[0];
      parameter = data[1];
    }

    if (result != false) {
      parameter = parameter.replace('"', '');
      parameter = parameter.replace('"', '');
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

  data = data.split(',');
  const command;
  const parameter;
  for (var i = 0; i < data.length; i++) {
    result = data[i];
  }
  if (data.length == 2) {
    command = data[0];
    parameter = data[1];

  }
  if (result !== false) {
    parameter = parameter.replace('"', '');
    parameter = parameter.replace('"', '');
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