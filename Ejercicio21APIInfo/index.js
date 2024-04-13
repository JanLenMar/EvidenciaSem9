import { Tarjeta } from "./Tarjeta.js";


const url = 'https://pokeapi.co/api/v2/pokemon/';
window.onload = async ()=> {
    await getPokemones();
}


const getPokemones = async () => {
    let tabla = '';
    const peticion = await fetch(url);


    if (peticion.ok){
        const data = await peticion.json();
        const pokemones = data.results;
        console.log(pokemones);
        pokemones.forEach(async (pok,i) =>{
            const pokecard = new Tarjeta(3,pok.name,pok.url);
            let card = await pokecard.mostrar();


            document.querySelector('#root').innerHTML += card;
        });


    }
}
