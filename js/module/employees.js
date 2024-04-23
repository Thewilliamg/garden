//3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un còdigo
//
export const getAllEmployeesFromBossAndCodeSeven = async () =>{
    let res =await fetch("http://localhost:5501/employee?code_boss=7");
    let data = await res.json();
    let dataUpdate=[];
    data.forEach(val => {
        dataUpdate.push({
            nombre:val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email: `${val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)}` //aqui va la expresion regular
        });
    });
    return dataUpdate;
}

//4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa
export const getBossFullNameAndEmail = async() =>{
    let res =await fetch("http://localhost:5501/employee")
    let data = await res.json();
    let dataUpdate = {};
    data.forEach(val=>{
        if(val.code_boss==null){ 
        dataUpdate.nombre = val.name 
        dataUpdate.apellidos = `${val.lastname1} ${val.lastname2}`
        }
    })
    return dataUpdate
}



//5. Devuelve un listado con el nombre,apellidos y puesto de empleados que no son representates de ventas
export const getAll = async() =>{
    let res = await fetch("http://localhost:5501/employee?position_ne=Representante%20Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val=>{
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            puesto: val.position
        })
    });
    return dataUpdate;
}