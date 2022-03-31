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
            {profiles.map(profile => (
              
              <div key={profile._id} onClick={() => props.handleClick(profile)}>
                <Link
                  to='/profile' 
                  >
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