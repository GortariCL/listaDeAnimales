class Propietario{
    constructor(nombrePropietario, direccion, telefono){
        this._nombrePropietario = nombrePropietario;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    get getNombrePropietario(){
        return this._nombrePropietario;
    }
    get getDireccion(){
        return this._direccion;
    }
    get getTelefono(){
        return this._telefono;
    }
    datosPropietario(){
        return(`El nombre del propietario es: ${this._nombrePropietario}. El domicilio es: ${this._direccion}, y el número telefónico de contacto es: ${this._telefono}`);
    }
}

class Animal extends Propietario{
    constructor(nombrePropietario, direccion, telefono, tipo){
        super(nombrePropietario, direccion, telefono);
        this._tipo = tipo;
    }
    get getTipo(){
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal{
    constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombrePropietario, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get getNombreMascota(){
        return this._nombreMascota;
    }
    set setNombreMascota(nombreMascota){
        this._nombreMascota = nombreMascota;
    }
    get getEnfermedad(){
        return this._enfermedad;
    }
    set setEnfermedad(enfermedad){
        this._enfermedad = enfermedad;
    }
}

const registrarMascota = () => {
    let nombrePropietario = document.getElementById('propietario').value;
    let direccion = document.getElementById('direccion').value;
    let numeroTelefono = document.getElementById('telefono').value;
    let tipoMascota = document.getElementById('tipo').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let enfermedad = document.getElementById('enfermedad').value;

    if(tipoMascota == "perro"){
        let perro = new Mascota(nombrePropietario, direccion, numeroTelefono, tipoMascota, nombreMascota, enfermedad);
        return perro;
    }else if(tipoMascota == "gato"){
        let gato = new Mascota(nombrePropietario, direccion, numeroTelefono, tipoMascota, nombreMascota, enfermedad);
        return gato;
    }else{
        let conejo = new Mascota(nombrePropietario, direccion, numeroTelefono, tipoMascota, nombreMascota, enfermedad);
        return conejo;
    }
    
}

let submit = document.querySelector('form');

const observando = (e) => {
    e.preventDefault();   
    const mascotaData = registrarMascota();
    const nombreMascota = mascotaData.getNombreMascota;
    const enfermedad = mascotaData.getEnfermedad; 
    const resultadoUl = document.querySelector('#resultado ul');
    const li = document.createElement('li');
    const li_2 = document.createElement('li');

    if(mascotaData.getNombrePropietario !== "" && mascotaData.getNombreMascota !== "" && mascotaData.getTelefono && 
        (/^\d{9}$/.test(mascotaData.getTelefono)) && mascotaData.enfermedad !== ""){     

        resultadoUl.innerHTML = "";  
        li.innerHTML = mascotaData.datosPropietario();
        resultadoUl.appendChild(li);
        li_2.innerHTML = `${mascotaData.getTipo}, mientras que el nombre de la mascota es: ${nombreMascota} y la enfermedad es: ${enfermedad}`;
        resultadoUl.appendChild(li_2);

        submit.reset();
    }else{ 
        alert('Debe llenar todos los campos y Numero telefonico debe ser solo números');
        resultadoUl.innerHTML = "";
    }
}
submit.addEventListener('submit', observando);