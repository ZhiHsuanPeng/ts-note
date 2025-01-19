"use strict";
// interfaces describe structure of an object 
// interface can force the existence of certain methods
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi ${this.name}`);
    }
    beat() {
        console.log(`Beat ${this.name}`);
    }
}
const user1 = new Person('Jeremy');
user1.greet();
// const obj1 = {
//     method() {
//         console.log()
//     },
//     method2: () => {
//         console.log('hi')
//     }
// } 
// obj1.method2()
