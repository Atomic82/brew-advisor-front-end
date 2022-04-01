import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import EventComment from "../../components/EventComment/EventComment";
import * as eventService from '../../services/eventService'

const EventDetails = ({ handleDeleteEvent, user
 }) => {
  const location = useLocation()
  const [addComment, setAddComment] = useState([])
  const event = location.state.event
  const brewery = event.brewery
  let date = new Date(event.timeDate).toLocaleString()

  const handleAddEventComment = comment => {
    eventService.addComment(comment, event)
    .then(updatedEventWithComment => {
      setAddComment(updatedEventWithComment)
    }) 
  }

  return (
    <>
      <div className='event-details-container'>
        <div className='event-details'>
          <h1>{event.name}</h1>
          <img
            className="details-img"
            src={brewery.photos[1] ? brewery.photos[1] : brewery.photos[0]}
            alt={brewery.name}
          />
          <h2>{event.owner[0].name} is hosting an event at {brewery.name} on {date}</h2>
          <h3>{event.description}</h3>
        </div>

        <div className='event-venue-details'>
          <div className='event-venue-address'>
            <h3>Venue Address:</h3>
            <p>
              {brewery.location.display_address[0]}<br />
              {brewery.location.display_address[1]}
            </p>
          </div>
          {brewery.phone !== '' &&
            <div className='event-venue-phone'>
              <p>{brewery.display_phone}</p>
            </div>
          }
          <div className='event-venue-url'>
            <a href={brewery.url} target="_blank" rel="noreferrer">Check out the venue on Yelp</a>
          </div>
        </div>
        {(user.profile === event.owner[0]?._id) &&
          <div className="edit-delete-container">
            <Link
              to='/edit'
              state={{ event }}
            >
              <button className="btn btn-warning">
                Edit the event
              </button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteEvent(event._id)}
            >
              Delete event
            </button>
          </div>
        }
        
        <div className="comment-container">
          {event.comments.length ?
          <div className="comments">
            {event.comments.map(comment => 
              <div key={event.comments.id}>
                <p>{comment.comment}</p>
                <p>{comment.owner.name}</p>
              </div>
            )}
          </div>
            :
          <p>No comments yet</p>
          }
        </div>

        <Link to='/events'>Go back to All Events</Link>
        <EventComment 
          user={user}
          handleAddEventComment={handleAddEventComment}
          event={event} 
        />
      </div>
      </>
  );
}

export default EventDetails;