⚡ Radio Rust
Rock band landing page — static HTML/CSS/JS

HTML5
CSS3
Vanilla JS
Responsive
📋 Description
Landing page for Radio Rust, a fictional rock band. The site features a hero section, upcoming tour dates, a band bio, a multimedia gallery, and a newsletter footer. Design uses a dark theme with red accents and a dramatic red glow aesthetic.

📁 Project structure
radio-rust/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   └── img-1.jpg … img-9.jpg
│   └── icons/
│       ├── logo.png
│       └── logo.ico
└── README.md
✨ Features
Hero section — fullscreen image with glowing red box-shadow overlay
Events table — alternating red/dark rows with tour date info
About section — band photo, description, and influences list
Media grid — 3-column photo gallery (6 images)
Footer — brand blurb + newsletter email subscription
Mobile nav — hamburger menu toggle via JS on screens ≤ 768px
🚀 Getting started
No dependencies or build step required. Just open the project in a browser:

git clone https://github.com/your-user/radio-rust.git
open index.html
Or serve locally with any static server (e.g. npx serve . or VS Code Live Server).

🧩 How the mobile menu works
The hamburger button (.menu-toggle) is hidden on desktop. On mobile (≤ 768px), clicking it toggles the class nav-active on the .nav element, which switches it from display: none to a vertical flex column via CSS.

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});
🎨 Design
Background
#181818
Accent
#BE0000
Text
#f5f5f5
Font
Arial / Times New Roman
📄 License
MIT — free to use and modify.
