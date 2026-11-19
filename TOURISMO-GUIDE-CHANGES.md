# TOURismo Romblon — Guide-first prototype

TOURismo focuses on discovering local destinations, viewing galleries, navigating places, and planning sample travel itineraries.

## What's changed
- Removed reservation, payment, saved-card, receipt, host-inventory, and guest-booking UI and handlers.
- Replaced Trips navigation with the Travel Guide.
- Removed the second HTML splash; Android uses its single native splash.
- Updated displayed name, adaptive launcher vector, web favicon SVG, and branding.
- Added destination social links on the detail page and a Directions shortcut.
- Preserved Firebase Auth, Realtime Database, destination galleries, favorites, map, reviews, itinerary builder, and EcoScore.

## Social link sources and management
The Tinagong Dagat contact link points to **Calatrava Tourism Council**: https://www.facebook.com/calatravatourismcouncil — linked on https://calatravaromblon.gov.ph/ .
For other places, Facebook post search and Instagram hashtag links are **discovery searches**, not official pages. Those searches may produce no results or require login.

To add verified links later, set the following data on a Firebase destination:

```json
"socials": {
  "facebook": "https://www.facebook.com/real-page",
  "instagram": "https://www.instagram.com/real-account",
  "website": "https://calatravaromblon.gov.ph/destinations.html"
}
```

Only HTTPS links to expected hosts are accepted. Website links are currently restricted to the Calatrava municipality portal. Expand that allowlist only for verified sites. Avoid inventing or mislabeling social accounts.

## Upgrade notes
The Android application ID remains `com.ecotour.app` so existing installed builds can update without a package-name migration. Native splash assets under `drawable*/splash.png` remain in the project but are no longer referenced by the Android launch theme. Older pre-Android-8 PNG launch icons are retained; regenerate legacy density assets during a release build.

Run `npm ci`, `npx cap sync android`, then rebuild/install the Android app. A native rebuild is needed to see the new Android splash/theme and application label. On the web the splash is removed and the welcome/home screen is shown immediately.

**Not yet live-tested on-device.** Confirm external Facebook/Instagram behavior, destination data, authentication, map tiles, and the image carousel before release.

## Guide refinements
- Filters: Tablas, Romblon Island, Sibuyan, Carabao Island, plus All. Unknown Firebase places are not mislabeled; add a valid `island` value to categorize.
- "Plan your visit": island, unverified listed cost, placeholder hours, suggested access reminders, and optional responsible travel guidance. Fees and schedules are **not verified**.
- Profile now includes Travel Preferences (island, preferred interest, display travel tips), replacing unimplemented notifications.
- Saved text guides have a local snapshot in `localStorage`. Maps, Firebase updates, and remote pictures are **not offline**. Browser use relies on a service worker after first online load over HTTPS; installed Android Capacitor assets already live on-device.
- Verified municipal info links for Bonbon Beach and Tiamban Beach: https://cms-romblon-lgu.e.gov.ph/tourism ; this is general municipal tourism information, **not** a place's official Facebook page. Tinagong Dagat retains the Calatrava Tourism Council link on https://calatravaromblon.gov.ph/ .
- Teal/ocean styling, clearer card hierarchy, modern island chips, accessible focus states. Original map and gallery behavior retained.

Example Firebase destination fields:
```json
{"island":"Tablas","visitorInfo":{"hours":"Confirm locally","access":"Ask tourism staff for access details"}}
```
