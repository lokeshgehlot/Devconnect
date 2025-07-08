💬 DevConnect — Developer Collaboration Platform (MERN Stack)
📌 Project Overview
DevConnect is a full-stack developer collaboration platform built using the MERN stack (MongoDB, Express, React, Node.js).

It allows developers to:

📄 Create profiles and showcase skills

🔍 Discover and connect with other developers

💬 Send and receive messages (inbox + sentbox)

👨‍💻 Explore profiles based on technology stacks

📷 Screenshots- 

🏠 Home Page 
Screenshots/Dashboard.png

👥 Developer Directory
Screenshots/Devlopers.png

💬 Messaging Interface
Screenshots/Inbox.png
Screenshots/Sentbox.png

📄 User Profile Page
Screenshots/User Profile.png

⚙️ Installation & Setup
1. 📁 Clone the repository
```
git clone https://github.com/lokeshgehlot/Devconnect.git
cd Devconnect
```
2. 🖥 Backend Setup
```
cd server
npm install
```
Create a .env file inside the server/ folder:

env -
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start backend:
```
node server.js
```
3. 🌐 Frontend Setup
```
cd ../client
npm install
npm start
```
The app will run at http://localhost:3000

🔑 Features
✅ JWT-based user authentication

🧑‍💻 Developer profiles with skills, GitHub & LinkedIn links

🔍 Filter developers by skills

💬 Real-time messaging system

📨 Inbox and Sent messages tracking

🔐 Protected API routes

🛠 Tech Stack

**Frontend -	React.js
**Backend	- Node.js, Express.js
**Database -	MongoDB + Mongoose
**Auth -	JSON Web Tokens (JWT)
**Styling -	CSS (no external libraries used)

📫 Contact
Feel free to connect with me on LinkedIn or raise an issue in the repo for suggestions.

