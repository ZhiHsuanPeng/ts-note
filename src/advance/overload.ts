// basically to define multiple ways to call a function

type CombinedType = number | string 

function combine(a: string, b:string): string
function combine(a: CombinedType, b: CombinedType): CombinedType {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }

    return a + b
}

const value = combine('Max', 'Jeremy')
value.split(' ')


function makeDate(m:number, d:number, y:number): Date {
    return new Date(y, m, d)
}

function makeDateFromTimestamp(timestamp: number): Date {
    return new Date(timestamp)
}


// the following two lines are overload signatures
// it allow overloadMakeDate function be called in different ways
function overloadMakeDate(m:number): Date
function overloadMakeDate(m:number, d:number, y:number): Date
function overloadMakeDate(m:number, d?:number, y?:number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, m, d)
    }

    return new Date(m)
}