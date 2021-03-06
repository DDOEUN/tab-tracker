const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.get('/songs/:songId',
    SongsController.show)
  
  app.put('/songs/:songId',
    SongsController.post)
    
  app.post('/songs',
    SongsController.post)
}