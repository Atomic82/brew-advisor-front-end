import { Link } from "react-router-dom";

const Brewery = ({brewery}) => {
  return (
    <>
    <Link 
      to="/brewery"
      state={{brewery}}
      className='brewery-link'
    >
      <p>
        Go to {brewery.name}
      </p>
    </Link>
    </>
  );
}
 
export default Brewery;