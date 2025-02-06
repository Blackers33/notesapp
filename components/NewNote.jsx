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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

function NewNote(props) {
	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");

	function handleClick() {
		props.onAddNote({
			title,
			content,
			date: new Date().toDateString(),
			id: nanoid(),
		});
	}

	return (
		<>
			<CardHeader>
				<CardTitle>Create Note</CardTitle>
			</CardHeader>
			<CardContent>
				<form>
					<div className='grid w-full items-center gap-4'>
						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='title'>Title</Label>
							<Input
								value={title}
								id='title'
								placeholder='Title of your note'
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className='flex flex-col space-y-1.5'>
							<Label htmlFor='content'>Content</Label>
							<Textarea
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
				<Button variant='outline'>Cancel</Button>
				<Button onClick={handleClick}>Add Note</Button>
			</CardFooter>
		</>
	);
}

function PlusIcon() {
	return (
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
	);
}

export default function NotePopover({ onAddNote }) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className='fixed bottom-8 right-8 z-50 rounded-full shadow-lg'>
					<Button
						variant='fab'
						size='icon'
						className='h-16 w-16 rounded-full bg-gray-900 text-gray-50 shadow-lg transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
					>
						<PlusIcon />
						<span className='sr-only'>Add</span>
					</Button>
				</div>
			</PopoverTrigger>
			<PopoverContent className='w-80'>
				<NewNote onAddNote={onAddNote} />
			</PopoverContent>
		</Popover>
	);
}
