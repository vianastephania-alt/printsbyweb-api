export default function handler(req, res) {
  const key = process.env.PIXLR_KEY;
  const secret = process.env.PIXLR_SECRET;

  if (!key || !secret) {
    return res.status(500).json({ error: "Variables no cargadas" });
  }

  res.status(200).json({ 
    message: "Variables cargadas correctamente",
    keyLoaded: !!key,
    secretLoaded: !!secret
  });
}
