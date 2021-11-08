import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../store/actions/projectActions'

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
                        <label htmlFor="content" className="content"> Description </label>
                        <textarea id="content" className="content-textarea" onChange={this.handleChange}></textarea>
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