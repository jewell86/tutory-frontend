const render = require('../render/render')

function createTutorialContent(tutorials_id, url) {
  const token = localStorage.getItem('token')

  return axios({
    method: 'post',
    url: `https://vast-journey-84519.herokuapp.com/tutorials/${tutorials_id}/content`,
    headers: { authorization: `Bearer ${token}` },
    data: { tutorials_id, url }
  })
  .then(response => {
    return response.data.response
   })
  .catch(e => { throw new Error(e) })
}

module.exports = { createTutorialContent }
