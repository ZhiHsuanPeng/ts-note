// interfaces describe structure of an object 
interface Named {
    // you can set interface's property to be readonly
    // But you cannot set it to be 'private', 'protected', 'public' 
    readonly name: string
}

interface Greetable extends Named {
    greet(): void
}

interface Beatable {
    beat(): void
}

// interface can force the existence of certain methods
class Resident implements Greetable, Beatable {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greet() {
        console.log(`Hi ${this.name}`)
    }

    beat() {
        console.log(`Beat ${this.name}`)
    }
}

const user1 = new Resident('Jeremy')
user1.greet()


// interface can also be used to type a function
interface Fn2 {
    (a: number): number
}

const newFun: Fn2 = (a) => {
    return a
}