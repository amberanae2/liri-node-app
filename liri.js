

require("dotenv").config();

var keys = require('./keys.js');
var request= require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var fs = require('fs');


var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var liriCommand = process.argv[2];




/// add switch here
 switch(liriCommand) {
     case "my-tweets":
     myTweets();
     break;

     case "spotify-this-song":
     artistName();
     break;

     case "movie-this":
     myMovie();
     break;

     case "do-what-it-says":
     randomPick();
     break;
 }


///function here
 
 function myTweets() {
     
 

var params = {screen_name: 'Barbie_girl254'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    for(i=1;i<tweets.length;i++){
    console.log("Barbie Tweeted: " + tweets[i].text);

    }
});
 }
function artistName (songName) {
    if (songName === undefined) {
        songName = "Die Young";

    }
    spotify.search(
        {
            type:"track",
            query: songName
        },
        function(err,data) {
            if (err) {
                console.log("error occurred:" + err);
                return;

            }
      var songs = data.tracks.items[0];
      console.log(songs);
     
      for (var i = 0; i < songs.length; i++) {
          console.log(i);
          console.log("artist : " + songs[i].artist.map(artistName));
          console.log("song name: " + songs[i].name);
          console.log("album: " + songs[i].album.name);
      }
    });
}

      
  function myMovie(movie){
  var queryUrl = "http://www.omdbapi.com/?t=Lion+King&y=&plot=short&apikey=trilogy"


console.log(queryUrl);

request(queryUrl, function(error, response, body) {
   if (!error && response.statusCode === 200) {
       var body=JSON.parse(body).Year
       console.log("Title:" + body.Title);
       console.log("Release Year: " + body.Year);
       console.log("Rating: " + body.Rating);
       console.log("Country:" + body.Country);
       console.log("Language:" + body.Language);
       console.log("Plot: " + body.Plot);
       console.log("Actors:" + body.Actors);

}    
      else {
        console.log('Error occurred.')
}
});
}

  function randomPick(random) {
    fs.readFile('random.txt', "utf8", function(error, data){
        var txt = data.split(',');
    
        spotifySong(txt[1]);
      });
  }
  




