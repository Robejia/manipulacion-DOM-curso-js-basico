
console.log(`hello, world`)

// de esta forma seleccionamos un selector del html en JS
// const [nombre del selector] = document.querySelector('[nombre del selector]');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pclass = document.querySelector('.pclass');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
	h1,
	p,
	pclass,
	pid,
	input,
});

