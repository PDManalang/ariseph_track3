import React from "react";

//CSS
import './Summary.css'

function Summary({project}) {
  return (
        <div class="card">
          <div class="card-title">
            <h2>{project.title}</h2>
          </div>
          <div class="card-body">
            Posted by {project.authorFirstName} {project.authorLastName}{" "}
          </div>
        </div>
  );
}

export default Summary;