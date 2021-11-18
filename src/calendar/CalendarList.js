import React from 'react'

//Component
import '../post/Summary.css'

function CalendarList() {
    return (
        <div class="">
            <div class="card">
                <div class="card-title">
                    <h2>Tree Planting</h2>
                </div>
                <div class="card-body">
                    December 13, 2021
                </div>
            </div>

            <div class="card">
                <div class="card-title">
                    <h2>Lunch and Learn</h2>
                </div>
                <div class="card-body">
                    November 15, 2021
                </div>
            </div>

            <div class="card">
                <div class="card-title">
                    <h2>Donation Drive</h2>
                </div>
                <div class="card-body">
                    September 23, 2021
                </div>
            </div>
        </div>
    )
}

export default CalendarList
