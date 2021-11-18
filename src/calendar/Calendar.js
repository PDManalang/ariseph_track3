import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//CSS
import './Calendar.css'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

export const  events = [

    {
        title: "Fire Prevention Month",
        start: new Date(2021, 10, 1),
        end: new Date(2021, 10, 1),
    },

    {
        title: "Fire Drill",
        start: new Date(2021, 10, 20),
        end: new Date(2021, 10, 22),
    },

    {
        title: "Fire Awareness Webinar",
        start: new Date(2021, 10, 25),
        end: new Date(2021, 10, 27),
    },
    
    {
        title: "ARISE Conference",
        start: new Date(2021, 11, 15),
        end: new Date(2021, 11, 20),
    },

];
const CalendarScreen = () => {
    return(
        <div>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    )
}

export default CalendarScreen