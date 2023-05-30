
console.log(`hello, world`)

// de esta forma seleccionamos un selector del html en JS
// const [nombre del selector] = document.querySelector('[nombre del selector]');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// const pclass = document.querySelector('.pclass');
// const pid = document.querySelector('#pid');
const input = document.querySelector('input');

// con el .getsElementsBy ClassName ó Id se puede seleccionar un elemnto del html tambien
const pclass = document.getElementsByClassName('plcass');
const pid = document.getElementById('pid');

console.log(input.value);

console.log({
	h1,
	p,
	pclass,
	pid,
	input,
});

// con .innerHTML cambiamos el valor de una etiqueta de html en JS 
// [nombre del selector].innerHTML = '[nuevo valor]';
h1.innerHTML = 'chocozono <br> super traje';

// .innerText cambia el contenido pero como texto, no detecta si es codigo html
h1.innerText = 'chocozono <br> super traje';

// pedimos que nos muestre en consola el nombre de la clase
console.log(h1.getAttribute('class'));

// hacemos que tome un valor
h1.getAttribute('class');  
// le damos un valor
h1.setAttribute('class', 'verde');  

// con .setAttribute le podemos modificar a una etiqueta la propiedad ya sea la clase, id, etc
// [selector].classList.add('[class, id, etc]', '[nueva clase, id, etc]')
/*  h1.setAttribute('class', 'rojo');  */

// con [selector].classList.add('[nueva clase]') agregamos una nueva clase)
h1.classList.add('rojo');

// con [selector].classList.remove('[clase]') eliminamos una clase)
/* h1.classList.remove('verde');  */

// con [selector].classList.toggle('[clase]') eliminamos el atributo si ya existe, o agregamos si aun no existe
h1.classList.toggle('platzilg');  

// [selector].classList.contains('[clase]') devuelve true ó false dependiendo si existe el elemento 
console.log(h1.classList.contains('rojo'));

// modificamos el value directamente
input.value = "654";

// de esta forma creamos una etiqueta de html con JS y le asignamos valores para despues usar en el html
const img = document.createElement('img');
img.setAttribute('src' , 'https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-mar-carretera-naturaleza-pajaro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

// asignamos la etiqueta img creada con JS al parrafo con ID pid para que lo pege y muestre junto a el en el html y visualizarlo en la pagina
pid.append(img);
pid.appendChild(img);

// manipulacion del DOM = cambiar los valores del html con JS
pid.innerHTML = ' ';
pid.appendChild(img);
// se puede usar esta otra forma tambien, .replaceWith remplaza por el nuevo elemento
pid.replaceWith(img);

