var btn = document.getElementById('btnCalcular');

btn.addEventListener('click', function() {
  var precoPorPessoa = Number(document.getElementById('pacote').value);
  var pessoas        = Number(document.getElementById('pessoas').value);

  if (pessoas <= 0 || isNaN(pessoas)) return;

  var custoBruto = precoPorPessoa * pessoas;

  var taxaServico = custoBruto * 0.10;
  var totalComTaxa = custoBruto + taxaServico;

  var desconto = 0;
  var totalFinal = totalComTaxa;
  var linhaDesconto = document.getElementById('linhaDesconto');

  if (pessoas > 100) {
    desconto = totalComTaxa * 0.05;
    totalFinal = totalComTaxa - desconto;
    linhaDesconto.style.display = 'flex';
  } else {
    linhaDesconto.style.display = 'none';
  }

  document.getElementById('custoBruto').textContent   = 'R$ ' + custoBruto.toFixed(2);
  document.getElementById('taxaServico').textContent  = 'R$ ' + taxaServico.toFixed(2);
  document.getElementById('desconto').textContent     = '- R$ ' + desconto.toFixed(2);
  document.getElementById('totalFinal').textContent   = 'R$ ' + totalFinal.toFixed(2);

  document.getElementById('resultado').style.display = 'block';
});