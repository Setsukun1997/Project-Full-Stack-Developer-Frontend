# 🚀 Project Full Stack Developer – Frontend

A production-ready React frontend for a full stack web application. Built with modern tools and best practices, this app handles user authentication, protected routing, and dynamic CRUD operations. Designed to integrate seamlessly with a Node.js + Express backend and MongoDB Atlas database.

---

## 🧰 Tech Stack

- **Frontend Framework:** React 18
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Authentication:** JWT-based middleware
- **Deployment:** Vercel

---

## ✨ Features

- 🔐 User registration and login
- 🛡️ Protected dashboard with middleware
- 🧠 Idea CRUD system (Create, Read, Update, Delete)
- 📱 Responsive UI for mobile and desktop
- ⚙️ Axios instance for centralized API calls

---

## 📦 Folder Structure

<img width="330" height="384" alt="Screenshot 2025-09-17 140518" src="https://github.com/user-attachments/assets/32ef32b7-cc85-4828-94b6-140d95a290a2" />


---

## 🚀 Deployment

This app is deployed on [Vercel](https://vercel.com), optimized for client-side routing and fast global delivery.

### 🔧 Vercel Setup Notes

- Root directory: `frontend-app`
- Build command: `npm run build`
- Output directory: `build`
- Environment variables: set via Vercel dashboard
- For React Router support, include `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}


git clone https://github.com/Setsukun1997/Project-Full-Stack-Developer-Frontend.git
cd frontend-app
npm install
npm start
