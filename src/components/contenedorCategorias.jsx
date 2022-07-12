import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, ScrollView } from "react-native";
import StyledText from "./StyledText.jsx";
import RoundIcon from "./roundIcon.jsx";
import theme from "../theme.js";

const styles = StyleSheet.create({
    containerIcon: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    mainContainer: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        padding: 5,
        borderRadius: 40
    }
});

export default function ContenedorCategorias({getCategory}){
    var [category,setCategory] = useState("Ninguna")
    var [colors, setColors] = useState({
        Pasatiempos:"notSelect",
        Comida: "notSelect",
        Estudios: "notSelect",
        Transporte: "notSelect",
        Mascota: "notSelect",
        Ropa: "notSelect",
        Juegos: "notSelect",
        Salud: "notSelect",
        Otros: "notSelect",
        Cuentas: "notSelect",
    })
    const selectCategory = (index,tipo) => {
        if(tipo!= undefined && tipo!= category){
            for(var i in colors){
                setColors(colors[i] = "notSelect")
            }
            setColors({...colors, [tipo]: "select"})
            getCategory(tipo)
            setCategory(tipo);
        }
        else{
            for(var i in colors){
                setColors({...colors, [i]: "notSelect"})
            }
            getCategory("Ninguna")
            setCategory("Ninguna");
        }
    }
    return( 
        <ScrollView horizontal showsHorizontalScrollIndicator>
            <View style= {styles.mainContainer}>
                <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center", padding: 5}}>
                    <TouchableWithoutFeedback onPress={ (index) =>(selectCategory(index,"Transporte"))}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Transporte" color={colors["Transporte"]} />
                            <StyledText color='white' type='body'>Transporte</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Comida")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Comida" color={colors["Comida"]}/>
                            <StyledText color='white' type='body'>Comida</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Mascota")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Mascota" color={colors["Mascota"]}/>
                            <StyledText color='white' type='body'>Mascota</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Ropa")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Ropa" color={colors["Ropa"]}/>
                            <StyledText color='white' type='body'>Ropa</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Salud")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Salud" color={colors["Salud"]}/>
                            <StyledText color='white' type='body'>Salud</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    
                </View>
                <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center", padding: 5}}>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Juegos")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Juegos" color={colors["Juegos"]}/>
                            <StyledText color='white' type='body'>Juegos</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Cuentas")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Cuentas" color={colors["Cuentas"]}/>
                            <StyledText color='white' type='body'>Cuentas</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Pasatiempos")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Pasatiempos" color={colors["Pasatiempos"]}/>
                            <StyledText color='white' type='body'>Pasatiempos</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Estudios")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Estudios" color={colors["Estudios"]}/>
                            <StyledText color='white' type='body'>Estudios</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ (index) =>selectCategory(index,"Otros")}>
                        <View style={styles.containerIcon}>
                            <RoundIcon size='medium'  icon="Otros" color={colors["Otros"]}/>
                            <StyledText color='white' type='body'>Otros</StyledText>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </ScrollView>
    )
}