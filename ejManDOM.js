const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('#calcBtn');
const clrbtn = document.querySelector('#clrBtn');
const p = document.querySelector('p')
const form = document.querySelector('form')

btn.addEventListener('click', calc)
clrbtn.addEventListener('click', clear)
// form.addEventListener('submit', events)

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

// AL reaccionar mediante iun eventListener por defecto nos manda el evento y sus propiedades, para examinalo podemos mandar la siguiente funcion
// function events(event) {
//   console.log({event});
//   event.preventDefault()
// }
