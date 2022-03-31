const ReviewCard = ({ brewery, reviews }) => {
  const breweryReviews = reviews.filter(review => review.brewery === brewery.id)
  return ( 
    <>
      {breweryReviews.map(review => 
        <div key={review._id}>
          {review.comment}
        </div>
      )}
    </>
  );
}

export default ReviewCard;