"use client";
import * as React from "react";
import { CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

type NoteComposerProps = {
	onUpdated: (note: { title: string; content: string }) => void;
};

export default function NoteComposer({ onUpdated }: NoteComposerProps) {
	const [note, setNote] = React.useState({ title: "", content: "" });

	React.useEffect(() => {
		onUpdated(note);
	}, [note, onUpdated]);

	return (
		<CardContent>
			<form className='mt-6'>
				<div className='grid w-full items-center gap-4'>
					<div className='flex flex-col'>
						<Input
							className='border-none !text-xl placeholder:text-xl '
							value={note.title}
							id='title'
							placeholder='Title'
							onChange={(e) =>
								setNote((old) => ({ ...old, title: e.target.value }))
							}
							title=''
						/>
					</div>
					<div className='flex flex-col'>
						<Textarea
							className='border-none min-h-48'
							value={note.content}
							id='content'
							placeholder='Content...'
							onChange={(e) =>
								setNote((old) => ({ ...old, content: e.target.value }))
							}
						/>
					</div>
				</div>
			</form>
		</CardContent>
	);
}
