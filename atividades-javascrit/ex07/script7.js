var btn = document.getElementById('btnAnalisar');

btn.addEventListener('click', function() {

  var numero = document.getElementById('numeroCartao').value.replace(/[\s.\-]/g, '');

  var statusEl   = document.getElementById('status');
  var resultado  = document.getElementById('resultado');
  resultado.style.display = 'block';

  if (!/^\d{13,16}$/.test(numero)) {
    statusEl.className = 'status invalido';
    statusEl.textContent = '✗ Número inválido! Digite entre 13 e 16 dígitos.';
    document.getElementById('bandeira').textContent = '-';
    document.getElementById('setor').textContent    = '-';
    document.getElementById('banco').textContent    = '-';
    return;
  }

  var valido = luhn(numero);

  if (valido) {
    statusEl.className = 'status valido';
    statusEl.textContent = '✓ Cartão Válido!';
  } else {
    statusEl.className = 'status invalido';
    statusEl.textContent = '✗ Cartão Inválido!';
  }

  document.getElementById('bandeira').textContent = getBandeira(numero);

  document.getElementById('setor').textContent = getSetor(numero[0]);

  document.getElementById('banco').textContent = getBanco(numero.substring(0, 6));
});

function luhn(numero) {
  var soma = 0;
  var invertido = numero.split('').reverse();

  for (var i = 0; i < invertido.length; i++) {
    var digito = Number(invertido[i]);

    if (i % 2 === 1) {
      digito = digito * 2;
      if (digito > 9) digito -= 9;
    }

    soma += digito;
  }

  return soma % 10 === 0;
}

function getBandeira(numero) {
  if (/^4/.test(numero))                          return 'Visa';
  if (/^5[1-5]/.test(numero))                    return 'Mastercard';
  if (/^3[47]/.test(numero))                      return 'American Express';
  if (/^6(?:011|5)/.test(numero))                 return 'Discover';
  if (/^(?:2131|1800|35)/.test(numero))           return 'JCB';
  if (/^(?:636368|438935|504175|451416)/.test(numero)) return 'Elo';
  return 'Desconhecida';
}

function getSetor(digito) {
  switch (digito) {
    case '1': case '2': return 'Companhias Aéreas';
    case '3':           return 'Viagens e Entretenimento';
    case '4': case '5': return 'Bancos e Financeiras';
    case '6':           return 'Merchandising e Bancos';
    case '7':           return 'Petróleo e Combustíveis';
    case '8':           return 'Telecomunicações';
    case '9':           return 'Governo e Outros';
    default:            return 'Desconhecido';
  }
}

function getBanco(bin) {
  if (/^4/.test(bin))      return 'Banco associado Visa';
  if (/^51|^52|^53|^54|^55/.test(bin)) return 'Banco associado Mastercard';
  if (/^34|^37/.test(bin)) return 'American Express';
  if (/^6011/.test(bin))   return 'Discover Bank';
  if (/^636/.test(bin))    return 'Banco do Brasil (Elo)';
  if (/^438/.test(bin))    return 'Bradesco (Elo)';
  if (/^504/.test(bin))    return 'Caixa Econômica (Elo)';
  return 'Emissor não identificado';
}