import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";



import './announceDetails.css';

function AnnounceDetails(props) {
  const { project } = props;
  if (project) {
    return (
      <div className="post-container">
        <div className="">
          <div className="card-content">
             {/* title, post author, date */}
            <h5 class="post-title"> {project.title} </h5>
            <div className="post-sub">Posted by {project.authorFirstName} {project.authorLastName}{" "}</div>
            <div className="post-sub">Sample Date</div>
          </div>

          {/* content */}
          <div className="post-content" dangerouslySetInnerHTML={{__html: project.content}}>
          </div>

        </div>
      </div>
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
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(AnnounceDetails);
