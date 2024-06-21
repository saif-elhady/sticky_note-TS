# Notes Application API

This project provides a simple backend for a notes application, allowing users to create, view, update, and delete notes.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Assuming MongoDB is used for database)
- TypeScript

## Features

- Create new notes
- View a list of all notes
- View details of a specific note
- Delete a note

## Routes

| Method | Route       | Description                |
|--------|-------------|----------------------------|
| GET    | `/create`   | Form page for creating a note |
| GET    | `/`         | List all notes             |
| POST   | `/`         | Create a new note          |
| GET    | `/:id`      | View details of a note     |
| DELETE | `/:id`      | Delete a note              |

## Setup

1. Clone the repository to your local machine.
2. Run `npm install` to install dependencies.
3. Set up your environment variables in a `.env` file.
4. Start the server with `nodemon app.js`.

## Environment Variables

- `DB_URI` - Your MongoDB connection string.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).