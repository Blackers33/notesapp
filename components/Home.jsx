"use client";
import React, { useEffect } from "react";
import Navbar from "./../components/Navbar";
import Note from "./../components/Note";
import NotePopover from "./../components/NewNote";
import { useDispatch, useSelector } from "react-redux";
import { addNotesFromDb } from "@/app/redux/notes";

function Home() {

	const notes = useSelector((state) => state.notes.data);
	const dispatch = useDispatch();


	//TODO : suppr
	function handleDeleteNote(id) {
		setNotes(notes.filter((note) => note.id !== id));
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
				{notes.map((note) => (
					<Note {...note} key={note.id} onDeleteNote={handleDeleteNote} />
				))}
			</div>
			<NotePopover />
		</div>
	);
}

export default Home;
