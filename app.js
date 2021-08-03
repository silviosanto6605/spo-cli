const client = require('./client');
var isShuffled = false;

if (process.argv.length == 2) {
    client.basicSongInfo();
}

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

    case 'unshuffle':
        client.shuffle("false");
        break;


}





//TODO: Richiedere autorizzazioni maggiori a spotify, effettuare richieste http