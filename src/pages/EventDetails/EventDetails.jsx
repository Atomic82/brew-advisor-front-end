import { Link } from "react-router-dom";
import EventComment from "../../components/EventComment/EventComment";

const EventDetails = () => {
  return (
    <>
      <h1>The Event</h1>
      <h2>Wow I can't wait to join</h2>
      <Link to='/'>Go to landing</Link>
      <EventComment />
    </>
  );
}
 
export default EventDetails;