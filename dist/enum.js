"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {}));
const employee = {
    name: "Jeremy",
    age: 27,
    role: Role.ADMIN
};
if (employee.role === Role.ADMIN) {
    console.log(`${employee.name} is ${employee.age}`);
}
