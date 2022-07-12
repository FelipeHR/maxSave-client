//require('./database/db')();
import { MongoClient } from 'mongodb';
import {insertGasto} from './database/db2.mjs'

insertGasto(1234, "2022-06-11", "Pasatiempos", "película");

//a = getGastosCategoria("Pasatiempos");

//a = getUltimosGastos();

//getGastoMes();

//setTimeout(() => {console.log(a)}, 4000);




