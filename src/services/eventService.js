import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

async function create(event) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: new Headers({
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(event),
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
    .then(res => res.json())
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
    .then(res => res.json())
}

async function update(event) {
  try {
    const res = await fetch(`${BASE_URL}/${event._id}`, {
      method: 'PUT',
      headers: new Headers({
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(event),
    })
    return res.json()
  } catch (err) {
    throw err
  }
}

export {
  create,
  getAll,
  deleteOne,
  update
}