import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'
import moment from 'moment'

import './announceDetails.css';
import ArchiveList from '../archive/ArchiveList';

function AnnounceDetails(props, {projects}) {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (project) {
    return (
      <>
        <div class="post-header content-container">
          <h5 class="post-typing"> {project.title} </h5>
          <div className="post-sub">Posted by {project.authorFirstName} {project.authorLastName}{" "}</div>
          <div className="post-sub">{moment(project.createdAt.toDate()).calendar()}</div>
        </div>

          <div className="row2">
            <div className="left content">
              <div className="leftTopContent">
                <div className="post-content" dangerouslySetInnerHTML={{__html: project.content}}></div>
              </div>
            </div>

              
            <div className="right">
              <div className="content recent">
                <h2>Notices</h2> 
                <ArchiveList projects={projects} />
              </div>
              <div className="content">
                <h2>Engagements</h2> 
                <div id="visits"><i class="fas fa-eye"></i>...views</div>
              </div>
            </div>
          </div>
      </>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] }
  ])
)(AnnounceDetails);
