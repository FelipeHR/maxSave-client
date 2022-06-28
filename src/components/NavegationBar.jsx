import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../theme.js';
import { Colors } from "react-native/Libraries/NewAppScreen";


const NavegationBar = (props) => (
    <>
    <View style= { styles.container}>
        <View style= {styles.navegationIcon}>
            <Icon name="home" size={30} color={props.navegation == 'home' ? theme.colors.secondary : theme.colors.white} />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="calendar-alt" size={30} color={props.navegation == 'calendar' ? theme.colors.secondary : theme.colors.white} />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="plus-circle" size={45} color="#e13c33" />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="history" size={30} color={props.navegation == 'history' ? theme.colors.secondary : theme.colors.white} />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="ellipsis-v" size={30} color={props.navegation == 'options' ? theme.colors.secondary : theme.colors.white} />
        </View>

    </View>
    </>
)
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
export default NavegationBar;