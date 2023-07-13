const app = async () => {
    const resp = await fetch('./data/nomina.json')
    const data = await resp.json()
    console.log(data)


    const tbody = document.querySelector("#tbody")
    data.map( i => {
        console.log(i)
        tbody.innerHTML +=`
        <tr>
        <th scope="row">${i.id}</th>
        <td>${i.fecha_pago}</td>
        <td>${i.profesor.nombre}</td>
        <td>${i.dias_trabajados}</td>
        <td>${i.salario}</td>
        <td>${i.retenciones}</td>
        <td>${i.vales_despensa}</td>
      </tr>
        `
    })
}
app();