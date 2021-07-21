const db = require("../models");

const index = (req, res, next) => {
	db.User.find({}, (err, users) => {
		res.render("users/index", {
			users,
			user: req.user,
		});
	});
};

module.exports = {
	index,
};
