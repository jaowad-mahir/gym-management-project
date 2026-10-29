# GYMFLOW — Gym Management System

A modern, responsive gym management website built with React, Vite, and Tailwind CSS. GYMFLOW provides a clean and intuitive interface for showcasing gym management features, membership plans, and essential gym-related information.

## Overview

GYMFLOW is a frontend web application prototype designed to demonstrate how a modern gym management platform can look and feel. It features a dark interface with neon-lime accents, responsive layouts, interactive FAQ elements, and organized sections for presenting gym services.

The project is designed as a foundation for a future full-stack Gym Management System.

## Features

- **Modern Landing Page:** An attractive hero section with clear call-to-action buttons.
- **Responsive Navigation:** Navigation links for accessing different website sections.
- **Feature Showcase:** Dedicated cards for proposed gym management features.
- **Membership Plans:** Three sample membership plans with monthly pricing.
- **About Section:** An overview of the platform and its goals.
- **Testimonials:** Sample customer review cards.
- **Interactive FAQ:** Expandable questions and answers.
- **Contact Form UI:** A form with name, email, subject, and message fields.
- **Responsive Design:** Layouts adapted for desktop, tablet, and mobile screens.
- **Footer Navigation:** Quick links, feature links, and social media links.

> **Note:** This repository currently contains the frontend prototype. Backend services, database integration, authentication, real payment processing, and persistent data storage have not yet been implemented.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| Vite | Development server and build tooling |
| JavaScript | Application logic |
| JSX | React component structure |
| Tailwind CSS v4 | Styling and responsive design |
| React Router | Client-side routing |
| Lucide React | Icons |

## Project Structure

```text
gym-management/
├── public/
├── src/
│   ├── Components/
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Root.jsx
│   │   └── NotFound.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*The structure above represents the main files used in the current project. Your local folder may contain additional files.*

## Getting Started

Follow these steps to run GYMFLOW locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### Installation

**1. Clone the repository**

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/gym-management.git
```

**2. Navigate to the project directory**

```bash
cd gym-management
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |

## Membership Plans

The current interface displays the following sample membership plans:

| Plan | Monthly Price |
|---|---:|
| Basic | ৳999 |
| Pro | ৳1,999 |
| Elite | ৳3,499 |

These prices are for demonstration purposes only and do not represent active subscriptions or payment processing.

## Current Implementation Status

| Component | Status |
|---|---|
| Landing page and navigation | Implemented |
| Feature cards | Implemented |
| Membership plan UI | Implemented |
| About and testimonials sections | Implemented |
| Interactive FAQ | Implemented |
| Contact form interface | Demo only |
| Login and registration | Placeholder routes |
| Backend API | Not implemented |
| Database integration | Not implemented |
| Authentication | Not implemented |
| Real payment processing | Not implemented |

## Future Improvements

Planned enhancements for future versions include:

- Integrating a Node.js and Express.js backend.
- Using PostgreSQL for persistent data storage.
- Implementing secure authentication and role-based access.
- Developing member registration and management.
- Adding attendance tracking.
- Implementing membership expiration and payment records.
- Building an administrative dashboard with analytics.
- Connecting the contact form to an API or email service.
- Adding automated testing and production deployment.

## Design

GYMFLOW uses a dark charcoal background with neon-lime accents to create a modern fitness-inspired visual identity. Tailwind CSS utility classes provide responsive layouts, consistent spacing, and interactive hover effects.

## 👥 Contributors

- **Jaowad Mahir** — ID: C231206
- **Mehedi Hasan** — ID: C231204

## License

No license has been specified yet. If you intend to make this project open source, consider adding an appropriate license file, such as the MIT License, after deciding on the project's licensing terms.


---

If you find this project useful, consider giving the repository a star!
