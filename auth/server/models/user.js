const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

// Define the model
const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true} 
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
    const user = this; // Get the instance of user mode that is calling this function. user.email and user.password will be accessible through this
    
    // generate Salt to Hash the password with the Salt
    bcrypt.genSalt(10, function(err, salt) {
        if(err) return next(err);

        // hash the password using the Salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) return next(err);

            // replace the plain text password with the hash
            user.password = hash;
            next();
        });
    });
});

// userSchema.methods will store all the methods that are accessible to instances of userSchema
userSchema.methods.comparePassword = function(candidatePassword, callback) {
    // compare the hash(salt, password entered by a user)  with the hashed password in database
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) { 
        if(err) return callback(err);

        callback(null, isMatch);
    });
}

// Create the model class
 const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;