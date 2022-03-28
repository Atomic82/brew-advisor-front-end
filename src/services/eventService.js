import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

function create(event) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
    body: JSON.stringify(event)
  })
	.then(res => {
    res.json()
  })
}

function getAll() {
  return fetch(`${BASE_URL}`)
    .then(res => res.json())
}

export {
  create,
  getAll
}