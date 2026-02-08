# Tech Stack – Landingpage

> **Mobile First** · Calm · Elegant · Performant

---

## Übersicht

| Fokus | Ziel |
|-------|------|
| JavaScript | Minimal (Alpine.js optional) |
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

> Utility-first CSS Framework

**Warum Tailwind:**

| Grund | Vorteil |
|-------|---------|
| Utility-first | Keine schweren CSS-Dateien |
| Spacing & Radii | Perfekte Kontrolle |
| Mobile-first | Standard-Ansatz |
| Purging | Nur genutzte Klassen im Build |

**Verwendung:**

- Spacing & Layout (`p-6`, `mt-8`, `gap-6`)
- Typography Scale (`text-3xl`, `font-light`)
- Soft Corners (`rounded-xl`, `rounded-2xl`, `rounded-full`)
- Color System (`bg-stone-50`, `text-gray-700`)
- Transitions (`transition-all`, `duration-500`)

**Custom Config:**

```js
// tailwind.config.js
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['GentiumPlusW', 'Georgia', 'serif'],
        'sans': ['europa', 'sans-serif'],
      },
      colors: {
        'brand': {
          'teal': '#5ea8b7',
          'warm': '#faf8f6',
        }
      },
      borderRadius: {
        'pill': '999px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'hero-reveal': 'heroReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroReveal: {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.97)', filter: 'blur(8px)' },
          '60%': { filter: 'blur(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

**CDN für Entwicklung:**

```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

## Motion & Animation

### Tailwind + Custom Keyframes

> Primary Motion Layer

| Pattern | Tailwind Class |
|---------|----------------|
| Fade Up | `animate-fade-in-up` |
| Hero Text | `animate-hero-reveal` |
| Transitions | `transition-all duration-500 ease-out` |
| Hover | `hover:scale-[1.02] hover:shadow-lg` |

**Hero Animation Timeline:**

| Element | Delay Class |
|---------|-------------|
| Slider Image | `delay-100` |
| "Dein Kleid." | `[animation-delay:500ms]` |
| "Deine Kurven." | `[animation-delay:1500ms]` |
| "Dein Moment." | `[animation-delay:2500ms]` |
| Subline | `[animation-delay:3200ms]` |
| Meta | `[animation-delay:3400ms]` |
| CTA | `[animation-delay:3600ms]` |

**Wichtig:**
- Einmalige Entrance-Animationen
- Respektiert `motion-reduce:` Variante
- Kein Parallax

---

## Fonts & Typography

### Adobe Fonts (Typekit) + Tailwind

| Element | Font | Tailwind Class |
|---------|------|----------------|
| Headlines | GentiumPlusW | `font-serif` |
| Body | GentiumPlusW | `font-serif` |
| UI/Nav | Europa | `font-sans` |

**Loading:**

```html
<link rel="stylesheet" href="https://use.typekit.net/qku0lip.css">
```

---

## Images

### Native `<img>` + Tailwind

| Eigenschaft | Tailwind Class |
|-------------|----------------|
| Rounded | `rounded-xl`, `rounded-2xl` |
| Object Fit | `object-cover` |
| Lazy Load | `loading="lazy"` |
| Aspect Ratio | `aspect-square`, `aspect-video` |

---

## JavaScript

### Minimal Stack

| Library | Zweck |
|---------|-------|
| Alpine.js (optional) | Interaktivität |
| Vanilla JS | Intersection Observer |

**Kein Build-Prozess für Entwicklung:**
- Tailwind CDN
- Direkte Script-Einbindung

---

## Tailwind Utility Patterns

### Buttons (Pill)

```html
<a class="inline-block px-8 py-4 bg-gray-900 text-white font-sans 
          rounded-full transition-all duration-300 
          hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg">
  Deine Anprobe erleben
</a>
```

### Benefit Cards

```html
<div class="bg-white p-6 rounded-2xl shadow-sm 
            transition-all duration-300 
            hover:-translate-y-1 hover:shadow-md">
  <div class="text-2xl mb-3">✨</div>
  <h3 class="font-sans font-medium text-gray-900 mb-2">Exklusive Anprobe</h3>
  <p class="font-serif text-gray-600">Boutique nur für dich.</p>
</div>
```

### Hero Text Line

```html
<span class="block opacity-0 animate-hero-reveal [animation-delay:500ms]">
  Dein Kleid.
</span>
```

---

## Performance & Delivery

### Static Site + Tailwind

| Eigenschaft | Wert |
|-------------|------|
| CSS | Tailwind CDN (Dev) / Purged Build (Prod) |
| Framework | Keins (kein React/Vue) |
| Load | Instant auf Mobile |

**Production Build:**
```bash
npx tailwindcss -o styles.css --minify
```

---

## Accessibility

| Feature | Tailwind Support |
|---------|------------------|
| Focus Styles | `focus:ring-2 focus:ring-offset-2` |
| Reduced Motion | `motion-reduce:transition-none` |
| Screen Reader | `sr-only` |

---

## Leitprinzip

> **Less technology. More feeling.**

Tailwind ermöglicht:

- Schnelle Iteration
- Konsistentes Design-System
- Minimaler CSS-Output
- Mobile-first by default

---

## Outcome

Eine Landingpage, die sich anfühlt wie ein **ruhiger, privater Moment** – nicht wie eine Web-Applikation.
