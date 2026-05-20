var btn = document.getElementById('btnCalcular');

btn.addEventListener('click', function() {
  var nome  = document.getElementById('nome').value;
  var nota1 = Number(document.getElementById('nota1').value);
  var nota2 = Number(document.getElementById('nota2').value);
  var nota3 = Number(document.getElementById('nota3').value);

  var resultado = document.getElementById('resultado');
  resultado.style.display = 'block';

  var media = (nota1 + nota2 + nota3) / 3;

  if (media >= 7.0) {
    resultado.className = 'aprovado';
    resultado.textContent = nome + ' foi Aprovado! Média: ' + media.toFixed(2);

  } else if (media >= 4.0) {
    var falta = (10 - media).toFixed(2);
    resultado.className = 'exame';
    resultado.textContent = nome + ' está em Exame. Média: ' + media.toFixed(2) + ' — Faltam ' + falta + ' pontos para 10.';

  } else {
    resultado.className = 'reprovado';
    resultado.textContent = nome + ' foi Reprovado. Média: ' + media.toFixed(2);
  }
});