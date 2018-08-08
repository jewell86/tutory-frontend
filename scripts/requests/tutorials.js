const render = require('../render/render')

function createTutorial(title, description=null, img, users_id) {
<<<<<<< HEAD
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
=======
  return axios.post('http://localhost:5000/tutorials', { title, description, img, users_id })
    .catch(e => console.log(e))
>>>>>>> b393793ee34181c6bac59bfbe5b4c121fd9bd9b8
}

module.exports = { createTutorial }
