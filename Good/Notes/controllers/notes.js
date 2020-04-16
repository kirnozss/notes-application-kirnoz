
const NotesModel = require('../models/notes');


const index = (req, res) => {

    NotesModel.find().then((err, notes) => {
        if (err) {
            res.send(err);
        }
        res.json(notes);
    });
};

const create = (req, res) => {
    const data = req.body;

    const notes = new NotesModel({
        title: data.title,
        text: data.text
    });

    notes.save().then(() => {
        res.send({ status: 'ok' });
    });
};

const read = (req, res) => {
    NotesModel.findOne({ _id: req.params.id }).then(notes => {
        if (!notes) {
            res.send({ error: 'not found' });
        } else {
            res.json(notes);
        }
    });
}

const update = (req, res) => {
    NotesModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
        if (err) {
            res.send(err);
        }
        res.json({ status: 'updated' });
    });
};

const deleted = (req, res) => {
    NotesModel.remove({
        _id: req.params.id
    }).then(notes => {
        if (notes) {
            res.json({ status: 'deleted' });
        } else {
            res.json({ status: 'error' });
        }
    });
};


module.exports = {
    index,
    create,
    read,
    update,
    deleted
};