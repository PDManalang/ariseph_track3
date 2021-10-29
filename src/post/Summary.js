import React from "react";

//CSS
import './Summary.css'

function Summary({project}) {
  return (
    <div className="card">
      <div>
        <span className="card_title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">time and date created</p>
        {/* no idea how to get the timestamp */}
      </div>
    </div>
  );
}

export default Summary;