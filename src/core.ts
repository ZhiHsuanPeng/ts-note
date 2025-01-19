// number, string, boolean
function add(a:number, b:number, printResult:boolean, phrase: string){
    if (printResult) {
        console.log( `${phrase} ${a + b}` )
    } else {
        return a + b
    }
}

add(1, 2, false, 'The result of add funtcion is:')