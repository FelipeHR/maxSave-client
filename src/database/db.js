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

            result.forEach(r => {
                var dict = {};
                dict["id"] = r._id
                dict["value"] = r.monto
                dict["date"] = r.fecha
                dict["title"] = r.categoria
                dict["description"] = r.descripcion
                gastosDict.push(dict)
            })

            //return result

            //console.log(result)

            //console.log(gastosDict)
            
        }
        catch(ex){

            console.error(`Error bruh ${ex}`)

        }

        finally{

            client.close();
            return gastosDict
            //console.log(gastosDict);
            
        }

    };

    this.getUltimosGastos = async function(c){

        const {MongoClient} = require("mongodb")

        const uri = 'mongodb+srv://Checho:2laSw16x9MUf2rAv@serverlessinstance0.wkk1z.mongodb.net/?retryWrites=true&w=majority'  

        const client = new MongoClient(uri);

        gastosDict = [];
        
        try{

            await client.connect();
            
            const db = client.db("MaxSave");
            console.log(`Connected to database ${db.databaseName}`)

            const gastos = db.collection("Gastos");

            const searchCursor = await gastos.find().sort({$natural:-1}).limit(5);
            
            result = await searchCursor.toArray();

            result.forEach(r => {
                var dict = {};
                dict["id"] = r._id
                dict["value"] = r.monto
                dict["date"] = r.fecha
                dict["title"] = r.categoria
                dict["description"] = r.descripcion
                gastosDict.push(dict)
            })
            
        }
        catch(ex){

            console.error(`Error bruh ${ex}`)

        }

        finally{

            client.close();
            return await gastosDict
            
        }

    };

    this.getGastoMes= async function(){

        const {MongoClient} = require("mongodb")

        const uri = 'mongodb+srv://Checho:2laSw16x9MUf2rAv@serverlessinstance0.wkk1z.mongodb.net/?retryWrites=true&w=majority'  

        const client = new MongoClient(uri);

        gastoMes = 0
        
        try{

            await client.connect();
            
            const db = client.db("MaxSave");
            console.log(`Connected to database ${db.databaseName}`)
            const gastos = db.collection("Gastos");

            var today = new Date();
            today.toJSON().slice(0,10)
            var mesActual = today.getFullYear()+'-'+(today.getMonth()+1)+'-'
            

            console.log(mesActual)

            const searchCursor = await gastos.find({"fecha":{$regex:mesActual}})
            
            result = await searchCursor.toArray();

            console.log(result)

            result.forEach(r => {
                
                gastoMes += r.monto

            })
            
        }
        catch(ex){

            console.error(`Error bruh ${ex}`)

        }

        finally{

            client.close();
            console.log(gastoMes)
            return await gastoMes
            
        }

    };

}