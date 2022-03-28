import { useLocation } from 'react-router-dom'

const ReviewCard = (props) => {
  
  return ( 
    <div className='review-card'>
      <h2>{props.review.owner}</h2>
      <p>{props.review.comment}</p>
    </div>
   );
}
 
export default ReviewCard