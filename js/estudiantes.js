const app = async () => {
    const resp = await fetch('./data/estudiantes.json')
    const data = await resp.json()
    console.log(data)


    const tbody = document.querySelector("#tbody")
    data.map( i => {
        console.log(i)
        tbody.innerHTML +=`
        <tr>
        <th scope="row">${i.id}</th>
        <td>${i.nombre}</td>
        <td>${i.apellido_paterno}</td>
        <td>${i.apellido_materno}</td>
        <td>${i.telefono}</td>
        <td>${i.carrera.nombre}</td>
      </tr>
        `
    })
}
app();