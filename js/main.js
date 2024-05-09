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


// --PRINCIPALES
//1
// console.log(await getAllOfficesCodeAndCity());
// 2
// console.log(await getAllOfficesAndPhonesFromSpain());
// 3
// console.log(await getAllNameSurnamesAndEmailInCargeOfBossSeven());
// 4
// console.log(await getBossesFullnameAndEmail());
// 5
// console.log(await getAllEmployees());
// 6
// console.log(await getAllSpainClients());
// 7
// console.log(await getAllStatus());
// 8
// console.log(await getPaymentsByYear(2008));
// 9
// console.log(await getAllLateRequest());
// 10
// console.log(await getAllRequestEarlyTwoDays());
// 11
// console.log(await getRejectRequestsByYear(2009));
// 12
// console.log(await getRequestDeliveredInJanuary());
// 13
// console.log(await getPaymentsByYearAndPaypal())
// 14
// console.log(await getAllPaymentStatus())
// 15
// console.log(await getProductsWithGammaOrnamentales())
// 16
// console.log(await getAllClientsInMadrid());


//  -----------------MULTI-TABLA-------------------
// 1
// console.log(await getClientsAndEmployeesNames());
// 2
// console.log(await getClientsWhoMadePayment());
// 3
// console.log(await getClientsWhoNotMadePayment());
// 4
// console.log(await getClientsWhoMadePaymentsAndTheyCity());
// 5
// console.log(await getClientsWhoDidntMadePaymentsAndTheyCity());
// 6
// console.log(await getOfficeAddressOfClientsFromFuenlabrada());
// 7
// console.log(await getClientsEmploy());
// 8
// console.log(await getEmployeesWithBoss());
// 9
// console.log(await getEmployeesWithBosses());
// 10
// console.log(await clientsWhoReceivedTheirRequestLate());
// 11
// console.log(await lisOfProductRangesPurchasedByClient());



// -----------MULTI-TABLA - COMPOSICION EXTERNA---------
// 1
// console.log(await getClientsWithoutPayments());
//2
// console.log(await getClientsWithoutRequest());
//3
// console.log(await getClientsWithoutPaymentsAndRequest());
//4
console.log(await getEmployeesWithoutOffices());
//5
// console.log(await getEmployeesWithoutClients());
//6
// console.log(await getEmployeesWithoutClientsAndTheirOffices());
//7
// console.log(await getEmployeesWithoutOfficeAndWithoutClients()); //va a dar vacio
//8
// console.log(await getProductsWithoutRequest());
//9
//console.log(await getProductsWithoutRequestWithDescription());
//10
//console.log(await OfficesExcludingSalesEmpWithFruitPurchases());
//11
// console.log(await getClientRequestsWithoutPayments());
//12
// console.log(await getEmployeesWithoutClientsAndTheirBosses());