# Note-Taking App

A modern, feature-rich note-taking app built with **Next.js**, **React**, **Redux**, and **TypeScript**. This app allows users to create, customize, and store notes seamlessly.

## Demo
 [Live Demo on Vercel](https://notesapp-pcandmwfy-blackers33s-projects.vercel.app)

## Features

-  **Create Notes**: Add rich-text notes with customizable styles.
-  **Custom Styling**: Adjust title and content appearance.
-  **Persistent Storage**: Save notes to a database (No on the demo version).
-  **State Management**: Manage notes efficiently with Redux.
-  **Modular Design**: Clean component architecture with TypeScript.

## Tech Stack

- **Next.js** – React Framework
- **React & TypeScript** – Component-based UI with static typing
- **Redux** – Global state management
- **Radix UI** – Accessible components (Popovers, Tabs)
- **NanoID** – Unique ID generation

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/note-taking-app.git
   cd note-taking-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```
3. Run the app:
   ```bash
   yarn dev
   ```

  Visit **http://localhost:3000** to view the app.

## Environment Variables

Create a `.env.local` file:

```
MONGODB_URI=<your-mongodb-connection>
```

