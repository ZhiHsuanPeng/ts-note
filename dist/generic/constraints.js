"use strict";
// we can set constraints to ensure that we reveice objects instead of number or string 
// ( Object.assign cannot use number or string )
function mergeGen2(para1, para2) {
    return Object.assign({}, para1, para2);
}
function anythingWithLength(param1) {
    return param1.length;
}
anythingWithLength('stringDoesHaveLengthProperty');
anythingWithLength([1, 2, 3]);
anythingWithLength({ length: 1 });
// This function will result in ts error, as ts cannot be sure whether the key is in obj or not 
//function extract(obj: object, key: string) {
//    return object[key]
//}
// using keyof constraints, you can ensure that the function is correctly
function extract(obj, key) {
    return obj[key];
}
console.log(extract({ name: 'Jeremy' }, 'name'));
