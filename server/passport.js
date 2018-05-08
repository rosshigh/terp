var passport = require('passport'),
    jwt = require('jsonwebtoken')
    jwtStrategy = require('passport-jwt').Strategy,
    extractJwt = require('passport-jwt').ExtractJwt,
    localStrategy = require('passport-local'),
    mongoose = require('mongoose'),
    People = mongoose.model('Person');

var localOptions = {
  usernameField: 'username'
};

var localLogin = new localStrategy(localOptions, function(username, password, next){
  var query = People.findOne({username: username});
  query
    .exec( function(err, user){
      if(err){ 
        return next(err);
      } else {    
        if(!user){
          next(next(err));
        } else { 
            if(user.password !== password){
                return next(err);
            } else {
              return next(null, user);
            }
          };
        }
    });
});

var jwtOptions = {
  jwtFromRequest: extractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: "cayennelikeshistreats"
};

var jwtLogin = new jwtStrategy(jwtOptions, function(payload, next){
  People.findById(payload._id, function(err, user){
    if(err){
      return next(err);
    } else if (user){
      return next(null, user);
    } else {
      return next(null, false);
    }
  });
});

  generateToken = function(user){
    return jwt.sign(user, "cayennelikeshistreats");
  };

  setUserInfo = function(req){
      return {
        _id: req._id,
        name: req.name,
        role: req.role
      };
  };

  login = function(req, res, next) {

    var userInfo = setUserInfo(req.user);

    res.status(200).json({
        token: generateToken(userInfo),
        user: req.user,
        temp: process.env.TEMP,
        icon: process.env.ICON
    });
  };

passport.use(jwtLogin);
passport.use(localLogin);