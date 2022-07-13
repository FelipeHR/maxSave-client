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
   
    return (
        <View style={styles.container}>
            
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