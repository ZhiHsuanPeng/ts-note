interface Person {
    name: string 
    age: number 
}

let postId: string | number

const isPerson = (object: unknown): object is Person => {
        if (object !== null && typeof object === 'object') {
            const obj = object as Record<string, unknown>
            return (
               'name' in obj &&
               'age' in obj 
            )
        }

        return false
}

const obj: unknown = { name: "Alice" };
const castedObj = obj as Record<string, unknown>


let pictureId: unknown 
function isString(arg: unknown): arg is string {
    if (arg !== null && typeof arg === 'string') {
        return true
    }

    return false
}   
if (isString(pictureId)) {
    pictureId.toUpperCase()
}

let users: string[] = ['Jeremy', 'Ellie', 'Andy', 'Kang']
let modifiedUsers = users.map((users, index) => {
    return users + index
})