import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import Icon from 'react-native-vector-icons/FontAwesome5';


const NavegationBar = () => (
    <>
    <View style= {styles.container}>
        <View style= {styles.navegationIcon}>
            <Icon name="home" size={30} color="#fff" />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="calendar-alt" size={30} color="#fff" />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="plus-circle" size={40} color="#e13c33" />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="coins" size={30} color="#fff" />
        </View>
        <View style= {styles.navegationIcon}>
            <Icon name="ellipsis-v" size={30} color="#fff" />
        </View>

    </View>
    </>
)
const styles = StyleSheet.create({
    navegationIcon: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        backgroundColor : '#262626',
        height: '10%',
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