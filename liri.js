import { SSL_OP_CIPHER_SERVER_PREFERENCE } from "constants";

require("dotenv").config();

var keys = require('./keys.js');
var request= require('request');
var twitter = require('twitter');
var spotify = require('spotify');
var fs = require('fs');

var nodeargv = process.argv;
var command = process.argv[2];

var sample = '';

//// put in argument here,multiple parameters may be needed.


/// add switch here
 switch(nodeargv) {
     case "my-tweets":
     myTweets();
     break;

     case "spotify-this-song":
     myPlaylist();
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
     twiterUser.get('search/tweets' , {q:'somethinghere', count: 20}, function(err , data){

     }
    )
}

//// do thing function needs to be here 



