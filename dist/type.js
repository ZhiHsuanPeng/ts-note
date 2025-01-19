"use strict";
// Custom type 
var EmployeeProfession;
(function (EmployeeProfession) {
    EmployeeProfession[EmployeeProfession["PT"] = 0] = "PT";
    EmployeeProfession[EmployeeProfession["OT"] = 1] = "OT";
    EmployeeProfession[EmployeeProfession["ST"] = 2] = "ST";
})(EmployeeProfession || (EmployeeProfession = {}));
const medical_staff = {
    name: 'jeremy',
    age: 27,
    profession: EmployeeProfession.PT
};
