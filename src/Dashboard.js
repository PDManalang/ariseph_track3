import React, { Component } from "react";
import AnnounceList from './announcement/announceList';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

//CSS
import './css/Dashboard.css'


class Dashboard extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="dashboard">        
        <div className="post_card">
          <AnnounceList projects={projects} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)