import React from "react";
import moment from 'moment';

//CSS
import './Summary.css'

function Summary({project}) {
  return (
        <div class="card">
          <div class="card-title">
            <h2>{project.title}</h2>
          </div>
          <div class="card-body">
            <p>Posted by {project.authorFirstName} {project.authorLastName}{" "}</p>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
  );
}

export default Summary;