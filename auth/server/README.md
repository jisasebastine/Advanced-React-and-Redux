# Authentication Server
Objective is to create an authentication server in NodeJS completely from scratch.

>> npm install --save express mongoose body-parser morgan bcrypt-nodejs nodemon passport passport-jwt passport-local

##NPM packages

Low level request handling is done by the __Http__ Module.

Routing server logic is handled by __Express__. I have used __body-parser__ module to parse incoming http requests. __Morgan__ is used for logging.

Database is be created in __MongoDB__ and handled using __Mongoose__ module. I used a tool called __Robo 3T__ for the easy use and access of database.

Monitoring: __nodemon__

###Authentication

Password encryption is handled by __bcrypt-nodejs__ module.
JWT token is used to handle authorised resource request.
JWT Strategy and Local Strategy are implemented using passportJS.

