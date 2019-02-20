const fs = require("fs");

module.exports = function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        }else{
        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);
      
      }

})

};