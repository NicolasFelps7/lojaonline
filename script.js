// 🔢 ATUALIZA CONTADOR DO CARRINHO
async function atualizarCarrinho() {
  const res = await fetch("http://localhost:3000/carrinho");
  const dados = await res.json();

  const contador = document.getElementById("contador");
  if (contador) {
    contador.innerText = dados.length;
  }
}

// 🛒 MOSTRAR CARRINHO
async function carregarCarrinho() {
  const res = await fetch("http://localhost:3000/carrinho");
  const dados = await res.json();

  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  if (dados.length === 0) {
    lista.innerHTML = "<h3>Seu carrinho está vazio 🥲</h3>";
    return;
  }

  dados.forEach(p => {
    lista.innerHTML += `
      <div style="background:white; padding:15px; margin-bottom:10px; border-radius:10px;">
        <img src="${p.imagem}" width="100">
        <h4>${p.nome}</h4>
        <p>R$ ${p.preco.toFixed(2)}</p>
      </div>
    `;
  });
}


// ==========================
// 🟢 LISTA DE PRODUTOS
// ==========================
const chuteiras = [
  { id:1, nome:"Nike Mercurial", preco:499.90, imagem:"https://imgnike-a.akamaihd.net/768x768/02942716A2.jpg" },
  { id:2, nome:"Adidas Predator", preco:459.90, imagem:"https://assets.adidas.com/images/w_600,f_auto,q_auto/33d99e6f605542258a2cc938706f6af0_9366/Chuteira_Predator_League_Fold-Over_Tongue_Firm-Multi-Ground_Branco_JI1111_01_00_standard_hover.jpg" },
  { id:3, nome:"Puma Future", preco:389.90, imagem:"https://images.tcdn.com.br/img/img_prod/311840/chuteira_puma_future_z_1_2_fg_ag_campo_azul_94145_2_8fafc93858089d68152ea356cc9ba54f_20210806215830.jgp"},
  { id:4, nome:"Nike Phantom", preco:529.90, imagem:"https://imgnike-a.akamaihd.net/1300x1300/02478115A9.jpg" },
  { id:5, nome:"Adidas Copa", preco:429.90, imagem:"https://images.tcdn.com.br/img/img_prod/1130952/chuteira_adidas_copa_pure_ii_pro_firm_ground_cleats_ie4979_6559_1_7b82a597c2a39484a07a9ac2ffd61b08.jpg" }
];

// ==========================
// 🛒 ADICIONAR AO CARRINHO
// ==========================
function comprar(produto) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.push(produto);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // redireciona
  window.location.href = "carrinho.html";
}

// ==========================
// 👟 MOSTRAR CHUTEIRAS
// ==========================
function carregarChuteiras() {
  const lista = document.getElementById("produtos");

  if (!lista) return; // evita erro em outras páginas

  lista.innerHTML = "";

  chuteiras.forEach(p => {
    lista.innerHTML += `
      <div class="card-produto">
        <img src="${p.imagem}">
        <h4>${p.nome}</h4>
        <p class="preco">R$ ${p.preco.toFixed(2)}</p>

        <button onclick='comprar(${JSON.stringify(p)})'>
          Comprar
        </button>
      </div>
    `;
  });
}

// ==========================
// 🛒 MOSTRAR CARRINHO
// ==========================
function carregarCarrinho() {
  const lista = document.getElementById("lista");

  if (!lista) return;

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) {
    lista.innerHTML = "<h3>Carrinho vazio 😢</h3>";
    return;
  }

  lista.innerHTML = "";

  carrinho.forEach(p => {
    lista.innerHTML += `
      <div class="card">
        <img src="${p.imagem}" width="100">
        <h4>${p.nome}</h4>
        <p>R$ ${p.preco.toFixed(2)}</p>
      </div>
    `;
  });
}

// ==========================
// 🚀 INICIALIZAÇÃO AUTOMÁTICA
// ==========================
carregarChuteiras();
carregarCarrinho();