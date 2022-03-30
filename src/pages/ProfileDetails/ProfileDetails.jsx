import { Link, useLocation } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'


const ProfileDetails = (props) => {
  // const location = useLocation()
  // const reviews = location.state.review
  return ( 
    <>
    <div>
      <Profile key={props.profile.id} profile={props.profile} />
      <Link to="/profiles">Back to all profiles</Link>
    </div>
    </>
   );
}
 
export default ProfileDetails;