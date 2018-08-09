const render = require('../render/render')

function createTutorial(title, description=null, img, users_id) {
  const token = JSON.parse(localStorage.getItem('token'))

  return axios({
    method: 'post',
    url: 'http://localhost:5000/tutorials',
    headers: { authorization: `Bearer ${token}` },
    data: { title, description, img, users_id }
  })
  .then(response => {
    return response.data.response
   })
  .catch(e => { throw new Error(e) })

}

function createTutorialComment (users_id, tutorials_id, content) {
  const token = JSON.parse(localStorage.getItem('token'))

  return axios({
    method: 'post',
    url: `http://localhost:5000/tutorials/${tutorials_id}/comments`,
    headers: { authorization: `Bearer ${token}` },
    data: { users_id, tutorials_id, content }
  })
  .then(response => { return response.data.response })
  .catch(e => { throw new Error(e) })
}

module.exports = { createTutorial, createTutorialComment }
