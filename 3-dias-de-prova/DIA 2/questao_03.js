function proximo() {
    var grupoA = document.getElementById("grupoA");
    grupoA.innerHTML = `
        <h2>Grupo 🅳</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Estados Unidos</li>
            <li>Paraguai</li>
            <li>Austrália</li>
            <li>Turquia</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p>Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.</p>
        </details>
    `;

    var grupoB = document.getElementById("grupoB");
    grupoB.innerHTML = `
        <h2>Grupo 🅴</h2>
        <h3>Seleções</h3>
        <ul>
            <li>Alemanha</li>
            <li>Equador</li>
            <li>Costa do Marfim</li>
            <li>Curaçao</li>
        </ul>
        <details>
            <summary>Saiba Mais</summary>
            <p>Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
        </details>
    `;
}
