// User Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// we are pulling the Schema class from Mongoose (hence the "new" keyword). We are creating Schema objects

const journalSchema = new Schema({
	title: { type: String },
	bio: { type: String },
	picture: { type: mongoose.type.url },
});

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		birthdate: { type: Date, required: true },
		// embedded journal schema, 1:1 relationship
		journal: journalSchema,
		entries: [{ type: Schema.Types.ObjectId, ref: "Entry" }],
		comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
	},
	{
		timestamps: true,
	}
);

// model

const User = mongoose.model("User", userSchema);

// export
module.exports = User;
