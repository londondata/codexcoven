// Mongoose DB Config
const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/codexcoven";
const configs = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose
	.connect(dbUrl, configs)
	.then(() => console.log("MongoDB successfully connected!"))
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));


