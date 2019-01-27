const passport = require('passport');
const User = require('models/user');
const config = require('config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//Setup options for local strategy
const localOptions = {usernameField: 'email'};
//Create local strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    // Verify this email and password
    // If verified call done with the user
    // Otherwise, call done with false
    User.findOne({email: email}, function(err, user) {
        if(err) return done(err);

        if(!user) return done(null, false);
        // compare password - is 'password' equal to decrypted user.password?
        user.comparePassword(password, function(err, isMatch) {
            if(err) return done(err);

            if(!isMatch) return done(null, false);

            return done(null, user);
        });
    });
});

//Setup options for JWT strategy
const jwtOptions = {
    // Tell JwtStrategy where to look for the token(JWT)
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    // Specify the key to decode the token
    secretOrKey: config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with the user object
    // otherwise call 'done' without a user object
    User.findById(payload.sub, function(err, user) {
        if(err) return done(err, false);

        if(!user) return done(null, false);

        return done(null, user);
    });

});

//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);