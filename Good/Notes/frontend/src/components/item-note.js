import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Back
} from './lang'

export default class ItemNote extends Component {
    state = {
        notes: [],
        title: '',
        text: '',
        _id: ''
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost:4000/notes/' + this.props.match.params.id)
        this.setState({
            notes: res.data
        });

    }


    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header text-center">
                        <h2> {this.state.notes.title} </h2>
                    </div>
                    <div className="card-body text-justify">
                        <p>{this.state.notes.text}</p>

                    </div>
                    <div className="card-footer d-flex justify-content-between">

                        <Link className="btn btn-dark " to={"/"}>
                            <Back />
                        </Link>

                    </div>
                </div>


            </div>
        );


    }
};

