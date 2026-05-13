URL Shortener SaaS 🚀

A modern and fully responsive URL Shortener Dashboard built with React, Firebase, TailwindCSS, and React Router.
Users can create custom short links, track analytics, manage links, and monitor click activity in real time.

✨ Features
🔐 Firebase Authentication
🔗 Custom URL Shortening
📊 Analytics Dashboard
📈 Click Tracking
👤 User Profiles
📱 Fully Responsive UI
⚡ Real-time Firestore Database
🎨 Modern TailwindCSS Design
🛡 Protected Routes
📋 Copy Short URL
🗑 Delete Links
📷 QR Code Generator


🛠 Tech Stack
Frontend
React
React Router DOM
TailwindCSS
Backend / Database
Firebase Authentication
Firebase Firestore
Firebase Hosting
Additional Libraries
qrcode.react

📂 Project Structure
src/
│
├── components/
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Analytics.jsx
│   ├── Create.jsx
│   ├── Home.jsx
│   ├── Layout.jsx
│   ├── Links.jsx
│   ├── Login.jsx
│   ├── Profile.jsx
│   ├── Redirect.jsx
│   └── Register.jsx
│
├── firebase.js
├── App.jsx
└── main.jsx

🔥 Firebase Features Used
Authentication
Email & Password Login
User Registration
Protected Routes
Logout System
Firestore Database

Each shortened URL stores:

{
  originalUrl: string,
  shortCode: string,
  clickCount: number,
  createdAt: timestamp,
  userId: string,
  clicks: [
    {
      time: number,
      device: string
    }
  ]
}


⚙️ Installation
1. Clone Repository
git clone https://github.com/yourusername/url-shortener.git
2. Install Dependencies
npm install
3. Configure Firebase

Create a Firebase project and replace your config inside:

src/firebase.js

Example:
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

4. Start Development Server
npm run dev

🚀 Deployment
Build Project
npm run build
Deploy to Firebase
firebase deploy

📊 Dashboard Features
Home
Total Links
Total Clicks
Performance Overview
Links
View all shortened links
Copy short URLs
Delete URLs
Create
Create custom aliases
Duplicate alias protection
Analytics
Click tracking
Event monitoring
Device tracking
Profile
User information
Firebase UID

🔐 Security
Protected application routes
Firebase authentication checks
User-based Firestore queries
Secure client-side navigation
📱 Responsive Design

Optimized for:
Desktop
Tablet
Mobile Devices

🌐 Live Demo
https://url-shortener-6ac1f.web.app

💡 Future Improvements
Custom domains
Advanced analytics charts
Expiration dates
Password protected URLs
Admin dashboard
Dark/Light mode
Geo-location tracking
API support
👨‍💻 Author

Developed by Aulona Kerqeli

📄 License
This project is licensed under the MIT License.

⭐ Support
If you like this project, give it a ⭐ on GitHub!



