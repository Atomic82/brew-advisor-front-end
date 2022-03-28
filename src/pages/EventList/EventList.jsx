import Event from "../../components/EventCard/EventCard";
import * as eventService from "../../services/eventService";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const EventList = ({ events }) => {

  return (
    <>
      <h1>This is the event list</h1>
      <div className='events-main'>
        {events.length ? 
          <div className='event-container'>
            {events.map(event => (
              <Event key={event._id} event={event} />
            ))}
          </div>
          :
          <img src="https://i.imgur.com/TTFdKY0.png" alt="logo-loading" className='loading' />
        }
      </div>
    </>
  );
}
 
export default EventList;