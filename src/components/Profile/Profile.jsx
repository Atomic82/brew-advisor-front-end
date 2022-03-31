import { Link } from 'react-router-dom'

const Profile = (props) => {
  return ( 
    <>
    <div className='profile-container'>
    <h1>{props.profile.name}</h1>
    {/* <div className='favorites'>
      <h2>Favorite Breweries</h2>
      {props.profile.favorites.length ?
        <ul>
        {props.profile.favorites.map(favorite => {
          <li key={favorite.id}>{favorite}</li>
        })}
        </ul>
        :
        <p>No favorite breweries</p>
      }
    </div> */}
    {/* <div className='events'>
      <h2>Brewery Meet Ups</h2>
      {props.profile.events.length ?
        <ul>
          {props.profile.events.map(event => {
            <li key={event.id}>
              {event}
            </li>
          })}
        </ul>
        :
        <p>No event listed</p>
      }
    </div> */}
    <div className='reviews'>
      <h2>Brewery Reviews</h2>
      {props.profile.reviews.length ?
        <ul>
          {props.profile.reviews?.map(review => 
            <li key={review._id}>
              {review.brewery}
              {review.comment}
            </li>
          )}
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