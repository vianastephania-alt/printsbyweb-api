export default async function handler(req, res) {
  if (req.method === "POST") {
    return res.redirect(302, "https://printsbyweb.wuaze.com");
  }

  return res.status(405).json({ error: "Método no permitido" });
}
