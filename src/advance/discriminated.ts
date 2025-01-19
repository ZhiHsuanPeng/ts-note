interface Bird {
    type: 'bird' 
    flyingSpeed: number 
}

interface Fish {
    // discriminated union
    // basically give interface a discriminator
    type: 'fish'
    swimmingSpeed: number 
}

type Animal = Bird | Fish

function printAnimnal(animal: Animal) {
    let speed; 
    switch(animal.type) {
        case "bird":
            speed = animal.flyingSpeed
            break;
        case "fish":
            speed = animal.swimmingSpeed
    }

    console.log(speed)
}

printAnimnal({type: 'bird', flyingSpeed: 10})