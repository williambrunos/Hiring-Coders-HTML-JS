"use strict";
function getUser() {
    return {
        name: "William",
        lastName: "Sales",
        email: "whatever@whatever.com",
    };
}
const user = getUser();
const address = user.address;
if (address != undefined) {
    console.log(`Name: ${user.name} \n
            Last Name: ${user.lastName} \n
            E-mail: ${user.email} \n
            Address: ${user.address}`);
}
else {
    console.log(`Name: ${user.name} \n
            Last Name: ${user.lastName} \n
            E-mail: ${user.email} \n`);
}
