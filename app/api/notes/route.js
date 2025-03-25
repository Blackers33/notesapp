import { NextResponse } from "next/server";
import { notesDB } from "@/lib/db";
import { Note } from "@/lib/models/notes";

//GET all notes
export async function GET() {
	await notesDB();
	try {
		const notes = await Note.find({});
		return NextResponse.json(notes);
	} catch (error) {
		console.error("Error fetching notes:", error);
		return NextResponse.json(
			{ error: "Erreur de récupération" },
			{ status: 500 }
		);
	}
}

//ADD a note to db 
export async function POST(req) {
	await notesDB();
	try {
		const { ...noteData } = await req.json();

		const newNote = new Note({ ...noteData });

		await newNote.save();

		console.log("Note sauvegardée :", newNote);

		return NextResponse.json(newNote, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error: "Erreur de création" }, { status: 500 });
	}
}

//DELETE a note in db
export async function DELETE(req) {
	await notesDB();
	try {
		// Récupérer l'ID depuis l'URL ou les paramètres de requête
		const { searchParams } = new URL(req.url);
		const idToDelete = searchParams.get("id");

		if (!idToDelete) {
			return NextResponse.json({ error: "ID manquant" }, { status: 400 });
		}

		const result = await Note.deleteOne({ id: idToDelete });

		if (result.deletedCount === 0) {
			return NextResponse.json(
				{ message: "Aucune note trouvée à supprimer" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ message: "Note supprimée avec succès" });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Erreur de suppression" },
			{ status: 500 }
		);
	}
}

