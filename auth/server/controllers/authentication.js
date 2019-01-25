const User = require('models/user');

exports.signup = function(req, res, next) {
    const { email, password } = req.body;

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
        res.json({success: 'true'});
    });
}