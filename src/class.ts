abstract class MedicalStaff {
    // private properties can only be accessed in the class 
    // even its subclass cannot access it 
    constructor(protected readonly name: string, protected age: number, protected profession: string) {
        this.name = name 
        this.age = age
        this.profession = profession
    }

    public getGeneralInfo() {
        return {
            name: this.name, 
            age: this.age
        }
    }

    // abstact method or property enforce that its subclass have to redeclare the method ( or property )
    abstract explain(): void
    abstract anotherExplain: () => void
}

class PhysicalTherapist extends MedicalStaff {
    // getter function 
    get showSkills() {
        if (this.skill.length > 0) {
            return `This PT has the following skills: ${this.skill}`
        }

        return 'This PT does not have any skills'
    }


    // setter 
    set addOneSkill(skill: string) {
        this.addSkills(skill)
    }

    constructor(name: string, age: number, private skill: string[]) {
        super(name, age, 'physicalTherapist')
        this.skill = []
    }

    static explain() {
        console.log('This is a PT')
    }

    public addSkills(...skills: string[]) {
        this.skill.push(...skills)
    }

    explain(): void {
        console.log(this)
    }

    anotherExplain = (): void => {
        console.log(this)
    }

}

const newMember = new PhysicalTherapist('Jeremy', 26, [])
newMember.anotherExplain()
newMember.explain()
// static method can only be called directly on class
PhysicalTherapist.explain()


class Singleton {
    private static instance: Singleton
    private constructor(protected body: Record<string, any>, protected message: string) {
        this.body = body 
        this.message = message
    }

    static getInstance() {
        if (this.instance) {
            console.log('Instance exist')
            return this.instance 
        } else {
            this.instance = new Singleton({'prop': 123}, 'Hello world')
            console.log('Initializing instance')
            return this.instance
        }
    }
}

// const instance = Singleton.getInstance()
// const instance1 = Singleton.getInstance()