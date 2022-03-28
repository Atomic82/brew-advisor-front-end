import { useLocation } from 'react-router-dom'

const ReviewCard = (props) => {
  
  return ( 
    <div className='review-card'>
      {props.brewery.reviews.length ?
        <p>Here is a review</p>
        :
        <p>No reviews listed yet</p>
      }
      
    </div>
   );
}
 
export default ReviewCard