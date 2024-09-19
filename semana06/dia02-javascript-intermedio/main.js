console.log("Hola JS");

const arregloVacio = [];
const listaDeNombres = [
  "Yesica",
  "Karen",
  "Efrain",
  "Will",
  "Carlos",
  "Federico",
];
const listaDeNumeros = [23, 34, 18, 190];
const listaDeValores = [1, 4, 5, "Alex", true, null, undefined];
console.log(arregloVacio);
console.log(listaDeNombres);
console.log(listaDeNumeros);
console.log(listaDeValores);
console.log(listaDeNombres[2]);
console.log(listaDeNombres[299]);
console.log(listaDeNombres[0]);
console.log(listaDeNombres[listaDeNombres.length - 1]);
listaDeNombres[0] = "Chui";
console.log(listaDeNombres);

const listaFrutas = ["manzana", "PERA", "platano", "mandarina", "fresa"];
listaFrutas.push("papaya");
console.log(listaFrutas);
/* const eliminadoFruta = listaFrutas.pop()
listaFrutas.pop()
console.log(listaFrutas)
console.log(eliminadoFruta) */

// listaFrutas.splice(2,2,'mango','sandia')
console.log(listaFrutas);
const duplicadoFrutas = listaFrutas.slice();

console.log(listaFrutas.at(-2));

console.log(listaFrutas.includes("pera"));
insertarFruta("uva");
insertarFruta("sandia");
insertarFruta("platano");
function insertarFruta(fruta) {
  if (listaFrutas.includes(fruta)) {
    console.log(`Fruta ${fruta} repetida`);
    console.log(listaFrutas);
  } else {
    listaFrutas.push(fruta);
    console.log(listaFrutas);
  }
}
console.log("////otro///");
console.log(listaFrutas.filter((fruta) => fruta.toUpperCase().includes("DA")));

const frutasNuevas = listaFrutas.map((fruta) => {
  if (fruta.includes("p")) {
    return "papita";
  }
  return fruta.toUpperCase();
});

console.log(frutasNuevas);
console.log(listaFrutas);

console.log(frutasNuevas.sort());

const frutasDuplicadas = [...listaFrutas];
console.log(frutasDuplicadas);

const sueldos = [1200, 1500, 1800, 2100, 2500, 3000, 3500];

console.log(sueldos);
const sumatoriaSueldos = sueldos.reduce((acu, sueldo) => acu + sueldo);
console.log(sumatoriaSueldos);

let estudiante = {
  nombre: "María",
  apellido:"Lopez",
  "padre de familia":"Juan Perez",
  edad: 10,
  grado: "5to de Primaria",
  promedio: 9.2,
  materias: [ "Matemáticas", "Ciencias", "Lenguaje", "Historia", "Educación Física", ],
  activo: true,
  asistencia: 95, // porcentaje de asistencia
  obtenerNombreCompleto: function () {
    return this.nombre+" "+this.apellido;
  },
  pasaDeGrado: function () {
    return this.promedio >= 6.0; // Consideramos que pasa con un promedio mayor o igual a 6.0
  },
  asistenciaSuficiente: function () {
    return this.asistencia >= 85; // Necesita un 85% o más de asistencia
  },
};
console.log(estudiante.obtenerNombreCompleto())
console.log('Mis materias son: '+estudiante.materias.join(', '))

console.log(estudiante["padre de familia"])
let miClave='nombre'
console.log(estudiante[miClave])

leerDato('apellido')

function leerDato(miSuperClave){
  console.log(estudiante[miSuperClave])
}

console.log(estudiante.materias[2])

const {nombre:nombre2,edad,apellido}=estudiante
console.log(nombre2)
console.log(apellido)
console.log(edad)

const misDatos=[3,10]
const [dato1,dato2]=misDatos

console.log(dato1+dato2)




function useState(datoInicial) {
  // Creamos un objeto para que se mantenga la referencia
  let estado = datoInicial;
  
  // Función para modificar el valor
  function setValor(nuevoValor) {
    estado = nuevoValor;
    console.log("Nuevo valor:", estado);
  }
  
  // Retornamos el valor actual y la función para modificarlo
  return [estado, setValor];
}

const [midato,setMidato] =useState(4)

console.log(midato)

setMidato(10)
console.log(midato)




console.log(Object.keys(estudiante))
console.log(Object.values(estudiante))
console.log(Object.entries(estudiante))

const super_hero ={
  'Batman':'Hola soy bruce',
  'Spiderman':'Hola soy Peter',
  'IronMan':'Hola soy Tony'
}
const Heroe='IronMannnn'
console.log(super_hero[Heroe]??'No eres un Heroe')

/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  // aquí tu magia
  const ovejasFiltradas = ovejas.filter((oveja)=>(oveja.color=='rojo')&&(oveja.name.toUpperCase().includes('N'))&&(oveja.name.toUpperCase().includes('A')))
  
  return ovejasFiltradas
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)


// para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña que  "calcula el minimo numero de monedas que debemos usar para dar el cambio de una compra en metalico".
// las monedas para cambio que puedes usar son estas:

// coins[0] = 1 centimo
// coins[1] = 2 centimo
// coins[2] = 5 centimo
// coins[3] = 10 centimo
// coins[4] = 20 centimo
// coins[5] = 50 centimo
// tenemos que crear una función que recibe el numero de centimos que hay que devolveral cliente y la funcion nos da  un array con la combinacion de monedas minimas que demos usar para conseguirlo


function vuelto(monto){
// de 50 
let cant=[0,0,0,0,0]; 
cant[5]= Math.trunc(monto/50);
monto = monto - (cant[5]*50);
cant[4]= Math.trunc(monto/20);
monto = monto - (cant[5]*20);
cant[3]= Math.trunc(monto/10);
monto = monto - (cant[5]*10);
cant[2]= Math.trunc(monto/5);

monto = monto - (cant[5]*5);
cant[1]= Math.trunc(monto/2); 
monto = monto - (cant[5]*2);
cant[1]= Math.trunc(monto/1); 



return cant; 
}

let valor=vuelto(87);
console.log("de 50 centimos :" +valor[5]);
console.log("de 20 centimos :" +valor[4]);
console.log("de 10 centimos :" +valor[3]);
console.log("de 5 centimos :" +valor[2]);
console.log("de 2 centimos :" +valor[1]);
console.log("de 21centimos :" +valor[0]);