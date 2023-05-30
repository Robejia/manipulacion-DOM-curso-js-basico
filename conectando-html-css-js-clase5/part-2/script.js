
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
const form = document.querySelector('#form')

console.log({
	h1,
	p,
	input1,
	input2,
	btnC,
	btnR,
	select,
	form,
}); 

//forma 1 para evitar que la etiqueta form recarge la pagina con el evento submit
form.addEventListener('submit', btnOnClick);

function btnOnClick(event){
	console.log(event);
	//con .preventDefault() cancelamos el evento submit y no se recargara la pagina como en un formulario
	event.preventDefault();
	const sumaInouts = input1.value + input2.value;
	pResultado.innerHTML = "Resultado: " + sumaInouts;
}

/*
// forma 2 para evitar que la etiqueta form recarge la pagina con el evento submit
//al boton calcular en html se le agrego en la etiqueta el type="button" para que ya no sea tipo submit por default al estar en un form
btnC.addEventListener('click', btnOnClick);

function btnOnClick(){
	const sumaInouts = input1.value + input2.value;
	pResultado.innerHTML = "Resultado: " + sumaInouts;
}
*/