import "./component/clock.js";
import {
    getAllOfficesCodeAndCity,
    getAllOfficesAndPhonesFromSpain,

} from "./module/offices.js"
import {
    getAllNameSurnamesAndEmailInCargeOfBossSeven,
    getBossesFullnameAndEmail,
    getAllEmployees,
    getEmployeesWithBoss,
    getEmployeesWithBosses,

} from "./module/employees.js"

import {
    getAllSpainClients,
    getAllClientsInMadrid,
    getClientsEmploy,
    getClientsAndEmployeesNames,
    getClientsWhoMadePayment,
    getClientsWhoNotMadePayment,
    getClientsWhoMadePaymentsAndTheyCity,
    getClientsWhoDidntMadePaymentsAndTheyCity,
    getOfficeAddressOfClientsFromFuenlabrada,
    clientsWhoReceivedTheirRequestLate,
    getClientsWithoutPayments,
    getClientsWithoutRequest,
    getClientsWithoutPaymentsAndRequest,
    getEmployeesWithoutOffices,
    getEmployeesWithoutClients,
    getEmployeesWithoutClientsAndTheirOffices,
    getEmployeesWithoutOfficeAndWithoutClients,
    getProductsWithoutRequest,
    getProductsWithoutRequestWithDescription,
    OfficesExcludingSalesEmpWithFruitPurchases,
    getClientRequestsWithoutPayments,
    getEmployeesWithoutClientsAndTheirBosses
} from "./module/clients.js"
import {
    getRequestDeliveredInJanuary,
    getRejectRequestsByYear,
    getAllRequestEarlyTwoDays,
    getAllLateRequest,
    getAllStatus,
    getClientsRequestByYear,
    getRequestByCodeClient
} from "./module/requests.js"

import {
    getPaymentsByYear,
    getAllPaymentStatus,
    getPaymentByClientCode,
    getPaymentsByYearAndPaypal
} from "./module/payments.js"

import {
    getProductsWithGammaOrnamentales
} from "./module/products.js"
import {
    lisOfProductRangesPurchasedByClient
} from "./module/request_details.js"

const queryAboutOneTable1 = document.querySelector("#queryAboutOneTable1");
queryAboutOneTable1.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable1.children
    if (!report__container.innerHTML) {
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable2 = document.querySelector("#queryAboutOneTable2");
queryAboutOneTable2.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable2.children
    if (!report__container.innerHTML) {
        let data = await getAllOfficesAndPhonesFromSpain();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        <p><b>Telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable3 = document.querySelector("#queryAboutOneTable3");
queryAboutOneTable3.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable3.children
    if (!report__container.innerHTML) {
        let data = await getAllNameSurnamesAndEmailInCargeOfBossSeven();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable4 = document.querySelector("#queryAboutOneTable4");
queryAboutOneTable4.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable4.children
    if (!report__container.innerHTML) {
        let data = await getBossesFullnameAndEmail();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>${val.puesto}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable5 = document.querySelector("#queryAboutOneTable5");
queryAboutOneTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable5.children
    if (!report__container.innerHTML) {
        let data = await getAllEmployees();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>${val.puesto}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable6 = document.querySelector("#queryAboutOneTable6");
queryAboutOneTable6.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable6.children
    if (!report__container.innerHTML) {
        let data = await getAllSpainClients();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable7 = document.querySelector("#queryAboutOneTable7");
queryAboutOneTable7.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable7.children
    if (!report__container.innerHTML) {
        let data = await getAllStatus();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Estado ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Status: </b>${val}</p>

                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable8 = document.querySelector("#queryAboutOneTable8");
queryAboutOneTable8.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable8.children
    if (!report__container.innerHTML) {
        let data = await getClientsRequestByYear();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val}</p>

                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable9 = document.querySelector("#queryAboutOneTable9");
queryAboutOneTable9.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable9.children
    if (!report__container.innerHTML) {
        let data = await getAllLateRequest();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha de entrega: </b>${val.Fecha_de_entrega}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable10 = document.querySelector("#queryAboutOneTable10");
queryAboutOneTable10.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable10.children
    if (!report__container.innerHTML) {
        let data = await getAllRequestEarlyTwoDays();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha esperada: </b>${val.Fecha_esperada}</p>
                        <p><b>Fecha de entrega: </b>${val.Fecha_de_entrega}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable11 = document.querySelector("#queryAboutOneTable11");
queryAboutOneTable11.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable11.children
    if (!report__container.innerHTML) {
        let data = await getRejectRequestsByYear();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha esperada: </b>${val.Fecha_esperada}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable12 = document.querySelector("#queryAboutOneTable12");
queryAboutOneTable12.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable12.children
    if (!report__container.innerHTML) {
        let data = await getRequestDeliveredInJanuary();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pedido ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del pedido: </b>${val.Codigo_del_pedido}</p>
                        <p><b>Codigo del cliente: </b>${val.Codigo_del_cliente}</p>
                        <p><b>Fecha de entrega: </b>${val.Fecha_de_entrega}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable13 = document.querySelector("#queryAboutOneTable13");
queryAboutOneTable13.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable13.children
    if (!report__container.innerHTML) {
        let data = await getPaymentsByYear();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pago  ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo del cliente: </b>${val.code_client}</p>
                        <p><b>Medio de pago: </b>${val.payment}</p>
                        <p><b>Total: </b>${val.total}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable14 = document.querySelector("#queryAboutOneTable14");
queryAboutOneTable14.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable14.children
    if (!report__container.innerHTML) {
        let data = await getAllPaymentStatus();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Pago  ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Medio de pago: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable15 = document.querySelector("#queryAboutOneTable15");
queryAboutOneTable15.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable15.children
    if (!report__container.innerHTML) {
        let data = await getProductsWithGammaOrnamentales();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Producto ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Precio de venta: </b>${val.price}</p>
                        <p><b>Stock: </b>${val.stock}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutOneTable16 = document.querySelector("#queryAboutOneTable16");
queryAboutOneTable16.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutOneTable16.children
    if (!report__container.innerHTML) {
        let data = await getAllClientsInMadrid();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Region: </b>${val.region}</p>
                        <p><b>Representate de ventas: </b>${val.representante_de_ventas}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable1.children
    if (!report__container.innerHTML) {
        let data = await getClientsAndEmployeesNames();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable2 = document.querySelector("#queryAboutTable2");
queryAboutTable2.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable2.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoMadePayment();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable3 = document.querySelector("#queryAboutTable3");
queryAboutTable3.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable3.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoNotMadePayment();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable4 = document.querySelector("#queryAboutTable4");
queryAboutTable4.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable4.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoMadePaymentsAndTheyCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable5 = document.querySelector("#queryAboutTable5");
queryAboutTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable5.children
    if (!report__container.innerHTML) {
        let data = await getClientsWhoDidntMadePaymentsAndTheyCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Apellidos del empleado: </b>${val.lastnames_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable6.children
    if (!report__container.innerHTML) {
        let data = await getOfficeAddressOfClientsFromFuenlabrada();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Direccion 1: </b>${val.address1}</p>
                        <p><b>Info adicional: </b>${val.address2}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable7 = document.querySelector("#queryAboutTable7");
queryAboutTable7.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable7.children
    if (!report__container.innerHTML) {
        let data = await getClientsEmploy();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable8 = document.querySelector("#queryAboutTable8");
queryAboutTable8.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable8.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithBoss();
        let plantilla = "";
        // console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Datos</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre los empleados: </b>${val.employees}</p>
                        <p><b>Nombre del jefe </b>${val.nameBoss}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable9 = document.querySelector("#queryAboutTable9");
queryAboutTable9.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable9.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithBosses();
        let plantilla = "";
        // console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Datos</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del empleado: </b>${val.NombreDelTrabajador}</p>
                        <p><b>Nombre del jefe: </b>${val.NombreDelJefe}</p>
                        <p><b>Jefe de mi jefe: </b>${val.jefeDelJefe}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable10 = document.querySelector("#queryAboutTable10");
queryAboutTable10.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable10.children
    if (!report__container.innerHTML) {
        let data = await clientsWhoReceivedTheirRequestLate();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Cliente ${val.client_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre del cliente: </b>${val.client_name}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutTable11 = document.querySelector("#queryAboutTable11");
queryAboutTable11.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable11.children
    if (!report__container.innerHTML) {
        let data = await lisOfProductRangesPurchasedByClient();
        let plantilla = "";
        // console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Gama: </b>${ val.gama } </p>
                    </div>
                </div>
            </div>
            `;
        });
        if (!data) {
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})

//Conexiones externas

const queryAboutExternalTable1 = document.querySelector("#queryAboutExternalTable1");
queryAboutExternalTable1.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable1.children
    if (!report__container.innerHTML) {
        let data = await getClientsWithoutPayments();
        let plantilla = "";
        // console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo del cliente: ${val.Codigo_cliente}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Cliente sin pagos: </b>${ val.Nombre_Cliente_sin_pagos} </p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutExternalTable2 = document.querySelector("#queryAboutExternalTable2");
queryAboutExternalTable2.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable2.children
    if (!report__container.innerHTML) {
        let data = await getClientsWithoutRequest();
        let plantilla = "";
        // console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo del cliente: ${val.Codigo}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Cliente sin pedidos: </b>${ val.Nombre_Cliente_sin_pedidos} </p>
                    </div>
                </div>
                </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})
const queryAboutExternalTable3 = document.querySelector("#queryAboutExternalTable3");
queryAboutExternalTable3.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable3.children
    if (!report__container.innerHTML) {
        let data = await getClientsWithoutPaymentsAndRequest();
        let plantilla = "";
        // console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo del cliente sin pago y sin pedido: ${val.Codigo}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Cliente sin pedidos: </b>${ val.Nombre_Cliente_sin_pedidos} </p>
                    </div>
                </div>
                </div>
            `;
        }); 
        report__container.innerHTML = plantilla;
    }
})
const queryAboutExternalTable4 = document.querySelector("#queryAboutExternalTable4");
queryAboutExternalTable4.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable4.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithoutOffices();
        console.log(data)
        let plantilla = "";
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Empleado sin oficina: ${val.name}</div>
                </div>
                </div>
            `;
        }); 
        if (!data) {
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})
const queryAboutExternalTable5 = document.querySelector("#queryAboutExternalTable5");
queryAboutExternalTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable5.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithoutClients();
        console.log(!data.lenght);
        let plantilla = "";
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>Codigo del cliente: ${val.code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Cliente sin pagos: </b>${ val.name} </p>
                    </div>
                </div>
            </div>
            `;
        });
        if (!data) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})

const queryAboutExternalTable6 = document.querySelector("#queryAboutExternalTable6");
queryAboutExternalTable6.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable6.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithoutClientsAndTheirOffices();
        let plantilla = "";
        let j = 0;
        data.forEach(val => {
            j += 1;
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${j}. sin clientes: ${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo empleado: </b>${val.code} </p>
                        <p><b>Codigo oficina: </b>${ val.office.city} </p>
                        <p><b>Lugar: </b>${ val.office.region}, ${ val.office.country} </p>
                        <p><b>Codigo Postal </b>${ val.office.postal_code} </p>
                        <p><b>Movil: </b>${ val.office.movil} </p>
                        <p><b>Id de Oficina: </b>${ val.id} </p>
                    </div>
                </div>
            </div>
            `;
        });
        if (!data) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})
const queryAboutExternalTable7 = document.querySelector("#queryAboutExternalTable7");
queryAboutExternalTable7.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable7.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithoutOfficeAndWithoutClients();
        let plantilla = "";
        let j = 0;
        data.forEach(val => {
            j += 1;
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Empleado ${j}: ${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck" style="color=red">
                        <p><b>Codigo empleado: </b>${val.code} </p>
                    </div>
                </div>
            </div>
            `;
        });
        if (!data) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})
const queryAboutExternalTable8 = document.querySelector("#queryAboutExternalTable8");
queryAboutExternalTable8.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable8.children
    if (!report__container.innerHTML) {
        let data = await getProductsWithoutRequest();
        let plantilla = "";
        let j = 0;
        data.forEach(val => {
            j += 1;
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>${j}. Producto codigo: ${val.product_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del producto: </b>${val.product_name} </p>
                        <p><b>Gama: </b>${ val.gama} </p>
                    </div>
                </div>
            </div>
            `;
        });
        console.log(!data.lenght) //esta bien este lenght
        if (!data.lenght) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})
const queryAboutExternalTable9 = document.querySelector("#queryAboutExternalTable9");
queryAboutExternalTable9.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable9.children
    if (!report__container.innerHTML) {
        let data = await getProductsWithoutRequestWithDescription();
        let plantilla = "";
        let j = 0;
        let descriptionText = "";
        data.forEach(val => {
            j += 1;
            //evitar la salida "unidefined"
            if (val.description===undefined){descriptionText="No tiene descripción"} else {descriptionText=val.description}
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>${j}. Producto código: ${val.product_code}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del producto: </b>${val.product_name} </p>
                        <p><b>Descripción: </b>${descriptionText}.</p>
                    </div>
                </div>
            </div>
            `;
        });
        if (!data.lenght) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})
const queryAboutExternalTable10 = document.querySelector("#queryAboutExternalTable10");
queryAboutExternalTable10.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable10.children
    if (!report__container.innerHTML) {
        let data = await OfficesExcludingSalesEmpWithFruitPurchases();
        let plantilla = "";
        let j = 0;
        let descriptionText = "";
        data.forEach(val => {
            j += 1;
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>${j}. Oficina: ${val}</div>
                </div>
            </div>
            `;
        });
        if (!data.lenght) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})
const queryAboutExternalTable11 = document.querySelector("#queryAboutExternalTable11");
queryAboutExternalTable11.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable11.children
    if (!report__container.innerHTML) {
        let data = await getClientRequestsWithoutPayments();
        let plantilla = "";
        let j = 0;
        data.forEach(val => {
            j += 1;
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div> Producto código: ${val.Codigo}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del cliente: </b>${val.Nombre} </p>
                    </div>
                </div>
            </div>
            `;
        });
        if ((!data)||(!!data.length)) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})

const queryAboutExternalTable12 = document.querySelector("#queryAboutExternalTable12");
queryAboutExternalTable12.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutExternalTable12.children
    if (!report__container.innerHTML) {
        let data = await getEmployeesWithoutClientsAndTheirBosses();
        let plantilla = "";
        let j = 0;
        data.forEach(val => {
            j += 1;
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div> ${j}. Nombre empleado: ${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre del jefe: </b>${val.boss_name} </p>
                    </div>
                </div>
            </div>
            `;
        });
        if ((!data)||(!!data.length)) { 
            report__container.innerHTML = plantilla;
        }
        else{
            report__container.innerHTML = `
                <div class="report__error">
                    <div>No se encuentra informacion relacionada</div>
                </div>`
        }
    }
})