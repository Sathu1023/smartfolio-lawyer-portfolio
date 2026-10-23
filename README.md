# ⚖️ Smartfolio — Senior Advocate & Legal Counsel Portfolio

A modern, high-performance portfolio website crafted for **Adv. Jonathan Vance** (Senior Advocate, Supreme Court of India & International Arbitration Counsel). Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**, featuring glassmorphism aesthetics, interactive 3D physics, animated metrics, and a consultation scheduling system.

---

## 🌟 Highlights & Features

- **🏛️ Interactive 3D Hero Section**
  - Mouse-tracking 3D tilt physics on the counsel presentation card.
  - Smooth cycling title cycler (*Supreme Court Trial Counsel*, *Constitutional Law Strategist*, *Commercial Arbitration Counsel*, *High Court Appellate Advocate*).
  - Real-time chamber status indicator with animated ping badge.
  - Rapid credential ribbons (Harvard Law LL.M., Supreme Court Bar, 25+ Years Experience).

- **📊 Animated Impact Metrics**
  - Viewport-triggered animated counters for key milestones:
    - **25+** Years of Legal Experience
    - **1,850+** High-Profile Cases Resolved
    - **98.4%** Favorable Bench Win Rate
    - **$140M+** In Settlements & Arbitral Awards

- **📜 Practice Disciplines (Services)**
  - Interactive service cards with custom gradient borders, hover glows, and distinct accent themes:
    - *Constitutional & Writ Jurisdiction* (Articles 32 & 226)
    - *Corporate & Cross-Border Arbitration* (SIAC, LCIA, ICC)
    - *White-Collar Criminal Defense & Bail Proceedings*
    - *Real Estate & Infrastructure Litigation* (RERA, Commercial Titles)

- **⏳ Career Milestones & Timeline**
  - Chronological journey detailing academic laurels and designations:
    - Harvard Law School LL.M. (Dean’s Scholar Prize)
    - National Law School of India B.A., LL.B. (Honors)
    - Lead Litigation Partner & Senior Managing Counsel at Vance Chambers.

- **💬 Client Endorsements & Landmark Outcomes**
  - Verified testimonial cards from corporate general counsels, trustees, and executives.
  - Client trust statistics and legal rating badge indicators.

- **📅 Interactive Consultation Booking Modal**
  - Multi-field confidential preliminary consultation form.
  - Practice discipline selector, preferred consultation slots (*Morning Chambers*, *Afternoon Conference*, *Evening Consultation*), and validation handling.
  - Framer Motion backdrop transitions with modal trap and ESC key closing.

- **✨ Luxury Design & Aesthetics**
  - Ambient aurora gradient mesh and floating legal icons (Scales of Justice, Gavel, Shield).
  - Glassmorphic top floating navigation with active section tracking on scroll.
  - Dedicated mobile quick-action dock for one-tap consultations and phone calls.
  - Respects user accessibility preferences via `reducedMotion="user"`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library for component architecture |
| **[Vite 8](https://vitejs.dev/)** | Lightning-fast development server and production bundler |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Next-generation utility-first styling engine with `@tailwindcss/vite` |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth scroll-linked animations, spring physics, and modal transitions |
| **[Lucide React](https://lucide.dev/)** | Clean, accessible vector icons for legal and interface elements |
| **Google Fonts** | *Cinzel*, *Cormorant Garamond*, *Playfair Display*, and *Plus Jakarta Sans* |

---

## 📁 Project Structure

```text
Smartfolio_lawyer-portfolio/
├── public/
│   ├── hero-lawyer.jpg        # Primary hero portrait of counsel
│   ├── jonathan_vance.jpg     # Alternate portrait asset
│   └── senior-attorney.jpg    # Secondary profile photo
├── src/
│   ├── components/
│   │   ├── BookingModal.jsx   # Interactive consultation booking popup
│   │   ├── CTA.jsx            # High-impact chamber retention banner
│   │   ├── Experience.jsx     # Career journey & education timeline
│   │   ├── FloatingIcons.jsx  # Ambient floating legal symbols
│   │   ├── Footer.jsx         # Chambers contact info, links & Bar credentials
│   │   ├── Hero.jsx           # 3D tilt hero card, bio, credentials ribbon
│   │   ├── Logo.jsx           # Scales of Justice SVG logo mark & monogram
│   │   ├── Navbar.jsx         # Sticky glassmorphism header & mobile navigation
│   │   ├── Services.jsx       # Legal practice areas & disciplines
│   │   ├── Stats.jsx          # Animated numbers & impact statistics
│   │   └── Testimonials.jsx   # Client endorsements & trust ratings
│   ├── App.jsx                # Root layout, scroll indicator & state manager
│   ├── index.css              # Custom aurora gradients, shimmer effects & styles
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template with metadata & Google Fonts
├── package.json               # Dependencies and build scripts
└── vite.config.js             # Vite configuration with Tailwind CSS plugin
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version **18.0.0** or higher is recommended).

### 1. Clone or Navigate to the Repository

```bash
cd Smartfolio_lawyer-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### 4. Build for Production

```bash
npm run build
```

The optimized static assets will be compiled into the `dist/` directory, ready to be deployed to Vercel, Netlify, GitHub Pages, or any static hosting service.

### 5. Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Customization Guide

### 1. Personal Details & Bio
Open [`src/components/Hero.jsx`](file:///d:/Intern%20OFF/Portfolio/Smartfolio_lawyer-portfolio/src/components/Hero.jsx) to update:
- **Name & Title**: Modify `Adv. Jonathan Vance` and designations.
- **Roles Array**: Edit the `roles` array to customize the cycling specialties:
  ```javascript
  const roles = [
    'Supreme Court Trial Counsel',
    'Constitutional Law Strategist',
    'Commercial Arbitration Counsel',
    'High Court Appellate Advocate',
  ]
  ```
- **Profile Image**: Replace `hero-lawyer.jpg` inside the `public/` folder with your own headshot.

### 2. Practice Areas
Open [`src/components/Services.jsx`](file:///d:/Intern%20OFF/Portfolio/Smartfolio_lawyer-portfolio/src/components/Services.jsx) and edit the `services` array to customize your legal practice disciplines, icons, and gradient themes.

### 3. Career Timeline & Education
Open [`src/components/Experience.jsx`](file:///d:/Intern%20OFF/Portfolio/Smartfolio_lawyer-portfolio/src/components/Experience.jsx) and adjust the `journey` list with your educational degrees, bar admissions, and past counsel positions.

### 4. Consultation Booking Form & Contact Information
- **Practice Areas in Form**: Edit `practiceAreas` in [`src/components/BookingModal.jsx`](file:///d:/Intern%20OFF/Portfolio/Smartfolio_lawyer-portfolio/src/components/BookingModal.jsx).
- **Contact Details**: Update the chamber address, hotline phone number, and confidential email in [`src/components/Footer.jsx`](file:///d:/Intern%20OFF/Portfolio/Smartfolio_lawyer-portfolio/src/components/Footer.jsx) and [`src/components/CTA.jsx`](file:///d:/Intern%20OFF/Portfolio/Smartfolio_lawyer-portfolio/src/components/CTA.jsx).

---

## 🔒 Confidentiality & Disclaimer Notice

This website includes appropriate legal disclaimers compliant with Bar Council guidelines regarding legal practitioner websites, ensuring that all information is provided for introductory and informational purposes upon the visitor's voluntary request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
