/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lHMP9mnnl4T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

function NoteButton() {
	return (
		<div className='fixed bottom-8 right-8 z-50 rounded-full shadow-lg'>
			<Button
				variant='fab'
				size='icon'
				className='h-16 w-16 rounded-full bg-gray-900 text-gray-50 shadow-lg transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
			>
				<PlusIcon/>
				<span className='sr-only'>Add</span>
			</Button>
		</div>
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


export default function NotePopover() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant='outline'>Open popover</Button>
			</PopoverTrigger>
			<PopoverContent className='w-80'>
				<div className='grid gap-4'>
					<div className='space-y-2'>
						<h4 className='font-medium leading-none'>Dimensions</h4>
						<p className='text-sm text-muted-foreground'>
							Set the dimensions for the layer.
						</p>
					</div>
					<div className='grid gap-2'>
						<div className='grid grid-cols-3 items-center gap-4'>
							<Label htmlFor='width'>Width</Label>
							<Input
								id='width'
								defaultValue='100%'
								className='col-span-2 h-8'
							/>
						</div>
						<div className='grid grid-cols-3 items-center gap-4'>
							<Label htmlFor='maxWidth'>Max. width</Label>
							<Input
								id='maxWidth'
								defaultValue='300px'
								className='col-span-2 h-8'
							/>
						</div>
						<div className='grid grid-cols-3 items-center gap-4'>
							<Label htmlFor='height'>Height</Label>
							<Input
								id='height'
								defaultValue='25px'
								className='col-span-2 h-8'
							/>
						</div>
						<div className='grid grid-cols-3 items-center gap-4'>
							<Label htmlFor='maxHeight'>Max. height</Label>
							<Input
								id='maxHeight'
								defaultValue='none'
								className='col-span-2 h-8'
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}