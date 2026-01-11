# Flight 79 Website - Task Management Document

## Document Information

| Property | Value |
|----------|-------|
| Version | 1.0.0 |
| Created | 2026-01-11 14:30:00 WIB |
| Last Updated | 2026-01-11 14:30:00 WIB |
| Total Tasks | 47 |
| Status | Active |

---

## Task Summary Dashboard

| Category | Total | Completed | In Progress | Pending | Cancelled |
|----------|-------|-----------|-------------|---------|-----------|
| Performance | 12 | 0 | 0 | 12 | 0 |
| Code Quality | 14 | 0 | 0 | 14 | 0 |
| UX/UI | 22 | 0 | 0 | 22 | 0 |
| SEO | 10 | 0 | 0 | 10 | 0 |
| Data Management | 11 | 0 | 0 | 11 | 0 |
| Accessibility | 11 | 0 | 0 | 11 | 0 |
| Security | 8 | 0 | 0 | 8 | 0 |
| Testing | 9 | 0 | 0 | 9 | 0 |
| Documentation | 8 | 0 | 0 | 8 | 0 |
| Future Features | 18 | 0 | 0 | 18 | 0 |
| **Grand Total** | **123** | **0** | **0** | **123** | **0** |

---

## Task List by Priority

### HIGH PRIORITY (Week 1)

#### Task ID: TASK-001
| Property | Details |
|----------|---------|
| Title | Image Optimization - Hero Section |
| Category | Performance |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | images, performance, optimization |

**Description:**
Implement proper image optimization for the hero section using WebP/AVIF formats with proper responsive srcsets.

**Tasks:**
- [ ] Analyze current hero image dimensions and compression
- [ ] Generate WebP and AVIF versions of hero image
- [ ] Implement responsive srcset for hero image
- [ ] Add proper loading="eager" for LCP optimization
- [ ] Test across all breakpoints

**Dependencies:** None
**Notes:** Hero image URL: https://res.cloudinary.com/doc4dinqa/image/upload/v1766660311/WhatsApp_Image_2025-12-25_at_17.57.51_nss65z.jpg

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

#### Task ID: TASK-002
| Property | Details |
|----------|---------|
| Title | Image Lazy Loading - Menu & Reviews |
| Category | Performance |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | images, performance, lazy-loading |

**Description:**
Implement lazy loading for images below the fold including menu items and review cards.

**Tasks:**
- [ ] Add loading="lazy" to all MenuItem components
- [ ] Add loading="lazy" to ReviewCard components
- [ ] Add loading="lazy" to Atmosphere section images
- [ ] Add placeholder/skeleton for lazy loaded images
- [ ] Test lazy loading behavior in dev tools

**Dependencies:** TASK-001 (optional)
**Notes:** Currently using Google Photos URLs, consider Cloudinary for better optimization

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

#### Task ID: TASK-003
| Property | Details |
|----------|---------|
| Title | SEO Metadata - Open Graph & Twitter Cards |
| Category | SEO |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | seo, metadata, social-media |

**Description:**
Add comprehensive meta tags for social media sharing including Open Graph and Twitter Cards.

**Tasks:**
- [ ] Add Open Graph meta tags (og:title, og:description, og:image, og:url)
- [ ] Add Twitter Card meta tags (twitter:card, twitter:site, twitter:title, twitter:image)
- [ ] Add canonical URL tag
- [ ] Add theme-color meta tag
- [ ] Test with social media debuggers

**Dependencies:** None
**Notes:** Update title and description to be more descriptive

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

#### Task ID: TASK-004
| Property | Details |
|----------|---------|
| Title | SEO Structured Data - JSON-LD |
| Category | SEO |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 5 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | seo, structured-data, json-ld |

**Description:**
Implement JSON-LD structured data for LocalBusiness, Restaurant, Products, and Reviews.

**Tasks:**
- [ ] Create LocalBusiness schema with contact info
- [ ] Create Restaurant schema with menu and opening hours
- [ ] Create Product schema for menu items
- [ ] Create Review schema for customer reviews
- [ ] Test with Google Rich Results Test

**Dependencies:** None
**Notes:** Location data: Ruko Sasakirana Kota Baru Parahyangan, Jl. Sasakirana No.79

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

#### Task ID: TASK-005
| Property | Details |
|----------|---------|
| Title | Accessibility - ARIA Attributes |
| Category | Accessibility |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | accessibility, aria, wcag |

**Description:**
Add proper ARIA attributes to all interactive elements for screen reader accessibility.

**Tasks:**
- [ ] Add aria-expanded to mobile menu button
- [ ] Add aria-label to icon-only buttons (Menu, phone, external links)
- [ ] Add role="status" to opening status indicator
- [ ] Add aria-current to active navigation links
- [ ] Add aria-controls for tabbed menu sections

**Dependencies:** None
**Notes:** Focus on Navbar, Menu tabs, and external links

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

#### Task ID: TASK-006
| Property | Details |
|----------|---------|
| Title | Accessibility - Keyboard Navigation |
| Category | Accessibility |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | accessibility, keyboard, navigation |

**Description:**
Improve keyboard navigation and add visible focus states.

**Tasks:**
- [ ] Add visible focus styles to all interactive elements
- [ ] Implement keyboard navigation for menu tabs (arrow keys)
- [ ] Add skip-to-content link
- [ ] Ensure proper tab order through sections
- [ ] Test with keyboard-only navigation

**Dependencies:** TASK-005
**Notes:** Use :focus-visible for better focus ring styling

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

#### Task ID: TASK-007
| Property | Details |
|----------|---------|
| Title | Error Boundary Implementation |
| Category | Code Quality |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | error-handling, react, boundary |

**Description:**
Add error boundaries around major sections to prevent app crashes.

**Tasks:**
- [ ] Create ErrorBoundary component
- [ ] Add error boundaries to each section (Hero, About, Menu, etc.)
- [ ] Implement error state UI for each section
- [ ] Add error logging (optional)
- [ ] Test error boundary behavior

**Dependencies:** None
**Notes:** Wrap each major section in route component

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

#### Task ID: TASK-008
| Property | Details |
|----------|---------|
| Title | Image Error Handling |
| Category | Code Quality |
| Priority | High |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | error-handling, images, ux |

**Description:**
Implement fallback UI for failed image loads.

**Tasks:**
- [ ] Create Image component with error handling
- [ ] Add fallback image for broken images
- [ ] Add retry button for image loading
- [ ] Replace all img tags with Image component
- [ ] Test with simulated broken images

**Dependencies:** None
**Notes:** Menu items use Google Photos URLs which may break

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 1 High Priority
```

---

### MEDIUM PRIORITY (Week 2)

#### Task ID: TASK-009
| Property | Details |
|----------|---------|
| Title | Mobile Menu Improvements |
| Category | UX/UI |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 5 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | mobile, menu, ux |

**Description:**
Improve mobile menu with backdrop overlay and smooth animations.

**Tasks:**
- [ ] Add backdrop overlay behind mobile menu
- [ ] Implement smooth open/close animations
- [ ] Add click outside to close functionality
- [ ] Improve menu item styling and spacing
- [ ] Add animation for menu items stagger

**Dependencies:** TASK-005, TASK-006
**Notes:** Current implementation is basic, needs enhancement

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

#### Task ID: TASK-010
| Property | Details |
|----------|---------|
| Title | Smooth Scroll with Offset |
| Category | UX/UI |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | navigation, smooth-scroll, ux |

**Description:**
Implement smooth scroll with offset for anchor links to account for sticky navbar.

**Tasks:**
- [ ] Create smooth-scroll utility or CSS
- [ ] Add scroll-padding-top to html element
- [ ] Test all anchor links (about, menu, location)
- [ ] Verify scroll behavior on all pages

**Dependencies:** None
**Notes:** Navbar height is 64px, need to account for this

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

#### Task ID: TASK-011
| Property | Details |
|----------|---------|
| Title | Menu Search Functionality |
| Category | UX/UI |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | menu, search, functionality |

**Description:**
Add search functionality to filter menu items by name.

**Tasks:**
- [ ] Create search input component
- [ ] Implement search logic in Menu component
- [ ] Add search debouncing
- [ ] Show "no results" state
- [ ] Test search functionality

**Dependencies:** None
**Notes:** Menu has 8 categories, search should filter across all

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

#### Task ID: TASK-012
| Property | Details |
|----------|---------|
| Title | Menu Dietary Filters |
| Category | UX/UI |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | menu, filter, accessibility |

**Description:**
Add dietary filters (vegetarian, vegan, halal, etc.) to menu section.

**Tasks:**
- [ ] Add dietary badges to menu data
- [ ] Create filter buttons for dietary options
- [ ] Implement filter logic
- [ ] Show filter counts
- [ ] Test all filter combinations

**Dependencies:** TASK-011
**Notes:** Need to update menu data structure first

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

#### Task ID: TASK-013
| Property | Details |
|----------|---------|
| Title | Custom Hook - useOpeningHours |
| Category | Code Quality |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | hooks, refactoring, typescript |

**Description:**
Extract opening hours logic from loader and Hero component into a reusable hook.

**Tasks:**
- [ ] Create hooks/useOpeningHours.ts
- [ ] Implement opening hours calculation logic
- [ ] Add type definitions for opening hours
- [ ] Add unit tests for the hook
- [ ] Refactor Hero component to use the hook

**Dependencies:** None
**Notes:** Current logic is in index.tsx loader and Hero.tsx

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

#### Task ID: TASK-014
| Property | Details |
|----------|---------|
| Title | Custom Hook - useMobileMenu |
| Category | Code Quality |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | hooks, mobile, refactoring |

**Description:**
Extract mobile menu state into a reusable hook.

**Tasks:**
- [ ] Create hooks/useMobileMenu.ts
- [ ] Implement menu state logic
- [ ] Add accessibility handlers
- [ ] Add unit tests
- [ ] Refactor Navbar component to use the hook

**Dependencies:** TASK-005, TASK-006
**Notes:** Simple state management, can also add touch detection

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

#### Task ID: TASK-015
| Property | Details |
|----------|---------|
| Title | TypeScript Strict Mode |
| Category | Code Quality |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 6 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | typescript, strict, quality |

**Description:**
Enable TypeScript strict mode and fix all resulting type errors.

**Tasks:**
- [ ] Enable strict mode in tsconfig.json
- [ ] Fix all type errors in components
- [ ] Add proper type definitions for all props
- [ ] Fix // @ts-nocheck in routeTree.gen.ts
- [ ] Run typecheck and verify no errors

**Dependencies:** None
**Notes:** This is a significant task, may require many small fixes

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

#### Task ID: TASK-016
| Property | Details |
|----------|---------|
| Title | Active Navigation State |
| Category | UX/UI |
| Priority | Medium |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | navigation, ux, intersection-observer |

**Description:**
Add active state highlighting for current section in navbar using Intersection Observer.

**Tasks:**
- [ ] Create useActiveSection hook
- [ ] Implement Intersection Observer logic
- [ ] Style active navigation links
- [ ] Test on all section scrolls
- [ ] Handle edge cases (top of page, bottom)

**Dependencies:** TASK-010
**Notes:** Need to detect which section is currently in viewport

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 2 Medium Priority
```

---

### LOW PRIORITY (Week 3+)

#### Task ID: TASK-017
| Property | Details |
|----------|---------|
| Title | Font Optimization |
| Category | Performance |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | fonts, performance, optimization |

**Description:**
Optimize font loading with font-display: swap and consider WOFF2 conversion.

**Tasks:**
- [ ] Add font-display: swap to all @font-face rules
- [ ] Convert fonts to WOFF2 format if possible
- [ ] Consider font subsetting for used characters only
- [ ] Preload critical font weights
- [ ] Test font loading performance

**Dependencies:** None
**Notes:** Recoleta font has 9 weights, may only need 3-4

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-018
| Property | Details |
|----------|---------|
| Title | Bundle Analysis |
| Category | Performance |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | bundle, analysis, performance |

**Description:**
Analyze bundle size and identify optimization opportunities.

**Tasks:**
- [ ] Install rollup-plugin-visualizer
- [ ] Generate bundle analysis report
- [ ] Identify large dependencies
- [ ] Remove unused TanStack Router demo routes
- [ ] Tree-shake unused lucide-react icons

**Dependencies:** None
**Notes:** There are many demo routes that can be removed

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-019
| Property | Details |
|----------|---------|
| Title | Lazy Load Map Iframe |
| Category | Performance |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | performance, lazy-loading, maps |

**Description:**
Lazy load the Google Maps iframe using Intersection Observer.

**Tasks:**
- [ ] Create LazyMap component
- [ ] Use Intersection Observer to load iframe only when visible
- [ ] Add placeholder/thumbnail before load
- [ ] Add loading animation
- [ ] Test on various screen sizes

**Dependencies:** None
**Notes:** Map iframe is heavy and loads immediately

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-020
| Property | Details |
|----------|---------|
| Title | Dark Mode Implementation |
| Category | UX/UI |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 8 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | dark-mode, theme, toggle |

**Description:**
Implement dark mode with toggle and system preference detection.

**Tasks:**
- [ ] Create ThemeProvider context
- [ ] Add dark mode color variables to CSS
- [ ] Create dark mode toggle component
- [ ] Implement system preference detection
- [ ] Add localStorage persistence
- [ ] Test all components in dark mode

**Dependencies:** None
**Notes:** Current CSS has dark theme variables but no toggle

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-021
| Property | Details |
|----------|---------|
| Title | Skeleton Loading States |
| Category | UX/UI |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | loading, skeleton, ux |

**Description:**
Implement skeleton loading states for better perceived performance.

**Tasks:**
- [ ] Create Skeleton component
- [ ] Add skeleton to Menu items (while loading data)
- [ ] Add skeleton to Reviews section
- [ ] Add skeleton to Hero section (if dynamic data)
- [ ] Add shimmer animation

**Dependencies:** TASK-008
**Notes:** Currently no loading states visible

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-022
| Property | Details |
|----------|---------|
| Title | Reviews Carousel |
| Category | UX/UI |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 5 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | reviews, carousel, slider |

**Description:**
Implement a carousel/slider for displaying more review cards.

**Tasks:**
- [ ] Research and choose carousel library (Embla Carousel recommended)
- [ ] Create ReviewsCarousel component
- [ ] Add touch/swipe support
- [ ] Add navigation arrows and dots
- [ ] Test on mobile and desktop

**Dependencies:** None
**Notes:** Currently showing only 3 reviews in a grid

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-023
| Property | Details |
|----------|---------|
| Title | Location Section - Click to Call |
| Category | UX/UI |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 1 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | location, phone, ux |

**Description:**
Add click-to-call functionality for the phone button.

**Tasks:**
- [ ] Get actual phone number
- [ ] Add tel: link to phone button
- [ ] Test on mobile devices
- [ ] Update button aria-label

**Dependencies:** TASK-005
**Notes:** Phone button currently links to "/"

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-024
| Property | Details |
|----------|---------|
| Title | Footer Enhancements |
| Category | UX/UI |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | footer, social-media, newsletter |

**Description:**
Add social media links, newsletter subscription, and business info to footer.

**Tasks:**
- [ ] Add social media icon links (Instagram, Facebook, etc.)
- [ ] Create newsletter subscription form
- [ ] Add business registration info
- [ ] Add site map links
- [ ] Style footer components

**Dependencies:** None
**Notes:** Current footer is minimal

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-025
| Property | Details |
|----------|---------|
| Title | Sitemap & Robots.txt |
| Category | SEO |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | seo, sitemap, robots |

**Description:**
Add sitemap.xml and robots.txt for search engine crawling.

**Tasks:**
- [ ] Create public/robots.txt
- [ ] Create sitemap.xml generator or manual
- [ ] Add sitemap to robots.txt
- [ ] Submit sitemap to Google Search Console
- [ ] Test with Googlebot simulator

**Dependencies:** None
**Notes:** Static site, can generate at build time

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-026
| Property | Details |
|----------|---------|
| Title | Strapi CMS Integration - Menu |
| Category | Data Management |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 8 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | strapi, cms, menu, integration |

**Description:**
Integrate Strapi CMS for managing menu items.

**Tasks:**
- [ ] Create Strapi content types for menu
- [ ] Create API service for menu data
- [ ] Implement loader to fetch from Strapi
- [ ] Add loading and error states
- [ ] Test CRUD operations in Strapi admin

**Dependencies:** TASK-008
**Notes:** Strapi client is already set up in lib/strapiClient.ts

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-027
| Property | Details |
|----------|---------|
| Title | Prisma Schema Expansion |
| Category | Data Management |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 6 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | prisma, database, schema |

**Description:**
Expand Prisma schema for menu, reviews, and reservations.

**Tasks:**
- [ ] Create MenuItem model with categories
- [ ] Create Review model
- [ ] Create Reservation model
- [ ] Create User model (optional)
- [ ] Run migrations
- [ ] Generate Prisma client

**Dependencies:** None
**Notes:** Current schema only has Todo model

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-028
| Property | Details |
|----------|---------|
| Title | Testing Setup - Unit Tests |
| Category | Testing |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 6 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | testing, unit, vitest |

**Description:**
Set up unit tests for utility functions and hooks.

**Tasks:**
- [ ] Write tests for cn utility function
- [ ] Write tests for useOpeningHours hook
- [ ] Write tests for useMobileMenu hook
- [ ] Write tests for date formatting helpers
- [ ] Set up test coverage reporting

**Dependencies:** TASK-013, TASK-014
**Notes:** Vitest is already installed

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-029
| Property | Details |
|----------|---------|
| Title | Testing Setup - E2E Tests |
| Category | Testing |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 8 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | testing, e2e, playwright |

**Description:**
Set up E2E tests with Playwright for critical user flows.

**Tasks:**
- [ ] Install Playwright
- [ ] Configure Playwright config
- [ ] Write test for section navigation
- [ ] Write test for mobile menu interaction
- [ ] Write test for menu tab switching
- [ ] Write test for external link handling

**Dependencies:** TASK-009, TASK-011
**Notes:** Consider using Playwright over Cypress for better debugging

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-030
| Property | Details |
|----------|---------|
| Title | Documentation - README Updates |
| Category | Documentation |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 4 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | documentation, readme, setup |

**Description:**
Update README with comprehensive development and deployment documentation.

**Tasks:**
- [ ] Document development setup process
- [ ] Add deployment instructions
- [ ] Document CMS content management
- [ ] Document how to add new menu items
- [ ] Add troubleshooting section

**Dependencies:** None
**Notes:** Update existing README.md

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-031
| Property | Details |
|----------|---------|
| Title | Environment Variables Validation |
| Category | Security |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | security, environment, validation |

**Description:**
Add environment variable validation and create .env.example.

**Tasks:**
- [ ] Create .env.example file
- [ ] Add runtime validation for required env vars
- [ ] Add TypeScript type safety for env vars
- [ ] Display warnings for missing env vars
- [ ] Test validation behavior

**Dependencies:** None
**Notes:** Currently only VITE_STRAPI_URL is used

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-032
| Property | Details |
|----------|---------|
| Title | Hover Effects Enhancement |
| Category | UX/UI |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 3 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | hover, animation, ux |

**Description:**
Add consistent hover effects to all interactive elements.

**Tasks:**
- [ ] Audit all interactive elements for hover states
- [ ] Create hover utility classes
- [ ] Apply hover effects to buttons
- [ ] Apply hover effects to navigation links
- [ ] Apply hover effects to cards
- [ ] Test hover interactions

**Dependencies:** None
**Notes:** Some elements already have hover states

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-033
| Property | Details |
|----------|---------|
| Title | Menu Tab Transitions |
| Category | UX/UI |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | animation, menu, transitions |

**Description:**
Add smooth transitions when switching menu tabs.

**Tasks:**
- [ ] Install framer-motion (if not present)
- [ ] Create animated menu grid component
- [ ] Add layout animation on tab change
- [ ] Add stagger animation for items
- [ ] Test performance impact

**Dependencies:** TASK-011, TASK-012
**Notes:** Consider using CSS animations for lighter weight

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-034
| Property | Details |
|----------|---------|
| Title | Skip to Content Link |
| Category | Accessibility |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 1 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | accessibility, keyboard, navigation |

**Description:**
Add skip-to-content link for keyboard users.

**Tasks:**
- [ ] Create skip link component
- [ ] Style link to be visible on focus
- [ ] Add link to __root.tsx
- [ ] Test skip link functionality

**Dependencies:** TASK-006
**Notes:** Simple but important for accessibility

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-035
| Property | Details |
|----------|---------|
| Title | Color Contrast Audit |
| Category | Accessibility |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | accessibility, color, contrast, wcag |

**Description:**
Audit and fix color contrast issues for WCAG AA compliance.

**Tasks:**
- [ ] Audit all text colors against backgrounds
- [ ] Use a11y tools to identify issues
- [ ] Fix contrast issues in brand-muted text
- [ ] Fix contrast in hover states
- [ ] Document color choices

**Dependencies:** None
**Notes:** brand-muted text may have insufficient contrast

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

#### Task ID: TASK-036
| Property | Details |
|----------|---------|
| Title | prefers-reduced-motion |
| Category | Accessibility |
| Priority | Low |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 2 |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | accessibility, animation, prefers-reduced-motion |

**Description:**
Add prefers-reduced-motion media queries for all animations.

**Tasks:**
- [ ] Identify all CSS animations
- [ ] Add prefers-reduced-motion queries
- [ ] Add prefers-reduced-motion to framer-motion components
- [ ] Test with system settings

**Dependencies:** TASK-020, TASK-033
**Notes:** Important for users with vestibular disorders

**History:**
```
2026-01-11 14:30:00 WIB - Task created from improve.md
2026-01-11 14:30:00 WIB - Added to Week 3 Low Priority
```

---

## Future Feature Tasks

### Task ID: TASK-F001
| Property | Details |
|----------|---------|
| Title | Online Ordering System |
| Category | Future Features - E-commerce |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 40 |
| Assignee | Unassigned |
| Tags | e-commerce, ordering, cart |

**Description:**
Implement complete online ordering system with shopping cart.

**Tasks:**
- [ ] Design cart data structure
- [ ] Create CartProvider context
- [ ] Build cart UI (slide-out panel)
- [ ] Implement add/remove/quantity logic
- [ ] Create checkout flow
- [ ] Integrate payment gateway (optional)

**Dependencies:** TASK-011, TASK-012
**Notes:** Major feature, requires backend integration

---

### Task ID: TASK-F002
| Property | Details |
|----------|---------|
| Title | Table Reservation System |
| Category | Future Features - Booking |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 32 |
| Assignee | Unassigned |
| Tags | reservation, booking, calendar |

**Description:**
Implement table reservation system with date/time selection.

**Tasks:**
- [ ] Design reservation data model
- [ ] Create reservation form component
- [ ] Implement calendar date picker
- [ ] Create time slot selector
- [ ] Add confirmation flow
- [ ] Build admin dashboard for reservations

**Dependencies:** TASK-F001 (optional)
**Notes:** Integrates with Prisma reservations table

---

### Task ID: TASK-F003
| Property | Details |
|----------|---------|
| Title | PWA Support |
| Category | Future Features - Technical |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 16 |
| Assignee | Unassigned |
| Tags | pwa, service-worker, offline |

**Description:**
Convert website to Progressive Web App with offline support.

**Tasks:**
- [ ] Create manifest.json
- [ ] Configure service worker
- [ ] Implement offline menu viewing
- [ ] Add to home screen prompt
- [ ] Implement push notifications
- [ ] Test PWA on various devices

**Dependencies:** TASK-026
**Notes:** Useful for customers browsing menu offline

---

### Task ID: TASK-F004
| Property | Details |
|----------|---------|
| Title | Multi-language Support (i18n) |
| Category | Future Features - Technical |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 24 |
| Assignee | Unassigned |
| Tags | i18n, localization, languages |

**Description:**
Add multi-language support with Indonesian and English translations.

**Tasks:**
- [ ] Choose i18n library (react-i18next recommended)
- [ ] Create translation files for EN and ID
- [ ] Create LanguageSwitcher component
- [ ] Update all text content
- [ ] Update SEO metadata per language
- [ ] Test all translations

**Dependencies:** None
**Notes:** Current content is in English only

---

### Task ID: TASK-F005
| Property | Details |
|----------|---------|
| Title | Blog/News Section |
| Category | Future Features - Social |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 20 |
| Assignee | Unassigned |
| Tags | blog, news, strapi, content |

**Description:**
Implement blog/news section with Strapi CMS integration.

**Tasks:**
- [ ] Create blog content type in Strapi
- [ ] Build blog listing page
- [ ] Create blog post detail page
- [ ] Add blog to navigation
- [ ] Implement pagination
- [ ] Add social sharing

**Dependencies:** TASK-026
**Notes:** Strapi client already set up

---

### Task ID: TASK-F006
| Property | Details |
|----------|---------|
| Title | Instagram Feed Integration |
| Category | Future Features - Social |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 8 |
| Assignee | Unassigned |
| Tags | instagram, social-media, api |

**Description:**
Integrate Instagram feed to showcase latest posts.

**Tasks:**
- [ ] Create Instagram Basic Display API app
- [ ] Implement API integration
- [ ] Create Instagram gallery component
- [ ] Add to Atmosphere or Footer section
- [ ] Handle token refresh
- [ ] Style gallery grid

**Dependencies:** None
**Notes:** Requires Facebook Developer account

---

### Task ID: TASK-F007
| Property | Details |
|----------|---------|
| Title | Loyalty Program |
| Category | Future Features - Engagement |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 32 |
| Assignee | Unassigned |
| Tags | loyalty, rewards, user-account |

**Description:**
Implement customer loyalty program with points and rewards.

**Tasks:**
- [ ] Design loyalty program rules
- [ ] Create loyalty dashboard UI
- [ ] Implement points earning logic
- [ ] Create rewards catalog
- [ ] Build redemption flow
- [ ] Add admin controls

**Dependencies:** TASK-F001, TASK-F002
**Notes:** Requires user accounts

---

### Task ID: TASK-F008
| Property | Details |
|----------|---------|
| Title | Analytics Dashboard |
| Category | Future Features - Technical |
| Priority | Future |
| Status | Pending |
| Created | 2026-01-11 14:30:00 WIB |
| Estimated Hours | 16 |
| Assignee | Unassigned |
| Tags | analytics, dashboard, admin |

**Description:**
Build admin dashboard for viewing site analytics and metrics.

**Tasks:**
- [ ] Integrate analytics service (GA4, Plausible)
- [ ] Create analytics service layer
- [ ] Build dashboard UI components
- [ ] Implement date range picker
- [ ] Create charts and graphs
- [ ] Add export functionality

**Dependencies:** None
**Notes:** Can use existing analytics services

---

## Completed Tasks

### Task ID: TASK-C001
| Property | Details |
|----------|---------|
| Title | Initial Project Setup |
| Category | Setup |
| Priority | Completed |
| Status | Completed |
| Created | 2025-12-25 17:57:00 WIB |
| Completed | 2026-01-11 14:30:00 WIB |
| Actual Hours | 40 |
| Assignee | Developer |

**Description:**
Initial project setup with TanStack Router, React, and Tailwind CSS.

**Notes:** Base implementation completed

**History:**
```
2025-12-25 17:57:00 WIB - Project initialized
2025-12-26 10:00:00 WIB - Routes setup completed
2025-12-27 15:00:00 WIB - UI components created
2026-01-05 09:00:00 WIB - Hero section implemented
2026-01-08 14:00:00 WIB - Menu section implemented
2026-01-10 11:00:00 WIB - Reviews section implemented
2026-01-11 14:30:00 WIB - Location section implemented
2026-01-11 14:30:00 WIB - Initial setup completed
```

---

### Task ID: TASK-C002
| Property | Details |
|----------|---------|
| Title | Brand Design Implementation |
| Category | Design |
| Priority | Completed |
| Status | Completed |
| Created | 2025-12-28 09:00:00 WIB |
| Completed | 2026-01-11 14:30:00 WIB |
| Actual Hours | 24 |
| Assignee | Designer |

**Description:**
Implemented brand design with Recoleta font and brand colors.

**Notes:** Brand colors: #BA5E44 (primary), #EFBD5B (accent), #123458 (text)

**History:**
```
2025-12-28 09:00:00 WIB - Brand colors defined
2025-12-29 10:00:00 WIB - Recoleta font purchased and integrated
2025-12-30 14:00:00 WIB - CSS variables created
2026-01-02 11:00:00 WIB - Component styling applied
2026-01-05 16:00:00 WIB - Design review completed
```

---

## Task Template

Use this template when adding new tasks:

```markdown
### Task ID: TASK-XXX
| Property | Details |
|----------|---------|
| Title | Task Title Here |
| Category | Category Name |
| Priority | High / Medium / Low / Future |
| Status | Pending / In Progress / Completed / Cancelled |
| Created | YYYY-MM-DD HH:MM:SS WIB |
| Estimated Hours | X |
| Actual Hours | 0 |
| Assignee | Unassigned |
| Tags | tag1, tag2, tag3 |

**Description:**
Brief description of the task.

**Tasks:**
- [ ] Subtask 1
- [ ] Subtask 2
- [ ] Subtask 3

**Dependencies:** TASK-XXX (if any)
**Notes:** Additional notes or considerations

**History:**
```
YYYY-MM-DD HH:MM:SS WIB - Task created
YYYY-MM-DD HH:MM:SS WIB - Status changed to In Progress
YYYY-MM-DD HH:MM:SS WIB - Status changed to Completed
```
```

---

## Burndown Chart Data

### Sprint 1 (Week 1) - High Priority Tasks
| Day | Planned | Completed | Remaining |
|-----|---------|-----------|-----------|
| Day 1 | 1 | 0 | 8 |
| Day 2 | 2 | 0 | 8 |
| Day 3 | 3 | 0 | 8 |
| Day 4 | 4 | 0 | 8 |
| Day 5 | 5 | 0 | 8 |
| Day 6 | 6 | 0 | 8 |
| Day 7 | 7 | 0 | 8 |

### Sprint 2 (Week 2) - Medium Priority Tasks
| Day | Planned | Completed | Remaining |
|-----|---------|-----------|-----------|
| Day 8 | 1 | 0 | 7 |
| Day 9 | 2 | 0 | 7 |
| Day 10 | 3 | 0 | 7 |
| Day 11 | 4 | 0 | 7 |
| Day 12 | 5 | 0 | 7 |
| Day 13 | 6 | 0 | 7 |
| Day 14 | 7 | 0 | 7 |

### Sprint 3+ (Week 3+) - Low Priority Tasks
| Week | Planned | Completed | Remaining |
|------|---------|-----------|-----------|
| Week 3 | 8 | 0 | 15 |
| Week 4 | 8 | 0 | 15 |
| Week 5 | 8 | 0 | 15 |

---

## Notes

### Current Technical Stack
- **Framework:** React 19 with TanStack Router
- **Styling:** Tailwind CSS 4 with custom brand theme
- **Database:** Prisma with PostgreSQL
- **CMS:** Strapi (partially configured)
- **Testing:** Vitest (unit tests)
- **Linting:** Biome

### Key Files Reference
- Route configuration: `src/routeTree.gen.ts`
- Root layout: `src/routes/__root.tsx`
- Home page: `src/routes/index.tsx`
- Styles: `src/styles.css`
- Prisma schema: `prisma/schema.prisma`
- API client: `src/lib/strapiClient.ts`

### Next Steps
1. Start with TASK-001 (Image Optimization)
2. Complete all High Priority tasks in Week 1
3. Review and adjust priorities based on progress
4. Begin Medium Priority tasks in Week 2

---

*Document generated from improve.md on 2026-01-11*
*Last update: 2026-01-11 14:30:00 WIB*
