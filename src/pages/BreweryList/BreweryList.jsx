import { useState, useEffect } from 'react';
import Brewery from "../../components/Brewery/Brewery";


const BreweryList = ({ breweries, userLocation }) => {


  return (
    <>
      {userLocation.location ?
        <div>
          <h1>I am the BreweryList</h1>
          <div className='breweries-main'>
            {breweries?.length ?
              <div className='brewery-container'>
                {breweries?.map(brewery => (
                  <Brewery key={brewery.id} brewery={brewery} />
                ))}
              </div>
              :
              <img src="https://i.imgur.com/TTFdKY0.png" alt="logo-loading" className='loading' />
            }
          </div>
        </div>
        :
        <div>
          <h1>Please set a location.</h1>
        </div>
      }
    </>
  );
}

export default BreweryList;