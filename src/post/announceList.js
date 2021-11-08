import React from 'react'
import { Link } from 'react-router-dom'

//Component
import Summary from "./Summary"
import './Summary.css'

function AnnounceList({projects}) {
    return (
        <div class="list">
            <div>
            { projects && projects.map(project => {
                return (
                    <Link to = {'/project/' + project.id } key={project.id} style={{textDecoration:"none"}}>
                    <Summary project={project}/>
                    </Link>
                )//figure out how to limit the cards being showed
            })}
            </div>
        </div>
    )
}

export default AnnounceList
