const fs = require('fs');
//read token in token.txt
var code = fs.readFileSync('token.txt', 'utf8');
const axios = require('axios');
console.log(code);
axios.defaults.headers.common['Authorization'] = `Bearer ${code}`;

switch (process.argv[2]) {

    case 'play':
        play(code);
        break;
    case 'pause':
        pause(code);
        break;
    case 'next':
        next(code);
        break;
    case 'prev':
        prev(code);
        break;

}


function play(code) {
    axios.put('https://api.spotify.com/v1/me/player/play')


}
function pause(code) {
    axios.put('https://api.spotify.com/v1/me/player/pause')

}
function next(code) {
    
    axios.post('https://api.spotify.com/v1/me/player/next')
    

}
function prev(code) {

    
    axios.post('https://api.spotify.com/v1/me/player/previous')
}


//TODO: Richiedere autorizzazioni maggiori a spotify, effettuare richieste http
