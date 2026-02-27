export default function handler(req, res) {
  const token = "token-de-prueba-123";
  res.status(200).json({ token });
}
