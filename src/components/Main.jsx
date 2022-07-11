import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ContenedorGastos from "./contenedorGastos.jsx";
import NavegationBar from "./NavegationBar.jsx";
import Calendary from "./calendary.jsx";
import Chart from "./chart.jsx";
import theme from "../theme.js";
const Main = () => {
    const info =[
        {value: 50000, text: "Entretenimiento", focused: false, color: "#e13c33"},
        {value: 10000, text: "Comida", focused: false, color: "#9d2824"},
        {value: 20000, text: "Transporte", focused: false, color: "#ffd0ce"},
        {value: 20000, text: "Ropa", focused: false, color: "#ffa09d"},
        {value: 10000, text: "Varios", focused: false, color: theme.colors.white},
    ]
    return (
        <View style={{ justifyContent: 'flex-end'}}>
            <View style = {{ width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <ContenedorGastos title= {"Comida"} description={"Completo en tia cochina"} 
                    value = {"$5.000"} date={"01 de Julio"}  />
               <Calendary/>
               
            </View>
            <Chart  info = {info} />
            <NavegationBar navegation = 'home'/>
        </View>
    )
}

export default Main