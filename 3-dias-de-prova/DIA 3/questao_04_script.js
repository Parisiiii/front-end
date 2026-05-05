function add() {
    // Pegar o card existente (placeholder) dentro da div #novo
    var novo = document.getElementById("novo");

    // Inserir o card já preenchido com os dados do Vinícius Jr.
    novo.innerHTML = `
        <div class="card" style="width: 22rem;">
            <img src="img/_vinicius_junior.png" class="card-img-top" alt="Vinícius Jr.">
            <div class="card-body">
                <h5 class="card-title">
                    <span class="card-text">Vinícius Jr.</span>
                    <span class="badge text-bg-secondary">9,5</span>
                </h5>
                <p class="card-text">
                    <span><strong>Nascimento:</strong> 12/07/2000 (25 anos)</span><br>
                    <span><strong>Altura:</strong> 1,76 m</span><br>
                    <span><strong>Posição:</strong> Ponta-esquerda / Atacante</span><br>
                </p>
            </div>
        </div>
    `;
}
