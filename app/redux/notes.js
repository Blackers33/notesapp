import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [
		{
			title: "This is a note",
			content: "Check out my Github and Linkedin in the upper right corner !",
			date: "2025-03-25T14:35:25.913Z",
			id: "Z6KhAfoA5UzY0X1FNTxZ",
			style: {
				background: "bg-yellow-100",
				title: "font-freeBsc text-3xl",
				content: "font-serif",
			},
		},
		{
			title: "Create stylish notes",
			content:
				"You can create and combine different styles for your note. to do so, when you are composing a note click on the Option tab to access the styling options. This is done using tailwindCSS.",
			date: "2025-03-25T14:35:25.913Z",
			id: "Z6KhA5foA5UzY0XFNTxZ",
			style: {
				background: null,
				title: "font-oldLondon text-3xl",
				content: "font-serif",
			},
		},
		{
			title: "About me",
			content:
				"With a dynamic background blending web development and network administration, I craft efficient, user-focused applications while understanding the systems they run on. Skilled in React, Node.js, Next.js, and React Native, I bring a pragmatic approach honed through hands-on work in IoT, audiovisual integration, and network diagnostics.",
			date: "2025-03-25T14:35:25.913Z",
			id: "KhA5f7oA5UzY0X1FNTxZ",
			style: {
				background: "bg-green-100",
				title: "text-xl",
				content: null,
			},
		},
		{
			title: "The tech stack",
			content:
				"Notes app is just a simple project to test my coding skills and learn more about NextJS and Typescript. It's using Next router and MongoDB with mongoose in its full version, which you can find on my github. Because it's a training projet, the usage of AI has been minimal if any.",
			date: "2025-03-25T14:35:25.913Z",
			id: "KhA5foA5UzY0X1FNTxZ",
			style: {
				background: "bg-blue-100",
				title: "text-xl",
				content: "font-mono",
			},
		},
		{
			title: "Welcome to Notes app!",
			content:
				"This is a demo. It's not linked to any database so you will lose your work after a page refresh. Click on the " +
				" button in the bottom right corner to add a note.",
			date: "2025-03-24T14:35:25.913Z",
			id: "Z6KhA5foA5UzY0X1FNTxY",
			style: {
				background: null,
				title: "text-xl",
				content: null,
			},
		},
	],
};

const notesSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		addNote: (state, action) => {
			localStorage.setItem("note", action.payload);

			state.data.push(action.payload);
		},

		addNotesFromDb: (state, action) => {
			state.data = [...state.data, ...action.payload];
		},

		deleteNote: (state, action) => {
			state.data = state.data.filter((note) => note.id !== action.payload);
		},
	},
});

export const { addNote, addNotesFromDb, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
