import { pg } from "../../config/knex";
import { admin } from "../../config/firebase-admin";

export default async function handler(req, res) {
  const check = [req.headers.firebase_token];
  if (check.includes(undefined)) {
    res.status(400).send();
    return;
  }

  try {
    let { user_id } = await admin
      .auth()
      .verifyIdToken(req.headers.firebase_token);

    const my_listings = await pg("listings")
      .select("id", "title", "price")
      .where({ owner_uid: user_id })
      .catch((err) => {
        console.log(err);
      });

    res.status(200).send(my_listings);
  } catch (err) {
    res.status(401).send();
  }
}
