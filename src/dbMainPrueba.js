require('./database/db')();


//insertGasto(9990, "11-04-2004", "Ropa", "Pantalones.");

const a = getGastosCategoria("Ropa").then( (result) => {
    
    //console.log(result)

    return result
    
})



