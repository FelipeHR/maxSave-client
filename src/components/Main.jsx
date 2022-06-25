import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ContenedorGastos from "./contenedorGastos.jsx";
import NavegationBar from "./NavegationBar.jsx";

const Main = () => {
    console.log("Main");
    return (
        <>
        <View style= {{width:'100%', height: '100%',justifyContent: 'flex-end'   }}>
            <View style = {{height: '50%', width: '100%', alignItems: 'center'}}>
                <ContenedorGastos title= {"Comida"} description={"Completo en tia cochina"} value = {"$5.000"} date={"01 de Julio"}  />
            </View>
            <NavegationBar />
        </View>
        </>
    )
}

export default Main