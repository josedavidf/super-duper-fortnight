function alternarModo() {
  document.body.classList.toggle("modo-escuro");
}
function mostrarLogin() {
  document.getElementById("login-form").style.display = "block";
}
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "1234") {
    document.querySelector(".admin-area").style.display = "block";
    document.getElementById("login-form").style.display = "none";
  } else {
    document.getElementById("erro-login").innerText = "Usuário ou senha incorretos.";
  }
}
function criarCampanha(event) {
  event.preventDefault();
  const form = event.target;
  const nome = form.nome.value;
  const descricao = form.descricao.value;
  const valor = form.valor.value;
  const linkPagamento = form.link_pagamento.value;
  const linkPix = form.link_pix.value;
  const quantidade = form.quantidade_numeros.value;

  const li = document.createElement("li");
  li.textContent = `${nome} - R$${valor}`;
  document.getElementById("listaCampanhas").appendChild(li);
}
function gerarNumeros() {
  const quantidade = document.getElementById("quantidade").value;
  const numerosDiv = document.getElementById("numeros");
  numerosDiv.innerHTML = "";
  for (let i = 1; i <= quantidade; i++) {
    const span = document.createElement("span");
    span.textContent = i;
    span.style.margin = "2px";
    span.style.display = "inline-block";
    span.style.width = "30px";
    span.style.height = "30px";
    span.style.border = "1px solid #000";
    span.style.textAlign = "center";
    numerosDiv.appendChild(span);
  }
}
