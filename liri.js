require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");

var userChoice = process.argv[2];
var searchQuery = process.argv.slice(3).join(" ");
console.log(searchQuery);


switch (userChoice) {
  case "concert-this":
    musicLive();
    console.log("concert");
    break;
  case "spotify-this-song":
    //  playNow();
    console.log("spotify");
    
    break;
  case "movie-this":
    console.log("movie");
    break;
  case "do-what-it-says":
//   need switch function, call
    console.log("whatever");
    break;
  default:
    console.log("please enter something");
    break;
}
function musicLive () {
    var url = "https://rest.bandsintown.com/artists/" + searchQuery + "/events?app_id=" + keys.bands.id;
    axios.get(url).then(function(res){
        var results = res.data
        if (!results.length){
            console.log("no up coming concerts for " + searchQuery);
            return
        }
        console.log("upcoming concerts for " + searchQuery);
         for (var i = 0; i < results.length; i++) {
             console.log("--------------------------");
             
             var show = results[i]
             console.log("venue: " + show.venue.name); 
             console.log("location: " + show.venue.city + ", " + show.venue.region + ", " + show.venue.country + "");
             console.log("date: show" + show.datetime);
             
             
             
         }
    
        
    })


}
// playNow () 
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
    // console.log(response);
//   })
//   .catch(function(err) {
    // console.log(err);
//   });
