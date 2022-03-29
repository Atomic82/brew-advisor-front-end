import * as tokenService from '../services/tokenService'
const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

function getAll() {
  return fetch(`${BASE_URL}/api/api/`)
    .then(res => res.json())
}

function getOneBreweryById(breweryId) {
  return fetch(`${BASE_URL}/api/api/${breweryId}`)
  .then(res => res.json())
}

export {
  getAll,
  getOneBreweryById
}