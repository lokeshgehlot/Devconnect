# 🚀 DevConnect

**DevConnect** is a full-stack developer collaboration platform built using the MERN stack. It allows developers to create profiles, discover other developers, and communicate via direct messages — all in one modern, streamlined interface.

---

## 🌟 Features

- 🔐 **User Authentication** with secure JWT login and registration
- 🧑‍💻 **Developer Profiles** with name, bio, skills, GitHub & LinkedIn links
- 🌍 **Developer Directory** with search by skills
- 💬 **Messaging System**: Send and receive messages between developers
- 📥 **Inbox & Sentbox** views for message history
- 🧭 **Protected Routes** and role-based access control
- ✨ **Modern UI** with polished pages for registration, login, dashboard, and profiles

---

## 🛠 Tech Stack

- **Frontend**: React.js, React Router DOM, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB & Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Plain CSS 

---

## 📁 Folder Structure

DevConnect/
├── client/ # React frontend
│ ├── components/
│ ├── pages/
│ └── api.js
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── middleware/
├── .env
├── README.md
└── package.json


---

## 🚀 Getting Started (Local Setup)

1. **Clone the repository**

```bash
git clone https://github.com/lokeshgehlot/DevConnect.git
cd DevConnect

Set up backend

cd server
npm install
Create a .env file in /server with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run backend

node server.js
Set up frontend

cd ../client
npm install
npm start

📸 Screenshots



🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first.
