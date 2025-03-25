"use client";
import * as React from "react";
import { CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Style } from "./NoteTabs";




type OptionsProps = {
	style: { background: null | string; title: string; content: null | string };
	setStyle: (style: Style) => void;
};



export default function NoteOptions(props: OptionsProps) {
	return (
		<CardContent>
			<form className='mt-6'>
				<div className='w-full gap-4'>
					{/* 

					NOTE COLOR

					 */}
					<span className='text-gray-400'>Note color :</span>
					<div className='flex gap-3 mb-8'>
						<div
							onClick={() =>
								props.setStyle({ ...props.style, background: null })
							}
							className={`border border-gray-400 rounded-full w-8 h-8 ${
								props.style.background === null
									? "outline outline-slate-300"
									: ""
							}`}
						/>
						<div
							onClick={() =>
								props.setStyle({ ...props.style, background: "bg-yellow-100" })
							}
							className={`border border-gray-400 bg-gradient-to-br from-yellow-400 to-yellow-200 hover:bg-gradient-to-bl rounded-full w-8 h-8 ${
								props.style.background === "bg-yellow-100"
									? "outline outline-slate-300"
									: ""
							}`}
						/>
						<div
							onClick={() =>
								props.setStyle({ ...props.style, background: "bg-blue-100" })
							}
							className={`border border-gray-400 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-full w-8 h-8 ${
								props.style.background === "bg-blue-100"
									? "outline outline-slate-300"
									: ""
							}`}
						/>
						<div
							onClick={() =>
								props.setStyle({ ...props.style, background: "bg-green-100" })
							}
							className={`border border-gray-400 bg-gradient-to-br from-green-600 to-green-500 hover:bg-gradient-to-bl rounded-full w-8 h-8 ${
								props.style.background === "bg-green-100"
									? "outline outline-slate-300"
									: ""
							}`}
						/>
					</div>
					{/* 

					TITLE STYLE

					 */}
					<span className='text-gray-400'>Title style :</span>
					<div className='flex mb-5 mt-3'>
						<ToggleGroup type='single'>
							<ToggleGroupItem
								className={
									props.style.title === "text-xl"
										? "outline outline-slate-200"
										: ""
								}
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
								className={
									props.style.title === "font-oldLondon text-3xl"
										? "outline outline-slate-200"
										: ""
								}
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
								className={
									props.style.title === "font-freeBsc text-3xl"
										? "outline outline-slate-200"
										: ""
								}
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
								className={
									props.style.content === null
										? "outline outline-slate-200"
										: ""
								}
								onClick={() =>
									props.setStyle({ ...props.style, content: null })
								}
								value='regular'
							>
								<span className='text-2xl'>Regular</span>
							</ToggleGroupItem>
							<ToggleGroupItem
								className={
									props.style.content === "font-serif"
										? "outline outline-slate-200"
										: ""
								}
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
								className={
									props.style.content === "mono"
										? "outline outline-slate-200"
										: ""
								}
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
