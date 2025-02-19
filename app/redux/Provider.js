"use client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import notes from "./notes";

const store = configureStore({
	reducer: { notes },
});

export default function ReduxProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
