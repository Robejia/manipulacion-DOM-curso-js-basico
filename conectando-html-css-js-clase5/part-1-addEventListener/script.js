
console.log(`hello, world`)

// de esta forma seleccionamos un selector del html en JS
// const [nombre del selector] = document.querySelector('[nombre del selector]');
const h1 = document.querySelector('h1');
const p = document.querySelector('.pclass');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnR = document.querySelector('#btnRestablecer');
const btnC = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#pResultado');
const select = document.querySelector('#tipoS')

console.log({
	h1,
	p,
	input1,
	input2,
	btnC,
	btnR,
	select,
}); 

//con .addEventListener hacemos que todo el codigo js se quede en el archivo js, para no tener que poner onClick en el html
// [selector].addEventListener('evento', [funcion]);
btnC.addEventListener('click', btnCalcular); 

btnR.addEventListener('click', btnBorrar);

function btnBorrar() {
	input1.value = "";
	input2.value = "";
	select.value = "vacio";
	pResultado.innerText = "Resultado: ";
}

function btnCalcular() {
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
