import admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";

if (admin.apps.length === 0) {
  // App has not been initialized yet
  admin.initializeApp({
    credential: applicationDefault(),
  });
}

export { admin };
