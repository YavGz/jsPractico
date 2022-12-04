// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
// Nombre completo (nombre y apellido)
// Dinero real (dinero ahorrado menos deudas)

let name = "Javier"
let secondName = "Gutierrez"
let nickName = "Yav_Gz"
let age = 24
let email = "yaav.gs@gmail.com"
let older = true
let cashSave = 2000
let debts = 7500

let output = document.querySelector(".user")
let output2 = document.querySelector(".realCash")


function printName () {
  output.innerHTML = `Usuario: ${name} ${secondName}`
}

function printMoney() {
  output2.innerHTML = `Dinero real: ${cashSave-debts}`
}

printName();

printMoney();


// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const nam2 = "";
const lastname = "Castro Gallego";
const completeName = nam2 + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// crear variables para resultados
let div2 = document.querySelector(".ejercicio2")
let p = document.createElement("p")
let inputName = document.querySelector("#name")
let inputLast = document.querySelector("#lastname")
let inputNick = document.querySelector("#nickname")



// asignar resultado e imprimir
function print(a, b, c) {
  console.log(a.value)
  p.innerHTML = `Hola, me llamo ${a.value} ${b.value}, pero me gusta que me digan ${c.value}`
  div2.append(p)
}





// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
let tipoDeSuscripcion = "ExpertPlus";

switch (tipoDeSuscripcion) {
  case "Free":
      console.log("switch Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
      console.log("switch Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
      console.log("switch Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
      console.log("switch Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    break;
}

if (tipoDeSuscripcion === "Free") {
  console.log("If Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("If Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert"){
  console.log("If Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
  console.log("If Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

let typeSub = ["Free", "Basic", "Expert", "ExpertPlus"]
let mess = [
  "For Solo puedes tomar ciertos cursos",
  "For Puedes tomar casi todos los cursos de Platzi durante un mes",
  "For Puedes tomar casi todos los cursos de Platzi durante un año",
  "For Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]

for (let i = 0; i < typeSub.length; i++ ) {
  
  if (tipoDeSuscripcion === typeSub[i] ){
    console.log(mess[i])
  }
}

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let num = 0;

while(num < 5) {
  num++
  console.log( `El valor del numero es ${num}`); 
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let num2 = 10 
while (num2 >= 2) {
  num2--
  console.log(`El valor de num2 es ${num2}`);
}


// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

function validar(){
  let n = Number.parseInt(document.querySelector("#respuesta").value)

  if (n === 4 ) {
    alert("Correcto, SABES SUMAR!!! (o al menos contar con los dedos :3")
  } else {
    // n.value.innerHTML = ""
    alert("Ups, tal vez debas regresar a la primaria 😅")
  }
  
}


//  ----------- listas ----------


// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


// --- 2
let numbers = [1, 2 ,3 ,4 ,5 ,6 ,7]

function fisrtelem (array) {
  console.log(`El primer valor de tu array es ${array[0]}`)
}
fisrtelem(numbers);

// ----- 3 
function allEmens(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`La posicion ${i} de tu array tiene el valor de: ${array[i]}`)
  }
}
allEmens(numbers);

let juanito = {
  nombre: "Juanito",
  apellido: "Perez",
  edad: 17
}

function printObj(obj){
  console.log(`
  Nombre: ${obj.nombre}
  Apellido: ${obj.apellido}
  Edad: ${obj.edad}
  `);
}

printObj(juanito);

// Recrea el ejercisio de tipo de suscripciones usando solamente un if. 

const typeSubs = {
  free: "Solo pudes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos durante un mes",
  expert: "Puedes tomar casi todos los cursos durante un año",
  expertduo: "Tu y otra persona pueden tomar TODOS los cursos de Platzi durante un año"
}

function conseguirTypeSub(suscripcion) {
  if (typeSub[suscripcion]) {
    console.log(typeSub[suscripcion])
    return;
  }
  console.warn("Ese tipo de suscripcion no existe")
}