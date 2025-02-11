import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: Date,
	id: String,
});

export const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema);
