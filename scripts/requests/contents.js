const render = require('../render/render')

function createTutorialContent(tutorials_id, url) {
  return axios.post(`http://localhost:5000/tutorials/${tutorials_id}/content`, { tutorials_id, url })
    .catch(e => console.log(e))
}

module.exports = { createTutorialContent }
