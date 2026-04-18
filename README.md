# Northstar Commerce

Portfolio case study: an e-commerce operations dashboard for revenue,
conversion, orders, and customer insights.

Northstar Commerce is a portfolio project for an e-commerce operations
dashboard. The product is designed for teams that need one workspace for
monitoring revenue, order flow, conversion health, acquisition performance,
and operational risk.

## At a Glance

- Live demo: https://northstar-commerce.vercel.app
- Product concept: e-commerce operations dashboard
- Primary user: E-commerce Operations Manager
- Main promise: one workspace for monitoring storefront performance and acting
  on operational issues quickly
- Core views: Overview Dashboard, Order Intelligence, Account, Preferences
- Stack: Next.js, React, TypeScript, MUI, Chart.js, Sass modules, NextAuth

## Portfolio Summary

Northstar Commerce was shaped as a product-style dashboard rather than a
generic analytics demo. The goal was to create a clearer story around who the
product is for, what decisions it supports, and why each screen exists.

The product centers on a practical workflow:

1. Review top-line storefront health
2. Spot movement in channels, retention, and order risk
3. Drill into operational records that need follow-up
4. Manage account and workspace preferences in the same product system

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

- Saved views, explicit filter controls, and quick view presets
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
- Mobile summary views that keep KPIs and record previews readable while reserving dense charts and full data grids for tablet and desktop screens

## Current Scope

This version of the project includes:

- A branded `Northstar Commerce` experience
- A redesigned dashboard home
- An `Order Intelligence` analytics workspace
- Product-style account and preference screens
- Interactive filters, search, quick views, and preview-only workspace actions
- Clean production build and lint pass

## Design Decisions

### Why an e-commerce operations dashboard?

This direction gave the project a clear user, a clearer set of daily decisions,
and a stronger reason for each widget on the page. Instead of presenting a
generic dashboard, Northstar Commerce is framed around revenue monitoring,
channel performance, operational risk, and customer retention.

### Why this layout?

The product is structured to move from high-level signal to operational detail:

1. Overview metrics for fast daily check-ins
2. Trend and insight panels for interpretation
3. Order Intelligence for record-level investigation
4. Account and preference screens as supporting product surfaces

### Why this visual system?

The visual language was designed to feel more like a modern product and less
like a template demo:

- restrained brand palette instead of neon dashboard colors
- stronger section hierarchy through hero panels and contextual headers
- subtle brand watermark treatment for a more distinctive product feel
- cleaner light and dark themes with improved chart readability

## Tech Stack

- Next.js
- React
- TypeScript
- MUI
- Chart.js
- Sass modules
- NextAuth


## Notes

This is a portfolio project, so some interactions use demo data and preview-only
feedback rather than persisted backend behavior. The main goal is to present a
clear, product-oriented dashboard experience for an e-commerce operations use case.
