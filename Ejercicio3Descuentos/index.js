var boton = document.getElementById('btnCalcular');
boton.addEventListener('click',operacion);


function operacion(){
    var precio_inicial = parseInt(document.getElementById('precio').value);
    var opcion =document.getElementById('descuento').value;
    var precio_final;


    if(opcion==10){
        precio_final = precio_inicial-((precio_inicial*10)/100);
    }
    else if(opcion==15){
        precio_final = precio_inicial-((precio_inicial*15)/100);
    }
    else if(opcion==20){
        precio_final = precio_inicial-((precio_inicial*20)/100);
    }
    else if(opcion==30){
        precio_final = precio_inicial-((precio_inicial*30)/100);
    }
    else{
        precio_final = precio_inicial-((precio_inicial*50)/100);
    }
    document.getElementById('precio_final').innerHTML = precio_final;


}
