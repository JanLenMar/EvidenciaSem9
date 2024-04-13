var boton = document.getElementById('btn1');
boton.addEventListener('click',operacion);

/*Para poder seleccionar la operación, se utilizará un IF*/
function operacion(){
    var num1 = parseInt(document.getElementById('n1').value);
    var num2 = parseInt(document.getElementById('n2').value);
    var opcion =document.getElementById('operacion').value;
    var resultado; //Sólo declara la variable, porque hará varias operaciones.


    if(opcion==1){
        resultado = num1 + num2;
    }
    else if(opcion==2){
        resultado = num1 - num2;
    }
    else if(opcion==3){
        resultado = num1 * num2;
    }
    else{
        resultado = num1 / num2;
    }
    document.getElementById('resultado').innerHTML = resultado;
}
