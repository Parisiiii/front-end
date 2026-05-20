var btn = document.getElementById('btnCalcular');

btn.addEventListener('click', function() {
  var bandeira = document.getElementById('bandeira').value;
  var valor    = Number(document.getElementById('valor').value);
  var parcelas = Number(document.getElementById('parcelas').value);

  var resultado = document.getElementById('resultado');
  resultado.style.display = 'block';

  var taxaBandeira;
  switch (bandeira) {
    case 'visa':
      taxaBandeira = 0.02;
      break;
    case 'master':
      taxaBandeira = 0.0185;
      break;
    case 'elo':
      taxaBandeira = 0.03;
      break;
  }

  var valorTaxa   = valor * taxaBandeira;
  var juros       = valor * (0.015 * parcelas);
  var taxaMensal  = 12.50 * parcelas;
  var valorTotal  = valor + valorTaxa + juros + taxaMensal;
  var valorParcela = valorTotal / parcelas;

  resultado.innerHTML =
    '<strong>Resumo da transação:</strong><br>' +
    'Valor da Taxa da Bandeira: R$ ' + valorTaxa.toFixed(2) + '<br>' +
    'Valor dos Juros: R$ ' + juros.toFixed(2) + '<br>' +
    'Taxa Mensal (12,50 x ' + parcelas + 'x): R$ ' + taxaMensal.toFixed(2) + '<br>' +
    'Valor Total: R$ ' + valorTotal.toFixed(2) + '<br>' +
    'Valor de cada Parcela: R$ ' + valorParcela.toFixed(2);
});