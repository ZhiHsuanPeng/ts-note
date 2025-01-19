// Custom type 
enum EmployeeProfession {
    PT, 
    OT, 
    ST
}

type Employee = { 
    name: string 
    age: number 
    profession: EmployeeProfession
}

const medical_staff: Employee = {
    name: 'jeremy',
    age: 27, 
    profession: EmployeeProfession.PT
}

type Fn = (a: number, b: number) => number

interface Fn1 {
    (a:number, b:number): number
}