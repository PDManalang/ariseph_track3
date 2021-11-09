import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../store/actions/projectActions'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';

import './createAnnounce.css'

export class createAnnounce extends Component {

    state ={
        title:'',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createProject(this.state)
    }

    handleCkeditorState=(e, editor) =>{
        const data = editor.getData();
        this.setState({
            content: data
        })
        console.log(data);
    }

    render() {
        return (
            <div className="post-container">
                <form onSubmit= {this.handleSubmit} className="white">
                    <h5 className="heading">Create New Post</h5>
                    <div className="input-field">
                        <label htmlFor="title" className="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content" className="content">Description</label>

                        {/* <textarea id="content" className="content-textarea" value="{this.state.content}" onChange={this.handleChange}></textarea> */}

                        <CKEditor
                        editor={ClassicEditor}
                        onInit={ editor =>{
                        }}

                        onChange={this.handleCkeditorState}
                        />

                    </div>
                    <div className="input-field">
                        <button className="btn">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(createAnnounce)