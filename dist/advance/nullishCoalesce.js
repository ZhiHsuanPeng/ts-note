"use strict";
// similar to optional chaining 
// ?? operator allows you to access data that may be null or undefined
// sometimes we only accept null or undefined as the value to fall back 
// but 0 or '' are falsy too, in that case we dont want to fall back 
const data = 0;
// this means if data is null or undefined 
// then we fall back
// if you dont use ??, then the logged value will be 'fallback'
const inputData = data !== null && data !== void 0 ? data : 'fallback';
console.log(inputData);
