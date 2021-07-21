const passport = require("passport");
const User = require("../models/user");

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// checks for existing user or creates new user
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK,
		},
		(accessToken, refreshToken, profile, cb) => {
			User.findOne({ googleId: profile.id }, (err, user) => {
				if (err) return cb(err);
				if (user) {
					return cb(null, user);
				} else {
					const newUser = new User({
						name: profile.displayName,
						email: profile.emails[0].value,
						googleId: profile.id,
					});
					newUser.save(function (err) {
						if (err) return cb(err);
						return cb(null, newUser);
					});
				}
			});
		}
	)
);

// sets up the session for the now logged in user.
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// called every time a req comes in from existing logged in user - we return this assigned user to req.user object
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});
