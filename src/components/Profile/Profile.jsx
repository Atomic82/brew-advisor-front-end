const Profile = (props) => {
  return ( 
    <>
    <div className='profile-container'>
      <h1>{props.profile.name}</h1>
    </div>
    
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
        <div className="profile-reviews">
          {props.profile.reviews?.map(review => 
            <div key={review._id}>
              {review.brewery}
              {review.comment}
            </div>
          )}
        </div>
        :
        <p>No reviews</p>
      }
    </div>
    


    
    </>
);
}

export default Profile