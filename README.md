# Northstar Commerce

Northstar Commerce is a portfolio project for an e-commerce operations
dashboard. The product is designed for teams that need one workspace for
monitoring revenue, order flow, conversion health, acquisition performance,
and operational risk.

## Product Summary

Northstar Commerce helps an e-commerce operations manager answer a few core
questions quickly:

- Is revenue moving in the right direction?
- Which channels are driving growth?
- Is conversion quality improving or slipping?
- Where are refunds, fulfillment delays, or customer issues starting to show up?
- Which records need follow-up right now?

The interface is structured around fast daily monitoring, quick-read insights,
and drill-down access to operational records.

## Main Screens

### Overview Dashboard

The homepage is designed as an executive and operational summary for storefront
performance. It includes:

- KPI cards for net revenue, orders, average order value, and conversion rate
- A revenue trend section with supporting retention and refund signals
- Insight widgets for customer mix, acquisition channels, order risk, and loyalty tiers
- Channel efficiency, category mix, and demand-oriented charts

### Order Intelligence

The analytics view extends the dashboard into a record-level workspace. It includes:

- Saved views and filter pills
- Summary cards for tracked orders and risk exposure
- A searchable operational data table
- A watchlist panel for current issues and follow-up notes

### Account + Preferences

Supporting screens were reframed as product views instead of placeholder pages:

- Account settings for workspace identity and reporting preferences
- Workspace preferences for visible metrics, alerts, digest emails, and shared dashboards

## Design Direction

The product was restyled around a more focused visual system:

- A restrained data palette built from navy, teal, sage, amber, and coral
- Improved chart readability in both light and dark themes
- More intentional dashboard hierarchy through hero sections, section headers, and supporting context
- Product-oriented copy and more realistic e-commerce terminology

## Current Scope

This version of the project includes:

- A branded `Northstar Commerce` experience
- A redesigned dashboard home
- An `Order Intelligence` analytics workspace
- Product-style account and preference screens
- Clean production build and lint pass

## Tech Stack

- Next.js
- React
- TypeScript
- MUI
- Chart.js
- Sass modules
- NextAuth

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Runs ESLint for the Next.js app.

### `npm run build`

Creates an optimized production build.

## Notes

This is a portfolio project, so some interactions use demo data and preview-only
feedback rather than persisted backend behavior. The main goal is to present a
clear, product-oriented dashboard experience for an e-commerce operations use case.
