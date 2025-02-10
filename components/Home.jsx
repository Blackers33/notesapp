"use client";
import React from "react";
import Navbar from "./../components/Navbar";
import Note from "./../components/Note";
import NotePopover from "./../components/NewNote";
import { createContext } from "react";


//export const handleAddNotesContext = createContext(1);

function Home() {
	const [notes, setNotes] = React.useState([]);

	function handleAddNote(newNote) {
		setNotes([...notes, newNote]);
	}

	function handleDeleteNote(id) {
		setNotes(notes.filter((note) => note.id !== id));
	}

	async function checkStatus() {
		const res = await fetch("/api/notes");
		const data = await res.json();
		console.log(data); // true
	}


	const data = checkStatus()

	async function createNote(title, content) {
		const res = await fetch("/api/notes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ title, content }),
		});
		const data = await res.json();
		console.log(data);
	}

	const note = createNote('aa', 'bbc')


	return (
		<div>
			<Navbar />
			<div className='m-6 flex flex-wrap gap-5'>
				{notes.map((note) => (
					<Note {...note} key={note.id} onDeleteNote={handleDeleteNote} />
				))}
			</div>
			<NotePopover onAddNote={handleAddNote} />
		</div>
	);
}

export default Home;
