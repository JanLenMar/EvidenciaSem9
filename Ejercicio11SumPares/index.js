var btn = document.getElementById('btn1');
btn.addEventListener('click',function(){
    var num = document.querySelector('#num').value;
    //Se inicializan las variables en cero, para ir añadiendo la sumatoria//
    var sumaPar = 0;
    var sumaImpar = 0;
    var sumaMul = 0;
    //Se apoya de 3 variables más para realizar las operaciones//
    for (var i=50; i<=num; i++){
        if (i % 2 ==0){
            sumaPar = sumaPar + i;
            //Esto también se puede reescribir como: sumaPar += i;
        }
        else {
            sumaImpar += i;
        }
        if (i % 5 == 0){
            sumaMul += i;
        }
    }


    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');


    div1.innerHTML = "Suma de pares = " + sumaPar;
    div2.innerHTML = "Suma de impares = " + sumaImpar;
    div3.innerHTML = "Suma de múltiplos de 5 = " + sumaMul;


    //Reiniciar los colores.


    div1.style.color = 'black';
    div2.style.color = 'black';
    div3.style.color = 'black';


    //Para saber cuál de las sumatorias es la mayor y cuál es la menor
    var numeros = [sumaPar,sumaImpar,sumaMul];
    var mayor;
    var medio;
    var menor;
    if(sumaPar > sumaImpar){
        mayor = sumaPar;
        div1.style.color = 'green';
        if (mayor < sumaMul){
            mayor = sumaMul;
            div3.style.color = 'green';
        }
        else{
            div2.style.color = 'green';
        }
    }
    else{
        mayor = sumaImpar;
        div2.style.color = 'green';
    }
});