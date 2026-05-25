# Andres Ribaldo - To-Do List Application

A simple, dynamic, and responsive **To-Do List application** built with modern web technologies.

This project features a frontend styled with **Tailwind CSS v4** powered by **Vite**, and a mock backend powered by **json-server** to persist your tasks dynamically via REST API endpoints (`GET`, `POST`, `DELETE`).

---

# 📝 Description

This is a classic To-Do List web application designed to manage daily activities dynamically.

The project implements a **decoupled architecture** where the frontend communicates with a local REST API.

It allows users to:

- Create interactive text input fields
- Save task data in real-time to a local JSON-based database
- Permanently delete records from both the user interface and the server

---

# 🛠️ Technologies Used

- **Vite 8**  
  A next-generation, fast, and lightweight frontend build tool and development server.

- **Tailwind CSS v4**  
  A utility-first CSS framework for creating modern, responsive, and optimized web designs directly inside HTML.

- **JavaScript (ES6+)**  
  Client-side logic utilizing native modules, DOM manipulation, and asynchronous network requests (`fetch`, `async/await`).

- **JSON-Server**  
  A tool that spins up a full mock REST API from a local JSON file, ideal for rapid prototyping and development.

- **HTML5**  
  Semantic structure for the web interface.

---

# 📁 Project Structure

Below is the organization of the main files and folders in this project:

```plaintext
andres-ribaldo/
├── src/
│   ├── database.json   # Local database (managed by json-server)
│   ├── main.js         # Main frontend logic and API Fetch requests
│   └── style.css       # Tailwind CSS configuration and imports
├── index.html          # Main HTML structure and user interface
├── package.json        # Project configuration, scripts, and dependencies
└── README.md           # Project documentation