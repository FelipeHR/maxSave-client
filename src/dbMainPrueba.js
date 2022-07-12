require('./database/db')();

/*
const a = getGastosCategoria("Ropa").then( (result) => {
    
    console.log(result)

    return gastosDict
    
})
*/

//insertGasto(1234, "11-04-2004", "Pasatiempos", "película");

a = getGastosCategoria("Pasatiempos")

setTimeout(() => {console.log(a)}, 2000)







