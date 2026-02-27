import jwt from "jsonwebtoken";

export default function handler(req, res) {

  // CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "https://prinstbyweb.wuaze.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Responder preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const key = process.env.PIXLR_KEY;
  const secret = process.env.PIXLR_SECRET;

  if (!key || !secret) {
    return res.status(500).json({ error: "Variables no cargadas" });
  }

  const payload = {
    iss: key,
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  };

  const token = jwt.sign(payload, secret);

  res.status(200).json({ token });
}
