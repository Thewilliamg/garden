import fs from 'node:fs';
fs.readFile(import.meta.dirname+"/db/producto.json","utf8",(err,data)=> {  //fs manipulacion de archivos, en este caso el json
    //let json = JSON.parse(data);
    let json = JSON.parse(data)
    //let [producto1] = json.productos
    let [producto1] = json.productos
    //let {descripcion:des, nombre="No existe el nombre"}= producto1
    let gama = 'producto1
    console.log(gama);
})

let contar = (opc=0,condicion =100) => {
    console.log(opc);
    let res(condicion>opc) ? contar(opc+1) :opc;
}