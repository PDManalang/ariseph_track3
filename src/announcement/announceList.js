import React from 'react'

//Component
import Summary from "./Summary"

function AnnounceList({projects}) {
    return (
        <div>

            { projects && projects.map(project => {
                return (
                    <Summary project={project} key={project.id} />
                )//figure out how to limit the cards being showed
            })}
            
        </div>
    )
}

export default AnnounceList
