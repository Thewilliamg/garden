import {
    getAllOfficesCodeAndCity,
    getAllOfficesAndPhonesFromSpain,

} from "./module/offices.js"

import {
    getAllNameSurnamesAndEmailInCargeOfBossSeven,
    getBossesFullnameAndEmail,
    getAllEmployees,
    getEmployeesWithBoss,
    getEmployeesWithBosses

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
    clientsWhoReceivedTheirRequestLate

} from "./module/clients.js"
import {
    getRequestDeliveredInJanuary,
    getRejectRequestsByYear,
    getAllRequestEarlyTwoDays,
    getAllLateRequest,
    getAllStatus,
    getClientsRequestByYear
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
import { log } from "console"

//1
// console.log(await getAllOfficesCodeAndCity());
//2
// console.log(await getAllOfficesAndPhonesFromSpain());
//3
// console.log(await getAllNameSurnamesAndEmailInCargeOfBossSeven());
//4
// console.log(await getBossesFullnameAndEmail());
//5
// console.log(await getAllEmployees());
//6
// console.log(await getAllSpainClients());
//7
 
//8
// console.log(await getPaymentsByYear(2008));
//9
// console.log(await getAllLateRequest());
//10
// console.log(await getAllRequestEarlyTwoDays());
//11
//console.log(await getRejectRequestsByYear(2009));
//12
// console.log(await getRequestDeliveredInJanuary());
//13
//console.log(await getPaymentsByYearAndPaypal())
//14
// console.log(await getAllPaymentStatus())
//15
//console.log(await getProductsWithGammaOrnamentales())
//16
// console.log(await getAllClientsInMadrid());


//  -----------------MULTI-TABLA-------------------
//1
// console.log(await getClientsAndEmployeesNames());
//2
// console.log(await getClientsWhoMadePayment());
//3
// console.log(await getClientsWhoNotMadePayment());
//4
// console.log(await getClientsWhoMadePaymentsAndTheyCity());
//5
// console.log(await getClientsWhoDidntMadePaymentsAndTheyCity());
//6
// console.log(await getOfficeAddressOfClientsFromFuenlabrada());
//7
//console.log(await getClientsEmploy());
//8
// console.log(await getEmployeesWithBoss());
//9
// console.log(await getEmployeesWithBosses());
//10
// console.log(await clientsWhoReceivedTheirRequestLate());
//11
//console.log(await lisOfProductRangesPurchasedByClient());

// -----------MULTI-TABLA - COMPOSICION EXTERNA---------
//nos se usan
//  console.log(await getPaymentByClientCode(6));

//dañado
//console.log(await getClientsRequestByDate(2008));