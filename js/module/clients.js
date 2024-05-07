import {
    getEmployByCode
} from "./employees.js"

import {
    getOfficesByCode,
    getSalesRepsWithFruitPurchases
} from "./offices.js"

import {
    getPaymentByClientCode
} from "./payments.js"
import {
    getRequestByCodeClient,
    getAllLateRequest,
    getRequestByCodeClientexample11
} from "./requests.js"

import { getRequestDetailsByProductCode } from "./request_details.js"

export const getNameByClientCode = async (code) => {
    let res = await fetch(`http://localhost:5508/clients?client_code=${code}`)
    let dataClient = await res.json()
    let [dir] = dataClient
    let { client_name } = dir
    return client_name
}
export const getClientByCode = async (code) => {
    let res = await fetch(`http://localhost:5508/clients?client_code=${code}`)
    let dataClient = await res.json()
    return dataClient
}
export const getClientByEmployeeCode = async (code) => {
    let res = await fetch(`http://localhost:5508/clients?code_employee_sales_manager=${code}`)
    let dataClient = await res.json()
    return dataClient
}

// 6. Devuelve un listado con el nombre de los todos los clientes españoles.
export const getAllSpainClients = async () => {
    let res = await fetch("http://localhost:5508/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.client_name
        })
    })
    return dataUpdate;



}
//16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.
export const getAllClientsInMadrid = async () => {
    let res = await fetch("http://localhost:5508/clients?region=Madrid")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if (val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30) {
            dataUpdate.push({
                nombre: val.client_name,
                region: val.region,
                representante_de_ventas: val.code_employee_sales_manager,
            })
        }
    })
    return dataUpdate;
}

// Consultas multitabla (Composición interna)
//1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
export const getClientsAndEmployeesNames = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let data = { ...clientsUpdate, ...employUpdate };
        let {
            code_employee_sales_manager,
            ...dataUpdate
        } = data;

        dataUpdate.name_employee = `${employ.name} `
        dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
        clients[i] = dataUpdate
    }
    return clients;
}
//2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getClientsWhoMadePayment = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client == clientsUpdate.client_code) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients

}
//3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getClientsWhoNotMadePayment = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client != clientsUpdate.client_code) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients

}
//4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con 
//la ciudad de la oficina a la que pertenece el representante.
export const getClientsWhoMadePaymentsAndTheyCity = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            ...officeUpdate
        } = office

        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            code_office,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client == clientsUpdate.client_code && officeUpdate.code_office == employUpdate.code_office) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients

}
//5.  Devuelve el nombre de los clientes que **no** hayan hecho pagos y 
//el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getClientsWhoDidntMadePaymentsAndTheyCity = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            ...officeUpdate
        } = office

        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            code_office,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client != clientsUpdate.client_code && officeUpdate.code_office == employUpdate.code_office) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients

}
//6.Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
export const getOfficeAddressOfClientsFromFuenlabrada = async () => {
    let res = await fetch(`http://localhost:5508/clients?city=Fuenlabrada`)
    let clients = await res.json()
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id: idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            city,
            ...officeUpdate
        } = office


        let data = { ...clientsUpdate, ...employUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate
        } = data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        dataUpdate.address1 = `${address1Office}`
        dataUpdate.address2 = `${address2Office}`
        clients[i] = dataUpdate
    }
    return clients;
}
// 7. Devuelve el nombre de los clientes y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.
export const getClientsEmploy = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id: idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            ...officeUpdate
        } = office

        let data = { ...clientsUpdate, ...employUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate
        } = data;
        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    return clients;
}
// 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
export const clientsWhoReceivedTheirRequestLate = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();
    let codes = await getAllLateRequest()
    let lateRequest = []
    let data = []
    for (let j = 0; j < codes.length; j++) {
        let {
            Codigo_del_pedido,
            Fecha_de_esperada,
            Fecha_de_entrega,
            ...requestData
        } = codes[j]
        let { Codigo_del_cliente } = codes[j]
        lateRequest.push({
            client_code: Codigo_del_cliente,
            client_name: await getNameByClientCode(Codigo_del_cliente)
        });
    }
    data = lateRequest.filter((value, index, self) =>
        self.findIndex(item => item.client_code === value.client_code) === index
    );
    return data;
}

//.1EXTERNA Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.
export const getClientsWithoutPayments = async () => {
    let res = await fetch("http://localhost:5504/payments");
    let dataPayments = await res.json();
    let dataClientsFromPayments = new Set();
    dataPayments.forEach( pay => {
            dataClientsFromPayments.add(pay.code_client);
    })
    dataClientsFromPayments = [...dataClientsFromPayments]
    //sacar lista de codigo de clientes que no estan en 'codigo de clientes que pagan'
    let clientsWhoDontPay = [];
    let res2 = await fetch("http://localhost:5508/clients");
    let dataClients = await res2.json();
    dataClients.forEach( code =>{
        if (!(dataClientsFromPayments.includes(code.client_code))){
            clientsWhoDontPay.push({
                Codigo_cliente: code.client_code,
                Nombre_Cliente_sin_pagos: code.client_name
        })
        }
    })
    console.log('Ejercicio 1 de Composicion externa')
    return clientsWhoDontPay
}

//2.EXTERNA- Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
export const getClientsWithoutRequest = async () => {
    let res = await fetch("http://localhost:5507/requests");
    let dataPayments = await res.json();
    let dataClientsFromPayments = new Set();
    dataPayments.forEach( req => {
            dataClientsFromPayments.add(req.code_client);
    })
    dataClientsFromPayments = [...dataClientsFromPayments]
    //sacar lista de codigo de clientes que no estan en 'codigo de clientes que pagan'
    let clientsWhoDontRequest = [];
    let res2 = await fetch("http://localhost:5508/clients");
    let dataClients = await res2.json();
    dataClients.forEach( code =>{
        //clientes que no han hecho pedido
        if (!(dataClientsFromPayments.includes(code.client_code))){
            clientsWhoDontRequest.push({
                Codigo: code.client_code,
                Nombre_Cliente_sin_pedidos: code.client_name
        })
        }
    })
    console.log('******************  Ejercicio 2 - de Composicion externa  ******************')
    return clientsWhoDontRequest
}

// 3.EXTERNA- Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
export const getClientsWithoutPaymentsAndRequest = async () => {

    const withoutPayments = await getClientsWithoutPayments();
    const withoutRequest= await getClientsWithoutRequest()
    let commonClients = withoutPayments.map(item1 => withoutRequest.find(item2 => item1.Codigo_cliente === item2.Codigo))
    commonClients = commonClients.filter(item => item !== undefined);
    return commonClients
}
//4.EXTERNA- Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
export const getEmployeesWithoutOffices = async () => {
    let res = await fetch("http://localhost:5501/employees");
    let employees = await res.json();
    let data = employees.map(item => ({'full-name':[item.name, item.lastname1, item.lastname2].join(" "), "office":item.code_office}))
    let dataset = data.filter(item => item.office === null);
    return dataset;
}

//5. EXTERNA- Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
export const getEmployeesWithoutClients = async () => {
    let res = await fetch("http://localhost:5501/employees")
    let employees = await res.json()
    let data = []
    for (let employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code)
        if (!clients.length) {
            data.push({
                code: employee.employee_code,
                name: employee.name
            })
        }
    }
    return data
}
//6. EXTERNA Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.
export const getEmployeesWithoutClientsAndTheirOffices = async () => {
    const res = await fetch("http://localhost:5501/employees");
    const employees = await res.json();
    const data = [];

    for (const emp of employees) {
        const clients = await getClientByEmployeeCode(emp.employee_code);
        const offices = await getOfficesByCode(emp.code_office);

        if (clients.length === 0 && offices && offices.length > 0) {
            const matchOffice = offices.find(office => office.code_office === emp.code_office);
            if (matchOffice) {
                data.push({
                    code: emp.employee_code,
                    name: emp.name,
                    office: matchOffice
                });
            }
        }
    }

    return data;
}
// 7. EXTERNA Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.
export const getEmployeesWithoutOfficeAndWithoutClients = async () => {
    let res = await fetch("http://localhost:5501/employees")
    let employees = await res.json()
    let datas = [];
    employees.forEach((emp) => {
        const clients = getClientByEmployeeCode(emp.employee_code)
        if (!clients.length && emp.code_office===null) {
            console.log(!clients.length && emp.code_office===null)
            datas.push({
                code: emp.employee_code,
                name: emp.name
            });
            console.log("exit")
        }
    })
    return datas
} // Nota, en este caso todos tienen asociado una oficina va a dar vacio

//8, EXTERNO Devuelve un listado de los productos que nunca han aparecido en un pedido.
export const getProductsWithoutRequest = async () => {
    let res = await fetch("http://localhost:5505/products")
    let products = await res.json()
    let data = []
    products.forEach( (p) =>{
        const details = getRequestDetailsByProductCode(p.code_product)
        if (!details.length) {
            console.log(details)
            data.push({
                product_code:p.code_product,
                product_name:p.name,
                gama:p.gama,       
            })
        }
    })
    let datao = data.sort((a,b)=>b.id-a.id)
    return datao
}

//9.EXTERNA - Devuelve un listado de los productos que nunca han aparecido en un pedido. 
//El resultado debe mostrar el nombre, la descripción y la imagen del producto.

export const getProductsWithoutRequestWithDescription = async () => {
    let res = await fetch("http://localhost:5505/products");
    let products = await res.json();
    let data = [];
    for (let product of products) {
        const details = getRequestDetailsByProductCode(product.code_product)
        if (!details.length) {
            data.push({
                product_code:product.code_product,
                code_number: product.code_product.match(/\d+/)[0],
                product_name:product.name,
                description:product.description,   
            })
        }
    }
    // organizar por numero de codigo de producto
    let datasort = data.sort((a,b) => a.code_number-b.code_number);
    let productosSinDescripcion = datasort.map(producto => {
        let { code_number, ...productoSinDescripcion } = producto;
        return productoSinDescripcion;
      });
    return productosSinDescripcion
}

//10.EXTERNA 0. Devuelve las oficinas donde **no trabajan** ninguno de los 
// empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de la gama `Frutales`.
export const OfficesExcludingSalesEmpWithFruitPurchases = async () => {
    let res = await fetch("http://localhost:5503/offices");
    let offices = await res.json();
    
    //funcion para encontrar todas las oficinas que estan asociadas con un cliente que comprara algo de gama Frutales
    const salesRepsWithFruitPurchases = await getSalesRepsWithFruitPurchases(offices);
    const officesWithoutSalesReps = offices.filter(office => {
        return !salesRepsWithFruitPurchases.some(salesEmp => salesEmp.office_code == office.code_office);
    });

    return officesWithoutSalesReps.map(office => office.code_office);
}

// 11.EXTERNA Devuelve un listado con los clientes que han realizado algún pedido 
// pero no han realizado ningún pago.
export const getClientRequestsWithoutPayments = async () => {
    let res = await fetch("http://localhost:5508/clients");
    let clients = await res.json();
    let data = [];
    for (let i = 0; i < clients.length; i++) {
      let client = clients[i];
      let payments = await getPaymentByClientCode(client.client_code);
      let requests = await getRequestByCodeClientexample11(client.client_code);
      if ((!payments.length) && (!!requests.length)) {
        data.push(client.client_code);
      }
    }
    return data;
  }
//No hay ningun dato en el json que cumpla estas condiciones





// 12. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.
export const getEmployeesWithoutClientsAndTheirBosses = async () => {
    let res = await fetch("http://localhost:5501/employees")
    let employees = await res.json();
    let data = []
    for (let employee of employees) {
        const clients = await getClientByEmployeeCode(employee.employee_code)
        if (employee.code_boss) {
            var name_boss = await getNameByEmployeeCode(employee.code_boss)
        } else if (employee.cpde_boss == null) {
            name_boss = "No tiene"
        }
        if (!clients.length) {
            data.push({
                name: employee.name,
                boss_name: name_boss
            })
        }
    }
    return data
}