//1. devuelve un listsado con el codigo de oficina y la ciudad donde hay oficinas
export const getAllOfficesCodeAndCity = async () =>{
    let res =await fetch("http:localhost:5504/offices")
    let data =await res.json();
    let dataUpdate = []
    data.foreach(val => {
        dataUpdate.push(
        {
            codigo: val.code_office,
            ciudad: val.city
        }
    )})
    return typeof(dataUpdate);
}

//2. Devuelve un listado con la ciudad y el telefono de las oficinas de España
export const getAllOfficesfromSpCityAndMovil = async() => {
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.foreach(val => {
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        });
    });
    return (dataUpdate);
}