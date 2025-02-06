"use client";
import React from "react";
import Navbar from "./../components/Navbar";
import { Card } from "@/components/ui/card";
import Note from "./../components/Note";
import NewNote from "./../components/NewNote";


function Home() {
	const [notes, setNotes] = React.useState([]);

	function handleAddNote(note) {
		setNotes((prevNotes) => [...prevNotes, note]);
	}

	function handleDeleteNote(id) {
		console.log(id)	
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
		</div>
	);
}

export default Home;

