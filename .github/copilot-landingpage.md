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

| Element | Border-Radius |
|---------|---------------|
| Buttons | `999px` (Pill-Form) |
| Karten / Boxen | `12–20px` |
| Bilder | `8–16px` |
| Trennlinien | Keine – stattdessen Weißraum |

---

## Bildsprache

- Große, ruhige Bilder
- Fokus: Emotion, Stoffe, Anprobemomente
- Kein aggressives Cropping oder Zoomen
- Leichte Abrundungen

---

## Motion & Animation

> Dezent und feminin – keine verspielten Effekte

### Empfohlene Werte

| Eigenschaft | Wert |
|-------------|------|
| Animation | Fade + Y-Translation |
| Opacity | `0 → 1` |
| Transform | `translateY(12–24px) → 0` |
| Dauer | `400–700ms` |
| Easing | `ease-out` oder `cubic-bezier(0.22, 1, 0.36, 1)` |
| Trigger | Einmal beim Sichtbarwerden |
| Delay | `100–150ms` zwischen Elementen |

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  /* Animationen reduzieren oder deaktivieren */
}
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
