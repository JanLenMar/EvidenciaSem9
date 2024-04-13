var div = document.querySelector('#res');


var factorial = document.querySelector('#factorial');


factorial.addEventListener('keypress', function(event){
    var fac = 1;
    if(event.charCode == 13){
        //div.innerHTML = ';';
        //div.innerHTML = '';
        for(var i=1; i<=factorial.value; i++){
            fac = fac * i;
        }
        div.innerHTML = fac;
    }
});
