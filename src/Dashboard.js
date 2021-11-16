import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

//Components
import AnnounceList from './post/announceList';
import Calendar from './calendar/Calendar';
import Slider from './slider/slider';
//CSS
import './css/Dashboard.css'


class Dashboard extends Component {
  render() {
    const { projects } = this.props;
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
              <Calendar projects={projects} />
            </div>
            {/* Post List */}
            <div class="grid-item three">
              <AnnounceList projects={projects} />
            </div>
            
            {/* <div class="grid-item four">
            </div> */}
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