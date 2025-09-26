# Portfolio Website for Frontend Developer & Telegram Bot Specialist

## Overview

This is a modern, multilingual portfolio website for a developer specializing in frontend development and Telegram bot creation. The application features a responsive single-page design with sections for services, portfolio, testimonials, and contact functionality. It supports three languages (English, Russian, Turkish) and includes a working contact form with backend API integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses React with TypeScript as the core frontend framework, built with Vite for fast development and optimized builds. The UI is constructed using shadcn/ui components built on top of Radix UI primitives for accessibility and Tailwind CSS for styling. The design follows a component-based architecture with reusable UI components and proper separation of concerns.

**Key Frontend Decisions:**
- **React + TypeScript**: Provides type safety and modern development experience
- **Vite**: Fast build tool with hot module replacement for development
- **shadcn/ui + Radix UI**: Accessible, customizable component library
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Framer Motion**: Smooth animations and transitions for enhanced user experience
- **React Hook Form + Zod**: Form handling with robust validation
- **TanStack Query**: Data fetching and state management for API calls

### Internationalization
The application implements comprehensive multilingual support using react-i18next with language detection and local storage persistence. Translation files are organized by language (en.json, ru.json, tr.json) with fallback to English.

### State Management
Uses TanStack Query for server state management and React's built-in state for local component state. Form state is managed through React Hook Form with Zod schema validation.

### Backend Architecture
The backend is built with Express.js following a RESTful API design pattern. It uses a modular structure with separate route handlers and storage abstraction.

**Backend Components:**
- **Express Server**: Main application server with middleware for logging and error handling
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Storage Abstraction**: Interface-based storage pattern with in-memory implementation
- **Validation**: Zod schemas for request validation shared between client and server

### Database Design
The application uses Drizzle ORM with PostgreSQL support, though currently runs with an in-memory storage implementation. The schema defines two main tables:

**Database Tables:**
- **contact_messages**: Stores contact form submissions with fields for name, email, subject, message, and timestamp
- **users**: Basic user table (unused in current implementation but maintained for extensibility)

The database schema is defined in TypeScript with Drizzle ORM providing type-safe database operations and migrations.

### Development Setup
The project uses a monorepo structure with shared schemas and utilities. Development workflow includes hot module replacement for frontend changes and automatic server restart for backend modifications.

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React support for Vite
- **react**: Frontend framework
- **react-dom**: React DOM rendering
- **express**: Backend web framework
- **typescript**: Type checking and compilation

### UI and Styling
- **@radix-ui/***: Accessible component primitives (accordion, dialog, form controls, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **framer-motion**: Animation library

### Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod schemas

### Internationalization
- **react-i18next**: React integration for i18next
- **i18next**: Internationalization framework
- **i18next-browser-languagedetector**: Automatic language detection

### Data Management
- **@tanstack/react-query**: Server state management and data fetching
- **drizzle-orm**: TypeScript ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL client

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **drizzle-kit**: Database migrations and schema management

### Routing and Navigation
- **wouter**: Lightweight client-side routing

The application is configured to work seamlessly in the Replit environment with specialized Vite plugins for development and error handling. All dependencies are managed through npm with lock file for consistent installations.