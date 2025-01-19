enum Role {
    ADMIN,
    AUTHOR
}

const employee = { 
    name: "Jeremy", 
    age: 27, 
    role: Role.ADMIN
}

if (employee.role === Role.ADMIN) {
    console.log(`${employee.name} is ${employee.age}`)
}