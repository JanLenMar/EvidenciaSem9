export class Persona{
    //Esto es una clase
    //Las clases tienen atributos y métodos


    ///ATRIBITOS Y MÉTODOS
    nombre = '';
    apellidos = '';
    peso = 0;
    altura = 0;
    constructor(nom,ape,pe,al){
        //Este método inicializará los atributos de la clase, o darles un valor.
        //Para inicializar las variables, se deben volver a definir en el paréntesis del método
        //Para hacer referencia a los atributos de la clase actual:
        this.nombre = nom;
        this.apellidos = ape;
        this.peso = pe;
        this.altura = al;
    }


    saludar() {
        return 'Hola, soy ' + this.nombre+' '+this.apellidos;
    }
    imc(){
        return(this.peso/(this.altura*this.altura));
    }
}
