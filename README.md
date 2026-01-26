# Global Buying Solutions Website

Modern, responsive website for Global Buying Solutions - a UK-based trade infrastructure company transforming how South African businesses engage with global markets.

## 🌐 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Product Showcases**: Zarify (Intelligent Procurement) and Capify (Global Financial Operations)
- **Contact Form**: Integrated modal form for inquiries
- **Premium Aesthetics**: Dark theme with glassmorphism and smooth animations
- **Built with Vite + React**: Fast development and optimized production builds

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Navigate to project directory
cd n:/GBS/website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Production files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
website/
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── ProblemSolution.jsx
│   │   ├── Technology.jsx
│   │   ├── ZarifySection.jsx
│   │   ├── CapifySection.jsx
│   │   ├── ContactCTA.jsx
│   │   └── ContactModal.jsx
│   ├── assets/          # Images and static files
│   ├── index.css        # Global styles
│   ├── App.jsx          # Main component
│   └── main.jsx         # Entry point
├── public/              # Public assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🎨 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Vanilla CSS with CSS-in-JS
- **Fonts**: Plus Jakarta Sans, Unbounded (Google Fonts)

## 📱 Responsive Breakpoints

- Mobile: 320px - 600px
- Tablet: 600px - 900px
- Desktop: 900px+

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions using GitHub and Vercel.

## 📧 Contact

For inquiries, use the "Get In Touch" form on the website, which sends to: inquiry@globalbuying.solutions

## 📄 License

Copyright © 2026 Global Buying Solutions Limited. All rights reserved.
