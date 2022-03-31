import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NewReview from '../../components/NewReview/NewReview'
import ReviewCard from "../../components/ReviewCard/ReviewCard";


const BreweryDetails = ({ handleAddReview, user, reviews }) => {
  const location = useLocation()
  const brewery = location.state.brewery
  
 
  return (
    <>
      <div>
        <h1>{brewery.name}</h1>
        <img src={brewery.image_url} alt={brewery.alias} />
        <h3>Rating: {brewery.rating}</h3>
        <div>
          <p>{brewery.location.display_address[0]}<br />
          {brewery.location.display_address[1]}</p>
        </div>
        <p>{brewery.display_phone}</p>
        <div className="add-review">
          <NewReview handleAddReview={handleAddReview} brewery={brewery} user={user} />  
        </div> 
        <div className="reviews" key={reviews._id}>
            <ReviewCard reviews={reviews} brewery={brewery} />  
        </div>
        <a href={brewery.url} target="_blank" rel="noreferrer">On Yelp</a>
        
      </div>
      <Link to='/breweries'>Go back to Breweries</Link>
    </>
  );
}

export default BreweryDetails;