console.log('Starting notes.js');
const fs = require('fs');

var addNote = (name, age) => {
  var notesArray = [];
  try{
    notesArray = readNotes();
  }catch(e){
    console.log('Error', e);
  }

  var newNote = {
    "name" : name,
    "age" : age
  };
  notesArray.push(newNote);
  fs.writeFileSync('notes-json', JSON.stringify(notesArray));
};

var readNotes = ()=>{
  var res = fs.readFileSync('notes-json');
  return JSON.parse(res);
};

module.exports = {
  addNote,
  readNotes
};
