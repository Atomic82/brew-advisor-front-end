import { Link } from "react-router-dom";

const Brewery = ({ brewery }) => {
  return (
    <>
      <Link
        to="/brewery"
        state={{ brewery }}
        className='brewery-link'
      >
        <div>
          <img src={brewery.image_url} alt="" style={{"max-height":"400px",}}/>
          <p>
            Go to {brewery.name}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Brewery;