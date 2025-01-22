
// you can use extends statement to form a conditional
type Example<T> = T extends string ? "It's a string" : "It's not a string";

type Test1 = Example<string>; // "It's a string"
type Test2 = Example<number>;