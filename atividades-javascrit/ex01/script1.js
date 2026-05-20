function validar() {
  var cpf = document.getElementById('cpfInput').value.replace(/\D/g, '');
  var resultado = document.getElementById('resultado');
  resultado.style.display = 'block';

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    mostrar(false);
    return;
  }

  var soma = 0;
  for (var i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }
  var resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== parseInt(cpf[9])) { mostrar(false); return; }

  soma = 0;
  for (var i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10) resto = 0;
  if (resto !== parseInt(cpf[10])) { mostrar(false); return; }

  mostrar(true);
}

function mostrar(valido) {
  var el = document.getElementById('resultado');
  el.className = valido ? 'valido' : 'invalido';
  el.textContent = valido ? '✓ CPF Válido!' : '✗ CPF Inválido!';
}

document.getElementById('cpfInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') validar();
});