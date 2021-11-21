import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { Redirect } from "react-router-dom";

//Components
import AnnounceList from './post/announceList';
import CalendarList from './calendar/CalendarList';
import ArchiveList from './archive/ArchiveList';
import Slider from './slider/slider';
//CSS
import './css/Dashboard.css'


class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <>
        <section id="main-dashboard-content">
          <section id="grid-container">
            {/* Main Announcement */}
            <div class="grid-item one">
            <Slider projects={projects} />
            </div>
            {/* Calendar */}
            <div class="grid-item two">
              <h2>Calendar of Events</h2>
              <CalendarList projects={projects} />
            </div>
            {/* Post List */}
            <div class="grid-item three">
              <h2>Member Feed</h2>
              <AnnounceList projects={projects} />
            </div>
            {/* Recent Files */}
            <div class="grid-item four">
              <h2>Archived Files</h2>
              <ArchiveList projects={projects} />
            </div>
          </section>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']}
  ])
)(Dashboard)