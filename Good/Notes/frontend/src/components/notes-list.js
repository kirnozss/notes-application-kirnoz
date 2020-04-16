import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
    Read,
    Delete,
    Edit

} from './lang'


export default class NotesList extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/notes')
        this.setState({
            notes: res.data
        });
    }


    deleteNote = async (noteId) => {
        await axios.delete('http://localhost:4000/notes/' + noteId);
        this.getNotes();
    }



    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h4>{note.title}</h4>
                                    <Link className="btn btn-dark" to={"/notes/" + note._id}>
                                        <Read />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.text}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>
                                        <Delete />
                                    </button>
                                    <Link className="btn btn-warning" to={"/edit/" + note._id}>
                                        <Edit />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))

                }

            </div>
        );
    }
};

