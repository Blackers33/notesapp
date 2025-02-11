import { NextResponse } from "next/server";
import { notesDB } from "@/lib/db";
import { Note } from "@/lib/models/notes";

export async function GET() {
	await notesDB();
	try {
		const notes = await Note.find({});
		return NextResponse.json(notes);
	} catch (error) {
		return NextResponse.json(
			{ error: "Erreur de récupération" },
			{ status: 500 }
		);
	}
}

export async function POST(req) {
	await notesDB();
	try {
		const { ...noteData } = await req.json();
		const newNote = new Note({...noteData});

		await newNote.save();
		return NextResponse.json(newNote, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: "Erreur de création" }, { status: 500 });
	}
}
