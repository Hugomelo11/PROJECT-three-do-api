import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { credentials } from "../credentials.js";

export default function dbConnect() {
  // returns an array of all the Firebase services (e.g. Firestore) that we are connected to
  if (!getApps().length) {
    // not yet connected ...
    initializeApp({
      credential: cert(credentials),
    });
  }
  return getFirestore();
}
