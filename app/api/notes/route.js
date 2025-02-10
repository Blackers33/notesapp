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
		const { title, content } = await req.json();
		const newNote = new Note({ title, content });
		await newNote.save();
		return NextResponse.json(newUser, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: "Erreur de création" }, { status: 500 });
	}
}
