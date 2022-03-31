import { Link } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'


const ProfileDetails = (props) => {
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