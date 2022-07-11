const mongo = require('./mongo')
//const gastoSchema = require('./schemas/gastoSchema')

const connectToMongoDB = async () => {
    
    await mongo().then((mongoose) => {

        try {
            console.log('Connected to mongodb!')

            /*
            const gasto = {

                monto: 25000,
                fecha: '10/07/1998',
                categoria: 'transporte',
                descripcion: '-'

            }

            await new userSchema(gasto).save()
            */
        } finally {
            mongoose.connecton.close()
        }

    })

}

connectToMongoDB()