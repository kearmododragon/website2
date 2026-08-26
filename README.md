# Personal Portfolio Website

Personal website and portfolio for Ciaran Kearney.

The site combines my professional portfolio with a more personal space, showcasing my projects, experience, technical skills, interests and life outside of software development.

Built with React and Vite.

---

## Project Structure

```text
website_mk2/
│
├── public/
│   └── images/
│       ├── projects/
│       └── skills/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SkillCard.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## Application Structure

The website is a React single-page application using React Router to provide separate pages and URLs.

```text
App
│
├── Navbar
│
├── Home
│
├── Projects
│   └── ProjectCard
│
├── About
│
├── Experience
│
├── Skills
│   └── SkillCard
│
└── Contact
```

---

## Pages

### Home

The landing page provides a brief introduction to who I am and what the website contains.

It is intentionally simple, with the other pages providing the detailed information.

### Projects

Contains my software development projects.

Projects are stored as objects in:

```text
src/data/projects.js
```

Each project contains information such as:

* Project title
* Project screenshot
* Live website
* GitHub repository

The projects are rendered using the reusable:

```text
src/components/ProjectCard.jsx
```

This means new projects can be added to `projects.js` without having to create additional page markup.

### About

A more personal section of the website.

This page is intended to cover:

* Interests
* Travel
* Sports
* Animals
* Video games
* Family background
* Places I've lived
* Current life

The About page may eventually develop into a more personal blog/gallery section, with photographs and individual pages for particular experiences or trips.

### Experience

Contains my employment history.

The page is structured into:

* Current role
* Previous experience
* Other professional experience

The amount of detail varies depending on how relevant each role is to my current career.

### Skills

Displays the technologies, languages and tools I have experience with.

Skills are stored as objects in:

```text
src/data/skills.js
```

Each skill contains:

* Skill name
* Skill image/logo
* Two example projects where the technology was used
* GitHub links demonstrating that usage

Skills are rendered using:

```text
src/components/SkillCard.jsx
```

The purpose of this structure is to provide evidence for the technologies listed rather than simply making unsupported claims about proficiency.

### Contact

Provides visitors with ways to contact me.

The page will eventually contain:

* Contact form
* LinkedIn
* Instagram

The contact form will be connected to a third-party form/email service rather than requiring a custom backend.

---

## Components

### Navbar.jsx

The main site navigation.

Uses React Router's `Link` component to navigate between pages without requiring full page reloads.

### ProjectCard.jsx

Reusable component for displaying individual projects.

Receives project information as a prop and generates the project card.

### SkillCard.jsx

Reusable component for displaying individual skills.

Receives skill information as a prop and displays the skill along with projects demonstrating its use.

---

## Data

The project deliberately separates content/data from presentation.

### projects.js

Contains the information used to generate project cards.

Example:

```js
{
  title: "Project Name",
  image: "/images/projects/project.png",
  liveUrl: "https://...",
  githubUrl: "https://..."
}
```

### skills.js

Contains the information used to generate skill cards.

Example:

```js
{
  name: "Python",
  image: "/images/skills/python.svg",
  projects: [
    {
      name: "Project One",
      githubUrl: "https://..."
    },
    {
      name: "Project Two",
      githubUrl: "https://..."
    }
  ]
}
```

---

## Routing

React Router handles the site's navigation.

| Page       | Route         |
| ---------- | ------------- |
| Home       | `/`           |
| Projects   | `/projects`   |
| About      | `/about`      |
| Experience | `/experience` |
| Skills     | `/skills`     |
| Contact    | `/contact`    |

---

## Technologies

Current technologies used:

* React
* Vite
* JavaScript
* HTML
* CSS
* React Router
* Git / GitHub

Additional technologies will be added as the website develops.

---

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The site will be available locally at:

```text
http://localhost:5173/
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Design

The website is being developed in stages.

### Stage 1 — Structure (Completed)

* React/Vite setup      [X]
* Page routing          [X]   
* Reusable components   [X]
* Data structures       [X]
* Basic page content    [X]

### Stage 2 — Content

* Finalise project selection  [X]
* Add project screenshots     [X]
* Add skill logos             [X]
* Write experience content    [X]
* Write About page            [X]
* Add social links
* Finalise contact details

### Stage 3 — Design

* Overall visual identity
* Typography
* Colours
* Navigation
* Project cards
* Skill cards
* Page layouts
* Responsive design
* Mobile optimisation

### Stage 4 — Functionality

* Contact form
* Interactive elements
* Galleries/slideshows
* Additional About/blog functionality

### Stage 5 — Deployment

* Production testing
* Link testing
* Performance checks
* Deployment
* Domain configuration
* Final portfolio review
