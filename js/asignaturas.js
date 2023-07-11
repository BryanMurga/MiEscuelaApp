function obtenerDatos(){
    fetch('/data/asignaturas.json')
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
                <td>${valor.nombre}</td>
                <td>${valor.codigo}</td>
                <td>${valor.creditos}</td>
                <td>${valor.seriacion}</td>
                <td>${valor.cuatrimestre}</td>
                <td>${valor.carrera.nombre}</td>
            <tr>
        `
    }

}

obtenerDatos()
pintarTabla(datos)