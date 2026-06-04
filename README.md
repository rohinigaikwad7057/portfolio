# Rohini Gaikwad — Frontend Engineer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-f59e0b?style=flat-square&logo=github)](https://rohinigaikwad7057.github.io/portfolio/)
[![Angular](https://img.shields.io/badge/Angular-18-dd0031?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

A production-quality portfolio built with **Angular 18**, demonstrating modern frontend engineering patterns and deployed to GitHub Pages.

🔗 **Live:** https://rohinigaikwad7057.github.io/portfolio/

---

## Architecture Highlights

- **Standalone Components** — no NgModules; every component is self-contained and tree-shakeable
- **Angular Signals** — reactive state management using `signal()` and `computed()` throughout (navbar active section, hero typewriter, chat state)
- **Modern Control Flow** — `@if`, `@for`, `@switch` control flow in all templates (Angular 17+)
- **Lazy Loading** — Home route is lazily loaded on first navigation
- **IntersectionObserver** — navbar highlights active section in real time without scroll event polling
- **TypeScript strict mode** — `strict: true`, `noImplicitOverride`, `strictTemplates` in `tsconfig.json`

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Angular 18 (standalone components) |
| Language | TypeScript 5.5 (strict mode) |
| Styling | Global CSS design system + component-scoped CSS |
| Fonts | Outfit (display) + DM Sans (body) via Google Fonts |
| Icons | Font Awesome 6 + Devicons |
| Animations | AOS (Animate on Scroll) |
| Build | Angular CLI 18 (`@angular-devkit/build-angular:application`) |
| Deployment | GitHub Pages via `docs/` folder |

## Project Structure

```
src/
├── app/
│   ├── shared/
│   │   └── models/portfolio.models.ts   # TypeScript interfaces
│   ├── navbar/                          # Fixed nav + IntersectionObserver
│   ├── header/                          # Hero section + typewriter
│   ├── about/                           # About + profile stats
│   ├── skills/                          # Tech stack chip grid
│   ├── experience/                      # Timeline + education cards
│   ├── projects/                        # Project cards with live demos
│   ├── contact/                         # Contact form + info tiles
│   ├── ai-chat/                         # AI Resume Assistant chatbot
│   ├── app.component.*                  # Root + footer
│   ├── app.config.ts                    # Angular application config
│   └── app.routes.ts                    # Lazy-loaded routes
├── assets/
│   ├── images/                          # Profile photo, OG preview
│   └── CV.pdf                           # Downloadable resume
├── index.html                           # Meta, OG, JSON-LD, fonts
└── styles.css                           # Global design system tokens
```

## Local Development

> Recommended Node version: **18.x or 20.x**

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4200)
npm start

# Production build (output → docs/ for GitHub Pages)
npm run build:prod
```

## Key Sections

| Section | Description |
|---------|-------------|
| Hero | Typewriter role animation, floating tech badges, stats row |
| About | Profile, bio, detail grid, download CV |
| Skills | Grouped tech chips with Devicons and hover colour reveal |
| Experience | Timeline card — Infosys 4.5yr, with achievement-focused bullet points |
| Projects | Smart Appointment Scheduler · Task Manager · This Portfolio |
| Contact | Working contact form + info tiles (no phone number exposed) |
| AI Chat | Floating FAQ chatbot — ask about skills, projects, availability |

## Performance Targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

---

Built by [Rohini Gaikwad](https://www.linkedin.com/in/rohini-gaikwad7057/) · Frontend Engineer · Abu Dhabi, UAE
