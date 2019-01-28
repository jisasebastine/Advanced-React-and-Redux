const passport = require('passport');
const Authentication = require('controllers/authentication');

// configure passport with strategies from passportService
const passportService = require('services/passport');

// create a middleware section in between the incoming request and route handler
//// authenticate using 'jwt'
//// Passport wants to create a cookie based session when authenticated. JWT does not need a session. So set session: false
const requireAuth = passport.authenticate('jwt', {session: false}); 
const requireSignin = passport.authenticate('local', {session: false});

// add route handlers
module.exports = (app) => {
    // allow CORS
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    app.get('/', requireAuth, function(req, res, next) {
        res.send({hi: 'there'});
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}