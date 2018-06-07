console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

//notes.addNote("John", 22);
notes.addNote("Sam", 25);

console.log(notes.readNotes());
