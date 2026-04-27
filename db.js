// db.js

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

// carrinho (banco simples)
let carrinho = [];

module.exports = {
  produtos,
  carrinho
};