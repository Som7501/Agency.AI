<div align="center">

  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" />
  <br />
  <br />

  <h1>✨ Digital Impact Agency Portfolio</h1>

  <p>
    A modern, high-performance agency portfolio website built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Framer Motion</strong>. 
    Features smooth scroll animations, a custom interactive cursor, and a fully toggleable dark/light mode.
  </p>

  <p>
    <a href="#features"><strong>Features</strong></a> ·
    <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#preview"><strong>Preview</strong></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  </p>
</div>

<br />

## 🚀 About The Project

This project is a responsive single-page application designed for digital agencies or creative portfolios. It emphasizes user experience through micro-interactions (like the custom cursor) and staggered entrance animations.

The architecture is component-based, utilizing **React Hooks** (`useRef`, `useEffect`, `useState`) for state management and DOM manipulation.

## ✨ Key Features

* **🎨 Dynamic Theme Switching:** Seamless Light and Dark mode toggle with local storage persistence.
* **🖱️ Custom Interactive Cursor:** A lagging cursor ring effect purely calculated via JavaScript math (Linear interpolation) for a fluid feel.
* **⚡ Smooth Animations:** Extensive use of `framer-motion` for scroll-triggered reveals (Fade-in, Slide-up, Staggered Grids).
* **📱 Fully Responsive:** Mobile-first design with a custom sidebar navigation for smaller screens.
* **🔔 Toast Notifications:** Integrated `react-hot-toast` for user feedback.
* **🧩 Modular Components:** Clean separation of concerns (Hero, Services, Teams, Navbar).

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Component-based UI Architecture |
| **Tailwind CSS** | Utility-first styling & Dark Mode implementation |
| **Framer Motion** | Complex animations and gestures |
| **React Hot Toast** | Notification/Toast popups |
| **Vite** | Blazing fast build tool and development server |

---

## 📸 Preview

### 🌓 Dark/Light Mode
The application checks `localStorage` on boot to apply the user's preferred theme.

```javascript
// From App.jsx
const [theme, setTheme] = useState(
  localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);
```

###🖱️ Custom Cursor Logic
The cursor utilizes requestAnimationFrame and linear interpolation (lerp) for that smooth "lag" effect.


```javascript
// From App.jsx
const animate = () => {
  position.current.x += (mouse.current.x - position.current.x) * 0.1
  position.current.y += (mouse.current.y - position.current.y) * 0.1
  // ... transform styles applied via Refs
}
```

##💻 Installation & Setup
Follow these steps to get the project running locally.

Prerequisites
Node.js (v16 or higher)

npm or yarn

Steps
Clone the repository

Bash

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
Install dependencies

Bash

npm install
Install specific libraries (if missing)

Bash

npm install framer-motion react-hot-toast
Run the development server

Bash

npm run dev
Open your browser Visit http://localhost:5173 (or the port shown in your terminal).

##📂 Project Structure
Plaintext

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

##🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

@@📝 License
Distributed under the MIT License. See LICENSE for more information.

<div align="center"> <p>Made with ❤️ using React & Tailwind</p> </div>
