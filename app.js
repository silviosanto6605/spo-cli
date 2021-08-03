const client = require('./client');

if (process.argv.length == 2) {
  client.getSongInfo();
}

//get args from command line
switch (process.argv[2]) {
    case 'play':
        client.play();
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


}





    //TODO: Richiedere autorizzazioni maggiori a spotify, effettuare richieste http
