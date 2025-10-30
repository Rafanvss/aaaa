# Guia de Alimentação Saudável para Cães - Landing Page

## Overview

This is a modern, conversion-optimized single-page landing page built to sell a digital product called "Guia de Alimentação Saudável para Cães" (Healthy Dog Feeding Guide). The application is a React-based web application with an Express backend, designed as a high-conversion sales page with emotional connection and trust-building elements.

The landing page features:
- Hero section with compelling headline and call-to-action
- Product benefits and learning outcomes
- Countdown timer for urgency
- FAQ section using accordion components
- Testimonials and social proof
- Clean, professional design inspired by modern sales pages

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with one main landing page route

**UI Component System:**
- Shadcn/ui components library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for component variant management

**Design System:**
- Custom color palette with primary blue (#3A8DFF) and green (#35C48F)
- Poppins/Inter font families from Google Fonts
- Responsive breakpoint at 768px (mobile-first approach)
- Gradient buttons and modern card-based layouts
- CSS custom properties for theming (light mode configured, dark mode prepared)

**State Management:**
- TanStack Query (React Query) for server state and API data fetching
- React hooks for local component state
- Custom hooks for mobile detection and toast notifications

### Backend Architecture

**Server Framework:**
- Express.js web server
- TypeScript for type safety across the stack
- ESM (ES Modules) as the module system

**Development Setup:**
- Hot module replacement via Vite in development
- Development-only plugins: Replit cartographer and dev banner
- Custom error overlay for runtime errors
- TSX for running TypeScript directly in development

**Production Build:**
- Vite builds the client to `dist/public`
- esbuild bundles the server to `dist/index.js`
- Static file serving for production builds

**Request Handling:**
- JSON body parsing with raw body preservation for webhooks
- URL-encoded form data support
- Request logging middleware for API routes
- CORS and security headers ready for configuration

### Data Storage

**Database:**
- Drizzle ORM configured for PostgreSQL
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Schema-first approach with TypeScript types generated from schema
- Migration system using Drizzle Kit

**Current Schema:**
- Users table with id, username, and password fields
- UUID primary keys with PostgreSQL's `gen_random_uuid()`
- Zod schema validation integrated via drizzle-zod

**Storage Interface:**
- Abstract IStorage interface for CRUD operations
- MemStorage implementation for in-memory development/testing
- Prepared for PostgreSQL storage implementation
- Session management ready via connect-pg-simple

### External Dependencies

**UI Component Libraries:**
- @radix-ui/* - Comprehensive set of accessible, unstyled UI primitives (accordion, dialog, dropdown, tooltip, etc.)
- embla-carousel-react - Touch-friendly carousel component
- lucide-react - Icon library for consistent iconography
- cmdk - Command palette component
- react-day-picker - Calendar/date picker component
- vaul - Drawer/bottom sheet component

**Form Handling:**
- react-hook-form - Form state management
- @hookform/resolvers - Validation resolver integration
- zod - Runtime type validation and schema definition

**Styling:**
- tailwindcss - Utility-first CSS framework
- tailwind-merge & clsx - Utility for merging Tailwind classes
- class-variance-authority - Component variant styling
- autoprefixer - CSS vendor prefix automation

**Utilities:**
- date-fns - Date manipulation and formatting
- nanoid - Unique ID generation

**Development Tools:**
- @replit/vite-plugin-* - Replit-specific development enhancements
- drizzle-kit - Database migration and introspection tool
- esbuild - Fast JavaScript bundler for production server build

**API & Data Fetching:**
- @tanstack/react-query - Server state management and caching
- Fetch API for HTTP requests with custom wrapper functions

### Authentication & Authorization

Currently prepared but not implemented:
- User schema exists with username/password fields
- Session storage interface ready (connect-pg-simple for PostgreSQL sessions)
- Storage methods for user creation and retrieval defined
- Ready for implementation of authentication middleware and protected routes

### Routing & Navigation

**Client-Side:**
- Wouter for lightweight routing (~1KB)
- Route configuration in App.tsx
- Currently configured routes: Home (/), 404 fallback

**Server-Side:**
- API routes prefixed with `/api` (prepared in routes.ts)
- Static file serving for Vite build output
- Development: Vite middleware for HMR
- Production: Serves pre-built static files from dist/public

### Design Rationale

**Why Vite over Create React App:**
- Faster development server with instant HMR
- Optimized production builds with automatic code splitting
- Better TypeScript performance
- Native ESM support

**Why Wouter over React Router:**
- Minimal bundle size impact (~1KB vs 20KB+)
- Simple API sufficient for single-page landing page
- Hook-based routing aligns with React patterns

**Why Shadcn/ui:**
- Copy-paste component model gives full control over code
- Built on accessible Radix UI primitives
- Tailwind-based for consistent styling
- Customizable without ejecting or forking

**Why Drizzle ORM:**
- Type-safe database queries with excellent TypeScript inference
- Lightweight compared to Prisma or TypeORM
- SQL-like syntax for developers familiar with SQL
- Works well with Neon serverless PostgreSQL

**Why In-Memory Storage Pattern:**
- Allows development without database setup
- Easy to swap for real database implementation
- Testable without external dependencies
- Interface-based design enables multiple storage backends