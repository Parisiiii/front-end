var btnAdicionar = document.getElementById('btnAdicionar');
var inputNome    = document.getElementById('inputNome');
var lista        = document.getElementById('lista');

btnAdicionar.addEventListener('click', function() {
  var nome = inputNome.value.trim();

  if (nome === '') return;

  adicionarConvidado(nome);
  inputNome.value = '';
});

inputNome.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') btnAdicionar.click();
});

function adicionarConvidado(nome) {
  var li = document.createElement('li');

  var spanNome = document.createElement('span');
  spanNome.textContent = nome;
  spanNome.className = 'nome';

  var divAcoes = document.createElement('div');
  divAcoes.className = 'acoes';

  var btnConcluir = document.createElement('button');
  btnConcluir.textContent = 'Concluir';
  btnConcluir.className = 'btn-concluir';
  btnConcluir.addEventListener('click', function() {
    spanNome.classList.toggle('riscado');
  });

  var btnEditar = document.createElement('button');
  btnEditar.textContent = 'Editar';
  btnEditar.className = 'btn-editar';
  btnEditar.addEventListener('click', function() {
    var novoNome = prompt('Digite o novo nome:', spanNome.textContent);
    if (novoNome !== null && novoNome.trim() !== '') {
      spanNome.textContent = novoNome.trim();
    }
  });

  var btnExcluir = document.createElement('button');
  btnExcluir.textContent = 'Excluir';
  btnExcluir.className = 'btn-excluir';
  btnExcluir.addEventListener('click', function() {
    lista.removeChild(li);
  });

  divAcoes.appendChild(btnConcluir);
  divAcoes.appendChild(btnEditar);
  divAcoes.appendChild(btnExcluir);

  li.appendChild(spanNome);
  li.appendChild(divAcoes);

  lista.appendChild(li);
}