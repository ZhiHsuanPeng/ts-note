// Array object is actually a generics
// <> is the generics part
const example: Array<string> = []

// inside <> 
// if you use certain types 
// you will get ts support after promise resolve
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Result')
    }, 2000)
})

promise.then((data) => {
    data.charCodeAt(0)
})


type Jeremy = {
    name: 'jeremy'
    isHandsome: true
}

// constructing function like this allows you to be flexible with the type of parameter
function identify<T>(value: T): T {
    return value
}

identify<number>(1)
identify<string>('jeremy')
const identity = identify<Jeremy>({name: 'jeremy', isHandsome: true})



function merge(obj1: object, obj2: object) {
    return Object.assign(obj1, obj2)
}

const merged = merge({name: 'Jeremy'}, {age: 26})
// merged.name is not available





interface Engineer {
    name: string 
    age: number 
    profession: 'backend' | 'frontend'
}

interface Speciality {
    speciality: string
}

// most of the time the generic type will be the type of the function's parameter
function mergeGen<T, U>(para1: T, para2: U){
    return Object.assign({}, para1, para2)
}

console.log(mergeGen({name: 'Jeremy', age: 26, profession: 'backend'},{speciality: 'net'}))

// call the method and get ts support
const merged1 = mergeGen({name: 'Jeremy'}, {age: 26})
console.log(merged1)
const merged2 = mergeGen('abc', 'def')
console.log(merged2)
console.log(mergeGen(123, 456))
