import { Link } from "react-router-dom";

const Brewery = ({ brewery }) => {
  return (
    <>
      <Link
        to={"/breweries/" + brewery.id}
        state={{ brewery }}
        className='brewery-link'
      >
        <div>
          <img src={brewery.image_url} alt="" className="brewery-link-img" />
          <p className="brewery-link-text">Go to {brewery.name}</p>
        </div>
      </Link>
    </>
  );
}

export default Brewery;