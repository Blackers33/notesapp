import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error("MONGODB_URI est manquant dans .env.local");
}

let isConnected = false; // Pour éviter les reconnections inutiles

export const notesDB = async () => {
	if (isConnected) return;

	try {
		const { connection } = await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		isConnected = connection.readyState === 1;
		console.log("MongoDB connecté");
	} catch (error) {
		console.error("Erreur de connexion à MongoDB:", error);
	}
};
