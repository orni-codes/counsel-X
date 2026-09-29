const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  },
  async(accessToken,refreshToken,profile,done)=>{

    let user = await User.findOne({googleId:profile.id});

    if(!user){
      user = await User.create({
        name: profile.name.givenName,
        surname: profile.name.familyName,
        email: profile.emails[0].value,
        googleId: profile.id
      });
    }

    return done(null,user);
  })
);