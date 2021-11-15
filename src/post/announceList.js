import React from 'react'
import { Link } from 'react-router-dom'

//Component
import Summary from "./Summary"
import './Summary.css'

function AnnounceList({projects}) {
    return (
        <div class="">
            <div>
            { projects && projects.map(project => {
                return (
                    <Link to = {'/project/' + project.id } key={project.id} style={{textDecoration:"none"}}>
                    <Summary project={project}/>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default AnnounceList
