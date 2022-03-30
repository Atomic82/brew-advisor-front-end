import * as tokenService from '../services/tokenService'
const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

// function getAll() {
//   return fetch(`${BASE_URL}/api/api/`)
//     .then(res => res.json())
// }

async function getAll(locationData) {
  try {
    console.log(JSON.stringify(locationData))
    const res = await fetch(`${BASE_URL}/api/api/`, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(locationData),
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

function getOneBreweryById(breweryId) {
  return fetch(`${BASE_URL}/api/api/${breweryId}`)
  .then(res => res.json())
}

export {
  getAll,
  getOneBreweryById
}