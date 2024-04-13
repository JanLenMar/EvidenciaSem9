var boton = document.getElementById('btnCalcular');
boton.addEventListener('click',calcular);




function calcular(){
    var cal1 = parseInt(document.getElementById('cal_1').value);
    var cal2 = parseInt(document.getElementById('cal_2').value);
    var cal3 = parseInt(document.getElementById('cal_3').value);
    var cal4 = parseInt(document.getElementById('cal_4').value);
    var prom_final = (((cal1+cal2+cal3)/3)+cal4)/2;
    document.getElementById('prom_final').innerHTML = 'El promedio es: ' + prom_final;


    if(prom_final > 6){
        document.getElementById('prom_final').classList.remove('alert-danger');
        document.getElementById('prom_final').classList.add('alert-success');
    }
    else{
        document.getElementById('prom_final').classList.add('alert-danger');
        document.getElementById('prom_final').classList.remove('alert-success');
    }
}




function eliminarClases(){
    document.getElementById('prom_final').classList.remove('bg-dark');
}

