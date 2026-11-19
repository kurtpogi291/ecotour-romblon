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
- Official provincial tourism information links for Bonbon Beach and Tiamban Beach: https://cms-romblon-lgu.e.gov.ph/tourism ; this is general provincial tourism information, **not** a place's official Facebook page. Tinagong Dagat retains the Calatrava Tourism Council link on https://calatravaromblon.gov.ph/ .
- Teal/ocean styling, clearer card hierarchy, modern island chips, accessible focus states. Original map and gallery behavior retained.

Example Firebase destination fields:
```json
{"island":"Tablas","visitorInfo":{"hours":"Confirm locally","access":"Ask tourism staff for access details"}}
```

**Tinagong Dagat source note:** the Calatrava LGU website lists a ₱25 entrance charge (https://calatravaromblon.gov.ph/index.html), distinct from operator boat-tour rates. The prototype now labels this as a reference requiring confirmation, not a payment or booking quote. The prior seeded ₱500 boat-tour figure was unverified and removed.

## Location verification and safe directions (2026-11-19)
Pinned feature points were checked against named OpenStreetMap features visible on Mapcarta; these are mapped feature positions, **not surveyed entrances or guaranteed step-by-step routes**. Google Maps may provide incomplete driving paths on island roads. The Get Directions links use verified road/port waypoints where applicable.

| Place | Map pin latitude, longitude | Navigation behavior / source |
|---|---|---|
| Bonbon Sandbar | 12.57091, 122.24214 | Driving destination **entrance** 12.57239, 122.24816, OSM node 13518301444; mapcarta.com/W655831693 and /N13518301444 |
| Binucot Beach Resort | 12.31002, 121.92418 | Road to mapped resort, mapcarta.com/N5075100658 |
| Footprints Beach Resort | 12.55446, 122.00452 | Road to mapped resort, mapcarta.com/N10956614559 |
| Mount Guiting-Guiting | 12.41635, 122.56879 | Summit marker ONLY, mapcarta.com/N11915888197; **search for DENR registration office in Tampayan instead of routing to summit** |
| Looc Fish Sanctuary | 12.25495, 121.99104 | **Pin is explicitly the Port of Looc**, not the floating fish sanctuary; boat from port, mapcarta.com/W28010905 |
| Carabao Island (Hambil) | 12.06394, 121.93669 | Island position only; **search for San Jose boat arrival port**, not driving to island interior, mapcarta.com/15782782 |
| Aglicay Beach Resort | 12.22250, 122.04631 | Road to mapped resort, mapcarta.com/N4113539689 |
| Cantingas River Resort visitor area | 12.32739, 122.57911 | Road to mapped visitor area, mapcarta.com/N5300220024 |
| Tiamban Beach | 12.56880, 122.24976 | Road to mapped beach, mapcarta.com/W55179805 |
| Mablaran Falls park | 12.55957, 122.02916 | Pin shows mapped park; **search for trail access**, not driving to waterfall, mapcarta.com/N10956655893 |
| Tinagong Dagat | 12.67340, 122.11200 | Lake feature, mapcarta.com/W925528972; road directions instead to **Calatrava Port** 12.62173, 122.06818 (mapcarta.com/N7658011605); onward boat must be arranged with Calatrava tourism office |

Google route URLs generated in the map popup and detail page share `routeForSpot()`. The itinerary route refuses to produce a single false road journey spanning separate islands or requiring boat/trail access. Newly created Firebase destinations require `locationVerified:true` with checked WGS84 coordinates before displaying a map pin or offering coordinate-based road directions; otherwise only a place-name search is provided. Review road access, port arrangements and seasonal conditions with the relevant local LGU before relying on public navigation data.

### Pin placement correction after map review (2026-11-19)
- **Bonbon Beach pin** corrected from the offshore sandbar (12.57091, 122.24214) to the actual beach area (12.57254, 122.24461), cross-checked with Open Earth (approx. 12.572, 122.246) and latlong.net. The road destination remains the mapped beach access entrance (12.57239, 122.24816).
- **Looc Fish Sanctuary pin** corrected from Port of Looc (12.25495, 121.99104) to the reported offshore sanctuary point (approx. 12.24616, 121.98259). Source: traveltoph.fun tourist spot listing; **not field verified**. Road directions still end at the Port of Looc, which the regional tourism source identifies as the boat departure point. The popup explicitly distinguishes the approximate floating attraction from the port. These points MUST be validated by the Looc tourism office before relying on them for on-water navigation.
- Existing other source-matched site coordinates were retained rather than reverting to known broad-area placeholders. An OpenStreetMap POI coordinate is not a field-surveyed entrance; review locally before production deployment.

## Presentation polish — search suggestions and navigation
- Explore, Map, and Saved Places searches now display local dropdown suggestions by matching place name, locality, island or category/highlight. Use mouse/touch or Arrow Up/Down + Enter. Escape or outside tap closes the dropdown; empty searches hide it. No external geocoding or invented results.
- All five secondary page headers use matching SVG chevron back buttons and page-history navigation; theme-aware foreground/background fixes the invisible dark-mode glyph.
- Reduced decorative emojis in island chips, home feature shortcuts, travel guide links, and intro headings; kept location/visitor cues where useful.
- Web offline service-worker cache bumped to v3 to avoid older app shell files hiding the updates.
