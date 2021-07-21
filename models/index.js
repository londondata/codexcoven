// Mongoose DB Config
const mongoose = require("mongoose");
// shortcut to mongoose.connection object, created by mongoose.connect
const db = mongoose.connection;
// local DB
const dbUrl = "mongodb://localhost:27017/codexcoven";
const configs = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose
	.connect(process.env.DATABASE_URL || dbUrl, configs)
	.then(() =>
		console.log(
			`MongoDB successfully connected at ${db.host}:${db.port}! How dope!`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));

module.exports = {
	User: require("./User"),
	Entry: require("./Entry"),
	Comment: require("./Comment"),
};
