# malicsi
## CMSC 128 2nd Semester AY 2016-2017

## How to Install

`npm install` 


## How to build
### For development
`npm run build`
### For production
`webpack -p`

## How to run Server
Assuming you have MySQL:
### For development
`npm start`
### For production
Install `pm2` first globally (`sudo npm install -g pm2`), then run:

`PORT=80 pm2 start src/server/server.js`

## How to load Initial Data
You must first run the server for development, then run:
1. `mysql -u root -p < src/server/malicsi.sql`
3. `npm start`
2. `npm run seed`

This will prompt you for your MySQL's root password to continue.