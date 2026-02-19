const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/health", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ ok: true });
});

// TESTE: por enquanto devolve um número fixo
app.get("/youtube/viewers", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.json({ viewers: 1234 });
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
