
console.log(`hello, world`)

// de esta forma seleccionamos un selector del html en JS
// const [nombre del selector] = document.querySelector('[nombre del selector]');
const h1 = document.querySelector('h1');
const p = document.getElementsByClassName('pclass');
const input1 = document.querySelector('#calculo1');
const input2 = document.getElementById('calculo2');
const btnR = document.getElementById('btnRestablecer');
const btn = document.getElementById('btnCalcular');
const pResultado = document.getElementById('pResultado');
const select = document.getElementById('tipoS')

console.log({
	h1,
	p,
	input1,
	input2,
	btn,
	btnR,
	select,
}); 

/* calculadora funcion basica
function btnOnClick() {
	// console.log('click del btn');
	// console.log(Number(input1.value) + Number(input2.value));

	let sumaResultado = Number(input1.value) + Number(input2.value);
	pResultado.innerText = "Resultado: " + sumaResultado;
};  */

function btnBorrar() {
	input1.value = "";
	input2.value = "";
	select.value = "vacio";
	pResultado.innerText = "Resultado: ";
}

function btnOnClick() {
var num1 = Number(input1.value);
var num2 = Number(input2.value);
var tipo = select.value;
var resultado = 0;

console.log(num1, num2, tipo, resultado);

function suma(a, b) {
	resultado = a + b;
  }
  
function resta(a, b) {
	resultado = a - b;
  }
  
function division(a, b) {
	resultado = a / b;
  }
  
function multiplicacion(a, b) {
	resultado = a * b;
  }
  
  switch (tipo){
	case "sumar":
		suma(num1,num2)
		break;

	case "restar":
		resta(num1,num2)
		break;

	case "dividir":
		division(num1,num2)
		break;

	case "multiplicar":
		multiplicacion(num1,num2)
		break;

	default: resultado = "seleccione un operador";
  }

  pResultado.innerText = "Resultado: " + resultado;
}
