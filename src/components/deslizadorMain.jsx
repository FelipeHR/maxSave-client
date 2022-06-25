import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StyledText from "./StyledText.jsx";
import Icon from 'react-native-vector-icons/FontAwesome5';


const DeslizadorMain = () => (
    <View style= {{ backgroundColor : '#262626',
        height: '10%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: 20,
        paddingRight: 20,
    }}>
        <View style= {{alignItems: 'center', justifyContent: 'center', width:'15%'}}>
        <Icon name="home" size={30} color="#fff" />
        </View>
        <View style= {{alignItems: 'center', justifyContent: 'center', width:'15%'}}>
        <Icon name="calendar-alt" size={30} color="#fff" />
        </View>
        <View style= {{alignItems: 'center', justifyContent: 'center', width:'15%'}}>
        <Icon name="plus-circle" size={40} color="#e13c33" />
        </View>
        <View style= {{alignItems: 'center', justifyContent: 'center', width:'15%'}}>
        <Icon name="coins" size={30} color="#fff" />
        </View>
        <View style= {{alignItems: 'center', justifyContent: 'center', width:'15%'}}>
        <Icon name="ellipsis-v" size={30} color="#fff" />
        </View>

    </View>
)

export default DeslizadorMain;