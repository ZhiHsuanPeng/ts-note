"use strict";
// interface can force the existence of certain methods
class Resident {
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
const user1 = new Resident('Jeremy');
user1.greet();
const newFun = (a) => {
    return a;
};
