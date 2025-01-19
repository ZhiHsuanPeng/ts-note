"use strict";
// functions as type 
function addTwo(a, b) {
    let value = a + b;
    return value.toString();
}
// this says that function1 will be a function 
// which accept two arguments (both should be number) and return number
let function1;
function1 = addTwo;
// functions and callback 
function addAndHandle(a, b, cb) {
    const result = a + b;
    cb(result);
}
console.log(addAndHandle(1, 2, (res) => {
    return res;
}));
