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





export default function Note(props) {

	const date = new Date(props.date).toDateString();

	return (
		<Card className={`w-[350px] ${props.style.background}`}>
			<CardHeader>
				<CardTitle>
					{/* Shows title if any, shows "Untitled" otherwise */}
					{props.title ? (
						<span className={`${props.style.title}`}>{props.title}</span>
					) : (
						<span className='text-gray-300 italic'>Untitled</span>
					)}
				</CardTitle>
				<CardDescription>{date}</CardDescription>
			</CardHeader>
			<CardContent className={`${props.style.content}`}>
				{props.content}
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
							<AlertDialogAction onClick={() => props.onDeleteNote(props.id)}>
								Continue
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</CardFooter>
		</Card>
	);
}
