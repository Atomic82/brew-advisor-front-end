import { useState, useEffect } from 'react'

const ReviewCard = ({ brewery, reviews }) => {
  const [breweryReviews, setBreweryReviews] = useState([])
  
  useEffect(() => {
    const filteredReviews = reviews?.filter(review => review?.brewery === brewery?.name)
    setBreweryReviews(filteredReviews)
  }, [reviews, brewery])
  return ( 
    <>
      {breweryReviews.map(review => 
        <div key={review._id}>
          {review.comment}
          {review.name}
        </div>
      )}
    </>
  );
}

export default ReviewCard;