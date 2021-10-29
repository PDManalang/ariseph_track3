import React from 'react'
import { Link } from 'react-router-dom'

//Component
import Summary from "./Summary"

function AnnounceList({projects}) {
    return (
        <div>

            { projects && projects.map(project => {
                return (
                    <Link to = {'/project/' + project.id } key={project.id} >
                    <Summary project={project}/>
                    </Link>
                )//figure out how to limit the cards being showed
            })}
            
        </div>
    )
}

export default AnnounceList
