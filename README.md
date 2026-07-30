# SnippetSphere – A Developer Snippet & Paste Management Platform

SnippetSphere is a professional full-stack MERN application that helps developers create, organize, manage, and securely share code snippets. Whether you're storing reusable code, terminal commands, API requests, or quick notes, SnippetSphere provides a fast, clean, and developer-friendly experience.

---

## Features

- Secure User Authentication (JWT + Bcrypt.js)
- Create, Edit & Delete Snippets
- Public & Private Snippet Visibility
- Real-Time Search
- Tag-Based Organization
- Favorite (Star) Snippets
- Auto-Save Drafts
- One-Click Copy to Clipboard
- Download Snippets as `.txt`
- Snippet Expiration Options
- Responsive UI
- RESTful API Architecture

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Custom CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- Bcrypt.js

---

## Project Structure

```text
SnippetSphere/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/rahul-nishad5708/SnippetSphere.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Future Improvements

- Syntax Highlighting
- Monaco Code Editor
- Folder Organization
- AI Code Explanation
- Version History
- Dark / Light Theme
- Team Collaboration
- Markdown Support

---

## Author

**Rahul Chandraveer Nishad**

- GitHub: https://github.com/rahul-nishad5708
- LinkedIn: https://www.linkedin.com/in/rahulnishad12/

---

## License

MIT License