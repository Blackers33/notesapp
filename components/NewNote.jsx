"use client";
import { nanoid } from "nanoid";
import * as React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch } from "react-redux";
import { addNote } from "@/app/redux/notes";

function NewNote() {
	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");
	const [style, setStyle] = React.useState({background: "hello", title: "title", content: "world"})

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

			//Add to database
			await createNoteInDb({ title, content, date, id, style});
			//Add to redux
			dispatch(
				addNote({
					title,
					content,
					date: date.toDateString(),
					id,
					style
				})
			);
		}
	}

	return (
		<>
			<CardContent>
				<form className='mt-6'>
					<div className='grid w-full items-center gap-4'>
						<div className='flex flex-col'>
							<Input
								className='border-none !text-xl placeholder:text-xl '
								value={title}
								id='title'
								placeholder='Title'
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className='flex flex-col'>
							<Textarea
								className='border-none min-h-48'
								value={content}
								id='content'
								placeholder='Content...'
								onChange={(e) => setContent(e.target.value)}
							/>
						</div>
					</div>
				</form>
			</CardContent>
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

function NoteOptions(){
	
}

function NoteTabs() {
	return (
		<Tabs defaultValue='newnote' className='w-auto'>
			<TabsList className='grid w-full grid-cols-2'>
				<TabsTrigger value='newnote'>Create Note</TabsTrigger>
				<TabsTrigger value='noteoptions'>Options</TabsTrigger>
			</TabsList>
			<TabsContent value='newnote'>
				<NewNote/>
			</TabsContent>
			<TabsContent value='noteoptions'>Note options here</TabsContent>
		</Tabs>
	);
}

export default function NotePopover() {

	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className='fixed bottom-8 right-8 z-50 rounded-full shadow-lg'>
					<Button
						variant='fab'
						size='icon'
						className='h-16 w-16 rounded-full bg-gray-900 text-gray-50 shadow-lg transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M5 12h14' />
							<path d='M12 5v14' />
						</svg>
						<span className='sr-only'>Add</span>
					</Button>
				</div>
			</PopoverTrigger>
			<PopoverContent className='w-screen sm:w-auto x-8'>
				<NoteTabs />
			</PopoverContent>
		</Popover>
	);
}
