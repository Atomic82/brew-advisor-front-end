import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <>
    <Link 
      to={"/event/" + event._id}
      state={{ event }}
      className='event-link'
    >
      <div>
        <p>View {event.name}</p>
      </div>
    </Link>
    </>
  );
}
 
export default Event;