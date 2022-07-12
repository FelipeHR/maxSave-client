const { useCallback } = require("react");

module.exports = function() { 

    this.insertGasto = async function(monto, fecha, categoria, descripcion) { 
        
        const {MongoClient} = require("mongodb")

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

    this.getGastosCategoria = async function(categoria){

        const {MongoClient} = require("mongodb")

        const uri = 'mongodb+srv://Checho:2laSw16x9MUf2rAv@serverlessinstance0.wkk1z.mongodb.net/?retryWrites=true&w=majority'  

        const client = new MongoClient(uri);

        gastosDict = [];
        
        try{

            await client.connect();
            
            const db = client.db("MaxSave");
            console.log(`Connected to database ${db.databaseName}`)

            const gastos = db.collection("Gastos");

            const searchCursor = await gastos.find({"categoria": categoria});
            
            result = await searchCursor.toArray();

            //return result

            //console.log(result)
            
            
            result.forEach(r => {
                var dict = {};
                dict["id"] = r._id
                dict["monto"] = r.monto
                dict["fecha"] = r.fecha
                dict["categoria"] = r.categoria
                dict["descripcion"] = r.descripcion
                gastosDict.push(dict)
            })

            //console.log(gastosDict)
            
        }
        catch(ex){
            console.error(`Error bruh ${ex}`)
        }

        finally{

            client.close();
            //console.log(gastosDict);
            
        
        }

        return gastosDict

    };

    getGastosCategoria().then( (value) => {return value})


}