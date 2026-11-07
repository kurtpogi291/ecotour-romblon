# EcoTour development roadmap

## Current prototype scope

### Phase 1 — Discovery and map reliability
- Destination search, categories, sorting, saved places and destination details.
- MapLibre map with OpenFreeMap's public Liberty style; no API key is required by this map style endpoint.
- Destination directions and map markers.

### Phase 2 — Booking experience
- Booking flow, local availability checks, booking history, printable receipts, cancellation/refund-request demo status.
- Saved traveler profiles and payment-method display.
- Payment methods and GCash/card flows are demonstration-only; do not enter real payment credentials.

### Phase 3 — Signature traveler features (added)
- Build My Trip: a rule-based itinerary generator using the sample Romblon destinations and sample activity listings.
- Saved itineraries: stored in the current browser's local storage.
- Suggested route: opens the itinerary's destination sequence in Google Maps.
- Local Experiences marketplace: filterable sample activity cards with links to destination details and trip planning.
- EcoScore: a pilot sustainability rubric with Waste, Nature, Community and Resources categories.

## Recommended next phases

### Phase 4 — Verified local operator marketplace
- Operator onboarding and identity/business verification.
- Real listings, availability calendars, capacity, booking requests and operator response times.
- Evidence-backed EcoScore assessments with public methodology, audit trail and reassessment dates.

### Phase 5 — Production booking infrastructure
- Backend API and shared database (e.g. Supabase or Firebase with server-side security rules).
- Server-side inventory locking to prevent double booking.
- Role-based access for traveler, host and administrator accounts.
- Payment gateway integration through a PCI-compliant provider; never store card numbers or CVV in this app.
- Email/SMS notifications, refunds and booking QR verification backed by server records.

### Phase 6 — Differentiation and scale
- Weather and ferry schedule integrations from dependable providers.
- Offline itinerary access and downloadable trip packs.
- Traveler reviews tied to verified bookings, reporting and moderation.
- Local language support, accessibility improvements and analytics.
- Rewards for verified low-impact choices and local community spending.

## Prototype data and safety notes

- All experience names, prices and EcoScore values currently in the app are sample/demo content. Confirm details with local operators before publishing.
- The trip planner is rules-based, not an AI service. Its totals are indicative and exclude transport, meals, lodging and other costs unless specifically shown.
- Browser local storage is device-specific and is not a shared booking database. It is not suitable for production accounts or sensitive payment data.
- EcoScore is not an environmental certification. A production score must be evidence-based, transparent and independently reviewable.
