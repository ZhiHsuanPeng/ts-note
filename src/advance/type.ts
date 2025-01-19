type Student = {
    name: string 
    age: number 
}

enum Profession {
    'doctor',
    'nursers',
    'PT'
}

type ThirdGroup = {
    profession: Profession
}

// intersection type
type ThirdGroupStudent = Student & ThirdGroup 
type anotherGroupStudent = Student | ThirdGroup 

const jeremy: ThirdGroupStudent = {
    name: 'Jeremy',
    age: 25, 
    profession: Profession.PT
}

type Num = number 
type Bool = boolean 
type Combine = Num & Bool 
