const app = async () => {
    const resp = await fetch('./data/carreras.json')
    const data = await resp.json()
    console.log(data)


    const tbody = document.querySelector("#tbody")
    data.map( i => {
        console.log(i)
        tbody.innerHTML +=`
        <tr>
        <th scope="row">${i.id}</th>
        <td>${i.carrera}</td>
        <td>${i.area}</td>
        <td>${i.descripcion}</td>
        <td>${i.habilidades.join(", ")}</td>
        <td>${i.duracion}</td>
        <td>${i.titulación}</td>
      </tr>
        `
    })
}
app();