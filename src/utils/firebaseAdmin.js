import admin from "firebase-admin";
import serviceAccount from "../../qwik-form-firebase-adminsdk-6xhps-41fd689e86.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { db, admin };
