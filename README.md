# malicsi
### CMSC 128 2nd Semester AY 2016-2017
***
### How to Install
Run `npm install`. If semantic-ui doesn't install, run `sudo npm install -g gulp` first and try installing again.

When setting up semantic-ui, choose the following:
1. Automatic (Use default locations and all components)
2. Is this your project directory? Yes
3. Where should we put Semantic UI inside your project? (semantic/). Just enter.

After installing semantic-ui, delete the `semantic/` and `semantic.json`. We do not need this, we only need the one in node_modules/semantic-ui.

***
### How to Run Server
`npm start`
* runs `nodemon` on src/server/server.js
* `nodemon` is like the `node` command but in watch mode, meaning it will restart itself if it sees any changes in the files.
***
### How to Build the Front-end
`npm run build`
* Uses webpack to build all dependencies starting from src/vendor.js and src/client/app.module.js in watch mode
* Dumps all client-side files into dist/

***
### Project Directory
```javascript
dist/
node_modules/
src/
---- client/
-------- assets/
-------- other_folders/
-------- app.module.js
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
        * **app.module.js** - bootstrap file for AngularJS
        * **index.html** - single page app
    * **server/** - back-end code
        * **controllers/** - functions to be defined per data entity
        * **routes/** - mapping of functions to API endpoints
        * **test/** - test code
        * **server.js** - server entry point file
    * **vendor.js** - all 3rd party libraries needed by front-end will be required here



