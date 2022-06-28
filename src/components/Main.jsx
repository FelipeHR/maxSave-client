import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ContenedorGastos from "./contenedorGastos.jsx";
import NavegationBar from "./NavegationBar.jsx";
import Calendary from "./calendary.jsx";
const Main = () => {
    console.log("Main");
    return (
        <View style={{ justifyContent: 'flex-end'}}>
            <View style = {{ width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <ContenedorGastos title= {"Comida"} description={"Completo en tia cochina"} 
                    value = {"$5.000"} date={"01 de Julio"}  />
               <Calendary />
            </View>
            
            <NavegationBar navegation = 'home'/>
        </View>
    )
}

export default Main