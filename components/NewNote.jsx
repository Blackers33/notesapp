"use client";
import { nanoid } from "nanoid";
import * as React from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PopoverClose } from "@radix-ui/react-popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch } from "react-redux";
import { addNote } from "@/app/redux/notes";

function NewNote(props) {
	return (
		<CardContent>
			<form className='mt-6'>
				<div className='grid w-full items-center gap-4'>
					<div className='flex flex-col'>
						<Input
							className='border-none !text-xl placeholder:text-xl '
							value={props.title}
							id='title'
							placeholder='Title'
							onChange={(e) => props.setTitle(e.target.value)}
						/>
					</div>
					<div className='flex flex-col'>
						<Textarea
							className='border-none min-h-48'
							value={props.content}
							id='content'
							placeholder='Content...'
							onChange={(e) => props.setContent(e.target.value)}
						/>
					</div>
				</div>
			</form>
		</CardContent>
	);
}

function NoteOptions(props) {
	return (
		<CardContent>
			<form className='mt-6'>
				<div className='w-full gap-4'>
					{/* 

					NOTE COLOR

					 */}
					<span className='text-gray-400'>Note color :</span>
					<div className='flex gap-3 mb-8'>
						<button
							type='button'
							onClick={() =>
								props.setStyle({ ...props.style, background: null })
							}
							className='border border-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full w-8 h-8'
						/>
						<button
							type='button'
							onClick={() =>
								props.setStyle({ ...props.style, background: "bg-yellow-100" })
							}
							className='border border-gray-400 bg-gradient-to-br from-yellow-400 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full w-8 h-8'
						/>
						<button
							type='button'
							onClick={() =>
								props.setStyle({ ...props.style, background: "bg-blue-100" })
							}
							className='border border-gray-400 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full w-8 h-8'
						/>
						<button
							type='button'
							onClick={() =>
								props.setStyle({ ...props.style, background: "bg-green-100" })
							}
							className='border border-gray-400 bg-gradient-to-br from-green-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full w-8 h-8'
						/>
					</div>
					{/* 

					TITLE STYLE

					 */}
					<span className='text-gray-400'>Title style :</span>
					<div className='flex mb-5 mt-3'>
						<ToggleGroup type='single'>
							<ToggleGroupItem
								onClick={() =>
									props.setStyle({
										...props.style,
										title: "text-xl",
									})
								}
								value='regular'
							>
								<span className='text-2xl'>Regular</span>
							</ToggleGroupItem>
							<ToggleGroupItem
								onClick={() =>
									props.setStyle({
										...props.style,
										title: "font-oldLondon text-3xl",
									})
								}
								value='oldLondon'
							>
								<span className='font-oldLondon text-2xl relative -top-1'>
									Old London
								</span>
							</ToggleGroupItem>
							<ToggleGroupItem
								onClick={() =>
									props.setStyle({
										...props.style,
										title: "font-freeBsc text-3xl",
									})
								}
								value='calligraphy'
							>
								<span className='text-2xl font-freeBsc relative top-1'>
									Calligraphy
								</span>
							</ToggleGroupItem>
						</ToggleGroup>
					</div>
					{/* 

					CONTENT STYLE

					 */}
					<span className='text-gray-400'>Content style :</span>
					<div className='flex mb-5 mt-3'>
						<ToggleGroup type='single'>
							<ToggleGroupItem
								onClick={() =>
									props.setStyle({ ...props.style, content: null })
								}
								value='regular'
							>
								<span className='text-2xl'>Regular</span>
							</ToggleGroupItem>
							<ToggleGroupItem
								onClick={() =>
									props.setStyle({
										...props.style,
										content: "font-serif",
									})
								}
								value='serif'
							>
								<span className='font-serif text-2xl'>Serif</span>
							</ToggleGroupItem>
							<ToggleGroupItem
								onClick={() =>
									props.setStyle({ ...props.style, content: "font-mono" })
								}
								value='mono'
							>
								<span className='font-mono text-2xl relative top-0.5'>
									Mono
								</span>
							</ToggleGroupItem>
						</ToggleGroup>
					</div>
				</div>
			</form>
		</CardContent>
	);
}

function NoteTabs() {
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

			//Add to database
			await createNoteInDb({ title, content, date, id, style });
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
			<Tabs defaultValue='newnote' className='w-auto'>
				{/* NOTE EDITOR */}
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='newnote'>Create Note</TabsTrigger>
					<TabsTrigger value='noteoptions'>Options</TabsTrigger>
				</TabsList>
				<TabsContent value='newnote'>
					<NewNote
						title={title}
						content={content}
						setTitle={setTitle}
						setContent={setContent}
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
			<PopoverContent className='w-screen sm:w-[450px] x-8'>
				<NoteTabs />
			</PopoverContent>
		</Popover>
	);
}
