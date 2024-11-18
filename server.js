import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor rodando no port 3000.");
});

app.get("/api", (req, res) => {
  res.status(200);
});
