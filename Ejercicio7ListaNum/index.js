var div = document.querySelector('#res');

var fin = document.querySelector('#fin');
fin.addEventListener('keypress',function(event){

    if(event.charCode == 13){
        div.innerHTML = ';';
            //Primero limpiar el div
    div.innerHTML = '';
    //Para que haga la numeración
    for(var i=1; i<=fin.value; i++){
        div.innerHTML += i+' ';
    }
    }
});
