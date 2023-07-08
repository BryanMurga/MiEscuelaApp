function obtenerDatos(){
    fetch('/data/grupos.json')
    .then( res => res.json() )
    .then( datos => {
        pintarTabla(datos)
    });
}

function pintarTabla(datos){
    contenido.innerHTML = "";
    for (let valor of datos){
        contenido.innerHTML += `
            <tr>
                <td>${valor.id}</td>
                <td>${valor.cuatrimestre}</td>
                <td>${valor.grupo}</td>
                <td>${valor.generacion}</td>
                <td>${valor.carrera.nombre}</td>
                <td>${valor.jefe_grupo.nombre}</td>
                <td>${valor.profesor_tutor.nombre}</td>
            <tr>
        `
    }

}

obtenerDatos()
pintarTabla(datos)