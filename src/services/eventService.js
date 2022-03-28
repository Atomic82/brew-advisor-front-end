import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/events`

// function create(event) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
//     body: JSON.stringify(event)
//   })
// 	.then(res => {
//     console.log(JSON.stringify(event))
//     res.json()
//   })
// }

async function create(event) {
  try {
    console.log(event)
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: new Headers({
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(event),
    })
    const json = await res.json()
    console.log(JSON.stringify(event))
    if (json.err) {
      throw new Error(json.err)
    }
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
    console.log(event)
    const res = await fetch(`${BASE_URL}/${event._id}`, {
      method: 'PUT',
      headers: new Headers({
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(event),
    })
    const json = await res.json()
    console.log(JSON.stringify(event))
    if (json.err) {
      throw new Error(json.err)
    }
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