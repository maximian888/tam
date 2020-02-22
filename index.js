var express = require('express');
var app = express();
var fs = require('fs');
var jws = require('jws');

//set content-type to application/teep+json
app.use(function(req, res, next) {
    res.setHeader("Content-Type", "application/teep+json");
    next();
});

//root site - workzone
app.all('/', function (req, res) {
	//read private key
	var privateKey = fs.readFileSync('keys/rsa.private');
	
	//create and sign jws 
	var json = jws.sign({
		header: { alg: 'RS256' },
		payload: {type: 'QueryRequest', token: create_token(7), request: 'AskingTAM'},
		secret: privateKey,
	});
	
	//decode jws 
	var decode = jws.decode(json);
	
	//display jws 
	res.send(decode);
});

//root site - workzone curl 
app.all('/tam', function (req, res) {
	//read private key
	var privateKey = fs.readFileSync('keys/rsa.private');
	
	//create and sign jws 
	var json = jws.sign({
		header: { alg: 'RS256' },
		payload: {type: 'QueryRequest', token: create_token(7), request: 'AskingTAM'},
		secret: privateKey,
	});
	
	//display jws 
	res.send(json);
});

//display message server is running
app.listen(7777, function () {
  console.log('TAM-Server running on port 7777!');
});

//create token
function create_token(length) {
   var token           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!§$%&/(){}[]';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return token;
}
