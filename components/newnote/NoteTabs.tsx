"use client";
import { nanoid } from "nanoid";
import * as React from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PopoverClose } from "@radix-ui/react-popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch } from "react-redux";
import { addNote } from "@/app/redux/notes";
import NoteOptions from "./NoteOptions";
import NoteComposer from "./NoteComposer";

export default function NoteTabs() {

	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");
	const [style, setStyle] = React.useState({
		background: null,
		title: "text-xl",
		content: null,
	});

	console.log(style);

	async function createNoteInDb({ ...notesData }) {
		await fetch("/api/notes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...notesData }),
		});
	}

	const dispatch = useDispatch();

	async function handleClick() {
		if (content) {
			const id = nanoid();
			const date = new Date();
			
			/**
			 * DEMO MODE
			 */
			//Add to database
			//await createNoteInDb({ title, content, date, id, style });

			//Add to redux
			dispatch(
				addNote({
					title,
					content,
					date: date.toDateString(),
					id,
					style,
				})
			);
		}
	}

	return (
		<>
			<Tabs defaultValue='notecomposer' className='w-auto'>
				{/* NOTE EDITOR */}
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='notecomposer'>Create Note</TabsTrigger>
					<TabsTrigger value='noteoptions'>Options</TabsTrigger>
				</TabsList>
				<TabsContent value='notecomposer'>
					<NoteComposer
						onUpdated={({ title, content }) => {
							setTitle(title);
							setContent(content);
						}}
					/>
				</TabsContent>
				{/* NOTE OPTIONS */}
				<TabsContent value='noteoptions'>
					<NoteOptions style={style} setStyle={setStyle} />
				</TabsContent>
			</Tabs>

			{/* CARD FOOTER */}
			<CardFooter className='flex justify-between'>
				<PopoverClose asChild>
					<Button variant='outline'>Cancel</Button>
				</PopoverClose>
				<PopoverClose asChild>
					<Button onClick={handleClick}>Add Note</Button>
				</PopoverClose>
			</CardFooter>
		</>
	);
}
