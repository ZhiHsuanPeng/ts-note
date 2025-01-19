// In case of encountering run time error while accessing nestesd object 
// use optional chaining 
// it basically complie to a series of if check

const anObject = { 
    nest: {
        prop: 123
    }
}

console.log(anObject?.nest?.prop)