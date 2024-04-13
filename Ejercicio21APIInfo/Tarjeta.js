export class Tarjeta{
    col = 0; //Se abreviará con 'c'
    nombre = ''; //Se abreviará con 'n'
    url = ''; //Se abreviará con 'u'
    constructor(c,n,u){
        this.col = c;
        this.nombre = n ;
        this.url = u;
    }
    async mostrar(){
        const info = await getDetalle(this.url);
        let img = info[0];
        let id = info [1];
        let height = info [2];
        let weight = info [3];


        let habilidades = info [4];
        let abilities = '';
        habilidades.forEach(hab =>{
            abilities += hab.ability.name + ' ';
        });


        let tipos = info [5];
        let tipo = '';
        tipos.forEach(type =>{
            tipo += type.slot + ' ';
        });


        let estadisticas = info [6];
        let estadistica = '';
        estadisticas.forEach(stats =>{
            estadistica += stats.base_stat + ' ';
        });


        let card = '<div class = "col-md-'+this.col+' mb-3">';
        card += '<div class = "card">';
        card += '<img src = "'+img+'" class = "card-img-top p-2" height = "150">';
        card += '<div class="card-body">';
        card += '<h5 class="card-title text-center text-capitalize">';
        card += '<span class="badge text-bg-secondary">'+id+'</span> ';
        card += this.nombre+'</h5> ';
        card += '<h6>Altura: ' + (height/10) + 'm</h6>';
        card += '<h6>Peso: ' + (weight/10) + 'kg</h6>';
        card += '<h6>Habilidad: ' + abilities + '</h6>';
        card += '<h6>Tipos: ' + tipo + '</h6>';
        card += '<h6>Estadísticas: ' + estadistica + '</h6>';
        card += '</div> </div> </div>';


        return card;
    }
}


const getDetalle = async (liga) => {
    const peticion = await fetch(liga);
    let detalles = [];
    if (peticion.ok){
        const data = await peticion.json();


        //Ruta del API para obtener la información deseada
        detalles.push(data.sprites.other.dream_world.front_default);
        detalles.push(data.id);
        detalles.push(data.height);
        detalles.push(data.weight);
        detalles.push(data.abilities);
        detalles.push(data.types);
        detalles.push(data.stats);


        return detalles;
    }
}
