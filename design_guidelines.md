# Design Guidelines: Guia de Alimentação Saudável para Cães Landing Page

## Design Approach
**Reference-Based Approach**: This landing page takes inspiration from modern, high-conversion sales pages with a clean, professional aesthetic. The design emphasizes trust, clarity, and emotional connection with dog owners through accessible layout and warm visual treatment.

## Core Design Elements

### Typography
- **Primary Font**: Poppins or Inter from Google Fonts
- **Hierarchy**:
  - Hero Headline: Bold, 48-56px (desktop), 32-40px (mobile)
  - Section Titles: Semi-bold, 36-42px (desktop), 28-32px (mobile)
  - Subheadlines: Regular, 20-24px (desktop), 18-20px (mobile)
  - Body Text: Regular, 16-18px
  - Button Text: Semi-bold, 16-18px

### Layout System
- **Spacing**: Use Tailwind units primarily: p-8, p-12, p-16, p-20 for section padding; gap-4, gap-6, gap-8 for component spacing
- **Container**: max-w-6xl centered with px-4 or px-6 on mobile
- **Section Padding**: py-16 to py-24 for vertical rhythm
- **One-page vertical layout** with large, well-spaced blocks

### Color Palette
- **Primary Blue**: #3A8DFF (CTAs, accents, gradients)
- **Primary Green**: #35C48F (checks, success elements, gradients)
- **Background**: #FFFFFF (white base)
- **Text**: #444444 (body text)
- **Gradients**: Blue to green (left to right or top to bottom) for buttons and accent areas

### Component Library

**Buttons**:
- Rounded corners (rounded-full or rounded-lg)
- Gradient background (blue → green)
- Soft drop shadow
- Large padding (px-8 py-4)
- Hover state with slight scale transform
- Blur background when overlaying images

**Cards/Content Blocks**:
- White background with subtle shadow
- Rounded corners (rounded-xl)
- Generous internal padding (p-6 to p-8)

**Icons**:
- Use Font Awesome or Heroicons via CDN
- Green checkmarks (#35C48F) for benefits lists
- Shield and security icons for guarantee section
- Star icons (filled) for testimonials

**Countdown Timer**:
- Large, bold numbers
- Auto-resets daily at 23:00
- Placed within offer section
- Visual prominence with contrasting background

**FAQ Accordion**:
- Clean, minimal design
- Smooth expand/collapse animation
- Plus/minus icons for interaction states

### Page Structure (9 Sections)

1. **Hero Section**
   - Full-width, commanding presence
   - Large headline + subheadline + CTA button
   - Hero image showing happy dog with natural food bowl
   - Anchor link to offer section

2. **How It Works**
   - Three-column grid (responsive to single column mobile)
   - Icons: "Aprenda", "Aplique", "Veja Resultados"
   - Short explanatory text

3. **What You'll Learn**
   - List format with green checkmark icons
   - 7 main items + "3 Bônus exclusivos" highlight
   - Clean vertical spacing between items

4. **Benefits of Natural Feeding**
   - 6-item grid (2x3 or 3x2 responsive)
   - Icon + title + brief description per benefit
   - Visual icons for each benefit type

5. **Main Offer Section** (Most Important)
   - Highlighted container with shadow and subtle border
   - Struck-through original price (R$49,90)
   - Large, prominent new price (R$14,90)
   - 24-hour countdown timer
   - Bold, large CTA button
   - Immediate access messaging

6. **Testimonials**
   - 3 testimonial cards in grid
   - Profile photo (circular)
   - 5-star rating display
   - Short, authentic quote
   - Name attribution

7. **Guarantee Section**
   - Light green background (#35C48F at low opacity)
   - Shield and checkmark icons
   - Trust indicators: "Compra protegida | Acesso imediato | Garantia de 7 dias"

8. **FAQ**
   - 4 questions with accordion interaction
   - Clear, helpful answers
   - Maintains page flow

9. **Footer**
   - Simple, clean design
   - Copyright notice
   - Links: Termos de Uso, Política de Privacidade, Suporte

### Images

**Hero Image**: Large, prominent image of a happy, healthy dog next to a colorful bowl of natural food with their owner. Should convey joy, health, and the human-animal bond. Place on the right side of hero section (desktop) or below headline (mobile).

**Benefit Section Images**: Use icons or simple illustrations rather than photos to maintain clean aesthetic.

**Testimonial Images**: 3 casual profile photos (circular crop) of real-looking people with their dogs (if possible) to add authenticity.

**Background Accents**: Subtle gradient overlays in blue/green tones for section backgrounds where appropriate (hero, offer section).

### Animations
- **On Scroll**: Fade-in and slide-up effects for sections (subtle, 300-400ms)
- **Hover States**: Slight scale (1.05) on buttons, shadow increase on cards
- **Countdown**: Number flip animation when timer updates
- **FAQ**: Smooth height transition for accordion expansion

### Responsive Behavior
- **Mobile-first approach**
- Break multi-column grids to single column on mobile
- Stack hero image below text on mobile
- Adjust font sizes proportionally
- Maintain touch-friendly button sizes (minimum 44x44px)
- Ensure adequate spacing for thumb navigation

### Tone & Copy Approach
- Natural, empathetic, confident language
- Write as a passionate dog owner sharing a life-changing discovery
- Focus on transformation and practical results
- Emphasize simplicity: "Você não precisa ser especialista — só seguir o passo a passo certo"
- Create urgency without being aggressive (countdown timer, limited-time pricing)

### Conversion Optimization
- Multiple CTAs throughout page (hero, offer section)
- Social proof strategically placed before main offer
- Clear value proposition and benefit communication
- Friction-reducing guarantee messaging
- Mobile-optimized checkout flow consideration