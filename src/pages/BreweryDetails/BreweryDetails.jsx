import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const BreweryDetails = () => {
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
        <div>
          <button>Add Review</button>  
        </div> 
        <a href={brewery.url} target="_blank" rel="noreferrer">On Yelp</a>
        
      </div>
      <Link to='/breweries'>Go back to Breweries</Link>
    </>
  );
}

export default BreweryDetails;