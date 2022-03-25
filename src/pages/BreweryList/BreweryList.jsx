import { useState, useEffect } from 'react';
import * as breweryService from '../../services/breweryService'
import Brewery from "../../components/Brewery/Brewery";


const BreweryList = () => {
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    breweryService.getAll()
      .then(allBreweries => {
        console.log(allBreweries)
        setBreweries(allBreweries)
      })
  }, [])

  return (
    <>
      <h1>I am the BreweryList</h1>
      <div>
        <Brewery />
      </div>
    </>
  );
}
 
export default BreweryList;