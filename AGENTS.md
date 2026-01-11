# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this repository.

## Build, Lint, Test Commands

### Development
- `bun run dev` - Start development server on port 3000
- `bun run build` - Build for production
- `bun run preview` - Preview production build

### Code Quality
- `bun run lint` - Run Biome linter
- `bun run format` - Format code with Biome
- `bun run check` - Run Biome check (lint + format)

### Testing
- `bun run test` - Run all tests with Vitest
- `bun run test --run` - Run tests once
- `bun run test --watch` - Run tests in watch mode
- `bun run test path/to/test.test.ts` - Run single test file

### Storybook
- `bun run storybook` - Start Storybook on port 6006
- `bun run build-storybook` - Build Storybook for production

### Database
- `bun run db:generate` - Generate Prisma client
- `bun run db:push` - Push schema changes to database
- `bun run db:migrate` - Run database migrations
- `bun run db:studio` - Open Prisma Studio
- `bun run db:seed` - Seed database with sample data

## Code Style Guidelines

### Formatting & Linting
- Uses Biome for formatting and linting
- Indent style: tabs
- Quote style: double quotes for JavaScript/TypeScript
- Auto-organize imports on save

### Import Organization
- Use absolute imports with `@/*` alias for src directory
- Group imports: external libraries first, then internal imports
- Example:
```typescript
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
```

### TypeScript Configuration
- Strict mode enabled
- No unused locals or parameters
- JSX transform: react-jsx
- Path aliases: `@/*` maps to `./src/*`

### Component Patterns
- Use functional components with React hooks
- Default export for main component
- Named exports for utilities and types
- Props interface defined inline or above component
- Use class-variance-authority (cva) for component variants

### UI Components (shadcn/ui)
- Install new components with: `bun dlx shadcn@latest add <component>`
- Use Radix UI primitives for accessibility
- Follow existing component patterns in src/components/ui/
- Use `cn()` utility for conditional class names

### Styling
- Tailwind CSS for styling
- Use custom brand colors: `brand-primary`, `brand-accent`
- Responsive design with mobile-first approach
- Use semantic HTML elements

### File Structure
- Components in `src/components/`
- UI components in `src/components/ui/`
- Feature components in `src/components/flight79/`
- Routes in `src/routes/`
- Interfaces in `src/interfaces/`
- Utilities in `src/lib/`

### Naming Conventions
- Components: PascalCase (e.g., `Hero`, `Button`)
- Files: PascalCase for components (e.g., `Hero.tsx`)
- Interfaces: Prefix with `I` (e.g., `IMenu`, `ICategoryBadge`)
- Constants: UPPER_SNAKE_CASE (e.g., `SECTION_ID_ABOUT`)
- Functions: camelCase

### Error Handling
- Use try-catch blocks for async operations
- Return proper error states from loaders
- Handle loading states appropriately

### Database
- Uses Prisma ORM with PostgreSQL
- Environment variables loaded from `.env.local`
- Database operations should use Prisma client

### Router
- Uses TanStack Router with file-based routing
- Loaders for data fetching
- Type-safe route parameters

### Testing
- Uses Vitest for unit testing
- Testing Library for React components
- Test files should be co-located with components or in `__tests__/` directories

### Git Hooks
- Pre-commit hooks run Biome check
- Ensure code passes linting before committing

### Performance
- Lazy load routes when appropriate
- Optimize images and assets
- Use React.memo for expensive components

### Accessibility
- Use semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Proper heading hierarchy

## Special Instructions
- This is a TanStack Router + React project
- Uses Prisma for database management
- Storybook for component development
- Biome for code formatting and linting
- Always run `bun run check` before committing changes
- Follow existing patterns when adding new features