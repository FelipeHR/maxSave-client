import React, { useEffect, useState } from "react";
//import data from "./data.js";
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import ContenedorGastos from "./contenedorGastos.jsx";
import NavegationBar from "./NavegationBar.jsx";
import Modal from "react-native-modal";
import theme from "../theme.js";
import MultiSelect from "./multiSelect.jsx";
import CalendarPicker from "./calendarPicker.jsx";
import Constants from "expo-constants";
const Main = ({navigation}) => {
    const [categories, setCategories] = useState([]);
    const [data, setData] = useState([]);
    const [initialDate, setInitialDate] = useState(new Date().toJSON().toString().slice(0,10));
    const [finalDate, setFinalDate] = useState(new Date().toJSON().toString().slice(0,10));
    const [isModalVisible, setModalVisible] = useState(false);
    const [showData, setShowData] = useState(data);
    const getDates = (initial,final) => {
        
        setInitialDate(initial);
        setFinalDate(final);
        console.log(initial+" "+final);
    }
    const configData = (newData) => {
        let dataAux = [];
        for(let i = 0; i < newData.length; i++){
            let aux = {};
            aux["value"] = newData[i].monto;
            aux["title"] = newData[i].categoria;
            aux["description"] = newData[i].descripcion;
            aux["date"] = newData[i].fecha;
            dataAux.push(aux);
        }
        console.log(dataAux);
        setData(dataAux)
        getCategories(categories)
    }
    const searchData = async() => {
        const res = await fetch('https://maxSave.up.railway.app/getGastosFecha/'+ initialDate + '/' + finalDate, {
            'method' : 'GET',
        })
        return await res.json();
    }

    const toggleModal = () => {
        if(isModalVisible){
            if(initialDate!= null && finalDate != null){
                searchData().then(data => {
                    configData(data.message);
                })
            }
        }
        setModalVisible(!isModalVisible);
        
    };
    const getCategories = (categories) => {
        setCategories(categories);
        if(categories.length === 0){
            setShowData(data);
        }
        else{
            let newData = [];
            for(let i = 0; i < categories.length; i++){
                for(let j = 0; j < data.length; j++){
                    if(data[j].title === categories[i]){
                        newData.push(data[j]);
                    }
                }
            }
            setShowData(newData);
        }
        console.log("Largo a mostrar: "+showData.length+ "   Categorias seleccionadas: "+categories.length);
    }
    return (
        <View style={styles.container}>
            <View style = {{ margin: 10, width: '90%', alignItems: 'center', justifyContent: 'center'}}>
                <MultiSelect  getCategory={getCategories}/>
            </View>
            <TouchableOpacity onPress={toggleModal}>
                <View style={styles.datesContainer}>
                    <View>
                        <Text style={styles.datesTitleText}>Fecha de Inicio</Text>
                        <Text style={styles.datesText}>{initialDate!= null && finalDate!=null ? initialDate : "-"}</Text>
                    </View>
                    <View>
                        <Text style={styles.datesTitleText}>Fecha de Fin</Text>
                        <Text style={styles.datesText}> {initialDate!= null && finalDate!=null ? finalDate : "-"}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <CalendarPicker getDates={getDates}/>
                <Button title="Cerrar" onPress={ toggleModal} />
            </Modal>
            <ScrollView style= {{minWidth: '95%',margin:10, padding:10, minHeight:60, maxHeight: "60%", backgroundColor: theme.colors.primary, borderRadius: 20}}>
                {showData.map((item, index) => {
                    return (
                        <ContenedorGastos title={item.title} value={"$"+item.value} description={item.description} date={item.date}/>
                    )
                    }
                )}
            </ScrollView>
            
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
      datesContainer: {
        //textAlign: 'center',
        //color: theme.colors.secondary,
        padding: 10,
        backgroundColor: theme.colors.primary,
        //fontSize: theme.fontSize.large,
        //fontWeight: 'bold',
        borderRadius: 10,
        width: 300,
        justifyContent: 'space-around',
        flexDirection: 'row',
      },
      datesTitleText: {
        fontSize: theme.fontSize.semiSmall,
        fontWeight: 'bold',
        color: theme.colors.secondary,
        textAlign: 'center',
      },
      datesText: {
        fontSize: theme.fontSize.semiSmall,
        color: theme.colors.white,
        textAlign: 'center',
      }

});
export default Main