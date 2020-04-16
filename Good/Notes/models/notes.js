
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    title: String,
    text: String
});

const Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;