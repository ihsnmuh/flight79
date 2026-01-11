# Flight 79 Website Improvement Recommendations

## Performance Optimizations

### Image Optimization
- Implement proper image optimization using `vite-imagetools` or Cloudinary's auto-format/auto-quality features
- Use WebP/AVIF formats with fallbacks for menu items and hero image
- Implement lazy loading for images below the fold (menu items, reviews)
- Add responsive image srcsets for the hero background image
- Compress the hero image (currently 1920px wide, could use proper sizing)

### Code Splitting & Lazy Loading
- Consider lazy loading the `Atmosphere` section since it's below the fold
- Use `React.lazy()` for heavy components like the map iframe (load on intersection observer)
- Implement dynamic imports for Storybook routes to reduce initial bundle size

### Font Loading
- The Recoleta font is loaded with 9 separate `@font-face` declarations
- Consider using Fontsubset or hosting optimized WOFF2 files
- Add `font-display: swap` to prevent FOIT (Flash of Invisible Text)

### Bundle Optimization
- Analyze bundle size with `rollup-plugin-visualizer`
- Consider tree-shaking unused icons from `lucide-react`
- Remove unused TanStack Router demo routes before production

## Code Quality Improvements

### TypeScript Strictness
- Enable `strict: true` in `tsconfig.json` if not already enabled
- Add proper type definitions for all component props
- Define explicit return types for functions
- Resolve the `// @ts-nocheck` in `routeTree.gen.ts`

### Component Improvements
- Extract opening hours logic into a reusable hook `useOpeningHours`
- Create a custom hook for mobile menu state `useMobileMenu`
- Extract the hardcoded menu data into a proper data layer
- Move static menu items from `const/menus.tsx` to Strapi CMS or JSON file

### Code Organization
- Create a `hooks/` directory for reusable custom hooks
- Extract section constants (like `SECTION_ID_ABOUT`) to a constants file
- Move type definitions from interfaces to a dedicated `types/` directory
- Consider splitting the large `menus.tsx` data file

### Error Handling
- Add error boundaries around major sections
- Implement proper error states for failed image loads
- Add fallback UI for when data fetching fails
- Add try-catch blocks in loaders

## UX/UI Enhancements

### Hero Section
- Add smooth scroll behavior for the "Book Your Flight" button
- Consider adding parallax effect to the hero image
- Add micro-interactions on the opening hours indicator
- Consider A/B testing different hero copy variations

### Navigation
- Implement smooth scroll with offset for anchor links (to account for sticky navbar)
- Add active state highlighting for current section in navbar
- Improve mobile menu with backdrop overlay and animation
- Add a "Book Table" CTA button for desktop (currently commented out)
- Consider adding a scroll-progress indicator

### Menu Section
- Add search/filter functionality for menu items
- Implement "add to cart" functionality for ordering
- Add dietary filters (vegetarian, vegan, halal, etc.)
- Show item availability status
- Add allergens information
- Implement smooth tab transition animations

### Reviews Section
- Add more review cards (currently only showing 3)
- Implement a carousel/slider for reviews
- Add Google Reviews integration API
- Add photo galleries from customer reviews
- Implement review filtering by rating

### Location Section
- Add click-to-call functionality for the phone button
- Add a second smaller map marker for parking location
- Add public transportation directions
- Consider integrating with Google Places API for live info

### Footer
- Add social media links with icons
- Add email newsletter subscription
- Add a site map for SEO
- Add business registration info

### Visual Design
- Add hover effects on all interactive elements
- Implement skeleton loading states for images
- Add smooth page transitions
- Consider adding a dark mode toggle
- Add loading animations for the menu filter tabs

## SEO Improvements

### Metadata
- Add Open Graph tags for social media sharing
- Add Twitter card meta tags
- Add canonical URL
- Add structured data (JSON-LD) for:
  - LocalBusiness schema
  - Restaurant schema
  - Product (menu items) schema
  - Review schema
- Add meta description for each section

### Technical SEO
- Add sitemap.xml generation
- Add robots.txt
- Implement proper heading hierarchy (only one h1 per page)
- Add alt text to all images
- Add aria-labels to icon-only buttons
- Ensure sufficient color contrast for accessibility

### Performance SEO
- Improve Core Web Vitals:
  - LCP (Largest Contentful Paint) - optimize hero image
  - FID (First Input Delay) - reduce JS bundle size
  - CLS (Cumulative Layout Shift) - add dimensions to images

## Data Management

### CMS Integration (Strapi)
- Fully integrate Strapi for dynamic content:
  - Menu items management
  - Blog posts
  - Reviews management
  - Opening hours configuration
  - Contact information
- Create proper API error handling
- Implement caching strategies for Strapi responses

### Database (Prisma)
- Expand Prisma schema for:
  - Menu categories and items
  - Customer reviews
  - Reservations/booking system
  - User accounts (optional)
  - Analytics/events tracking
- Create proper migrations
- Add database seeding script

### Static Data
- Move hardcoded data to JSON files:
  - `data/menus.json`
  - `data/reviews.json`
  - `data/opening-hours.json`
- Create proper TypeScript interfaces for these data types

## Accessibility Improvements

### ARIA Attributes
- Add `aria-expanded` to mobile menu button
- Add `aria-label` to all icon-only buttons
- Add `role="status"` for dynamic content like opening status
- Implement proper focus management for mobile menu

### Keyboard Navigation
- Add visible focus states for all interactive elements
- Implement keyboard navigation for menu tabs
- Add skip-to-content link
- Ensure tab order follows logical flow

### Screen Readers
- Add screen reader-only text for decorative images
- Announce dynamic content changes (opening status)
- Add proper headings structure
- Implement live regions for status updates

### Color & Typography
- Increase contrast ratio for brand-muted text
- Add `prefers-reduced-motion` media queries
- Ensure font sizes meet WCAG AA standards
- Add proper line-height for readability

## Security Improvements

### Environment Variables
- Validate environment variables on app startup
- Add TypeScript type safety for env vars
- Create `.env.example` file
- Add runtime validation for required env vars

### Content Security
- Sanitize user-generated content if displaying reviews
- Implement CSP (Content Security Policy) headers
- Add anti-clickjacking measures
- Sanitize any HTML content from Strapi

### Dependencies
- Keep dependencies up to date
- Use `npm audit` or `bun audit` regularly
- Remove unused dependencies
- Pin dependency versions for production

## Testing Strategy

### Unit Tests
- Add unit tests for utility functions (`cn`, date helpers)
- Test component rendering with different props
- Test hook behavior (useOpeningHours, useMobileMenu)
- Test loader data handling

### Integration Tests
- Test navigation between sections
- Test mobile menu open/close behavior
- Test menu tab switching
- Test external link handling

### E2E Tests
- Set up Playwright or Cypress
- Test critical user flows:
  - Navigation through sections
  - Mobile menu interaction
  - Menu filtering
  - External link opening

### Visual Regression Tests
- Set up Chromatic or Percy for Storybook
- Test component rendering across breakpoints
- Test dark mode (if implemented)

## Documentation Improvements

### Code Documentation
- Add JSDoc comments for exported functions
- Document component props with TypeScript types
- Add inline comments for complex logic
- Create README sections for:
  - Development setup
  - Deployment process
  - CMS content management
  - Adding new menu items

### Component Documentation
- Improve Storybook stories with:
  - Proper descriptions
  - All component variants
  - Interactive controls
  - Accessibility notes
- Create a component gallery page

### API Documentation
- Document Strapi API endpoints
- Document loader functions
- Add API response type definitions

## Future Feature Suggestions

### E-commerce
- Online ordering system
- Table reservation system
- Gift card purchases
- Merchandise store

### Customer Engagement
- Loyalty program
- Email marketing integration
- Push notifications
- In-app feedback system

### Technical Features
- PWA support with service worker
- Offline mode for menu viewing
- Multi-language support (i18n)
- Analytics dashboard

### Social Features
- Instagram feed integration
- User-generated photo gallery
- Event calendar
- Blog/news section

### Booking System
- Table reservation flow
- Event catering inquiries
- Private event bookings
- Waitlist functionality

## Priority Implementation Order

### High Priority (Week 1)
1. Image optimization and lazy loading
2. SEO metadata and structured data
3. Accessibility improvements (ARIA, keyboard nav)
4. Error boundaries and loading states

### Medium Priority (Week 2)
5. Mobile menu improvements
6. Menu search and filter functionality
7. Opening hours hook extraction
8. TypeScript strict mode

### Low Priority (Week 3+)
9. Dark mode implementation
10. E-commerce features
11. Testing setup
12. Documentation improvements
