const User = require('models/user');
const jwt = require('jwt-simple');
const config = require('config');

function tokenForUser(user) {
    return jwt.encode({sub: user.id, iat: new Date().getTime()}, config.secret);
}

exports.signin = function(req, res, next) {
    // User has already verified email and password. Return a token
    // passport provides the user in req after the callback return successfully (passport.js line 25)
    res.send({token: tokenForUser(req.user)});
}

exports.signup = function(req, res, next) {
    const { email, password } = req.body;
    if(!email || !password) return res.status(422).send({error: 'You must provide email and password'});

    // See if the user with the given email exists
    User.findOne({email: email}, function(err, existingUser) {
        if(err) { return next(err); }

        // If a user with the email already exists, return an error
        if(existingUser) {
            return res.status(422).send({error: 'User already exists'});
        }

        // If the given email DOES NOT exists, create and save the new user
        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err) {
            if(err) { return next(err); }
        });

        // Respond to request indicating that user was created
        res.json({token: tokenForUser(user)});
    });
}