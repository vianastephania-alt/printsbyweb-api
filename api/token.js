import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const key = process.env.PIXLR_KEY;
  const secret = process.env.PIXLR_SECRET;

  if (!key || !secret) {
    return res.status(500).json({ error: "Variables no cargadas" });
  }

  const payload = {
    sub: key,
    mode: "http",
    openUrl: "https://raw.githubusercontent.com/vianastephania-alt/printsbyweb-api/main/api/blank.png",
    saveUrl: "https://printsbyweb-api.vercel.app/api/save"
  };

  const token = jwt.sign(payload, secret, {
    expiresIn: "1h"
  });

  return res.status(200).json({ token });
}
