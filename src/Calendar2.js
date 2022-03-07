import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyD4dPQdy5II5I7W1zlmI_EymiS7dBUlwRo";
let calendars = [
    {calendarId: "ldno4all2ua2p2blrsapij5tv4@group.calendar.google.com"},

];

class Example extends React.Component {
    render() {
        return (
            <div>
                <Calendar apiKey={API_KEY} calendars={calendars} />
            </div>
        )
    }
}