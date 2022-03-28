import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import EventComment from "../../components/EventComment/EventComment";

const EventDetails = ({ handleDeleteEvent, user }) => {
  const location = useLocation()
  const event = location.state.event

  return (
    <>
      <h1>{event.name}</h1>
      <h2>This event is being held at {event.brewery} and is hosted by {event.owner[0].name}</h2>
      <h2>this event will be occuring on {event.timeDate}</h2>
      {user.profile === event.owner[0]?._id ?
        <div className="edit-delete-container">
          <Link
            to='/edit'
            state={event}
          >
            Edit the event
          </Link>
          <button
            onClick={()=> handleDeleteEvent(event._id)}
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
  );
}

export default EventDetails;