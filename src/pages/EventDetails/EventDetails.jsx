import { Link, useLocation } from "react-router-dom";
import EventComment from "../../components/EventComment/EventComment";

const EventDetails = ({ handleDeleteEvent, user }) => {
  const location = useLocation()
  const event = location.state.event
  const brewery = event.brewery
  let date = new Date(event.timeDate).toLocaleString()

  return (
    <>

      <>
        <div className='event-details'>
          <h1>{event.name}</h1>
          <img
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
              Edit the event
            </Link>
            <button
              onClick={() => handleDeleteEvent(event._id)}
            >
              Delete event
            </button>
          </div>
        }
        <Link to='/events'>Go back to All Events</Link>
        <EventComment />
      </>

    </>
  );
}

export default EventDetails;