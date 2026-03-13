# 🏏 Crictrack

Crictrack is a cricket tracking web application built using **Node.js**, **Express**, **EJS**, and **MongoDB**.  
It provides a structured web interface to manage and track cricket-related data, users, and statistics.

---

## 🚀 Features
- Express.js backend server
- EJS templating engine for dynamic rendering
- MongoDB database integration using Mongoose
- Organized routing structure
- Static file serving (CSS, JavaScript, Images)
- Development support with Nodemon
- Modular folder structure for scalability

---
## 🛠 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **EJS** – Templating engine
- **Morgan** – HTTP request logger
- **Cookie-Parser** – Middleware for handling cookies
- **Nodemon** – Development auto-restart tool

---

## 📂 Project Structure

```
Crictrack/
│
├── bin/                # Server startup scripts
├── public/             # Static files (CSS, JS, Images)
├── routes/             # Express route handlers
├── server/             # Core application logic
├── views/              # EJS templates
├── app.js              # Main Express app configuration
├── db.js               # MongoDB connection setup
├── package.json        # Project metadata and dependencies
└── .gitignore
```

---

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/malihashar/Crictrack.git
```

2. Navigate into the project directory

```bash
cd Crictrack
```

3. Install dependencies

```bash
npm install
```

---

## ▶️ Running the Application

### Development Mode (Auto Restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will typically run on:

```
http://localhost:3000
```

---

## 🗄 Database Setup

Ensure MongoDB is installed and running locally, or configure your MongoDB connection string inside `db.js`.

Example:

```javascript
mongoose.connect("your-mongodb-connection-string");
```

---

## 📌 Available Routes

- `/` → Home page  
- `/users` → User-related routes  
- `/stats` → Cricket statistics pages  

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Push to your branch  
5. Open a pull request  

---

## 📄 License

No license specified.

---

## 👤 Author

Created by **malihashar*
