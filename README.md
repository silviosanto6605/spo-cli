# spoti-cli
## A simple Node.JS program to control current playback
<br>
<br>
<br>
<br>

# Requirements
 - Node v14.17.3
    

## If you just want to use it just grab precompilated binaries [here](https://github.com/silviosanto6605/spoti-cli/releases)
<br>

## If you want to run it from source code simply install all dependencies with ` npm install ` or yarn.
<br>
<br>
<br>

# How does it work

 _The program needs to connect to Spotify API so it needs a valid access token provided after via the Spotify.com website. An ExpressJS web server is disposed in order to recieve the token and the program itself (after having checked its validity) use it to control the playback. If the token is not valid anymore, the user is prompted to authorization again_

 # Commands

 The syntax is pretty simple. If you haven't grabbed the binaries simply type ` node app.js ` followed by one of the next arguments. If you grabbed the binaries, execute the program with one of the next arguments.


  ### `play` : resume/play current song
  ### `pause` : pause current song
  ### `next` : skip song
  ### `prev` : go to previous song
  ### `shuffle` : shuffle playback
  ### `vol`/`volume n`  __(where n is an integer between 0 and 100)__: set the volume to the specified value
  <br>
  <br>

  ## _If no argument is specified, the song that is currently playing is displayed_

<br>
<br>
<br>
<br>





