//Declarar la url de la API
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
//Llamar a una función para poder llamar a un determinado pokemon del url anterior
window.onload = async ()=> {
    await getPokemones(); //Se llama esta función, para que sea la primera funcióm que se llamará
}


const getPokemones = async () => {
    let tabla = '';
    //Métodos GET(por default), POST, PUT, DELETE
    const peticion = await fetch(url);
    //console.log(peticion);


    if (peticion.ok){
        const data = await peticion.json();
        const pokemones = data.results;
        console.log(pokemones);

        //Pero se tomaría en cuenta las posiciones del array
        pokemones.forEach(async (pok,i) =>{
            let img = await getImagen (pok.url);
            //consol.log(img);
            //'pok' hace referencia al array de 'pokemones', pero en una única pieza.
            tabla = '<tr><td>'+(i+1)+'</td><td>'+pok.name+'</td><td><img height="80" src="'+img+'"/></td></tr>'
            document.querySelector('#tabla').innerHTML += tabla;
        });
        //console.log(pokemones);


    }
}


const getImagen = async (liga) => {
    const peticion = await fetch(liga);
    if (peticion.ok){
        const data = await peticion.json();
        //consol.log(data.sprites.other.dream_world.front_default);
        return (data.sprites.other.dream_world.front_default);
    }
}
