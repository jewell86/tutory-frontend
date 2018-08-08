const render = require('../render/render')
const { create, home, nav, profile, search, register, tutorial, user } = require('../templates')

function createTutorial(title, description=null, img, users_id) {
  return axios.post('http://localhost:5000/tutorials', { title, description, img, users_id })
    .catch(e => console.log(e))
}

module.exports = { createTutorial }
