"use client";
import React, { useEffect } from "react";
import Navbar from "./../components/Navbar";
import Note from "./../components/Note";
import NotePopover from "./../components/newnote/NotePopover";
import { useDispatch, useSelector } from "react-redux";
import { addNotesFromDb, deleteNote } from "@/app/redux/notes";

function Home() {
	const notes = useSelector((state) => state.notes.data);
	const dispatch = useDispatch();


	//TODO : suppr
	async function handleDeleteNote(id) {
		dispatch(deleteNote(id));
		const result = await fetch("http://localhost:3000/api/notes?id=" + id, {
			method: "DELETE",
		});
		if (result.status !== 200) console.log("Error deleting note");
	}

	async function fetchNotesFromDb() {
		const res = await fetch("/api/notes");
		const data = await res.json();
		dispatch(addNotesFromDb(data));
	}

	useEffect(() => {
		fetchNotesFromDb();
	}, []);



	return (
		<div>
			<Navbar />
			<div className='m-6 flex flex-wrap gap-5'>
				{notes
					.slice()
					.reverse()
					.map((note) => (
						<Note note={note} key={note.id} onDeleteNote={handleDeleteNote} />
					))}
			</div>
			<NotePopover />
		</div>
	);
}

export default Home;
