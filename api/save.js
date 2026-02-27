export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    return res.redirect(302, "https://prinstbyweb.wuaze.com/PERSONALIZA-TU-PROPIO-DISE%C3%91O/");
  }

  return res.status(405).json({ error: "Método no permitido" });
}
