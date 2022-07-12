//const {MongoClient} = require("mongodb")


//const uri = 'mongodb+srv://Checho:2laSw16x9MUf2rAv@serverlessinstance0.wkk1z.mongodb.net/?retryWrites=true&w=majority'
connect();

async function connect(){

    const {MongoClient} = require("mongodb")


    const uri = 'mongodb+srv://Checho:2laSw16x9MUf2rAv@serverlessinstance0.wkk1z.mongodb.net/?retryWrites=true&w=majority'  

    const client = new MongoClient(uri);

    try{

        await client.connect();
        
        const db = client.db("MaxSave");
        console.log(`Connected to database ${db.databaseName}`)

        const users = db.collection("users");

        
        const searchCursor = await users.find();
        const result = await searchCursor.toArray();
        result.forEach(r => console.log(r));

        //console.log(await searchCursor.hasNext());

        /*
        //Insert a la coleccion
        const insertCursor = await users.insertOne(
            {
                "name": "user1Prueba",
                "password": "pueba"
            }
        )
        */

        /*
        //Delete uno de la coleccion
        const deleteCursor = await users.deleteOne(
            {

                "name": "user1Prueba"

            }
        )
        */

        /*
        // get todos los elementos de la coleccion con el value especifico para la key
        const searchCursor = await users.find({"key": "value"});
        const result = await searchCursor.toArray();
        */

        /*
        //get todos los elementos de la coleccion
        const searchCursor = await users.find();
        const result = await searchCursor.toArray();
        */

        /*
        //get todas las colecciones
        const collections = await db.collections()
        collections.forEach(c=>console.log(c.collectionName));
        */

    }
    catch(ex){
        console.error(`Error bruh ${ex}`)
    }

    finally{

        client.close();

    }

}