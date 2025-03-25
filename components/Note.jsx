import * as React from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";




// <Note note={noteData} />
export default function Note({note, className = '', onDeleteNote}) {

	const date = new Date(note.date).toDateString();

	return (
		<Card className={`w-[350px] ${note.style.background} ${className}`}>
			<CardHeader>
				<CardTitle>
					{/* Shows title if any, shows "Untitled" otherwise */}
					{note.title ? (
						<span className={`${note.style.title}`}>{note.title}</span>
					) : (
						<span className='text-gray-300 italic'>Untitled</span>
					)}
				</CardTitle>
				<CardDescription>{date}</CardDescription>
			</CardHeader>
			<CardContent className={`${note.style.content}`}>
				{note.content}
			</CardContent>
			<CardFooter className='flex justify-between'>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant='outline'>X</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This will permanently delete your note.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction onClick={() => onDeleteNote(note.id)}>
								Delete
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</CardFooter>
		</Card>
	);
}
