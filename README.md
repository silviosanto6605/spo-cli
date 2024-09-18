# spo-cli
A simple Node.JS program to control current playback
<br>
<br>
<br>
<br>

# Requirements
 -  Node version >= Node v20 

<br>
<br>

# Installation

## 📦From npm

Run `npm install -g spo-cli`

## 📃From source

If you want to run it from source, downlaod it simply install all dependencies with npm/yarn (with `yarn install`).

<br>
<br>
<br>

# ❓How does it work

 _The program needs to connect to Spotify API so it needs a valid access token provided after via the Spotify.com website. An ExpressJS web server is disposed in order to recieve the token and the program itself (after having checked its validity) use it to control the playback. If the token is not valid anymore, the user is prompted to authorization again_

 # ⚙️Commands

 The syntax is pretty simple. It's ` node app.js ` or  `spo-cli` (if installed from npm) followed by one of the next arguments. If you grabbed the binaries, execute the program with one of the next arguments.


  ### `play` : resume/play current song
  ### `pause` : pause current song
  ### `next` : skip song
  ### `prev` : go to previous song
  ### `shuffle` : shuffle playback
  ### `vol`/`volume n`  __(where n is an integer between 0 and 100)__: set the volume to the specified value

  ### `reauth` : to authorize again the tool
  <br>
  <br>

  ## _If no argument is specified, the song that is currently playing is displayed_

<br>
<br>
<br>
<br>





