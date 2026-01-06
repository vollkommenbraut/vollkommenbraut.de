# Copilot Briefing: Landingpage – vollkommen.Braut

> **Mobile First** · Emotional · Feminin · Elegant

---

## Ziel

Eine Landingpage, die **emotional, ruhig und hochwertig** wirkt – visuell wie sprachlich.

| Fokus | |
|-------|---|
| Zielgruppe | Plus Size Brautmode (Größen 46–60+) |
| Erlebnis | Exklusive, private Anprobe |
| Gefühl | Wertschätzung, Ruhe, Vertrauen |
| Conversion | **Anprobe buchen** |

---

## Grundprinzipien

| Prinzip | Umsetzung |
|---------|-----------|
| Emotion vor Information | Gefühle zuerst, Details später |
| Weiche Formen | Keine harten Kanten |
| Scannen statt Lesen | Kurze Blöcke, klare Struktur |
| Weniger = Mehr | Fokussierte Elemente |

---

## Above the Fold

> Muss **ohne Scrollen** funktionieren

- Emotionaler Hero-Text (2–4 Zeilen)
- Eine Haupt-CTA
- Keine sachlichen Hinweise

### Hero-Beispiel

```
Dein Kleid.
Deine Kurven.
Dein Moment.

Plus Size Brautmode in Hamburg
Größen 46–60+ · exklusiv & ohne Druck

[ Deine Anprobe erleben ]
```

---

## Content-Regeln

| Regel | Wert |
|-------|------|
| Max. Zeilen pro Block | 2–3 |
| Ansprache | „du", „dein Moment" |
| Format | Emotionale Mini-Module |

### Scanbare Vorteile

| Icon | Vorteil | Detail |
|------|---------|--------|
| ✨ | Exklusive Anprobe | Boutique nur für dich |
| 🤍 | Für echte Kurven | Größen 46–60+ |
| 🪡 | Perfekt angepasst | Änderungen im Haus |
| 💬 | Beratung mit Herz | ehrlich & ohne Druck |

---

## Standort-Hinweis

> Nicht prominent nach dem Hero – weiter unten oder minimal

**Mobile-Version:**
📍 Valentinskamp 62 · 20355 Hamburg

---

## Social Proof

- Früh platzieren
- Kurz, emotional, authentisch

> „Selten so viel Exklusivität erlebt.
> Man merkt, dass hier jede Braut mit Herz begleitet wird."
> — Venja

---

## Call-to-Action

| Eigenschaft | Empfehlung |
|-------------|------------|
| Anzahl | Eine Haupt-CTA |
| Stil | Einheitlich, emotional |
| Text | „Deine Anprobe erleben" oder „Deinen Moment buchen" |

---

## Formen & Radien

> **Keine scharfen Kanten** – konsequent weich

| Element | Border-Radius | Tailwind |
|---------|---------------|----------|
| Buttons | `999px` (Pill) | `rounded-full` |
| Karten / Boxen | `16–20px` | `rounded-2xl` |
| Bilder | `12px` | `rounded-xl` |
| Trennlinien | Keine | Weißraum stattdessen |

---

## Bildsprache

- Große, ruhige Bilder
- Fokus: Emotion, Stoffe, Anprobemomente
- Kein aggressives Cropping oder Zoomen
- Leichte Abrundungen

---

## Motion & Animation

> Dezent und feminin – keine verspielten Effekte

### Hero Animation

| Eigenschaft | Wert | Tailwind |
|-------------|------|----------|
| Animation | Fade + Translate + Blur + Scale | `animate-hero-reveal` |
| Opacity | `0 → 1` | — |
| Transform | `translateY(24px) → 0`, `scale(0.97) → 1` | — |
| Filter | `blur(8px) → 0` | — |
| Dauer | `900ms` (Hero), `600ms` (Standard) | — |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` | — |

### Hero Timeline

| Element | Delay | Tailwind Class |
|---------|-------|----------------|
| Slider Image | 100ms | `[animation-delay:100ms]` |
| "Dein Kleid." | 500ms | `[animation-delay:500ms]` |
| "Deine Kurven." | 1500ms | `[animation-delay:1500ms]` |
| "Dein Moment." | 2500ms | `[animation-delay:2500ms]` |
| Subline | 3200ms | `[animation-delay:3200ms]` |
| Meta | 3400ms | `[animation-delay:3400ms]` |
| CTA | 3600ms | `[animation-delay:3600ms]` |

### Standard Animationen

| Eigenschaft | Wert | Tailwind |
|-------------|------|----------|
| Animation | Fade + Y-Translation | `animate-fade-in-up` |
| Opacity | `0 → 1` | — |
| Transform | `translateY(20px) → 0` | — |
| Dauer | `600ms` | `duration-500` |
| Trigger | Einmal beim Sichtbarwerden | Intersection Observer |

### Accessibility

```html
<!-- Tailwind motion-reduce variant -->
<div class="animate-fade-in-up motion-reduce:animate-none">
  ...
</div>
```

---

## Typografie

> Weich · ruhig · hochwertig

| Element | Empfehlung |
|---------|------------|
| Headlines | Serif oder Soft-Serif (modern, elegant) |
| Fließtext | Humanistische Sans oder ruhige Serif |
| Line-Height | `1.4–1.6` |
| Versalien | Sparsam auf Mobile |

---

## Don'ts

- ❌ Scharfe Kanten
- ❌ Parallax-Effekte auf Mobile
- ❌ Starkes Scaling (> 1.03)
- ❌ Bounce- oder Slide-In-Animationen
- ❌ Wechselnde CTA-Texte
- ❌ Textwüsten

---

## Zielwirkung

Die Seite soll sich anfühlen wie:

- ein ruhiger Atemzug
- ein privater Moment
- ein sanftes Öffnen eines Vorhangs

> **„Hier bin ich richtig."**

---

## Output-Checklist

- [ ] Mobile-optimierte Sections
- [ ] Reduzierte, emotionale Copy
- [ ] Weiche Formen & konsistente Radien
- [ ] Elegante Typografie
- [ ] Ruhige Motion-Patterns
- [ ] Klare CTA-Führung
