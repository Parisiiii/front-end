function revelar() {
    // Alterar a imagem
    var img = document.querySelector(".card-img-top");
    img.src = "img/_vinicius_junior.png";

    // Preencher o nome
    var nomeSpan = document.querySelector("#Nome .placeholder");
    nomeSpan.textContent = "Vinícius Jr.";
    nomeSpan.classList.remove("placeholder");
    nomeSpan.classList.add("card-text");

    // Preencher o rank
    var rank = document.getElementById("Rank");
    rank.textContent = "9,5";

    // Preencher data de nascimento
    var dataNas = document.getElementById("Data_Nas");
    dataNas.innerHTML = "<strong>Nascimento:</strong> 12/07/2000 (25 anos)";
    dataNas.classList.remove("placeholder");
    dataNas.classList.add("card-text");

    // Preencher altura
    var altura = document.getElementById("Alutra");
    altura.innerHTML = "<strong>Altura:</strong> 1,76 m";
    altura.classList.remove("placeholder");
    altura.classList.add("card-text");

    // Preencher posição
    var posicao = document.getElementById("Posição ");
    posicao.innerHTML = "<strong>Posição:</strong> Ponta-esquerda / Atacante";
    posicao.classList.remove("placeholder");
    posicao.classList.add("card-text");

    // Remover placeholder-glow dos containers
    document.getElementById("Nome").classList.remove("placeholder-glow");
    var cardText = document.querySelector("p.card-text.placeholder-glow");
    if (cardText) {
        cardText.classList.remove("placeholder-glow");
    }
}
