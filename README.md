# Dev Events

A simple **developer events hub** built with **Next.js** and **MongoDB**. This project allows users to view upcoming developer events and book them. All event data is currently stored as dummy data in MongoDB.

## Live Demo

Check out the live project here: [Dev Events on Vercel](https://devevents-drab-nine.vercel.app/)

## Features

- Display a list of developer events
- View event details
- Book events (dummy functionality)
- Fetches data from a MongoDB database

## Tech Stack

- **Frontend & Backend:** Next.js  
- **Database:** MongoDB  
- **Styling:** Tailwind CSS

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/dev-events.git
cd dev-events
```
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a .env.local file in the root and add following:

```bash
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=your_posthog_host
NEXT_PUBLIC_BASE_URL=http://localhost:3000 or your_base_url
CLOUDINARY_URL=your_cloudinary_connection_string
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open http://localhost:3000 in your browser.

