import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { createProject } from '../store/actions/projectActions'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useHistory } from 'react-router';
import Tag from '../tags/Tag';
import './createAnnounce.css'
import ProgressBar from './ProgressBar';
import { Redirect } from "react-router-dom";

function CreateAnnounce () {
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector((state) => state.firebase.auth)
    const [project, setCreateProject] = useState ({
        title: "",
        content: "",
      })

    const [file, setFile] = useState (null);

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.id]: e.target.value
    //     })
    // }

    const handleUpload = (e) => {
        let selected = e.target.files[0];
        if (selected) { 
          setFile(selected);
        } else {
          setFile(null);
        }}

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        dispatch(createProject(project));
        let path = `/`; 
        history.push(path);
    }

    const handleCkeditorState=(e, editor) =>{
        const data = editor.getData();
        setCreateProject({
            ...project,
            content: data
        })
        console.log(data);
    }

    const options = [
        { value: 'disaster', label: 'Disaster Risk Management Strategies' },
        { value: 'educ', label: 'Education and Training' },
        { value: 'urban', label: 'Urban Risk Reduction and Resilience' },
        { value: 'business', label: 'Small and Medium Businesses' },
        { value: 'invest', label: 'Investors and Investments' },
        { value: 'insur', label: 'Insurance' },
        { value: 'infra', label: 'Resilient Infrastructure' },
        { value: 'org', label: 'Organizational Matters' },
        { value: 'proj', label: 'Spacial Projects' }
      ]

    function onChangeInput(value){
        console.log(value);
    }
        
    if (!auth.uid) { return <Redirect to='/signin' /> }
    
        return (
            <div className="post-container">
                <form onSubmit= {handleSubmit} className="white">
                    <h5 className="heading">Create New Post</h5>
                    <div className="input-field">
                        <label htmlFor="title" className="create-title">Title</label>
                        <input type="text" id="title" onChange={(e) => setCreateProject({...project,title: e.target.value})}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content" className="create-label">Description</label>

                        {/* <textarea id="content" className="content-textarea" value="{this.state.content}" onChange={this.handleChange}></textarea> */}

                        <CKEditor
                        editor={ClassicEditor}
                        config={{
                            toolbar: [ 'bold', 'italic', '|', 'undo', 'redo', '|', 'numberedList', 'bulletedList', '|', 'Link' ]
                          }}
                        onInit={ editor =>{
                        }}

                        onChange={handleCkeditorState}
                        />
                    </div>


                    <input
                        type="file"
                        onChange={handleUpload}
                        //style={{ opacity: 0, position: "absolute", left: "-9999px" }}
                        />
                    

                        {/* </label> */}

                    <div className="output">
                    { file && <div> { file.name } </div> }
                    { file && <ProgressBar file={file} setFile={setFile} /> }
                    </div>
                    
                    <div className="tag">
                    <label htmlFor="content" className="create-label">Add a Tag</label>
                        <Tag options={options} defaultValue="Select..." onChange={onChangeInput} isMulti={true} />
                    </div>

                    <div className="input-field">
                        <button className="btn">Create</button>
                    </div>
                </form>
            </div>
        )
    }


const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAnnounce)