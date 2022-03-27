import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as profileService from '../../services/profileService'
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