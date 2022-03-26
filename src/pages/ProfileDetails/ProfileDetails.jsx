import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const ProfileDetails = () => {
  const [profileData, setProfileData] = useState([])
  let location = useLocation()
  
  useEffect(() => {
    profileService.getProfile()
    .then(profileData => setProfileData)
  }, [])
  return ( 
    <>
    <h1>Hi! See the details of this profile</h1>
    <Link to="/profiles" />
    </>
   );
}
 
export default ProfileDetails;