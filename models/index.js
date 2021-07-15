// Mongoose DB Config
const mongoose = require("mongoose");
const connectionString = "mongodb://localhost:27017/codexcoven";
const configOptions = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose
	.connect(connectionString, configOptions)
	.then(() => console.log("MongoDB successfully connected!"))
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));
