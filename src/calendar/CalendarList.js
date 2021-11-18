import React from 'react'

//Component
import '../post/Summary.css'
import { events } from './Calendar'

function CalendarList() {    
    return (
        <div class="">
            <div class="card">
                <div class="card-title">
                    <h2>{events[0].title}</h2>
                    <p>{events[0].start.toLocaleDateString("en-US")}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-title">
                    <h2>{events[1].title}</h2>
                    <p>{events[1].start.toLocaleDateString("en-US")}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-title">
                    <h2>{events[2].title}</h2>
                    <p>{events[2].start.toLocaleDateString("en-US")}</p>
                </div>
            </div>
            <div class="card">
                <div class="card-title">
                    <h2>{events[3].title}</h2>
                    <p>{events[3].start.toLocaleDateString("en-US")}</p>
                </div>
            </div>
        </div>
    )
}

export default CalendarList
