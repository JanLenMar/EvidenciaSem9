function validarForm(){
    let matricula = document.getElementById('InputMat').value;
    let nombre = document.getElementById('InputNom').value;
    let materia = document.getElementById('InputMateria').value;

    if (matricula == ""){
        alert('El compo Matrícula es requerido');
        return false;
    }
    //Para validar que es una matrícula que sólo incluye TI
    else if (!matricula.includes('TI')) {
        alert('La Matrícula no está registrada. Debe empezar con TI.');
        return false;
    }

    if (nombre == ""){
        alert('El compo Nombre es requerido');
        return false;
    }

    if (materia == ""){
        alert('El compo Materia es requerido');
        return false;
    }

    return true;

}

function leerDatos(){
    let lista;

    if (localStorage.getItem('lista') == null){
    lista = [];
    }
    else{
    lista = JSON.parse(localStorage.getItem('lista'));
    }

    var tabla = "";
    lista.forEach(function(elemento, indice){
        tabla += "<tr>";
        tabla += "<td>"+elemento.matricula+"</td>";
        tabla += "<td>"+elemento.nombre+"</td>";
        tabla += "<td>"+elemento.materia+"</td>";
        tabla += '<td><button onclick = "borrar ('+ indice +')" class = "btn btn-danger">Eliminar</button><td><button onclick = "editar ('+indice+')" class = "btn btn-warning">Editar</button>';
        tabla += "</tr>";
    });

    document.querySelector('#tablaDatos').innerHTML = tabla;
}

document.onload = leerDatos();

function Guardar(){
    if (validarForm() == true){
        let matricula = document.getElementById('InputMat').value;
        let nombre = document.getElementById('InputNom').value;
        let materia = document.getElementById('InputMateria').value;

        var lista;
        if (localStorage.getItem('lista') == null){
            lista = [];
        }
        else{
            lista = JSON.parse(localStorage.getItem('lista'));
        }

        lista.push({
            matricula: matricula,
            nombre: nombre,
            materia: materia
        });

        localStorage.setItem('lista', JSON.stringify(lista));
        
        leerDatos();

        document.getElementById('InputMat').value = "";
        document.getElementById('InputNom').value = "";
        document.getElementById('InputMateria').value = "";
    }
}


function borrar(indice){
    let lista;
    if (localStorage.getItem('lista') == null){
    lista = [];
    }
    else{
    lista = JSON.parse(localStorage.getItem('lista'));
    }

    lista.splice(indice, 1);
    localStorage.setItem('lista', JSON.stringify(lista));

    leerDatos();
}

function editar(indice){
    document.getElementById('btnGuardar').style.display = 'none';
    document.getElementById('btnActualizar').style.display = 'block';

    let lista;
    if (localStorage.getItem('lista') == null){
    lista = [];
    }
    else{
    lista = JSON.parse(localStorage.getItem('lista'));
    }

    document.getElementById('InputMat').value = lista[indice].matricula;
    document.getElementById('InputNom').value = lista[indice].nombre;
    document.getElementById('InputMateria').value = lista[indice].materia;

    document.querySelector('#btnActualizar').onclick = function(){
        if (validarForm() == true){
            lista[indice].matricula = document.getElementById('InputMat').value;
            lista[indice].nombre = document.getElementById('InputNom').value;
            lista[indice].materia = document.getElementById('InputMateria').value;

            localStorage.setItem('lista', JSON.stringify(lista));
            leerDatos();

            document.getElementById('InputMat').value = "";
            document.getElementById('InputNom').value = "";
            document.getElementById('InputMateria').value = "";

            document.getElementById('btnGuardar').style.display = 'block';
            document.getElementById('btnActualizar').style.display = 'none';
        }
    };
}