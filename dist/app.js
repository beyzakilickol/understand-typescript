"use strict";
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 4;
console.log(add(number1, number2));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
