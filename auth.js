/* spo-cli client authorization server 
    Silvio Santoriello 2021
*/

const express = require('express');
const path = require('path');
const open = require('open');
const fs = require('fs');
const prompt = require('prompt');
const os = require('os');
const tokenPath = path.join(os.tmpdir(),"token.txt");
prompt.start();

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=6ec2cafb7a25488e813f0359a4bd9ff5&response_type=token&redirect_uri=http://localhost:8888&scope=user-read-playback-state,user-modify-playback-state"

exports.startServer = function () {
    const app = express();
    const port = process.env.PORT || 8888;

    //Start server
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/', 'auth.html'));
    });

    app.get('/callback', function (req, res) {
        token = req.query.code;
        fs.writeFileSync(tokenPath, token);
        process.exit(1);
    });

    app.listen(port);
    console.log("You need to authorize the app to access your Spotify account. If browser does not open automatically, go to\n" + AUTH_URL+"\n");
    open(AUTH_URL);
}
