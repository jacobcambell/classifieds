import admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import { pg } from "../../config/knex";

if (admin.apps.length === 0) {
  // App has not been initialized yet
  admin.initializeApp({
    credential: applicationDefault(),
  });
}

export default async function handler(req, res) {
  const check = [req.headers.firebase_token, req.body.title, req.body.price];
  if (check.includes(undefined)) {
    res.status(400).send();
    return;
  }

  try {
    let { user_id } = await admin
      .auth()
      .verifyIdToken(req.headers.firebase_token);

    await pg("listings")
      .insert({
        owner_uid: user_id,
        title: req.body.title,
        price: req.body.price,
      })
      .catch((err) => {
        console.log(err);
      });

    res.status(200).send();
  } catch (err) {
    res.status(401).send();
  }
}
