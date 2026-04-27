// db.js

// ==========================
// 🟢 PRODUTOS
// ==========================
const produtos = [
  {
    id: 1,
    nome: "Chuteira Society Umbro X-Comfort",
    preco: 158.19,
    imagem: "https://via.placeholder.com/200",
    categoria: "chuteiras"
  },
  {
    id: 2,
    nome: "Chuteira Futsal Munich G-3",
    preco: 293.99,
    imagem: "https://via.placeholder.com/200",
    categoria: "chuteiras"
  },
  {
    id: 3,
    nome: "Chuteira Joma Dribling",
    preco: 313.49,
    imagem: "https://via.placeholder.com/200",
    categoria: "chuteiras"
  }
];

// ==========================
// 🛒 CARRINHO (SIMULADO EM MEMÓRIA)
// ==========================
let carrinho = [];

// ==========================
// ➕ ADICIONAR AO CARRINHO
// ==========================
function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
}

// ==========================
// 🗑️ REMOVER DO CARRINHO
// ==========================
function removerDoCarrinho(index) {
  if (index >= 0 && index < carrinho.length) {
    carrinho.splice(index, 1);
  }
}

// ==========================
// 📦 LISTAR CARRINHO
// ==========================
function listarCarrinho() {
  return carrinho;
}

// ==========================
// 📦 EXPORTAÇÃO
// ==========================
module.exports = {
  produtos,
  adicionarAoCarrinho,
  removerDoCarrinho,
  listarCarrinho
};