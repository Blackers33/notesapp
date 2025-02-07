"use client";
import React from "react";
import Navbar from "./../components/Navbar";
import Note from "./../components/Note";
import NotePopover from "./../components/NewNote";
import { createContext } from "react";

export const LevelContext = createContext(1);

function Home() {
	const [notes, setNotes] = React.useState([]);

	function handleAddNote(newNote) {
		setNotes([...notes, newNote]);
	}

	function handleDeleteNote(id) {
		setNotes(notes.filter((note) => note.id !== id));
	}

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
