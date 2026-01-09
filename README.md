<div align="center">

![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

<h1>✨ Digital Impact Agency</h1>

<p>
A modern, high-performance <b>agency portfolio website</b> built with  
<b>React</b>, <b>Tailwind CSS</b>, and <b>Framer Motion</b>.
</p>

<p>
Smooth animations • Interactive UI • Dark / Light Mode
</p>

<br/>

<a href="https://agency-ai-for-dev.vercel.app" target="_blank">
  <img src="https://img.shields.io/badge/🚀 Live%20Website-Visit%20Now-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</a>

<br/><br/>

<p>
<a href="#-features">Features</a> •
<a href="#-tech-stack">Tech Stack</a> •
<a href="#-preview">Preview</a> •
<a href="#-installation--setup">Installation</a> •
<a href="#-project-structure">Structure</a>
</p>

<br/>

<p>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
</p>

</div>

---

## 🚀 About The Project

**Digital Impact Agency** is a responsive single-page portfolio website designed for **digital agencies, startups, and creative professionals**.

The project focuses on:
- Clean UI/UX
- Micro-interactions
- Smooth, performance-friendly animations

Built using a **component-based React architecture**, the app leverages modern hooks like `useState`, `useEffect`, and `useRef` for state management, DOM interactions, and animation logic.

---

## ✨ Features

- 🎨 **Dynamic Theme Switching**  
  Seamless Dark / Light mode toggle with `localStorage` persistence.

- 🖱️ **Custom Interactive Cursor**  
  Smooth lag-based cursor animation using linear interpolation (LERP).

- ⚡ **Smooth Animations**  
  Scroll-triggered animations using **Framer Motion** (fade, slide, stagger).

- 📱 **Fully Responsive Design**  
  Mobile-first layout with a collapsible sidebar navigation.

- 🔔 **Toast Notifications**  
  User feedback via `react-hot-toast`.

- 🧩 **Modular Component Structure**  
  Clean separation of UI components (Hero, Services, Teams, Navbar, etc.).

---

## 🛠️ Tech Stack

| Technology | Usage |
|----------|------|
| **React.js** | Component-based UI |
| **Tailwind CSS** | Styling & Dark Mode |
| **Framer Motion** | Animations |
| **React Hot Toast** | Notifications |
| **Vite** | Fast development & build |

---

## 📸 Preview

### 🌗 Dark / Light Mode Logic

```js
// App.jsx
const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);

```

### 🖱️ Custom Cursor Logic
The cursor utilizes requestAnimationFrame and linear interpolation (lerp) for that smooth "lag" effect.


```javascript
// From App.jsx
const animate = () => {
  position.current.x += (mouse.current.x - position.current.x) * 0.1
  position.current.y += (mouse.current.y - position.current.y) * 0.1
  // ... transform styles applied via Refs
}
```

---

## 💻 Installation & Setup
Follow these steps to get the project running locally.

### Prerequisites

- Node.js (v16 or higher)

- npm or yarn

### Steps


```Bash

# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Move into the project directory
cd your-repo-name

# Install dependencies
npm install

# (Optional) Install required libraries
npm install framer-motion react-hot-toast

# Start development server
npm run dev

```
### 📍 Open: http://localhost:5173

---

## 📂 Project Structure

```Plaintext

src/
├── assets/          # Images, icons, and data objects
├── Components/      # React Components
│   ├── ContactUs.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx     # Main landing section with animations
│   ├── Navbar.jsx   # Sticky header with mobile menu
│   ├── Services.jsx # Grid layout for services
│   ├── Teams.jsx    # Team profile cards
│   ├── ...
├── App.jsx          # Main layout, Cursor Logic, Theme State
└── main.jsx         # Entry point

```
---

## 🤝 Contributing
Contributions are always welcome 💙

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m "Add AmazingFeature"

# Push to GitHub
git push origin feature/AmazingFeature

```

### Open a Pull Request 🚀

---

## 📄 License

This project is licensed under the MIT License.

---


## ⭐ Support the Project

If you found this useful, consider giving it a star ⭐

---

<div align="center"> <p>Made with ❤️ using React & Tailwind</p> </div>
