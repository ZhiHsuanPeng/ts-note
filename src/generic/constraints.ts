// we can set constraints to ensure that we reveice objects instead of number or string 
// ( Object.assign cannot use number or string )

function mergeGen2<T extends object, U extends object>(para1: T, para2: U){
    return Object.assign({}, para1, para2)
}

// const merged3 = mergeGen2('abc', 'def')


interface LengthProp {
    length: number 
}

function anythingWithLength<T extends LengthProp>(param1: T) {
    return param1.length
}

anythingWithLength('stringDoesHaveLengthProperty')
anythingWithLength([1, 2, 3])
anythingWithLength({length: 1})

// This function will result in ts error, as ts cannot be sure whether the key is in obj or not 
//function extract(obj: object, key: string) {
//    return object[key]
//}

// using keyof constraints, you can ensure that the function is correctly
function extract<T extends object, U extends keyof T>(obj: T , key: U) {
    return obj[key]
} 

console.log(extract({name: 'Jeremy'}, 'name'))