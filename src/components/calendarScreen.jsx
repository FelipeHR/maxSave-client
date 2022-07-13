import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NavegationBar from "./NavegationBar.jsx";
import Calendary from "./calendaryComponent.jsx";
import Chart from "./chart.jsx";
import theme from "../theme.js";
import Constants from "expo-constants";
const CalendarScreen = ({navigation}) => {
    var dateString = new Date().toJSON().toString().slice(0,10);
    var [date, setDate] = useState(dateString);
    const [info, setInfo] = useState([]);
    const getDate = (date) => {
        setDate(date);
        searchData(date).then(data => {
            if (data.message !== ""){
                configInfo(data.message);
            }
            else{
                setInfo([]);
            }

            console.log(data.message);
        })
    }
    const configInfo = (data) => {
        
        if (data.length > 0) {
            let aux = [];
            for (let i = 0; i < data.length; i++) {
                let aux2 = {};
                aux2["text"] = data[i].categoria;
                aux2["value"] = data[i].monto;
                aux2["color"] = infoColor[i];
                aux2["focused"] = false;
                aux.push(aux2);
                console.log(data[i].categoria)
            }
            setInfo(aux);
        }

    }
    const searchData = async(dateActual) => {
        const res = await fetch('https://maxSave.up.railway.app/getGastosDia/'+dateActual, {
            'method' : 'GET',
        }).catch(err => { console.log(err) })
        return await res.json();
    }
    const infoColor =[
       "#e13c33",
        "#9d2824",
        "#ffd0ce",
        "#ffa09d",
        theme.colors.white]

    return (
        <View style={styles.container}>
            <View style= {{margin:10, minHeight:60, maxHeight:380}}>
                <Calendary getDate={getDate} today={dateString}/>
            </View>
            <Chart  info = {info} dia={date} />

            <View style = {{ bottom: 39,position: "absolute",width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <NavegationBar nav= {navigation} navegation = 'calendarScreen'/>
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
export default CalendarScreen