const Auth = require('./controllers/auth');
const passportService = require('./services/passport');
const passport = require('passport');

// middleware interceptor
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
  app.get('/', requireAuth, function(req,res){
    res.send({message: 'you are currently logged in!'});
  });
  app.post('/signin', requireSignin, Auth.signin);
  app.post('/signup', Auth.signup);

};
