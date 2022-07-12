import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import ContenedorGastos from "./contenedorGastos.jsx";
import NavegationBar from "./NavegationBar.jsx";
import Calendary from "./calendary.jsx";
import Chart from "./chart.jsx";
import theme from "../theme.js";
import ContenedorCategorias from "./contenedorCategorias.jsx";
import Constants from "expo-constants";
const Main = ({navigation}) => {

    const info =[
        {value: 50000, text: "Entretenimiento", focused: false, color: "#e13c33"},
        {value: 10000, text: "Comida", focused: false, color: "#9d2824"},
        {value: 20000, text: "Transporte", focused: false, color: "#ffd0ce"},
        {value: 20000, text: "Ropa", focused: false, color: "#ffa09d"},
        {value: 10000, text: "Varios", focused: false, color: theme.colors.white},
    ]
    return (
        <View style={styles.container}>
            <View style = {{ width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <ContenedorGastos title= {"Estudios"} description={"Completo en tia cochina"} 
                    value = {"$5.000"} date={"01 de Julio"}  />
               <Calendary/>
               
               
            </View>
            <Chart  info = {info} />
            <View style = {{ bottom: 39,position: "absolute",width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <NavegationBar nav= {navigation} navegation = 'home'/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#2d2d2d',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'flex-start'
      },
});
export default Main