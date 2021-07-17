// Comment model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		content: { type: String, required: true },
		date: { type: Date },
		user: { type: Schema.Types.ObjectId, ref: "User" },
		entries: [{ type: Schema.Types.ObjectId, ref: "Entry" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
