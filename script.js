//Informacion de fechas
const fechaNumero = document.getElementById('fechaNumero');
const fechaTexto = document.getElementById('fechaTexto');
const fechaMM = document.getElementById('fechaMM');
const fechaYY = document.getElementById('fechaYY');

//Contenedor de Tareas
const contenedorTareas = document.getElementById("contenedorDeTareas");

//Funcion para set de fechas
const setFecha = () => {
    const fecha = new Date();
    fechaNumero.textContent = fecha.toLocaleString("es",{ day: 'numeric' });
    fechaTexto.textContent = fecha.toLocaleString("es",{ weekday: 'long' });
    fechaMM.textContent = fecha.toLocaleString("es",{ month: 'short' });
    fechaYY.textContent = fecha.toLocaleString("es",{ year: 'numeric' });
};


//Funcion para agregar tarea
const agregaNuevaTarea = event => {
    event.preventDefault();
    const {value} = event.target.textoTarea;
    if (!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add('tarea', 'bordeRedondeado');
    tarea.addEventListener('click', cambiarEstadoTarea)
    tarea.textContent=value;
    contenedorTareas.prepend(tarea);
    event.target.reset();
};


//Funcion para cambiar estado de Tareas
const cambiarEstadoTarea = event => {
    event.target.classList.toggle('done');
};

//Funcion para ordenar
const ordenar = () =>{
    const tareasHechas = [];
    const tareasPorHacer = [];
    contenedorTareas.childNodes.forEach (el => {
        el.classList.contains('done') ? tareasHechas.push(el) : tareasPorHacer.push(el)
    })
    return[...tareasPorHacer, ...tareasHechas];
}

const ordenarTareas = () => {
    ordenar().forEach(el => contenedorTareas.appendChild(el))
}


setFecha();


