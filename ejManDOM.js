const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('#calcBtn');
const clrbtn = document.querySelector('#clrBtn');
const p = document.querySelector('p')

btn.addEventListener('click', calc)
clrbtn.addEventListener('click', clear)

function calc(){
  let resultado;
  resultado = parseInt(num1.value, 10) + parseInt(num2.value, 10);
  p.innerText = `El resultado del calculo es ${resultado}`
  
  document.body.append(p)
}

function clear() {
  p.innerText = ''
  num1.value = ''
  num2.value = ''
}
