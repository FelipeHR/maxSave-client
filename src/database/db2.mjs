import { MongoClient } from 'mongodb';

export async function insertGasto(monto, fecha, categoria, descripcion) { 
        
    //const {MongoClient} = require("mongodb")

    const uri = 'mongodb+srv://Checho:2laSw16x9MUf2rAv@serverlessinstance0.wkk1z.mongodb.net/?retryWrites=true&w=majority'  

    const client = new MongoClient(uri);

    try{

        await client.connect();
        
        const db = client.db("MaxSave");
        console.log(`Connected to database ${db.databaseName}`)

        const gastos = db.collection("Gastos");

        //Insert a la coleccion
        const insertCursor = await gastos.insertOne(
            {
                "monto": monto,
                "fecha": fecha,
                "categoria": categoria,
                "descripcion": descripcion,
            }
        )

    }
    catch(ex){
        console.error(`Error bruh ${ex}`)
    }

    finally{

        client.close();

    }
    
};