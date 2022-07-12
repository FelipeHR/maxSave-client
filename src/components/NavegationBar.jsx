import React from "react";
import { Text, StyleSheet, View, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";
import StyledText from "./StyledText.jsx";
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../theme.js';
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function NavegationBar({ nav, ...props}) {
    const change = (e,page) => {
        if(page !== props.navegation){
            console.log(page);
            nav.navigate(page);
        }
    }
    return(
        <View style= { styles.container}>
            <View style= {styles.navegationIcon}>
                <TouchableNativeFeedback onPress={(event) => change(event,"home")}>
                    <Icon name="home" size={30} color={props.navegation == 'home' ? theme.colors.secondary : theme.colors.white} />
                </TouchableNativeFeedback>
            </View>
            <View style= {styles.navegationIcon}>
                <TouchableWithoutFeedback onPress={(event) => change(event,"calendarScreen")}>
                    <Icon name="calendar-alt" size={30} color={props.navegation == 'calendarScreen' ? theme.colors.secondary : theme.colors.white} />
                </TouchableWithoutFeedback>
            </View>
            <View style= {styles.navegationIcon}>
                <TouchableWithoutFeedback onPress={(event) => change(event,"addGasto")}>
                    <Icon name="plus-circle" size={45} color="#e13c33" />
                </TouchableWithoutFeedback>
            </View>
            <View style= {styles.navegationIcon}>
                <Icon name="history" size={30} color={props.navegation == 'history' ? theme.colors.secondary : theme.colors.white} />
            </View>
            <View style= {styles.navegationIcon}>
                <Icon name="ellipsis-v" size={30} color={props.navegation == 'options' ? theme.colors.secondary : theme.colors.white} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navegationIcon: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    container:{ 
        backgroundColor : '#262626',
        height: 75,
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
    }

});