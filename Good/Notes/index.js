const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const NotesController = require('./controllers/notes');
const cors = require('cors');

const app = express();

const PORT = config.get('port') || 4000;

// connection to DB
async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.messege);
        process.exit(1);
    }
};

start();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/notes', NotesController.index);
app.post('/notes', NotesController.create);
app.get('/notes/:id', NotesController.read);
app.delete('/notes/:id', NotesController.deleted);
app.put('/notes/:id', NotesController.update);