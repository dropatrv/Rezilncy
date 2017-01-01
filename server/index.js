var express = require('express');
var twitterModule = require('twitter');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 8081));

app.listen(app.get('port'), function() {  
    console.log('app running on port', app.get('port'));
});

app.use(function (req, res, next) {
    console.log(req.path);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method_Override, Content-Type, Accept, spotify_auth_state, Authorization');
    if ('OPTIONS' == req.method) {
        res.status(200).end();
    }
    else {
        next();
    }
});

console.log("DIRECTORY:"+ __dirname);
app.use('/node_modules',express.static(path.join('node_modules')));
app.use(express.static(path.join(__dirname+'/../client')));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

var twitterAPI = new twitterModule({
  consumer_key: 'bkJA5duDMlW672kQn6MZbMvKx',
  consumer_secret: 'G0Sp9xehxFu462LX2t0NAIaWH4dYjxnbqNIOLLAkyG1xDBdrMX',
  access_token_key: '271830662-hDttlj4v5QnxNntXV735tJViHGGyUME8Ma4ogN6n',
  access_token_secret: 'z3qmVhD7imPIL3WrcJBpQclUhpd0KO4gklqTKmhirIKfd'
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/../index.html'));
});

app.get('/search', function(req, res, next) {
	console.log(req.query);
	var queryString = req.query;
  twitterAPI.get('search/tweets', { q: queryString.query}, function(error, tweets, response){
    if(error){
    	console.log(error);
    	throw error;
    } 
    res.send(tweets);
  });
});

