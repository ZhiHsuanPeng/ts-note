// functions as type 

function addTwo(a: number, b: number): string {
    let value = a + b
    return value.toString()
}
// this says that function1 will be a function 
// which accept two arguments (both should be number) and return number
let function1: (a:number, b:number) => string

function1 = addTwo


// functions and callback 
function addAndHandle(a: number, b: number, cb: (num: number) => number) {
    const result = a + b 
    cb(result)
}

console.log(addAndHandle(1, 2, (res) => {
    return res
}))