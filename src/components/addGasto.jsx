import React,{useState} from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Alert} from "react-native";
import { TextInput } from 'react-native-element-textinput';
import StyledText from "./StyledText.jsx";
import Calendary from "./calendary.jsx";
import theme from "../theme.js";
import ContenedorCategorias from "./contenedorCategorias.jsx";
import Icon from "react-native-vector-icons/FontAwesome";
import Constants from 'expo-constants';
import { StatusBar } from "expo-status-bar";
const AddGasto = ({navigation}) => {
    //<ContenedorGastos title= {"Comida"} description={"Completo en tia cochina"} value = {"$5.000"} date={"01 de Julio"}  />
    var [value, setValue] = useState("");
    var [description, setDescription] = useState("");
    var [date, setDate] = useState("");
    var [category, setCategory] = useState("Ninguna");
    console.log(value+" "+description+" "+category+" "+date);
    const getCategory = (categoria) => {
        setCategory(categoria);
    }
    const getDate = (date) => {
        setDate(date);
    }
    const send = () => {
        if((value != "" && value !== "0") && category != "Ninguna" && date != ""){
            console.log("Se puede enviar");
            
            navigation.navigate('home');
        }
        else{
            if(value == "" || value == "0"){
                Alert.alert('Valor inválido',"El valor no puede ser vacío u 0")
            }
            else if(category == "Ninguna"){
                Alert.alert('Categoria no seleccionada',"Debe seleccionar una categoria")
            }
            else if(date == ""){
                Alert.alert('Fecha no seleccionada',"Debe seleccionar una fecha")
            }
            
        }
    }   
    return (
        <View style={styles.container || { justifyContent: 'flex-start'}}>
            <View style = {{ width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <View style= {{marginLeft:20, marginTop:20 , flexDirection: "row", alignSelf: "flex-start", justifyContent: "center"}}>
                    <View style={{flex:1}}>
                        <Icon name="arrow-left" size={30} color={theme.colors.white} />
                    </View>
                    <View style={{flex:2, alignItems: "center"}}>
                        <StyledText color='white' type='title'> Añadir Gasto</StyledText>
                    </View >
                    <View style={{flex:1}}></View>
                </View>
                
               <View style= {{margin:10, padding: 20, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Icon name="usd" size={20} color={theme.colors.white} />
                    <TextInput
                        value={value}
                        numeric
                        autoFocus
                        keyboardType="numeric"
                        style={styles.input}
                        maxLength={10}
                        inputStyle={styles.inputStyle}
                        labelStyle={styles.labelStyle}
                        placeholderStyle={styles.placeholderStyle}
                        textErrorStyle={styles.textErrorStyle}
                        label="Valor Gasto"
                        onChangeText={text => {
                            setValue(text);
                        }}
                    />
                    <TouchableWithoutFeedback onPress={send}>
                        <Icon name="check-circle" size={60} color={theme.colors.secondary} />
                    </TouchableWithoutFeedback>
               </View>
               <View style= {{margin:10, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <TextInput
                        value={description}
                        style={styles.inputDescription}
                        maxLength={20}
                        inputStyle={styles.inputStyleDescription}
                        labelStyle={styles.labelStyle}
                        placeholderStyle={styles.placeholderStyle}
                        textErrorStyle={styles.textErrorStyle}
                        label="Descripción del Gasto"
                        onChangeText={text => {
                            setDescription(text);
                        }}
                    />
                </View>
               <View style= {{margin:10, minHeight:60, maxHeight:650}}>
                    <Calendary getDate={getDate}/>
                </View>
                <View style= {{margin:10,height:250, justifyContent: "center"}}>
                    <ContenedorCategorias getCategory={getCategory}/>
                </View>

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
      },
    input: {
      height: 55,
      width: 220,
      paddingHorizontal: 12,
      marginHorizontal: 15,
      borderRadius: 8,
      backgroundColor: theme.colors.white,
      textAlign: "right",
    },
    inputStyle: { fontSize: 20, 
        color: theme.colors.black,
    textAlign: "right", },
    labelStyle: {
      fontSize: 14,
      position: 'absolute',
      textAlign: "right",
      top: -10,
      backgroundColor: 'white',
      paddingHorizontal: 4,
      marginLeft: -4,
    },
    inputDescription: {
        height: 55,
        width: 300,
        paddingHorizontal: 12,
        marginHorizontal: 15,
        borderRadius: 8,
        backgroundColor: theme.colors.white,
      },
    inputStyleDescription: { fontSize: 16, 
          color: theme.colors.black,
      textAlign: "left", },
    placeholderStyle: { fontSize: 20, color: "#ccc", textAlign: "right" },
    textErrorStyle: { fontSize: 16, color: "red", textAlign: "right" },
  });
export default AddGasto