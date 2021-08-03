const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk');

var code = fs.readFileSync('token.txt', 'utf8');
axios.defaults.headers.common['Authorization'] = "Bearer " + code;

exports.getSongInfo = function() {
    axios.get('https://api.spotify.com/v1/me/player').then((response) => {
        currentSong = response.data.item.name + " by " + response.data.item.artists[0].name;
        if(response.data.is_playing) {
            console.log(chalk.green("Playing "+currentSong));
        }
        else{
            console.log(chalk.yellow("Paused "+currentSong));
        }
        
    }).catch(err => {
        console.log(chalk.red("ERROR! Check Spotify and/or retry to provide auth code"))
    })

}

exports.play = function(code) {
    axios.put('https://api.spotify.com/v1/me/player/play').then((response) => {
        console.log("Playing/Resuming");
    }).catch(function(error){ {
        if (error.response.status == 401) {
            console.log(chalk.red("ERROR! Check Spotify and/or retry to provide auth code"));
        }
        else if(error.response.status == 403) {
            console.log(chalk.red("ERROR! Song is already playing"));
        }
    }
    })
}

exports.pause = function(code) {
    axios.put('https://api.spotify.com/v1/me/player/pause').then((response) => {
        console.log(chalk.yellow("Pausing"));
    }).catch(function(error){
        if (error.response.status == 401) {
            console.log(chalk.red("ERROR! Check Spotify and/or retry to provide auth code"));
        }
        else if(error.response.status == 403) {
            console.log(chalk.red("ERROR! Song is already paused"));
        }
    })
}

exports.next = function(code) {
    axios.post('https://api.spotify.com/v1/me/player/next').then((response) => {
        console.log("Next song");
    }).catch(err => {
        console.log("ERROR! Check Spotify and/or retry to provide auth code")
    })
}

exports.prev = function(code) {
    axios.post('https://api.spotify.com/v1/me/player/previous').then((response) => {
        console.log("Previous song");
    }).catch(err => {
        console.log("ERROR! Check Spotify and/or retry to provide auth code")
    })
}

