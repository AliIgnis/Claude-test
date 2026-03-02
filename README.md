# Ali Mahmood - Portfolio Website

A bilingual (DE/EN) portfolio website for a Senior Backend Developer, built with **Angular 19** using standalone components, signals-based state management, and a Japanese-inspired color palette.

## Features

- **Angular 19** with standalone components and the new `@if`/`@for` control flow syntax
- **Bilingual support** (German / English) with signal-based reactive i18n service
- **Dark mode** with system preference detection and manual toggle
- **Scroll-triggered animations** using a custom `IntersectionObserver` directive
- **SEO & Open Graph** meta tags updated dynamically on language change
- **Downloadable CV** button in the hero section
- **Responsive design** optimized for desktop, tablet, and mobile
- **Contact form** with reactive form validation
- **50 unit tests** covering services and components

## Architecture

```
src/app/
  core/
    data/             # Translation datasets (de.ts, en.ts, skills.ts)
    models/           # TypeScript interfaces (Project, SkillCategory, TranslationSet)
    services/         # Singleton services (I18nService, ThemeService, SeoService)
  shared/
    directives/       # ScrollAnimateDirective (IntersectionObserver)
    pipes/            # TranslatePipe
  features/
    header/           # Navigation, language switch, dark mode toggle
    hero/             # Landing section with CTA and CV download
    about/            # Bio, profile image, highlights
    skills/           # Skill categories grid with tech badges
    projects/         # Project timeline with tech stacks
    education/        # Degrees, certifications, language proficiency
    contact/          # Reactive form with validation
    footer/           # Footer with dynamic year
```

### Design Patterns

| Pattern | Where |
|---------|-------|
| **Singleton services** | `I18nService`, `ThemeService`, `SeoService` via `providedIn: 'root'` |
| **Signals** | Reactive state for language, theme, and UI toggles — no RxJS needed |
| **Structural directive** | `ScrollAnimateDirective` for reusable scroll-reveal behavior |
| **Feature-based structure** | Each section is an isolated standalone component |
| **Separation of concerns** | Data (translations) separated from presentation (components) and behavior (services) |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (22 recommended)
- npm 9+

## Getting Started

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app reloads on source changes.

### Production build

```bash
npm run build
```

Build output goes to `dist/portfolio/`.

### Run tests

```bash
npm test
```

Runs 50 unit tests via Karma + Jasmine.

## Docker

### Build

```bash
docker build -t portfolio .
```

Uses a multi-stage build: Node.js builds the Angular app, then nginx serves the static output.

### Run

```bash
docker run -p 8080:8080 portfolio
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Environment Variables

| Variable   | Default                    | Description                                                    |
|------------|----------------------------|----------------------------------------------------------------|
| `PORT`     | `8080`                     | Port nginx listens on inside the container                     |
| `BASE_URL` | `http://localhost:${PORT}` | URL printed at startup (set to your public/custom domain)      |

### Examples

**Custom port (container-internal 3000, mapped to host 9090):**

```bash
docker run -e PORT=3000 -p 9090:3000 portfolio
```

**Custom base URL (behind a reverse proxy):**

```bash
docker run -e BASE_URL=https://alimahmood.dev -p 8080:8080 portfolio
```

### Stop

```bash
docker stop $(docker ps -q --filter ancestor=portfolio)
```

## Customization

### Profile image

Place your photo at `src/assets/profile.jpg`. The about section will display it automatically. A fallback "AM" placeholder is shown if the image is missing.

### CV download

Place your resume PDF at `src/assets/cv.pdf`. The download button in the hero section links to this file.

### Translations

Edit the translation data in:
- `src/app/core/data/de.ts` — German
- `src/app/core/data/en.ts` — English

### Skills

Edit `src/app/core/data/skills.ts` to add, remove, or reorder skill categories and tags.

### Contact information

Update the email and phone in `src/app/features/contact/contact.component.html`.

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Angular 19 |
| Language | TypeScript 5.7 |
| Styling | SCSS with CSS custom properties |
| State | Angular Signals |
| Forms | Angular Reactive Forms |
| Animations | IntersectionObserver + CSS transitions |
| Testing | Karma + Jasmine (50 specs) |
| Build | Angular CLI / esbuild |
| Serving | nginx (Docker) |
