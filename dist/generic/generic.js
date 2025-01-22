"use strict";
// Array object is actually a generics
// <> is the generics part
const example = [];
// inside <> 
// if you use certain types 
// you will get ts support after promise resolve
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Result');
    }, 2000);
});
promise.then((data) => {
    data.charCodeAt(0);
});
// constructing function like this allows you to be flexible with the type of parameter
function identify(value) {
    return value;
}
identify(1);
identify('jeremy');
const identity = identify({ name: 'jeremy', isHandsome: true });
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const merged = merge({ name: 'Jeremy' }, { age: 26 });
// most of the time the generic type will be the type of the function's parameter
function mergeGen(para1, para2) {
    return Object.assign({}, para1, para2);
}
console.log(mergeGen({ name: 'Jeremy', age: 26, profession: 'backend' }, { speciality: 'net' }));
// call the method and get ts support
const merged1 = mergeGen({ name: 'Jeremy' }, { age: 26 });
console.log(merged1);
const merged2 = mergeGen('abc', 'def');
console.log(merged2);
console.log(mergeGen(123, 456));
