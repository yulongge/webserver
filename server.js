var express = require('express');
const bodyParser = require('body-parser');
var app = express();

//app.get('/', function(req, resp) {
	//resp.send('Hello World');
//});
//app.set("view engine", 'html');
//app.set('views', __dirname + '/');
//app.use(express.static(__dirname + 'public'));
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.use(express.static('./public'));
	

app.listen(3000, function() {
	console.log('this web server listening on port 3000');
});

