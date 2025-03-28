import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

const notesSlice = createSlice({

	name: "notes",
	initialState,
	reducers: {
		addNote: (state, action) => {

			localStorage.setItem('note', action.payload)
			
			state.data.push(action.payload);
		},

		addNotesFromDb: (state, action) => {
			state.data = [...state.data, ...action.payload]
		},

		deleteNote: (state, action) => {

			state.data = state.data.filter((note) => note.id !== action.payload);

		}
	},
});

export const { addNote, addNotesFromDb, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
