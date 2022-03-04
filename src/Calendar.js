import React from "react";
import ApiCalendar from 'react-google-calendar-api';

const Calendar = () => {

    const handleAddToCalendar = () => {
        const eventFromNow = {
            summary: 'Poc Dev From Now',
            time: 480,
        };

        ApiCalendar.createEventFromNow(eventFromNow)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <button onClick={handleAddToCalendar}>Add event</button>
        </div>
    )
}
export {Calendar};