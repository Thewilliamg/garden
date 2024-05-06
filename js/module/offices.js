import {
    getEmployeeByOfficeCode
} from "./employees.js";

import{
    getClientByEmployeeCode
} from "./clients.js"

import {
    getRequestByCodeClient
} from "./requests.js"

import {
    getRequestDetailsByRequest
} from "./request_details.js"
import {getProductByCode} from "./products.js"

//1. Devuelve un listado con el còdigo de oficina y la ciudad donde hay oficinas
export const getAllOfficesCodeAndCity = async () => {
    let res = await fetch("http://localhost:5503/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    });
    return dataUpdate;
}
// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
export const getAllOfficesAndPhonesFromSpain = async () => {
    let res = await fetch("http://localhost:5503/offices?country=España")//para igualar no se le pone nada despues del ? antes del =
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        })
    })
    return dataUpdate;
}

export const getOfficesByCode = async (code) => {
    let res = await fetch(`http://localhost:5503/offices?code_office=${code}`)
    let dataOffice = await res.json();
    return dataOffice
}

export const getSalesRepsWithFruitPurchases = async (offices) => {
    let salesRepsWithFruitPurchases = [];
    for (let office of offices) {
        const employees = await getEmployeeByOfficeCode(office.code_office);
        for (let employee of employees) {
            const clients = await getClientByEmployeeCode(employee.employee_code);
            for (let client of clients) {
                let requests = await getRequestByCodeClient(client.client_code);
                for (let request of requests) {
                    let details = await getRequestDetailsByRequest(request.code_request);
                    for (let detail of details) {
                        let product = await getProductByCode(detail.product_code);
                        if (product.gama === "Frutales") {
                            salesRepsWithFruitPurchases.push({ employee_code: employee.employee_code, office_code: office.code_office });
                        }
                    }
                }
            }
        }
    }
    return salesRepsWithFruitPurchases;
}