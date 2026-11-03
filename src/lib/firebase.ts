import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

let app: FirebaseApp | null = null

export function firebaseApp(): FirebaseApp {
  if (!app) {
    app = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    })
  }
  return app
}

let _auth: Auth | null = null
export function authClient(): Auth {
  if (!_auth) _auth = getAuth(firebaseApp())
  return _auth
}

let _db: Firestore | null = null
export function dbClient(): Firestore {
  if (!_db) _db = getFirestore(firebaseApp())
  return _db
}
