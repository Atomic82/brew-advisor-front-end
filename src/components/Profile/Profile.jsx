import { Link } from 'react-router-dom'

const Profile = ({ profile} ) => {
  return ( 
    <>
    <div className='profile-container'>
    <h1>{profile.name}</h1>
    <div className='favorites'>
      <h2>Favorite Breweries</h2>
      {profile.favorites.length ?
        <ul>
        {profile.favorites.map(favorite => {
          <li>{profile.favorite}</li>
        })}
        </ul>
        :
        <p>No favorite breweries</p>
      }
    </div>
    <div className='events'>
      <h2>Brewery Meet Ups</h2>
      {profile.events.length ?
        <ul>
          {profile.events.map(event => {
            <li>
              {profile.event}
            </li>
          })}
        </ul>
        :
        <p>No event listed</p>
      }
    </div>
    <div clasName='reviews'>
      <h2>Brewery Reviews</h2>
      {profile.reviews.length ?
        <ul>
          {profile.reviews.map(review => {
            <li>
              {profile.name}
              
            </li>
          })}
        </ul>
        :
        <p>No reviews</p>
      }

  
    </div>
    


    </div>
    </>

   );
}
 
export default Profile