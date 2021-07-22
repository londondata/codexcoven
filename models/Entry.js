// Entry Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		date: { type: Date },
		user: { type: Schema.Types.ObjectId, ref: "User" },
		comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
	},
	{
		timestamps: true,
	}
);

// shorthand Schema export
module.exports = mongoose.model("Entry", entrySchema);
