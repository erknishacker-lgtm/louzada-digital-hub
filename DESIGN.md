# Design System — Louzada Digital Hub

## Visual Theme

**Physical scene:** landing de conversão clara e premium (referência visual: Magic UI / CodeForge light), com ar de produto tech confiável; azul elétrico da logo como acento de ação; tipografia limpa (Sora + Source Sans 3).

**Color strategy:** Restrained light — superfície off-white carrega o fundo; navy no texto; azul elétrico como único accent de CTA/ênfase.

**Lane:** light SaaS premium com arte de grade fina + glow suave + painéis mock (inspirado em Magic UI; não cyber neon, não cream genérico).

## Colors (OKLCH + hex anchors)

| Token | OKLCH | Hex approx | Role |
|-------|-------|------------|------|
| `--bg` | oklch(0.16 0.035 250) | `#091D37` | Body / surface base (navy logo) |
| `--bg-elevated` | oklch(0.20 0.04 250) | `#0D2748` | Faixas, cards sutis |
| `--bg-deep` | oklch(0.12 0.03 250) | `#061526` | Hero depth, footer |
| `--ink` | oklch(0.97 0.01 250) | `#F4F7FB` | Texto principal |
| `--ink-muted` | oklch(0.78 0.02 250) | `#A8B4C4` | Corpo secundário (≥4.5:1 em bg) |
| `--accent` | oklch(0.58 0.24 260) | `#0061FE` | Azul logo — CTAs, links, price |
| `--accent-hover` | oklch(0.64 0.22 260) | `#2B7CFF` | Hover CTA |
| `--accent-soft` | oklch(0.58 0.24 260 / 0.12) | — | Tints, chips, glow controlado |
| `--line` | oklch(0.97 0.01 250 / 0.10) | — | Divisores |
| `--danger-strike` | oklch(0.70 0.04 250) | `#8B9BB0` | Preço riscado |
| `--success` | oklch(0.78 0.12 155) | — | Checkmarks (sutil, não neon) |

Light logo version used on dark surfaces; dark logo version reserved if a light band is introduced.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Display / H1–H3 | **Sora** | Geometric premium, não está na ban list de reflexos; letter-spacing ≥ -0.03em |
| Body / UI | **Source Sans 3** | Clareza de leitura longa; contraste humanista vs. geometric display |

### Scale (fluid)

- Display: `clamp(2.25rem, 1.4rem + 3.5vw, 3.75rem)` — teto ≤ 6rem
- H2: `clamp(1.6rem, 1.2rem + 1.8vw, 2.25rem)`
- H3: `clamp(1.2rem, 1.05rem + 0.8vw, 1.4rem)`
- Body: `1.0625rem` / `1.7` line-height (leve + em dark)
- Small / meta: `0.875rem`

`text-wrap: balance` em h1–h3; `pretty` em parágrafos longos.

## Layout

- Max content: `72rem` (hero copy max ~42rem para foco)
- Section padding: `clamp(4rem, 8vw, 7.5rem)` vertical
- Rhythm: hero generoso → listas mais densas → preço com respiro → FAQ compacto
- Grid de benefícios: `repeat(auto-fit, minmax(280px, 1fr))` sem cards aninhados
- Pricing: painel único destacado (não grid de 3 planos)

## Components

### Buttons
- Primary: fundo `--accent`, texto branco, raio 999px (pill), sem sombra larga + borda juntas
- Secondary: ghost com borda `--line`, hover eleva para `--accent-soft`
- Min height 48px touch

### Cards / panels
- Raio 12–16px (nunca 24+)
- Borda 1px `--line` **ou** fundo elevated — não ambos + shadow soft grande
- Shadow só se sem borda, blur ≤ 8px

### Nav
- Sticky, fundo semi-opaco com blur sutil (propósito: legibilidade ao rolar, não glass decorativo)
- Logo + CTA compacto no desktop; menu hamburger acessível no mobile

### FAQ
- `<details>` / `<summary>` nativo, ícone +/−, sem JS pesado

### Forms
- N/A na v1 (CTA = mailto)

## Motion

- Entrada do hero: fade + translateY curto (400–600ms, ease-out-expo)
- Scroll reveals leves só em blocos de prova/benefício — default content visible (sem gate de opacidade 0 permanente)
- Hover em CTA: 150ms background
- `@media (prefers-reduced-motion: reduce)`: só crossfade ou instant

## Imagery

- Logos oficiais (PNG) em header, hero e footer
- Sem stock fotográfico genérico de “equipe sorrindo”
- Decoração: grid sutil + glow radial do accent no hero (controlado), monograma em watermark

## Spacing tokens

4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96

## Z-index scale

`base` 0 → `sticky` 100 → `dropdown` 200 → `modal-backdrop` 300 → `modal` 400 → `toast` 500
