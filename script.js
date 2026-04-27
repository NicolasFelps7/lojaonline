
// ==========================
// 👤 CADASTRO
// ==========================
function criarConta() {
  const nome = document.getElementById("cadNome").value;
  const email = document.getElementById("cadEmail").value;
  const senha = document.getElementById("cadSenha").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuarios.find(u => u.email === email);

  if (existe) {
    alert("Esse e-mail já está cadastrado!");
    return;
  }

  usuarios.push({ nome, email, senha });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Conta criada com sucesso!");
}

// ==========================
// 🔐 LOGIN
// ==========================
function login() {
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (!usuario) {
    alert("E-mail ou senha incorretos!");
    return;
  }

  localStorage.setItem("logado", JSON.stringify(usuario));

  alert("Login realizado!");

  window.location.href = "index.html";
}

// ==========================
// 🚪 LOGOUT
// ==========================
function logout() {
  localStorage.removeItem("logado");
  window.location.href = "login.html";
}

// ==========================
// 🔒 PROTEÇÃO DE PÁGINA
// ==========================
function verificarLogin() {
  const user = localStorage.getItem("logado");

  if (!user) {
    window.location.href = "login.html";
  }
}

// ==========================
// 🟢 PRODUTOS
// ==========================
const chuteiras = [
  { id: 1, nome: "Nike Mercurial", preco: 499.90, imagem: "https://images.tcdn.com.br/img/img_prod/628041/chuteira_campo_nike_mercurial_vapor_15_club_branco_azul_claro_23527_1_581767a7b3dc17fd646d4eb02c7f3e3f.png" },
  { id: 2, nome: "Adidas Predator", preco: 459.90, imagem: "https://www.sportvision.gr/files/thumbs/files/images/slike_proizvoda/media/JI1/JI1092/images/thumbs_800/JI1092_800_800px.jpg.webp" },
  { id: 3, nome: "Puma Future", preco: 389.90, imagem: "https://shoxstore.com.br/wp-content/uploads/2022/05/pmfz13fgaz_1.jpg" }
];

// ==========================
// 👟 MOSTRAR PRODUTOS (CORREÇÃO IMPORTANTE)
// ==========================
function carregarChuteiras() {
  const lista = document.getElementById("produtos");
  if (!lista) return;

  lista.innerHTML = "";

  chuteiras.forEach(p => {
    const card = document.createElement("div");
    card.className = "card-produto";

    card.innerHTML = `
      <img src="${p.imagem}">
      <h4>${p.nome}</h4>
      <p>R$ ${p.preco.toFixed(2)}</p>
      <button onclick="comprar(${p.id})">Comprar</button>
    `;

    lista.appendChild(card);
  });
}

// ==========================
// 🛒 CARRINHO
// ==========================
function comprar(id) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const produto = chuteiras.find(p => p.id == id);

  carrinho.push(produto);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  atualizarCarrinho();

  window.location.href = "carrinho.html";
}

// ==========================
// 🔢 CONTADOR
// ==========================
function atualizarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const contador = document.getElementById("contador");

  if (contador) {
    contador.innerText = carrinho.length;
  }
}

// ==========================
// 🛒 MOSTRAR CARRINHO
// ==========================
function carregarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  if (!lista) return;

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  lista.innerHTML = "";

  if (carrinho.length === 0) {
    lista.innerHTML = "<h3>Carrinho vazio 😢</h3>";
    return;
  }

  carrinho.forEach((p, index) => {
    lista.innerHTML += `
      <div style="background:white; padding:15px; margin:10px; border-radius:10px;">
        <img src="${p.imagem}" width="100">
        <h4>${p.nome}</h4>
        <p>R$ ${p.preco.toFixed(2)}</p>

        <button onclick="removerItem(${index})"
          style="background:red;color:white;border:none;padding:8px;border-radius:5px;">
          Excluir
        </button>
      </div>
    `;
  });
}

// ==========================
// 🗑️ REMOVER ITEM
// ==========================
function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.splice(index, 1);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  carregarCarrinho();
  atualizarCarrinho();
}

// ==========================
// 🚀 INICIALIZAÇÃO (CORRIGIDA)
// ==========================
document.addEventListener("DOMContentLoaded", () => {

  atualizarCarrinho();
  carregarCarrinho();
  carregarChuteiras(); // 🔥 ESSA LINHA É O QUE FALTAVA
});