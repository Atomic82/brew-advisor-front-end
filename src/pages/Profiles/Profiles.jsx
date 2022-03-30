import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as profileService from "../../services/profileService"



const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    profileService.getAllProfiles()
      .then(profiles => setProfiles(profiles))
  }, [])

  return (
    <>
      <h1>Hello. Here is a list of all the profiles.</h1>
      <>
        {profiles.length ?
          <div className="profile-list">
            {/* console.log(props.handleClick) */}
            {profiles.map(profile => (
              
              <div onClick={() => props.handleClick(profile)}>
                <Link 
                  to='/profile' 
                  key={profile.id}>
                    {profile.name}
                </Link>
              </div>
            )
            )}
          </div>

          :
          <h1>Loading profiles ...</h1>
        }
      </>
    </>
  );
}

export default Profiles