import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		date: Date,
		id: String,
		style: {
			background: String,
			title: String,
			content: String,
		},
	},
	{ timestamps: true }
);

export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
