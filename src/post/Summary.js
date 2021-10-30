import React from "react";

//CSS
import './Summary.css'

function Summary({project}) {
  return (
    <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-header">
          <h1>{project.title}</h1>
        </div>
        <div class="card-body">
          Posted by {project.authorFirstName} {project.authorLastName}{" "}
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Summary;