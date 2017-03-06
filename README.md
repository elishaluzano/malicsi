# malicsi
### CMSC 128 2nd Semester AY 2016-2017
***
### How to install
Run `npm install`. If semantic-ui doesn't install, run `sudo npm install -g gulp` and try installing again.

***
### How to run
1. On one terminal, run `npm run build`
2. On another terminal, run `npm start`

***
### Project Directory
```javascript
dist/
node_modules/
src/
---- client/
-------- assets/
-------- other_folders/
-------- app.js
-------- index.html
---- server/
-------- controllers
-------- test/
-------- server.js
---- vendor.js
```
* **dist/** - will contain all static files that will be produced by webpack
* **node_modules/** - contains all modules installed through npm
* **src/** - all source files, we code here
    * **client** - front-end code, angularJS
        * **assets/** - other static files eg. images, sound, etc
        * **index.html** - single page app
    * **server/** - back-end code
        * **controllers/** - functions to be defined per data entity
        * **routes/** - mapping of functions to API endpoints
        * **test/** - test code
        * **server.js** - server entry point file
    * **vendor.js** - all 3rd party libraries needed by front-end will be required here



