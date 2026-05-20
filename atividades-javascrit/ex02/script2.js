var celsius = document.getElementById('celsius');
var fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('input', function() {
  var c = parseFloat(celsius.value);

  if (celsius.value === '') {
    fahrenheit.value = '';
    return;
  }

  fahrenheit.value = ((c * 9/5) + 32).toFixed(2);
});

fahrenheit.addEventListener('input', function() {
  var f = parseFloat(fahrenheit.value);

  if (fahrenheit.value === '') {
    celsius.value = '';
    return;
  }

  celsius.value = ((f - 32) * 5/9).toFixed(2);
});