import React, {useEffect, useState} from 'react';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import {Text, StyleSheet, View} from 'react-native';
import theme from '../theme.js';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;



export default function Chart( { ...props} ) {
    useEffect(() => {
        setValor(suma())
    }, [])

    const  [categoria, setCategoria] = useState("Todas");
    const  [valor,setValor] = useState(0);
    const  [porcentaje, setPorcentaje] = useState("100%");
    var activos = props.info
    var change = (categoria, valor,selected) => {
        if(selected!=null){
            if (activos[selected].focused == true ){
                for(var i = 0; i < activos.length; i++){
                    if(i!=selected)activos[i].focused = false
                }
                setCategoria(categoria);
                setValor(valor);
                setPorcentaje((valor/suma()*100).toFixed(1)+"%");
            }
            else{
                setCategoria("Todas");
                setValor(suma())
                setPorcentaje("100%");
            }
            console.log(selected+" "+activos[selected].focused)
        }
    }
    var suma = () => {
        let sumatoria = 0
        for(var i = 0; i < activos.length; i++){
            sumatoria += activos[i].value
        }
        return sumatoria
    }
    return (
        <View style={{margin: 5,padding: 20, backgroundColor: theme.colors.primary, borderRadius: 20, alignItems: "center"}} >
             <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium}}>Resumen Gastos</Text>
             <Text style={{color: theme.colors.secondary,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium}}>{props.dia}</Text>
            <View style={{height:150, width:"95%", flexDirection: "row",justifyContent: "space-around"}}>
            <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium, marginBottom: 10}}></Text>
                <View style={{ justifyContent: "space-between", alignItems: "center",flex: 2}}>
                    <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium, marginBottom: 10}}></Text>
                    <PieChart  data = {props.info} 
                    textColor={theme.colors.white}
                    onPress= {(index, selected) => {index.focused=== true ? index.focused= false :index.focused= true, change(index.text,index.value,selected)}}
                    labelsPosition= {"mid"}
                    focusOnPress
                    semiCircle
                    donut
                    radius={90}
                    innerRadius = {120/5*2}
                    innerCircleColor={theme.colors.primary}
                    centerLabelComponent={() => {
                        return (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                            style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                            { props.info.length !=0 ? porcentaje : "-"}
                            </Text>
                        </View>
                        );}}
                    />
                </View>
                <View style={{ alignItems: "center", justifyContent: "space-around", padding: 5, flex: 1}}>
                    <View style={{ alignItems: "center", justifyContent: "space-around", margin: 5,flex: 1}}>
                        <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium, marginTop: 10}}>{"Categoria"}</Text>
                        <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.regular, fontSize: theme.fontSize.semiSmall, marginTop: 5}}>{ props.info.length !=0 ? categoria : "Sin datos"} </Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "space-around", margin: 5, flex: 1}}>
                        <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium, marginTop: 10}}>{"Total"}</Text>
                        <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.regular, fontSize: theme.fontSize.semiSmall, marginTop: 5}}>{ props.info.length !=0 ? "$ "+valor : "Sin datos"}</Text>
                    </View>
                 </View>
            </View>
        </View>
    )
}