# Explore Singapore Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Contribution Guidelines](#contribution-guidelines)

## Overview

The Explore Singapore Application is a group project designed as part of a NUS Mtech Module SWE5006. The goal is to provide users with personalized itineraries and suggestions to explore Singapore's landmarks, attractions, and cultural hotspots. Leveraging AI-powered features, the app aims to offer unique and tailored experiences to both locals and tourists.

This repository includes:

1. A frontend built with React, TypeScript, and Tailwind CSS using Vite for rapid development and hot module replacement.
2. A backend built with Python and FastAPI, containerized using Docker. It exposes API endpoints to serve data and handle AI-powered itinerary logic (e.g., calls to OpenAI APIs).

## Features

- **Custom Itineraries:** Generate personalized day-by-day travel plans in JSON format.
- **Attraction Recommendations:** Get curated suggestions based on user preferences.
- **Interactive UI:** Seamless navigation and engaging user experience powered by React and TypeScript.
- **AI Integration:** Utilizes advanced AI capabilities to provide insightful recommendations.
- **RESTful API Backend**: Handles data retrieval, AI logic, and endpoints for managing user requests.

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:sree-r-one/SWE5006.git
   ```
2. Navigate to the project directory:
   ```bash
   cd explore-singapore
   ```
3. Run the application using Docker Compose:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   docker-compose -f docker-compose.prod.yml up --build
   ```

## Tech Stack

**Frontend:**

- React
- TypeScript
- Vite
- Tailwind CSS

**AI Features:**

- OpenAI GPT-based APIs

**Backend:**

- Python 3.10+
- FastAPI for building RESTful APIs
- Uvicorn (development) or Gunicorn + Uvicorn workers (production)

## Project Structure

```
explore-singapore/
├── frontend/
│   ├── node_modules/         # Dependencies
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Application pages
│   │   ├── assets/           # Static assets (images, icons, etc.)
│   │   ├── utils/            # Helper functions
│   │   ├── App.tsx           # Root component
│   │   └── main.tsx          # Application entry point
│   ├── .gitignore
│   ├── Dockerfile.dev        # Docker configuration for frontend (dev)
│   ├── docker-compose.dev.yml # Docker Compose configuration for frontend
│   ├── eslint.config.js
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── README.md             # Frontend-specific docs
├── backend/
│   ├── app/
│   │   ├── main.py           # FastAPI application entry point
│   │   └── ...               # Other modules (routers, models, etc.)
│   ├── requirements.txt      # Backend dependencies (FastAPI, Uvicorn, etc.)
│   ├── Dockerfile            # Dockerfile for containerizing FastAPI
│   ├── docker-compose.yml    # (Optional) Docker Compose file for the backend
│   └── README.md             # Backend-specific docs
├── Documentation/            # Additional project documentation
└── docker-compose.dev.yml    # Main Compose file combining both frontend & backend


```

## Contribution Guidelines

As this is a group project, the following guidelines should be followed:

1. Each member should work on their assigned tasks and maintain clear communication with the team.
2. Use meaningful commit messages when pushing code.
3. Create a pull request and request a review from at least one team member before merging changes.
4. Document any major changes in the code to ensure clarity for all team members.
5. Feature Branches: Work on a dedicated branch for each feature or bugfix.
6. Commit Messages: Use meaningful commit messages to describe changes.
7. Pull Requests (PRs): Create a PR for your branch into the main or development branch. Request reviews from at least one team member before merging.
8. Documentation: Document any major changes in the code or architecture to maintain clarity for all team members.
