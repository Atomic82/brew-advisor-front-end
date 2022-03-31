const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

async function getAll(locationData) {
  try {
    const res = await fetch(`${BASE_URL}/api/api/all`, {
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

async function getOneBreweryById(breweryId) {
  try {
    const res = await fetch(`${BASE_URL}/api/api/single`, {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(breweryId),
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

// function getOneBreweryById(breweryId) {
//   return fetch(`${BASE_URL}/api/api/${breweryId}`)
//   .then(res => res.json())
// }

export {
  getAll,
  getOneBreweryById
}