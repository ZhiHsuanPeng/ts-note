"use strict";
// In case of encountering run time error while accessing nestesd object 
// use optional chaining 
// it basically compile to a series of if check
var _a;
const anObject = {
    nest: {
        prop: 123
    }
};
console.log((_a = anObject === null || anObject === void 0 ? void 0 : anObject.nest) === null || _a === void 0 ? void 0 : _a.prop);
