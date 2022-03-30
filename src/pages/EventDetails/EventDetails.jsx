import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import EventComment from "../../components/EventComment/EventComment";
import * as breweryService from '../../services/breweryService';

const EventDetails = ({ handleDeleteEvent, user }) => {
  const location = useLocation()
  const event = location.state.event
  const searchId = { id: event.brewery }

  const [eventBrewery, setEventBrewery] = useState([])

  useEffect(() => {
    if (user) {
      breweryService.getOneBreweryById(searchId)
        .then(brewery => {
          setEventBrewery(brewery)
          console.log(brewery)
        })
    }
  }, [user])

  return (
    <>
      {eventBrewery.name ?
        <>
          <h1>{event.name}</h1>
          <img
            src={eventBrewery.photos[1]}
            alt={eventBrewery.name}
          />
          <h2>This event is being held at {eventBrewery.name} and is hosted by {event.owner[0].name}</h2>
          <h2>this event will be occuring on {event.timeDate}</h2>
          {user.profile === event.owner[0]?._id ?
            <div className="edit-delete-container">
              <Link
                to='/edit'
                state={{ event }}
              >
                Edit the event
              </Link>
              <button
                onClick={() => handleDeleteEvent(event._id)}
              >
                Delete event
              </button>
            </div>
            :
            <div>hah no edits or delete</div>
          }
          <Link to='/'>Go to landing</Link>
          <EventComment />
        </>
        :
        <>
          <div>
            <img src="https://i.imgur.com/TTFdKY0.png" alt="logo-loading" className='loading' />
            <h1>Loading Event Details</h1>
          </div>
        </>
      }
      {/* <h1>{event.name}</h1>
      <img
        src={eventBrewery.photos[1]}
        alt={eventBrewery.name}
      />
      <h2>This event is being held at {eventBrewery.name} and is hosted by {event.owner[0].name}</h2>
      <h2>this event will be occuring on {event.timeDate}</h2>
      {user.profile === event.owner[0]?._id ?
        <div className="edit-delete-container">
          <Link
            to='/edit'
            state={{ event }}
          >
            Edit the event
          </Link>
          <button
            onClick={() => handleDeleteEvent(event._id)}
          >
            Delete event
          </button>
        </div>
        :
        <div>hah no edits or delete</div>
      }
      <Link to='/'>Go to landing</Link>
      <EventComment /> */}
    </>
  );
}

export default EventDetails;