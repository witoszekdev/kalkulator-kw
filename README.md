# Kalkulator Księgi Wieczystej

A Polish land registry (Księga Wieczysta) checksum calculator. Enter a court code and an 8-digit register number to compute the control digit.

## Tech stack

- React 18 + TypeScript
- Chakra UI
- Vite
- PostHog (analytics)

## Getting started

```bash
npm install
cp .env.example .env  # add your PostHog API key
npm run dev
```

## Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Type-check and build for production
- `npm run preview` - Preview the production build

## How it works

The app calculates a checksum for Polish land registry numbers using a weighted modulo-10 algorithm.
Each character in the combined court code + register number is assigned a numeric value and multiplied by a positional weight (1, 3, or 7).
The sum modulo 10 gives the control digit.
