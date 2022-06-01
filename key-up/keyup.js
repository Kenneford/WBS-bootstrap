const input = document.getElementById('keyField');

input.addEventListener('keyup', logKey);

function logKey(e) {
  console.log(e.code);
}