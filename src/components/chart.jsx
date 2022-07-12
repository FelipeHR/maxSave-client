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
        <View style={{margin: 10,padding: 20, backgroundColor: theme.colors.primary, borderRadius: 20, alignItems: "center"}} >
            <View style={{height:120}}>
            <PieChart  data = {props.info} 
            textColor={theme.colors.white}
            onPress= {(index, selected) => {index.focused=== true ? index.focused= false :index.focused= true, change(index.text,index.value,selected)}}
            labelsPosition= {"mid"}
            focusOnPress
            semiCircle
            donut
            innerRadius = {120/3*2}
            innerCircleColor={theme.colors.primary}
            centerLabelComponent={() => {
                return (
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                      {porcentaje}
                    </Text>
                  </View>
                );}}
            />
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", padding: 5}}>
                <View style={{ alignItems: "center", justifyContent: "space-around", margin: 5,flex: 1}}>
                    <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium, marginTop: 10}}>{"Categoria"}</Text>
                    <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.regular, fontSize: theme.fontSize.semiSmall, marginTop: 10}}>{categoria}</Text>
                </View>
                <View style={{ alignItems: "center", justifyContent: "space-around", margin: 5, flex: 1}}>
                    <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.bold, fontSize: theme.fontSize.medium, marginTop: 10}}>{"Total"}</Text>
                    <Text style={{color: theme.colors.white,fontWeight: theme.fontWeight.regular, fontSize: theme.fontSize.semiSmall, marginTop: 10}}>{"$ "+valor}</Text>
                </View>
            </View>
        </View>
    )
}