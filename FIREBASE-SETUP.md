# Firebase setup

EcoTour uses Firebase Authentication (Email/Password) and Firebase Realtime Database.

## Before testing authentication

1. Open the Firebase console for the `ecotour-romblon` project.
2. Go to **Authentication → Sign-in method** and enable **Email/Password**.
3. Confirm that the deployed web origin is listed under **Authentication → Settings → Authorized domains**.
4. Install the Firebase CLI if it is not already installed, sign in, and select the existing `ecotour-romblon` project.
5. From the repository root, deploy the Realtime Database rules:

```bash
firebase deploy --only database
```

The rules in `database.rules.json` keep each user's profile and saved app state private to that authenticated user. Destination data remains publicly readable; posting destination reviews requires authentication.

## Data behavior

- New accounts and sign-ins use Firebase Authentication.
- User profile metadata and saved app state are stored under `users/{uid}`.
- Destination and review data continue using the existing Realtime Database structure.
- Existing accounts that were created only in the old browser-local account store are not migrated. Users of those legacy accounts must create a Firebase account with the same email address (the old local password hash is not a Firebase credential).

The Firebase web configuration in `www/assets/js/firebase.js` is a client configuration, not a service-account key. Restrict its API key to the app's authorized domains and required Firebase APIs in Google Cloud Console.
