"use client";
import React from "react";
import Navbar from "./../components/Navbar";
import { Card } from "@/components/ui/card";
import Note from "./../components/Note";
import NewNote from "./../components/NewNote";
import Popover from "./../components/NewButton";

function Home() {
	const [notes, setNotes] = React.useState([]);

	function handleAddNote(newNote) {
		setNotes([...notes, newNote]);
	}

	function handleDeleteNote(id) {
		setNotes(notes.filter(note=>note.id !== id))
	}

	return (
		<div>
			<Navbar />
			<div className='m-6 flex flex-wrap gap-5'>
				{notes.map((note) => (
					<Note { ...note} key={note.id} onDeleteNote={handleDeleteNote} />
				))}
				<NewNote onAddNote={handleAddNote} />
			</div>
			<Popover/>
		</div>
	);
}

export default Home;

