"use strict";
class MedicalStaff {
    // private properties can only be accessed in the class 
    // even its subclass cannot access it 
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
    getGeneralInfo() {
        return {
            name: this.name,
            age: this.age
        };
    }
}
class PhysicalTherapist extends MedicalStaff {
    // getter function 
    get showSkills() {
        if (this.skill.length > 0) {
            return `This PT has the following skills: ${this.skill}`;
        }
        return 'This PT does not have any skills';
    }
    // setter 
    set addOneSkill(skill) {
        this.addSkills(skill);
    }
    constructor(name, age, skill) {
        super(name, age, 'physicalTherapist');
        this.skill = skill;
        this.anotherExplain = () => {
            console.log(this);
        };
        this.skill = [];
    }
    static explain() {
        console.log('This is a PT');
    }
    addSkills(...skills) {
        this.skill.push(...skills);
    }
    explain() {
        console.log(this);
    }
}
const newMember = new PhysicalTherapist('Jeremy', 26, []);
newMember.anotherExplain();
newMember.explain();
// static method can only be called directly on class
PhysicalTherapist.explain();
class Singleton {
    constructor(body, message) {
        this.body = body;
        this.message = message;
        this.body = body;
        this.message = message;
    }
    static getInstance() {
        if (this.instance) {
            console.log('Instance exist');
            return this.instance;
        }
        else {
            this.instance = new Singleton({ 'prop': 123 }, 'Hello world');
            console.log('Initializing instance');
            return this.instance;
        }
    }
}
// const instance = Singleton.getInstance()
// const instance1 = Singleton.getInstance()
