"use strict";
function printAnimnal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "fish":
            speed = animal.swimmingSpeed;
    }
    console.log(speed);
}
printAnimnal({ type: 'bird', flyingSpeed: 10 });
