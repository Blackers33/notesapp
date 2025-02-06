"use client";
import { nanoid } from "nanoid";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function NewNote(props) {
	const [title, setTitle] = React.useState("");
	const [content, setContent] = React.useState("");

	function handleClick() {
		props.onAddNote({
			title,
			content,
			date: new Date().toDateString(),
			id: nanoid()
		});
	}

	return (
		<Card className='w-[350px] '>
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
		</Card>
	);
}
