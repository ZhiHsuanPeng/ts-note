// index property typing allow you to define type for object with dynamic keys

interface AppError {
    [key: string]: string
}

const error: AppError = {
    error1: '123',
    error2: '456'
}