import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

//Components
import AnnounceList from './post/announceList';

//CSS
import './css/Dashboard.css'


class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <>
        <section id="main-dashboard-content">
          <section id="grid-container">
            <div class="grid-item one">
                <AnnounceList projects={projects} />
            </div>
            <div class="grid-item two">Item 2</div>
            <div class="grid-item three">Item 3</div>
            <div class="grid-item four">Item 4</div>
          </section>
        </section>
      </>
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