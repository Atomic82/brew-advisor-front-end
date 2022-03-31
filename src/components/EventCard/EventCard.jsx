import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <>
      <Link
        to={"/events/" + event._id}
        state={{ event }}
        className='event-link'
      >
        <div>
          <img
            className="event-link-img"
            src={event.brewery.photos[1] ? event.brewery.photos[1] : event.brewery.photos[0]}
            alt={event.brewery.name}
          />
          <p className="event-link-test">View {event.name}</p>
        </div>
      </Link>
    </>
  );
}

export default Event;