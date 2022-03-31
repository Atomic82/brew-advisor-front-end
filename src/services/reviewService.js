import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`

function create(review, profileId) {
  return fetch(`${BASE_URL}/${profileId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  .then(res => res.json())
}

function getAll() {
  return fetch(`${BASE_URL}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-type': 'application/json'
    },
  })
  .then(res => res.json())
}





export {
  create,
  getAll
}