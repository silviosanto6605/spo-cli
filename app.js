#!/usr/bin/env node

/* Spo-cli app
    Silvio Santoriello 2024
*/
const axios = require('axios');
const fs = require('fs');
const os = require('os');
const path = require('path');
const tokenPath = path.join(os.tmpdir(),"token.txt");
const {
    response
} = require('express');
var code;

// Check that the file exists locally
if (!fs.existsSync(tokenPath)) {
    console.log("File not found");
    fs.writeFileSync(tokenPath, 'placeholder', 'utf8');
}

// The file *does* exist
else if (fs.existsSync(tokenPath)) {
    code = fs.readFileSync(tokenPath, 'utf8');
    axios.defaults.headers.common['Authorization'] = "Bearer " + code;
}

/*After creating/updating token, import client and authorization files*/

const client = require('./client');
const auth = require('./auth');

//Check if token is valid and can coneect to the server

axios.get('https://api.spotify.com/v1/me/player').then((response) => {
    if (process.argv.length == 2) {
        client.basicSongInfo();
    } else {
        //get args from command line
        switch (process.argv[2]) {
            case 'play':
                client.play();
                break;
            case 'resume':
                client.resume();
                break;
            case 'pause':
                client.pause();
                break;
            case 'next':
                client.next();
                break;
            case 'prev':
                client.prev();
                break;
            case 'shuffle':
                client.shuffle("true");
                break;

            case 'volume':
                client.volume(process.argv[3]);
                break;
            case 'vol':
                client.volume(process.argv[3]);
                break;

            case 'reauth':
                fs.unlinkSync(tokenPath);
                auth.startServer();
                break;
        }
    }







}).catch(err => {
    console.log("Token is invalid, authorize app again");
    auth.startServer();
});