const axios = require('axios');
const fs = require('fs');
const chalk = require('chalk');
const {
    type
} = require('os');


var code = fs.readFileSync('token.txt', 'utf8');
axios.defaults.headers.common['Authorization'] = "Bearer " + code;



exports.basicSongInfo = function () {
    axios.get('https://api.spotify.com/v1/me/player').then((response) => {
        currentSong = response.data.item.name + " by " + response.data.item.artists[0].name;
        if (response.data.is_playing) {
            console.log(chalk.green("Playing: " + chalk.bold(currentSong)));
        } else {
            console.log(chalk.yellow("Paused " + chalk.bold(currentSong)));
        }

    }).catch(err => {
        console.log(chalk.red("ERROR! Check Spotify and/or retry to provide auth code"))
    })

}
exports.play = function () {
    axios.put('https://api.spotify.com/v1/me/player/play').then((response) => {
        console.log("⏵Playing/Resuming⏵");
    }).catch(function (error) {
        {
            if (error.response.status == 401) {
                console.log(chalk.red("ERROR! Spotify is not running or auth code is expired"));
            } else if (error.response.status == 403) {
                console.log(chalk.red("ERROR! Song is already playing"));
            }
        }
    })
}

exports.pause = function () {
    axios.put('https://api.spotify.com/v1/me/player/pause').then((response) => {
        console.log(chalk.yellow("⏸ Pausing ⏸"));
    }).catch(function (error) {
        if (error.response.status == 401) {
            console.log(chalk.red("ERROR! Spotify is not running or auth code is expired"));
        } else if (error.response.status == 403) {
            console.log(chalk.red("ERROR! Song is already paused"));
        }
    })
}

exports.next = function () {
    axios.post('https://api.spotify.com/v1/me/player/next').then((response) => {
        console.log(chalk.white("⏭ Next song ⏭"));

    }).catch(function (error) {
        if (error.response.status == 401) {
            console.log(chalk.red("ERROR! Spotify is not running or auth code is expired"));
        } else if (error.response.status == 403) {
            console.log(chalk.red("ERROR! Song cannot be skipped"));
        }
    })
}

exports.prev = function () {
    axios.post('https://api.spotify.com/v1/me/player/previous').then((response) => {
        console.log(chalk.white("⏮ Previous song ⏮"));

    }).catch(function (error) {
        if (error.response.status == 401) {
            console.log(chalk.red("ERROR! Spotify is not running or auth code is expired"));
        } else if (error.response.status == 403) {
            console.log(chalk.red("ERROR! Song cannot be skipped"));
        }
    })

}
exports.shuffle = function (state) {
    axios.put('https://api.spotify.com/v1/me/player/shuffle?state=' + state.toString()).then((response) => {
        if (state == "true") {
            console.log(chalk.green("🔀 Shuffle on 🔀"));
        }
        else if (state == "false") {
            console.log(chalk.red("🔀 Shuffle off 🔀"));
        }

    }).catch(function (error) {
        if (error.response.status == 401) {
            console.log(chalk.red("ERROR! Spotify is not running or auth code is expired"));
        } else if (error.response.status == 403) {
            console.log(chalk.red("ERROR! Song cannot be skipped"));
        }
    })

}