import {Persona} from './Persona.js'


import { Combo } from './Combo.js';


import { Boton } from './Boton.js';


const benny = new Persona('Benito','Juárez',68,1.80);
const porfi = new Persona('Porfirio','Días',82,1.78);
console.log(benny.saludar());
console.log(benny.imc());
console.log(porfi.saludar());
console.log(porfi.imc());




//const colores = new Combo('cmbColores','colores','text-danger',['azul','rojo','morado']);
//document.getElementById('div1').innerHTML = colores.mostrar();


let btn = document.querySelector('#btn1');
btn.addEventListener('click',()=>{
    let valores = document.querySelector('#valores').value;
    let arrayValores = valores.split(',');
    const colores = new Combo('cmbColores','colores','text-danger',arrayValores);
    document.getElementById('div1').innerHTML += colores.mostrar();
});


const btn2 = new Boton('Eliminar','danger','btn2','btnEliminar');
const btn3 = new Boton('Guardar','success','btn3','btnGuardar');
var div2 = document.querySelector('#div2');
div2.innerHTML = btn2.mostrar() + btn3.mostrar();
