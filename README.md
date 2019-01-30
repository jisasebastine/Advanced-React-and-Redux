# Advanced-React-and-Redux
This is to showcase the projects and tests that I have created as part of a Udemy course.
https://udemy-certificate.s3.amazonaws.com/pdf/UC-CD50U5GK.pdf

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

# Authentication Client
Client application is built in React and Redux. Higher Order Components handle the authenticated routing.
Forms are handled by __redux-form__. 

# Testing
Created unit tests for each components and integration tests to ensure specific functinalities. 
Higher Order Components and middlewares are created. __redux-promise__ is replaced by my own `async` middleware.
>> npm install enzyme enzyme-adapter-react-16 moxios



