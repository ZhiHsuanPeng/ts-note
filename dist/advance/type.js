"use strict";
var Profession;
(function (Profession) {
    Profession[Profession["doctor"] = 0] = "doctor";
    Profession[Profession["nursers"] = 1] = "nursers";
    Profession[Profession["PT"] = 2] = "PT";
})(Profession || (Profession = {}));
const jeremy = {
    name: 'Jeremy',
    age: 25,
    profession: Profession.PT
};
