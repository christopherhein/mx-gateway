var express = require('express')
  , partialResponse = require('express-partial-response')
  , request = require('request')
  , app = express();

app.use(partialResponse());


app.get('/v1/laptimes/:track', function(req, res) {
  request('http://'+process.env.LAPTIMES_HOST+":"+process.env.LAPTIMES_PORT+'/laptimes/'+req.params.track, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      json = JSON.parse(body)
      res.json(json);
    } else {
      console.log(error);
      res.status(404);
    }
   });
})

app.get('/v1/tracks', function(req, res) {
  request('http://'+process.env.TRACKS_HOST+":"+process.env.TRACKS_PORT+'/tracks', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      json = JSON.parse(body)
      res.json(json);
    } else {
      console.log(error);
      res.status(404);
    }
   });
})

app.get('/v1/tracks/:track', function(req, res) {
  request('http://'+process.env.TRACKS_HOST+":"+process.env.TRACKS_PORT+'/tracks/'+req.params.track, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      json = JSON.parse(body)
      res.json(json);
    } else {
      console.log(error);
      res.status(404);
    }
   });
})

app.listen(4000);
