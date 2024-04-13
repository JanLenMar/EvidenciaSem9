var btn = document.querySelector('#btn1');
btn.addEventListener('click', ()=>{
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    var inputs = '';
    
    for(var i=1; i<=cuantos; i++){
        inputs += '<div class="col-md-4 mt-3"><input type="number" placeholder="Número '+i+'" id="n'+i+'" class="form-control"></div>';
    }
    document.querySelector('#contenedor').innerHTML=inputs;
});

var btn = document.querySelector('#btn2');
btn.addEventListener('click', ()=>{
    var suma = 0;
    var promedio = 0;
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    for(var i=1; i<=cuantos; i++){
        suma += parseInt(document.querySelector('#n'+i).value);
    }
    promedio = suma/cuantos;
    alert('La suma es: '+suma+'\nEl promedio es: '+promedio);
});