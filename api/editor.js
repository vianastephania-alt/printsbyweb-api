import jwt from "jsonwebtoken";

export default function handler(req, res) {

  const key = process.env.PIXLR_KEY;
  const secret = process.env.PIXLR_SECRET;

  if (!key || !secret) {
    return res.status(500).send("Error variables");
  }

  const payload = {
    iss: key,
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  };

  const token = jwt.sign(payload, secret);

  res.redirect(`https://pixlr.com/editor/?token=${token}`);
}
