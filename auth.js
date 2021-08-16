/* Spoti-cli client authorization server 
    Silvio Santoriello 2021
*/

const express = require('express');
const path = require('path');
const open = require('open');
const fs = require('fs');
const prompt = require('prompt');
prompt.start();


exports.startServer = function () {
    const app = express();
    const port = process.env.PORT || 8888;

    //Start server
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/', 'auth.html'));
    });

    app.get('/callback', function (req, res) {
        token = req.query.code;
        fs.writeFileSync('token.txt', token);
        process.exit(1);
    });

    app.listen(port);
    open("https://accounts.spotify.com/authorize?client_id=6ec2cafb7a25488e813f0359a4bd9ff5&response_type=token&redirect_uri=http://localhost:8888&scope=user-read-playback-state,user-modify-playback-state");
}
