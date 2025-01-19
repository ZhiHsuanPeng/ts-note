// use type casting to tell typescript that the current variable is of a certain type
let user: unknown 

// this would not work 
// user.toString()
(user as string).toString()