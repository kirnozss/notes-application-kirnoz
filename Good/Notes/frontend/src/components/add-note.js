import React, { Component } from 'react';
import axios from 'axios';

import {
    CreateNote,
    SaveNote

} from './lang'

export default class AddNotes extends Component {
    state = {
        title: '',
        text: '',
        notes: [],
        editing: false,
        _id: ''
    }
    
    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/notes');
        this.setState({ notes: res.data })
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/notes/' + this.props.match.params.id);
            this.setState({
                title: res.data.title,
                text: res.data.text,
                editing: true,
                _id: this.props.match.params.id
            })
        }
    }


    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            text: this.state.text
        };
        if (this.state.editing) {
            await axios.put('http://localhost:4000/notes/' + this.state._id, newNote);
        } else {
            const res = await axios.post('http://localhost:4000/notes', newNote);
        }
        window.location.href = "/";

    }

    onInpuChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h3><CreateNote /></h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Title" name="title" onChange={this.onInpuChange} value={this.state.title} required />
                        </div>
                        <div className="form-group">
                            <textarea name="text" className="form-control"
                                placeholder="Content" onChange={this.onInpuChange} value={this.state.text} required />
                        </div>

                        <button type="submit" className="btn btn-success " >
                            <SaveNote />
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};

