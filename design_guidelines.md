# ATA - Asistencia Técnica Avanzada: Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (Premium Tech Service)

Drawing inspiration from Apple's technical support aesthetic, premium SaaS platforms, and modern tech service providers. The design emphasizes technological sophistication, trustworthiness, and professional expertise while maintaining approachability for customers seeking device repairs.

**Core Principles:**
- Clean, modern aesthetic with technological edge
- Professional credibility through refined visual hierarchy
- Interactive elements that showcase technical competence
- Seamless multi-page experience with intuitive navigation

## Typography System

**Primary Font:** Inter or SF Pro Display (via Google Fonts CDN)
**Secondary Font:** JetBrains Mono (for technical details, model numbers)

**Hierarchy:**
- Hero Headlines: text-5xl to text-7xl, font-bold, tracking-tight
- Section Titles: text-4xl to text-5xl, font-bold
- Subsection Headers: text-2xl to text-3xl, font-semibold
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Technical Specs: text-sm, font-mono (JetBrains Mono)
- Navigation: text-sm, font-medium, uppercase tracking-wide
- CTAs: text-base to text-lg, font-semibold

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6, p-8, p-12
- Section spacing: py-16 to py-32 (responsive)
- Card gaps: gap-6, gap-8
- Element margins: mb-4, mb-8, mb-12

**Grid System:**
- Container max-width: max-w-7xl
- Multi-column sections: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Content areas: max-w-4xl for text-heavy sections

## Navigation Architecture

**Primary Navigation (Sticky Header):**
- Full-width nav with max-w-7xl container
- Logo left-aligned (h-8 to h-10)
- Menu items center or right-aligned with dropdown indicators
- Mobile: Hamburger menu with slide-in panel
- Dropdowns appear on hover (desktop) with smooth transitions
- Active page indicator with subtle underline

**Dropdown Menus:**
- Servicios dropdown: Móviles, Portátiles, Tablets, Ordenadores, Otros Dispositivos
- Each item with icon (Heroicons) and brief description
- Hover states with gentle background transitions
- Mega-menu style for rich content presentation

## Page Structure

### Homepage
**Hero Section (80vh):**
- Large background image showing technician at work or high-tech repair facility
- Overlay gradient for text readability
- H1: "Reparación Profesional de Dispositivos Electrónicos"
- Subheading explaining ATA's expertise
- Dual CTAs: "Solicitar Presupuesto" (primary) + "Ver Servicios" (secondary)
- Buttons with backdrop-blur-md backgrounds

**Services Overview (3-column grid):**
- Card-based layout with device icons (Font Awesome)
- Smartphone, Laptop, Tablet, Desktop sections
- Each card: Icon (text-4xl) + Title + Description + "Ver más" link
- Hover effect: subtle lift with shadow increase

**Why Choose ATA (2-column layout):**
- Left: List of benefits with checkmark icons
- Right: Image of professional workspace or certifications

**Process Section (4-step timeline):**
- Horizontal step indicators
- Icons representing: Diagnóstico → Presupuesto → Reparación → Entrega
- Connected with animated line

**Testimonials (carousel or 3-column grid):**
- Customer quotes with star ratings
- Profile placeholder + name + device repaired

**Quick Quote Calculator:**
- Interactive form with device type selector
- Issue checkboxes (pantalla, batería, software, etc.)
- Instant estimate display

### Services Pages (individual per device type)
- Hero with device-specific imagery
- Detailed service list with pricing ranges
- Before/After gallery section (2-3 column masonry grid)
- Technical specifications we handle
- FAQ accordion component

### About Us Page
- Company story with timeline
- Team section (3-4 column grid with photos)
- Certifications and partnerships
- Technical capabilities showcase

### Contact Page
- 2-column split: Left (contact form), Right (info + map placeholder)
- Form fields: Name, Email, Phone, Device Type dropdown, Issue description
- Contact details: Address, Phone, Email, Hours
- Social media links

## Component Library

**Cards:**
- Rounded corners: rounded-xl to rounded-2xl
- Subtle borders or shadow elevations
- Padding: p-6 to p-8
- Hover states with transform scale-105 transition

**Buttons:**
- Primary: Large rounded buttons (px-8 py-4), font-semibold
- Secondary: Outlined style with border-2
- Icon buttons: Square/circle for actions
- All buttons implement hover/active states inherently

**Forms:**
- Consistent input styling: p-4, rounded-lg, border
- Floating labels or top-aligned labels
- Validation states with icons
- Dropdown selectors with chevron icons

**Icons:**
- Heroicons throughout (CDN)
- Device icons: text-3xl to text-5xl for visual hierarchy
- Utility icons: text-xl for buttons and links

**Navigation Dropdowns:**
- Absolute positioned menus
- Smooth opacity and translateY transitions
- Backdrop blur for modern effect
- Service icons with descriptive text

**Gallery/Portfolio:**
- Masonry grid for before/after images
- Lightbox interaction (click to expand)
- Image captions with repair details

**Stats/Metrics Section:**
- 4-column grid on desktop
- Large numbers (text-5xl) with labels
- Counters: Dispositivos Reparados, Años Experiencia, Clientes Satisfechos, Tiempo Promedio

## Responsive Behavior

**Breakpoints:**
- Mobile-first approach
- sm: 640px (single column mostly)
- md: 768px (2 columns for services)
- lg: 1024px (full 3-4 column layouts)
- xl: 1280px (max container widths)

**Mobile Optimizations:**
- Hamburger menu with full-screen overlay
- Stacked sections (no multi-column on mobile)
- Larger touch targets (min h-12)
- Simplified navigation dropdowns (accordion style)

## Images Strategy

**Hero Image:**
- Large, high-quality image of technician working on device or modern repair workspace
- Professional, well-lit photography
- Subtle overlay gradient for text legibility

**Additional Images:**
- Service page headers: Device-specific close-up shots
- Before/After gallery: Real repair photos showing quality work
- About Us: Team photos, workshop interior
- Process section: Icon-based illustrations rather than photos
- Contact page: Map placeholder or office exterior

**Image Treatment:**
- Consistent aspect ratios per section
- Subtle rounded corners on all images (rounded-lg)
- Lazy loading for performance
- Optimized formats (WebP with fallbacks)

## Animations (Minimal & Strategic)

- Navigation dropdown: 200ms ease-out slide/fade
- Card hover effects: subtle scale and shadow transitions (300ms)
- Page transitions: none (standard navigation)
- Scroll-triggered: Subtle fade-in for stats counter
- Form interactions: smooth focus states

**No Auto-Playing Animations:** All interactions user-initiated for professional aesthetic

This design creates a technologically sophisticated, trustworthy brand experience that positions ATA as the premium choice for device repairs while maintaining accessibility and usability across all user touchpoints.