//DOM
//LISTA DE TAREAS

//ESTRUCTURA - CLASE TAREA 
class Tarea {
    constructor(id ,text, done = false) {
        this.id = id;
        this.text = text;
        this.done = done;
    }
}
/* let tarea = new Tarea(""); */

//ARREGLO - suesta BD
let tareas = JSON.parse(localStorage.getItem("tareas")) || []; //localstorage

//Contenedor de tareas
let contenedorTarjetas = document.getElementById('contenedor-tarjetas');


//FUNCIONES - crud

//CREAR
const agregarTarea = (event) =>{
    //detener el submit
    event.preventDefault();

    //capturar el valor del input del form 
    let tarea = document.querySelector("#textTarea").value;

    //validaciones
    if (tarea.length > 5 ){

        //enviar el array - BD como un objeto
       tareas.push(new Tarea tarea);

        //Enviar al localstorage
        localStorage.setItem("tareas", JSON.stringify(tareas));

        //limpiar el input 
        document.querySelector("#textTarea").value = "";

        //imprimir las cards
        ListarTareas();
    }
}

 //mostrar tarea -READ 
 const ListarTareas = () => {

    //iterar el arreglo tareas 
    tareas.map((item) => {

        //crear la tarjeta de la tarea

        let columna = document.createElement("div");
        columna.classList ="col-12", "mb-2";

    let card = `<div class="card">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <span class="text-decoration-line-through">${item.text}</span>
                        <button class="btn btn-danger btn-sm" onclick=" EliminarTarea(${item.id})">X</button>
                    </div>
                </div>
                `;

        columna.innerHTML = card;
        contenedorTarjetas.appendChild(columna);    
    });
 }

 //Funcion de eliminar tarea 
 const EliminarTarea = (id) => {
   let index = tareas.findIndex((item) =>{
       return item.id == id;
 });
 //eliminar tarea 
 tareas.splice(index, 1);

 //imprimir las tareas
 ListarTareas();
 }
//funcion marcar tarea
const MarcarTarea = (id => {})

 ListarTareas();
 


