const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = require("./db");

// 🔥 LISTAR CHUTEIRAS
app.get("/chuteiras", (req, res) => {
  const chuteiras = db.produtos.filter(p => p.categoria === "chuteiras");
  res.json(chuteiras);
});

// 🛒 ADICIONAR AO CARRINHO
app.post("/carrinho", (req, res) => {
  const { id } = req.body;

  const produto = db.produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" });
  }

  db.carrinho.push(produto);

  res.json({
    mensagem: "Produto adicionado ao carrinho",
    carrinho: db.carrinho
  });
});

// 📦 VER CARRINHO
app.get("/carrinho", (req, res) => {
  res.json(db.carrinho);
});

// ❌ REMOVER ITEM
app.delete("/carrinho/:id", (req, res) => {
  const id = parseInt(req.params.id);

  db.carrinho = db.carrinho.filter(p => p.id !== id);

  res.json(db.carrinho);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});