import React from 'react'
import AnnounceSummary from './announceSummary'

function AnnounceList({projects}) {
    return (
        <div className="project-list section">

            { projects && projects.map(project => {
                return (
                    <AnnounceSummary project={project} key={project.id} />
                )
            })}
            
        </div>
    )
}

export default AnnounceList
