var btn = document.querySelector('#btnMostrar');
btn.addEventListener('click',function(){
    var tabla = document.querySelector('#tabla').value;
    calcularTabla(tabla);
});


function calcularTabla(t){
    var div = document.getElementById('res');
    var resultado = '';
    for (var i=1; i<=10; i++){
        resultado += t+' x '+i+' = '+(t*i)+'<br>';
    }
    div.innerHTML = resultado;
}
