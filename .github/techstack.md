# Tech Stack – Landingpage

> **Mobile First** · Calm · Elegant · Performant

---

## Übersicht

| Fokus | Ziel |
|-------|------|
| JavaScript | Minimal |
| Motion | Smooth & feminin |
| Typography | Clean & lesbar |
| Performance | Excellent Core Web Vitals |
| Wartbarkeit | Langfristig & einfach |

---

## Core

### HTML5 (Semantic First)

- Clean, semantic markup
- Accessibility-friendly by default
- Optimiert für Screenreader & mobile Navigation

---

## Styling

### Tailwind CSS

> Primary Styling Framework

**Warum Tailwind:**

| Grund | Vorteil |
|-------|---------|
| Utility-first | Keine schweren CSS-Dateien |
| Spacing & Radii | Perfekte Kontrolle |
| Mobile-first | Standard-Ansatz |

**Verwendung:**

- Spacing & Layout
- Typography Scale
- Soft Corners (`rounded-xl`, `rounded-2xl`, `rounded-full`)
- Color System & Gradients

**Custom Config:**

```js
// tailwind.config.js
{
  borderRadius: { /* erweitert */ },
  animation: { /* custom timing */ },
  colors: { /* Brand Palette */ }
}
```

### Tailwind Typography Plugin

- Elegante Defaults für Text
- Gute Lesbarkeit auf Mobile
- Kontrollierte Line-Height

---

## Motion & Animation

### CSS Transitions + Tailwind

> Primary Motion Layer

| Pattern | Wert |
|---------|------|
| Animation | Fade + Translate |
| Opacity | `0 → 1` |
| Transform | `translateY(12–24px) → 0` |
| Dauer | `400–700ms` |
| Easing | `ease-out` oder `cubic-bezier(0.22, 1, 0.36, 1)` |

**Wichtig:**
- Einmalige Entrance-Animationen
- Respektiert `prefers-reduced-motion`
- Kein Parallax

### Alpine.js (Optional)

> Nur für leichte Interaktivität

| Use Case | |
|----------|---|
| Mobile Menu Toggle | ✓ |
| Accordion / FAQ | ✓ |
| CTA Interactions | ✓ |

**Warum Alpine:**
- Minimaler Footprint
- Keine Build-Komplexität
- Deklarativ & lesbar

---

## Fonts & Typography

### Web Fonts

| Element | Stil |
|---------|------|
| Headlines | Elegant Serif |
| Body | Humanistische Sans oder ruhige Serif |

**Loading:**

```css
@font-face {
  font-display: swap; /* Performance */
}
```

---

## Images

### Native `<img>` + Moderne Formate

| Format | Verwendung |
|--------|------------|
| WebP / AVIF | Wo möglich |
| Corners | Soft rounded |
| Style | Keine aggressive Crops |

**Performance:**

```html
<img loading="lazy" decoding="async" />
```

---

## Performance & Delivery

### Static Site

> Kein Heavy Framework

| Eigenschaft | Wert |
|-------------|------|
| Framework | Keins (kein React/Vue) |
| Hydration | Zero cost |
| Load | Instant auf Mobile |
| Core Web Vitals | Excellent |

**Hosting:**
- Static / CDN-based
- Simple Deployment
- Keine Runtime Dependencies

---

## Accessibility

| Feature | Status |
|---------|--------|
| Semantic HTML | ✓ |
| Contrast Ratios | ✓ |
| Focus Styles | ✓ |
| Reduced Motion | ✓ |
| Touch Targets | ✓ |

---

## Tooling (Optional)

| Tool | Zweck |
|------|-------|
| Prettier | Code Formatting |
| ESLint | JS Linting |
| PostCSS | Tailwind Pipeline |

---

## Leitprinzip

> **Less technology. More feeling.**

Dieser Stack vermeidet Komplexität für:

- Ruhige User Experience
- Emotionale Klarheit
- Langfristige Wartbarkeit
- Schnelle Iteration ohne Technical Debt

---

## Outcome

Eine Landingpage, die sich anfühlt wie ein **ruhiger, privater Moment** – nicht wie eine Web-Applikation.
