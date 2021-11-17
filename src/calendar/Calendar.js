import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 11, 1),
        end: new Date(2021, 11, 1),
    },
    {
        title: "Vacation",
        start: new Date(2021, 11, 7),
        end: new Date(2021, 11, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 11, 20),
        end: new Date(2021, 11, 23),
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