import * as tokenService from '../services/tokenService'
const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

function getAll() {
  return fetch(`${BASE_URL}/api/api/`)
    .then(res => {
      console.log(res)
      res.json()
    })
}


export {
  getAll
}