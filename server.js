import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor rodando no port 3000.");
});

//http://localhost:3000/api
//Retorna um texto "Teste 1"
app.get("/api", (req, res) => {
  res.status(200).send("Teste 1");
});
